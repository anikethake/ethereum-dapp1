const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
//const { interface, bytecode } = require('./compile');
const compiledFactory = require('./build/campaignFactory.json');

const provider = new HDWalletProvider(
	'drink until news dish poet minute game betray negative auction vicious top',
	'https://rinkeby.infura.io/v3/460b33559b7746e28fafaf8905bfd73f'
	);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempt to deploy from account=>',accounts[0]);
	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data:compiledFactory.bytecode })
		.send({ gas: '1000000', from: accounts[0] })

		console.log("Contract got deployed to=>",result.options.address);
};
deploy();

//contract address of deployed factory ->  0x3040c40C37d7C4a4c61F696EC2265fDDB8958Aa2