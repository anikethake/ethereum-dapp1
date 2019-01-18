pragma solidity ^0.4.16;

contract campaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        //create a new instance of Campaign contract.
        //msg.sender is the user who is creating the new campaign and not the factory creator
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns(address[]) {
        return deployedCampaigns;
    }
}

contract Campaign{
    //this is a struct definition
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    //modifier
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    //the minimumContribution value will be in terms of wei
    function Campaign(uint minimum, address creator) public {
        //who is attempting to create the contract
        manager = creator;
        minimumContribution = minimum;
    }
    
    //payable makes this function to receive some amount of money
    function contribute() public payable {
        require(msg.value > minimumContribution);
        //add to the approvers list when minimumContribution is satisfied
        //approvers.push(msg.sender);
        //add to the approvers mapping when minimumContribution is satisfied
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount:0
        });
        
        requests.push(newRequest);
    }
    
    //index of the request
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        //make sure the person has donated
        require(approvers[msg.sender]);
        //! if the person has voted kick him out of this function
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        //add the person's address to approvals
        request.approvalCount++;
    }
    
    //finalize 
    function finalizeRequest(uint index) public restricted{
        Request storage request = requests[index];
        require(request.approvalCount > (approversCount / 2));
        require(!requests[index].complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }
}