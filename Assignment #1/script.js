// Alert Nmbers
document.getElementById("alertName").onclick = function() {
        var val = prompt("Enter Your Value")
        alert(val)
        orignalstmnt.innerHTML = "alert(" + "'" + val + "'" + ")";
        outputs.innerHTML = "Your Input Value is " + val;

    }
    // Show Variables
document.getElementById("showVariablename").onclick = function() {
        var varname = "<li>A variable can't contain any spaces</li> <br><li> A variable name contain only letters,numbers,dollor signs and underscores</li> <br><li> Though a variable name can't be any of javascript </li>"
        outputs.style.textAlign = "left";
        outputs.style.paddingLeft = "50px";
        outputs.innerHTML = varname;
    }
    // Show CamleCase 
document.getElementById("ShowCamlcase").onclick = function() {
        var camlecase = "<li>User</li> <br><li>UserResponse</li> <br><li>UserResponseTime</li><li>UserResponseTime</li>"
        outputs.style.textAlign = "left";
        outputs.style.paddingLeft = "50px";
        outputs.innerHTML = camlecase;
    }
    // Sum Of Two Numbers
document.getElementById("sumof2").onclick = function() {
        let num1 = 15;
        let num2 = 5;
        let sum = num1 + num2;
        orignalstmnt.innerHTML = "Let num1 = " + num1 + "<br>" + "Let num2 = " + num2 + "<br>" + "Let Sum =" + "num1 + num2";
        outputs.innerHTML = "Sum Of Two Numbers is " + sum;

    }
    // Subtraction Of Two Numbers
document.getElementById("subof2").onclick = function() {
        let sub1 = 15;
        let sub2 = 5;
        let sub = sub1 - sub2;
        orignalstmnt.innerHTML = "Let sub1 = " + sub1 + "<br>" + "Let sub2 = " + sub2 + "<br>" + "Let sub =" + "sub1 - sub2";
        outputs.innerHTML = "Subtraction Of Two Numbers is " + sub;
    }
    // Mutliplication Of Two Numbers
document.getElementById("mulof2").onclick = function() {
        let mul1 = 15;
        let mul2 = 5;
        let mul = mul1 * mul2;
        orignalstmnt.innerHTML = "Let mul1 = " + mul1 + "<br>" + "Let mul2 = " + mul2 + "<br>" + "Let mul =" + "mul1 * mul2";
        outputs.innerHTML = "Multiplication Of Two Numbers is " + mul;
    }
    // Division Of Two Numbers
document.getElementById("divide").onclick = function() {
        let dividen1 = 15;
        let dividen2 = 5;
        let devideNumber = dividen1 / dividen2;
        orignalstmnt.innerHTML = "Let dividen1 = " + dividen1 + "<br>" + "Let dividen2 = " + dividen2 + "<br>" + "Let devideNumber =" + "dividen1 / dividen2";
        outputs.innerHTML = "Multiplication Of Two Numbers is " + devideNumber;
    }
    // Calculation Of Numbers
document.getElementById("SomeCal").onclick = function() {
    let a = 36
    let b = 6
    let c = a / b
    let d = 3
    let f = c * d
    let g = 2
    let h = f + g
    let i = 4
    let j = h ** i
    let k = 3
    let l = k - j
    let m = 5
    var someCalculation = l + m
    var someCalculation1 = a / b * d + g ** i - (k + m);
    var someCalculation = a + "/" + b + "*" + d + "+" + g + "**" + i + "-" + "(k  +  m)";
    orignalstmnt.innerHTML = "Let someCalculation = " + someCalculation;
    outputs.innerHTML = "Calculations Of Some Numbers is " + someCalculation1;
}
document.getElementById("clearstmnt").onclick = function() {
    orignalstmnt.innerText = "";
}
document.getElementById("clroutput").onclick = function() {

    outputs.innerHTML = "";
}