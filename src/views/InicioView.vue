<template>
  <section id="principal">
    <img src="../assets/FIGMA-removebg-preview1.png">
    <h1>4tufood</h1>
    <router-link id="btn" to="/productos">Realiza tu pedido</router-link>     
  </section>
</template>

<script>
export default {
    name: 'InicioView',
}
</script>

<style lang="sass" scoped>
    #principal
        height: 100vh
        background: #66D678
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        h1
            color: #fff
            font-size: 30px
            margin: 2rem 0
        #btn
            background: #F9FEFA
            opacity: 80%
            padding: .8rem 1.5rem
            border-radius: 20px
            text-decoration: none

</style>