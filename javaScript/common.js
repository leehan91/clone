// ======================================================================================================header======================================================================================================
const trigger = document.querySelector('.nav .trigger');
const triggerOut = document.querySelector('.nav_burger .trigger');
const nav = document.querySelector('.nav_burger');
const logo = document.querySelector('header .main_l');
const dis = document.querySelector('.nav');
const pre = document.querySelector('.bg_pre')

// trigger.onclick = function(){
trigger.onclick = function(){
    trigger.classList.toggle('active');
    console.log(trigger.classList.contains('active'))
    if(trigger.classList.contains('active') == true){
        nav.classList.add('active');
        logo.style='display:none;'
        dis.style='display:none;'
        pre.style='display:block;'
        triggerOut.classList.remove('active');
        // triggerOut.classList.remove('active');
    } 
}
triggerOut.onclick = function(){
    triggerOut.classList.toggle('active');
    if(triggerOut.classList.contains('active') == true){
        nav.classList.remove('active');
        trigger.classList.remove('active');
        logo.style='display:inline;'
        dis.style='display:flex;'
        pre.style='display:none;'
        
    }
}

