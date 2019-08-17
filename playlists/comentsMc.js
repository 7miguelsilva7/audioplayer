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

{"track":	1	,	 "name": "	Marcos 1-Mario-Persona-Jose-Batista-Pereira-Lineu-Binotti-Jose-Valfredo Pereira	",	 "length": "	31:17	",	 "file": "	https://www.mediafire.com/file/	5p2vo99cmn3j87r	/	"},
{"track":	2	,	 "name": "	Marcos 1-14a28-Jose-Batista-Pereira-Mario-Persona-Paulo-Roberto-Lenci	",	 "length": "	36:52	",	 "file": "	https://www.mediafire.com/file/	3336q60yo04m3yu	/	"},
{"track":	3	,	 "name": "	Marcos 2-1a17-Jose-Batista-Pereira-Mario-Persona-Antonio-Zonette	",	 "length": "	33:56	",	 "file": "	https://www.mediafire.com/file/	pbfherbf50hmz8l	/	"},
{"track":	4	,	 "name": "	Marcos 2-18a28-Mario-Persona-Valfredo-Pereira-Antonio-Zonette	",	 "length": "	37:26	",	 "file": "	https://www.mediafire.com/file/	uk67hsejr52si3p	/	"},
{"track":	5	,	 "name": "	Marcos 3-Mario-Persona-Jose-Batista-Pereira-Valfredo-Pereira	",	 "length": "	33:14	",	 "file": "	https://www.mediafire.com/file/	jfgv4iv00tt2yqo	/	"},
{"track":	6	,	 "name": "	Marcos 3-13a35-Mario-Persona-Jose-Batista-Pereira-Lemao-Luis-Campos	",	 "length": "	38:52	",	 "file": "	https://www.mediafire.com/file/	p52wzu9pf878rne	/	"},
{"track":	7	,	 "name": "	Marcos 4-Valfredo-Pereira-Mario-Persona-Jose-Batista-Pereira-Paulo-Roberto-Lenci	",	 "length": "	25:13	",	 "file": "	https://www.mediafire.com/file/	jvwgtna8bxbz871	/	"},
{"track":	8	,	 "name": "	Marcos 4-21a41-Jose-Batista-Pereira-Mario-Persona-Lemao-Luis-Soares	",	 "length": "	29:48	",	 "file": "	https://www.mediafire.com/file/	n5pqgslwfpzl8wa	/	"},
{"track":	9	,	 "name": "	Marcos 5-Mario-Persona-Valfredo-Pereira-Petrus-Portilho	",	 "length": "	32:01	",	 "file": "	https://www.mediafire.com/file/	pyz87dcgxu6qoz7	/	"},
{"track":	10	,	 "name": "	Marcos 6-Mario-Persona-Jose-Batista-Pereira-Valfredo-Pereira	",	 "length": "	22:18	",	 "file": "	https://www.mediafire.com/file/	7851xof91666guh	/	"},
{"track":	11	,	 "name": "	Marcos 6-31a43-Petrus-Portilho-Jose-Roberto-Pizzinatto-Mario-Persona-Paulo-Roberto-Lenci	",	 "length": "	41:19	",	 "file": "	https://www.mediafire.com/file/	i2zpz5vbuouf56f	/	"},
{"track":	12	,	 "name": "	Marcos 7-Valfredo-Pereira-Jose-Batista-Pereira-Mario-Persona-Petrus-Portilho	",	 "length": "	37:28	",	 "file": "	https://www.mediafire.com/file/	aistecyms7g1bzi	/	"},
{"track":	13	,	 "name": "	Marcos 8-Lemao-Luis-Campos-Mario-Persona-Jose-Batista-Pereira	",	 "length": "	30:02	",	 "file": "	https://www.mediafire.com/file/	nmvgej9edgcky3h	/	"},
{"track":	14	,	 "name": "	Marcos 8-27a38-JBatista-MPersona-BLenci	",	 "length": "	35:33	",	 "file": "	https://www.mediafire.com/file/	83r0zeyv4csz38p	/	"},
{"track":	15	,	 "name": "	Marcos 9-1a13-MPersona-VPereira	",	 "length": "	32:34	",	 "file": "	https://www.mediafire.com/file/	v0tjzy0ijf84861	/	"},
{"track":	16	,	 "name": "	Marcos 9-14a29-VPereira-JBPereira	",	 "length": "	27:41	",	 "file": "	https://www.mediafire.com/file/	l3ejbgp1g5b8p1u	/	"},
{"track":	17	,	 "name": "	Marcos 9-30-35-JBPereira-VPereira-JRPizzinatto-PRLenci	",	 "length": "	34:10	",	 "file": "	https://www.mediafire.com/file/	y6yl4yd9m4xgtsc	/	"},
{"track":	18	,	 "name": "	Marcos 9-36a42-MPersona-VPereira-JBPereira	",	 "length": "	34:44	",	 "file": "	https://www.mediafire.com/file/	pjayfrqaryrd81h	/	"},
{"track":	19	,	 "name": "	Marcos 10-1a12-JRPizzinatto-VPereira-JBPereira-LSoares	",	 "length": "	34:07	",	 "file": "	https://www.mediafire.com/file/	lwsi0itg9w165i4	/	"},
{"track":	20	,	 "name": "	Marcos 10-13a22-MPersona-PPortilho-PRLenci	",	 "length": "	26:21	",	 "file": "	https://www.mediafire.com/file/	39nsoad6kzo3maa	/	"},
{"track":	21	,	 "name": "	Marcos 10-23a52-MPersona-PPortilho-VPereira-PRLenci	",	 "length": "	30:56	",	 "file": "	https://www.mediafire.com/file/	88ynz3phynh5kw8	/	"},
{"track":	22	,	 "name": "	Marcos 11-MPersona-JRPizzinatto-PRLenci	",	 "length": "	28:53	",	 "file": "	https://www.mediafire.com/file/	88aa33hg9pgjkza	/	"},
{"track":	23	,	 "name": "	Marcos 11-24a26-MPersona-VPereira-JBPereira	",	 "length": "	37:39	",	 "file": "	https://www.mediafire.com/file/	hl5k1xr2rzb92gk	/	"},
{"track":	24	,	 "name": "	Marcos 11-27-33-MPersona-JRPizzinatto-JBPereira	",	 "length": "	26:13	",	 "file": "	https://www.mediafire.com/file/	4h7rxo93coslee3	/	"},
{"track":	25	,	 "name": "	Marcos 12-MPersona-PPortilho-JBPereira	",	 "length": "	28:53	",	 "file": "	https://www.mediafire.com/file/	uqcm9t729b6jm2y	/	"},
{"track":	26	,	 "name": "	Marcos 13-MPersona-VPereira	",	 "length": "	26:20	",	 "file": "	https://www.mediafire.com/file/	vh9652ez057jjlu	/	"},
{"track":	27	,	 "name": "	Marcos 13-24a37-LSoares-MPersona-MFreitas	",	 "length": "	31:11	",	 "file": "	https://www.mediafire.com/file/	cgq1ige1nad9y1q	/	"},
{"track":	28	,	 "name": "	Marcos 14-1a9-JRPizzinatto-MPersona-PRLenci-MFreitas	",	 "length": "	34:40	",	 "file": "	https://www.mediafire.com/file/	b1bp6cskraxryz4	/	"},
{"track":	29	,	 "name": "	Marcos 14-10a31-VPereira-JBPereira	",	 "length": "	32:17	",	 "file": "	https://www.mediafire.com/file/	ck9e7k697cxm0wy	/	"},
{"track":	30	,	 "name": "	Marcos 16-MPersona-VPereira-JBPereira-PRLenci	",	 "length": "	33:40	",	 "file": "	https://www.mediafire.com/file/	ack3f1fv5a7pzqs	/	"},
{"track":	31	,	 "name": "	Marcos 16-9a20-MPersona-JRPizzinatto	",	 "length": "	34:37	",	 "file": "	https://www.mediafire.com/file/	lv347tuzb18vddt	/	"},
{"track":	32	,	 "name": "	Marcos 16 - 1a parte	",	 "length": "	49:06	",	 "file": "	https://www.mediafire.com/file/	rylluxe3xi962so	/	"},
{"track":	33	,	 "name": "	Marcos 16 - 2a parte	",	 "length": "	59:14	",	 "file": "	https://www.mediafire.com/file/	790jzagd478w27a	/	"},

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
document.write('<title>Audio Player - Comentários - Mc</title>')

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
