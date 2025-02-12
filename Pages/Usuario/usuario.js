const userId = sessionStorage.getItem("userId");
import mostrarUsuario from "./component.js"


fetch(`https://fakestoreapi.com/users/$(UserId)`)
.then(res=>res.json())
.then(json=> {
    console.log(json)
    document.getElementById("usuario").innerHTML += mostrarUsuario(json)
    ;})
    