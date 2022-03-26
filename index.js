const filme = {
    titulo: "Pets 2",
    duracao: 136,
    genero: "Animação",
    avaliacao: 8.5,
    indicadoParaMaiores: false,
    ano: 2022
}

// Usando IF para checar se o filme é liberado para todas as idades
if(filme.indicadoParaMaiores === false) {
    console.log(`[If 01] O filme ${filme.titulo} é indicado para todas as idades`)
}

// Usando o mesmo IF, mas tirando proveito do valor booleano.
// Se o valor é true e coloco uma exclamação antes, ele vira false.
// Assim como se o valor for false, com uma exclamação, ele vira true.
// E se minha condição for simplesmente true, ela passa na validação. E vice- versa.
if(!filme.indicadoParaMaiores) {
    console.log(`[IF 02] O filme ${filme.titulo} é indicado para todas as idades`)
}

// Mesmo IF, mas usando o short circuit (curto circuito)
// Basicamente, o '&&' agem como se fosse um if - executam o que vem a seguir se a condição anterior for verdadeira.
!filme.indicadoParaMaiores 
    && console.log(`[If 03] O filme ${filme.titulo} é indicado para todas as idades.`)

// Mesmo short circuit, porém estamos passando o nome do filme errado (filme.title). Se não houver o title (null, undefined...) ele lê uma segunda opção (filme.titul).
!filme.indicadoParaMaiores 
    && console.log(`[If 04] O filme ${filme.title || filme.titulo} é indicado para todas as idades.`)

// Usando duas condições obrigatórias no if
if(!filme.indicadoParaMaiores && filme.avaliacao > 5) {
    console.log(`[If 05] O filme ${filme.titulo} é indicado para todas as idades e está acima da média.`)
}

//
if(filme.indicadoParaMaiores || filme.avaliacao > 5) {
    console.log(`[If 06] O filme ${filme.titulo} é indicado para todas as idades e está acima da média.`)
}

// Usando duas condições obrigatórias no if, sendo que a segunda consiste em duas condições e um OR
if(!filme.indicadoParaMaiores && (filme.avaliacao > 5 || filme.ano === 1990)) {
    console.log(`[If 07] O filme ${filme.titulo} é indicado para todas as idades e está acima da média.`)
}

// Condicional com IF/ELSE
if(filme.indicadoParaMaiores) {
    console.log(`[IF 08 IF] O filme ${filme.titulo} NÃO é indicado para todas as idades`)
} else {
    console.log(`[IF 08 ELSE] O filme ${filme.titulo} é indicado para todas as idades`)
}

// Condicional com IF/ELSE usando IF TERNÁRIO (onde ? representa o if e o : o else)
filme.indicadoParaMaiores
    ? console.log(`[IF 09 IF] O filme ${filme.titulo} NÃO é indicado para todas as idades`)
    : console.log(`[IF 09 ELSE] O filme ${filme.titulo} é indicado para todas as idades`)

// Mesma condição, mas com o IF TERNÁRIO dentro do console.log()
console.log(filme.indicadoParaMaiores ? `[IF 10 IF] O filme ${filme.titulo} NÃO é indicado para todas as idades`: `[IF 10 ELSE] O filme ${filme.titulo} é indicado para todas as idades`)

// Condicional com IF/ELSE IF/ELSE
if(filme.indicadoParaMaiores) {
    console.log(`[if 11 IF] O filme ${filme.titulo} NÃO é indicado para todas as idades`)
  } else if (filme.titulo === "Titanic") {
    console.log(`[if 11 ELSE IF] O nome do filme é Titanic`)
  } else {
    console.log(`[if 11 ELSE] O filme ${filme.titulo} é indicado para todas as idades e seu título não é Titanic`)
  }