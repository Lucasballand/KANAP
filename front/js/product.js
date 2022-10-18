var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");

// récupération des donnéees de quantités et de couleurs grâce a ces deux lignes de code

const colorPicked = document.querySelector("#colors");
const quantityPicked = document.querySelector("#quantity");

// Récupération des articles de l'API*

fetch ("http://localhost:3000/api/products/" + idProduct)
    .then((response) => response.json())
    .then((res) => handleData(res));

function handleData(data) {
    const { imageUrl, altTxt, name, description, price, colors } = data;
    MakeImage(imageUrl, altTxt);
    MakeTitle(name);
    MakePrice(price);
    MakeDescription(description);
    MakeColors(colors);


    function MakeImage(imageUrl, altTxt) {
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = altTxt;
        const parent = document.querySelector(".item__img");
        if (parent != null) {
            parent.appendChild(image);
        }
    }

    function MakeTitle(name) {
        const h1 = document.querySelector("h1"); ("#title");
        if (h1 != null) h1.textContent = name;
    }

    function MakePrice(price) {
        const span = document.querySelector("#price");
        if (span != null) span.textContent = price;
    }

    function MakeDescription(description) {
        const p = document.querySelector("#description");
        if (p != null) p.textContent = description;
    }

    function MakeColors(colors) {
        colors.forEach((color) => {
            const option = document.createElement("option");
            option.value = color;
            option.textContent = color;
            colorPicked.appendChild(option);
        });
    }
}

// Ajout au panier et envoie des données au local storage

const btn = document.querySelector("#addToCart")
if (btn != null) {
    btn.addEventListener("click", (e) => {
        const color = document.querySelector("#colors").value;
        const quantity = document.querySelector("#quantity").value;
        if (color == "Choisissez une couleur") {
            alert("Veuillez choisir une couleur SVP")};
    })
}