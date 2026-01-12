/*botão que troca o video */
var videoButton = window.document.getElementById('video-button');
/*conteúdo substituído */
var videoContent = window.document.getElementsByClassName('hero-main')[0];
/*event listener para o evento de trocar o video */
videoButton.addEventListener('click', video);


function video() {
    let windowActualWidth = window.innerWidth;

        if (windowActualWidth > 1080){
            videoContent.innerHTML = '<iframe width="1080" height="720" src="https://www.youtube.com/embed/YUyg3P_rsdE?si=NflRMOc3INwGIzbl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        } else if (windowActualWidth > 800) {
            videoContent.innerHTML = '<iframe width="720" height="540" src="https://www.youtube.com/embed/YUyg3P_rsdE?si=NflRMOc3INwGIzbl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        } else {
            videoContent.innerHTML = '<iframe width="500" height="100%" src="https://www.youtube.com/embed/YUyg3P_rsdE?si=NflRMOc3INwGIzbl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'

        }
}

//Botão para pausar o carrossel
//variáveis necessárias
let pauseBtn = window.document.getElementById('carrossel-btn')
let mainCarrossel = window.document.getElementById('carrossel-main');
//Event Listener para o botão de pausar
pauseBtn.addEventListener('click', toggleAnimation)
//Função para pausar e retomar a animação do carrossel
function toggleAnimation() {
    //Verifica o estado atual da animação
    let pausado = window.getComputedStyle(mainCarrossel).animationPlayState;
//Troca o estado da animação e o ícone do botão conforme o estado atual
    if (pausado === 'running') {
        mainCarrossel.style.animationPlayState = 'paused'
        pauseBtn.innerHTML = '<img src="midia/icons/play-icon-128x128.png" alt="Ícone de play">'
        //Se estiver pausado, retoma a animação e troca o ícone para pause
    } else {
        mainCarrossel.style.animationPlayState = 'running'
        pauseBtn.innerHTML = '<img src="midia/icons/pause-64x64.png" alt="Ícone de play">'
    }
    //Se estiver rodando, pausa a animação e troca o ícone para play
}

//Função para remover o aviso de rolagem lateral
let inativodiv = window.document.getElementById('inativo');
//Adiciona o event listener para o clique no aviso
inativodiv.addEventListener('click', desativarInativo);
//Função que desativa o aviso
function desativarInativo() {
    inativodiv.style.display = 'none';
    preventDefault();
}

 function showContent(index) {
            // Remove a classe active de todas as opções e conteúdos
            document.querySelectorAll('.menu-option').forEach(option => {
                option.classList.remove('active');
            });
            
            document.querySelectorAll('.content').forEach(content => {
                content.classList.remove('active');
            });

            // Adiciona a classe active à opção e conteúdo selecionados
            document.querySelectorAll('.menu-option')[index].classList.add('active');
            document.querySelectorAll('.content')[index].classList.add('active');
        }