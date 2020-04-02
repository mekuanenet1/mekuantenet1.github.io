// 6.....................................................................................
var count = {
    counter: 0,
    add: function () {
        this.counter++;
    },
    reset: function () {
        this.counter = 0;
    }
}
// 7.....................................................................................
// The free variable is "counter"
// Free variables are neither declared within the function nor passed in as a parameter to the closure function

// 8.......................................................................................
var make_adder = function (inc) {
    var counter = 0;
    var incremenet = inc;
    return function () {
        counter = counter + incremenet;
    }
}

// 9.....................................................................................
    (function () {
        InnerCodeHERE
    })();
// 10......................................................................................
var employee = (
	function()
	{
		var name;
		var age;
		var salary;
		
		function setAge(newAge)
		{
			age = newAge;
			console.log("setting age: " + age);
		}
		
		function setSalary(newSalary)
		{
			salary = newSalary;
			console.log("setting salary: " + salary);
		}
		
		function setName(newName)
		{
			name = newName;
			console.log("setting nae: " + name);
		}
		
		function getAge()
		{
			return age;
		}
		
		function getSalary()
		{
			return salary;
		}
		
		function getName()
		{
			return name;
		}
		
		function increaseSalary(percentage)
		{
			var currentSalary = getSalary();
			var increasedSalary = currentSalary + (currentSalary * (percentage/100));
			setSalary(increasedSalary);
			console.log("increasing salary to: " + increasedSalary);
		}
		
		function incrementAge()
		{
			age = getAge() + 1;
			console.log("increasing age by 1 to:" + age);
		}
		
		return {
			setAgePublic: setAge,
			setSalaryPublic: setSalary,
			setNamePublic: setName,
			increaseSalaryPublic: increaseSalary,
			incrementAgePublic: incrementAge
		};
	}
)();
// 11..................................................................................

var employee = (
    function () {
        var name;
        var age;
        var salary;
        var address;

        function setAge(newAge) {
            age = newAge;
            console.log("setting age: " + age);
        }

        function setSalary(newSalary) {
            salary = newSalary;
            console.log("setting salary: " + salary);
        }

        function setName(newName) {
            name = newName;
            console.log("setting nae: " + name);
        }

        function setAddress(newAddress) {
            address = newAddress;
        }

        function getAge() {
            return age;
        }

        function getSalary() {
            return salary;
        }

        function getName() {
            return name;
        }

        function getAddress() {
            return address;
        }

        function increaseSalary(percentage) {
            var currentSalary = getSalary();
            var increasedSalary = currentSalary + (currentSalary * (percentage / 100));
            setSalary(increasedSalary);
            console.log("increasing salary to: " + increasedSalary);
        }

        function incrementAge() {
            age = getAge() + 1;
            console.log("increasing age by 1 to:" + age);
        }

        return {
            address: address,
            setAge: setAge,
            setSalary: setSalary,
            setName: setName,
            increaseSalary: increaseSalary,
            incrementAge: incrementAge,
            setAddress: setAddress,
            getAddress: getAddress
        };
    }
)();