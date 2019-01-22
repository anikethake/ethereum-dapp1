import React, {Component} from 'react';
import {Button, Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component{

	static async getInitialProps(props) {
		const {address} = props.query;
		//get total number of requests
		const campaign = Campaign(address);
		const requestCount = await campaign.methods.getRequestCount().call();
		const approversCount = await campaign.methods.approversCount().call();

		//fancy JS
		const requests = await Promise.all(
				Array(parseInt(requestCount))
				.fill()
				.map((element,index) => {
					return campaign.methods.requests(index).call();
				})
			);
		//console.log(requests);

		return {address, requests, requestCount, approversCount};
	}

	//iterate over row of requests
	renderRow() {
		return this.props.requests.map((request, index) => {
			return <RequestRow
				key={index}
				id={index}
				request={request}
				address={this.props.address}
				approversCount = {this.props.approversCount}
			/>
		});
	}

	render() {
		const {Header, Row, HeaderCell, Body} = Table;

		return(
				<Layout>
					<h3> Pending Requests</h3>
					<Link route={`/campaigns/${this.props.address}/requests/new`}>
						<a>
							<Button primary floated="right" style={{marginBottom:10}}>Create a new spending request`</Button>
						</a>
					</Link>
					<Table>
						<Header>
							<Row>
								<HeaderCell>ID</HeaderCell>
								<HeaderCell>Description</HeaderCell>
								<HeaderCell>Amount</HeaderCell>
								<HeaderCell>Recipient</HeaderCell>
								<HeaderCell>Approval Count</HeaderCell>
								<HeaderCell>Approve</HeaderCell>
								<HeaderCell>Finalize</HeaderCell>
							</Row>
						</Header>
						<Body>
							{this.renderRow()}
						</Body>
					</Table>
					<div>Found {this.props.requestCount} requests</div>
				</Layout>
			);
	}	
}

export default RequestIndex;