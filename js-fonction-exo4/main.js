// # Fonction 
// ## introduction 
// - Une fonction correspond à un bloc de code nommé et réutilisable et dont le but est d’effectuer une tâche précise.

// ### Exercice 1
// - créer une fonction qui va renvoyer via un console.log "bonjour"
let myFunction = () => {
    return console.log("Bonjour");
}
myFunction()
// ### Exercice 2
// - créer une fonction qui va faire le calcule " 5 + 5 " et va retourner le résultat de ce calcul via un console.log
// - appelle la fonction
let addition = (a, b) => {
    return console.log(a + b);
}
addition(5, 5)
// ### Exercice 3
// - créer une fonction qui va prendre un parametre "prenom", la fonction consiste à retourner via un console.log "bonjour + prenom"
// - appelle la fonction
let bonjour = (prenom) => {
    return console.log(`Bonjour ${prenom} `);
}
bonjour("Alexis");
// ### Exercice 4 
// - créer une fonction qui prendre trois parametres. 
// - elle va retourner via un console.log les types des éléments passer en parametres. 
// - appelle la fonction
let typeOfElement = (a, b, c) => {
    return console.log(`${typeof a} \n ${typeof b} \n ${typeof c}`)
}
typeOfElement([], {}, '')
// ## Exercice logique 
// #### Exercice 1
// - Créé une fonction qui va choisir un nombre au hasard entre 1 et 20. 
// Le joueur a 5 essais pour trouver le nombre.
// - Si le joueur est a 5 unités de plus que la réponse, la fonction doit renvoyer "Froid".
// - Si le joueur est à 5 unités ou moins de la bonne réponse alors la fonction doit renvoyer "tiède".
// - Si le joueur est à 2 unités = "chaud".
// - Si le joueur est à 1 unités = "Burlant".
// - Si le joueur échoue à trouver le nombre au bout de 5essaies, la fonction indique que la partie est terminée.
// - Si le joueur trouve la bonne réponse, la boucle s'arrette et la fonction indique que le joueur a gagné
let justeNombre = () => {
    let nombreEssai = 0
    let randomNumber = (Math.round(Math.random() * 18 + 1))
    let response;
    do {
        response = prompt("Trouve un chiffre ui se trouve entre 1 et 20");
        nombreEssai++;

        if ((response - randomNumber <= 1 && response - randomNumber >= -1) && response != randomNumber) {
            alert("Brulant");
        }

        else if ((response - randomNumber <= 2 && response - randomNumber >= -2) && response != randomNumber) {
            alert("Chaud");
        }

        else if ((response - randomNumber > 5) && response != randomNumber) {
            alert("Froid");
        }

        else if ((response - randomNumber <= 5 && response - randomNumber >= -5) && response != randomNumber) {
            alert("Tiède");
        }

    } while (nombreEssai <= 4 && randomNumber != response);

    if (nombreEssai == 5) {
        return alert("Tu as perdu la partie est terminée");
    }

    if (response == randomNumber) {
        return alert("Le joueur a gagné");
    }
}
justeNombre();
// #### Exercice 2
// - Créer un tableau avec différents elements dedans(String,integer,Boolean)
let arr = ["bONJOUR", 5, true]
// - Créer une fonction qui :
//   - met la premier lettre des strings en majuscule et le reste en minuscule.(peu importe comment les noms sont ecris)
//   - retourne le carré des integers.
//   - retourne le contraire du boolean.
let trouNoir = () => {
    arr.forEach((e,j, arr) => {
        switch (typeof e) {
            case "string":
                arr[j] = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
                break;
            case "number":
                arr[j] = e ** 2;
                break;
            case "boolean":
                e == true ? arr[j] = false : arr[j] = true;
                break;
            default:
                alert("Tu as entré un ovni")
                break;
        }
    })
}

console.log(trouNoir());
console.log(arr);
// #### Exerice 3 
// - Créer une fonction avec deux paramètres (prenom, salaire) qui demande à l'utilisateur de classer différents types de personne en fonction de leurs salaires.
// - Créér trois tableaux :
//     - "moinMoyenne" pour les salaires en dessous de la moyenne(<1600 euro)
//     - "moyenne" pour les salaires dans la moyenne (entre 1600 et 1800 euro)
//     - "plusMoyenne" pour les salaires au-dessus de la moyenne (>1800)
// - Trie les prénoms des personnes en fonction des salaires et affiche les tableaux.
let moinMoyenne = [], moyenne = [], plusMoyenne = [];
let proofElitism = (prenom, salaire) => {

    if (salaire < 1600) {
        moinMoyenne.push([prenom, salaire]);
    }
    if (salaire >= 1600 && salaire <= 1800) {
        moyenne.push([prenom, salaire]);
    }
    if (salaire > 1800) {
        plusMoyenne.push([prenom, salaire]);
    }
    if (typeof salaire != "number") {
        console.log('Tu as fait de la merde');
    }
    moinMoyenne.sort((a, b) => b[1] - a[1])
    moyenne.sort((a, b) => b[1] - a[1])
    plusMoyenne.sort((a, b) => b[1] - a[1])
}
proofElitism("Alexis", 2001);
proofElitism("zAlexis", 2002);
console.log(moinMoyenne);
console.log(moyenne);
console.log(plusMoyenne);
// #### Exercice 4
// - Créer une fonction qui va prendre deux paramètres (prenom, age). Pour un concert, vérifie si les personnes, souhaitant participer, sont majeurs. 
// - Si OUi, vous les mettez dans un tableau(vide) du nom de 'concert'. Attention le concert est limité à 7 personnes, cause de covid. :( 
// - Si NON, elle ne rentre pas. 
// - Affichez via une console.log, toutes les personnes présentes au concert avec leur 1er lettre de leurs prénom en majuscule. 
let concert = [];
let majorPass = (prenom, age) => {
    prenom = prenom.charAt(0).toUpperCase() + prenom.substr(1).toLowerCase();
    concert.length < 7 && age >= 18 ? concert.push(prenom) : console.log("Et toi la bas t'est trop jeune \n Dégage !!!");
    return console.log(concert);
}
majorPass("Alexis", 17)
majorPass("Dorian", 18)
majorPass("Mihai", 19)

console.log(concert);
