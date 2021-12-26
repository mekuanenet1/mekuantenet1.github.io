window.onload = fetchBooks;

function fetchBooks() {
    $("#submit").click(addBook);

    fetch('https://elibraryrestapi.herokuapp.com/elibrary/api/book/list')
        .then(res => res.json()) //returns JSON object wrapped in a Promise
        .then(response => { //response will be a JSON object
            populateTable(response);
        });
}


function populateTable(response) {
    var tablebody = $("#tablebody");
    
    for (i = 0; i < response.length; i++) {
        var item = response[i];
        tablebody.append("<tr><td>" + item.bookId + "</td><td>" + item.isbn +
            "</td><td>" + item.title + "</td><td>" + item.overdueFee + "</td><td>"
            + item.publisher + "</td><td>" + item.datePublished + "</td></tr>");
    }
}

function addBook() {
    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
        method: "post",
        body: "{\"bookId\":34333,\"isbn\":\"234-58765\",\"title\":\"Fikir Eske Mekabir 2\",\"overdueFee\":2.75,\"publisher\":\"Kokeb\",\"datePublished\":\"1930-03-30\"}",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res => res.json())
        .then(response => {
            console.log("Success: ", JSON.stringify(response));
        })
        .catch(error => console.log("Error: ", error));
}



