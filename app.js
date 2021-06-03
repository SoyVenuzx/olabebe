
let si = document.getElementById('Si');

si.addEventListener("click", function(e) {
    alert("ahora somos nobios, teamooo<33");

    document.getElementById("par").style.display = "block";
});

let no = document.getElementById('No');

no.addEventListener("mousemove", function(e) {
    let x = Math.round(Math.random() * 93);
    let y = Math.round(Math.random() * 93);

    no.style.left = x+"%";
    no.style.top = y+"%";
});