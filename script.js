
let pokemonRepository = (function () {
    // select the unordered list
    const pokemonL = document.querySelector('.pokemon-list');

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

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function addListItem(pokemon) {
        // just console log the info about this pokemon
        console.log(pokemon)

        // create the list item
        let  listItem = document.createElement('li');
        // create the button, to be added to the list item
        let button = document.createElement('button');

        // add the button to the list item
        listItem.append(button);
        // add the list item to the list
        pokemonL.append(listItem);


        // make the button have the name of pokemon
        button.innerText = pokemon.name;

        // add a function to the click of the button
        button.addEventListener("click", function(e) {
            showDetails(pokemon);
        })
    }

    return {
        add,
        getAll,
        addListItem
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Squitle', height: '0.5', Type: ["water"] });

pokemonRepository.getAll().forEach(pokemonRepository.addListItem);

