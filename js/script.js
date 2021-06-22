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
        color: '#989201',
        gender: 'f'
    },
    {
        name: 'nero-wolf',
        age: 14,
        color: '#1e1b92',
        gender: 'm'
    },
    {
        name: 'principessa',
        age: 6,
        color: '#950202',
        gender: 'f'
    },
    {
        name: 'romeo',
        age: 5,
        color: '#019800',
        gender: 'm'
    },
    {
        name: 'zorba',
        age: 4,
        color: '#818284',
        gender: 'm'
    }
];
document.getElementById('cats').innerHTML += 'Milestone 1';
cats.forEach((element) => {
    document.getElementById('cats').innerHTML += `</br>
    ${element.name}: <i class="fas fa-cat" style="color:${element.color}"></i> <i class="fas fa-ribbon" style="color:${element.color}"></i>
    `;
});

// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
const rose = "#EEA7B3"
const blue = "#211CBB"

const newArrCats = cats.map((element) => {
    const {name, age, color, gender} = element;

    let ribboncolor = blue;
    if(gender == 'f'){
        ribboncolor = rose;
    } //oppure let ribbonColour = (gender == 'f')? pink : blue;

    const opacity = element.age / 14;

    return {
        name,
        age,
        color,
        gender,
        ribbon: {
            color: ribboncolor, //oppure let ribboncolor = (gender == 'f')? pink : blue;
            opacity: opacity
        }
    }
});

//2) stampo nome e colore dei gatti
document.getElementById('cats').innerHTML += '</br></br>Milestone 1.5</br>'
newArrCats.forEach((element) => {
    document.getElementById('cats').innerHTML += `</br>
    ${element.name}: <i class="fas fa-cat" style="color:${element.color}"></i> <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>
    `;
});
document.getElementById('cats').innerHTML += '</br></br> Milestone 2';

const catsM = newArrCats.filter((element) =>{
    return element.gender === 'm';
});
document.getElementById('cats').innerHTML += '</br></br> maschi';
catsM.forEach((element) => {
    document.getElementById('cats').innerHTML += `</br>
    ${element.name}: <i class="fas fa-cat" style="color:${element.color}"></i> <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>
    `;
});

const catsF = newArrCats.filter((element) =>{
    return element.gender === 'f';
});
document.getElementById('cats').innerHTML += '</br></br> femmine';
catsF.forEach((element) => {
    document.getElementById('cats').innerHTML += `</br>
    ${element.name}: <i class="fas fa-cat" style="color:${element.color}"></i> <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>
    `;
});

// -------------soluzione 2 foreach + for in---------------------
// cats.forEach((element, index, arr) => {
//     for(let k in arr[index]){ //element
//         if(k == 'gender' && arr[index][k] == 'm'){ //element
//             catsM.push(element);
//         } else if(k == 'gender' && arr[index][k] == 'f'){ //element
//             catsF.push(element);
//         } 
//     }
// });


//4) unisco le due Array, inserendo prima le gatte f e poi i gatti M
// const catsBeforeFCats = [...catsF, ...catsM];
// console.log(catsBeforeFCats);

// **function */
// function isMaleOrFemale (element){
//     if(element.gender == 'm'){
//         return document.getElementsByClassName('cats-name').innerHTML = '<span style: color = blue><i class="fas fa-paw"></i></span>'
//     } else if(element.gender == 'f'){
//         return false;
//     }
// };