$("#submit").click(addCensus);
$("#reset").click(reset);

function addCensus()
{
	var fullName = $("#fullname").val();
	var citizenId = $("#citizenid").val();
	var state = $("#state").val();
	var social = $("#social").val();	
	var senior = $("#senior option:selected").text();

	var list = $("#list");
	var itemToAdd = citizenId + social + fullName + state + senior;
	list.append("<li class='list-group-item'>" + itemToAdd + "</li>");
}


function reset()
{
	$("#myform")[0].reset();
}


function display_ct() {
    var x = new Date();
    document.getElementById('date').innerHTML = x;   
}

mytime = setInterval(display_ct);