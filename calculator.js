
function calculate() {
    try
    {
    var a= parseInt(document.getElementById('A').value);
    var b= parseInt(document.getElementById('B').value);
    var Oper = document.getElementById('operator').value;
    var result;

   
    if (Oper === '+') {
        result = a + b;
    } else if (Oper === '-') {
        result = a - b;
    } else if (Oper === '*') {
        result = a * b;
    } else if (Oper === '/') {
        result = a / b;
    } else if (Oper === '%') {
        result = a % b;
    }

    document.getElementById('result').value = result;
} catch (err) {
    alert("There was a problem: " + err.message);
}
function resetForm() {
    document.getElementById('myForm').reset();
}
  
}
    
   

