// Função para gerar as palavras aleatórias do título 
var div = document.getElementById('texto');
var textos = ['Sua revolução', 'Seu caminho', 'Seu futuro', 'Sua jornada'];

function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 700); // só para esperar um bocadinho ao trocar
        }
        var next = char.pop();
        div.innerHTML += next;
    }, 100);
}


function limpar(done) {
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 40);
}

function rodape(conteudos, el) {
    var atual = -1;

    function prox(cb) {
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function() {
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);


// Função troca de imagens seção metodologia
function trocaImg01() {
    document.getElementById('img').src = "src/img/gif01.webp";
}

function trocaImg02() {
    document.getElementById('img').src = "src/img/gif02.webp";
}

function trocaImg03() {
    document.getElementById('img').src = "src/img/gif03.webp";
}

// Função para a seção metodologia
var section = $('button');

function toggleAccordion() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');

    } else {
        section.removeClass('active');
        $(this).addClass('active');
    }
}

// Integração com ACTIVE CAMPAIGN

(function(e, t, o, n, p, r, i) {
    e.visitorGlobalObjectAlias = n;
    e[e.visitorGlobalObjectAlias] = e[e.visitorGlobalObjectAlias] || function() {
        (e[e.visitorGlobalObjectAlias].q = e[e.visitorGlobalObjectAlias].q || []).push(arguments)
    };
    e[e.visitorGlobalObjectAlias].l = (new Date).getTime();
    r = t.createElement("script");
    r.src = o;
    r.async = true;
    i = t.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(r, i)
})(window, document, "https://diffuser-cdn.app-us1.com/diffuser/diffuser.js", "vgo");
vgo('setAccount', '90511734');
vgo('setTrackByDefault', true);

vgo('process');

// FIM DA INTEGRAÇÃO

// Função do botão para subir ao topo
section.on('click', toggleAccordion);

$(document).ready(function() {
    $('#subir').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

// Função rferente a conversão mais ráida no carregamento 
(function(d, c) {
    var i = c || 'preload',
        u, ifw = 'PGlmcmFtZSB3aWR0aD0iMCIgaGVpZ2h0PSIwIiBzdHlsZT0icG9zaXRpb246IGFic29sdXRlO3RvcDotMTAwMHB4OyIgc3JjPSJodHRwczovL3N1bi5lZHV6ei5jb20vcGl4ZWwve2lkfSI+PC9pZnJhbWU+';
    d.write(atob(ifw).replace('{id}', i));
})(document, 665735);