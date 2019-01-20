import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {

	state = {
		value: '',
		errorMessage:'',
		loading:false
	};

	onSubmit = async event => {
		event.preventDefault();
		const campaign = Campaign(this.props.address);
		//this.props.address is coming from show.js
		var value = web3.utils.toWei(this.state.value, 'ether');
		var token = web3.utils.toBN(value);
		this.setState({loading:true});
		try {
			const accounts = await web3.eth.getAccounts();
			await campaign.methods.contribute().send({
				from:accounts[0],
				value: token
			});
			Router.replaceRoute(`/campaigns/${this.props.address}`); 
		} catch(e) {
			this.setState({errorMessage:e.message});
		}
		this.setState({loading:false, value:''});
	};


	render() {
		return(
				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Field>
						<label>Amount to Contribute</label>
						<Input 
						value={this.state.value}
						onChange={event => this.setState({value:event.target.value})}
						label="ETH"
						labelPosi tion="right"
						/>
					</Form.Field>
					<Message error header="OOPS!" content={this.state.errorMessage}></Message>
					<Button primary loading={this.state.loading}>
						Contribute
					</Button>
				</Form>
			);
	}
}

export default ContributeForm;