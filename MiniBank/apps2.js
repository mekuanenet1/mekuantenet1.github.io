"use strict"

$(document).ready(function () {

    var ul = $("#mylist")[0];

    $("#form").on("submit", function (event) {

        event.preventDefault();
        const accountnumber = $("#accountno").val();
        const customername = $("#customername").val();
        const TypeOfAccount = $("#accounttype").val();
        const objNewAccount = {
            "AccountNumber": accountnumber,
            "TypeOfAccount": TypeOfAccount,
            "CustomerName": customername
        };

        addAccount(objNewAccount);
        $("#accountno").val("");
        $("#customername").val("");

    });

    const localDataSize = localStorage.length;


    const addAccount = function (Customer) {
        addToList(Customer);
        addToLocal(Customer);
    }

    function addToList(customer) {
        var li = document.createElement("li");
        li.style.border = "1px solid black";
        li.style.fontSize = "1.5em";
        li.style.height = "2em";
        li.style.borderRadius = "5px";
        var text = customer.AccountNumber + " | " + customer.TypeOfAccount + " | " + customer.CustomerName;
        li.appendChild(document.createTextNode(text));
        ul.appendChild(li);
    }


    const addToLocal = function (customer) {
        let idx = localStorage.length;
        localStorage.setItem(idx, customer.AccountNumber + " | " + customer.TypeOfAccount + " | " + customer.CustomerName);
    }


})