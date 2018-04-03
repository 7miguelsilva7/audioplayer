// External Files:
// https://api.html5media.info/1.1.8/html5media.min.js (enables <video> and <audio> tags in all major browsers)
// https://cdn.plyr.io/2.0.13/plyr.js


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
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

 
{"track":	1	,	 "name": "	1a Coríntios 1 - parte 1.mp3	",	 "length": "	41:54	",	 "file": "	http://www.mediafire.com/file/	6dq7powa5wu67qc	/	"},
{"track":	2	,	 "name": "	1a Coríntios 1 - parte 2.mp3	",	 "length": "	45:33	",	 "file": "	http://www.mediafire.com/file/	vid35557mzo96cv	/	"},
{"track":	3	,	 "name": "	1a Coríntios 1 - parte 3.mp3	",	 "length": "	1:00:14	",	 "file": "	http://www.mediafire.com/file/	9a3h1wq3m974jhb	/	"},
{"track":	4	,	 "name": "	1a Coríntios 2.mp3	",	 "length": "	56:23	",	 "file": "	http://www.mediafire.com/file/	qy9bsfy7vf0lzlv	/	"},
{"track":	5	,	 "name": "	1a Coríntios 12.mp3	",	 "length": "	54:37	",	 "file": "	http://www.mediafire.com/file/	s4vs3z3sc755d0u	/	"},
{"track":	6	,	 "name": "	1a Coríntios 14.mp3	",	 "length": "	54:51	",	 "file": "	http://www.mediafire.com/file/	mob53vxjhn0hyo2	/	"},
{"track":	7	,	 "name": "	1a Coríntios 14 - 1a parte.mp3	",	 "length": "	30:44	",	 "file": "	http://www.mediafire.com/file/	4m708ummzqnl2x5	/	"},
{"track":	8	,	 "name": "	1a Coríntios 14 - 2a parte.mp3	",	 "length": "	56:13	",	 "file": "	http://www.mediafire.com/file/	ra0abr0cgeyi64r	/	"},
{"track":	9	,	 "name": "	1a Coríntios 14 - 3a parte.mp3	",	 "length": "	52:53	",	 "file": "	http://www.mediafire.com/file/	3j86w6al9354o6w	/	"},
{"track":	10	,	 "name": "	1a Coríntios 15 - 1a parte.mp3	",	 "length": "	34:45	",	 "file": "	http://www.mediafire.com/file/	a8o9pit9rtoa3r1	/	"},
{"track":	11	,	 "name": "	1a Coríntios 15 - 2a parte.mp3	",	 "length": "	1:03:39	",	 "file": "	http://www.mediafire.com/file/	434fa1b62xg318d	/	"},


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

//initialize plyr
plyr.setup($('#audio1'), {});