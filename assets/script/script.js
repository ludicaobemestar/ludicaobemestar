import Cadastro from './cadastro.js';


document.getElementById('enviar').addEventListener('click',(e)=>{
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let whatsapp = document.getElementById('whats').value;
    let mensagem = document.getElementById('msg').value;
    let data = {
        'id': 0,
        'nome_tutor': nome,
        'email': email,
        'whatsapp': whatsapp,
        'mensagem': mensagem
    };
    console.log(data);
    let cad = new  Cadastro();
    cad.setDados(data).then(alert('cadastrado'));
    e.preventDefault();
})

