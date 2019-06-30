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

{"track":	1	,	 "name": "	Isaias 35-Mario-Persona-Lineu-Binotti-Jose-Roberto-Pizzinatto	",	 "length": "	26:16	",	 "file": "	https://www.mediafire.com/file/	7hhqyvahgl8a72p	/	"},
{"track":	2	,	 "name": "	Isaias 38-Jose-Batista-Pereira-Mario-Persona-Valfredo-Pereira-Jose-Roberto-Pizzinatto	",	 "length": "	22:10	",	 "file": "	https://www.mediafire.com/file/	xqoss7l3ttdpoil	/	"},
{"track":	3	,	 "name": "	Isaias 40-Valfredo-Pereira-Jose-Batista-Pereira-Mario-Persona-Jose-Roberto-Pizzinatto-Paulo-Roberto-Lenci	",	 "length": "	30:38	",	 "file": "	https://www.mediafire.com/file/	aasqn3osup6iooy	/	"},
{"track":	4	,	 "name": "	Isaias 42-Valfredo-Pereira-Jose-Roberto-Pizzinatto	",	 "length": "	25:42	",	 "file": "	https://www.mediafire.com/file/	hq3u71ahyal4zx6	/	"},
{"track":	5	,	 "name": "	Isaias 45-Mario-Persona-Daniel-Brimlow-Valfredo-Pereira-Paulo-Roberto-Lenci-Jose-Batista-Pereira	",	 "length": "	26:54	",	 "file": "	https://www.mediafire.com/file/	sn4sz73z29grv7o	/	"},
{"track":	6	,	 "name": "	Isaias 46-Jose-Batista-Pereira-Mario-Persona-Jose-Roberto-Pizzinatto	",	 "length": "	27:32	",	 "file": "	https://www.mediafire.com/file/	wln0va1b42sp1du	/	"},
{"track":	7	,	 "name": "	Isaias 47-Mario-Persona-Lemao-Luis-Campos-Jose-Batista-Pereira	",	 "length": "	23:58	",	 "file": "	https://www.mediafire.com/file/	adi114qu40rk6m0	/	"},
{"track":	8	,	 "name": "	Isaias 48-Jose-Batista-Pereira-Mario-Persona	",	 "length": "	21:48	",	 "file": "	https://www.mediafire.com/file/	xn4g5hyald4h5x4	/	"},
{"track":	9	,	 "name": "	Isaias 49-Valfredo-Pereira-Mario-Persona-Jose-Roberto-Pizzinatto-Jose-Batista-Pereira	",	 "length": "	22:17	",	 "file": "	https://www.mediafire.com/file/	jnoyt4bbgeh1a75	/	"},
{"track":	10	,	 "name": "	Isaias 50-Mario-Persona-Jose-Batista-Pereira	",	 "length": "	25:25	",	 "file": "	https://www.mediafire.com/file/	bwr6xljc89w3mra	/	"},
{"track":	11	,	 "name": "	Isaias 51-Mario-Persona-Jose-Batista-Pereira	",	 "length": "	25:03	",	 "file": "	https://www.mediafire.com/file/	5n4oap8y6so2485	/	"},
{"track":	12	,	 "name": "	Isaias 52-MPersona-VPereira-JBatista	",	 "length": "	28:26	",	 "file": "	https://www.mediafire.com/file/	tmytffz1m66fs9x	/	"},
{"track":	13	,	 "name": "	Isaias 53-MPersona-VPereira-JPizzinatto	",	 "length": "	26:36	",	 "file": "	https://www.mediafire.com/file/	a0bby7bbgbj2ebm	/	"},
{"track":	14	,	 "name": "	Isaias 54-JBatista-LCampos-JRPizzinatto	",	 "length": "	24:39	",	 "file": "	https://www.mediafire.com/file/	mlb0l2ptz5hbbvi	/	"},
{"track":	15	,	 "name": "	Isaias 55-MPersona-VPereira	",	 "length": "	22:04	",	 "file": "	https://www.mediafire.com/file/	7am6cwp5nmiha3s	/	"},
{"track":	16	,	 "name": "	Isaias 56-VPereira-MPersona	",	 "length": "	22:26	",	 "file": "	https://www.mediafire.com/file/	d6dy1d7rujnr777	/	"},
{"track":	17	,	 "name": "	Isaias 57-MPersona-JRPizzinatto	",	 "length": "	26:14	",	 "file": "	https://www.mediafire.com/file/	bp8on83cjp9lc7b	/	"},
{"track":	18	,	 "name": "	Isaias 58-VPereira-MPersona-PRLenci	",	 "length": "	28:31	",	 "file": "	https://www.mediafire.com/file/	d8z72940fbfp33a	/	"},
{"track":	19	,	 "name": "	Isaias 59-MPersona-JRPizzinatto-VPereira	",	 "length": "	27:42	",	 "file": "	https://www.mediafire.com/file/	6whubzzznk6lfnr	/	"},
{"track":	20	,	 "name": "	Isaias 61-MPersona-VPereira-JBPereira	",	 "length": "	28:33	",	 "file": "	https://www.mediafire.com/file/	d1055239v38sa4l	/	"},
{"track":	21	,	 "name": "	Isaias 62-MPersona-VPereira-JRPizzinatto	",	 "length": "	27:55	",	 "file": "	https://www.mediafire.com/file/	cc029e0rt7d9n0a	/	"},
{"track":	22	,	 "name": "	Isaias 64-RBoulard-PRLenci	",	 "length": "	31:58	",	 "file": "	https://www.mediafire.com/file/	ufueyq97errw98f	/	"},
{"track":	23	,	 "name": "	Isaias 65-PRLenci	",	 "length": "	13:34	",	 "file": "	https://www.mediafire.com/file/	84q8b83f0v2dqc3	/	"},
{"track":	24	,	 "name": "	Isaias 66-LCampos-JBPereira-PFroese	",	 "length": "	20:14	",	 "file": "	https://www.mediafire.com/file/	zwx1c0omhmite40	/	"},


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
document.write('<title>Audio Player - Comentários - Is</title>')

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
