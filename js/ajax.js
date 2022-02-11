const request = (url) => {
    if(url != undefined){
        if(url == 'pagina_1_conteudo.html'){
            
            // request à pagina
            let http_request = new XMLHttpRequest();

            //state da requisição: 0 - nao iniciada, 1 - conexão estabelecida, 2 - requisição recebida, 3 - processando, 4 -fim

            // state1:
            http_request.open('GET', url);

            // state2
            http_request.send();

            //state3: (objeto que indica mudanca de estado devido a resposta do servidor)
            http_request.onreadystatechange = () => {
                let conteudo = http_request.response;
                document.getElementById('localContent').innerHTML = conteudo;  //carrega conteudo no local da pagina
            }

        }else if(url == 'pagina_2_conteudo.html'){

            
                          // request à pagina
            let http_request = new XMLHttpRequest();

            //state da requisição: 0 - nao iniciada, 1 - conexão estabelecida, 2 - requisição recebida, 3 - processando, 4 -fim
          

            // state1:
            http_request.open('GET', url);
          
            // state2
            http_request.send();

            //state3: (objeto que indica mudanca de estado devido a resposta do servidor)
           
            http_request.onreadystatechange = () => {
                let conteudo = http_request.response;
                document.getElementById('localContent').innerHTML = conteudo;  //carrega conteudo no local da pagina
            }
 
 
  
          
           

        }else{
            // request à pagina
            let http_request = new XMLHttpRequest();

            //state da requisição: 0 - nao iniciada, 1 - conexão estabelecida, 2 - requisição recebida, 3 - processando, 4 -fim

            // state1:
            http_request.open('GET', url);

            // state2
            http_request.send();

            //state3: (objeto que indica mudanca de estado devido a resposta do servidor)
            http_request.onreadystatechange = () => {
                let conteudo = http_request.response;
                document.getElementById('localContent').innerHTML = conteudo;  //carrega conteudo no local da pagina
            }

        }
    }
}

request()