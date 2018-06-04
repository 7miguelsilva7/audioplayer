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

{"track":	1	,	 "name": "	Lucas 1-MPersona-LSoares-PRLenci	",	 "length": "	28:19	",	 "file": "	http://www.mediafire.com/file/	yf5jib0e2oq7kk6	/	"},
{"track":	2	,	 "name": "	Lucas 1-5a38-MPersona-JRPizzinatto-PRLenci	",	 "length": "	33:39	",	 "file": "	http://www.mediafire.com/file/	bx2te5quntu2yv9	/	"},
{"track":	3	,	 "name": "	Lucas 1-39-PPortilho-MPersona-VPereira-PRLenci	",	 "length": "	27:07	",	 "file": "	http://www.mediafire.com/file/	sd20zrta1ncwc1r	/	"},
{"track":	4	,	 "name": "	Lucas 2-VPereira-JBPereira	",	 "length": "	18:35	",	 "file": "	http://www.mediafire.com/file/	zz1136ta2hm4su1	/	"},
{"track":	5	,	 "name": "	Lucas 3-MPersona-VPereira-JBPereira	",	 "length": "	32:57	",	 "file": "	http://www.mediafire.com/file/	i0zzt23ahd07fsv	/	"},
{"track":	6	,	 "name": "	Lucas 3-15-LBinotti-APiza-LSoares-JBPereira	",	 "length": "	30:04	",	 "file": "	http://www.mediafire.com/file/	1x3eg0ro11mvksf	/	"},
{"track":	7	,	 "name": "	Lucas 4-1a13-MPersona-APiza-JBPereira-PRLenci	",	 "length": "	36:47	",	 "file": "	http://www.mediafire.com/file/	vjrn8c0ki8mmwwa	/	"},
{"track":	8	,	 "name": "	Lucas 4-14-VPereira-MPersona-APiza-JBPereira-MFreitas	",	 "length": "	33:19	",	 "file": "	http://www.mediafire.com/file/	3163eqmqn61v7h3	/	"},
{"track":	9	,	 "name": "	Lucas 5-12-JRPizzinatto-JBPereira-LBinotti-MFreitas-PRLenci	",	 "length": "	36:29	",	 "file": "	http://www.mediafire.com/file/	k5wsobf501ab6xh	/	"},
{"track":	10	,	 "name": "	Lucas 5-17a26-VPereira-JBPereira-MPersona	",	 "length": "	33:10	",	 "file": "	http://www.mediafire.com/file/	gxrm8e7hl68wc2n	/	"},
{"track":	11	,	 "name": "	Lucas 5-27-MPersona-PRLenci-JRPizzinatto-JBPereira	",	 "length": "	36:14	",	 "file": "	http://www.mediafire.com/file/	604obc54us6sebs	/	"},
{"track":	12	,	 "name": "	Lucas 5-JBPereira-JRPizzinatto-MPersona-PRLenci	",	 "length": "	33:27	",	 "file": "	http://www.mediafire.com/file/	qz4tacleonhwmer	/	"},
{"track":	13	,	 "name": "	Lucas 6-MPersona-VPereira-PPortilho	",	 "length": "	34:37	",	 "file": "	http://www.mediafire.com/file/	g2181stp4v0ia9m	/	"},
{"track":	14	,	 "name": "	Lucas 6-12-MPersona-VPereira-JBPereira	",	 "length": "	26:57	",	 "file": "	http://www.mediafire.com/file/	cdtuflhx323emsr	/	"},
{"track":	15	,	 "name": "	Lucas 7-1a35-VPereira-JBPereira-PRLenci-MPersona-PPortilho	",	 "length": "	28:46	",	 "file": "	http://www.mediafire.com/file/	hfc1x9aausp6eel	/	"},
{"track":	16	,	 "name": "	Lucas 7-36-MPersona-JBPereira-MFretias-JRPizzinatto	",	 "length": "	31:05	",	 "file": "	http://www.mediafire.com/file/	bquc5gl6xmapjqd	/	"},
{"track":	17	,	 "name": "	Lucas 8-1a3-MPersona-JBPereira-MFreitas	",	 "length": "	35:39	",	 "file": "	http://www.mediafire.com/file/	y56cvmb4zhid9ko	/	"},
{"track":	18	,	 "name": "	Lucas 8-4-JRPizznatto-PRLenci-PPortilho-LBinotti-JBPereira-APiza	",	 "length": "	24:53	",	 "file": "	http://www.mediafire.com/file/	0h1r9tzmq3lanul	/	"},
{"track":	19	,	 "name": "	Lucas 8-16a26-MPersona-JBPereira-PRLenci	",	 "length": "	33:40	",	 "file": "	http://www.mediafire.com/file/	2p95l2ih1rcisvy	/	"},
{"track":	20	,	 "name": "	Lucas 8-27a39-JRPizzinatto-MPersona-JBPereira	",	 "length": "	34:09	",	 "file": "	http://www.mediafire.com/file/	4cvhw85leuvppvc	/	"},
{"track":	21	,	 "name": "	Lucas 8-40a56-LSCampos-MPersona-JBPereira-PRLenci	",	 "length": "	35:45	",	 "file": "	http://www.mediafire.com/file/	rbi55s5biec7s3d	/	"},


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
