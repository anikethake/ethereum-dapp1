const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory; //reference to the deployed instance of the factory
let campaignAddress;//
let campaign;//


beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
	.deploy({ data:compiledFactory.bytecode })
	.send({ from:accounts[0], gas: '1000000' });

	await factory.methods.createCampaign('100').send({ 
		from:accounts[0],
		gas: '1000000' 
	}); //100 wei

	//new ES16 syntax
	[campaignAddress] = await factory.methods.getDeployedCampaigns().call();
	// or campaignAddress = addresses[0];

	campaign = await new web3.eth.Contract(
		JSON.parse(compiledCampaign.interface),
		campaignAddress
		);
});

describe('Campaigns', () => {

	//make sure factory and campaign were sussessfully deployed
	//this can be made sure by getting the addresses
	it('deploys a fcatory and campaign', () => {
		assert.ok(factory.options.address);
		assert.ok(campaign.options.address);
	});

	//make sure acounts[0] is the manager who created the campaign. refer above code
	it('marks caller as the camapign manager', async () => {
		/*whenever we make a public variable inside of our
		contract a get method is automatically created. SO here the
		manager is not an actual function but rather a oublic variable but manager()
		was automatically created
		*/
		const manager = await campaign.methods.manager().call();
		assert.equal(accounts[0], manager);
	});

    //make sure people are able to donate money
    it('Allows people to contribute money and marks them as approvers', async () => {
    	await campaign.methods.contribute().send({
    		value: '200',
    		from: accounts[1]
    	});
    	const isContributor = await campaign.methods.approvers(accounts[1]).call();
    	//isCOntributor is going to be a bool value
    	assert(isContributor);
    });

    it('Requires a minimum contribution', async () => {
    	try {
    		await campaign.methods.contribute().send({
    			value: '5', 
    			from: accounts[1]
    		});
    		//this must result into an error since we sent less than 100 wei and
    		//it should be caught.
    		assert(false);
    	} catch(e) {
    		assert(e);
    	}
    });

    //manager has the ability to request money
    it('Allows a manager to make a payment request', async () => {
    	//refer createRequest()
    	await campaign.methods.createRequest('Buy Sensors', '100', accounts[1]).send({
    		from:accounts[0],
    		gas: '1000000'
    	});
    	const request = await campaign.methods.requests(0).call();
    	//will return the request object since it is a struct
    	//we are just checking one parameter
    	assert.equal('Buy Sensors', request.description);
    });

    //
    it('Processes request', async () => {
    	await campaign.methods.contribute().send({
    		from:accounts[0],
    		value: web3.utils.toWei('10','ether')
    	});

    	await campaign.methods
    		.createRequest('Buy some inventory', web3.utils.toWei('5','ether'),accounts[1])
    		.send({
    			from:accounts[0],
    			gas:'1000000'
    		});

    	//now the request must be approved. 0 is the index of the request
    	await campaign.methods.approveRequest(0).send({
    		from:accounts[0],
    		gas:'1000000'
    	});

    	//only manager has the authority to finalize the request
    	await campaign.methods.finalizeRequest(0).send({
    		from: accounts[0],
    		gas:'1000000'
    	});

    	//retrive balance
    	//this returns string
    	let balance = await web3.eth.getBalance(accounts[1]);
    	balance = web3.utils.fromWei(balance, 'ether');
    	balance = parseFloat(balance);
    	console.log(balance);
    	assert(balance > 104);

    });	


});



