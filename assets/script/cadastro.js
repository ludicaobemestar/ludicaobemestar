export default class Cadastro{

    constructor(){
        this.BASE_URL = 'https://sheetdb.io/api/v1/g1f44yu6zh964';
    }

    async getDados(){
        await axios.get(this.BASE_URL)
    .then( response => {
        console.log(response.data);
    });
    }

    async setDados(data){
        await axios.post(this.BASE_URL,[data]).then(response => {
        console.log('Dados cadastrados com sucesso', response);
    }); 
    }
} 




// async function pegarDados(){
//     await axios.get('https://sheetdb.io/api/v1/g1f44yu6zh964')
//     .then( response => {
//         console.log(response.data);
//     });
//     await axios.post('https://sheetdb.io/api/v1/58f61be4dda40',{
//     "data": {"name": "Leandroaoo", "age": 22}
//     }).then( response => {
//         console.log(response.data);
//     }); 
//     await axios.get('https://sheetdb.io/api/v1/58f61be4dda40')
//     .then( response => {
//         console.log(response.data);
//     });
// }

//(planilha tutor) id	nome_tutor	email	whatsapp	mensagem  
//(planilha cao) id	id_tutor	nome_cao	sexo	castrado
// pegarDados();