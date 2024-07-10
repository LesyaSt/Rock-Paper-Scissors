
let buttonClose = document.getElementById('lol');
let rules = document.getElementById('rulesDesktop');
let showRules = document.getElementById('show');

showRules.addEventListener("click", function(){
    rules.style.display = 'flex';
})

buttonClose.addEventListener("click", function() {
    rules.style.display = 'none';
})