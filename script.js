let a = document.getElementById("he");
let b = document.getElementById("we");
let btn = document.getElementById("btn");
let bt = document.getElementsByClassName("bt")[0]; 
btn.addEventListener("click", function() {
    
    let height = parseFloat(a.value);  
    let weight = parseFloat(b.value);  
    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid numbers for height and weight.");
        return;
    }


    let meter = height / 100.0;
    let BMI = weight / (meter * meter);


    let elem = document.createElement("div");
    elem.setAttribute("id", "myDiv");
    elem.innerHTML = `<h2>Your BMI</h2><h4>${BMI.toFixed(2)}</h4>`; 

   
    let color;
    if (BMI < 18.5) {
        color = "yellow"; 
    } else if (BMI >= 18.5 && BMI < 24.9) {
        color = "green";  
    } else {
        color = "red";     
    }

    elem.style.color = color;
    elem.style.padding = "10px";  
    elem.style.borderRadius = "5px";  
    elem.style.marginTop = "10px";  

 
    bt.parentNode.appendChild(elem); 
});
