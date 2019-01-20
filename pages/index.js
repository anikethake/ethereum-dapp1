import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
//.. means up one dir
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';


class CampaignIndex extends Component {

	
	static async getInitialProps() {
		const campaigns = await factory.methods.getDeployedCampaigns().call();
		return  { campaigns };
	}

	renderCampaigns() {
		
		//iterate through the address
		const items = this.props.campaigns.map(address => {
			return {
				header: address,
				description: <p>Create by:<br/>
								<Link route={`/campaigns/${address}`}>
									<a>
							 			View Campaign`
							 		</a>
								</Link>
							 </p>,
							fluid:true
			};
		});
		return <Card.Group items={items} />;
	}	

	// async componentDidMount() {
	// 	//const campaigns = await factory.methods.getDeployedCampaigns().call();
	// 	console.log(campaigns);
	// }

	//JSX
	render() {
		//return <div>Address of the campaign-> { this.props.campaigns[0] }</div>;
		return(
			<Layout>
			<div>
			
			<h2>Open Campaigns</h2>
			<Link route="/campaigns/new">
				<a>
					<Button floated="right"
					content="Create Campaign"
					icon="add circle"
					primary 
					/>
				</a>
			</Link>
			
			{ this.renderCampaigns() }
			</div>
			</Layout>
			); 
		}
	}

	export default CampaignIndex;

