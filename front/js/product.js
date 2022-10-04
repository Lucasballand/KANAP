const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get('id')

fetch (`http://localhost:3000/api/products/`)
.then ((response) => response.json())
.then ((res) => {const result= res.find(({_id}) => '42' + _id === id)});

function find(_id) {
    const { imageUrl, altTxt, name, description, price, colors } = _id
    MakeImage(imageUrl, altTxt)
}

function MakeImage(imageUrl, altTxt) {
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    const items = document.querySelector(".item__img")
    if (parent != null) parent.appendChild(image)
}