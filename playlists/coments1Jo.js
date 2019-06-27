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

{"track":	1	,	 "name": "	1ª Joao-1-1-Mario-Persona	",	 "length": "	09:56	",	 "file": "	https://www.mediafire.com/file/	3p3mfzsmu63os89	/	"},
{"track":	2	,	 "name": "	1ª Joao 1 - 1a parte	",	 "length": "	1:03:57	",	 "file": "	https://www.mediafire.com/file/	jvr1vdvmxh8hou1	/	"},
{"track":	3	,	 "name": "	1ª Joao 1 - 2a parte	",	 "length": "	45:00	",	 "file": "	https://www.mediafire.com/file/	drlrqakm30h4hoh	/	"},
{"track":	4	,	 "name": "	1ª Joao 1 - 3a parte	",	 "length": "	1:09:45	",	 "file": "	https://www.mediafire.com/file/	1836cta0l9v1i29	/	"},
{"track":	5	,	 "name": "	1ª Joao-2-15-29-Concupiscencias-Anticristos-Mario-Persona-Lineu-Binotti	",	 "length": "	27:19	",	 "file": "	https://www.mediafire.com/file/	stkkwx7h8t9w388	/	"},
{"track":	6	,	 "name": "	1ª Joao-2-15-29-Vida-Selo-Penhor-Uncao-Mandamentos-Mario-Persona-Valfredo-Pereira	",	 "length": "	31:30	",	 "file": "	https://www.mediafire.com/file/	9e4d2on5xni1q6d	/	"},
{"track":	7	,	 "name": "	1ª Joao-3-1a10-Jose-Batista-Pereira-Mario-Persona-Paulo-Roberto-Lenci	",	 "length": "	33:35	",	 "file": "	https://www.mediafire.com/file/	4e5be5opf4s7fen	/	"},
{"track":	8	,	 "name": "	1ª Joao-4-Luiz-Lemao-Soares-Campos-Mario-Persona-Valfredo-Pereira	",	 "length": "	41:35	",	 "file": "	https://www.mediafire.com/file/	9lrvj411hmse9kr	/	"},
{"track":	9	,	 "name": "	1ª Joao-4-7a21-Valfredo-Pereira-Mario-Persona	",	 "length": "	38:37	",	 "file": "	https://www.mediafire.com/file/	su9pcrxno1988zv	/	"},
{"track":	10	,	 "name": "	1ª Joao-5-1-Mario-Persona	",	 "length": "	38:50	",	 "file": "	https://www.mediafire.com/file/	02mp3yy2grmvu57	/	"},
{"track":	11	,	 "name": "	1ª Joao-5-14a21-Mario-Persona-Jose-Roberto-Pizzinatto-Paulo-Roberto-Lenci	",	 "length": "	42:58	",	 "file": "	https://www.mediafire.com/file/	lzhlbcofh58q58i	/	"},

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
    }
});

// Título da playlist
document.write('<title>Audio Player - Comentários - 1Jo</title>')

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

    localStorage.setItem(audioNextKey[0].innerHTML, audioNext);
    // alert(audioNext)
}
audio1.addEventListener('ended',localStorageAudioNext)


// function restoreAudioNext()
// {
    if(localStorage.hasOwnProperty(audioNextKey[0].innerHTML))
  {
    location.replace(localStorage.getItem(audioNextKey[0].innerHTML))
    //initialize plyr
    plyr.setup($('#audio1'), {});  } 
// }

//initialize plyr
plyr.setup($('#audio1'), {});
