$("#createbutton").click(addStudent);

function addStudent() {
    var studentId = $("#studentid").val();
    var studentName = $("#studentname").val();


    var list = $("#list");
    var itemToAdd = studentId + " - " + studentName;
    list.append("<li class='list-group-item'>" + itemToAdd + "</li>");
    $("#form")[0].reset();

}

function display_ct() {
    var x = new Date();
    document.getElementById('date').innerHTML = x;   
}

mytime = setInterval(display_ct);