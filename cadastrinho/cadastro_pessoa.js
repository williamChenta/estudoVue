var vm = new Vue({
    el: '#exemplo',
    data: {
        nome: '',
        email: '',
        telefone: ''
    },
    methods: {
        salvar: function () {
            console.log(`Dados para salvar:\nNome: ${this.nome}`)
        }
    }
})