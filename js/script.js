const elements = {
    faq: document.querySelectorAll('.box-questions'),
    resposta: document.querySelectorAll('.response'),
    chevron: document.querySelectorAll('.fi-br-angle-small-down')    
}

elements.faq.forEach((item, index) => {
    item.addEventListener('click', () => {
        elements.chevron[index].classList.toggle('active');
        elements.resposta[index].classList.toggle('active');
    });
});