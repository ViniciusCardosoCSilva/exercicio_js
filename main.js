const form = document.getElementById('campos');



form.addEventListener('submit', function(e){
  
    e.preventDefault();
    const CampoA = document.getElementById('campoa');
    const CampoB = document.getElementById('campob');
    const message = document.querySelector('.success-message');
    const messageSuccess = `O valor do Campo A: <b>${campoa.value}</b> é menor que o do Campo B: <b>${campob.value}</b>: <b>Formulário Válido</b>`;
    const messageError = `O valor do Campo B deve ser maior que o valor do Campo A: <b>Formulário Inválido</b>`;
    if(campoa.value < campob.value){
    
        message.style.color = 'black';
        message.style.display = 'block';
        message.innerHTML = messageSuccess;

    }
    else{

        message.style.color = 'red';
        message.style.display = 'block';
        message.innerHTML = messageError;

    
    }
    
   
   

    
    

});
