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
        var index = anchorTrack,
            playing = false,
            mediaPath = '',
            extension = '',
            tracks = [

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

{"track":	1	,	 "name": "	Colossenses 1-1a parte	",	 "length": "	43:20	",	 "file": "	https://www.mediafire.com/file/	y7kicbtvc31mgmn	/	"},
{"track":	2	,	 "name": "	Colossenses 1-2a parte	",	 "length": "	1:00:21	",	 "file": "	https://www.mediafire.com/file/1nuhk3bcb690dhb	/	"},
{"track":	3	,	 "name": "	Colossenses 1-3a parte	",	 "length": "	54:16	",	 "file": "	https://www.mediafire.com/file/	p2mahhv4e144ibc	/	"},
{"track":	4	,	 "name": "	Colossenses 1-1a. parte	",	 "length": "	43:42	",	 "file": "	https://www.mediafire.com/file/	n3q9a2p2qkv6x32	/	"},
{"track":	5	,	 "name": "	Colossenses 1-2a. parte	",	 "length": "	28:51	",	 "file": "	https://www.mediafire.com/file/	c1x8fp3pkmibk19	/	"},
{"track":	6	,	 "name": "	Colossenses 1-3a. parte	",	 "length": "	42:19	",	 "file": "	https://www.mediafire.com/file/	1mlie5us103vpx6	/	"},
{"track":	7	,	 "name": "	Colossenses 1-10a13-Mario-Persona-Luis-Soares-Campos-Petrus-Portilho	",	 "length": "	20:39	",	 "file": "	https://www.mediafire.com/file/	o8332yqosej3y6m	/	"},
{"track":	8	,	 "name": "	Colossenses 1-15a17-Mario-Persona-Lineu-Binotti-Luiz-Soares-Campos	",	 "length": "	29:01	",	 "file": "	https://www.mediafire.com/file/	abmoh079u96u860	/	"},
{"track":	9	,	 "name": "	Colossenses 1-18a20-Mario-Persona-Valfredo-Pereira-Lineu-Binotti	",	 "length": "	30:26	",	 "file": "	https://www.mediafire.com/file/	bae5xoktryquvhc	/	"},
{"track":	10	,	 "name": "	Colossenses 1-21a29-Mario-Persona-Lineu-Binotti	",	 "length": "	39:04	",	 "file": "	https://www.mediafire.com/file/	fa2tnnb6e5rka1y	/	"},
{"track":	11	,	 "name": "	Colossenses 2-15a23-Mario-Persona-Lineu-Binotti	",	 "length": "	32:51	",	 "file": "	https://www.mediafire.com/file/	xxnlwjh6e46en70	/	"},
{"track":	12	,	 "name": "	Colossenses 3-Persona-Valfredo-Pereira-Binotti-Pizzinatto	",	 "length": "	37:09	",	 "file": "	https://www.mediafire.com/file/	at1ufa9micjt6cj	/	"},
{"track":	13	,	 "name": "	Colossenses 4-Lineu-Binotti-Luiz-S-Campos	",	 "length": "	25:32	",	 "file": "	https://www.mediafire.com/file/	29p03snohiblx9r	/	"},
{"track":	14	,	 "name": "	Colossenses 4-6a18-Mario-Persona-Lineu-Binotti	",	 "length": "	29:36	",	 "file": "	https://www.mediafire.com/file/	y74bvkylxdh49kp	/	"},

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

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
                                $('#plList').append('<li ><div class="plItem" ><div class="plNum">'+ '.</div><div class="plTitle"><a target="_blank" href="' + trackFile + '"><i class="fa fa-download fa-lg"></i></a> ' + trackName.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase()) + ' - (' + trackVoz + ')' + '</div><div class="plLength">' + trackLength + '</div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
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
document.write('<title>Audio Player - Comentários - Cl</title>')

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
