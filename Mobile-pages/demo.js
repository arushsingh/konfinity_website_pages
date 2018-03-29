document.addEventListener("DOMContentLoaded",function(){
    const buttons = document.getElementsByClassName('btn');
    const contents = document.getElementsByClassName('content');
    buttons[0].classList.add('active');
    contents[0].classList.add('visible');
    
   function onClick(event){
   for(let i=0;i<buttons.length;i++){
   buttons[i].classList.remove('active');
   contents[i].classList.remove('visible');
   }
   event.target.classList.add('active');
   const id= event.target.getAttribute('data-id');
   contents[id].classList.add('visible');
   
   }
    for(let i=0;i<buttons.length; i++){
        buttons[i].addEventListener('click', onClick);
    }
    
});
