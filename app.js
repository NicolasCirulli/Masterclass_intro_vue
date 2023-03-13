const { createApp } = Vue


createApp( {
    data(){
        return {
            primerPropiedad : 'Hola mundo!',
            arrayNumeros : [],
            valorInput : 0,
            linkImagen : 'https://images.unsplash.com/photo-1591871937631-2f64059d234f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'
        }
    },
    
    methods: {
        agregarNumero(){
            this.arrayNumeros.push( this.valorInput )
            this.valorInput = 0
        }
    },

}).mount("#app")

