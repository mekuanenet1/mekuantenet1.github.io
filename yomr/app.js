// ------------------Enhanced for loop ----------------------

// var objects = [];

// objects.push(1);
// objects.push('kk')
// objects.push(2);
// objects.push('3')
// objects.push(1);
// objects.push('3')

// for(let object of objects){
//         console.log(object);
// }

// var cars = ["Saab", "Volvo", "BMW", 55];
// for(let car of cars)
// {
//     console.log(car);
// }


// ------------------if else ---------------

// var i = 2; //true
// var i = "t"; //true
// var i = undefined //false
// var i = null // false;
// var i = false //false
// var i = {} // true

// var k = {};
// if(k){
//     console.log("k is true ")
// }
// ----output---

// k is true



// -------------------array-------------------


// var objects=['apple','banana','orange',89];

// console.log(objects[0])// apple



// ------------------function-----------------------


var a = 10;
var b = 20;
function add(a, b) {
    console.log(a + b);
}

add(a, b);

// ------------------multiple argument function in js-------------
function sumAll() {

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5, 5, 6, 6, 7));

// --------------------js neasted function 
function nested() {
    function insidenested() {
        console.log("i am inside neasted function");
    }
    insidenested();

    console.log("i am neasted function");
}


nested();

// ------------------------- salf calling ----------------

(function selfCall() {
    console.log('I am calling my self');
})();


//----------------------- passing function as a paramaeter --------

// function functionParameter(a,b,func){
//         func(a,b);
//         console.log(num);
// }

function add(a, b) {
    console.log(a + b);
}

// functionParameter(10,20,add);


//------------------------ arrow function ----------------



//function (a, b, func) {
//     func(a, b);
// }


// functionParameter(10, 20, (a, b) => { console.log(a + b) });


let add2 = (a, b) => { console.log(a + b) };

add2(10, 9);


// --------------------- array  ----------------

// ERROR
// let numbers = [1,2,3,4,4,5,5,6,6];

// let odd = (numberss)=>{
//     return numberss.forEach(element => {
//         element%2!=0;
//     });
// }

// numbers.prototype.odd();




// ----------------------- JAVASCCRIPT Object Notation(JSON) ----------------------------   This is Mandatory! very Important !


let person = { 'name': 'yome', age: '24' };

console.log(person.age);

person.age = 23;

console.log(person.age);


let documentt = {
    html: {
        'head': {},
        body: {
            img: {
                src: './jkj.jpg',
                alt: 'jkl image'
            }
        }
    }
};

console.log(documentt.html);


var address = { 
	street: 'Main Street', 
	'number': 1000, 
	apartment: { 
		'floor': 3, 
		'number': 301 
	} 
    }

    console.log(address.apartment.number)



    // -----------------------window object example -----------------

    // ----------------------------------------set TimeoutExample -------------------


// window.setTimeout(()=>{console.log('hi')},5000);   // hi wll be printed on console after 5 sec 
setTimeout(()=>{console.log('i am timeout')},3000);   // hi wll be printed on console after 5 sec 

    // ----------------------------------------setImmediete -------------------
// setInterval(()=>{console.log('i am interval ')},3000);   // hi wll be printed on console every 3 sec 
function add(a,b,...more){
    var reuslt = 0;
    
    console.log(result = a +b);
}
add(40,59);