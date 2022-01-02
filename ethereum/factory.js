import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xCB0FFc345cb770Dbf3A50dDf6eFC10AFd8dDef7C'
);

export default instance;