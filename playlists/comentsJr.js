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

{"track":	1	,	 "name": "	Jeremias 01-JRPizzinatto-JBPereira-MPersona	",	 "length": "	22:45	",	 "file": "	https://www.mediafire.com/file/	30xca2c9m19k2ha	/	"},
{"track":	2	,	 "name": "	Jeremias 02-VPereira-MPersona-JBPereira-PRLenci	",	 "length": "	26:57	",	 "file": "	https://www.mediafire.com/file/	9rxmdd6xxs8ru9i	/	"},
{"track":	3	,	 "name": "	Jeremias 04-MPersona-JRPizzinatto	",	 "length": "	24:01	",	 "file": "	https://www.mediafire.com/file/	mvj6oc85almhcmo	/	"},
{"track":	4	,	 "name": "	Jeremias 05-MPersona-VPereira	",	 "length": "	20:26	",	 "file": "	https://www.mediafire.com/file/	l188k16q8u4nzt6	/	"},
{"track":	5	,	 "name": "	Jeremias 07-VPereira-JRPizzinatto	",	 "length": "	23:29	",	 "file": "	https://www.mediafire.com/file/	2hyojpslve3yutp	/	"},
{"track":	6	,	 "name": "	Jeremias 08-VPereira-JRPizzinatto	",	 "length": "	23:23	",	 "file": "	https://www.mediafire.com/file/	ss6p7zy05i7wkwg	/	"},
{"track":	7	,	 "name": "	Jeremias 09-JRPizzinatto-VPereira	",	 "length": "	21:21	",	 "file": "	https://www.mediafire.com/file/	ivlu3tuwrwx8ql8	/	"},
{"track":	8	,	 "name": "	Jeremias 12-JBPereira-MPersona-LSoares	",	 "length": "	24:32	",	 "file": "	https://www.mediafire.com/file/	bedipj48oh7r3l6	/	"},
{"track":	9	,	 "name": "	Jeremias 15-VPereira-MPersona	",	 "length": "	20:54	",	 "file": "	https://www.mediafire.com/file/	47o06ix6l55zf0f	/	"},
{"track":	10	,	 "name": "	Jeremias 16-MPersona-JBPereira-JRPizzinatto-PRLenci	",	 "length": "	31:39	",	 "file": "	https://www.mediafire.com/file/	6k6gniqm7h641wl	/	"},
{"track":	11	,	 "name": "	Jeremias 17-JBPereira-MPersona-JRPizzinatto	",	 "length": "	22:55	",	 "file": "	https://www.mediafire.com/file/	h0ff35dyr04eb2t	/	"},
{"track":	12	,	 "name": "	Jeremias 18-VPereira-MPersona-JRPizzinatto-JBPereira	",	 "length": "	22:25	",	 "file": "	https://www.mediafire.com/file/	4xawizh2o7b6zf0	/	"},
{"track":	13	,	 "name": "	Jeremias 21-DBuchanan-RBoulard	",	 "length": "	24:27	",	 "file": "	https://www.mediafire.com/file/	jyadmna2338723p	/	"},
{"track":	14	,	 "name": "	Jeremias 22-VPereira-JBPereira	",	 "length": "	10:48	",	 "file": "	https://www.mediafire.com/file/	2ljb3jb9i82hs07	/	"},
{"track":	15	,	 "name": "	Jeremias 23-JBPereira-VPereira	",	 "length": "	23:03	",	 "file": "	https://www.mediafire.com/file/	9fa6i65ysdbd1ls	/	"},
{"track":	16	,	 "name": "	Jeremias 24-PRLenci-JBPereira-PPortilho	",	 "length": "	20:42	",	 "file": "	https://www.mediafire.com/file/	3f7spqwzetqkqgd	/	"},
{"track":	17	,	 "name": "	Jeremias 25-MPersona-PRLenci	",	 "length": "	20:54	",	 "file": "	https://www.mediafire.com/file/	sn3460nn1rlkzee	/	"},
{"track":	18	,	 "name": "	Jeremias 26-VPereira-LBinotti-MPersona	",	 "length": "	23:57	",	 "file": "	https://www.mediafire.com/file/	0i7acn2wirw0ori	/	"},
{"track":	19	,	 "name": "	Jeremias 28-JBPereira	",	 "length": "	14:53	",	 "file": "	https://www.mediafire.com/file/	ei2866acewqgo6n	/	"},
{"track":	20	,	 "name": "	Jeremias 30-JBPereira-MPersona-VPereira-PRLenci	",	 "length": "	29:00	",	 "file": "	https://www.mediafire.com/file/	8aa94fg7cm7ht3x	/	"},
{"track":	21	,	 "name": "	Jeremias 31-JBPereira-MPersona-VPereira-JRPizzinatto	",	 "length": "	22:57	",	 "file": "	https://www.mediafire.com/file/	86n378k9mplc75a	/	"},
{"track":	22	,	 "name": "	Jeremias 32-VPereira-MPersona-PPortilho-JRPizzinatto-PRLenci	",	 "length": "	26:11	",	 "file": "	https://www.mediafire.com/file/	6p3bjf280f7n68t	/	"},
{"track":	23	,	 "name": "	Jeremias 33-MPersona-JRPizzinatto-PRLenci	",	 "length": "	24:25	",	 "file": "	https://www.mediafire.com/file/	fjhnhhd474k7p7p	/	"},
{"track":	24	,	 "name": "	Jeremias 34-MPersona-JRPizzinatto	",	 "length": "	15:33	",	 "file": "	https://www.mediafire.com/file/	f4ge75tmfkm7giu	/	"},
{"track":	25	,	 "name": "	Jeremias 36-MPersona-JBPereira-JRPizzinatto	",	 "length": "	27:29	",	 "file": "	https://www.mediafire.com/file/	mqrcdmbmmv83a6j	/	"},
{"track":	26	,	 "name": "	Jeremias 37-JRPizzinatto-JBPereira-MPersona	",	 "length": "	25:08	",	 "file": "	https://www.mediafire.com/file/	hrj2zzqds6uhmfu	/	"},


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
document.write('<title>Audio Player - Comentários - Jr</title>')

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
    plyr.setup($('#audio1'), {});

  } else
  {
    //initialize plyr
    plyr.setup($('#audio1'), {});
  }
// }
