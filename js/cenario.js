/**
 * Created by isvaldo on 06/12/15.
 */

/**
 * Emite um som, dependendo da velocidade, aplica uma chance de "funcionar"
 * @param speed
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


/**
 * Retorna letra a letra até que a mensagem seja completada
 * @param term instancia de terminal
 * @param message texto a ser exibido
 * @param delay tempo de espera
 * @param finish, função que executa ao final
 * @param song, se existir emite som
 * @param finish_typing
 * @returns {Function}
 */
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
/**
 * Chama Type, como se fosse terminal, no estilo de pergunta
 * @type {Function}
 */
var typed_prompt = typed(function (term, message, prompt) {
    term.set_command('');
    term.set_prompt(message + ' ');
});

/**
 * Chama Type como se fosse uma resposta do terminal para o usuario
 * @type {Function}
 */
var typed_message = typed(function (term, message, prompt) {
    term.set_command('');
    term.echo(message);
    term.set_prompt(prompt);
});

/**
 * Imprime em lote as mensagens na tela
 *
 * @param term  Instancia do terminal
 * @param menssagens Array com texto para exibir
 * @param tempoMensagem  Delay por menssagem
 * @param tempoEspera deley no final
 * @param next proxima função a ser executada (opcional)
 */

var typed_batch = function (term, menssagens, tempoMensagem, tempoEspera, next ){
        var contador = 0;

        var recursivo = function (term, menssagens, tempoMensagem, tempoEspera, next) {
            typed_message(term, menssagens[contador], tempoMensagem, function () {
                contador++;
                if (contador == menssagens.length) {
                    typed_message(term, ". . . .", tempoEspera, function () {
                        term.clear();
                        next && next();
                        return false;
                    });
                    return false;
                }
                recursivo(term, menssagens, tempoMensagem, tempoEspera, next);

            });
        };
    recursivo(term, menssagens, tempoMensagem, tempoEspera, next);
};

/**
 * mostra na tela um resumo pessoal
 * @param term instancia do terminal
 * @param next proxima função a ser executada
 */
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

    typed_batch(term,lero,80,450,next);
}


/**
 * Mostra na tela uma mensagem de motivação
 ******************************************************
 * OBS: Essa função tem Muitas peculiaridades, por isso
 * foi feita integralmente sem recursão
 * *****************************************************
 * @param term instancia do terminal
 * @param next proxima função a ser executada
 */
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
    typed_message(term, lero[0], 50, function () {
        //@ ASYNC Nivel 2
        typed_message(term, lero[1], 60, function () {
            //@ ASYNC Nivel 3
            typed_message(term, lero[2], 50, function () {
                //@ ASYNC Nivel 4
                typed_message(term, lero[3], 200, function () {
                    //@ ASYNC Nivel 5
                    typed_message(term, lero[4], 70, function () {
                        tamanhoArco = 20;
                        //@ ASYNC Nivel 6
                        typed_message(term, lero[5], 100, function () {
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
                            typed_message(term, lero[6], 100, function () {
                                // Brilhando, em varias cores
                                //@ ASYNC Nivel 8
                                typed_message(term, lero[7], 100, function () {
                                    //"gravidade fall hauhsuahuhsa
                                    gravidade_y = 6;
                                    SomDeSkyFall.play();
                                    //@ ASYNC Nivel 9
                                    typed_message(term, lero[8], 100, function () {
                                        //finale!
                                        //@ ASYNC Nivel 10
                                        typed_message(term, ". . . .", 400, function () {
                                            term.clear();
                                            //@ ASYNC Nivel 11
                                            typed_message(term, lero[9], 100, function () {
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

/**
 * Simula o comando Apt-get " updade ", na verdade é uma instalaçao do geany xD
 * @param term instancia do terminal
 * @param next proxima função a ser executada
 */
function apt_get_update(term, next) {
    term.echo("[[guib;white;]apt_get_update(self);]");
    var apt_get_update_text = [
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

    typed_batch(term,apt_get_update_text,2,200, next);

}

/**
 * retorna um resumo de skills
 * @param term instancia do terminal
 * @param next proxima função a ser executada
 */
function conhecimento(term, next) {
    var conhecimento_texto = ["Meu conhecimento em programação ?",
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

    typed_batch(term, conhecimento_texto, 50, 300, next);
}

/**
 * Retorna um resumo de todas as funções disponiveis
 * @param term instancia do terminal
 */
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
 * Escreve na tela, antigas experiencias.
 * @param term instancia do terminal
 * @param next proxima função a ser executada
 */
function profissional(term, next) {
    term.echo("[[guib;white;]Skills(self);]");
    typed_message(term, "Bom... Eu programo a quase 4 anos profissionalmente", 50, function () {
        typed_message(term, "Eu já fui...", 100, function () {
            junior(term, function () {
                estagio(term, function () {
                    pleno(term, function () {
                        typed_message(term, "Hoje procuro um lugar como a Bemobi, uma empresa cheia de oportunidades.", 60,
                            function () {
                                typed_message(term, "Não é a minha primeira tentativa nessa empresa, e se necessário não vai ser a ultima!", 70,
                                    function () {
                                        typed_message(term, ". . . .", 300, function () {
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
/**
 * mostra na tela  um resumo da medksaude
 * @param term instancia do terminal
 * @param next proxima função a ser executada
 */
function junior(term, next) {
    var junior_texto = ["Programador Junior,",
        "                 [Medksaude]",
        "# Conheci o Linux",
        "# Participei de uma equipe incrível",
        "# Aprendi a trabalhar em equipe",
        "# Comecei com Python/jquery/js"
    ];

    typed_batch(term, junior_texto, 40, 200, next);
}

/**
 * Mostra na tela um resumo do estagio na xerox
 * @param term instancia do terminal
 * @param next proxima função a ser executada
 */
function estagio(term, next) {
    var estagio_texto = [
        "-> Estagiário",
        "                 [Xerox]",
        "# Conheci como é uma empresa de grande porte",
        "# Aprendi um pouco sobre Criptografia",
        "# Descobri que dar Suporte para usuários é algo terrível",
        "# Implementei meu primeiro sistema 100% sozinho (:"];

    typed_batch(term, estagio_texto, 40, 200, next);
}

/**
 * retorna um resumo da Kappius
 * @param term instancia do terminal
 * @param next proxima função a ser executada
 */
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

    var contador = 0;
    term.clear();
    var recursivo = function (contador) {
        typed_message(term, pleno[contador], 30 - (contador * 2), function () { //velocidade
            contador++;
            if (contador == pleno.length) {
                typed_message(term, "# Ah claro, eu também fazia o café...", 100, function () {
                    typed_message(term, ". . . .", 200, function () {
                        term.clear();
                        next && next();
                    })
                });

            }
            recursivo(contador);
        });
    };
    recursivo(contador);


}


/**
 * Retorna um pouco que sei sobre a bemobi
 * @param term instancia do terminal
 * @param next proxima função a ser executada
 */
function bemobi(term, next) {
    var bemobi_texto = ["Há pouco tempo, eu imaginava a Bemobi como",
        "Uma produtora de software (mobile)",
    "Eu estava errado, existe um grande ninho de oportunidades",
    " ",
    "O que mais me motiva em continuar tentando entrar na Bemobi é ..",
    "Um ambiente feliz e produtivo, uma organização focada em qualidade e tecnologia",
    "Quero muito fazer parte dessa equipe !!!",
    " ",
    "Obrigado"];

    typed_batch(term, bemobi_texto, 70, 300, next);
}

/**
 * Um pouco que sei sobre qualidade
 * @param term instancia do terminal
 * @param next proxima funcao a ser executada
 */
function qualidade(term, next) {
    var qualidade_texto = [
        "Qualidade de software é uma cultura. desconfiar, testar , melhorar",
        "Essa cultura contagia toda a equipe, ninguém pode dar um push sem testar...",
        "Antes de desenvolver qualquer coisa, pense muito na simplicidade de extender aquele código",
        "Escolha nomes coerentes, e sempre atualize a documentação",
        " ",
        "Eu acredito que Testar, refatorar, CodeReview, Documentação, entrga continua ..",
        "É com certeza uma das coisas mais importante no desenvolvimento de qualquer software",
        "Por experiência própria, já vi os efeitos de não fazer testes de regressão",
        "Não testar gera uma Ilusão de produtividade, muita gente diz que o TDD é improdutivo ...",
        "Bom, eu tenho muita vontade de estudar cada vez mais essa area!"
    ];

    typed_batch(term, qualidade_texto, 70, 300, next);

}
/**
 * Introdução
 * @param term instancia do terminal
 */
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

/**
 * Retorna um nome caso exista no facebook
 * @param Terminal instancia do terminal
 * @param input entrada de texto que vem do terminal
 * @returns {*}
 */
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

    data = undefined; // libera memoria

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
        resposta = "Muito prazer " + input+" !!!";
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

/**
 * Executa todas as funções recursivamente (ai meu processador... ou melhor o seu)
 * @param term instancia do terminal
 */
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

/**
 * UM classico de ascii, uma historico feito do Telnet
 * @param term instancia do terminal
 */
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

/**
 * Simulação de criação do cenario xD
 * @param term instancia do terminal
 */
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
                                    typed_message(term, 'cenario.showSky();', 150,
                                        function () {
                                            SomDeSky.play();
                                            $("#pixie").show("slow");
                                            setInterval(draw,rint);
                                            //Continue Logic
                                            typed_message(term, 'exit & start apresentacao', 150,
                                                function () {
                                                    term.echo("");
                                                    typed_message(term, ". . . .", 300,
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