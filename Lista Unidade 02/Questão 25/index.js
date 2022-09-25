class Autor {
  constructor(nameAuthor, ano) {
    this.nameAuthor = nameAuthor;
    this.ano = ano;
  }
}

class Livro extends Autor {
  constructor(name, gender, nameAuthor, ano) {
    super(nameAuthor, ano);
    this.name = name;
    this.gender = gender;
  }
}

function temMesmoAutor(autorone, autortwo) {
  return autorone === autortwo;
}

function main() {
  let name = prompt("Digite o nome do livro:");
  let autor = prompt("Digite o nome autor:");
  let ano = prompt("Digite o ano do autor:");
  let gender = prompt("Digite o gênero do livro:");

  let livro = new Livro(name, gender, autor, ano);

  if (!!livro.ano && !!livro.name && !!livro.gender && !!livro.nameAuthor) {
    let autordois = prompt("Digite o nome do segundo autor:");
    let igualsAutor = temMesmoAutor(autordois, livro.nameAuthor);

    alert(JSON.stringify(livro, null, 2));
    if (igualsAutor) {
      alert("O autor é o mesmo");
    }
  }
}

main();
