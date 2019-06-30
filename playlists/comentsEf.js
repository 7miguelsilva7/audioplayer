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

{"track":	1	,	 "name": "	Efesios-1 - 1a parte	",	 "length": "	1:01:17	",	 "file": "	https://www.mediafire.com/file/	m5zbfxxdvljhcbh	/	"},
{"track":	2	,	 "name": "	Efesios-1 - 2a parte	",	 "length": "	43:45	",	 "file": "	https://www.mediafire.com/file/	34333g6lcarnj3n	/	"},
{"track":	3	,	 "name": "	Efesios-1 - 3a parte	",	 "length": "	50:13	",	 "file": "	https://www.mediafire.com/file/	4076yte8dt9cs3p	/	"},
{"track":	4	,	 "name": "	Efesios-1 - 1a. parte	",	 "length": "	1:00:46	",	 "file": "	https://www.mediafire.com/file/	py8lnbazyb559e5	/	"},
{"track":	5	,	 "name": "	Efesios-1 - 2a. parte	",	 "length": "	1:00:44	",	 "file": "	https://www.mediafire.com/file/	abm9zs9ze4ezijc	/	"},
{"track":	6	,	 "name": "	Efesios-1 - 3a. parte	",	 "length": "	31:15	",	 "file": "	https://www.mediafire.com/file/	qct5jzvje2rg31z	/	"},
{"track":	7	,	 "name": "	Efesios-2-11a22-Mario-Persona	",	 "length": "	21:26	",	 "file": "	https://www.mediafire.com/file/	vcrh6b0hcg9yocy	/	"},
{"track":	8	,	 "name": "	Efesios-3-1a12-Lineu-Binotti-26012014	",	 "length": "	15:15	",	 "file": "	https://www.mediafire.com/file/	3a29kda5rk7sxwh	/	"},
{"track":	9	,	 "name": "	Efesios-3-1a12-Mario-Persona	",	 "length": "	21:28	",	 "file": "	https://www.mediafire.com/file/	m3j5ab59438ejkt	/	"},
{"track":	10	,	 "name": "	Efesios-3-02022014a	",	 "length": "	35:27	",	 "file": "	https://www.mediafire.com/file/	wa5e7iadqh855ta	/	"},
{"track":	11	,	 "name": "	Efesios-4-1a3-Lineu-Binotti-Mario-Persona-Luis-Campos	",	 "length": "	28:21	",	 "file": "	https://www.mediafire.com/file/	xkcp1cf530ghzuo	/	"},
{"track":	12	,	 "name": "	Efesios-4-17a32-Luis-Campos-Mario-Persona-Lineu-Binotti-Paulo-Roberto-Lenci	",	 "length": "	33:33	",	 "file": "	https://www.mediafire.com/file/	2x9w8dcv8akau89	/	"},
{"track":	13	,	 "name": "	Efesios-6-1a10-Mario-Persona-Luis-Campos	",	 "length": "	01:10:08	",	 "file": "	https://www.mediafire.com/file/	xmqccxlsc7z5jh6	/	"},
{"track":	14	,	 "name": "	Efesios-6:10-24	",	 "length": "	16:33	",	 "file": "	https://www.mediafire.com/file/	rtbplaint4gl3vh	/	"},
{"track":	15	,	 "name": "	Efesios-6-18a24-Mario-Persona	",	 "length": "	24:25	",	 "file": "	https://www.mediafire.com/file/	57w2dj9f2cbfzhw	/	"},

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
document.write('<title>Audio Player - Comentários - Ef</title>')

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
