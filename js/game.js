//array que guardará todas as imagens dos jogadores
let images = ['img/calleri.jpg','img/arboleda.jpg','img/ceni.jpg','img/ferraresi.jpg','img/hernanes.jpg','img/james.jpeg',
    'img/lucas.jpg','img/luciano.jpg','img/michel.jpg','img/nestor.png']
let i = 0 // numero de imagens existente
let j = 0 // numero de acertos (caso ele passe o numero de imagem, eu reseto ai ele vai acertando sem ter que zerar a sua sequencia)
let selectedDifficulty = localStorage.getItem('selectedDifficulty') //olha o pacote ai, chegou
let tempo // tempo
//fazendo as posiveis escolhas que ele clicou na pagina anterior
if(selectedDifficulty === 'infinito')
{
    tempo = Infinity
}
else 
{ 
    tempo = parseInt(selectedDifficulty) 
}
// o laranja que vai receber o tempo sendo decrementado
let osama = document.getElementById("binladen");
let timer
function startTimer() 
{
    if (tempo > 0) 
    {
        timer = setInterval(function () 
        {
            osama.innerHTML = tempo--
            if (tempo == 0) // curioso que se o tempo for 2 esse safado ja zera
            {
                clearInterval(timer)
                alert("tempo esgotado")
                window.location.href = "capa.html"
            }
        }, 1000)
    }
}
//startando o tempo
startTimer()
// gerando de forma procedural as imagens
function gerar()
{
    var ramdom = Math.floor(Math.random() * images.length)
    document.getElementById('imgjogador').src = images[ramdom]
}
//passo chave do jogo validação
function validar(escolhido)
{
    //essa variavel contem a src do jogador que está selecionado no momento, como o usuario pode skipar jogador, ela vai pegar valor do próximo
    var jogador = document.getElementById('imgjogador').src.split('/').pop(); // Extrai apenas o nome do arquivo
    console.log(jogador); // Adiciona um console.log para verificar o nome do arquivo, usei apenas para ver se tava certinho
    //ta certo vamos ao que interessa, eu to fazendo todas as possibilidades na mão, porem o usuario só pode fazer uma delas
    //se ele fizesse mais quebraria o jogo, ficaria muito facil
    if (jogador === 'calleri.jpg' && (escolhido === 'argentina' || escolhido === 'cdb')) 
    {
        console.log(jogador)
        //aqui, a foto das competicoes ou pais que ele escolheu, ficara com sinal verde
        document.getElementById(escolhido).src = 'img/yessir.png'
        //aviso ele que acertou
        alert('Correto')
        //de 10 imagens, ele ja acertou uma, entao incremento
        i++
        //incremento a streak
        j++
        //gero outro jogador aleatorio, para deixar o jogo dinamico
        gerar()
    } else if (jogador === 'arboleda.jpg' && (escolhido === 'equador' || escolhido === 'cdb')) 
    {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Correto')
        i++
        j++
        gerar()
    } else if (jogador === 'ceni.jpg' && (escolhido === 'brasil' || escolhido === 'mundial' || escolhido === 'brasileiro' || escolhido === 'liberta')) 
    {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Correto')
        i++
        j++
        gerar()
    }  else if (jogador === 'ferraresi.jpg' && (escolhido === 'venezuela' || escolhido === 'cdb')) 
    {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Correto')
        i++
        j++
        gerar()
    } else if (jogador === 'hernanes.jpg' && (escolhido === 'brasil' || escolhido === 'brasileiro')) 
    {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Correto')
        i++
        j++
        gerar()
    } else if (jogador === 'james.jpeg' && (escolhido === 'colombia' || escolhido === 'cdb')) 
    {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Correto')
        i++
        j++
        gerar()
    } else if (jogador === 'lucas.jpg' && (escolhido === 'brasil' || escolhido === 'cdb')) 
    {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Correto')
        i++
        j++
        gerar()
    } else if (jogador === 'luciano.jpg' && (escolhido === 'brasil' || escolhido === 'cdb')) 
    {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Correto')
        i++
        j++
        gerar()
    } else if (jogador === 'michel.jpg' && (escolhido === 'uruguai' || escolhido === 'cdb')) 
    {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Correto')
        i++
        j++
        gerar()
    } else if (jogador === 'nestor.png' && (escolhido === 'brasil' || escolhido === 'cdb')) 
    {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Correto')
        i++
        j++
        gerar()
    }
    //aqui caso ele tenha atingido todas as opcoes possiveis de imagens, ele venceu
    if(i==10)
    {
        ganhou()
    }
    //ativando a sequencia
    streak()
}
//caso ele ja tenha ganhado, reseto as imagens para suas src´s naturais
function reseta()
{
    document.getElementById('brasil').src = "img/flag-6509488_960_720.png"
    document.getElementById('colombia').src = "img/Flag_of_Colombia.svg.png"
    document.getElementById('equador').src = "img/images (1).png"
    document.getElementById('uruguai').src = "img/images.png"
    document.getElementById('argentina').src = "img/argentina.png"
    document.getElementById('venezuela').src = "img/Venezuela-1111x740.jpg"
    document.getElementById('liberta').src = "img/logo.jpg"
    document.getElementById('cdb').src = "img/Logo-Copa-do-Brasil.png"
    document.getElementById('brasileiro').src = "img/brasileiro.png"
    document.getElementById('mundial').src = "img/mundial.png"
}
//função que mostrará caso o usuario ganhe
function ganhou()
{
    alert("boa, zerou o bagui")
    i = 0
    reseta()
}
//fazendo a parte de sequencia (poontuação)
function streak()
{
    document.getElementById('kk').innerHTML = "Pontuação: " + j
}
//direcionando a pessoa que esta na home para entrar no jogo
function direcaog()
{
    //evento vai rolar quando o botão for 'clicado'
    document.getElementById("buttons").addEventListener("submit", function(event) 
    {
        event.preventDefault(); 
        //registrando constante para obter informação do select da pagina capa
        const selectElement = document.getElementById('opcao'); 
        //constante para extrair o valor
        const selectedValue = selectElement.value;
        //faço isso para poder usar la em cima do script, como se fosse eu embalando essa variavel numa caixa
        //coloco no elevador o pacote ai ele sobe la no ultimo andar e a pessoa que pediu recebe e pode usar
        localStorage.setItem('selectedDifficulty', selectedValue)
        // direcionando para a tela de jogo por fim
        window.location.href = "jogo.html"
    })
}