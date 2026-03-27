function options(start, end) {
    let output = "";
    for (let year = start; year <= end; year++) {
        output += `<option value="${year}">${year}</option>`;
    }
    document.getElementById("option").innerHTML = output;
}
options(1900, 2026);

document.getElementById("option").onchange = function age(){
    var option = document.getElementById("option").value;
    if(option >= 2010){
        document.getElementById("h1").innerHTML ="Sorry, you're under age";
    }
    else{
        document.getElementById("h1").innerHTML ="Welcome";
    }
}