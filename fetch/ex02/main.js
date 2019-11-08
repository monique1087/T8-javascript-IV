const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const bairroInput = document.getElementById("bairro")
const complementoInput = document.getElementById("complemento")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")

cepInput.addEventListener('blur', () => {
    if(cepInput.value){
        fetch(`https:viacep.com.br/ws/${cepInput.value}/json`).then(response =>{
            return response.json()
        }).then(json => {
            console.log(json);
            logradouroInput.value = json.logradouro
            bairroInput.value = json.bairro 
            complementoInput.value = json.complemento
            localidadeInput.value = json.localidade
            ufInput.value = json.uf
        })
    }
})