// declaration de variables
// methode Array.from afin de mettre le contenu de la variable dans un tableau
const onglets = Array.from(document.querySelectorAll(".onglets"));
// console.log(onglets);
const contenus = Array.from(document.querySelectorAll(".contenus"));
// console.log(contenus);

// fonction pour donner la class active-onglets selon le click d'un des elements
onglets.forEach((onglet) => {
    onglet.addEventListener("click", (e) => {
        for (let i = 0; i < onglets.length; i++) {
            // on donne la class a l'element selectionné target
            if (onglets[i] === e.target) {
                // message dans la console pour se situer
                onglets[i].classList.add("active-onglets");
                console.log(onglets[i]);
            }
            // on retire la class a l'element selectionné target
            else {
                onglets[i].classList.remove("active-onglets");
            }
        }
        // voir l'index de l'element sur lequel on a cliqué dans le tableau
        console.log(onglets.indexOf(e.target));

        for (let i = 0; i < contenus.length; i++) {
            // on donne la class a l'element selectionné target
            if (i === onglets.indexOf(e.target)) {
                // message dans la console pour se situer
                contenus[i].classList.add("active-contenus");
                console.log(contenus[i]);
            }
            // on retire la class a l'element selectionné target
            else {
                contenus[i].classList.remove("active-contenus");
            }
        }
    });
});