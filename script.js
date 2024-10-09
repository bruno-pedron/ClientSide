document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('form');
    form.addEventListener('submit', async(event) =>{
        event.preventDefault();

        //coletar o valor dos campos dos inputs do formulario
        const nomeValue = document.getElementById('nome').value;
        const emailValue = document.getElementById('email')?.value;
        const motivoValue = document.getElementById('motivo').value;
        const produtoValue = document.getElementById('produto').value;

        //criar um objeto com os dados do formulario
        const formData = {
            nome: nomeValue,
            email: emailValue,
            motivo: motivoValue,
            produto: produtoValue,
        };

        //exibe os dados coletados no console
        console.log('Dados coletados', formData);

        //utilizar a fetch api para enivar os dados para o servidor
        //utilizando o metodo post

        const response = await fetch('http://www.api.com/cadastro',{
            method: 'POST',
            headers:{
                'Content-type': 'applications/json'
            },
            body: JSON.stringify(formData)
         })
    });
});
