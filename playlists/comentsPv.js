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

{"track":	1	,	 "name": "	Proverbios 01-Mario-Persona-Lineu-Binotti-Beto-Lenci	",	 "length": "	28:46	",	 "file": "	https://www.mediafire.com/file/	g1nq06f06a72v2b	/	"},
{"track":	2	,	 "name": "	Proverbios 02-Mario-Persona-Valfredo-Pereira-Jose-Pizzinatto-Lineu-Binotti	",	 "length": "	29:28	",	 "file": "	https://www.mediafire.com/file/	1b7ld31ps9lw1wt	/	"},
{"track":	3	,	 "name": "	Proverbios 03-Mario-Persona-Lineu-Binotti-Beto-Lenci	",	 "length": "	30:59	",	 "file": "	https://www.mediafire.com/file/	i3n8rjedn9cudtj	/	"},
{"track":	4	,	 "name": "	Proverbios 04-Mario-Persona-Jose-Batista-Pereira	",	 "length": "	18:05	",	 "file": "	https://www.mediafire.com/file/	okktxz7gvb7a5v9	/	"},
{"track":	5	,	 "name": "	Proverbios 06-Jose-Batista-Pereira-Mario-Persona-Luis-Soares-Campos-Lineu-Binotti	",	 "length": "	29:23	",	 "file": "	https://www.mediafire.com/file/	yk57bb9wi48mcdk	/	"},
{"track":	6	,	 "name": "	Proverbios 07-Jose-Batista-Pereira-Lineu-Binotti-Valfredo-Pereira	",	 "length": "	20:13	",	 "file": "	https://www.mediafire.com/file/	osn865dyrvebsg2	/	"},
{"track":	7	,	 "name": "	Proverbios 08-Valfredo-Pereira-Lineu-Binotti-Jose-Batista-Jose-Pizzinatto-Beto-Lenci	",	 "length": "	26:31	",	 "file": "	https://www.mediafire.com/file/	j4bfjkfhglg2m5j	/	"},
{"track":	8	,	 "name": "	Proverbios 09-Mario-Persona-Jose-Batista-Pereira	",	 "length": "	23:42	",	 "file": "	https://www.mediafire.com/file/	6ysyy0za8p6zgnu	/	"},
{"track":	9	,	 "name": "	Proverbios 10-Mario-Persona-Jose-Batista-Pereira-Paulo-Lenci	",	 "length": "	22:13	",	 "file": "	https://www.mediafire.com/file/	ndy646rgkfk327h	/	"},
{"track":	10	,	 "name": "	Proverbios 11-Batista-Pereira-Mario-Persona-Jose-Pizzinato-Paulo-Lenci	",	 "length": "	29:06	",	 "file": "	https://www.mediafire.com/file/	7n0ye2jn35d5xfy	/	"},
{"track":	11	,	 "name": "	Proverbios 12-Valfredo-Pereira-Mario-Persona-Jose-Batista-Pereira-Luiz-Campos	",	 "length": "	20:07	",	 "file": "	https://www.mediafire.com/file/	rap33azryrea9fl	/	"},
{"track":	12	,	 "name": "	Proverbios 14-Lineu-Binotti-Jose-Batista-Pereira	",	 "length": "	28:53	",	 "file": "	https://www.mediafire.com/file/	saayk14p10k4ida	/	"},
{"track":	13	,	 "name": "	Proverbios 15-Mario-Persona-Valfredo-Pereira-Lineu-Binotti-Paulo-Lenci	",	 "length": "	27:03	",	 "file": "	https://www.mediafire.com/file/	rbfs8iwlut8trbi	/	"},
{"track":	14	,	 "name": "	Proverbios 16-Valfredo-Pereira-Lineu-Binotti-Paulo-Lenci	",	 "length": "	14:37	",	 "file": "	https://www.mediafire.com/file/	1pyt2rqi70480p6	/	"},
{"track":	15	,	 "name": "	Proverbios 17-Mario-Persona-Jose-Pizzinatto-Lineu-Binotti	",	 "length": "	26:36	",	 "file": "	https://www.mediafire.com/file/	s7ny9549fhtdz80	/	"},
{"track":	16	,	 "name": "	Proverbios 18-Jose-Batista-Pereira-Lineu-Binotti	",	 "length": "	18:45	",	 "file": "	https://www.mediafire.com/file/	78xiy979i69fy8l	/	"},
{"track":	17	,	 "name": "	Proverbios 19-Valfredo-Pereira-Paulo-Roberto-Lenci	",	 "length": "	21:15	",	 "file": "	https://www.mediafire.com/file/	wtapj14so1ccoqd	/	"},
{"track":	18	,	 "name": "	Proverbios 20-Mario-Persona-Lineu-Binotti-Jose-Roberto-Pizzinatto	",	 "length": "	24:33	",	 "file": "	https://www.mediafire.com/file/	euyjkcn8sxbm0l5	/	"},
{"track":	19	,	 "name": "	Proverbios 21-Jose-Batista-Pereira-Mario-Persona	",	 "length": "	25:54	",	 "file": "	https://www.mediafire.com/file/	577lwu07xdpozza	/	"},
{"track":	20	,	 "name": "	Proverbios 22-Lineu-Binotti-Valfredo-Pereira	",	 "length": "	17:13	",	 "file": "	https://www.mediafire.com/file/	ekipwx2s72733qd	/	"},
{"track":	21	,	 "name": "	Proverbios 23-Lineu-Binotti-Jose-Batista-Pereira	",	 "length": "	21:40	",	 "file": "	https://www.mediafire.com/file/	7aa2kpiw6fkp81c	/	"},
{"track":	22	,	 "name": "	Proverbios 24-Mario-Persona-Lineu-Binotti-Paulo-Roberto-Lenci	",	 "length": "	25:46	",	 "file": "	https://www.mediafire.com/file/	yibmysayg5pc61w	/	"},
{"track":	23	,	 "name": "	Proverbios 25-Mario-Persona-Lineu-Binotti-Bernardo-Lenzi	",	 "length": "	23:01	",	 "file": "	https://www.mediafire.com/file/	5fxind4mh5xbe6x	/	"},
{"track":	24	,	 "name": "	Proverbios 26-Mario-Persona-Paulo-Roberto-Lenci	",	 "length": "	15:40	",	 "file": "	https://www.mediafire.com/file/	44a4cdy37eagpai	/	"},
{"track":	25	,	 "name": "	Proverbios 27-Jose-Batista-Pereira-Mario-Persona-Paulo-Roberto-Lenci	",	 "length": "	20:45	",	 "file": "	https://www.mediafire.com/file/	5tll6q9o4t4i7n9	/	"},
{"track":	26	,	 "name": "	Proverbios 29-Valfredo-Pereira-Mario-Persona	",	 "length": "	19:13	",	 "file": "	https://www.mediafire.com/file/	wd8oqhozyh02ixo	/	"},
{"track":	27	,	 "name": "	Proverbios 30-Mario-Persona-Jose-Batista-Pereira-Paulo-Roberto-Lenci	",	 "length": "	22:32	",	 "file": "	https://www.mediafire.com/file/	fwfeu9x3salj12f	/	"},
{"track":	28	,	 "name": "	Proverbios 31-Mario-Persona-Jose-Batista-Pereira-Lineu-Binotti	",	 "length": "	27:25	",	 "file": "	https://www.mediafire.com/file/	2746v7ga8qdjr1b	/	"},


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
document.write('<title>Audio Player - Comentários - Pv</title>')

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
