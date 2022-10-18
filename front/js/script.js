fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => addProducts(data));

function addProducts(data) {
    // const _id = data[0]._id
    // const imageUrl = data[0].imageUrl
    // const altTxt = data[0].altTxt
    // const name  = data[0].name
    // const description = data[0].description

    data.forEach((KANAP) => {

        const { _id, imageUrl, altTxt, name, description } = KANAP

        const anchor = makeAnchor(_id);

        const image = MakeImage(imageUrl, altTxt)
        const article = document.createElement("article")
        const h3 = MakeH3(name);
        const p = MakePragraph(description);

        article.appendChild(image)
        article.appendChild(h3)
        article.appendChild(p)
        AppendArticleToAnchor(anchor, article);
    });
}

function makeAnchor(id) {
    const anchor = document.createElement('a')
    anchor.href = "./product.html?id=42" + id
    return anchor
}

function AppendArticleToAnchor(anchor, article) {
    const items = document.querySelector("#items")
    if (items != null) {
        items.appendChild(anchor)
        anchor.appendChild(article)
    }
}

function MakeImage(imageUrl, altTxt) {
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altTxt
    image.removeAttribute("style")
    image.removeAttribute("title")
    return image
}

function MakeH3(name) {
    const h3 = document.createElement("h3")
    h3.textContent = name
    h3.classList.add("productName")
    return h3
}

function MakePragraph(description) {
    const p = document.createElement("p")
    p.textContent = description
    p.classList.add("productDescription")
    return p
}