window.addEventListener("keydown", function(e){
    const ascii = document.getElementById("display");
    const input = document.getElementById("display_input");
    ascii.innerHTML = e.keyCode;
    input.innerHTML = e.key;
    


});