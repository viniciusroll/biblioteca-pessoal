const titulos: string[] = ["O hobbit", "Clean Code", "1984", "Dom Casmurro", "O Nome do Vento"];
const autores: string[] = ["J.R.R. Tolkien", "Robert C. Martin", "George Orwell", "Machado de Assis", "Patrick Rothfuss"];
const anos: number[] = [1937, 2008, 1949, 1899, 2007];
const paginas: number[] = [310, 464, 328, 256, 662];
const lido: boolean[] = [true, true, false, true, false];
const avaliacoes: number[] = [5, 4, 0, 5, 0];

function exibirBiblioteca(): void{
    titulos.forEach((nomes, indice) => {
        const numero = indice + 1

        let status = "";
        if(lido[indice]){
            status = `LIDO (${avaliacoes[indice]}/5)`;
        }
        else{
            status = "PENDENTE";
        }

        console.log (`${numero}. "${titulos}" (${anos[indice]}) - ${autores[indice]} - ${paginas[indice]} pag - ${status}`);
    })
}

exibirBiblioteca();