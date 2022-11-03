const contain = document.querySelectorAll('.container > div')
const button = document.querySelectorAll('.button a')
const h2 = document.querySelector('.title h2')
const txt = document.querySelectorAll('.container  .txt')

let delay = setTimeout(()=>{
    h2.classList.add('appear');
    // h2.style('transition: 1.5s');
    
    let ind = 0;
button.forEach(function(b,k){
    button[k].classList.add('appear');
    txt[k].classList.add('appear');
    b.onclick = function(){
        contain[ind].classList.remove('active');
        button[ind].classList.remove('active');
        contain[k].classList.add('active');
        button[k].classList.add('active');
        
        ind = k;
    };
})

},50);