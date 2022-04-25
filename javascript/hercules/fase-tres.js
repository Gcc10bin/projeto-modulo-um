function validacaoDeDados(){
    var escolhaUmaOpcao = prompt('Tome uma decisão: opção 1 ou 2?');
    while(true){
        if(escolhaUmaOpcao == 1 || escolhaUmaOpcao == 2){
            break
        } else{
            alert("invalido. escolha entre a opção 1 ou 2!");
            escolhaUmaOpcao = prompt("Tome uma decisao: opcao 1 ou 2?");
        } 
    } function proximaFase(){
        if(escolhaUmaOpcao == '1'){
            window.location.href = 'game-win.html';
        } else{
            window.location.href = 'game-over.html';
        }
    }   proximaFase();
}


