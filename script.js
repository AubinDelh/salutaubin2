// Changer la taille du texte
document.getElementById('tailleTexte').addEventListener('input', function() {
    document.getElementById('texte').style.fontSize = this.value + 'pt';
});

// Changer la fonte du texte
document.getElementById('selectFonte').addEventListener('change', function() {
    document.getElementById('texte').style.fontFamily = this.value;
});

// Inverser les couleurs
document.getElementById('btnInverserCouleurs').addEventListener('click', function() {
    let body = document.body;
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
});
