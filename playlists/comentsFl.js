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

{"track":	1	,	 "name": "	Filipenses 1-1a11-Luis-Lemao-Campos-Mario-Persona	",	 "length": "	27:36	",	 "file": "	https://www.mediafire.com/file/	3a95e924hdd1gzc	/	"},
{"track":	2	,	 "name": "	Filipenses 1-12a30-Mario-Persona-Luis-Lemao-Campos	",	 "length": "	27:36	",	 "file": "	https://www.mediafire.com/file/	vvtaabw2o00jdu0	/	"},
{"track":	3	,	 "name": "	Filipenses 2 - 1a. parte	",	 "length": "	36:21	",	 "file": "	https://www.mediafire.com/file/	vubomhb6txic2kh	/	"},
{"track":	4	,	 "name": "	Filipenses 2 - 2a. parte	",	 "length": "	1:02:43	",	 "file": "	https://www.mediafire.com/file/	h8tpb7h0hb4xbdh	/	"},
{"track":	5	,	 "name": "	Filipenses 2 e 3 - 3a. parte	",	 "length": "	32:35	",	 "file": "	https://www.mediafire.com/file/	fue0xc6sbfbw33x	/	"},
{"track":	6	,	 "name": "	Filipenses 2-12a30-Mario-Persona-Valfredo-Pereira	",	 "length": "	51:32	",	 "file": "	https://www.mediafire.com/file/	czz4n4fc4ufavf9	/	"},
{"track":	7	,	 "name": "	Filipenses 3 - 1a parte	",	 "length": "	50:50	",	 "file": "	https://www.mediafire.com/file/	n73it2g8posu1ns	/	"},
{"track":	8	,	 "name": "	Filipenses 3 - 2a parte	",	 "length": "	30:11	",	 "file": "	https://www.mediafire.com/file/	vguhexe2aet08fb	/	"},
{"track":	9	,	 "name": "	Filipenses 3-Lineu-Binotti-Mario-Persona-Paulo-Roberto-Lenci	",	 "length": "	29:16	",	 "file": "	https://www.mediafire.com/file/	518dc2fcm6mdow2	/	"},
{"track":	10	,	 "name": "	Filipenses 3-7a21-Mario-Persona-Valfredo-Pereira-Paulo-Roberto-Lenci	",	 "length": "	39:21	",	 "file": "	https://www.mediafire.com/file/	q40vm3a182qjrty	/	"},
{"track":	11	,	 "name": "	Filipenses 3-18a21-Valfredo-Pereira-Mario-Persona-Lineu-Binotti	",	 "length": "	1:04:22	",	 "file": "	https://www.mediafire.com/file/	2rvjnx8xkpezjqj	/	"},
{"track":	12	,	 "name": "	Filipenses 4-Mario-Persona-Lineu-Binotti-Fernando-Lenci	",	 "length": "	35:14	",	 "file": "	https://www.mediafire.com/file/	0nle6p4btp77myw	/	"},
{"track":	13	,	 "name": "	Filipenses 4 - 1a parte	",	 "length": "	51:24	",	 "file": "	https://www.mediafire.com/file/	9k2g647jekkrca4	/	"},
{"track":	14	,	 "name": "	Filipenses 4 - 2a parte	",	 "length": "	1:00:25	",	 "file": "	https://www.mediafire.com/file/	uycqdw15uqttcqc	/	"},
{"track":	15	,	 "name": "	Filipenses 4-8a23-Valfredo-Pereira-Lineu-Binotti	",	 "length": "	31:46	",	 "file": "	https://www.mediafire.com/file/	iwkmu7f7fgmnjgj	/	"},

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
document.write('<title>Audio Player - Comentários - Fl</title>')

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
  } 
// }

//initialize plyr
plyr.setup($('#audio1'), {});
