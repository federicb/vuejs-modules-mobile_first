export default{
    namespaced: true,
    state:{
        platos: [
            {
                image: '../assets/Ellipse1.png',
                nombre: 'Ensalada',
                precio: 8,
                fav: true
            },
            {
                image: '../assets/Ellipse5.png',
                nombre: 'Arros',
                precio: 9,
                fav: false
            },
            {
                image: '../assets/Ellipse8.png',
                nombre: 'Pollo frito',
                precio: 10,
                fav: false
            },
            {
                image: '../assets/Ellipse11.png',
                nombre: 'Carne asada',
                precio: 8,
                fav: false
            }
        ],
        // favoritos: [{}],
    },
    getters:{
        arrayFav(state){
            return state.productos.filter( element => element.fav == true )
        }
    },
    mutations: {
        addFavorito(state){
            state.fav = !state.fav
        }
    }
    
}