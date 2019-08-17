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

// ATENÇÃO: LEMBRAR DE EDITAR TÍTULO DA PÁGINA ABAIXO
// ATENÇÃO: LEMBRAR DE EDITAR TÍTULO DA PÁGINA ABAIXO
// ATENÇÃO: LEMBRAR DE EDITAR TÍTULO DA PÁGINA ABAIXO
 
{"track":	1	,	 "name": "	Ipuã 2012 Junho - Aberta - John Kemp e Lemão	",	 "length": "	58:10	",	 "file": "	http://www.mediafire.com/file/	704voubwy6sf3xf	/	"},
{"track":	2	,	 "name": "	Ipuã 2012 Junho - Escolinha Dominical - John Kemp	",	 "length": "	29:23	",	 "file": "	http://www.mediafire.com/file/	2bz7yhdqyyk53d1	/	"},
{"track":	3	,	 "name": "	Ipuã 2012 Junho - Estudos sobre Filipenses 3 - 1a parte	",	 "length": "	1:04:22	",	 "file": "	http://www.mediafire.com/file/	awu6gmpmh9g1gyt	/	"},
{"track":	4	,	 "name": "	Ipuã 2012 Junho - Estudos sobre Filipenses 3 - 2a parte	",	 "length": "	50:50	",	 "file": "	http://www.mediafire.com/file/	ce5b36tl2ta0xdz	/	"},
{"track":	5	,	 "name": "	Ipuã 2012 Junho - Pregação do Evangelho - John Kemp	",	 "length": "	47:35	",	 "file": "	http://www.mediafire.com/file/	ifpo9n7gwlebo98	/	"},
{"track":	6	,	 "name": "	Ipuã 2012 Junho - Pregação do Evangelho - O cego de nascença - Lineu	",	 "length": "	48:45	",	 "file": "	http://www.mediafire.com/file/	cz6lld2eba9qlzw	/	"},
{"track":	7	,	 "name": "	Ipuã 2012 Junho - Pregação do Evangelho - Os filhos pródigos - Mario	",	 "length": "	42:05	",	 "file": "	http://www.mediafire.com/file/	z4k1zmjbiacsyym	/	"},
{"track":	8	,	 "name": "	Ipuã 2012 Junho - Pregação para crentes - A Promessa do Espírito Santo - Lineu	",	 "length": "	43:17	",	 "file": "	http://www.mediafire.com/file/	gdclzozokvds7nu	/	"},
{"track":	9	,	 "name": "	Ipuã 2012 Junho - Pregação para crentes - Ministros e Sacerdotes - Luiz	",	 "length": "	36:32	",	 "file": "	http://www.mediafire.com/file/	87t7901113tlybi	/	"},
{"track":	10	,	 "name": "	Ipuã 2012 Junho - Pregação para crentes - O Senhor Jesus como Sumo Sacerdote e Profeta - Batista	",	 "length": "	44:05	",	 "file": "	http://www.mediafire.com/file/	jpz84dlyni2pz5q	/	"},
{"track":	11	,	 "name": "	Ipuã 2012 Out - Estudos sobre Marcos 16 - 1a parte	",	 "length": "	49:06	",	 "file": "	http://www.mediafire.com/file/	rlb44na0p0cfdnf	/	"},
{"track":	12	,	 "name": "	Ipuã 2012 Out - Estudos sobre Marcos 16 - 2a parte	",	 "length": "	59:14	",	 "file": "	http://www.mediafire.com/file/	qpdjkx3srt8lk88	/	"},
{"track":	13	,	 "name": "	Ipuã 2012 Out - Pregação do Evangelho - João 5 - Lemão	",	 "length": "	40:55	",	 "file": "	http://www.mediafire.com/file/	tdc6rcw554uxtjd	/	"},
{"track":	14	,	 "name": "	Ipuã 2012 Out - Pregação do Evangelho - Lucas 15 - Lemão	",	 "length": "	44:32	",	 "file": "	http://www.mediafire.com/file/	ypqb3lymxma7811	/	"},
{"track":	15	,	 "name": "	Ipuã 2012 Out - Pregação para crentes - Autoridades - Peixe	",	 "length": "	46:15	",	 "file": "	http://www.mediafire.com/file/	nxxla77x26m4npq	/	"},
{"track":	16	,	 "name": "	Ipuã 2012 Out - Pregação para crentes - Posições do cristão - Luiz	",	 "length": "	30:21	",	 "file": "	http://www.mediafire.com/file/	07v6gh42pjybbv4	/	"},
{"track":	17	,	 "name": "	Ipuã 2013 Fev - Aberta - João 13 - 1a parte	",	 "length": "	57:37	",	 "file": "	http://www.mediafire.com/file/	ajwo0xc87xc1kg2	/	"},
{"track":	18	,	 "name": "	Ipuã 2013 Fev - Aberta - João 13 - 2a parte	",	 "length": "	54:48	",	 "file": "	http://www.mediafire.com/file/	m3f2d7jp75qew6y	/	"},
{"track":	19	,	 "name": "	Ipuã 2013 Fev - Aberta - O Espírito Santo buscando a noiva para Cristo - Lemão	",	 "length": "	55:15	",	 "file": "	http://www.mediafire.com/file/	6pidpa4ppd2f3xn	/	"},
{"track":	20	,	 "name": "	Ipuã 2013 Fev - Escolinha Dominical - Primeiro as coisas mais importantes - Luiz	",	 "length": "	14:50	",	 "file": "	http://www.mediafire.com/file/	83dibdpdttw6qj7	/	"},
{"track":	21	,	 "name": "	Ipuã 2013 Fev - Pregação do Evangelho - Cornélio - Mario	",	 "length": "	49:31	",	 "file": "	http://www.mediafire.com/file/	y037f7ygznbvpp9	/	"},
{"track":	22	,	 "name": "	Ipuã 2013 Fev - Pregação do Evangelho - O eunuco - Lineu	",	 "length": "	52:56	",	 "file": "	http://www.mediafire.com/file/	j4prk70trf3bzqo	/	"},
{"track":	23	,	 "name": "	Ipuã 2013 Fev - Pregação do Evangelho - Simão, o fariseu - Batista	",	 "length": "	49:49	",	 "file": "	http://www.mediafire.com/file/	toao7cuppv6p6qg	/	"},
{"track":	24	,	 "name": "	Ipuã 2013 Fev - Pregação para crentes - A Palavra de Deus e direção do Espírito Santo - Lineu	",	 "length": "	59:15	",	 "file": "	http://www.mediafire.com/file/	0ykcxxvimbvmj5m	/	"},
{"track":	25	,	 "name": "	Ipuã 2013 Fev - Pregação para crentes - Epístola de Judas - Peixe	",	 "length": "	47:24	",	 "file": "	http://www.mediafire.com/file/	pb0jj9j7p0jvd7h	/	"},
{"track":	26	,	 "name": "	Ipuã 2013 Fev - Pregação para crentes - Ester - Luiz	",	 "length": "	48:24	",	 "file": "	http://www.mediafire.com/file/	i1o3okaz8oznpj0	/	"},
{"track":	27	,	 "name": "	Ipuã 2014 - Aberta - 2 Pedro 1	",	 "length": "	59:26	",	 "file": "	http://www.mediafire.com/file/	0f4ckc48og9u4d1	/	"},
{"track":	28	,	 "name": "	Ipuã 2014 - Aberta - João 4	",	 "length": "	1:04:09	",	 "file": "	http://www.mediafire.com/file/	iiyl1v7ml94eau1	/	"},
{"track":	29	,	 "name": "	Ipuã 2014 - Aberta - O Espírito Santo em Pentecostes	",	 "length": "	56:03	",	 "file": "	http://www.mediafire.com/file/	04sc28122tbbr6b	/	"},
{"track":	30	,	 "name": "	Ipuã 2014 - Aberta - O nome acima de todo nome	",	 "length": "	1:02:40	",	 "file": "	http://www.mediafire.com/file/	tc2jfkgcv0nef9l	/	"},
{"track":	31	,	 "name": "	Ipuã 2014 - Escolinha dominical - Ovelhinha perdida - Luiz	",	 "length": "	15:02	",	 "file": "	http://www.mediafire.com/file/	d4xzn950hma7qz2	/	"},
{"track":	32	,	 "name": "	Ipuã 2014 - Pregação do Evangelho - O filho pródigo - Lemão	",	 "length": "	52:05	",	 "file": "	http://www.mediafire.com/file/	43wji0c17tao3pd	/	"},
{"track":	33	,	 "name": "	Ipuã 2014 - Pregação do Evangelho - O rico e o mendigo cego - Lineu	",	 "length": "	51:13	",	 "file": "	http://www.mediafire.com/file/	14h3ybpl32phi2g	/	"},
{"track":	34	,	 "name": "	Ipuã 2014 - Pregação do Evangelho - Preso - Mario	",	 "length": "	45:42	",	 "file": "	http://www.mediafire.com/file/	h89sbfa9y51sgkl	/	"},
{"track":	35	,	 "name": "	Ipuã 2014 - Pregação para crentes - A Igreja - Lineu	",	 "length": "	48:47	",	 "file": "	http://www.mediafire.com/file/	kv8jnbnv9vrqdu6	/	"},
{"track":	36	,	 "name": "	Ipuã 2014 - Pregação para crentes - Dependência do Espírito Santo - Peixe	",	 "length": "	49:40	",	 "file": "	http://www.mediafire.com/file/	amfuxjfmj8hmmu4	/	"},
{"track":	37	,	 "name": "	Ipuã 2014 - Pregação para crentes - Filipenses 2 - Lemão	",	 "length": "	43:59	",	 "file": "	http://www.mediafire.com/file/	rztlgo1lqoo9v6r	/	"},
{"track":	38	,	 "name": "	Ipuã 2015 - Aberta - Julgamento da carne - Petrus e Lemão	",	 "length": "	1:06:36	",	 "file": "	http://www.mediafire.com/file/	gomfcb78qgha21m	/	"},
{"track":	39	,	 "name": "	Ipuã 2015 - Aberta - O andar do cristão perante a vinda de Cristo - Luiz, Peixe e Lemão	",	 "length": "	58:17	",	 "file": "	http://www.mediafire.com/file/	lv1u95mud61fxgh	/	"},
{"track":	40	,	 "name": "	Ipuã 2015 - Escolinha dominical - Frutos - Luiz	",	 "length": "	18:01	",	 "file": "	http://www.mediafire.com/file/	juc36t3cql96g4y	/	"},
{"track":	41	,	 "name": "	Ipuã 2015 - Estudos sobre 2a Timóteo 2 - 1a parte	",	 "length": "	52:29	",	 "file": "	http://www.mediafire.com/file/	yqbb95fphdp8cfi	/	"},
{"track":	42	,	 "name": "	Ipuã 2015 - Estudos sobre 2a Timóteo 2 - 2a parte	",	 "length": "	1:10:11	",	 "file": "	http://www.mediafire.com/file/	2hq7rxm8tlpqsqk	/	"},
{"track":	43	,	 "name": "	Ipuã 2015 - Pregação do evangelho - O Homem rejeitado - Lemão	",	 "length": "	49:57	",	 "file": "	http://www.mediafire.com/file/	z0gwe6bltg54v38	/	"},
{"track":	44	,	 "name": "	Ipuã 2015 - Pregação do evangelho - Onésimo - Batista	",	 "length": "	51:41	",	 "file": "	http://www.mediafire.com/file/	80i76ymfugt13pd	/	"},
{"track":	45	,	 "name": "	Ipuã 2015 - Pregação do evangelho - Poços contaminados - Lineu	",	 "length": "	38:42	",	 "file": "	http://www.mediafire.com/file/	ihifemjni4pv93q	/	"},
{"track":	46	,	 "name": "	Ipuã 2015 - Pregação para crentes - O Homem que achou a pérola de grande valor - Lemão	",	 "length": "	46:46	",	 "file": "	http://www.mediafire.com/file/	814eget8vjoi4zs	/	"},
{"track":	47	,	 "name": "	Ipuã 2015 - Pregação para crentes - Ter fé, fugir, seguir, batalhar - Lineu	",	 "length": "	43:08	",	 "file": "	http://www.mediafire.com/file/	scavyef9azosi71	/	"},
{"track":	48	,	 "name": "	Ipuã 2015 - Pregação para crentes - Vivendo neste presente século mau - Peixe	",	 "length": "	49:42	",	 "file": "	http://www.mediafire.com/file/	ifle7kh6a9f7d61	/	"},
{"track":	49	,	 "name": "	Ipuã 2016 - Aberta - Filemon e a graça de Deus - Douglas Buchanan e Lemão	",	 "length": "	1:00:29	",	 "file": "	http://www.mediafire.com/file/	udun74acnq6hs6q	/	"},
{"track":	50	,	 "name": "	Ipuã 2016 - Aberta - O que Cristo fez, faz e fará e Veja como edifica - Pizzinatto e Lemão	",	 "length": "	1:00:09	",	 "file": "	http://www.mediafire.com/file/	vex4j7rclr2tug2	/	"},
{"track":	51	,	 "name": "	Ipuã 2016 - Escolinha dominical - A ovelhinha em Ipuã - Luiz	",	 "length": "	19:53	",	 "file": "	http://www.mediafire.com/file/	qlepul6o6tait63	/	"},
{"track":	52	,	 "name": "	Ipuã 2016 - Estudos sobre Filipenses 1 - 1a parte	",	 "length": "	54:35	",	 "file": "	http://www.mediafire.com/file/	jphkr91efz1b6k1	/	"},
{"track":	53	,	 "name": "	Ipuã 2016 - Estudos sobre Filipenses 1 - 2a parte	",	 "length": "	49:10	",	 "file": "	http://www.mediafire.com/file/	6uiafv4egvgntl5	/	"},
{"track":	54	,	 "name": "	Ipuã 2016 - Pregação do evangelho - John Kemp	",	 "length": "	52:20	",	 "file": "	http://www.mediafire.com/file/	vdca1d2dup11axn	/	"},
{"track":	55	,	 "name": "	Ipuã 2016 - Pregação do evangelho - Tanque de Betesda - Lineu	",	 "length": "	57:32	",	 "file": "	http://www.mediafire.com/file/	wgpgpcrdfnftjn8	/	"},
{"track":	56	,	 "name": "	Ipuã 2016 - Pregação do evangelho - Uma coisa - Batista	",	 "length": "	57:22	",	 "file": "	http://www.mediafire.com/file/	3dkch5me1yrheb3	/	"},
{"track":	57	,	 "name": "	Ipuã 2016 - Pregação para crentes - A vida de José - Lemão	",	 "length": "	39:23	",	 "file": "	http://www.mediafire.com/file/	q4gr9hjnipjxsvj	/	"},
{"track":	58	,	 "name": "	Ipuã 2016 - Pregação para crentes - As sete festas do Senhor - Lev 23 - Douglas Buchanan	",	 "length": "	43:15	",	 "file": "	http://www.mediafire.com/file/	5bilmsuoxlrtnm7	/	"},
{"track":	59	,	 "name": "	Ipuã 2016 - Pregação para crentes - Reunidos ao nome do Senhor - John Kemp	",	 "length": "	54:22	",	 "file": "	http://www.mediafire.com/file/	g86c17ir87xoslg	/	"},
{"track":	60	,	 "name": "	Ipuã 2016 - Pregação para jovens - Nossa força em tempos de fraqueza - Petrus	",	 "length": "	21:00	",	 "file": "	http://www.mediafire.com/file/	a8czvvgsd8d48e6	/	"},
{"track":	61	,	 "name": "	Ipuã 2017-Aberta-Domingo	",	 "length": "	1:04:22	",	 "file": "	http://www.mediafire.com/file/	3qofmmqq6z614gz	/	"},
{"track":	62	,	 "name": "	Ipuã 2017-Aberta-Segunda	",	 "length": "	1:17:20	",	 "file": "	http://www.mediafire.com/file/	rba0v4tym8dp266	/	"},
{"track":	63	,	 "name": "	Ipuã 2017-Aberta-Terca	",	 "length": "	1:15:56	",	 "file": "	http://www.mediafire.com/file/	2siws68l5l4y48f	/	"},
{"track":	64	,	 "name": "	Ipuã 2017-Escola-Dominical-John Kemp	",	 "length": "	39:57	",	 "file": "	http://www.mediafire.com/file/	a9rbecje85acepb	/	"},
{"track":	65	,	 "name": "	Ipuã 2017-Pregacao-do-evangelho-John-Kemp-segunda	",	 "length": "	59:25	",	 "file": "	http://www.mediafire.com/file/	4bq2efx0mmjq30b	/	"},
{"track":	66	,	 "name": "	Ipuã 2017-Pregacao-do-evangelho-Pizzinatto-domingo	",	 "length": "	49:28	",	 "file": "	http://www.mediafire.com/file/	f926sl1m3w667tc	/	"},
{"track":	67	,	 "name": "	Ipuã 2017-Pregacao-para-crentes-DouglasBuchanan-domingo	",	 "length": "	1:00:09	",	 "file": "	http://www.mediafire.com/file/	vae7rm8vkdw7iko	/	"},
{"track":	68	,	 "name": "	Ipuã 2017-Pregacao-para-crentes-Lemao-segunda	",	 "length": "	1:12:12	",	 "file": "	http://www.mediafire.com/file/	5ul74szbt3it5ml	/	"},
{"track":	69	,	 "name": "	Ipuã 2017-Pregacao-para-jovens-Petrus-Portilho	",	 "length": "	34:42	",	 "file": "	http://www.mediafire.com/file/	4o8w146v070v445	/	"},
{"track":	70	,	 "name": "	Ipuã 2017-Pregação-do-evangelho-Luis-Lemão-sabado	",	 "length": "	50:14	",	 "file": "	http://www.mediafire.com/file/	r185z8s15vctr4t	/	"},
{"track":	71	,	 "name": "	Ipuã 2017-Pregação-para-crentes-Robert-Boulard-sabado	",	 "length": "	57:54	",	 "file": "	http://www.mediafire.com/file/	9z191kyn8so16bf	/	"},
{"track":	72	,	 "name": "	Ipuã 2017-Reuniao-aberta-RBoulard-Lemão-Pizzinatto-DBuchanan-sabado	",	 "length": "	52:41	",	 "file": "	http://www.mediafire.com/file/	h1traochcg8nqjr	/	"},
{"track":	73	,	 "name": "	Ipuã 2019-Escolinha dominical-O dia-a-dia da ovelhinha-Luizinho	",	 "length": "	22:51	",	 "file": "	http://www.mediafire.com/file/	1cyugkv63h5o7ti	/	"},
{"track":	74	,	 "name": "	Ipuã 2019-Estudos sobre Joao 10-parte 1	",	 "length": "	1:04:14	",	 "file": "	http://www.mediafire.com/file/	wcgl1cllla2tdao	/	"},
{"track":	75	,	 "name": "	Ipuã 2019-Estudos sobre Joao 10-parte 2	",	 "length": "	1:09:15	",	 "file": "	http://www.mediafire.com/file/	mu8d23nvb519o3b	/	"},
{"track":	76	,	 "name": "	Ipuã 2019-Estudos sobre Joao 10-parte 3	",	 "length": "	1:21:28	",	 "file": "	http://www.mediafire.com/file/	8yfp8tiwpu3btc9	/	"},
{"track":	77	,	 "name": "	Ipuã 2019-Pregacao do evangelho-Nicodemos-Lineu	",	 "length": "	40:54	",	 "file": "	http://www.mediafire.com/file/	ds6d2mgq6jppla6	/	"},
{"track":	78	,	 "name": "	Ipuã 2019-Pregacao do evangelho-Pizzi e John Kemp	",	 "length": "	37:32	",	 "file": "	http://www.mediafire.com/file/	gr3hmgc0thrm4cd	/	"},
{"track":	79	,	 "name": "	Ipuã 2019-Pregacao do evangelho-Sem cera-Toni	",	 "length": "	40:37	",	 "file": "	http://www.mediafire.com/file/	se6cvlh16nq8lqa	/	"},
{"track":	80	,	 "name": "	Ipuã 2019-Pregacao para crentes-Eterna salvacao-Robert	",	 "length": "	42:06	",	 "file": "	http://www.mediafire.com/file/	dfu7wabl31onof4	/	"},
{"track":	81	,	 "name": "	Ipuã 2019-Pregacao para crentes-Getsemani-Douglas	",	 "length": "	50:09	",	 "file": "	http://www.mediafire.com/file/	s8qczhna8kf7py1	/	"},
{"track":	82	,	 "name": "	Ipuã 2019-Pregacao para crentes-Lugar de reuniao-Lemao	",	 "length": "	45:35	",	 "file": "	http://www.mediafire.com/file/	w70j6blssu620xs	/	"},
{"track":	83	,	 "name": "	Ipuã 2019-Pregacao para jovens-Entender por distinguir a diferenca-Dave	",	 "length": "	19:25	",	 "file": "	http://www.mediafire.com/file/	1wu114l5xxe1dby	/	"},
{"track":	84	,	 "name": "	Ipuã 2019-Pregacao para jovens-Ler a Palavra de Deus-Petrus	",	 "length": "	32:01	",	 "file": "	http://www.mediafire.com/file/	ts99b4c19y8gl3m	/	"},

// ATENÇÃO: LEMBRAR DE EDITAR TÍTULO DA PÁGINA ABAIXO
// ATENÇÃO: LEMBRAR DE EDITAR TÍTULO DA PÁGINA ABAIXO
// ATENÇÃO: LEMBRAR DE EDITAR TÍTULO DA PÁGINA ABAIXO

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackVoz = value.voz,
                    trackFile = value.file,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li ><div class="plItem" ><div class="plNum">'+ '-</div><div class="plTitle"><a target="_blank" href="' + trackFile + '"><i class="fa fa-download fa-lg"></i></a> ' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
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

// verifica quantidade de audios
console.log(tracks.length);
var ended = tracks.length;
localStorage.setItem('length', ended);
console.log(localStorage.getItem('length'))
// Fim de verifica quantidade de audios
    }
});

// Título da playlist
document.write('<title>Audio Player - Conferência - Ipuã</title>')

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
  }
// }
//initialize plyr
plyr.setup($('#audio1'), {});
