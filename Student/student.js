"use strict";

$(document).ready(function () {
    
    $("#submitbutton").click(function (event) {
        const studentId = $("#studentid").val();
        const firstName = $("#fname").val();
        const objNewStudent = {
            "studentId": studentId,
            "firstName": firstName,
        };
        add(objNewStudent);
        $("#studentid").val("");
        $("#fname").val("");
    });

    var ul = $("#mylist")[0];

    // const localDataSize = localStorage.length;

    function addToList(student) {
        var li = document.createElement("li");
        li.style.border = "1px solid black";
        li.style.fontSize = "1.5em";
        li.style.height = "2em";
        li.style.borderRadius = "5px";
        var text = student.studentId + " - " + student.firstName;
        li.appendChild(document.createTextNode(text));
        ul.appendChild(li);

    }
    function add(student) {
        addToList(student);        
    }  

});