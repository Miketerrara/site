const elements = {    
    burgerToggle: document.querySelector('.toggle'),
    menu: document.querySelector('.menu-toggle'),
    close: document.querySelector('.cross'),
    itensMenu: document.querySelectorAll('.menu-toggle__itens'),
    faq: document.querySelectorAll('.box-faq__question'),
    boxFaq: document.querySelectorAll('.box-faq'),
    resposta: document.querySelectorAll('.response'),
    chevron: document.querySelectorAll('.fi-ts-angle-small-down'),
    nxt: document.querySelector('.nxt'),
    prv:document.querySelector('.prv'),
    photo: document.getElementById('project-photo'),
    modal:document.getElementById('modal'),
    linhaTx:document.getElementById('l01'),
    linhaSx:document.getElementById('l02'),
    linhaMac:document.getElementById('l03'),
    dsModal:document.querySelectorAll('.close'),
    dsModalPlanos:document.querySelector('.close-md-planos'),
    modalPlanos: document.getElementById('md-planos'),
    openModal: document.getElementById('open-md-planos')
}

elements.openModal.addEventListener('click', () => {
    elements.modalPlanos.style.display = 'block';    
})

elements.dsModalPlanos.addEventListener('click', () => {
    elements.modalPlanos.style.display = 'none';
})

let equipTx = elements.linhaTx.childNodes;
let equipSx = elements.linhaSx.childNodes;
let equipMac = elements.linhaMac.childNodes;

let modals = Array.from(elements.modal.children);
console.log(equipMac);

equipTx.forEach((item, index) => {
   
    item.addEventListener('click', () => {
         console.log('apertei no array' + index)
        // Fecha todos os modais antes de abrir um novo
        modals.forEach(modalEl => {
            modalEl.style.display = 'none';
        });
        switch(index) {
            case 1:
            console.log('Deu certo' + index)   
            modals[0].style.display = 'flex';
            break;
            case 3:
            console.log('Deu certo' + index)   
            modals[1].style.display = 'flex';
            break;
            case 5:
            console.log('Deu certo' + index)   
            modals[2].style.display = 'flex';
            break;
            case 7:
            console.log('Deu certo' + index)   
            modals[3].style.display = 'flex';
            break;            
            default:
                // Caso padrão, se necessário
                break;
        }
    });
});
equipSx.forEach((item, index) => {
    item.addEventListener('click', () => {
        console.log('apertei no array' + index)
        modals.forEach(modalEl => {
            modalEl.style.display = 'none';
        });
        switch(index) {
            case 1: 
            console.log('Deu certo' + index)
            modals[4].style.display = 'flex';
            break;
            case 3:
                console.log('Deu certo' + index)
                modals[5].style.display = 'flex';
                break;
            case 5:
                console.log('Deu certo' + index)
                modals[6].style.display = 'flex';
                break;
            case 7:
                console.log('Deu certo' + index)
                modals[7].style.display = 'flex';
                break;
            default:
                break;
        }
    })
})
equipMac.forEach((item, index) => {
    item.addEventListener('click', () => {
        console.log('apertei no array' + index)
        modals.forEach(modalEl => {
            modalEl.style.display = 'none';
        });
        switch(index) {
            case 1: 
            console.log('Deu certo' + index)
            modals[8].style.display = 'flex';
            break;
            case 3:
                console.log('Deu certo' + index)
                modals[9].style.display = 'flex';
                break;
            case 5:
                console.log('Deu certo' + index)
                modals[10].style.display = 'flex';
                break;
            case 7:
                console.log('Deu certo' + index)
                modals[11].style.display = 'flex';
                break;
            default:
                break;
        }
    })
})
elements.dsModal.forEach((item) => {
    item.addEventListener('click', () => {
        console.log('apertei pra fechar o modal')
        modals.forEach(modalEl => {
            modalEl.style.display = 'none';
        });
    });
});

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