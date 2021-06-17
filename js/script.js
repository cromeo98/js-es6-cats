// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.

//Milestone 1
//1) definisco l'array di oggetti
const cats = [
    {
        name: 'peach',
        age: 3,
        colour: 'grey',
        sex: 'f'
    },
    {
        name: 'nero-wolf',
        age: 14,
        colour: 'black',
        sex: 'm'
    },
    {
        name: 'principessa',
        age: 6,
        colour: 'white',
        sex: 'f'
    },
    {
        name: 'romeo',
        age: 5,
        colour: 'dark-grey',
        sex: 'm'
    },
    {
        name: 'zorba',
        age: 4,
        colour: 'black',
        sex: 'm'
    }
];

//2) stampo nome e colore dei gatti
let catsList = '';

cats.forEach((element) => {
    const {name, colour} = element;
    catsList += name + '\'s colour is ' + colour +'</br>';
    document.getElementById('cats').innerHTML = catsList;
});

// Milestone 2 
//3) Divido i gatti in due array distinti in base al sesso
const catsM = [];
const catsF = [];
console.log(catsM);
console.log(catsF);

// soluzione 1 (foreach)
// cats.forEach(isMaleOrFemale);
cats.forEach((element) => {
    if(element.sex == 'm'){
        catsM.push(element);
    } else if(element.sex == 'f'){
        catsF.push(element)
    }
});

// let catsList = '';

// catsF.forEach((element) =>{
//     const {name, colour} = element;
//     catsList += name + '\'s colour is ' + colour;
//     document.getElementById('cats').innerHTML = '<span class=cats-name>' + 
//     catsList + '</span><span style=color:blue><i class="fas fa-paw"></i></span>'
//     ;
// });


//4) unisco le due Array, inserendo prima le gatte f e poi i gatti M
// const catsBeforeFCats = [...catsF, ...catsM];
// console.log(catsBeforeFCats);

// soluzione 2 foreach + for in
// cats.forEach((element, index, arr) => {
//     for(let k in arr[index]){ //element
//         if(k == 'sex' && arr[index][k] == 'm'){ //element
//             catsM.push(element);
//         } else if(k == 'sex' && arr[index][k] == 'f'){ //element
//             catsF.push(element);
//         } 
//     }
// });

// **function */
// function isMaleOrFemale (element){
//     if(element.sex == 'm'){
//         return document.getElementsByClassName('cats-name').innerHTML = '<span style: color = blue><i class="fas fa-paw"></i></span>'
//     } else if(element.sex == 'f'){
//         return false;
//     }
// };


