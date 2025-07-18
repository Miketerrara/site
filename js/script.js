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
    openModal: document.getElementById('open-md-planos'),
    equipItens: document.querySelectorAll('.box-equipment'),


}
const _gallery = [
    [
        ["./sources/Máquinas Alfa/IMG-20250328-WA0040.jpg", "", "Linha Alfa TX - TX1052", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0041.jpg", "", "Linha Alfa TX - TX1054", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0042.jpg", "", "Linha Alfa TX - TX1015", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0047.jpg", "", "Linha Alfa TX - TX1040", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e porta garrafas que aumentam a sua conveniência no momento do treino."]        
    ],
    [
        ["./sources/Máquinas Alfa/IMG-20250328-WA0094.jpg", "", "Linha Alfa SX - SX2020", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0096.jpg", "", "Linha Alfa SX - SX2012", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0103.jpg", "", "Linha Alfa SX - 2059", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."],
        ["./sources/Máquinas Alfa/IMG-20250328-WA0105.jpg", "", "Linha Alfa SX - 2090", "Estofado de alta resistência e formato anatômico para maior conforto ao fazer seus exercícios, porta objetos e garrafas que aumentam a sua conveniência no momento do treino. Ideal para quem quer treinar com em um ambiente mais agradável."]      
    ],
    [
        ["./sources/maquinas-sigma/recortadas/cross-angular-smith.png", "", "Linha Sigma", "Estofado de produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],
        ["./sources/maquinas-sigma/crossover-tradicional.png", "", "Linha Sigma", "Estofado de produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],
        ["./sources/maquinas-sigma/Gluteo-Deslizante.jpeg", "", "Linha Sigma", "Estofado de produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],
        ["./sources/maquinas-sigma/recortadas/panturilha-agachamento.png", "", "Linha Sigma", "Estofado de produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquinas-sigma/recortadas/peck-deck.png", "", "Linha Sigma", "Estofado de produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquinas-sigma/Polia-Regulavel-Simples-1.jpg", "", "Linha Sigma", "Estofado de produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquinas-sigma/Pulley-com-Remada-6.jpeg", "", "Linha Sigma", "Estofado de produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquinas-sigma/recortadas/Remada-Sentada-Maquina.png", "", "Linha Sigma", "Estofado de produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."],      
        ["./sources/maquinas-sigma/Supino-Vertical-Maquina-3.jpeg", "", "Linha Sigma", "Estofado de produzido em Courvin padrão Náutico Antimofo para maior durabilidade e custo benefício, cabos de aço em Nylon (alta resistência), mais segurança nos movimentos dos seus exercícios."]     
    ]
]
function modal() {

    elements.modalPlanos.style.display = "block";

    elements.dsModalPlanos.addEventListener('click', () => {
        elements.modalPlanos.style.display = 'none';
    })    
}

if (document.querySelector('#beneficios')) {
    let equipTx = elements.linhaTx.childNodes;
    let equipSx = elements.linhaSx.childNodes;
    let equipMac = elements.linhaMac.childNodes;
    
    let modals = Array.from(elements.modal.children);
    
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
    });
    
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
    });
    
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
    });
    
    elements.close.addEventListener('click', () =>{
        elements.burgerToggle.dispatchEvent(new Event('click'));
    });
    
    elements.itensMenu.forEach(item =>{
        item.addEventListener('click', () =>{
            elements.burgerToggle.dispatchEvent(new Event('click'));
            console.log('clicou no item')
        })
    });
    
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
}
let tx = _gallery[0];
let sigma = _gallery[2];

function openModalEquip() {
    let modalEquip = document.getElementById('m01');    
    
    modalEquip.style.display = 'none';    
    modalEquip.style.display = 'block';
}

function dsModal(modals){
    elements.dsModal.forEach((item) => {
        item.addEventListener('click', () => {
            console.log('apertei pra fechar o modal')
            modals.style.display = 'none';
        });
    });
}
function switchModal(index){
    modalEquip.style.display = 'none';    
    modalEquip.style.display = 'flex';
    
    let modalImg = document.getElementById("item");
    let sigmaImg = sigma[index][0];
    let sigmaLine = sigma[index][2];
    let sigmaDsc = sigma[index][3];
    document.querySelector(".modal__infos").children[0].innerHTML = document.querySelectorAll(".complete-line__footer-title")[index].innerText;
    document.querySelector(".modal__infos").children[1].innerHTML = sigmaLine;
    document.querySelector(".modal__infos").children[2].innerHTML = sigmaDsc;

    modalImg.setAttribute('src', sigmaImg)
    let modals = modalEquip;
    console.log(sigmaLine)

    return dsModal(modals)
}
//document.querySelector(".modal__infos").children[0]
let modalEquip = document.getElementById('m01'); 

elements.equipItens.forEach((item, index) => {
    item.addEventListener('click', ()=>{
    switchModal(index);
    })
})
