function main() {
  const list = document.getElementById("imgs");
  const input = document.getElementById("input1").value;

  list.innerHTML = "";

  for (let i = 0; i < input; i++) {
    const img = document.createElement("img");
    img.src =
      "https://imagepng.org/wp-content/uploads/2018/02/escudo-flamengo-1.png";
    img.alt = "mengao";
    img.width = "50";
    list.appendChild(img);
  }
}
