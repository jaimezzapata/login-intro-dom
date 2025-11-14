// console.log(document.querySelector("#titulo"))
// console.log(document.getElementById("titulo"))

// console.log(document.getElementsByTagName("input"))
// console.log(document.querySelectorAll("input"))

// console.log(document.getElementsByClassName("container"))
// console.log(document.querySelectorAll(".container"))

// let inputs = document.getElementsByTagName("input")
// for (let index = 0; index < inputs.length; index++) {
//     console.log(inputs[index])
//     inputs[index].style.backgroundColor = "#e46569"
//     inputs[index].style.width = "200px"
// }

let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click", () => {
  let correo = document.getElementById("email").value;
  let contrasena = document.getElementById("password").value;
  if (correo == "correo@correo.com" && contrasena == "12345") {
    Swal.fire({
      title: "Bienvenido",
      text: "Será redireccionado al Home",
      icon: "success",
    });
    window.location.href = "https://sweetalert2.github.io/"
  } else {
    Swal.fire({
      title: "Error",
      text: "Usaurio y/o contraseña incorrecto",
      icon: "error",
    });
  }
});
