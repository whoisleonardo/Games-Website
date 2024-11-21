// sidebar code

const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

// theme switch code

let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.getElementById('theme-switch')

const enableLightmode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if(lightmode === "active") enableLightmode()

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightmode() : disableLightmode()
})

//recomendação

document.addEventListener("DOMContentLoaded", function() {
    
    const botao = document.getElementById("botao");
    const inputJogo = document.querySelector("input[name='text']");
    
    botao.addEventListener("click", function() {
        const nomeJogo = inputJogo.value.trim();
        
        if (nomeJogo !== "") {
            console.log("Você recomendou o jogo: " + nomeJogo);
            inputJogo.value = "";
        } else {
            alert("Por favor, digite o nome de um jogo.");
        }
    });
});


//contato

function enviar(event) {
    event.preventDefault();
    
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const problemaSelect = document.getElementById('problema');
        const problema = problemaSelect.options[problemaSelect.selectedIndex].text;
        const textarea = document.getElementById('textarea').value;

        document.getElementById('nomec').innerText = `Nome: ${nome}`; 
        document.getElementById('emailc').innerText = `Email: ${email}`;
        document.getElementById('boc').innerText = `Problema: ${problema}`;
        document.getElementById('men').innerText = `Mensagem: ${textarea}`;
    }