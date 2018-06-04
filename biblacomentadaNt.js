// External Files:
// https://api.html5media.info/1.1.8/html5media.min.js (enables <video> and <audio> tags in all major browsers)
// https://cdn.plyr.io/2.0.13/plyr.js


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = '',
            extension = '',
            tracks = [
                

{"track":	1	,	 "name": "Mateus",	  	"file": "player.html?ip=comentsMt"},
{"track":	2	,	 "name": "Marcos",	  	"file": "player.html?ip=comentsMc"},
{"track":   3	,	 "name": "Lucas",	  	"file": "player.html?ip=comentsLc"},
{"track":	4	,	 "name": "João",	  	"file": "player.html?ip=comentsJo"},
{"track":	5	,	 "name": "Atos dos Apóstolos", "file": "player.html?ip=comentsActs"},
{"track":	6	,	 "name": "Romanos", "file": "player.html?ip=comentsRm"},
{"track":	7	,	 "name": "1ª Coríntios", "file": "player.html?ip=coments1co"},
{"track":	8	,	 "name": "Efésios",	  	"file": "player.html?ip=comentsEf"},
{"track":	9	,	 "name": "Filipenses",	  	"file": "player.html?ip=comentsFl"},
{"track":	10	,	 "name": "Colossenses",	  	"file": "player.html?ip=comentsCl"},
{"track":	11	,	 "name": "1ª Tessalonissenses",	  	"file": "player.html?ip=coments1Ts"},
{"track":	12	,	 "name": "2ª Tessalonissenses",	  	"file": "player.html?ip=coments2Ts"},
{"track":	13	,	 "name": "1ª Timóteo",	  	"file": "player.html?ip=coments1Tm"},
{"track":	14	,	 "name": "2ª Timóteo",	  	"file": "player.html?ip=coments2Tm"},
{"track":	15	,	 "name": "Tito",	  	"file": "player.html?ip=comentsTt"},
{"track":	16	,	 "name": "Filemon",	  	"file": "player.html?ip=comentsFm"},
{"track":	17  ,	 "name": "Hebreus",	  	"file": "player.html?ip=comentsHb"},
{"track":	18	,	 "name": "1ª Pedro",	  	"file": "player.html?ip=coments1Pe"},
{"track":	19	,	 "name": "2ª Pedro",	  	"file": "player.html?ip=coments2Pe"},
{"track":	20	,	 "name": "1ª João",	  	"file": "player.html?ip=coments1Jo"},
{"track":	21	,	 "name": "2ª João",	  	"file": "player.html?ip=coments2Jo"},
{"track":	22	,	 "name": "3ª João",	  	"file": "player.html?ip=coments3Jo"},
{"track":	23	,	 "name": "Judas",	  	"file": "player.html?ip=comentsJd"},
{"track":	24	,	 "name": "Apocalipse",	  	"file": "player.html?ip=comentsAp"},


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
                $('#plList').append('<div align="center" class="container" class="column add-bottom" center><a href=" ' + value.file + ' ">' + value.name + '<br><br></a></div>');
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
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
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