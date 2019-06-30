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

{"track":	1	,	 "name": "	1 Timoteo-1-Luiz-Soares-Campos-Lineu-Binotti-Mario-Persona	",	 "length": "	25:22	",	 "file": "	https://www.mediafire.com/file/	rt9rft3jgwdnv7c	/	"},
{"track":	2	,	 "name": "	1 Timoteo-1-7a20-Lineu-Binotti-Valfredo-Pereira-Paulo-Lenci	",	 "length": "	24:30	",	 "file": "	https://www.mediafire.com/file/	smo21g8nxskdv00	/	"},
{"track":	3	,	 "name": "	1 Timoteo-2-1a8-Mario-Persona-Valfredo-Pereira	",	 "length": "	34:38	",	 "file": "	https://www.mediafire.com/file/	48v11a55ogi61am	/	"},
{"track":	4	,	 "name": "	1 Timoteo-2-7a15-Mario-Persona-Lineu-Binotti	",	 "length": "	35:32	",	 "file": "	https://www.mediafire.com/file/	2z4bi2pcb1kbbjj	/	"},
{"track":	5	,	 "name": "	1 Timoteo-3-1a13-Mario-Persona-Lineu-Binotti	",	 "length": "	32:42	",	 "file": "	https://www.mediafire.com/file/	ful5eut9n5qw9o9	/	"},
{"track":	6	,	 "name": "	1 Timoteo-3-14a16-4-1a5-Mario-Persona-Lineu-Binotti	",	 "length": "	34:57	",	 "file": "	https://www.mediafire.com/file/	wfuwuqp76vu7peb	/	"},
{"track":	7	,	 "name": "	1 Timoteo-4-6a16-Lineu-Binotti-Mario-Persona-Valfredo-Pereira	",	 "length": "	40:41	",	 "file": "	https://www.mediafire.com/file/	99i3nsmz9d4qvjz	/	"},
{"track":	8	,	 "name": "	1 Timoteo-5-Mario-Persona-Lineu-Binotti	",	 "length": "	31:46	",	 "file": "	https://www.mediafire.com/file/	0261k3forn6gk73	/	"},
{"track":	9	,	 "name": "	1 Timoteo-6-Mario-Persona-Lineu-Binotti	",	 "length": "	33:39	",	 "file": "	https://www.mediafire.com/file/	m2yzbufecp7zymu	/	"},


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
document.write('<title>Audio Player - Comentários - 1Tm</title>')

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
