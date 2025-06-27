const elements = {    
    burgerToggle: document.querySelector('.toggle'),
    menu: document.querySelector('.menu-toggle'),
    close: document.querySelector('.cross'),
    itensMenu: document.querySelectorAll('.menu-toggle__itens'),
    faq: document.querySelectorAll('.box-faq__question'),
    boxFaq: document.querySelectorAll('.box-faq'),
    resposta: document.querySelectorAll('.response'),
    chevron: document.querySelectorAll('.fi-ts-angle-small-down')    
}

elements.burgerToggle.addEventListener('click', () =>{
    elements.menu.classList.toggle('menu-toggle--active');
})

elements.close.addEventListener('click', () =>{
    elements.burgerToggle.dispatchEvent(new Event('click'));
})

elements.itensMenu.forEach(item =>{
    item.addEventListener('click', () =>{
        elements.burgerToggle.dispatchEvent(new Event('click'));
        console.log('clicou no item')
    })
})

let positionLinks = document.querySelector('.project__photo--over');

let hrefElement = positionLinks.children

Array.from(hrefElement).forEach(item =>{
    item.addEventListener('click', () =>{
        let title = item.getAttribute('src');
        
        // Substitui o caminho dentro do atributo href do elemento clicado
        item.setAttribute('src', './sources/project-3d/projeto-academia_07.png');
        console.log(title);
    })
})


elements.faq.forEach((item, index) => {
    item.addEventListener('click', () => {
        elements.boxFaq[index].classList.toggle('box-faq--active');
        if (elements.boxFaq[index].classList.contains('box-faq--active')){
            elements.chevron[index].style.rotate = "-90deg";
        }else{
            elements.chevron[index].style.rotate = "0deg";
        }
        elements.resposta[index].classList.toggle('response--active');

        console.log('clicou certo!')
    });
});