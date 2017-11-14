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

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

 
{"track":	1	,	 "name": "	Apocalipse-01-Mario-Persona-Paulo-Roberto-Lenci.mp3	",	 "length": "	31:58	",	 "file": "	http://www.mediafire.com/file/	muojn8xk1qb9e4b	/	Apocalipse-01-Mario-Persona-Paulo-Roberto-Lenci.mp3	"},
{"track":	2	,	 "name": "	Apocalipse-02-12a17-Mario-Persona-Valfredo-Pereira.mp3	",	 "length": "	31:46	",	 "file": "	http://www.mediafire.com/file/	70rd5k27587hf7r	/	Apocalipse-02-12a17-Mario-Persona-Valfredo-Pereira.mp3	"},
{"track":	3	,	 "name": "	Apocalipse-02-18a29-Mario-Persona-Lemao-Luis-Campos-Valfredo-Pereira.mp3	",	 "length": "	37:59	",	 "file": "	http://www.mediafire.com/file/	asyh9h5b95qu5zx	/	Apocalipse-02-18a29-Mario-Persona-Lemao-Luis-Campos-Valfredo-Pereira.mp3	"},
{"track":	4	,	 "name": "	Apocalipse-02-8a11-Petrus-Portilho-Valfredo-Pereira-Jose-Roberto-Pizzinatto-Mario-Persona.mp3	",	 "length": "	36:17	",	 "file": "	http://www.mediafire.com/file/	n2qe146a84li3x7	/	Apocalipse-02-8a11-Petrus-Portilho-Valfredo-Pereira-Jose-Roberto-Pizzinatto-Mario-Persona.mp3	"},
{"track":	5	,	 "name": "	Apocalipse-02-Mario-Persona-Lemao-Luis-Campos-Jose-Roberto-Pizzinatto-Paulo-Roberto-Lenci.mp3	",	 "length": "	39:48	",	 "file": "	http://www.mediafire.com/file/	b4r39zdnsudp8xp	/	Apocalipse-02-Mario-Persona-Lemao-Luis-Campos-Jose-Roberto-Pizzinatto-Paulo-Roberto-Lenci.mp3	"},
{"track":	6	,	 "name": "	Apocalipse-03-14a22-MPersona-LCampos-PRLenci.mp3	",	 "length": "	36:00	",	 "file": "	http://www.mediafire.com/file/	yr3265hbt74l6cx	/	Apocalipse-03-14a22-MPersona-LCampos-PRLenci.mp3	"},
{"track":	7	,	 "name": "	Apocalipse-03-1a6-MPersona-BLenci.mp3	",	 "length": "	33:58	",	 "file": "	http://www.mediafire.com/file/	m353wxtij21zi8j	/	Apocalipse-03-1a6-MPersona-BLenci.mp3	"},
{"track":	8	,	 "name": "	Apocalipse-03-7a13-MPersona-VPereira.mp3	",	 "length": "	38:19	",	 "file": "	http://www.mediafire.com/file/	l41idcf1h89y81j	/	Apocalipse-03-7a13-MPersona-VPereira.mp3	"},
{"track":	9	,	 "name": "	Apocalipse-04-1a3-JRPizzinatto-LCampos-MPersona.mp3	",	 "length": "	31:38	",	 "file": "	http://www.mediafire.com/file/	c1n8nbdtzufu7dv	/	Apocalipse-04-1a3-JRPizzinatto-LCampos-MPersona.mp3	"},
{"track":	10	,	 "name": "	Apocalipse-04-4a11-MPersona-LCampos-PRLenci.mp3	",	 "length": "	29:35	",	 "file": "	http://www.mediafire.com/file/	zsew81m0lm4mmzm	/	Apocalipse-04-4a11-MPersona-LCampos-PRLenci.mp3	"},
{"track":	11	,	 "name": "	Apocalipse-05-JRPizzinatto-MPersona-PRLenci.mp3	",	 "length": "	31:23	",	 "file": "	http://www.mediafire.com/file/	4u6ngrtuu11a6cn	/	Apocalipse-05-JRPizzinatto-MPersona-PRLenci.mp3	"},
{"track":	12	,	 "name": "	Apocalipse-06-MPersona-PPortilho-PRLenci.mp3	",	 "length": "	34:09	",	 "file": "	http://www.mediafire.com/file/	9u3mfo8c636oh0b	/	Apocalipse-06-MPersona-PPortilho-PRLenci.mp3	"},
{"track":	13	,	 "name": "	Apocalipse-07-MPersona-VPereira-PRLenci.mp3	",	 "length": "	29:07	",	 "file": "	http://www.mediafire.com/file/	pjwj4ydu3u9ok3d	/	Apocalipse-07-MPersona-VPereira-PRLenci.mp3	"},
{"track":	14	,	 "name": "	Apocalipse-08-JRPizzinatto-MPersona-PRLenci.mp3	",	 "length": "	33:02	",	 "file": "	http://www.mediafire.com/file/	kirmzb8llbb7k2l	/	Apocalipse-08-JRPizzinatto-MPersona-PRLenci.mp3	"},
{"track":	15	,	 "name": "	Apocalipse-09-13a21-LCampos-MPersona-JRPizzinatto.mp3	",	 "length": "	36:27	",	 "file": "	http://www.mediafire.com/file/	irkveu113q2g5ww	/	Apocalipse-09-13a21-LCampos-MPersona-JRPizzinatto.mp3	"},
{"track":	16	,	 "name": "	Apocalipse-09-MPersona-VPereira-PRLenci.mp3	",	 "length": "	33:42	",	 "file": "	http://www.mediafire.com/file/	6c0xf3ytwr476y6	/	Apocalipse-09-MPersona-VPereira-PRLenci.mp3	"},
{"track":	17	,	 "name": "	Apocalipse-10-MPersona-PPortilho-PRLenci.mp3	",	 "length": "	33:13	",	 "file": "	http://www.mediafire.com/file/	6g2072r3dpbm026	/	Apocalipse-10-MPersona-PPortilho-PRLenci.mp3	"},
{"track":	18	,	 "name": "	Apocalipse-11-MPersona-PPortilho-PRLenci.mp3	",	 "length": "	37:26	",	 "file": "	http://www.mediafire.com/file/	5dd3p9v1oaktbi3	/	Apocalipse-11-MPersona-PPortilho-PRLenci.mp3	"},
{"track":	19	,	 "name": "	Apocalipse-12-VPereira-PPortilho-PRLenci.mp3	",	 "length": "	32:44	",	 "file": "	http://www.mediafire.com/file/	belpixkc2nljvk0	/	Apocalipse-12-VPereira-PPortilho-PRLenci.mp3	"},
{"track":	20	,	 "name": "	Apocalipse-13-10a18-MPersona-VPereira-MFreitas.mp3	",	 "length": "	32:08	",	 "file": "	http://www.mediafire.com/file/	6dec56jtuv75fz1	/	Apocalipse-13-10a18-MPersona-VPereira-MFreitas.mp3	"},
{"track":	21	,	 "name": "	Apocalipse-13-VPereira-LCampos.mp3	",	 "length": "	27:28	",	 "file": "	http://www.mediafire.com/file/	0qm3qxm0xlpzmdr	/	Apocalipse-13-VPereira-LCampos.mp3	"},
{"track":	22	,	 "name": "	Apocalipse-14-14a20-JRPizzinatto-MFreitas-MPersona-LCampos.mp3	",	 "length": "	29:58	",	 "file": "	http://www.mediafire.com/file/	dmyiaa1p03ivl0a	/	Apocalipse-14-14a20-JRPizzinatto-MFreitas-MPersona-LCampos.mp3	"},
{"track":	23	,	 "name": "	Apocalipse-14-PPortilho-MPersona-VPereira-MFreitas.mp3	",	 "length": "	34:29	",	 "file": "	http://www.mediafire.com/file/	eoa93dmuq5alt3x	/	Apocalipse-14-PPortilho-MPersona-VPereira-MFreitas.mp3	"},
{"track":	24	,	 "name": "	Apocalipse-15-MPersona-VPereira.mp3	",	 "length": "	25:57	",	 "file": "	http://www.mediafire.com/file/	ho7ssb18f1j6d1k	/	Apocalipse-15-MPersona-VPereira.mp3	"},
{"track":	25	,	 "name": "	Apocalipse-16-MPersona-MFreitas-LSoares-VPereira.mp3	",	 "length": "	31:48	",	 "file": "	http://www.mediafire.com/file/	nd49sed7bwbx380	/	Apocalipse-16-MPersona-MFreitas-LSoares-VPereira.mp3	"},
{"track":	26	,	 "name": "	Apocalipse-17-8a18-VPereira-MPersona-MFreitas.mp3	",	 "length": "	33:34	",	 "file": "	http://www.mediafire.com/file/	2dv93ndarfc8yae	/	Apocalipse-17-8a18-VPereira-MPersona-MFreitas.mp3	"},
{"track":	27	,	 "name": "	Apocalipse-17-MPersona-LSoares-JRPizzinatto.mp3	",	 "length": "	31:25	",	 "file": "	http://www.mediafire.com/file/	m5101k5pt5g2mol	/	Apocalipse-17-MPersona-LSoares-JRPizzinatto.mp3	"},
{"track":	28	,	 "name": "	Apocalipse-18-19a24-MPersona-VPereira-PRLenci.mp3	",	 "length": "	32:09	",	 "file": "	http://www.mediafire.com/file/	ujdmz1s1sl6v6bo	/	Apocalipse-18-19a24-MPersona-VPereira-PRLenci.mp3	"},
{"track":	29	,	 "name": "	Apocalipse-18-MPersona-VPereira-MFreitas.mp3	",	 "length": "	29:27	",	 "file": "	http://www.mediafire.com/file/	cawftlhni701bmu	/	Apocalipse-18-MPersona-VPereira-MFreitas.mp3	"},
{"track":	30	,	 "name": "	Apocalipse-21-9a27-MPersona-JRPizzinatto.mp3	",	 "length": "	34:13	",	 "file": "	http://www.mediafire.com/file/	7fn54btopqmcpmr	/	Apocalipse-21-9a27-MPersona-JRPizzinatto.mp3	"},
{"track":	31	,	 "name": "	Apocalipse-21-VPereira-MPersona-PRLenci.mp3	",	 "length": "	25:30	",	 "file": "	http://www.mediafire.com/file/	pciuqi0mbmbu7dq	/	Apocalipse-21-VPereira-MPersona-PRLenci.mp3	"},
{"track":	32	,	 "name": "	Apocalipse-22-JRPizzinatto-MPersona-MFreitas-PRLenci.mp3	",	 "length": "	39:36	",	 "file": "	http://www.mediafire.com/file/	8jlp833xdk7g3g7	/	Apocalipse-22-JRPizzinatto-MPersona-MFreitas-PRLenci.mp3	"}



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
            random = false,
            recursive = false,
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if (random) {
                    loadTrack(getRandomTrack())
                    audio.play()
                }
                else if (recursive) {
                    loadTrack(index)
                    audio.play();
                }
                else {
                    if ((index + 1) < trackCount) {
                        index++;
                        loadTrack(index);
                        audio.play();
                    } else {
                        audio.pause();
                        index = 0;
                        loadTrack(index);
                    }
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
                if (random) {
                    loadTrack(getRandomTrack())
                    audio.play();
                }
                else {
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
                }
            }),
            btnRandom = $('#btnRandom').click(function () {
                console.log('first click');
                recursive = false;
                random = !random;
                if (random) {
                    $('#btnReplay').removeClass('btnSelected');
                    $(this).addClass('btnSelected');
                } else $(this).removeClass('btnSelected');
            }),
            btnReplay = $('#btnReplay').click(function () {
                random = false;
                recursive = !recursive;
                if (recursive) {
                    $('#btnRandom').removeClass('btnSelected');
                    $(this).addClass('btnSelected');
                } else $(this).removeClass('btnSelected')
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
            },
            getRandomTrack = function () {
                return Math.floor((Math.random() * tracks.length) + 1);
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});

//initialize plyr
plyr.setup($('#audio1'), {});
