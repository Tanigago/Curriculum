function imprimeHello(){
    console.log("Hello");
}
   // const title = document.querySelector("h1")
     //   title.addEventListener("pointerenter", imprimeHello)
        //Las líneas 6 y 7 solo sirven para el primer h1 del doc html
//    const elements = Array.from(document.body.querySelectorAll("*"));
//    const elem = document.body.querySelectorAll("*")
//    for (let item of elements){
 //       console.log(item)
//        item.addEventListener("pointerenter", ()=>{console.log("PoP!")})
function main () {
    console.log("Starting...");

    const elements = Array.from(document.body.querySelectorAll("*"));

    const counters = elements.map(
        (item) => {
            const obj = {
                element: item,
                counter: 0,
            }
            item.addEventListener("pointerenter",()=>{
                obj.counter++;
                console.log(obj)
            });
            return obj
        }
    )
}

window.addEventListener("load", main);