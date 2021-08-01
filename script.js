const h2 = document.createElement("h2");
h2.textContent="";

document.querySelector("body").appendChild(h2);


let first=document.getElementById("firsttext");

first.addEventListener("mouseover", function(e) {
    e.target.style.color="yellow";

    setTimeout(function() {
        e.target.style.color="";
    }, 500)
}, false);




/*firsttext.addEventListener('mouseover', function(){
    header.style.width = '200px';
    header.style.height = '300px';
})
*/


