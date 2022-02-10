const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// DOM selector && created elements
const list = document.querySelector('#dog-image-container')
const breedList = document.querySelector('#dog-breeds')

// Register event listeners

// Fetches
function fetchAllDogs() {
    return fetch(imgUrl)
    .then(res => res.json())
}

function fetchAllBreeds() {
    return fetch(breedUrl)
    .then(res2 => res2.json())
}

// Rendering
function renderAllDogs(dogsObj) {
    dogsObj.message.forEach(renderOneDog)

    // console.log(dogsObj)
}

function renderAllBreads(dogsBreedObj) {
    Object.keys(dogsBreedObj.message).forEach(renderOneBreed)

}

function renderOneBreed(dogsBreedObj) {
    // console.log(dogsBreedObj.message)
    const li = document.createElement('li')
    
    li.innerText = dogsBreedObj
    console.log (dogsBreedObj)
    console.log(li)
    breedList.appendChild(li) 
}

function renderOneDog(dogLink) {
    let img = document.createElement('img')
    img.src = dogLink

    img.classList.add("img")

    list.appendChild(img)
}

// Event handler


// Initializer(s)
// fetchAllDogs().then(dogsArr => renderAllDogs(dogsArr))
fetchAllDogs().then(renderAllDogs)
fetchAllBreeds().then(renderAllBreads)