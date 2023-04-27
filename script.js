/* Essam Alsaud 1636456 */
function DisplayAlert() {
    alert("Name: Essam Alsaud \nID: 1636456");
}
function f(n) {
    if (n == 0) {
        return 1
    } else {
        return f(n - 1) * n
    }
}
console.log("Factorial 4 is: " + f(4))

function FactorialBtn(){
let number = document.getElementById("num").value;

alert("The Factorial of "+number+" is : "+f(number));
}

function getAge() {
    var userinput = document.getElementById("date").value;
    var dob = new Date(userinput);
    if (userinput == null || userinput == '') {
        alert("Wrong Entery!")
    } else {
        var month_diff = Date.now() - dob.getTime();

        var age_date = new Date(month_diff);

        var year = age_date.getUTCFullYear();

        var age = Math.abs(year - 1970);
        if (age == 0) {
            alert("Your Age is less than 1 Year old")
        } else {

            alert("Your Age is: " + age + " Years old");
        }


    }
}

