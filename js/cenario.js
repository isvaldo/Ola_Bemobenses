/**
 * Created by isvaldo on 06/12/15.
 */


function digito(speed){
    if (speed>40){
        SomDeDigito.play();
    }else if (speed>10){
        // 40% chances de executar
        if(Math.random() >= 0.6){
            SomDeDigito.play();
        }
           }else {
        // 10% executar
        if(Math.random() >= 0.91){
            SomDeDigito.play();
        }
    }
}
function typed(finish_typing) {
    return function (term, message, delay, finish, song) {
        anim = true; // Infelizmente Global
        var prompt = term.get_prompt();
        var c = 0;
        if (message.length > 0) {
            term.set_prompt('');
            var interval = setInterval(function () {
                (!song) && digito(delay);
                term.insert(message[c++]);
                if (c == message.length) {
                    clearInterval(interval);
                    // execute in next interval
                    setTimeout(function () {
                        // swap command with prompt
                        finish_typing(term, message, prompt);
                        anim = false;
                        finish && finish();
                    }, delay);
                }
            }, delay);
        }
    };
}
var typed_prompt = typed(function (term, message, prompt) {
    term.set_command('');
    term.set_prompt(message + ' ');
});
var typed_message = typed(function (term, message, prompt) {
    term.set_command('');
    term.echo(message);
    term.set_prompt(prompt);
});


function pessoal(term, next) {
    term.clear();
    term.echo("[[guib;white;]Pessoal(self);]");
    term.echo(" ");
    var lero = ["Bom, "+term.usuario,
        "Meu nome é isvaldo, eu tenho 22 anos e faço Análise de Sistemas no Infnet",
        "Eu sou uma pessoa muito interessada por tecnologia e ciência em geral",
        "Sou muito dedicado, tenho um grande carinho por tudo que faço",
        "Gosto de pisar no desconhecido, estudo sobre qualquer coisa...",
        "Sempre que descubro algo interessante, gosto de compartilhar",
        "Adoro Robótica, Animação, Programação e exploração de dados scraping..",
        "Penso em fazer mestrado .. doutorado etc.. adoro a vida academica/pesquisa",
        " ",
        "Ahhh eu também leio bastante sobre Neurociência  kkkk"];

    var start = 0;
    var FalaPessoal = function (start) {
        //@ ASYNC Nivel 1
        typed_message(term, lero[start], 100, function () {
            start++;
            if (start == lero.length) {
                typed_message(term, ". . . .", 600, function () {
                    term.clear();
                    next && next();
                    return false;
                });
                return false;
            }
            FalaPessoal(start);
        });
    };
    FalaPessoal(start);

}
//@ ASYNC Nivel 11
function motivacao(term, next) {
    term.echo("[[guib;white;]Motivacao(self);]");
    term.echo(" ");
    var lero = ["Minha paixão começou com eletrônica, Resistores, leds, diodos, Uhull",//0
        "Então encontrei a robótica… o que me levou a programação, ",//1
        "O que me deu na cabeça? por que escolhi programação?",//2
        "Bom ... ",//3
        "Programar me permite fazer coisas incríveis… eu realmente amo !",//4
        "Posso criar e modificar qualquer coisa, A quantidade... O tamanho .. observe !",//5
        "Posso Mudar... A Cor, O Som ...",//6
        "Posso brincar com a fisica, por exemplo, adeus gravidade....",//7
        "O melhor de tudo, posso mostrar isso para você… " + term.usuario,
        "Pronto... também posso fazer isso xD"];//8

    /**
     * @Todo Seria melhor passar  msg + time, da para colocar
     * essas entradas em JSON..
     */
    //@ ASYNC Nivel 1
    typed_message(term, lero[0], 100, function () {
        //@ ASYNC Nivel 2
        typed_message(term, lero[1], 90, function () {
            //@ ASYNC Nivel 3
            typed_message(term, lero[2], 50, function () {
                //@ ASYNC Nivel 4
                typed_message(term, lero[3], 250, function () {
                    //@ ASYNC Nivel 5
                    typed_message(term, lero[4], 70, function () {
                        tamanhoArco = 20;
                        //@ ASYNC Nivel 6
                        typed_message(term, lero[5], 125, function () {
                            //Forma das coisas
                            //a mudança começa no seguimento
                            //prodecessor
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
                            //@ ASYNC Nivel 7
                            typed_message(term, lero[6], 125, function () {
                                // Brilhando, em varias cores
                                //@ ASYNC Nivel 8
                                typed_message(term, lero[7], 100, function () {
                                    //"gravidade fall hauhsuahuhsa
                                    gravidade_y = 6;
                                    SomDeSkyFall.play();
                                    //@ ASYNC Nivel 9
                                    typed_message(term, lero[8], 125, function () {
                                        //finale!
                                        //@ ASYNC Nivel 10
                                        typed_message(term, ". . . .", 400, function () {
                                            term.clear();
                                            //@ ASYNC Nivel 11
                                            typed_message(term, lero[9], 120, function () {
                                                gravidade_y = 0;
                                                // reseta a posição das estrelas
                                                for (var i = 0; i < pxs.length; i++) {
                                                    pxs[i].reset();
                                                }
                                                clearInterval(t);
                                                next && next();
                                            })
                                        });

                                    })
                                })

                            })
                        })

                    })
                })
            })
        })
    });


}
function apt_get_update(term, next) {
    term.echo("[[guib;white;]apt_get_update(self);]");
    var lero = [
        "0 pacotes atualizados, 2 pacotes novos instalados, 0 a serem removidos e 9 não atualizados.",
        "É preciso baixar 3.779 GB de arquivos.",
        "Depois desta operação, 9.805 GB adicionais de espaço em disco serão usados.",
        "Sim ou Não? [s/n] ",
        "|. . . . . . . . . . . . . . . . . . . . . . . . .|",
        "Obter:1 https://br.linkedin.com/in/isvaldo-fernandes-4a006239 Bemobi/universe pack-common all 1.23.1+dfsg-1 [2.709 kB]",
        "Obter:2 http://stackoverflow.com/users/4389469/isvaldo-fernandes trusty/universe geany i386 1.23.1+dfsg-1 [1.070 kB]",
        "Obter:3 https://github.com/isvaldo/Ola_Bemobenses trusty/universe isvaldo.slice('') i386 1.23.1+dfsg-1 [1.070 kB]",
        "Baixados 3.779 kB em 4s (885 kB/s)   ",
        "A seleccionar pacote anteriormente não seleccionado Aperte-Play.",
        "(Lendo banco de dados ... 533792 ficheiros e directórios actualmente instalados.)",
        "Preparing to unpack .../isvaldo-perfil_1.23.1+dfsg-1_all.deb ...",
        "Unpacking isvaldo-perfil(1.23.1+dfsg-1) ...",
        "A seleccionar pacote anteriormente não seleccionado isvaldo.packing.",
        "Preparing to (você leu isso?) .../bemobi_1.23.1+dfsg-1_i386.deb ...",
        "Unpacking isvaldo (1.23.1+dfsg-1) ...",
        "Processing triggers for doc-base (0.10.5) ...",
        "Processando 1 adicionou arquivo doc-base",
        "Registrando documentos com scrollkeeper...",
        "Processing triggers for Bemobi-Desafio 1...",
        "Processing triggers for Bemobi-Desafio 2...",
        "Processing triggers for Bemobi-Desafio 3..."];

    var start = 0;
    var simulaProcess = function (start) {
        typed_message(term, lero[start], 1, function () {
            start++;
            if (start == lero.length) {
                typed_message(term, ". . . .", 500,
                    function () {
                        term.clear();
                        next && next();
                        return false;
                    });
                return false;
            }

            simulaProcess(start);

        });
    };
    simulaProcess(start);

}

function conhecimento(term, next) {
    var lero = ["Meu conhecimento em programação ?",
        "Acho que tudo se resume a",
        " ",
        "Python      (|||||||||||   )",
        "Php         (|||||||||     )",
        "Java        (||||||||      )",
        "C#          (|||||||       )",
        "JavaScript  (|||||         )",
        " ",
        "Outra skill de se orgulhar ?",
        " ",
        " ",
        "LL         IIIII    NN   NN    UU   UU    XX    XX ",
        "LL          III     NNN  NN    UU   UU     XX  XX  ",
        "LL          III     NN N NN    UU   UU      XXXX   ",
        "LL          III     NN  NNN    UU   UU     XX  XX  ",
        "LLLLLLL    IIIII    NN   NN     UUUUU     XX    XX "
    ];

    var start = 0;
    term.clear();
    term.echo("[[guib;white;]Skills(self);]");
    var FalaConhecimento = function (start) {
        typed_message(term, lero[start], 60 - (start * 2), function () { //velocidade
            start++;
            if (start == lero.length) {
                typed_message(term, ". . . .", 500, function () {
                    term.clear();
                    next && next();
                    return false;
                });
                return false;
            }
            FalaConhecimento(start);
        });
    };
    FalaConhecimento(start);

}

function help(term) {
    term.echo(" ");
    term.echo("[[guib;white;]play] -> executa todos os comandos recursivamente");
    term.echo("[[guib;white;]pessoal] -> retorna quem sou");
    term.echo("[[guib;white;]motivacao] -> retorna a minha inspiração");
    term.echo("[[guib;white;]conhecimento] -> retorna uma lista de skills");
    term.echo("[[guib;white;]profissional] -> retorna uma lista de jobs");
    term.echo("[[guib;white;]bemobi] -> retorna minha palavras sobre a bemobi");
    term.echo("[[guib;white;]qualidade] -> retorna um pouco do que sei sobre o assunto");
    term.echo("[[guib;white;]filme] -> [[guib;red;] Retorna um classico que quero compartilhar]");
}

/**
 * Escreve na tela os fragmementos de
 * junior estágio e pleno... em sincronia
 */
function profissional(term, next) {
    term.echo("[[guib;white;]Skills(self);]");
    typed_message(term, "Bom... Eu programo a quase 4 anos profissionalmente", 100, function () {
        typed_message(term, "Eu já fui...", 150, function () {
            junior(term, function () {
                estagio(term, function () {
                    pleno(term, function () {
                        typed_message(term, "Hoje procuro um lugar como a Bemobi, uma empresa cheia de oportunidades.", 80,
                            function () {
                                typed_message(term, "Não é a minha primeira tentativa nessa empresa, e se necessário não vai ser a ultima!", 80,
                                    function () {
                                        typed_message(term, ". . . .", 400, function () {
                                            term.clear();
                                            next && next();
                                        });

                                    })
                            })
                    })
                })
            })


        })
    })
}
function junior(term, next) {
    var junior = ["Programador Junior,",
        "                 [Medksaude]",
        "# Conheci o Linux",
        "# Participei de uma equipe incrível",
        "# Aprendi a trabalhar em equipe",
        "# Comecei com Python/jquery/js"
    ];

    var start = 0;
    term.clear();
    var FalaJunior = function (start) {
        typed_message(term, junior[start], 70, function () { //velocidade
            start++;
            if (start == junior.length) {
                typed_message(term, ". . . .", 400, function () {
                    term.clear();
                    next && next();
                });
            }
            FalaJunior(start);
        });
    };
    FalaJunior(start);
}
function estagio(term, next) {
    var estagio = [
        "-> Estagiário",
        "                 [Xerox]",
        "# Conheci como é uma empresa de grande porte",
        "# Aprendi um pouco sobre Criptografia",
        "# Descobri que dar Suporte para usuários é algo terrível",
        "# Implementei meu primeiro sistema 100% sozinho (:"];

    var start = 0;
    term.clear();
    var FalaEstagio = function (start) {
        typed_message(term, estagio[start], 70, function () { //velocidade
            start++;
            if (start == estagio.length) {
                typed_message(term, ". . . .", 400, function () {
                    term.clear();
                    next && next();
                });
            }
            FalaEstagio(start);
        });
    };
    FalaEstagio(start);
}
function pleno(term, next) {
    var pleno = ["->Programador pleno",
        "                 [Kappius]",
        "# Responsável pela Infra (EC2, ElastiCache,  RDS, S3, Elastic Beanstalk)",
        "# Manutenção",
        "# Desenvolvimento Software",
        "# Suporte ao usuário",
        "# Design",
        "# Teste Software com Unittest, Mocks, Selenium",
        "# Relatórios",
        "# Data mining",
        "# Importação da base",
        "# DBA"
    ];

    var start = 0;
    term.clear();
    var FalaPleno = function (start) {
        typed_message(term, pleno[start], 40 - (start * 2), function () { //velocidade
            start++;
            if (start == pleno.length) {
                typed_message(term, "# Ah claro, eu também fazia o café...", 120, function () {
                    typed_message(term, ". . . .", 400, function () {
                        term.clear();
                        next && next();
                    })
                });
            }
            FalaPleno(start);
        });
    };
    FalaPleno(start);

}
function bemobi(term, next) {
    var bemobi = ["Há pouco tempo, eu imaginava a Bemobi como",
        "Uma produtora de software (mobile)",
    "Eu estava errado, existe um grande ninho de oportunidades",
    " ",
    "O que mais me motiva em continuar tentando entrar na Bemobi é ..",
    "Um ambiente feliz e produtivo, uma organização focada em qualidade e tecnológia",
    "Quero muito fazer parte dessa equipe !!!",
    " ",
    "Obrigado"];

    var start = 0;
    term.clear();
    var FalaBemobi = function (start) {
        typed_message(term, bemobi[start], 70, function () {
            start++;
            if (start == bemobi.length) {
                typed_message(term, ". . . .", 600, function () {
                    term.clear();
                    next && next();
                    return false;
                });
                return false;
            }
            FalaBemobi(start);
        });
    };
    FalaBemobi(start);


}
function qualidade(term, next) {
    var qualidade = [
        "Qualidade de software é uma cultura. desconfiar, testar , melhorar",
        "Essa cultura contagia toda a equipe, ninguém pode dar um push sem testar...",
        "Antes de desenvolver qualquer coisa, pense muito na simplicidade de extender aquele código",
        "Escolha nomes coerentes, e sempre atualize a documentação",
        " ",
        "Eu realmente gosto de testar/planejar software, acho que encontrar bug's",
        "È um grande desafio! não é a minha melhor Habilidade, mas conserteza é uma que eu quero ter"

    ];

    var start = 0;
    term.clear();
    var FalaQualidade = function (start) {
        typed_message(term, qualidade[start], 100, function () {
            start++;
            if (start == qualidade.length) {
                typed_message(term, ". . . .", 500, function () {
                    term.clear();
                    next && next();
                });
            }
            FalaQualidade(start);
        });
    };
    FalaQualidade(start);

}
function introducao(term) {
    typed_message(term, "Olá tudo bem ?", 130, function () {
        typed_message(term, "Bom, antes de fazer essa apresentação...", 50,
            function () {
                typed_message(term, "Eu gostaria de conhecer você", 50,
                    function () {
                        typed_prompt(term, "Qual é o seu primeiro nome?:", 50,
                            function () {
                            });
                    });
            });
    });
}

function advinhaNome(Terminal, input) {

    if (!isNaN(input)) {
        SomDeError.play();
        //@ASYNC !!
        Terminal.echo("Entre na brincadeira, digite um nome", {
            finalize: function (div) {
                div.css("color", "red");
            }
        });

        return "";
    }


    Terminal.clear();
    var listaDePossiveisNomes = [];
    //@Todo Transformar em uma lista
    // Procura o nome no objetivo JSON, previamente carregado
    $.each(data.data, function (index, value) {
        if (input == value.name.split(" ")[0]) {
            listaDePossiveisNomes.push(value.name);
        }
    });

    data = undefined;

    var resposta = "";
    if (listaDePossiveisNomes.length > 1) {

        resposta = resposta + "Hmm, existem " + listaDePossiveisNomes.length + " pessoas no desafio com esse nome...";
        var listar = function (nomes, term) {
            $.each(nomes, function (index, value) {
                term.echo(" ->"+value);
            });
        }

    } else if (input == "isvaldo") {

        resposta = resposta + "Opa, Eu também tenho esse nome estranho!";

    } else if (listaDePossiveisNomes.length == 1) {

        resposta = resposta + "Olá " + listaDePossiveisNomes[0] + ", acho que vi seu nome no desafio!!";
    }
    else {
        resposta = "Não encontrei o seu nome no desafio, muito prazer " + input;
    }

    //@ASYNC Nivel 1
    typed_message(Terminal, resposta, 70, function () {

        if (listaDePossiveisNomes.length > 1) {
            listar(listaDePossiveisNomes, Terminal);
        }
        Terminal.echo(" ");
        //@ASYNC Nivel 2
        typed_message(Terminal, "Digite 'play' para iniciar, ou help ver a lista de comandos", 50, function () {
            Terminal.echo(" ");
            Terminal.set_prompt('Root@' + input + '/bin/#');

        });


    });
    // retorna o nome
    return input;
}


function playALl(term) {
    apt_get_update(term, function () {
        pessoal(term, function () {
            motivacao(term, function () {
                conhecimento(term, function () {
                    typed_message(term, "Muito obrigado ! Boa sorte "+term.usuario+"!", 100, function () {
                        typed_message(term, "Digite 'play' para iniciar, ou help ver a lista de comandos", 50, function () {
                            term.echo(" ");
                            term.echo("[[bg;purple;white]->Linkedin:]: https://br.linkedin.com/in/isvaldo-fernandes-4a006239");
                            term.echo(" ");
                            term.echo("[[bg;purple;white]->Source do projeto] https://github.com/isvaldo/Ola_Bemobenses");
                            term.set_prompt('Root@' + term.usuario + '/home/root/#');
                            term.echo(" ");
                            term.echo(" ");
                        });
                    });
                })
            })

        });
    });
}

function filme(term) {
    SomDeFilme.play();
    var frames = [];
    var LINES_PER_FRAME = 14;
    var DELAY = 67;
    var lines = star_wars.length;
    for (var i = 0; i < lines; i += LINES_PER_FRAME) {
        frames.push(star_wars.slice(i, i + LINES_PER_FRAME));
    }
    var stop = false;

    function play(term, delay) {
        var i = 0;
        var next_delay;
        if (delay == undefined) {
            delay = DELAY;
        }
        function display() {
            if (i == frames.length) {
                i = 0;
            }
            term.clear();
            if (frames[i][0].match(/[0-9]+/)) {
                next_delay = frames[i][0] * delay;
            } else {
                next_delay = delay;
            }
            term.echo(frames[i++].slice(1).join('\n') + '\n');
            if (!stop) {
                setTimeout(display, next_delay);
            } else {
                term.clear();
                greetings(term);
                i = 0;
            }
        }

        display();

    }

    stop = false;
    play(term);
}

function preIntroducao(term) {
    term.echo("[[bg;purple;white]->Apresentação Console:]");
    term.echo("");
    typed_message(term, 'Cenario cenario = new Cenario("javascript");       ', 20,
        function () {
            typed_message(term, 'cenario.add(new Mountain("parallax"));', 50,
                function () {
                    $("#mountains").show("slow");
                    typed_message(term, 'cenario.add(new Grass("function (){moveOnClick()}"));', 35,
                        function () {
                            $("#grass").show("slow");
                            typed_message(term, 'cenario.add(new Stars(x.rand,y.rand),300);', 60,
                                function () {
                                    typed_message(term, 'cenario.showSky();', 200,
                                        function () {
                                            SomDeSky.play();
                                            $("#pixie").show("slow");
                                            setInterval(draw,rint);
                                            //Continue Logic
                                            typed_message(term, 'exit & start apresentacao', 150,
                                                function () {
                                                    term.echo("");
                                                    typed_message(term, ". . . .", 400,
                                                        function () {
                                                            term.clear();
                                                            introducao(term);
                                                        });
                                                });
                                        });
                                });
                        });
                });
        });
}