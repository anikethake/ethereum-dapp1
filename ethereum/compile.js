const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
//fs -> file system module

//delete the entire build folder if it already exists
//get reference to the build module. __dirname gets us into ethereum dir
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//read campaign.sol from contracts folder
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf-8');

const output = solc.compile(source,1).contracts;
//the output consists two objects. one from the Campaign contract and 
//other from the CampaignFactory
//.contracts is the property that we are interested in

console.log(output);
//make sure we create the build dir
fs.ensureDirSync(buildPath);

//console.log(output);

//loop over the files and write the o/p to two seperate files
//this is a for in loop, that is used to loop over the keys
//here the contract variable is :Campaign and :CampaignFactory
for (let contract in output) {
	fs.outputJsonSync(
		path.resolve(buildPath, contract.replace(':','') + '.json'), //create the .json file
		output[contract] //actual contents that we write to the json file
	);
}

