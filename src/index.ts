const titulos: string[] = ["O hobbit", "Clean Code", "1984", "Dom Casmurro", "O Nome do Vento"];
const autores: string[] = ["J.R.R. Tolkien", "Robert C. Martin", "George Orwell", "Machado de Assis", "Patrick Rothfuss"];
const anos: number[] = [1937, 2008, 1949, 1899, 2007];
const paginas: number[] = [310, 464, 328, 256, 662];
const lido: boolean[] = [true, true, false, true, false];
const avaliacoes: number[] = [5, 4, 0, 5, 0];

function exibirBiblioteca(): void{
    titulos.forEach((titulo, indice) => {
        const numero = indice + 1

        let status = "";
        if(lido[indice]){
            status = `LIDO (${avaliacoes[indice]}/5)`;
        }
        else{
            status = "PENDENTE";
        }

        console.log (`${numero}. "${titulo}" (${anos[indice]}) - ${autores[indice]} - ${paginas[indice]} pag - ${status}`);
    })
}

exibirBiblioteca();

function adicionarLivro(titulo: string, autor: string, ano: number, pagina: number): void{
    if (ano > 0 && pagina > 0){
        titulos.push(titulo);
        autores.push(autor);
        anos.push(ano);
        paginas.push(pagina);
        lido.push(false);
        avaliacoes.push(0);
    }
    else{
        console.log("Dados invalidos: ano e paginas devem ser maiores que 0");
    }
}

function removerLivro(numeroLivro: number): void{
    const indice = numeroLivro - 1;
    if (indice < 0 || indice >= titulos.length){
        console.log("Indice invalido");
        return;
    }
    titulos.splice(indice, 1);
    autores.splice(indice, 1);
    anos.splice(indice, 1);
    paginas.splice(indice, 1);
    lido.splice(indice, 1);
    avaliacoes.splice(indice, 1);
}

function buscarPorTitulo(termo: string): void {
  const indices: number[] = titulos
    .map((titulo, i) => i)
    .filter((i) => titulos[i].toLowerCase().includes(termo.toLowerCase()));

  if (indices.length === 0) {
    console.log(`Nenhum livro encontrado com o termo: "${termo}"`);
    return;
  }

  console.log(`=== RESULTADO DA BUSCA POR "${termo}" ===`);
  indices.forEach((i) => {
    console.log(`- "${titulos[i]}" (${anos[i]}) - ${autores[i]}`);
  });
}

function listarPorAutor(nomeAutor: string): void{
    const indices: number[] = autores
    .map((autor, i) => i)
    .filter((i) => autores[i] === nomeAutor);

    if(indices.length === 0){
        console.log(`Nenhum livro encontrado para o autor: ${nomeAutor}`);
        return;
    }

    console.log(`=== LIVROS DE ${nomeAutor.toUpperCase()} ===`);
    indices.forEach((i) =>{
        console.log(`- "${titulos[i]}" (${anos[i]}) - ${paginas[i]} pag`);
    });
}

function marcarComoLido(indice: number, avaliacao: number): void {
  if (indice < 0 || indice >= titulos.length) {
    console.log("Indice invalido");
    return;
  }

  if (avaliacao < 1 || avaliacao > 5) {
    console.log("Avaliacao invalida: deve ser entre 1 e 5");
    return;
  }

  lido[indice] = true;
  avaliacoes[indice] = avaliacao;

  console.log(`Livro "${titulos[indice]}" marcado como lido com nota ${avaliacao}/5`);
}

function listarPendentes(): void {
  const indices: number[] = lido
    .map((_, i) => i)
    .filter((i) => lido[i] === false);

  if (indices.length === 0) {
    console.log("Nenhum livro pendente.");
    return;
  }

  console.log("=== LIVROS PENDENTES ===");
  indices.forEach((i) => {
    console.log(`- "${titulos[i]}" - ${autores[i]} - (${anos[i]})`);
  });
}
