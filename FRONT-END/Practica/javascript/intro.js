let habilitar = "b";
if (habilitar == "c") {
    //Condicionales IF
    let number1 = 4;
    let number2 = 10;

    if (number1 > number2) {
        console.log("si se cumple aqui");
    } else if (number1 > 2 && number2 == 10) {
        console.log("si se cumple aqui 2");
    } else {
        console.log("si se cumple aqui 3");
    }

    //Ciclo While
    let numberWhile = 10;

    while (numberWhile <= 100) {
        console.log(numberWhile);
        numberWhile = numberWhile + 5;
    }


    //let solo se usa en el bloque de codigo que se implemente
    for (let num = 0; num <= 10; num++) {
        console.log("hola" + num);
    }


    let numero = 1;
    switch (numero) {
        case 0:
            console.log(numero);
            break;
        case 1:
            console.log("Bien");
            break;
        default:
            console.log("Mal");
            break;
    }

    //Funciones

    const cuadrado = function(x) {
        return x * x;
    }

    let numParametro = 5;
    console.log(cuadrado(numParametro))

    const ruido = function() {
        console.log("funcion void");
    }

    ruido();

    const exponencial = function(base, exponente) {
        let resultado = 1;
        for (let i = 0; i < exponente; i++) {
            resultado = resultado * base;
        }
        return resultado
    }

    console.log(exponencial(2, 2));

    function suma(x, y) {
        return x + y;
    }

    console.log(suma(2, 9));

    //Array Functions => indica nadamas que es una funcion
    const restar = (a, b) => {
        return a - b;
    }

    console.log(restar(2, 9));

    //Exepciones

    function di(question) {
        let resul = "mal";
        throw new Error("Invalid");
    }

    di("hola");

    try {
        console.log("Bien");
    } catch (error) {
        console.log(error)
    }
}




//Pokedex LAUNCH
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokerName");
    let imageU = pokeName.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${imageU}`;
    fetch(url).then((res) => {
        //console.log(res);
        if (res.status != "200") {
            pokeImage("../../Semana2/logo-dulmiel01.png")
        } else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let imageUrl = data.sprites.front_default;
        console.log(imageUrl);

        pokeImage(imageUrl)
    })
}

//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("imagePoke");
    pokeImg.src = url;
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")

/*const imprimir = () => {
    const pokeName = document.getElementById("pokerName");

    console.log("Hola explorer " + pokeName.value);
}*/