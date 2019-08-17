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

{"track":	1	,	 "name": "	Joao 1 - parte 1	",	 "length": "	39:05	",	 "file": "	https://www.mediafire.com/file/	0jgfpc16j2t0b9y	/	"},
{"track":	2	,	 "name": "	Joao 1 - parte 2	",	 "length": "	29:23	",	 "file": "	https://www.mediafire.com/file/	pcdydb6t502dua3	/	"},
{"track":	3	,	 "name": "	Joao 1 - parte 3	",	 "length": "	37:09	",	 "file": "	https://www.mediafire.com/file/	d1br3w7uq63b1ba	/	"},
{"track":	4	,	 "name": "	Joao 4 - 1a parte	",	 "length": "	48:10	",	 "file": "	https://www.mediafire.com/file/	nghidk6nka9s6lj	/	"},
{"track":	5	,	 "name": "	Joao 4 - 2a parte	",	 "length": "	46:16	",	 "file": "	https://www.mediafire.com/file/	l35xm0d030qp7tr	/	"},
{"track":	6	,	 "name": "	Joao 4 - 3a parte	",	 "length": "	59:24	",	 "file": "	https://www.mediafire.com/file/	80n3bu9c0mmmbri	/	"},
{"track":	7	,	 "name": "	Joao 6 - 1a parte	",	 "length": "	44:50	",	 "file": "	https://www.mediafire.com/file/	4ve883a7iabxuf4	/	"},
{"track":	8	,	 "name": "	Joao 6 - 2a parte	",	 "length": "	1:00:02	",	 "file": "	https://www.mediafire.com/file/	vfmxlyhsafxt5ks	/	"},
{"track":	9	,	 "name": "	Joao 18-1a26-Mario-Persona-25012014	",	 "length": "	16:12	",	 "file": "	https://www.mediafire.com/file/	ha8luamwh7trqsx	/	"},
{"track":	10	,	 "name": "	Joao 19-1a16-Jose-Batista-Mario-Persona-Lineu-Binotti	",	 "length": "	27:37	",	 "file": "	https://www.mediafire.com/file/	dkala8iwwzr2jys	/	"},
{"track":	11	,	 "name": "	Joao 19-17a42-Jose-Batista-Pereira-Mario-Persona-Lineu-Binotti-Paulo-Roberto-Lenci	",	 "length": "	31:58	",	 "file": "	https://www.mediafire.com/file/	0p838t0y8s5vvpz	/	"},
{"track":	12	,	 "name": "	Joao 21-Persona-Pizzinatto	",	 "length": "	35:08	",	 "file": "	https://www.mediafire.com/file/	xcelpl0dou8xdd5	/	"},

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

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
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + '-</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
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
document.write('<title>Audio Player - Comentários - Jo</title>')

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
