
let pokemonRepository = (function () { 
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

function getAll() {
    return pokemonList;
}

function add(pokemon) {
    pokemonList.push(pokemon);
}

return {
    add: add,
    getAll: getAll
};
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Squitle', height: '0.5', Type: ["water"] });

pokemonRepository.getAll().forEach(function(pokemon){

    
});





