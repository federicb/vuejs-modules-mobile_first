<template>
  <main class="main">
    <section class="head">
        <router-link class="title" to="/">4tucode</router-link>
        <p>Elige uno de estos deliciosos platos</p>
        <nav>
            <router-link class="cajas-nav" to="/productos"><i class="fa-solid fa-house-chimney"></i></router-link>
            <router-link class="cajas-nav" to="/favoritos"><i class="fa-solid fa-heart"></i></router-link>
        </nav>
    </section>
    <section id="productos" class="items">
        <fieldset class="plato" v-for="item in platos" :key="item">
            <legend>10% off</legend>
            <div class="heart">
                <i class="fa-solid fa-heart"></i>
            </div>
            <img :src="item.image">
            <span class="nombre_plato">{{item.nombre}}</span>
            <div class="precio_add">
                <span class="precio">{{item.precio}}€</span>
                <i class="fa-solid fa-circle-plus"></i>
            </div>
        </fieldset>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'ProductosView',
    computed: {
        ...mapState('productos', ['platos'])
    }
}
</script>

<style>

</style>