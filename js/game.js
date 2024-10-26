let images = ['img/calleri.jpg','img/arboleda.jpg','img/ceni.jpg','img/dani.jpeg','img/ferraresi.jpg','img/hernanes.jpg','img/james.jpeg',
    'img/lucas.jpg','img/luciano.jpg','img/michel.jpg','img/nestor.png']
function gerar()
{
    var ramdom = Math.floor(Math.random() * images.length)
    document.getElementById('imgjogador').src = images[ramdom]
}
function validar(escolhido)
{
    var jogador = document.getElementById('imgjogador').src.split('/').pop(); // Extrai apenas o nome do arquivo
    console.log(jogador); // Adiciona um console.log para verificar o nome do arquivo
    if (jogador === 'calleri.jpg' && (escolhido === 'argentina' || escolhido === 'cdb')) {
        console.log(jogador)
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Acertou mizeravi')
        gerar()
    } else if (jogador === 'arboleda.jpg' && (escolhido === 'equador' || escolhido === 'cdb')) {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Acertou mizeravi')
        gerar()
    } else if (jogador === 'ceni.jpg' && (escolhido === 'brasil' || escolhido === 'mundial' || escolhido === 'brasileiro' || escolhido === 'liberta')) {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Acertou mizeravi')
        gerar()
    } else if (jogador === 'dani.jpeg' && (escolhido === 'brasil')) {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Acertou mizeravi')
        gerar()
    } else if (jogador === 'ferraresi.jpg' && (escolhido === 'venezuela' || escolhido === 'cdb')) {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Acertou mizeravi')
        gerar()
    } else if (jogador === 'hernanes.jpg' && (escolhido === 'brasil' || escolhido === 'brasileiro')) {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Acertou mizeravi')
        gerar()
    } else if (jogador === 'james.jpeg' && (escolhido === 'colombia' || escolhido === 'cdb')) {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Acertou mizeravi')
        gerar()
    } else if (jogador === 'lucas.jpg' && (escolhido === 'brasil' || escolhido === 'cdb')) {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Acertou mizeravi')
        gerar()
    } else if (jogador === 'luciano.jpg' && (escolhido === 'brasil' || escolhido === 'cdb')) {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Acertou mizeravi')
        gerar()
    } else if (jogador === 'michel.jpg' && (escolhido === 'uruguai' || escolhido === 'cdb')) {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Acertou mizeravi')
        gerar()
    } else if (jogador === 'nestor.png' && (escolhido === 'brasil' || escolhido === 'cdb')) {
        document.getElementById(escolhido).src = 'img/yessir.png'
        alert('Acertou mizeravi')
        gerar()
    }
}