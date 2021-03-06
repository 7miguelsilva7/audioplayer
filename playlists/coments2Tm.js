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

{"track":	1	,	 "name": "	2ª Timoteo 1-Valfredo-Pereira-Lineu-Binotti-Mario-Persona	",	 "length": "	32:22	",	 "file": "	https://www.mediafire.com/file/	dq38auu883k22d8	/	"},
{"track":	2	,	 "name": "	2ª Timoteo 1-7a18-Mario-Persona-Valfredo-Pereira	",	 "length": "	27:36	",	 "file": "	https://www.mediafire.com/file/	n58xu8618c5qg2x	/	"},
{"track":	3	,	 "name": "	2ª Timoteo 1-13-18-Valfredo-Pereira-Mario-Persona	",	 "length": "	37:06	",	 "file": "	https://www.mediafire.com/file/	188t838hzf6dn56	/	"},
{"track":	4	,	 "name": "	2ª Timoteo 2-1a13-Mario-Persona-Luiz-Soares-Campos	",	 "length": "	17:51	",	 "file": "	https://www.mediafire.com/file/	905ycr8hc0ncpd6	/	"},
{"track":	5	,	 "name": "	2ª Timoteo 2-14a18-Mario-Persona	",	 "length": "	28:28	",	 "file": "	https://www.mediafire.com/file/	ec7k2hi1e95s14o	/	"},
{"track":	6	,	 "name": "	2a Timóteo 2 - 1a parte	",	 "length": "	52:29	",	 "file": "	https://www.mediafire.com/file/	dyxo4sjbhi74ciq	/	"},
{"track":	7	,	 "name": "	2a Timóteo 2 - 2a parte	",	 "length": "	1:10:11	",	 "file": "	https://www.mediafire.com/file/	4bv43bpd1e0y7m6	/	"},
{"track":	8	,	 "name": "	2a Timóteo 2 - parte 1	",	 "length": "	42:12	",	 "file": "	https://www.mediafire.com/file/	b9x6libwkt4ao77	/	"},
{"track":	9	,	 "name": "	2a Timóteo 2 - parte 2	",	 "length": "	32:33	",	 "file": "	https://www.mediafire.com/file/	xil8b7m63bvmtvt	/	"},
{"track":	10	,	 "name": "	2a Timóteo 2 - parte 3	",	 "length": "	1:04:28	",	 "file": "	https://www.mediafire.com/file/	ynov2bp1bg0fim4	/	"},
{"track":	11	,	 "name": "	2ª Timoteo 3-Lineu-Binotti	",	 "length": "	20:13	",	 "file": "	https://www.mediafire.com/file/	o7gddgj5lcub0rr	/	"},
{"track":	12	,	 "name": "	2ª Timoteo 4-1a5-Valfredo-Pereira-Lineu-Binotti-Luiz-Soares-Campos	",	 "length": "	18:24	",	 "file": "	https://www.mediafire.com/file/	vb63lredr0y6bsb	/	"},
{"track":	13	,	 "name": "	2ª Timoteo 4-6a22-Luis-Soares-Campos-Mario-Persona	",	 "length": "	22:33	",	 "file": "	https://www.mediafire.com/file/	b026n2zgvchffvo	/	"},


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
document.write('<title>Audio Player - Comentários - 2Tm</title>')

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
