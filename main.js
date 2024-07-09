let buttonClose = document.getElementById('lol');
let rules = document.getElementById('rulesDesktop');
let showRules = document.getElementById('show');

showRules.addEventListener("click", function(){
    rules.style.display = 'flex';
})

buttonClose.onclick = function(){
    rules.showModal();
}

buttonClose.addEventListener("click", function() {
    rules.style.display = 'none';
})