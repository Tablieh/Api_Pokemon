//this container is holding my box of cart of the pokémooon
let poki_holder = document.querySelector('.pokemon_holder');

//this haw many pokémon i wanna see in my page
//and see the number random each time 
let number = 1000;
let count_my_pokémons = Math.floor(Math.random() * number)
//time to make a function that will take my number and make a pokémon 
// but first i need to like the api and call it and make sure that send result after genreate and fetch all result 

// a function will take the pokémon bay id from the url and fetch wait result and fetch a json file
let getpoki = async(id)=>{
    // first we need a variable to hold the url i wanna use
    let Url_getpoki = `https://pokeapi.co/api/v2/pokemon/${id}`
    //naw we need to fetch url and let him wait for the result
    let Result_Url_getpoki = await fetch(Url_getpoki)
    // naw we need a variable to hold the result of the json file
    let data = await Result_Url_getpoki.json()
    // for naw we need to make a function that it will creat my pokémon and call that function CreatePokémonBox()
    // then put data in this fuunction index of course
    CreatePokémonBox(data)
  
}
// HoldMyPokemons  (pokemon_count)
// for to generate X element of pokémon i wanna see in my page Bokédex
let HoldMyPokemons = ()=>{
    for (let k = 1; k < count_my_pokémons; k++) {
        getpoki(k)
     }
}
//---------------------------------------------------------------------------type-------------------------------------------//
  //console.log(data.types[0].type.name)
    /* const poke_types = pokemon.types.map(type => type.type.name)
    console.log(poke_types) */
    //console.log(data.types[0].type.name)
/* let result = document.querySelector('.pokemon_holder');
fetch("https://pokeapi.co/api/v2/type/5/")
.then((response) => response.json())
.then((data1) => {
    console.log(data1.damage_relations)
    result.innerHTML = data1.damage_relations.double_damage_from[0].name;
}) */


//---------------------------------------------------------------------------color-------------------------------------------//
//first im gonna chick the api to see the type name and make a list to to signe each type to a background that i chosed
const backgrounds = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: 'rgba(250, 185, 245, 0.57)',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: 'rgba(153, 182, 186, 0.57)'
}
const catigories_color = Object.keys(backgrounds)

let CreatePokémonBox = (Mypokemon) => { 
    // creat a div and add the classe Box to it 
    const Box = document.createElement('div')
    Box.classList.add('Box')

     // pokemon type, The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
     // so it dosnt rend error message when typeOfPokii is called later
     const pokémon_types = Mypokemon.types.map(type => type.type.name)

     // pokemon name
     const nameOfPokii = Mypokemon.name.toUpperCase()
 
     // find catigories type of pokemon bay object key element that we named catigories_color and with The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
     const typeOfPokii = catigories_color.find(type => pokémon_types.indexOf(type) >=0)
 
     // type color of the background catigories 
     const colorOfPokii = backgrounds[typeOfPokii]
 
    // background color on catigories : behinde the pokémon will be bay catigories
    Box.style.backgroundColor = colorOfPokii


     //The padStart(4, '0') method , find pokemon id and make a (pattern ####) Expected output: "###0" ,"###1",,"#329"
     const id = Mypokemon.id.toString().padStart(4, '0')

     // do a box inner that contains those element like name , type , img , id with pattren
     Box.innerHTML = `<div class='Box-inner'>
     <p class="p-1"> #${id} </p> 
     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Mypokemon.id}.png"" alt="${nameOfPokii}">
     <p class="p-2"> ${nameOfPokii} </p>
     <p class="p-3">Type : ${typeOfPokii} </p>
  </div>`
  //add box to the holder
  poki_holder.appendChild(Box)
}
HoldMyPokemons()


