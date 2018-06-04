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

{"track":	1	,	 "name": "	Eclesiastes 01-Mario-Persona-Valfredo-Pereira-Lineu-Binotti-Jose-Batista-Pereira	",	 "length": "	23:05	",	 "file": "	http://www.mediafire.com/file/	14imbxtai7icnkr	/	"},
{"track":	2	,	 "name": "	Eclesiastes 02-Lineu-Binotti	",	 "length": "	08:48	",	 "file": "	http://www.mediafire.com/file/	piitiko84m288a2	/	"},
{"track":	3	,	 "name": "	Eclesiastes 04-Mario-Persona-Lineu-Binotti-Jose-Batista-Pereira-Paulo-Lenci	",	 "length": "	35:14	",	 "file": "	http://www.mediafire.com/file/	41834g86z3i2ort	/	"},
{"track":	4	,	 "name": "	Eclesiastes 07-Lineu-Binotti-Mario-Persona-Jose-Batista-Pereira-Jose-Roberto-Pizzinatto	",	 "length": "	21:10	",	 "file": "	http://www.mediafire.com/file/	qryrueed291w51r	/	"},
{"track":	5	,	 "name": "	Eclesiastes 08-Mario-Persona-Jose-Batista-Pereira-Lineu-Binotti-Bob-Thonney-Paulo-Lenci	",	 "length": "	24:54	",	 "file": "	http://www.mediafire.com/file/	qt7029dvxrma2o4	/	"},
{"track":	6	,	 "name": "	Eclesiastes 09-Mario-Persona-Jose-Batista-Pereira-Lineu-Binotti	",	 "length": "	24:50	",	 "file": "	http://www.mediafire.com/file/	jvghgn91wl9beew	/	"},
{"track":	7	,	 "name": "	Eclesiastes 10-Mario-Persona-Luiz-Soares	",	 "length": "	14:14	",	 "file": "	http://www.mediafire.com/file/	yei2bz3qpx3fzny	/	"},


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