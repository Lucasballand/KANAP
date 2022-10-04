const querryString = window.location.search
const urlParams = new URLSearchParams(querryString)
const id = urlParams.get("id")
console.log({id}) 

fetch("http://localhost:3000/api/products/${id}")
.then((res) => res.json())
.then((res) => console.log(res))
