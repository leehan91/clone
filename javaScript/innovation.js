const contain = document.querySelectorAll('.container > div')
const button = document.querySelectorAll('.button a')

let ind = 0;
button.forEach(function(b,k){
    b.onclick = function(){
        contain[ind].classList.remove('active');
        button[ind].classList.remove('active');
        contain[k].classList.add('active');
        button[k].classList.add('active');

        ind = k;
    };
})