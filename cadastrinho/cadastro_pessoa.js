var vm = new Vue({
    el: '#exemplo',
    data: {
        nome: '',
        email: '',
        telefone: '',
        pessoas: []
    },
    methods: {
        salvar: function () {
            this.pessoas.push({
                nome: this.nome,
                email: this.email,
                telefone: this.telefone,
            })
            this.reset()
        },
        excluir: function(email) {
            indice = 0
            this.pessoas.forEach(p => {
                if (p.email == email) {
                    this.pessoas.splice(indice,1)
                }
                indice++
            });
        },
        reset: function() {
            this.nome = ''
            this.email = ''
            this.telefone = ''
        }
    }
})
