import { createStore } from 'vuex'

export default createStore({
    state: {
        contador: 0
    },
    getters: { // recuperar y retornar informacion del estado
        cuadrado(state) {
            return state.contador * state.contador
        }
    },
    mutations: { //siempre se utiliza commit en el view
        subirContador(state, result) {
            //let imageUrl = data.sprites.front_default;
            state.contador = result.sprites.other.home.front_female;
            //state.contador++;
        },
        bajarContador(state) {
            state.contador--;
        }
    }, //poder modificar los valores globales
    actions: {
        async subirContador({ commit }) {
            //-const pokeName = document.getElementById("pokerName");
            const pokeName = "pikachu";
            //let imageU = pokeName.value.toLowerCase();
            const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
            const res = await fetch(url);
            const result = await res.json();

            console.log(result);
            commit("subirContador", result)

        }
    }, //distpatch codigo asincrono consulta de una api
    modules: {}
})