var deckOfPokemons = document.getElementById('deck-of-pokemons')

var pokemonPictures = []
for (var i = 1; i < pokemons.length; i++) {
    var newNumber = i;
    var stringUrl = 'https://pokeres.bastionbot.org/images/pokemon/' + newNumber + '.png'
    pokemonPictures.push(stringUrl)
}

var pokemonName = []
for (var i = 0; i < pokemons.length; i++) {
    pokemonName.push(pokemons[i].name.english)
}

var pokemonType = []
for (var i = 0; i < pokemons.length; i++) {
    pokemonType.push(pokemons[i].type[0])
}

var pokemonHp = []
for (var i = 0; i < pokemons.length; i++) {
    pokemonHp.push(pokemons[i].base.HP)
}

function renderPokemons(){
    for (var i = 0; i < 100; i++) {
        var div = document.createElement('div')
        div.id = 'cardPicture'
        div.className = 'card col-3 shadow-lg p-3 mb-5 bg-white rounded';
        var img = document.createElement('img')
        img.className = 'card-img-top'
        img.style.width = '10rem'
        img.setAttribute('src', pokemonPictures[i])
        var cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        var name = document.createElement('h3')
        name.innerHTML = pokemonName[i]
        name.className = 'card-text'
        var type = document.createElement('h5')
        type.innerHTML = 'Type: ' + pokemonType[i]
        type.className = 'card-text'
        var hp = document.createElement('h5')
        hp.innerHTML = 'HP: ' + pokemonHp[i]
        hp.className = 'card-text'
        deckOfPokemons.appendChild(div)
        div.appendChild(img)
        div.appendChild(cardBody)
        cardBody.appendChild(name)
        cardBody.appendChild(type)
        cardBody.appendChild(hp)
    }
}

renderPokemons();










