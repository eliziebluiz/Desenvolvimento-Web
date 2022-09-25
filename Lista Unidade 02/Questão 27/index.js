function mover() {
  let x = document.getElementById("x");
  let y = document.getElementById("y");
  let decription = document.getElementById("descricao");

  if (
    window.scrollY === Number(y.value) &&
    window.scrollX === Number(x.value)
  ) {
    decription.innerHTML = "A pagina já está nessa posição";
  } else {
    window.scrollTo(x.value, y.value);
    decription.innerHTML = "";
  }
}
