function imprimeHola(){
    console.log("Hola");
}
function main() {
    console.log("Starting...");
    const title = document.querySelector("h1")
        title.addEventListener("pointerenter", imprimeHola)
}
window.addEventListener("load",main);
