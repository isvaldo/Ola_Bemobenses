# Apresentação Pessoal

![App](https://raw.githubusercontent.com/isvaldo/Ola_Bemobenses/master/img/apresentacao.png "app")

## deploy
![deploy](https://raw.githubusercontent.com/isvaldo/Ola_Bemobenses/master/img/deploy.png "deploy")


## Efeitos



### Som 

No inicio eu tentei utilizar API nativa, mas tive muitos problemas com compatibilidade com (Ogg/mp3)

[stackoverflow](http://pt.stackoverflow.com/questions/102533/problema-de-compatibilidade-com-%C3%A1udio-api-firefox/102534#102534)

Então encontrei essa lib

[howler.js](http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library)

Assim, consegui compatibilidade

```javascript

        var SomDeDigito = new Howl({
            urls: ['sounds/keyboard.ogg', 'sounds/keyboard.mp3']
        });

        var SomDeError = new Howl({
            urls: ['sounds/erro.ogg', 'sounds/erro.mp3']
        });

        var SomDeSky = new Howl({
            urls: ['sounds/sky.ogg', 'sounds/sky.mp3']
        });

        var SomDeEstrela = new Howl({
            urls: ['sounds/estrela.ogg', 'sounds/estrela.mp3']
        });

        var SomDeSkyFall = new Howl({
            urls: ['sounds/skyFall.ogg', 'sounds/skyFall.mp3']
        });

        var SomDeFilme = new Howl({
            urls: ['sounds/war.ogg', 'sounds/war.mp3']
        });

```

### Terminal

Terminal é uma lib, gerência a entrada e saida, somente isso.

[http://terminal.jcubic.pl/](http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library)


### Cenario

o cenario, eu peguei um exemplo e adaptei
[Codepen/](http://codepen.io/search/pens?q=particules&limit=all&type=type-pens)

### Animação

piscar em varias cores...

```javascript

var rand = function () {
    return (Math.floor(Math.random() * 255) + 50);
};
//@ ASYNC 1 (+6)
var t = setInterval(function () {
    red = rand();
    blue = rand();
    green = rand();
    SomDeEstrela.play();
}, 200);

```


### Filme

O filme é um clasico do telnet, uma animação antiga (muito antiga)

Source : [text/](https://raw.githubusercontent.com/isvaldo/Ola_Bemobenses/master/js/star_wars.js)
[Reprodução/](https://www.youtube.com/watch?v=W7tmiu3WEw8)






