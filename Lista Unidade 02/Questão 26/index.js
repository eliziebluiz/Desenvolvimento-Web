function trocar() {
  let texto = document.getElementById("texto");
  let letra = document.getElementById("letra");
  let indice = document.getElementById("indice");

  if (letra.value.length > 0 && indice.value <= texto.value.length) {
    texto.value = texto.value.replace(texto.value[indice.value], letra.value);
  }
}
