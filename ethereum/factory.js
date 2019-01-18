import web3 from './web3';
import CampaignFactory from './build/campaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x3040c40C37d7C4a4c61F696EC2265fDDB8958Aa2'
	);

export default instance;