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

    if (localDataSize > 0) {
        for (let i = 0; i < localDataSize; i++) {
            const localDataItem = localStorage.getItem(i);
            const accountnumber = localDataItem.substr(0, 11);
            const TypeOfAccount = localDataItem.substr(14, 22);
            const customername = localDataItem.substr(25);

            // var returnedarray = stringHelper(localDataItem);
            //  const accountnumber = returnedarray[0];
            //  const customername = returnedarray[1];
            //  const TypeOfAccount = returnedarray[2];

            const objAccount = {
                "AccountNumber": accountnumber,
                "CustomerName": customername,
                "TypeOfAccount": TypeOfAccount
            };
            addToList(objAccount);
        }
    } else {
        $.ajax({
            url: "data/customerData.json",
            type: "GET",
            dataType: "json",
        }).done(function (jsonData) {
            jsonData.forEach((customer) => {
                addAccount(customer);
            });
        }).fail(function (xhr, status, err) {
            alert("Error: " + status + " - " + err);
        }).always(function (xhr, status) {
            // alert( "The request is complete!" );
        });
    }

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

    // i tried to make a parser for the local storage item.
    function stringHelper(s) {
        var result = [];
        var i;
        var index = 0;
        var temp = "";
        for (i = 0; i <= s.length; i++) {

            if (s.charAt(i) == '|' || i == s.length) {
                result.push(s.charAt(i));
                temp = "";
            }
            temp += s.charAt(i);
        }
        return result;
    }

})