<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="counter">
      {{ $store.state.contador }}
    </div>

    <div>
    {{ $store.state.contador }} <sup>2</sup> = {{ $store.getters.cuadrado}}  
    </div> 

    <div class="botones">
      <button @click="$store.commit('bajarContador')">-</button>
      <button @click="$store.commit('subirContador')">+</button>
      <button @click="$store.dispatch('subirContador')">getData</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {  //Data local
    return{
      counter:0
    } 
  },
  methods: {  //Locales
    bajarContador(){
      this.counter --;
    },
    subirContador(){
      this.counter ++;
    }
  },
}
</script>

<!--scoped indica que solo se usara en el modulo no global-->
<style>
.counter{
  font-size: 40px;
}

.botones button{
  font-size: 40px;
  width: 100px;
  margin: 100px;
}
</style>
