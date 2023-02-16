<template>
  <section>
    <router-link to="/"></router-link> 
    <router-view/>
  </section>
    
  
</template>

<style lang="sass">

  @mixin flex
    display: flex
    justify-content: center
  *
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: 'Lato', sans-serif
  .title
    color: #000
    text-decoration: none
    font-size: 30px
  .cajas-nav
    border: 2px solid #DADADA
    padding: .7rem
    border-radius: 10px
    margin-right: 1rem
    i
      color: #DADADA
  .main
    height: 100vh
    background: #ffffff
    @include flex
    align-items: center
    flex-direction: column
    .head
      height: 30vh
      width: 100%
      @include flex
      flex-direction: column
      line-height: 2rem
      position: fixed
      top: 0     
      .title, p, nav
        margin: 1rem
    .items
      width: 100%
      @include flex
      align-items: center
      flex-wrap: wrap
      margin-top: 6rem 
      .plato
        border: 2px solid #DADADA
        width: 158px
        height: 220px
        border-radius: 15px
        margin: .7rem
        @include flex
        flex-direction: column
        align-items: center
        legend
          background: #FB0000
          border-radius: 10px
          padding: 3px 8px
          text-align: center
          font-size: 15px 
        .heart
          width: 100%
          display: flex
          justify-content: end
          i
            margin-right: .7rem 
            color: #DADADA
        img
          padding: .4rem 0
        .nombre_plato
          width: 100%
          margin-left: 2rem
        .precio_add
          width: 100%
          @include flex
          justify-content: space-between
          padding: 0 .8rem
          span, i
            color: #66D678

</style>
