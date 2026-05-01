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

adicionarLivro("Senhor dos Aneis", "Tolkien", 1954, 1200);
adicionarLivro("Gatos Guerreios", "Erin", 2010, 317);
removerLivro(0);
exibirBiblioteca();