let pokemonRepository = (function () {
    // select the unordered list
    const pokemonL = document.querySelector('.pokemon-list');

    let pokemonList = [];

    //pokemon api
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
            let pokemon = {
                name: item.name,
                detailsUrl: item.url
            };
            add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
          // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }
    

    return {
        add,
        getAll,
        addListItem,
        loadList,
        loadDetails
    };
})();

// pokemonRepository.add({name: 'Squitle', height: '0.5', Type: ["water"] });

pokemonRepository.loadList().then(function() {
    // console.log(pokemonRepository.getAll());
    pokemonRepository.getAll().forEach(pokemonRepository.addListItem);
    

});



