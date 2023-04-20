import pegaArquivo from "./index.js";
import chalk from "chalk";
import validaURL from "./httpValidacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
  const resultado = await pegaArquivo(caminhoDoArquivo[2]);

  if (caminho[3] ==='validar'){
    console.log(chalk.bgBlue("LINKS NÃO VALIDADOS "), await validaURL(resultado))

  }else{console.log(chalk.bgYellow("LINKS VALIDADOS"), resultado)}
}

processaTexto(caminho);
