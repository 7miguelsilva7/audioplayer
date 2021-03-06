// External Files:
// https://api.html5media.info/1.1.8/html5media.min.js (enables <video> and <audio> tags in all major browsers)
// https://cdn.plyr.io/2.0.13/plyr.js


// HTML5 audio player + playlist controls...
// Inspiration: https://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    'use strict'
	
	//get anchor value and validate value
	var anchorTrack = window.location.href.split("#")[1];
	if (!anchorTrack || isNaN(anchorTrack)) {
		//return defaut value for "index" valiable
		anchorTrack = 0;
	}
	
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
		//return anchor value for "index" valiable
        var index = anchorTrack,
            playing = false,
            mediaPath = '',
            extension = '',
            tracks = [

                {"track":	1	, "voz": "Catherine",    "name": "	A PORTA É UMA SÓ (Cantado por uma criança)	",	 "length": "	01:27	",	 "file": "	https://www.mediafire.com/file/	dp90tj5e23tes6f	/	A PORTA EU SOU (Cantado por uma criança)	"},
                {"track":	2	, "voz": "Catherine",	 "name": "	A PORTA EU SOU (Cantado por uma criança)	",	 "length": "	01:11	",	 "file": "	https://www.mediafire.com/file/	dhoz68adhuyadbg	/	A PORTA É UMA SÓ (Cantado por uma criança)	"},
                {"track":	3	, "voz": "Catherine",	 "name": "	É FÁCIL DE ENTENDER (Cantado por uma criança)	",	 "length": "	00:50	",	 "file": "	https://www.mediafire.com/file/	p1bh34yeey6dy9e	/	É FÁCIL DE ENTENDER (Cantado por uma criança)	"},
                {"track":	4	, "voz": "Catherine",	 "name": "	COM AMOR BUSCANDO  (Cantado por uma criança)	",	 "length": "	01:36	",	 "file": "	https://www.mediafire.com/file/	8475by3ejy6f9mt	/	COM AMOR BUSCANDO  (Cantado por uma criança)	"},
                {"track":	5	, "voz": "Catherine",	 "name": "	COMO OVELHINHAS  (Cantado por uma criança)	",	 "length": "	01:18	",	 "file": "	https://www.mediafire.com/file/	ws9zt5rr28ha69r	/	COMO OVELHINHAS  (Cantado por uma criança)	"},
                {"track":	6	, "voz": "Catherine",	 "name": "	CRER NO QUE DEUS DISSE (Cantado por uma criança)	",	 "length": "	01:06	",	 "file": "	https://www.mediafire.com/file/	qdqcjjf46a577y0	/	CRER NO QUE DEUS DISSE (Cantado por uma criança)	"},
                {"track":	7	, "voz": "Catherine",	 "name": "	CRISTO AMA OS PEQUENINOS (Cantado por uma criança)	",	 "length": "	00:44	",	 "file": "	https://www.mediafire.com/file/	t7m8fsb08rpbinc	/	CRISTO AMA OS PEQUENINOS (Cantado por uma criança)	"},
                {"track":	8	, "voz": "Catherine",	 "name": "	CRISTO JESUS VEIO AO MUNDO (Cantado por uma criança)	",	 "length": "	01:00	",	 "file": "	https://www.mediafire.com/file/	7j9uhbct0zyrhyx	/	CRISTO JESUS VEIO AO MUNDO (Cantado por uma criança)	"},
                {"track":	9	, "voz": "Catherine",	 "name": "	DEUS É BOM PARA MIM (Cantado por uma criança)	",	 "length": "	00:58	",	 "file": "	https://www.mediafire.com/file/	uaqar3kmie5ye8n	/	DEUS É BOM PARA MIM (Cantado por uma criança)	"},
                {"track":	10	, "voz": "Catherine",	 "name": "	EU PERTENÇO A CRISTO (Cantado por uma criança)	",	 "length": "	01:10	",	 "file": "	https://www.mediafire.com/file/	4dam15jxufkhxa9	/	EU PERTENÇO A CRISTO (Cantado por uma criança)	"},
                {"track":	11	, "voz": "Catherine",	 "name": "	GRAÇAS TE DOU (Cantado por uma criança)	",	 "length": "	01:30	",	 "file": "	https://www.mediafire.com/file/	yw59et3dmjjg6r7	/	GRANDE FARDO (Cantado por uma criança)	"},
                {"track":	12	, "voz": "Catherine",	 "name": "	GRANDE FARDO (Cantado por uma criança)	",	 "length": "	01:26	",	 "file": "	https://www.mediafire.com/file/	46pe5ildbj7am2f	/	GRAÇAS TE DOU (Cantado por uma criança)	"},
                {"track":	13	, "voz": "Catherine",	 "name": "	HÁ UM CAMINHO CHEIO DE LUZ (Cantado por uma criança)	",	 "length": "	01:05	",	 "file": "	https://www.mediafire.com/file/	544bya63tut7qxr	/	HÁ UM CAMINHO CHEIO DE LUZ (Cantado por uma criança)	"},
                {"track":	14	, "voz": "Catherine",	 "name": "	JESUS, TUDO TENHO EM TI (Cantado por uma criança)	",	 "length": "	01:15	",	 "file": "	https://www.mediafire.com/file/	3zi6pzlamdkum3e	/	JESUS, TUDO TENHO EM TI (Cantado por uma criança)	"},
                {"track":	15	, "voz": "Catherine",	 "name": "	MAIS VASTO QUE O MUNDO (Cantado por uma criança)	",	 "length": "	01:28	",	 "file": "	https://www.mediafire.com/file/	up2q3fnih9nei0p	/	MAIS VASTO QUE O MUNDO (Cantado por uma criança)	"},
                {"track":	16	, "voz": "Catherine",	 "name": "	MEU BOM PASTOR É CRISTO (Cantado por uma criança)	",	 "length": "	00:54	",	 "file": "	https://www.mediafire.com/file/	teasetpqk3lak9x	/	MEU BOM PASTOR É CRISTO (Cantado por uma criança)	"},
                {"track":	17	, "voz": "Catherine",	 "name": "	MEU CORAÇÃO ERA SUJO (Cantado por uma criança )	",	 "length": "	01:33	",	 "file": "	https://www.mediafire.com/file/	7b3m892wxko5ijw	/	MEU CORAÇÃO ERA SUJO (Cantado por uma criança )	"},
                {"track":	18	, "voz": "Catherine",	 "name": "	MOSTRA JESUS (Cantado por uma criança)	",	 "length": "	01:17	",	 "file": "	https://www.mediafire.com/file/	9vs1c7zjdcu0xsy	/	MOSTRA JESUS (Cantado por uma criança)	"},
                {"track":	19	, "voz": "Catherine",	 "name": "	NO MEU CORAÇÃO (Cantado por uma criança)	",	 "length": "	01:06	",	 "file": "	https://www.mediafire.com/file/	k1r2qg990481qrk	/	NO MEU CORAÇÃO (Cantado por uma criança)	"},
                {"track":	20	, "voz": "Catherine",	 "name": "	O COFRINHO (Cânticos para crianças)	",	 "length": "	01:51	",	 "file": "	https://www.mediafire.com/file/	kkuskcs6cbevpz6	/	O COFRINHO (Cânticos para crianças)	"},
                {"track":	21	, "voz": "Catherine",	 "name": "	OS QUE ESPERAM NO SENHOR (Cantado por uma criança)	",	 "length": "	01:41	",	 "file": "	https://www.mediafire.com/file/	cnmfa01209o6o9y	/	OS QUE ESPERAM NO SENHOR (Cantado por uma criança)	"},
                {"track":	22	, "voz": "Catherine",	 "name": "	PESCADOR DE HOMENS (Cantado por uma Criança)	",	 "length": "	01:30	",	 "file": "	https://www.mediafire.com/file/	n1j1a1lpu1zruu4	/	PESCADOR DE HOMENS (Cantado por uma Criança)	"},
                {"track":	23	, "voz": "Catherine",	 "name": "	PODEROSO É NOSSO DEUS (Cantado por uma criança)	",	 "length": "	00:48	",	 "file": "	https://www.mediafire.com/file/	d5qtdk7ktn5ug05	/	PODEROSO É NOSSO DEUS (Cantado por uma criança)	"},
                {"track":	24	, "voz": "Catherine",	 "name": "	QUEM FAZ AS LINDAS FLORES (Cantado por uma criança)	",	 "length": "	00:57	",	 "file": "	https://www.mediafire.com/file/	49ixezb48k914et	/	QUEM FAZ AS LINDAS FLORES (Cantado por uma criança)	"},
                {"track":	25	, "voz": "Catherine",	 "name": "	TOC! TOC! TOC! (Cantado por uma criança)	",	 "length": "	00:52	",	 "file": "	https://www.mediafire.com/file/	d5d3vcl5n3p99ls	/	TOC! TOC! TOC! (Cantado por uma criança)	"},
                {"track":	26	, "voz": "Catherine",	 "name": "	TODOS PECARAM (Cantado por uma criança)	",	 "length": "	00:29	",	 "file": "	https://www.mediafire.com/file/	npirnm498w4194o	/	TODOS PECARAM (Cantado por uma criança)	"},
               
                {"track":	27	, "voz": "Catherine",	 "name": "	ASSIM DEUS NOS AMOU (Cantado por uma criança)	",	 "length": "	01:08	",	 "file": "	https://www.mediafire.com/file/yx21f7855ja6ml2/		"},
                {"track":	28	, "voz": "Catherine",	 "name": "	PORQUE MORREU POR MIM (Cantado por uma criança)	",	 "length": "	01:00	",	 "file": "	https://www.mediafire.com/file/rjdib9szkjaaibf/		"},
                {"track":	29	, "voz": "Catherine",	 "name": "	SEM EU CONHECÊ-LO (Cantado por uma criança)	",	 "length": "	01:29	",	 "file": "	https://www.mediafire.com/file/gzhrhngdcuh1hmq/	"},
                {"track":	30	, "voz": "Catherine",	 "name": "	CRISTO VIVE (Cantado por uma criança)	",	 "length": "	01:04	",	 "file": "	https://www.mediafire.com/file/1xqoy1z6g923rkw/	"},
                {"track":	31	, "voz": "Catherine",	 "name": "	SUBINDO (Cantado por uma criança)	",	 "length": "	01:03	",	 "file": "	https://www.mediafire.com/file/a2z1v4f5kt740fd/		"},
                {"track":	32	, "voz": "Catherine",	 "name": "	BUSCAI PRIMEIRO (Cantado por uma criança)	",	 "length": "	02:17	",	 "file": "	https://www.mediafire.com/file/tgsfnlsxz40lmyq/		"},
                {"track":	33	, "voz": "Catherine",	 "name": "	SATISFAÇÃO (Cantado por uma criança)	",	 "length": "	02:04	",	 "file": "	https://www.mediafire.com/file/gk955sbcanc9c2y/		"},
          
                
],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackVoz = value.voz,
                    trackFile = value.file,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li ><div class="plItem" ><div class="plNum">'+ trackNumber + '.</div><div class="plTitle"><a target="_blank" href="' + trackFile + '"><i class="fa fa-download fa-lg"></i></a> ' + trackName.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase()) + ' - (' + trackVoz + ')' + '</div><div class="plLength">' + trackLength + '</div></div></li>');
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

		
		// ANIMATE Start
                $('html,body').animate({
                scrollTop: $(".plSel").offset().top-240
                });
		// ANIMATE End


                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
				//insert track id in anchor value
				window.location.href="#"+index;
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

// verifica quantidade de audios
console.log(tracks.length);
var ended = tracks.length;
localStorage.setItem('length', ended);
console.log(localStorage.getItem('length'))
// Fim de verifica quantidade de audios
    }
});

// Título da playlist
document.write('<title>Audio Player - Canticos Cantados por uma criança</title>')

var audioNextKey = (document.getElementsByTagName("title"));

// Salva próximo audio ao termino de cada audio
function localStorageAudioNext()
{
    var a = window.location.href.split("#")[1];
    next = parseInt(a)+parseInt(1);
    // Salva em LocalStorage
    var audioNextKey = (document.getElementsByTagName("title"));
    // alert(audioNextKey[0].innerHTML)
    var audioNext = (window.location.href.split("#")[0]+'#'+next);

    if (window.location.href.split('#')[1] < (localStorage.getItem('length') -1))
    {
        localStorage.setItem(audioNextKey[0].innerHTML, audioNext);
    }
    // alert(audioNext)
}
audio1.addEventListener('ended',localStorageAudioNext)


// function restoreAudioNext()
// {
    var a = window.location.href.split("#")[1];
if(localStorage.hasOwnProperty(audioNextKey[0].innerHTML) & a == undefined)
  {
    location.replace(localStorage.getItem(audioNextKey[0].innerHTML))  } 
// }

// Título da playlist
document.write('<title>Audio Player - Cânticos Cantados por uma Criança</title>')

var audioNextKey = (document.getElementsByTagName("title"));

// Salva próximo audio ao termino de cada audio
function localStorageAudioNext()
{
    var a = window.location.href.split("#")[1];
    next = parseInt(a)+parseInt(1);
    // Salva em LocalStorage
    var audioNextKey = (document.getElementsByTagName("title"));
    // alert(audioNextKey[0].innerHTML)
    var audioNext = (window.location.href.split("#")[0]+'#'+next);

    if (window.location.href.split('#')[1] < (localStorage.getItem('length') -1))
    {
        localStorage.setItem(audioNextKey[0].innerHTML, audioNext);
    }
    // alert(audioNext)
}
audio1.addEventListener('ended',localStorageAudioNext)


// function restoreAudioNext()
// {
var a = window.location.href.split("#")[1];
if(localStorage.hasOwnProperty(audioNextKey[0].innerHTML) & a == undefined)
  {
    location.replace(localStorage.getItem(audioNextKey[0].innerHTML))
    //initialize plyr
    plyr.setup($('#audio1'), {});

  } else
  {
    //initialize plyr
    plyr.setup($('#audio1'), {});
  }
// }
