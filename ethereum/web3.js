import Web3 from 'web3';

let web3;
//let ables us to redefine the var
//use typeof to che check if variable is undefined
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') { //this basically checks if we are onr the server or on the browser
	//we are in the browser or check if user is running matamask
	web3 = new Web3(window.web3.currentProvider);
} else{
	//we are on the server or the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
			'https://rinkeby.infura.io/v3/460b33559b7746e28fafaf8905bfd73f'
		);
	web3 = new Web3(provider);
}
export default web3;