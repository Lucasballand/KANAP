fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then ((data) => AddProducts(data))

    function AddProducts (kanap_data) {


        kanap_data.forEach((kanap) => {
            const {_id, name, description, imageUrl, altTxt} = kanap;
            const anchor = MakeAnchor(_id);
            const article = document.createElement("article");
            const image = MakeImage(imageUrl, altTxt);
            const h3 = Makeh3(name);
            const p = MakeParagraph(description);

            appendElementsToArticle(article, [image, h3, p]);
            appendArticleToAnchor(anchor, article);
        })
    }

    function appendElementsToArticle(article, array) {
        array.forEach((item) => {
            article.appendChild(item);
        })
    }

    function MakeAnchor (id) {
        const anchor = document.createElement("a");
        anchor.href = "product.html?id=" + id;
        return anchor;
    }

    function appendArticleToAnchor (anchor, article) {
        const items = document.querySelector(".items");
        if (items != null ) {
            items.appendChild(anchor);
            anchor.appendChild(article);
        }
    }

    function MakeImage (imageUrl, altTxt) {
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = altTxt;
        image.removeAttribute("title");
        image.removeAttribute("style");
        return image;
    }

    function Makeh3 (name) {
        const h3 = document.createElement("h3");
        h3.textContent = name;
        h3.classList.add("product-name");
        return h3;
    }

    function MakeParagraph (description) {
        const p = document.createElement("p");
        p.textContent = description;
        p.classList.add("product-description");
        return p;
    }