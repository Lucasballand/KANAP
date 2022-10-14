// génération numéru de commande pour le client a la fin de la commande

function main(){
    const idNode = document.getElementById("orderId");
    idNode.innerText = localStorage.getItem("orderId");
    localStorage.clear();
}

main();