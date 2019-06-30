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

{"track":	1	,	 "name": "	Mateus 1-1a17-Mario-Persona-Jose-Batista-Pereira-Paulo-Roberto-Lenci-Jose-Roberto-Pizzinatto	",	 "length": "	36:05	",	 "file": "	https://www.mediafire.com/file/	efw98ywckybjh2a	/	"},
{"track":	2	,	 "name": "	Mateus 1-18a25-Jose-Batista-Pereira-Paulo-Roberto-Lenci-Luiz-Soares-Campos	",	 "length": "	24:25	",	 "file": "	https://www.mediafire.com/file/	yofwnco5z7snopu	/	"},
{"track":	3	,	 "name": "	Mateus 2-Mario-Persona-Jose-Roberto-Pizzinato-Paulo-Roberto-Lenci	",	 "length": "	27:09	",	 "file": "	https://www.mediafire.com/file/	4m6c7yxaz7opknk	/	"},
{"track":	4	,	 "name": "	Mateus 2-13-23-Mario-Persona-Jose-Batista-Pereira-Paulo-Roberto-Lenci	",	 "length": "	26:50	",	 "file": "	https://www.mediafire.com/file/	0kjtwn1m2jan6bm	/	"},
{"track":	5	,	 "name": "	Mateus 3-Mario-Persona-Jose-Batista-Pereira-Jose-Roberto-Pizzinatto	",	 "length": "	31:46	",	 "file": "	https://www.mediafire.com/file/	53a1n8dnfi1ctg3	/	"},
{"track":	6	,	 "name": "	Mateus 4-1a11-Mario-Persona-Valfredo-Pereira-Jose-Roberto-Pizzinatto-Lineu-Binotti	",	 "length": "	31:09	",	 "file": "	https://www.mediafire.com/file/	apt11w1zd25jh90	/	"},
{"track":	7	,	 "name": "	Mateus 4-12a25-Valfredo-Pereira-Mario-Persona-Luiz-Campos-Lineu-Binotti-Jose-Pizzinatto	",	 "length": "	36:05	",	 "file": "	https://www.mediafire.com/file/	6c4vl139ucg9v9v	/	"},
{"track":	8	,	 "name": "	Mateus 5-1a12-Mario-Persona	",	 "length": "	28:17	",	 "file": "	https://www.mediafire.com/file/	mi8a2zjedaidwyj	/	"},
{"track":	9	,	 "name": "	Mateus 6-Lineu-Binotti	",	 "length": "	16:12	",	 "file": "	https://www.mediafire.com/file/	g2fod957hsvtlq9	/	"},
{"track":	10	,	 "name": "	Mateus 6-19a34-Lineu-Binotti-Jose-Roberto-Pizzinatto-Paulo-Roberto-Lenci-Jose-Batista-Pereira	",	 "length": "	27:55	",	 "file": "	https://www.mediafire.com/file/	sdfgzhn69ljswuf	/	"},
{"track":	11	,	 "name": "	Mateus 7-7a23-Mario-Persona-Jose-Roberto-Pizzinatto-Lineu-Binotti	",	 "length": "	29:26	",	 "file": "	https://www.mediafire.com/file/	qm6c4o7j247sjy7	/	"},
{"track":	12	,	 "name": "	Mateus 7-19a29-Mario-Persona-Valfredo-Pereira-Jose-Batista-Pereira-Jose-Roberto-Pizzinatto-Paulo-Roberto-Lenci	",	 "length": "	38:42	",	 "file": "	https://www.mediafire.com/file/	21k4m68uza6weev	/	"},
{"track":	13	,	 "name": "	Mateus 7-Mario-Persona-Lineu-Binotti	",	 "length": "	21:51	",	 "file": "	https://www.mediafire.com/file/	a57l6ev62d5lhvr	/	"},
{"track":	14	,	 "name": "	Mateus 8-18a34-Mario-Persona-Valfredo-Pereira	",	 "length": "	34:07	",	 "file": "	https://www.mediafire.com/file/	7kscjy1i8ki9g0i	/	"},
{"track":	15	,	 "name": "	Mateus 9-Lineu-Binotti-Jose-Roberto-Pizzinatto-Mario-Persona-Paulo-Roberto-Lenci	",	 "length": "	26:06	",	 "file": "	https://www.mediafire.com/file/	ot74xmw6utropy9	/	"},
{"track":	16	,	 "name": "	Mateus 9-9a38-Mario-Persona-Valfredo-Pereira-Jose-Batista-Pereira	",	 "length": "	33:31	",	 "file": "	https://www.mediafire.com/file/	5oo73qmh4qbw6h4	/	"},
{"track":	17	,	 "name": "	Mateus 13 - 1a parte.	",	 "length": "	50:36	",	 "file": "	https://www.mediafire.com/file/	ahf5ms3h3v3zqcb	/	"},
{"track":	18	,	 "name": "	Mateus 13 - 2a parte.	",	 "length": "	1:05:38	",	 "file": "	https://www.mediafire.com/file/	m8wb89ax1xr6xi4	/	"},
{"track":	19	,	 "name": "	Mateus 28-Jose-Batista-Pereira-Mario-Persona	",	 "length": "	18:46	",	 "file": "	https://www.mediafire.com/file/	v7wrolq9qzva8r8	/	"},

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
document.write('<title>Audio Player - Comentários - Mt</title>')

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
