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

{"track":	1	,	 "name": "	Salmo 119-137a152-Mario-Persona	",	 "length": "	15:13	",	 "file": "	https://www.mediafire.com/file/	q140x4tp01pnuaa	/	"},
{"track":	2	,	 "name": "	Salmo 121-Mario-Persona	",	 "length": "	14:28	",	 "file": "	https://www.mediafire.com/file/	jmrb2dpa1erg1xd	/	"},
{"track":	3	,	 "name": "	Salmo 122-Mario-Persona-Lineu-Binotti-Paulo-Roberto-Lenci	",	 "length": "	23:06	",	 "file": "	https://www.mediafire.com/file/	oecf7a8fyx15um1	/	"},
{"track":	4	,	 "name": "	Salmo 123-124-125-Mario-Persona	",	 "length": "	15:53	",	 "file": "	https://www.mediafire.com/file/	wpgz40ql7m4b2mq	/	"},
{"track":	5	,	 "name": "	Salmos 126-127-128-Mario-Persona	",	 "length": "	13:49	",	 "file": "	https://www.mediafire.com/file/	18k59meyk8edocp	/	"},
{"track":	6	,	 "name": "	Salmos 129-130-131-Mario-Persona	",	 "length": "	09:33	",	 "file": "	https://www.mediafire.com/file/	u3ysuqw3375uns4	/	"},
{"track":	7	,	 "name": "	Salmo 137-Mario-Persona	",	 "length": "	23:00	",	 "file": "	https://www.mediafire.com/file/	74f9vla3b571oaa	/	"},
{"track":	8	,	 "name": "	Salmo 138-Mario-Persona-Luis-Campos-Valfredo-Pereira	",	 "length": "	23:11	",	 "file": "	https://www.mediafire.com/file/	o4ozybrkcxg5cs9	/	"},
{"track":	9	,	 "name": "	Salmo 139-Valfredo-Pereira-Lineu-Binotti	",	 "length": "	19:54	",	 "file": "	https://www.mediafire.com/file/	cv9g4auqfyw35ea	/	"},
{"track":	10	,	 "name": "	Salmo 140-Mario-Persona-Lineu-Binotti-Valfredo-Pereira	",	 "length": "	12:54	",	 "file": "	https://www.mediafire.com/file/	dztcdv546766arc	/	"},
{"track":	11	,	 "name": "	Salmo 141-Mario-Persona-Jose-Batista-Pereira	",	 "length": "	14:58	",	 "file": "	https://www.mediafire.com/file/	kd9gm4x619p7a9a	/	"},
{"track":	12	,	 "name": "	Salmo 142-John-Kemp-Jose-Pizzinatto-Mario-Persona	",	 "length": "	21:17	",	 "file": "	https://www.mediafire.com/file/	qwhc1yyjkm40d4q	/	"},
{"track":	13	,	 "name": "	Salmo 143-Mario-Persona-Beto-Lenci	",	 "length": "	20:39	",	 "file": "	https://www.mediafire.com/file/	4byfld1iktxgs1p	/	"},
{"track":	14	,	 "name": "	Salmo 144-Lineu-Binotti-Valfredo-Pereira-Beto-Lenci	",	 "length": "	18:43	",	 "file": "	https://www.mediafire.com/file/	tqojv3vpf5a65ma	/	"},
{"track":	15	,	 "name": "	Salmo 145-Valfredo-Pereira-Luis-Soares-Campos	",	 "length": "	17:34	",	 "file": "	https://www.mediafire.com/file/	3lz3u70hk7bsjd8	/	"},
{"track":	16	,	 "name": "	Salmo 147-Luis-Soares-Campos-Jose-Batista-Pereira	",	 "length": "	20:34	",	 "file": "	https://www.mediafire.com/file/	0d6id7wreq5dpk9	/	"},
{"track":	17	,	 "name": "	Salmo 149a150-Mario-Persona-Luis-Campos	",	 "length": "	16:30	",	 "file": "	https://www.mediafire.com/file/	bqxt9hv45ntl4g2	/	"},

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
document.write('<title>Audio Player - Comentários - Sl</title>')

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
