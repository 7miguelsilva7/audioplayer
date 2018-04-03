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
		//return anchor value for "index" valiable
        var index = anchorTrack,
            playing = false,
            mediaPath = '',
            extension = '',
            tracks = [

                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                
                {"track":	1	,	 "name": "	Atos 1 Introducao Mario Persona	",	 "length": "	13:36	",	 "file": "	http://www.mediafire.com/file/	1ii8lgdyii9v44c	/	Atos 1 Introducao Mario Persona	"},
                {"track":	2	,	 "name": "	Atos 1 12a26 2 1 Batista Persona Pizzinatto	",	 "length": "	17:00	",	 "file": "	http://www.mediafire.com/file/	8h3k3hbntyb0znn	/	Atos 1 12a26 2 1 Batista Persona Pizzinatto	"},
                {"track":	3	,	 "name": "	Atos 1 12a26 Mario Persona Lineu Binotti Luis Lemao Campos	",	 "length": "	43:31	",	 "file": "	http://www.mediafire.com/file/	xrxur3ir2k2idz1	/	Atos 1 12a26 Mario Persona Lineu Binotti Luis Lemao Campos	"},
                {"track":	4	,	 "name": "	Atos 2 14a36 Valfredo Pereira Mario Persona	",	 "length": "	37:50	",	 "file": "	http://www.mediafire.com/file/	3cilj6utuy82659	/	Atos 2 14a36 Valfredo Pereira Mario Persona	"},
                {"track":	5	,	 "name": "	Atos 3 Mario Persona Valfredo Pereira Jose Batista	",	 "length": "	29:46	",	 "file": "	http://www.mediafire.com/file/	y91jkjvyapfqe5j	/	Atos 3 Mario Persona Valfredo Pereira Jose Batista	"},
                {"track":	6	,	 "name": "	Atos 4 Valfredo Pereira Mario Persona Lineu Binotti	",	 "length": "	33:55	",	 "file": "	http://www.mediafire.com/file/	94bxddhz05gq2ah	/	Atos 4 Valfredo Pereira Mario Persona Lineu Binotti	"},
                {"track":	7	,	 "name": "	Atos 4 32a37 5 1a13 Jose Batista Pereira Luis D S Campos Mario Persona Valfredo Pereira	",	 "length": "	32:38	",	 "file": "	http://www.mediafire.com/file/	133bba6pbh7bzo8	/	Atos 4 32a37 5 1a13 Jose Batista Pereira Luis D S Campos Mario Persona Valfredo Pereira	"},
                {"track":	8	,	 "name": "	Atos 5 Valfredo Pereira Jose Batista Pereira	",	 "length": "	26:20	",	 "file": "	http://www.mediafire.com/file/	dhba6zbd6rj1w7e	/	Atos 5 Valfredo Pereira Jose Batista Pereira	"},
                {"track":	9	,	 "name": "	Atos 7 Jose Batista Pereira Lineu Binotti	",	 "length": "	08:58	",	 "file": "	http://www.mediafire.com/file/	i2w2747fw4xl816	/	Atos 7 Jose Batista Pereira Lineu Binotti	"},
                {"track":	10	,	 "name": "	Atos 8 1a8 Jose Batista Pereira Mario Persona Lineu Binotti Jose Roberto Pizzinatto	",	 "length": "	38:09	",	 "file": "	http://www.mediafire.com/file/	c0fvlxxfokknesv	/	Atos 8 1a8 Jose Batista Pereira Mario Persona Lineu Binotti Jose Roberto Pizzinatto	"},
                {"track":	11	,	 "name": "	Atos 8 9a25 Jose Batista Pereira Mario Persona Lineu Binotti	",	 "length": "	29:51	",	 "file": "	http://www.mediafire.com/file/	exhmjxtpc3yreg2	/	Atos 8 9a25 Jose Batista Pereira Mario Persona Lineu Binotti	"},
                {"track":	12	,	 "name": "	Atos 8 26a40 Jose Batista Pereira Mario Persona Jose Roberto Pizzinatto Lineu Binotti	",	 "length": "	36:50	",	 "file": "	http://www.mediafire.com/file/	cb70ocdd1bu7q1x	/	Atos 8 26a40 Jose Batista Pereira Mario Persona Jose Roberto Pizzinatto Lineu Binotti	"},
                {"track":	13	,	 "name": "	Atos 9 parte1	",	 "length": "	55:26	",	 "file": "	http://www.mediafire.com/file/	lhypu97eqputzxa	/	Atos 9 parte1	"},
                {"track":	14	,	 "name": "	Atos 9 parte2	",	 "length": "	39:06	",	 "file": "	http://www.mediafire.com/file/	p6fwzf11pl642qu	/	Atos 9 parte2	"},
                {"track":	15	,	 "name": "	Atos 9 parte3	",	 "length": "	17:55	",	 "file": "	http://www.mediafire.com/file/	zvn30ldg6wrpmvl	/	Atos 9 parte3	"},
                {"track":	16	,	 "name": "	Atos 9 1a 18 Jose Batista Pereira Lineu Binotti Valfredo Pereira Mario Persona	",	 "length": "	35:17	",	 "file": "	http://www.mediafire.com/file/	y5f78333366jbhw	/	Atos 9 1a 18 Jose Batista Pereira Lineu Binotti Valfredo Pereira Mario Persona	"},
                {"track":	17	,	 "name": "	Atos 9 19a31 Petrus Portilho Valfredo Pereira Lineu Binotti Mario Persona Jose Roberto Pizzinatto	",	 "length": "	31:52	",	 "file": "	http://www.mediafire.com/file/	x26ykv72nksnzsv	/	Atos 9 19a31 Petrus Portilho Valfredo Pereira Lineu Binotti Mario Persona Jose Roberto Pizzinatto	"},
                {"track":	18	,	 "name": "	Atos 10 1a.parte	",	 "length": "	48:46	",	 "file": "	http://www.mediafire.com/file/	uci73by18qltbcc	/	Atos 10 1a.parte	"},
                {"track":	19	,	 "name": "	Atos 10 2a.parte	",	 "length": "	33:24	",	 "file": "	http://www.mediafire.com/file/	4mnlty62xep9y46	/	Atos 10 2a.parte	"},
                {"track":	20	,	 "name": "	Atos 10 3a.parte	",	 "length": "	49:46	",	 "file": "	http://www.mediafire.com/file/	2tmxbiu9prf6tv7	/	Atos 10 3a.parte	"},
                {"track":	21	,	 "name": "	Atos 12 Jose Batista Pereira Jose Roberto Pizzinatto Lineu Binotti Mario Persona	",	 "length": "	36:15	",	 "file": "	http://www.mediafire.com/file/	g3p8dvp89jy1bsq	/	Atos 12 Jose Batista Pereira Jose Roberto Pizzinatto Lineu Binotti Mario Persona	"},
                {"track":	22	,	 "name": "	Atos 13 Valfredo Pereira Lineu Binotti Luis Campos Jose Roberto Pizzinatto	",	 "length": "	35:31	",	 "file": "	http://www.mediafire.com/file/	xmocmxpamc3l738	/	Atos 13 Valfredo Pereira Lineu Binotti Luis Campos Jose Roberto Pizzinatto	"},
                {"track":	23	,	 "name": "	Atos 13 13a52 Mario Persona Jose Batista Pereira	",	 "length": "	20:58	",	 "file": "	http://www.mediafire.com/file/	o2461lmzv76qw93	/	Atos 13 13a52 Mario Persona Jose Batista Pereira	"},
                {"track":	24	,	 "name": "	Atos 14 Jose Batista Pereira Mario Persona Lineu Binotti Luiz Soares Campos	",	 "length": "	31:46	",	 "file": "	http://www.mediafire.com/file/	5uh9kh7kl74wvvd	/	Atos 14 Jose Batista Pereira Mario Persona Lineu Binotti Luiz Soares Campos	"},
                {"track":	25	,	 "name": "	Atos 15 Mario Persona Luis Soares de Campos Jose Batista Pereira Jose Roberto Pizzinatto	",	 "length": "	33:52	",	 "file": "	http://www.mediafire.com/file/	xhow0ax3iiashtg	/	Atos 15 Mario Persona Luis Soares de Campos Jose Batista Pereira Jose Roberto Pizzinatto	"},
                {"track":	26	,	 "name": "	Atos 16 1a5 Valfredo Pereira Jose Batista Pereira	",	 "length": "	25:56	",	 "file": "	http://www.mediafire.com/file/	xrisc7pci9f249g	/	Atos 16 1a5 Valfredo Pereira Jose Batista Pereira	"},
                {"track":	27	,	 "name": "	Atos 17 Valfredo Pereira Mario Persona Jose Batista Pereira	",	 "length": "	27:08	",	 "file": "	http://www.mediafire.com/file/	rvxm7xvv589dp65	/	Atos 17 Valfredo Pereira Mario Persona Jose Batista Pereira	"},
                {"track":	28	,	 "name": "	Atos 17 30 Deus não tendo em conta os tempos da ignorância, anuncia agora Lineu	",	 "length": "	46:03	",	 "file": "	http://www.mediafire.com/file/	cle6lf7c869t889	/	Atos 17 30 Deus não tendo em conta os tempos da ignorância, anuncia agora Lineu	"},
                {"track":	29	,	 "name": "	Atos 20 A queda de Êutico   Lemão	",	 "length": "	44:06	",	 "file": "	http://www.mediafire.com/file/	092grx5p939m9gm	/	Atos 20 A queda de Êutico   Lemão	"},
                {"track":	30	,	 "name": "	Atos 20 Lemão	",	 "length": "	55:22	",	 "file": "	http://www.mediafire.com/file/	p31dedf8kkvxk05	/	Atos 20 Lemão	"},
                {"track":	31	,	 "name": "	Atos 20 Valfredo Pereira Mario Persona	",	 "length": "	37:00	",	 "file": "	http://www.mediafire.com/file/	1bt1pkynvflbogn	/	Atos 20 Valfredo Pereira Mario Persona	"},
                {"track":	32	,	 "name": "	Atos 20 17a38 Luis Campos Lineu Binotti Jose Pizzinatto	",	 "length": "	25:03	",	 "file": "	http://www.mediafire.com/file/	yc66o3cbzz5c229	/	Atos 20 17a38 Luis Campos Lineu Binotti Jose Pizzinatto	"},
                {"track":	33	,	 "name": "	Atos 21 Mario Persona	",	 "length": "	09:03	",	 "file": "	http://www.mediafire.com/file/	f0p0hrk9slff35r	/	Atos 21 Mario Persona	"},
                {"track":	34	,	 "name": "	Atos 21 17a40 Lineu Binotti Jose Batista Pereira Valfredo Pereira Jose Pizzinatto	",	 "length": "	39:02	",	 "file": "	http://www.mediafire.com/file/	s8v7zv33x8tl3j9	/	Atos 21 17a40 Lineu Binotti Jose Batista Pereira Valfredo Pereira Jose Pizzinatto	"},
                {"track":	35	,	 "name": "	Atos 22 Valfredo Pereira Jose Batista Pereira Mario Persona Lineu Binotti	",	 "length": "	34:17	",	 "file": "	http://www.mediafire.com/file/	l69i81j3xq3586s	/	Atos 22 Valfredo Pereira Jose Batista Pereira Mario Persona Lineu Binotti	"},
                {"track":	36	,	 "name": "	Atos 23 Valfredo Pereira Paulo Roberto Lenci Jose Batista Pereira	",	 "length": "	24:18	",	 "file": "	http://www.mediafire.com/file/	inid976t4aqvqd9	/	Atos 23 Valfredo Pereira Paulo Roberto Lenci Jose Batista Pereira	"},
                {"track":	37	,	 "name": "	Atos 24 Valfredo Pereira Mario Persona Jose Pizzinatto	",	 "length": "	37:16	",	 "file": "	http://www.mediafire.com/file/	rhbr8i7cu1izwip	/	Atos 24 Valfredo Pereira Mario Persona Jose Pizzinatto	"},
                {"track":	38	,	 "name": "	Atos 25 Mario Persona Jose Batista Pereira	",	 "length": "	28:57	",	 "file": "	http://www.mediafire.com/file/	pi4dg4akz44cq51	/	Atos 25 Mario Persona Jose Batista Pereira	"},
                {"track":	39	,	 "name": "	Atos 26 John Kemp Lineu Binotti Jose Batista Pereira	",	 "length": "	35:43	",	 "file": "	http://www.mediafire.com/file/	e8g9if3u5e4rf41	/	Atos 26 John Kemp Lineu Binotti Jose Batista Pereira	"},
                {"track":	40	,	 "name": "	Atos 27 Luiz Soares Campos Lineu Binotti Jose Batista Pereira	",	 "length": "	30:44	",	 "file": "	http://www.mediafire.com/file/	6oxmu3lhpkt7zur	/	Atos 27 Luiz Soares Campos Lineu Binotti Jose Batista Pereira	"},
                {"track":	41	,	 "name": "	Atos 28 Mario Persona Luiz Soares Campos Jose Batista Pereira	",	 "length": "	30:19	",	 "file": "	http://www.mediafire.com/file/	e9yatbrs37ebrvy	/	Atos 28 Mario Persona Luiz Soares Campos Jose Batista Pereira	"},
                {"track":	42	,	 "name": "	Atos (Jovens) - Lemão	",	 "length": "	38:06	",	 "file": "	http://www.mediafire.com/file/	1j42h276l73abth	/	Atos Jovens Lemão	"},
                                     



                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////

            ],
            buildPlaylist = $.each(tracks, function (key, value) {
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
            random = false,
            recursive = false,
            played = [],
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
                    audio.togglePlay(true)
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
            },
            getRandomTrack = function () {
                played.push(index);
                var randomTrack = index;
                while (played.includes(randomTrack)) {
                    randomTrack = Math.floor((Math.random() * tracks.length) + 1);
                }
                return randomTrack;
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});

//initialize plyr
plyr.setup($('#audio1'), {});
