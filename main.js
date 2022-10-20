const listaTarefas = {
    input: document.querySelector("[data-form='input']"),
    botao: document.querySelector("[data-form='botao']"),
    lista: document.querySelector("[data-lista='lista']"),

    validainput(){
        let input = this.input
        if(input.value.length <= 3){
            alert("Insira uma Tarefa!")
            return false
        }
        return true
    },


    limparInput(){
        this.input.value = ""
    },

    addTarefa(){
        if(this.validainput() === true){
            this.lista.innerHTML += this.template(this.input.value)
            this.limparInput()
        }
    },

    template (x){
        return `<li class="item">${x}
                    <button class="Concluir">V</button>
                    <button class="Excluir">X</button>
                </li>`
    },

    removerTarefa(item){
        item.target.parentNode.remove(true)
    },

    concluirTarefa(item){
        item.target.parentNode.classList.toggle("itemAtivo")
    },

}

listaTarefas.botao.addEventListener("click", () => {
    listaTarefas.addTarefa()
})



listaTarefas.lista.addEventListener("click", (e) => {
    let conteudo = e.target.innerHTML
    if (conteudo === "X") {
        listaTarefas.removerTarefa(e)
    }
    else if (conteudo === "V") {
        listaTarefas.concluirTarefa(e)
    }
})



