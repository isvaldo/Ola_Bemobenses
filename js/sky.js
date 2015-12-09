/**
 * Created by isvaldo on 06/12/15.
 */
/**
 * Variáveis globais, controles
 * de sincronização dos objetos
 */
var WIDTH;
var HEIGHT;
var canvas;
var con;
var g;
var gravidade_x=0;
var gravidade_y=0;
var tamanhoArco=0;
var red=255;
var green=255;
var blue=255;
var pxs = new Array();
var rint = 100;

$(document).ready(function(){
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    $('#container').width(WIDTH).height(HEIGHT);
    canvas = document.getElementById('pixie');
    $(canvas).attr('width', WIDTH).attr('height',HEIGHT);
    con = canvas.getContext('2d');

    /**
     * Criando e formatando as particulas na tela
     */
    for(var i = 0; i < 100; i++) {
        pxs[i] = new Circle();
        pxs[i].reset();
    }

    /**
     * Apenas demostrando como
     * seria para colocar esse canvas
     * em loop.
     *
     * ---> setInterval(draw,rint);
     */


    /**
     * Carregando objetos da animação
     * @type {*|jQuery|HTMLElement}
     */
    var $mountains = $('#mountains');
    var $grass = $('#grass');
    var $container = $('#container');
    /**
     * Efeito parallax
     */
    $container.mousedown(function(ev){
        var ox = ev.clientX;
        var om = parseInt($mountains.css('background-position').substr(0, $mountains.css('background-position').search(' ')));
        var og = parseInt($grass.css('background-position').substr(0, $grass.css('background-position').search(' ')));
        $container.mousemove(function(e){
            $mountains.css('background-position', om+((e.clientX-ox)/10)+'px 0px');
            $grass.css('background-position', og+((e.clientX-ox)/4)+'px 10px');
        });
        $container.mouseup(function(){
            $container.unbind('mouseup');
        });
    });
});

/**
 *Define cada ciclo de frame
 */
function draw() {
    con.clearRect(0,0,WIDTH,HEIGHT);
    for(var i = 0; i < pxs.length; i++) {
        pxs[i].fade();
        pxs[i].move();
        pxs[i].draw();
    }
}

/**
 * "class" que define cada particula
 * @constructor
 */
function Circle() {
    this.s = {ttl:8000, xmax:5, ymax:2, rmax:10, rt:1, xdef:960, ydef:540, xdrift:4, ydrift: 4, random:true, blink:true};

    this.reset = function() {
        this.x = (this.s.random ? WIDTH*Math.random() : this.s.xdef);
        this.y = (this.s.random ? HEIGHT*Math.random() : this.s.ydef);
        this.r = ((this.s.rmax-1)*Math.random()) + 1;
        this.dx = (Math.random()*this.s.xmax) * (Math.random() < .5 ? -1 : 1);
        this.dy = (Math.random()*this.s.ymax) * (Math.random() < .5 ? -1 : 1);
        this.hl = (this.s.ttl/rint)*(this.r/this.s.rmax);
        this.rt = Math.random()*this.hl;
        this.s.rt = Math.random()+1;
        this.stop = Math.random()*.2+.4;
        this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
        this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
    }

    this.fade = function() {
        this.rt += this.s.rt;
    }
    /**
     * função que desenha cada instante de vida
     * do ciclo de vida das particulas
     */
    this.draw = function() {
        if(this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt*-1;
        else if(this.rt >= this.hl) this.reset();
        var newo = 1-(this.rt/this.hl);
        con.beginPath();
        con.arc(this.x,this.y,this.r,0,Math.PI*2,true);
        con.closePath();
        var cr = this.r*newo+tamanhoArco;
        /**
         *Define a cor e efeito blink das particulas
         */
        g = con.createRadialGradient(this.x,this.y,0,this.x,this.y,(cr <= 0 ? 1 : cr));
        g.addColorStop(0.0, 'rgba('+parseInt(red)+','+parseInt(green)+','+parseInt(blue)+','+newo+')');
        g.addColorStop(this.stop, 'rgba('+parseInt(red *.6)+','+parseInt(green*0.6)+','+parseInt(blue*0.6)+','+(newo*.6)+')');
        g.addColorStop(1.0, 'rgba('+parseInt(red *.6)+','+parseInt(green*0.6)+','+parseInt(blue*0.6)+',0)');
        con.fillStyle = g;
        con.fill();
    }
    /**
     * Define o movimento no ciclo de vida de uma particula
     */
    this.move = function() {
        this.x += (this.rt/this.hl)*this.dx + gravidade_x;
        this.y += (this.rt/this.hl)*this.dy + gravidade_y;
        if(this.x > WIDTH || this.x < 0) this.dx *= -1;
        if(this.y > HEIGHT || this.y < 0) this.dy *= -1;
    }

    this.getX = function() { return this.x; }
    this.getY = function() { return this.y; }
}