let pokemonList = [
    {
        name: "Charizard",
        height: '1.7',
        type: ["fire","flying"]
    },
    {
        name: "Lapras",
        height: '2.5',
        type: ["ice","water"]
    },
    {
        name: "Cyndaquil",
        height: '0.5',
        type:["fire"]
    }
];

pokemonList.forEach( (item, i, arr) => console.log(i, item, arr))


    







// function printArrayDetails(){
// for (let i = 0; i < pokemonList.length; i++)  {
//     if  (pokemonList[i].height >1){
//         document.write(pokemonList[i].name + ', ' + ('height:') + pokemonList[i].height + ' ' + "Wow! Thats a big Pokemon.")
//     }else if (pokemonList[i].height <1){
//         document.write(pokemonList[i].name + ', ' + ('height:') + pokemonList[i].height + ' ' + "Thats a small pokemon!")
//     }
// }    
// }
// printArrayDetails();
// printArrayDetails();
