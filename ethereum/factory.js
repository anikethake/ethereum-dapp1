import web3 from './web3';
import CampaignFactory from './build/campaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0xaa380DB33187ad9ff49D64aa7d74EE021A099a26' //address of campaignFactory
	);

export default instance;