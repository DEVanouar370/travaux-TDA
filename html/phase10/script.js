function valideForm() {
    var erreur;
    var votrenom = document.getElementById("votrenom");
    var votreprenom = document.getElementById("votreprenom");
    var date = document.getElementById("date");
    var cp = document.getElementById("cp");
    var adresse = document.getElementById("adresse");
    var ville = document.getElementById("ville");
    var email = document.getElementById("email");

    if (!votrenom.value) {
        alert("veuillez renseigner un nom");
        return false;
    }
    if (!votreprenom.value) {
        alert("veuillez renseigner un prenom");
        return false;
    }
    if (!date.value) {
        alert("veuillez renseigner une date");
        return false;
    }
    var filtreCP = new RegExp(/^[0-9]{5}$/);
    if (!filtreCP.test(cp.value)) {
        alert("veuillez renseigner un code postal valide");
        return false;
    }
    if (!adresse.value) {
        alert("veuillez renseigner votre adresse");
        return false;
    }
    if (!ville.value) {
        alert("veuillez renseigner une ville");
        return false;
    }
    var filtreEmail = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]$');
    if (!filtreEmail.test(email.value)) {
        alert("veuillez renseigner un email valide");
        return false;
    }



    alert('formulaire envoye !');
    return true;
};