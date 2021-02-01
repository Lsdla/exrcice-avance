var h4 = document.querySelectorAll("h4");

for (var i = 0; i < h4.length; i++) {
    h4[i].addEventListener("click", function () { //addEventListener est une méthode suivie d'un type d'événement à écouter puis la fonction
        var details = this.nextElementSibling;
        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    })
}



var button = document.getElementById("btn-random");
var apprenant = ["Jérémy", "Charalambos", "Abdoulaye", "Asad", "Charles", "David", "Denis", "Fodie", "Jonathan", "Mohamed", "Farima", "Adil", "Alexis", "Ayoub", "Lyes", "Elyesse", "Bamba", "Caroline", "Gaëlle", "Jules", "Lobna", "Kévin", "Maëlys", "Muhammad", "Nasser"];

var afficheUnNom = button.addEventListener("click", function() {
    
    var random = apprenant[Math.floor(Math.random() * apprenant.length)];
    button.textContent = random;
})

