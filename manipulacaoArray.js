//questao 2
const pessoas = [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];

//questao 3
function getPerson(namePerson) {
  return pessoas.find((pessoa) => pessoa.name.includes(namePerson));
}

console.log(getPerson("Gabriel Gomes"));

//questao 4
function formattedArrays() {
  return pessoas.map((pessoa) => {
    return pessoa.name;
  });
}

console.log("\n", formattedArrays());

//questao 5
function insertID() {
  for (var index = 0; index < pessoas.length; index++) {
    return pessoas.map((pessoa, index) => {
      return { id: index + 1, name: pessoa.name, age: pessoa.age };
    });
  }
}

console.log("\n", insertID());

//questao 6
function major() {
  return pessoas.filter((pessoa) => pessoa.age >= 18);
}

console.log("\n", major());

//questao 7
function avarageAge() {
  const sum = pessoas
    .map((pessoa) => pessoa.age)
    .reduce((prev, curr) => prev + curr, 0);
  return sum / pessoas.length;
}

console.log("\n Média das idades: ", avarageAge());
