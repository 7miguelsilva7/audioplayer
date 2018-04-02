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

 
{"track":	1	,	 "name": "	Romanos-1-MPersona-JRPizzinatto-MFreitas-PRLenci.mp3	",	 "length": "	26:14",	 "file": "	http://www.mediafire.com/file/	s2340x004x4jo80	/		"},
{"track":	2	,	 "name": "	Romanos-4-VPereira-PRLenci-MPersona-MFreitas.mp3	",	 "length": "	29:16",	 "file": "	http://www.mediafire.com/file/	4xxahpjfe6adf32	/		"},
{"track":	3	,	 "name": "	Romanos-5-12-MPersona-MFreitas-PRLenci.mp3	",	 "length": "	30:54",	 "file": "	http://www.mediafire.com/file/	7p1k03sjzowcbux	/		"},
{"track":	4	,	 "name": "	Romanos-5-MPersona-LBinotti-APiza-LSoares-PRLenci-VPereira.mp3	",	 "length": "	31:10",	 "file": "	http://www.mediafire.com/file/	59hpuqiyhfbbsco	/		"},
{"track":	5	,	 "name": "	Romanos-6-MPersona-MFreitas-LBinotti.mp3	",	 "length": "	29:41",	 "file": "	http://www.mediafire.com/file/	yah6cu9azuzjpat	/		"},
{"track":	6	,	 "name": "	Romanos-7 - 1a parte.mp3	",	 "length": "	39:30",	 "file": "	http://www.mediafire.com/file/	9cmwm860lcqax0b	/		"},
{"track":	7	,	 "name": "	Romanos-7 - 2a parte.mp3	",	 "length": "	59:16",	 "file": "	http://www.mediafire.com/file/	s1vdc8cezbswz5e	/		"},
{"track":	8	,	 "name": "	Romanos-7-JRPizzinatto-MPersona-LBinotti-PRLenci.mp3	",	 "length": "	41:02",	 "file": "	http://www.mediafire.com/file/	x36uz80zvx6bj11	/		"},
{"track":	9	,	 "name": "	Romanos-8 - 1a parte.mp3	",	 "length": "	32:52",	 "file": "	http://www.mediafire.com/file/	h8ykxd1bl8s498v	/		"},
{"track":	10	,	 "name": "	Romanos-8 - 2a parte.mp3	",	 "length": "	32:16",	 "file": "	http://www.mediafire.com/file/	ip58orvmnotnoe2	/		"},
{"track":	11	,	 "name": "	Romanos-8-JRPizzinatto-MPersona-LBinotti.mp3	",	 "length": "	37:30",	 "file": "	http://www.mediafire.com/file/	pye5540pkkbmb78	/		"},
{"track":	12	,	 "name": "	Romanos-8-8-MPersona-LBinotti.mp3	",	 "length": "	25:26",	 "file": "	http://www.mediafire.com/file/	u3wp4vrpksaur6v	/		"},
{"track":	13	,	 "name": "	Romanos-8-17-JRPizzinatto-MPersona-LBinotti-PPortilho.mp3	",	 "length": "	32:54",	 "file": "	http://www.mediafire.com/file/	ro77m1011v1j2gr	/		"},
{"track":	14	,	 "name": "	Romanos-8-18-VPereira-MPersona.mp3	",	 "length": "	32:55",	 "file": "	http://www.mediafire.com/file/	jjx7my6s8bkkx23	/		"},
{"track":	15	,	 "name": "	Romanos-9-VPereira-MPersona-LBinotti-MFreitas.mp3	",	 "length": "	37:27",	 "file": "	http://www.mediafire.com/file/	f9i7ap1cj9i3r9c	/		"},
{"track":	16	,	 "name": "	Romanos-10-1a4-JRPizzinatto-MPersona-MFreitas.mp3	",	 "length": "	01:07:45	",	 "file": "	http://www.mediafire.com/file/	7l5jv0w77b0dd1f	/		"},
{"track":	17	,	 "name": "	Romanos-10-5-MPersona-PRLenci.mp3	",	 "length": "	42:49",	 "file": "	http://www.mediafire.com/file/	vwcib7kky3k41hg	/		"},
{"track":	18	,	 "name": "	Romanos-10-11a21-MPersona-MFreitas.mp3	",	 "length": "	29:25",	 "file": "	http://www.mediafire.com/file/	ongfchwaz3d1djc	/		"},
{"track":	19	,	 "name": "	Romanos-11-MPersona-MFreitas.mp3	",	 "length": "	58:48",	 "file": "	http://www.mediafire.com/file/	6u7ncz5s3nvd1k2	/		"},
{"track":	20	,	 "name": "	Romanos-12-MPersona-VPereira-LBinotti.mp3	",	 "length": "	30:17",	 "file": "	http://www.mediafire.com/file/	btfbzot9cln4nqn	/		"},
{"track":	21	,	 "name": "	Romanos-12 - 1a parte.mp3	",	 "length": "	35:37",	 "file": "	http://www.mediafire.com/file/	4h6hvemirialczq	/		"},
{"track":	22	,	 "name": "	Romanos-12 - 2a parte.mp3	",	 "length": "	33:39",	 "file": "	http://www.mediafire.com/file/	n4s1uv62ooo3d1n	/		"},
{"track":	23	,	 "name": "	Romanos-12-4a8-JRPizzinatto-MPersona-MFreitas-LBinotti-AAbreu.mp3	",	 "length": "	33:06",	 "file": "	http://www.mediafire.com/file/	yhjwqhll2qqi527	/		"},
{"track":	24	,	 "name": "	Romanos-12-9-MPersona-PRLenci-MFreitas-LBinotti.mp3	",	 "length": "	35:50",	 "file": "	http://www.mediafire.com/file/	hwmugvupst35cgg	/		"}



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
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
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
