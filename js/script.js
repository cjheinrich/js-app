let pokemonRepository = (function () {
    let modalContainer = document.querySelector('#modal-container');
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


    function addListItem(pokemon) {
        // just console log the info about this pokemon
        console.log(pokemon)

        // create the list item
        let  listItem = document.createElement('li');
        // create the button, to be added to the list item
        let button = document.createElement('button');
        let pokemonImage = document.createElement('img')
        pokemonImage.setAttribute("alt", "A pokemon picture");
        pokemonImage.classList.add("pokemon-image");
        pokemonImage.src = pokemon.imageUrl;
        // add the button to the list item
        listItem.append(button);
        // add the list item to the list
        pokemonL.append(listItem);
        button.append(pokemonImage);


        // make the button have the name of pokemon
        button.innerText = pokemon.name;

        // add a function to the click of the button
        button.addEventListener("click", function(e) {
            showDetails(pokemon);
        });
    };


    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
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


    return {
        add,
        getAll,
        addListItem,
        loadList,
        loadDetails,
        showDetails
        
    };
})();


pokemonRepository.loadList().then(function() {
    // console.log(pokemonRepository.getAll());
    pokemonRepository.getAll().forEach(pokemonRepository.addListItem);
    
});



 // function showModal(pokemon, height ) {
    //     modalContainer.innerHTML = '';
    //     let modal = document.createElement('div');
    //     modal.classList.add('modal');
    
    //     let closeButtonElement = document.createElement('button');
    //     closeButtonElement.classList.add('modal-close');
    //     closeButtonElement.innerText = 'Close';
    //     closeButtonElement.addEventListener('click', hideModal);
    
    //     let titleElement = document.createElement('h1');
    //     titleElement.innerText = title;
    
    //     let contentElement = document.createElement('p');
    //     contentElement.innerText = text;
    
    //     modal.append(closeButtonElement);
    //     modal.append(titleElement);
    //     modal.append(contentElement);
    //     modalContainer.append(modal);

    //     modalContainer.classList.add('is-visible');
    // }

    // function hideModal() {
    //     modalContainer.classList.remove('is-visible');
    //     if (dialogPromiseReject) {
    //         dialogPromiseReject();
    //         dialogPromiseReject = null;
    //     }
    // }

    // function showDialog(title, text) {
    //     showModal(title, text);

    //     let modalContainer = document.querySelector('#modal-container');

    //     let modal = modalContainer.querySelector('.modal');
    //     let confirmButton = document.createElement('button');
    //     confirmButton.classList.add('modal-confirm');
    //     confirmButton.innerText = 'Confirm';
    //     let cancelButton = document.createElement('button');
    //     cancelButton.classList.add('modal-cancel');
    //     cancelButton.innerText = 'Cancel';

    //     modal.appendChild(confirmButton);
    //     modal.appendChild(cancelButton);

    //     confirmButton.focus();

    //     return new Promise((resolve, reject) => {
    //         cancelButton.addEventListener('click', hideModal);
    //         confirmButton.addEventListener('click', () => {
    //             dialogPromiseReject = null;
    //             hideModal();
    //             resolve();
    //         });

    //         dialogPromiseReject = reject;
    //     });
    // }

    //     document.querySelector('#show-dialog').addEventListener('click', () => {
    //             showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
    //                 alert('confirmed');
    //             }, () => {
    //                 alert('not confirmed');
    //     });
    // });

    // window.addEventListener('keydown', (e) => {
    //     if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    //         hideModal();  
    //     }
    // });

    // modalContainer.addEventListener('click', (e) => {
    //     let target = e.target;
    //     if (target === modalContainer) {
    //     hideModal();
    //     }
    // });
    // document.querySelector('#show-modal').addEventListener('click', () => {
    //     showModal('modal title, yup');
    // });

    


    // function showDetails(pokemon) {
    //     loadDetails(pokemon).then(function () {
    //         console.log(pokemon);
    //     });