$("#createbutton").click(createAccount);

function createAccount()
{
	var accountNo = $("#accountNo").val();
	var customerName = $("#name").val();
	var accountType = $("#accounttype option:selected").text();
	
	var list = $("#list");
	var itemToAdd = accountNo + " | " + customerName + " | " + accountType;
	list.append("<li class='list-group-item'>" + itemToAdd + "</li>");
	$("#myform")[0].reset();
}