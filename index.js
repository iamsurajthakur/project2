let openBtn = document.getElementById('open-btn');
let modal = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function(){

    modal.style.display = 'block';
})

closeBtn.addEventListener('click', function(){

    modal.style.display = 'none';
})

window.addEventListener('click', function(e){

    if(e.target === modal)
        modal.style.display = 'none';
       
    
})