// External Files:
// https://api.html5media.info/1.1.8/html5media.min.js (enables <video> and <audio> tags in all major browsers)
// https://cdn.plyr.io/2.0.13/plyr.js


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = '',
            extension = '',
            tracks = [ {
                "track": 1,
                "name": "Ipuã 2012 - Estudos das Dispensações - Reunião 1 - Inocência - Lemão.mp3",
                "length": "1:03:33",
                "file": "http://www.mediafire.com/file/5ncr3hkyftfg80u/Ipu%C3%A3_2012_-_Estudos_das_Dispensa%C3%A7%C3%B5es_-_Reuni%C3%A3o_1_-_Inoc%C3%AAncia_-_Lem%C3%A3o.mp3"
            }, {
                "track": 2,
                "name": "Ipuã 2012 - Estudos das Dispensações - Reunião 2 - Consciência - Lemão.mp3",
                "length": "1:22:22",
                "file": "http://www.mediafire.com/file/h95ebhvs74oi685/Ipu%C3%A3_2012_-_Estudos_das_Dispensa%C3%A7%C3%B5es_-_Reuni%C3%A3o_2_-_Consci%C3%AAncia_-_Lem%C3%A3o.mp3"
            }, {
                "track": 3,
                "name": "Ipuã 2012 - Estudos das Dispensações - Reunião 3 - Governo - Lemão.mp3",
                "length": "1:02:21",
                "file": "http://www.mediafire.com/file/mbb7u58lpe23j36/Ipu%C3%A3_2012_-_Estudos_das_Dispensa%C3%A7%C3%B5es_-_Reuni%C3%A3o_3_-_Governo_-_Lem%C3%A3o.mp3"
            }, {
                "track": 4,
                "name": "Ipuã 2012 - Estudos das Dispensações - Reunião 4 - Promessa - Lemão.mp3",
                "length": "1:18:53",
                "file": "http://www.mediafire.com/file/pr2zqj3n5naqq7z/Ipu%C3%A3_2012_-_Estudos_das_Dispensa%C3%A7%C3%B5es_-_Reuni%C3%A3o_4_-_Promessa_-_Lem%C3%A3o.mp3"
            }, {
                "track": 5,
                "name": "Ipuã 2012 - Estudos das Dispensações - Reunião 5 - Lei - Lemão.mp3",
                "length": "1:31:22",
                "file": "http://www.mediafire.com/file/u8enbd62xdbiuev/Ipu%C3%A3_2012_-_Estudos_das_Dispensa%C3%A7%C3%B5es_-_Reuni%C3%A3o_5_-_Lei_-_Lem%C3%A3o.mp3"
            }, {
                "track": 6,
                "name": "Ipuã 2012 - Estudos das Dispensações - Reunião 6 - Igreja - Lemão.mp3",
                "length": "1:01:53",
                "file": "http://www.mediafire.com/file/5087x8tbdd6t3kh/Ipu%C3%A3_2012_-_Estudos_das_Dispensa%C3%A7%C3%B5es_-_Reuni%C3%A3o_6_-_Igreja_-_Lem%C3%A3o.mp3"
            }, {
                "track": 7,
                "name": "Ipuã 2012 - Estudos das Dispensações - Reunião 7 - Igreja - parte 1 - Lemão.mp3",
                "length": "1:18:39",
                "file": "http://www.mediafire.com/file/46kkjren94vakcs/Ipu%C3%A3_2012_-_Estudos_das_Dispensa%C3%A7%C3%B5es_-_Reuni%C3%A3o_7_-_Igreja_-_parte_1_-_Lem%C3%A3o.mp3"
            }, {
                "track": 8,
                "name": "Ipuã 2012 - Estudos das Dispensações - Reunião 7 - Igreja - parte 2 - Lemão.mp3",
                "length": "33:47",
                "file": "http://www.mediafire.com/file/fwvvqbdz7ma3lxi/Ipu%C3%A3_2012_-_Estudos_das_Dispensa%C3%A7%C3%B5es_-_Reuni%C3%A3o_7_-_Igreja_-_parte_2_-_Lem%C3%A3o.mp3"
            },  {
                "track": 9,
                "name": "Ipuã 2012 - Estudos das Dispensações - Reunião 8 - Igreja - parte 1 - Lemão.mp3",
                "length": "1:07:16",
                "file": "http://www.mediafire.com/file/kc4zjz89nj5com4/Ipu%C3%A3_2012_-_Estudos_das_Dispensa%C3%A7%C3%B5es_-_Reuni%C3%A3o_8_-_Igreja_-_parte_1_-_Lem%C3%A3o.mp3"
            },  {
                "track": 10,
                "name": "Ipuã 2012 - Estudos das Dispensações - Reunião 8 - Igreja - parte 2 - Lemão.mp3",
                "length": "54:52",
                "file": "http://www.mediafire.com/file/6vshb89gjbdey2r/Ipu%C3%A3_2012_-_Estudos_das_Dispensa%C3%A7%C3%B5es_-_Reuni%C3%A3o_8_-_Igreja_-_parte_2_-_Lem%C3%A3o.mp3"
            },  {
                "track": 11,
                "name": "Dispensações - parte 1 - Eternidade-Diluvio - Ipuã - Dez-2013",
                "length": "1:11:3",
                "file": "http://www.mediafire.com/file/2uypkr9j6zxkn4x/Dispensações_-_parte_1_-_Eternidade-Diluvio_-_Ipu%C3%A3_-_Dez-2013.mp3"
            }, {
                "track": 12,
                "name": "Dispensações - parte 2 - Eternidade-Diluvio - Ipuã - Dez-2013",
                "length": "51:16",
                "file": "http://www.mediafire.com/file/t049eyn8iurcr54/Dispensações_-_parte_2_-_Diluvio-Escravidao_-_Ipu%C3%A3_-_Dez-2013.mp3"
            }, {
                "track": 13,
                "name": "Dispensações - parte 3 - Escravidao-Igreja - Ipuã - Dez-2013.mp3",
                "length": "1:12:15",
                "file": "http://www.mediafire.com/file/n7ev2aarcbodieb/Dispensações_-_parte_3_-_Escravidao-Igreja_-_Ipu%C3%A3_-_Dez-2013.mp3"
            }, {
                "track": 14,
                "name": "Dispensações - parte 4 - Igreja-Milenio - Ipuã - Dez-2013.mp3",
                "length": "51:58",
                "file": "http://www.mediafire.com/file/zukhydq4eubcwc2/Dispensações_-_parte_4_-_Igreja-Milenio_-_Ipu%C3%A3_-_Dez-2013.mp3"
            }, {
                "track": 15,
                "name": "Dispensações - parte 5 - Milenio-Juizo Final - Ipuã - Dez-2013.mp3",
                "length": "41:18",
                "file": "http://www.mediafire.com/file/v5pota7hwlk1alv/Dispensações_-_parte_5_-_Milenio-Juizo_Final_-_Ipu%C3%A3_-_Dez-2013.mp3"
            }, {
                "track": 16,
                "name": "Dispensações - parte 6 - Juizo Final-Eternidade - Ipuã - Dez-2013.mp3",
                "length": "1:31:22",
                "file": "http://www.mediafire.com/file/ggkg7eppljliar7/Dispensações_-_parte_6_-_Juizo_Final-Eternidade_-_Ipu%C3%A3_-_Dez-2013.mp3"
            }, {
                "track": 17,
                "name": "Londrina 2017 Parte 1 Londrina 2017 Estudo das Dispensações Reuniao 1 Inocencia Lemao.mp3",
                "length": "1:10:06",
                "file": "http://www.mediafire.com/file/da6ddav348r7x70/Parte_1_Londrina_2017_Estudo_das_Dispensacoes_Reuniao_1_Inocencia_Lemao.mp3"
            }, {
                "track": 18,
                "name": "Londrina 2017 Parte 2 Londrina 2017 Estudo das Dispensações Reuniao 1 Dispensações.mp3",
                "length": "1:16:23",
                "file": "http://www.mediafire.com/file/ih0r14d18oo6cm2/Parte_2_Londrina_2017_Estudo_das_Dispensacoes_Reuniao_1_Dispensacoes.mp3"
            }, {
                "track": 19,
                "name": "Londrina 2017 Parte 3 Londrina 2017 Estudo das Dispensações Reuniao 2 Os 7 anos de tribulacao Lemao.mp3",
                "length": "1:21:59",
                "file": "http://www.mediafire.com/file/b0ygiz0lj71o70l/Parte_3_Londrina_2017_Estudo_das_Dispensacoes_Reuniao_2_Os_7_anos_de_tribulacao_Lemao.mp3"
            }, {
                "track": 20,
                "name": "Londrina 2017 Parte 4 Londrina 2017 Estudo das Dispensações Reuniao 2 Dispensacao da graca Lemao.mp3",
                "length": "1:17:23",
                "file": "http://www.mediafire.com/file/bayg29f9r36jls9/Parte_4_Londrina_2017_Estudo_das_Dispensacoes_Reuniao_2_Dispensacao_da_graca_Lemao.mp3"
            }, {
                "track": 21,
                "name": "Londrina 2017 Parte 5 Londrina 2017 Estudo das Dispensações Reuniao 2 Dispensacao da graca Lemao.mp3",
                "length": "59:35",
                "file": "http://www.mediafire.com/file/8qigu8pig7hna8f/Parte_5_Londrina_2017_Estudo_das_Dispensacoes_Reuniao_2_Dispensacao_da_graca_Lemao.mp3"
            }, {
                "track": 22,
                "name": "Londrina 2017 Parte 6 Londrina 2017 Estudo das Dispensações Reuniao 3 Dispensacao da graca Lemao.mp3",
                "length": "1:33:49",
                "file": "http://www.mediafire.com/file/4hz5gyv34s4o5qt/Parte_6_Londrina_2017_Estudo_das_Dispensacoes_Reuniao_3_Dispensacao_da_graca_Lemao.mp3"
            }, {
                "track": 23,
                "name": "Londrina 2017 Parte 7 Londrina 2017 Estudo das Dispensações Reuniao 3 Dispensacao da graca Lemao.mp3",
                "length": "1:24:07",
                "file": "http://www.mediafire.com/file/wdi4tm24dt3b392/Parte_7_Londrina_2017_Estudo_das_Dispensacoes_Reuniao_3_Dispensacao_da_graca_Lemao.mp3"
            }
],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            random = false,
            recursive = false,
            played = [],
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if (random) {
                    loadTrack(getRandomTrack())
                    audio.play()
                }
                else if (recursive) {
                    loadTrack(index)
                    audio.play();
                }
                else {
                    if ((index + 1) < trackCount) {
                        index++;
                        loadTrack(index);
                        audio.play();
                    } else {
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if (random) {
                    loadTrack(getRandomTrack())
                    audio.play();
                }
                else {
                    if ((index + 1) < trackCount) {
                        index++;
                        loadTrack(index);
                        if (playing) {
                            audio.play();
                        }
                    } else {
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
                }
            }),
            btnRandom = $('#btnRandom').click(function () {
                console.log('first click');
                recursive = false;
                random = !random;
                if (random) {
                    $('#btnReplay').removeClass('btnSelected');
                    $(this).addClass('btnSelected');
                } else $(this).removeClass('btnSelected');
            }),
            btnReplay = $('#btnReplay').click(function () {
                random = false;
                recursive = !recursive;
                if (recursive) {
                    $('#btnRandom').removeClass('btnSelected');
                    $(this).addClass('btnSelected');
                } else $(this).removeClass('btnSelected')
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            },
            getRandomTrack = function () {
                played.push(index);
                var randomTrack = index;
                while (played.includes(randomTrack)) {
                    randomTrack = Math.floor((Math.random() * tracks.length) + 1);
                }
                return randomTrack;
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});

//initialize plyr
plyr.setup($('#audio1'), {});
