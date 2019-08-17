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
		//return anchor value for "index" valiable
        var index = anchorTrack,
            playing = false,
            mediaPath = '',
            extension = '',
            tracks = [

                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////

                {"track":	1	,	 "voz": "Mario Persona",	 "name": "	#311 Lucas	",	 "length": "	03:04	",	 "file": "	https://www.mediafire.com/file/	50700md9r9omu0w	/	#311 Lucas	"},
{"track":	2	,	 "voz": "Mario Persona",	 "name": "	#312 A inspiracao divina	",	 "length": "	03:09	",	 "file": "	https://www.mediafire.com/file/	6rykbycplgz3n32	/	#312 A inspiracao divina	"},
{"track":	3	,	 "voz": "Mario Persona",	 "name": "	#313 Resposta tardia	",	 "length": "	03:02	",	 "file": "	https://www.mediafire.com/file/	i4ixzfa75mwcioh	/	#313 Resposta tardia	"},
{"track":	4	,	 "voz": "Mario Persona",	 "name": "	#314 Uma jovem singular	",	 "length": "	03:11	",	 "file": "	https://www.mediafire.com/file/	kmofb3f2o78mr0e	/	#314 Uma jovem singular	"},
{"track":	5	,	 "voz": "Mario Persona",	 "name": "	#315 Um Deus proximo acessivel	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	9bqss61gg9pf6tj	/	#315 Um Deus proximo acessivel	"},
{"track":	6	,	 "voz": "Mario Persona",	 "name": "	#316 Verdadeiro Deus	",	 "length": "	03:15	",	 "file": "	https://www.mediafire.com/file/	zys2ks1333rlyby	/	#316 Verdadeiro Deus	"},
{"track":	7	,	 "voz": "Mario Persona",	 "name": "	#317 Crendo sem razao	",	 "length": "	03:01	",	 "file": "	https://www.mediafire.com/file/	8gozg6gsb1hf267	/	#317 Crendo sem razao	"},
{"track":	8	,	 "voz": "Mario Persona",	 "name": "	#318 As gravidas se encontram	",	 "length": "	03:07	",	 "file": "	https://www.mediafire.com/file/	9hf8cde1yl0mto9	/	#318 As gravidas se encontram	"},
{"track":	9	,	 "voz": "Mario Persona",	 "name": "	#319 O Salvador de Maria	",	 "length": "	03:06	",	 "file": "	https://www.mediafire.com/file/	nc44f6qtnh9k5t7	/	#319 O Salvador de Maria	"},
{"track":	10	,	 "voz": "Mario Persona",	 "name": "	#320 O louvor de Zacarias	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	6a382otm5w12wkx	/	#320 O louvor de Zacarias	"},
{"track":	11	,	 "voz": "Mario Persona",	 "name": "	#321 Dissecando a Palavra	",	 "length": "	02:43	",	 "file": "	https://www.mediafire.com/file/	pu9bkz3tzkhv6qn	/	#321 Dissecando a Palavra	"},
{"track":	12	,	 "voz": "Mario Persona",	 "name": "	#322 Dispensacoes	",	 "length": "	03:03	",	 "file": "	https://www.mediafire.com/file/	bxq5wuco7r37287	/	#322 Dispensacoes	"},
{"track":	13	,	 "voz": "Mario Persona",	 "name": "	#323 O parentese	",	 "length": "	03:11	",	 "file": "	https://www.mediafire.com/file/	9uww8f9q7bgqekh	/	#323 O parentese	"},
{"track":	14	,	 "voz": "Mario Persona",	 "name": "	#324 Deixados para tras	",	 "length": "	03:21	",	 "file": "	https://www.mediafire.com/file/	j7d6bouqb9fx8c8	/	#324 Deixados para tras	"},
{"track":	15	,	 "voz": "Mario Persona",	 "name": "	#325 Belem	",	 "length": "	03:12	",	 "file": "	https://www.mediafire.com/file/	3e4p3vfd8z1vcpi	/	#325 Belem	"},
{"track":	16	,	 "voz": "Mario Persona",	 "name": "	#326 Nao havia lugar	",	 "length": "	03:08	",	 "file": "	https://www.mediafire.com/file/	yflltpko77m3l8t	/	#326 Nao havia lugar	"},
{"track":	17	,	 "voz": "Mario Persona",	 "name": "	#327 Numa manjedoura	",	 "length": "	03:01	",	 "file": "	https://www.mediafire.com/file/	yyptwz2b1k9dknc	/	#327 Numa manjedoura	"},
{"track":	18	,	 "voz": "Mario Persona",	 "name": "	#328 O impacto de Deus conosco	",	 "length": "	03:15	",	 "file": "	https://www.mediafire.com/file/	bhn6wplyml7j07j	/	#328 O impacto de Deus conosco	"},
{"track":	19	,	 "voz": "Mario Persona",	 "name": "	#329 Simeao	",	 "length": "	03:09	",	 "file": "	https://www.mediafire.com/file/	7dx7da73dtdwt90	/	#329 Simeao	"},
{"track":	20	,	 "voz": "Mario Persona",	 "name": "	#330 A espada	",	 "length": "	03:03	",	 "file": "	https://www.mediafire.com/file/	tdoa1016wf4f7g7	/	#330 A espada	"},
{"track":	21	,	 "voz": "Mario Persona",	 "name": "	#331 Crer esperar servir	",	 "length": "	03:05	",	 "file": "	https://www.mediafire.com/file/	9gvhb80we04d801	/	#331 Crer esperar servir	"},
{"track":	22	,	 "voz": "Mario Persona",	 "name": "	#332 O lugar escolhido por Deus	",	 "length": "	03:40	",	 "file": "	https://www.mediafire.com/file/	mmcm7gqp9vob2nc	/	#332 O lugar escolhido por Deus	"},
{"track":	23	,	 "voz": "Mario Persona",	 "name": "	#333 Procurando por Jesus	",	 "length": "	02:52	",	 "file": "	https://www.mediafire.com/file/	jrx2lo18guti045	/	#333 Procurando por Jesus	"},
{"track":	24	,	 "voz": "Mario Persona",	 "name": "	#334 Um espirito de enfermidade2	",	 "length": "	03:11	",	 "file": "	https://www.mediafire.com/file/	m15d62bnzex5s37	/	#334 Um espirito de enfermidade2	"},
{"track":	25	,	 "voz": "Mario Persona",	 "name": "	#335 Uma voz no deserto	",	 "length": "	03:01	",	 "file": "	https://www.mediafire.com/file/	pvri6pqk62qxfk3	/	#335 Uma voz no deserto	"},
{"track":	26	,	 "voz": "Mario Persona",	 "name": "	#336 Joao o batedor	",	 "length": "	03:10	",	 "file": "	https://www.mediafire.com/file/	k45zbvdr19ru16t	/	#336 Joao o batedor	"},
{"track":	27	,	 "voz": "Mario Persona",	 "name": "	#337 Espirito fogo trigo palha	",	 "length": "	02:56	",	 "file": "	https://www.mediafire.com/file/	ytvlob7f2gv24bo	/	#337 Espirito fogo trigo palha	"},
{"track":	28	,	 "voz": "Mario Persona",	 "name": "	#338 Dois filhos de Deus	",	 "length": "	03:32	",	 "file": "	https://www.mediafire.com/file/	usd53686jt5yo3u	/	#338 Dois filhos de Deus	"},
{"track":	29	,	 "voz": "Mario Persona",	 "name": "	#339 Tentado	",	 "length": "	03:19	",	 "file": "	https://www.mediafire.com/file/	6ckm9d277bcac55	/	#339 Tentado	"},
{"track":	30	,	 "voz": "Mario Persona",	 "name": "	#340 Uma triplice tentacao	",	 "length": "	03:33	",	 "file": "	https://www.mediafire.com/file/	c2b9cc4ucgoicgq	/	#340 Uma triplice tentacao	"},
{"track":	31	,	 "voz": "Mario Persona",	 "name": "	#341 Os tres botoes do desejo	",	 "length": "	03:31	",	 "file": "	https://www.mediafire.com/file/	z74fa9vh4dqpa77	/	#341 Os tres botoes do desejo	"},
{"track":	32	,	 "voz": "Mario Persona",	 "name": "	#342 Pobres cativos cegos	",	 "length": "	03:46	",	 "file": "	https://www.mediafire.com/file/	cukwkb7th8qba0h	/	#342 Pobres cativos cegos	"},
{"track":	33	,	 "voz": "Mario Persona",	 "name": "	#343 O bau	",	 "length": "	03:12	",	 "file": "	https://www.mediafire.com/file/	12smn3q49gnf2t7	/	#343 O bau	"},
{"track":	34	,	 "voz": "Mario Persona",	 "name": "	#344 Orgulho nacional	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	xh2qa8zc5aqi9qc	/	#344 Orgulho nacional	"},
{"track":	35	,	 "voz": "Mario Persona",	 "name": "	#345 A viuva de Sarepta	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	x6qndzvdt61trd8	/	#345 A viuva de Sarepta	"},
{"track":	36	,	 "voz": "Mario Persona",	 "name": "	#346 Quando a morte vem	",	 "length": "	03:19	",	 "file": "	https://www.mediafire.com/file/	nz8w2qpolgl07wa	/	#346 Quando a morte vem	"},
{"track":	37	,	 "voz": "Mario Persona",	 "name": "	#347 Naama o leproso	",	 "length": "	03:17	",	 "file": "	https://www.mediafire.com/file/	nv645d9g9atupx1	/	#347 Naama o leproso	"},
{"track":	38	,	 "voz": "Mario Persona",	 "name": "	#348 O profeta Eliseu	",	 "length": "	03:26	",	 "file": "	https://www.mediafire.com/file/	bia9hd8jh4beh8d	/	#348 O profeta Eliseu	"},
{"track":	39	,	 "voz": "Mario Persona",	 "name": "	#349 O servo corrupto	",	 "length": "	03:47	",	 "file": "	https://www.mediafire.com/file/	t409wz526dzjy60	/	#349 O servo corrupto	"},
{"track":	40	,	 "voz": "Mario Persona",	 "name": "	#350 Milagres por encomenda	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	h5xyr4yjlhzr4x3	/	#350 Milagres por encomenda	"},
{"track":	41	,	 "voz": "Mario Persona",	 "name": "	#351 O poder de Deus para salvacao	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	e1eckf42r74cbk1	/	#351 O poder de Deus para salvacao	"},
{"track":	42	,	 "voz": "Mario Persona",	 "name": "	#352 Sinais ou sabedoria	",	 "length": "	03:49	",	 "file": "	https://www.mediafire.com/file/	xhzp34ohl2r1w3h	/	#352 Sinais ou sabedoria	"},
{"track":	43	,	 "voz": "Mario Persona",	 "name": "	#353 Jesus cura e liberta	",	 "length": "	03:42	",	 "file": "	https://www.mediafire.com/file/	5qm5fj9j715cd8o	/	#353 Jesus cura e liberta	"},
{"track":	44	,	 "voz": "Mario Persona",	 "name": "	#354 A pescaria	",	 "length": "	03:25	",	 "file": "	https://www.mediafire.com/file/	jnp96aghxn6a6dl	/	#354 A pescaria	"},
{"track":	45	,	 "voz": "Mario Persona",	 "name": "	#355 Chamados a servir	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	kcuajue43m2ek6k	/	#355 Chamados a servir	"},
{"track":	46	,	 "voz": "Mario Persona",	 "name": "	#356 O intocavel	",	 "length": "	03:42	",	 "file": "	https://www.mediafire.com/file/	7t4uebhvbujd21l	/	#356 O intocavel	"},
{"track":	47	,	 "voz": "Mario Persona",	 "name": "	#357 Sacerdotes sacrificios lei	",	 "length": "	03:48	",	 "file": "	https://www.mediafire.com/file/	6i96qyceffd93iy	/	#357 Sacerdotes sacrificios lei	"},
{"track":	48	,	 "voz": "Mario Persona",	 "name": "	#358 Perdao de pecados	",	 "length": "	03:25	",	 "file": "	https://www.mediafire.com/file/	6tx68r0twbjypgn	/	#358 Perdao de pecados	"},
{"track":	49	,	 "voz": "Mario Persona",	 "name": "	#359 De rejeitado a rejeitado	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	7qjq5maj93glirb	/	#359 De rejeitado a rejeitado	"},
{"track":	50	,	 "voz": "Mario Persona",	 "name": "	#360 Adulterio e divorcio	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	cy876clfomgb8fz	/	#360 Adulterio e divorcio	"},
{"track":	51	,	 "voz": "Mario Persona",	 "name": "	#361 Velho-x-Novo	",	 "length": "	03:18	",	 "file": "	https://www.mediafire.com/file/	a7xkqdz4p92pa80	/	#361 Velho-x-Novo	"},
{"track":	52	,	 "voz": "Mario Persona",	 "name": "	#362 O Senhor do sabado	",	 "length": "	03:31	",	 "file": "	https://www.mediafire.com/file/	rmnvf4ik4b60dcf	/	#362 O Senhor do sabado	"},
{"track":	53	,	 "voz": "Mario Persona",	 "name": "	#363 Os transgressores da lei	",	 "length": "	03:15	",	 "file": "	https://www.mediafire.com/file/	mzar61fyddnlmeb	/	#363 Os transgressores da lei	"},
{"track":	54	,	 "voz": "Mario Persona",	 "name": "	#364 Bem-aventurados os discipulos	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	hgn7n55lnb9z8q0	/	#364 Bem-aventurados os discipulos	"},
{"track":	55	,	 "voz": "Mario Persona",	 "name": "	#365 Ai de voces	",	 "length": "	03:15	",	 "file": "	https://www.mediafire.com/file/	b6svdi5fu22snzp	/	#365 Ai de voces	"},
{"track":	56	,	 "voz": "Mario Persona",	 "name": "	#366 Amor na pratica	",	 "length": "	03:07	",	 "file": "	https://www.mediafire.com/file/	3408vw4ww73l47a	/	#366 Amor na pratica	"},
{"track":	57	,	 "voz": "Mario Persona",	 "name": "	#367 Vivendo em amor	",	 "length": "	03:12	",	 "file": "	https://www.mediafire.com/file/	3c90qcqyygb8c2z	/	#367 Vivendo em amor	"},
{"track":	58	,	 "voz": "Mario Persona",	 "name": "	#368 Apontando o dedo	",	 "length": "	03:06	",	 "file": "	https://www.mediafire.com/file/	eqqane95a45v58s	/	#368 Apontando o dedo	"},
{"track":	59	,	 "voz": "Mario Persona",	 "name": "	#369 Julgar ou nao julgar	",	 "length": "	03:07	",	 "file": "	https://www.mediafire.com/file/	isdh8mcsa8yiy3a	/	#369 Julgar ou nao julgar	"},
{"track":	60	,	 "voz": "Mario Persona",	 "name": "	#370 Perdao condicional	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	75f7s3z5fop0cgn	/	#370 Perdao condicional	"},
{"track":	61	,	 "voz": "Mario Persona",	 "name": "	#371 O cisco no olho	",	 "length": "	03:00	",	 "file": "	https://www.mediafire.com/file/	fb0pcq9c6029zd9	/	#371 O cisco no olho	"},
{"track":	62	,	 "voz": "Mario Persona",	 "name": "	#372 Arvores e frutos	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	ia45baa9gswtvei	/	#372 Arvores e frutos	"},
{"track":	63	,	 "voz": "Mario Persona",	 "name": "	#373 Vida com alicerce	",	 "length": "	03:09	",	 "file": "	https://www.mediafire.com/file/	wmdlmx2ybsd8c89	/	#373 Vida com alicerce	"},
{"track":	64	,	 "voz": "Mario Persona",	 "name": "	#374 Sem merecer	",	 "length": "	03:00	",	 "file": "	https://www.mediafire.com/file/	c7eeeiu3psdkz5l	/	#374 Sem merecer	"},
{"track":	65	,	 "voz": "Mario Persona",	 "name": "	#375 Jesus fala ao morto	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	xm02j825i9w4bd2	/	#375 Jesus fala ao morto	"},
{"track":	66	,	 "voz": "Mario Persona",	 "name": "	#376 O poder destrutivo do elogio	",	 "length": "	03:21	",	 "file": "	https://www.mediafire.com/file/	3e345esbo6v9dxv	/	#376 O poder destrutivo do elogio	"},
{"track":	67	,	 "voz": "Mario Persona",	 "name": "	#377 A quem voce justifica	",	 "length": "	02:50	",	 "file": "	https://www.mediafire.com/file/	9x5cjn4af5nb5i1	/	#377 A quem voce justifica	"},
{"track":	68	,	 "voz": "Mario Persona",	 "name": "	#378 Voce filho da Sabedoria	",	 "length": "	03:09	",	 "file": "	https://www.mediafire.com/file/	2vjk0ry1t9k6vvo	/	#378 Voce filho da Sabedoria	"},
{"track":	69	,	 "voz": "Mario Persona",	 "name": "	#379 A prostituta e o clerigo	",	 "length": "	03:11	",	 "file": "	https://www.mediafire.com/file/	w7m6kisma6dnbua	/	#379 A prostituta e o clerigo	"},
{"track":	70	,	 "voz": "Mario Persona",	 "name": "	#380 Pela fe'	",	 "length": "	03:27	",	 "file": "	https://www.mediafire.com/file/	vkrhdhc562f2ori	/	#380 Pela fe'	"},
{"track":	71	,	 "voz": "Mario Persona",	 "name": "	#381 O Semeador	",	 "length": "	03:30	",	 "file": "	https://www.mediafire.com/file/	3a2qu0spjqrb8zb	/	#381 O Semeador	"},
{"track":	72	,	 "voz": "Mario Persona",	 "name": "	#382 Parabolas	",	 "length": "	03:27	",	 "file": "	https://www.mediafire.com/file/	hcb82zifhdr3b4r	/	#382 Parabolas	"},
{"track":	73	,	 "voz": "Mario Persona",	 "name": "	#383 A semeadura	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	ahei9ey299loc2j	/	#383 A semeadura	"},
{"track":	74	,	 "voz": "Mario Persona",	 "name": "	#384 Espinhos	",	 "length": "	03:20	",	 "file": "	https://www.mediafire.com/file/	mb8j8eeqa6v89vy	/	#384 Espinhos	"},
{"track":	75	,	 "voz": "Mario Persona",	 "name": "	#385 Luz	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	3j73x1b5j4drnjk	/	#385 Luz	"},
{"track":	76	,	 "voz": "Mario Persona",	 "name": "	#386 Nada oculto	",	 "length": "	03:30	",	 "file": "	https://www.mediafire.com/file/	d7876gbkdl9e447	/	#386 Nada oculto	"},
{"track":	77	,	 "voz": "Mario Persona",	 "name": "	#387 O fim dos vinculos naturais	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	1s5ad58bsykdnmg	/	#387 O fim dos vinculos naturais	"},
{"track":	78	,	 "voz": "Mario Persona",	 "name": "	#388 Um barco em perigo	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	tbb5rjd5xwb95fi	/	#388 Um barco em perigo	"},
{"track":	79	,	 "voz": "Mario Persona",	 "name": "	#389 Milhares de demonios	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	yxwbnue6vpcm8l1	/	#389 Milhares de demonios	"},
{"track":	80	,	 "voz": "Mario Persona",	 "name": "	#390 Liberto	",	 "length": "	03:44	",	 "file": "	https://www.mediafire.com/file/	ttjstdudasn0t4p	/	#390 Liberto	"},
{"track":	81	,	 "voz": "Mario Persona",	 "name": "	#391 A fe que salva	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	hur215hsdglokwy	/	#391 A fe que salva	"},
{"track":	82	,	 "voz": "Mario Persona",	 "name": "	#392 A menina morta vive	",	 "length": "	03:24	",	 "file": "	https://www.mediafire.com/file/	dr2i54kiduwgyfm	/	#392 A menina morta vive	"},
{"track":	83	,	 "voz": "Mario Persona",	 "name": "	#393 Jesus chama e envia	",	 "length": "	03:19	",	 "file": "	https://www.mediafire.com/file/	aphp2vpvgaul9r5	/	#393 Jesus chama e envia	"},
{"track":	84	,	 "voz": "Mario Persona",	 "name": "	#394 Consciencia atribulada	",	 "length": "	03:32	",	 "file": "	https://www.mediafire.com/file/	3359hzjdmyrhzha	/	#394 Consciencia atribulada	"},
{"track":	85	,	 "voz": "Mario Persona",	 "name": "	#395 Um Senhor amoroso	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	hff7je49jtzmer6	/	#395 Um Senhor amoroso	"},
{"track":	86	,	 "voz": "Mario Persona",	 "name": "	#396 Quem e Jesus 1	",	 "length": "	03:25	",	 "file": "	https://www.mediafire.com/file/	78gt1t2173vgk54	/	#396 Quem e Jesus 1	"},
{"track":	87	,	 "voz": "Mario Persona",	 "name": "	#397 Quem e Jesus 2	",	 "length": "	03:24	",	 "file": "	https://www.mediafire.com/file/	c9uahid47k01kug	/	#397 Quem e Jesus 2	"},
{"track":	88	,	 "voz": "Mario Persona",	 "name": "	#398 O que voce fara com Jesus	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	zimhelrtu2ozuqp	/	#398 O que voce fara com Jesus	"},
{"track":	89	,	 "voz": "Mario Persona",	 "name": "	#399 Onde esta o Messias	",	 "length": "	03:21	",	 "file": "	https://www.mediafire.com/file/	d1r3p8gf2e4830b	/	#399 Onde esta o Messias	"},
{"track":	90	,	 "voz": "Mario Persona",	 "name": "	#400 Tomar sobre si a cruz	",	 "length": "	03:18	",	 "file": "	https://www.mediafire.com/file/	z744hx8g5ubnsff	/	#400 Tomar sobre si a cruz	"},
{"track":	91	,	 "voz": "Mario Persona",	 "name": "	#401 Morto cinco vezes morto	",	 "length": "	03:52	",	 "file": "	https://www.mediafire.com/file/	ofpc4wp4nx1531g	/	#401 Morto cinco vezes morto	"},
{"track":	92	,	 "voz": "Mario Persona",	 "name": "	#402 Salvar ou perder a vida	",	 "length": "	03:44	",	 "file": "	https://www.mediafire.com/file/	gu2byqzrv1osyj7	/	#402 Salvar ou perder a vida	"},
{"track":	93	,	 "voz": "Mario Persona",	 "name": "	#403-Uma-fresta-para-o-futuro	",	 "length": "	03:14	",	 "file": "	https://www.mediafire.com/file/	2uxjpnlf2c0pj85	/	#403-Uma-fresta-para-o-futuro	"},
{"track":	94	,	 "voz": "Mario Persona",	 "name": "	#404-O-assunto-dos-ceus	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	1meawbmi5237lff	/	#404-O-assunto-dos-ceus	"},
{"track":	95	,	 "voz": "Mario Persona",	 "name": "	#405-So-Jesus	",	 "length": "	03:24	",	 "file": "	https://www.mediafire.com/file/	aqpevq6r3d7b44v	/	#405-So-Jesus	"},
{"track":	96	,	 "voz": "Mario Persona",	 "name": "	#406-Incredulos-e-perversos	",	 "length": "	03:17	",	 "file": "	https://www.mediafire.com/file/	ouj0x1975pg05rf	/	#406-Incredulos-e-perversos	"},
{"track":	97	,	 "voz": "Mario Persona",	 "name": "	#407-A-carne-revelada	",	 "length": "	03:00	",	 "file": "	https://www.mediafire.com/file/	bspomdkvgx935kw	/	#407-A-carne-revelada	"},
{"track":	98	,	 "voz": "Mario Persona",	 "name": "	#408-Orgulho-individual-e-coletivo	",	 "length": "	03:32	",	 "file": "	https://www.mediafire.com/file/	dq7j9qr9w9zdwl1	/	#408-Orgulho-individual-e-coletivo	"},
{"track":	99	,	 "voz": "Mario Persona",	 "name": "	#409-Destinado-a-morrer	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	xh08evr621362on	/	#409-Destinado-a-morrer	"},
{"track":	100	,	 "voz": "Mario Persona",	 "name": "	#410-A-prepotencia-dos-discipulos	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	t5e669z010n5iji	/	#410-A-prepotencia-dos-discipulos	"},
{"track":	101	,	 "voz": "Mario Persona",	 "name": "	#411-Raposas-e-aves	",	 "length": "	03:30	",	 "file": "	https://www.mediafire.com/file/	190hlw8derrbnew	/	#411-Raposas-e-aves	"},
{"track":	102	,	 "voz": "Mario Persona",	 "name": "	#412-Mortos-sepultam-mortos	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	p0j5ud9hchg8mk1	/	#412-Mortos-sepultam-mortos	"},
{"track":	103	,	 "voz": "Mario Persona",	 "name": "	#413-Sentimentalismo	",	 "length": "	03:15	",	 "file": "	https://www.mediafire.com/file/	mg7ftcc2mrj3cyn	/	#413-Sentimentalismo	"},
{"track":	104	,	 "voz": "Mario Persona",	 "name": "	#414-O-no-da-questao	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	isj3q08x1ino31p	/	#414-O-no-da-questao	"},
{"track":	105	,	 "voz": "Mario Persona",	 "name": "	#415-Uma-campanha-pelo-Rei	",	 "length": "	03:25	",	 "file": "	https://www.mediafire.com/file/	xo6o1wy6j7u1m21	/	#415-Uma-campanha-pelo-Rei	"},
{"track":	106	,	 "voz": "Mario Persona",	 "name": "	#416-Os-Salmos	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	bhq11rsj7wdhy5j	/	#416-Os-Salmos	"},
{"track":	107	,	 "voz": "Mario Persona",	 "name": "	#417-O-orgulho-dos-discipulos	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	7305hkri3obi1it	/	#417-O-orgulho-dos-discipulos	"},
{"track":	108	,	 "voz": "Mario Persona",	 "name": "	#418-Expulso-do-ceu	",	 "length": "	03:47	",	 "file": "	https://www.mediafire.com/file/	x1o4x9jeo2tjkx6	/	#418-Expulso-do-ceu	"},
{"track":	109	,	 "voz": "Mario Persona",	 "name": "	#419-Os-mais-inteligentes	",	 "length": "	03:17	",	 "file": "	https://www.mediafire.com/file/	g4bivy4pm538vb4	/	#419-Os-mais-inteligentes	"},
{"track":	110	,	 "voz": "Mario Persona",	 "name": "	#420-A-mente-celestial	",	 "length": "	03:51	",	 "file": "	https://www.mediafire.com/file/	p8hcjgfd7os48yo	/	#420-A-mente-celestial	"},
{"track":	111	,	 "voz": "Mario Persona",	 "name": "	#421-O-Pai-revelado	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	cy93rse3vcice16	/	#421-O-Pai-revelado	"},
{"track":	112	,	 "voz": "Mario Persona",	 "name": "	#422-Que-vida-e-essa	",	 "length": "	03:26	",	 "file": "	https://www.mediafire.com/file/	g7i582eqljt8xfh	/	#422-Que-vida-e-essa	"},
{"track":	113	,	 "voz": "Mario Persona",	 "name": "	#423-O-verdadeiro-Samaritano	",	 "length": "	03:30	",	 "file": "	https://www.mediafire.com/file/	7s14dogz92yf1gk	/	#423-O-verdadeiro-Samaritano	"},
{"track":	114	,	 "voz": "Mario Persona",	 "name": "	#424-A-hospedaria	",	 "length": "	03:36	",	 "file": "	https://www.mediafire.com/file/	avnbctfxgz33844	/	#424-A-hospedaria	"},
{"track":	115	,	 "voz": "Mario Persona",	 "name": "	#425-Marta-e-Maria	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	wwr82645bbp7ail	/	#425-Marta-e-Maria	"},
{"track":	116	,	 "voz": "Mario Persona",	 "name": "	#426-Como-orar	",	 "length": "	03:48	",	 "file": "	https://www.mediafire.com/file/	cirltk79zfntmfs	/	#426-Como-orar	"},
{"track":	117	,	 "voz": "Mario Persona",	 "name": "	#427-A-oracao	",	 "length": "	03:27	",	 "file": "	https://www.mediafire.com/file/	9m0ji2at4a7j0qg	/	#427-A-oracao	"},
{"track":	118	,	 "voz": "Mario Persona",	 "name": "	#428-Venha-o-teu-reino	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	01w5ltqkaiednx0	/	#428-Venha-o-teu-reino	"},
{"track":	119	,	 "voz": "Mario Persona",	 "name": "	#429-Capacitados-a-orar	",	 "length": "	03:54	",	 "file": "	https://www.mediafire.com/file/	c755qxf9m5j33jc	/	#429-Capacitados-a-orar	"},
{"track":	120	,	 "voz": "Mario Persona",	 "name": "	#430-Nossas-necessidades	",	 "length": "	03:48	",	 "file": "	https://www.mediafire.com/file/	g6rzoqleqe4u867	/	#430-Nossas-necessidades	"},
{"track":	121	,	 "voz": "Mario Persona",	 "name": "	#431-Perdoa-nos-os-nossos-pecados	",	 "length": "	03:25	",	 "file": "	https://www.mediafire.com/file/	tq4qr93b6xy0m8a	/	#431-Perdoa-nos-os-nossos-pecados	"},
{"track":	122	,	 "voz": "Mario Persona",	 "name": "	#432-Nao-nos-deixes-cair-em-tentacao	",	 "length": "	03:41	",	 "file": "	https://www.mediafire.com/file/	5o866qza80f01q6	/	#432-Nao-nos-deixes-cair-em-tentacao	"},
{"track":	123	,	 "voz": "Mario Persona",	 "name": "	#433-Fui-eu-que-fiz-isso	",	 "length": "	05:20	",	 "file": "	https://www.mediafire.com/file/	z1a9mt9evb8g2ne	/	#433-Fui-eu-que-fiz-isso	"},
{"track":	124	,	 "voz": "Mario Persona",	 "name": "	#434-Levanto-os-meus-olhos	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	o6noxocd78yaizo	/	#434-Levanto-os-meus-olhos	"},
{"track":	125	,	 "voz": "Mario Persona",	 "name": "	#435-Perseverar-em-oracao	",	 "length": "	03:40	",	 "file": "	https://www.mediafire.com/file/	qfirz352xzlcg7q	/	#435-Perseverar-em-oracao	"},
{"track":	126	,	 "voz": "Mario Persona",	 "name": "	#436-O-mais-feliz-do-Universo	",	 "length": "	03:53	",	 "file": "	https://www.mediafire.com/file/	b7awahlv8582n75	/	#436-O-mais-feliz-do-Universo	"},
{"track":	127	,	 "voz": "Mario Persona",	 "name": "	#437-Confiar-em-Deus	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	nnomyog2780crma	/	#437-Confiar-em-Deus	"},
{"track":	128	,	 "voz": "Mario Persona",	 "name": "	#438-Pedir-o-Espirito-Santo	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	b38igxrzauy7r4b	/	#438-Pedir-o-Espirito-Santo	"},
{"track":	129	,	 "voz": "Mario Persona",	 "name": "	#439-Ouvir-crer-ser-selado	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	anao4nj9hta34a7	/	#439-Ouvir-crer-ser-selado	"},
{"track":	130	,	 "voz": "Mario Persona",	 "name": "	#440-Cornelio	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	nhcnuuf5g7nb8bh	/	#440-Cornelio	"},
{"track":	131	,	 "voz": "Mario Persona",	 "name": "	#441-Difamando-a-Palavra-de-Deus	",	 "length": "	03:38	",	 "file": "	https://www.mediafire.com/file/	3626ubn7muotnpa	/	#441-Difamando-a-Palavra-de-Deus	"},
{"track":	132	,	 "voz": "Mario Persona",	 "name": "	#442-As-segundas-epistolas	",	 "length": "	03:43	",	 "file": "	https://www.mediafire.com/file/	w1sa561md7z3619	/	#442-As-segundas-epistolas	"},
{"track":	133	,	 "voz": "Mario Persona",	 "name": "	#443-Detector-de-lobos	",	 "length": "	03:38	",	 "file": "	https://www.mediafire.com/file/	3ecr4duczbju3ct	/	#443-Detector-de-lobos	"},
{"track":	134	,	 "voz": "Mario Persona",	 "name": "	#444-Balaao-e-Cora	",	 "length": "	03:31	",	 "file": "	https://www.mediafire.com/file/	k9bbqdbqlhnuquy	/	#444-Balaao-e-Cora	"},
{"track":	135	,	 "voz": "Mario Persona",	 "name": "	#445-A-origem-do-engano	",	 "length": "	04:08	",	 "file": "	https://www.mediafire.com/file/	foj3bhsylews23s	/	#445-A-origem-do-engano	"},
{"track":	136	,	 "voz": "Mario Persona",	 "name": "	#446-Se-opondo-a-graca	",	 "length": "	03:33	",	 "file": "	https://www.mediafire.com/file/	c0fmq0r82dmyi6h	/	#446-Se-opondo-a-graca	"},
{"track":	137	,	 "voz": "Mario Persona",	 "name": "	#447-Sinais-e-maravilhas	",	 "length": "	03:40	",	 "file": "	https://www.mediafire.com/file/	afpsuf2foad4hrp	/	#447-Sinais-e-maravilhas	"},
{"track":	138	,	 "voz": "Mario Persona",	 "name": "	#448-O-forte-e-o-mais-forte	",	 "length": "	03:58	",	 "file": "	https://www.mediafire.com/file/	s3m9wkk4uadlzqt	/	#448-O-forte-e-o-mais-forte	"},
{"track":	139	,	 "voz": "Mario Persona",	 "name": "	#449-Voce-e-a-favor-ou-contra	",	 "length": "	03:50	",	 "file": "	https://www.mediafire.com/file/	1p42zkpbzgba83e	/	#449-Voce-e-a-favor-ou-contra	"},
{"track":	140	,	 "voz": "Mario Persona",	 "name": "	#450-Casa-vazia-e-arrumada	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	dgy1y4lr9cfwrx2	/	#450-Casa-vazia-e-arrumada	"},
{"track":	141	,	 "voz": "Mario Persona",	 "name": "	#451-As-cartas-profeticas	",	 "length": "	03:36	",	 "file": "	https://www.mediafire.com/file/	2322xqxu2ki2xyn	/	#451-As-cartas-profeticas	"},
{"track":	142	,	 "voz": "Mario Persona",	 "name": "	#452-Tiatira-e-Sardes	",	 "length": "	03:44	",	 "file": "	https://www.mediafire.com/file/	4jbo1r66p9iw8qz	/	#452-Tiatira-e-Sardes	"},
{"track":	143	,	 "voz": "Mario Persona",	 "name": "	#453-Filadelfia	",	 "length": "	03:38	",	 "file": "	https://www.mediafire.com/file/	orljlwktali9g72	/	#453-Filadelfia	"},
{"track":	144	,	 "voz": "Mario Persona",	 "name": "	#454-Laodiceia	",	 "length": "	03:40	",	 "file": "	https://www.mediafire.com/file/	7qp843cc7dqda3z	/	#454-Laodiceia	"},
{"track":	145	,	 "voz": "Mario Persona",	 "name": "	#455-Felizes	",	 "length": "	03:45	",	 "file": "	https://www.mediafire.com/file/	14ccxnsjv7hu6u1	/	#455-Felizes	"},
{"track":	146	,	 "voz": "Mario Persona",	 "name": "	#456-Jonas-e-a-Rainha	",	 "length": "	03:18	",	 "file": "	https://www.mediafire.com/file/	nb20b5v3pc5ubf1	/	#456-Jonas-e-a-Rainha	"},
{"track":	147	,	 "voz": "Mario Persona",	 "name": "	#457-Luz	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	idvkyyyodwcqm3g	/	#457-Luz	"},
{"track":	148	,	 "voz": "Mario Persona",	 "name": "	#458-Uma-questao-de-lente	",	 "length": "	03:30	",	 "file": "	https://www.mediafire.com/file/	oa49twsdxe2be80	/	#458-Uma-questao-de-lente	"},
{"track":	149	,	 "voz": "Mario Persona",	 "name": "	#459-Faxina-religiosa	",	 "length": "	03:32	",	 "file": "	https://www.mediafire.com/file/	y0loh6o9k7tevbp	/	#459-Faxina-religiosa	"},
{"track":	150	,	 "voz": "Mario Persona",	 "name": "	#460-O-dizimo	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	4xaixt5ymh2c25c	/	#460-O-dizimo	"},
{"track":	151	,	 "voz": "Mario Persona",	 "name": "	#461-A-chave-do-conhecimento	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	5p47it01wq5ceio	/	#461-A-chave-do-conhecimento	"},
{"track":	152	,	 "voz": "Mario Persona",	 "name": "	#462-O-assunto-da-Biblia	",	 "length": "	03:36	",	 "file": "	https://www.mediafire.com/file/	3lhbije2rka2t52	/	#462-O-assunto-da-Biblia	"},
{"track":	153	,	 "voz": "Mario Persona",	 "name": "	#463-De-Adao-a-Noe	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	64qwbi22dfq7o2a	/	#463-De-Adao-a-Noe	"},
{"track":	154	,	 "voz": "Mario Persona",	 "name": "	#464-De-Melquisedeque-a-Jose	",	 "length": "	03:38	",	 "file": "	https://www.mediafire.com/file/	spq49d1iurkl5x2	/	#464-De-Melquisedeque-a-Jose	"},
{"track":	155	,	 "voz": "Mario Persona",	 "name": "	#465-Moises	",	 "length": "	03:30	",	 "file": "	https://www.mediafire.com/file/	89du4i70ayxuz8a	/	#465-Moises	"},
{"track":	156	,	 "voz": "Mario Persona",	 "name": "	#466-As-sombras-e-a-realidade	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	029c9ls6b2nqld3	/	#466-As-sombras-e-a-realidade	"},
{"track":	157	,	 "voz": "Mario Persona",	 "name": "	#467-Sombras-que-desvanecem	",	 "length": "	03:26	",	 "file": "	https://www.mediafire.com/file/	o8oe5oe18gmornf	/	#467-Sombras-que-desvanecem	"},
{"track":	158	,	 "voz": "Mario Persona",	 "name": "	#468-Lei-Salmos-e-Profetas	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	j8xte20kr7gwjku	/	#468-Lei-Salmos-e-Profetas	"},
{"track":	159	,	 "voz": "Mario Persona",	 "name": "	#469-De-Proverbios-aos-Evangelhos	",	 "length": "	03:55	",	 "file": "	https://www.mediafire.com/file/	sr7h78cotyl8h8w	/	#469-De-Proverbios-aos-Evangelhos	"},
{"track":	160	,	 "voz": "Mario Persona",	 "name": "	#470-Misterios	",	 "length": "	03:26	",	 "file": "	https://www.mediafire.com/file/	c61ca2afpczctcr	/	#470-Misterios	"},
{"track":	161	,	 "voz": "Mario Persona",	 "name": "	#471-Paulo	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	hte52xkuq67rq92	/	#471-Paulo	"},
{"track":	162	,	 "voz": "Mario Persona",	 "name": "	#472-O-ultimo-misterio	",	 "length": "	03:36	",	 "file": "	https://www.mediafire.com/file/	6jot3h7hey90hct	/	#472-O-ultimo-misterio	"},
{"track":	163	,	 "voz": "Mario Persona",	 "name": "	#473-O-fermento-da-hipocrisia	",	 "length": "	03:47	",	 "file": "	https://www.mediafire.com/file/	dsb67tuiacbfbk6	/	#473-O-fermento-da-hipocrisia	"},
{"track":	164	,	 "voz": "Mario Persona",	 "name": "	#474-Andando-na-Luz	",	 "length": "	03:48	",	 "file": "	https://www.mediafire.com/file/	2l469d7ke7ry1wb	/	#474-Andando-na-Luz	"},
{"track":	165	,	 "voz": "Mario Persona",	 "name": "	#475-O-poder-para-testemunhar	",	 "length": "	03:25	",	 "file": "	https://www.mediafire.com/file/	xt6bb6z699671rp	/	#475-O-poder-para-testemunhar	"},
{"track":	166	,	 "voz": "Mario Persona",	 "name": "	#476-O-pecado-sem-perdao	",	 "length": "	03:26	",	 "file": "	https://www.mediafire.com/file/	kk44146lyewpbdx	/	#476-O-pecado-sem-perdao	"},
{"track":	167	,	 "voz": "Mario Persona",	 "name": "	#477-Prosperidade	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	kkczf8a13kj9wfs	/	#477-Prosperidade	"},
{"track":	168	,	 "voz": "Mario Persona",	 "name": "	#478-A-verdade-dispensacional	",	 "length": "	03:57	",	 "file": "	https://www.mediafire.com/file/	7vl4a01tm2dyjly	/	#478-A-verdade-dispensacional	"},
{"track":	169	,	 "voz": "Mario Persona",	 "name": "	#479-Chamados-para-fora	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	10uj9631me9x2ny	/	#479-Chamados-para-fora	"},
{"track":	170	,	 "voz": "Mario Persona",	 "name": "	#480-Das-sombras-para-a-realidade	",	 "length": "	03:45	",	 "file": "	https://www.mediafire.com/file/	4rmnj1d8rb4fjx6	/	#480-Das-sombras-para-a-realidade	"},
{"track":	171	,	 "voz": "Mario Persona",	 "name": "	#481-Uma-nova-dispensacao	",	 "length": "	03:14	",	 "file": "	https://www.mediafire.com/file/	yji6oq4b2jr414y	/	#481-Uma-nova-dispensacao	"},
{"track":	172	,	 "voz": "Mario Persona",	 "name": "	#482-Corpo- casa-e-noiva	",	 "length": "	03:47	",	 "file": "	https://www.mediafire.com/file/	wwt3qcxaa8w5oqb	/	#482-Corpo- casa-e-noiva	"},
{"track":	173	,	 "voz": "Mario Persona",	 "name": "	#483-De-servos-a-filhos	",	 "length": "	03:44	",	 "file": "	https://www.mediafire.com/file/	8a2i08q0t6azav5	/	#483-De-servos-a-filhos	"},
{"track":	174	,	 "voz": "Mario Persona",	 "name": "	#484-Eu-eu-eu	",	 "length": "	04:09	",	 "file": "	https://www.mediafire.com/file/	31y8k6st4gscwsi	/	#484-Eu-eu-eu	"},
{"track":	175	,	 "voz": "Mario Persona",	 "name": "	#485-Esperar-no-Senhor	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	hc8jpn13t34zn48	/	#485-Esperar-no-Senhor	"},
{"track":	176	,	 "voz": "Mario Persona",	 "name": "	#486-A-cura-para-a-ansiedade	",	 "length": "	03:30	",	 "file": "	https://www.mediafire.com/file/	gb650uku61h0e1z	/	#486-A-cura-para-a-ansiedade	"},
{"track":	177	,	 "voz": "Mario Persona",	 "name": "	#487-O-tempo-que-resta	",	 "length": "	03:42	",	 "file": "	https://www.mediafire.com/file/	30uro6ctuhrko42	/	#487-O-tempo-que-resta	"},
{"track":	178	,	 "voz": "Mario Persona",	 "name": "	#488-Bem-nascido	",	 "length": "	03:31	",	 "file": "	https://www.mediafire.com/file/	g5bsjgvj1wsg234	/	#488-Bem-nascido	"},
{"track":	179	,	 "voz": "Mario Persona",	 "name": "	#489-Onde-esta-o-seu-tesouro	",	 "length": "	03:45	",	 "file": "	https://www.mediafire.com/file/	nd43onof3877xd6	/	#489-Onde-esta-o-seu-tesouro	"},
{"track":	180	,	 "voz": "Mario Persona",	 "name": "	#490-O-que-voce-espera	",	 "length": "	03:46	",	 "file": "	https://www.mediafire.com/file/	vc4vtpxh4qcf6d4	/	#490-O-que-voce-espera	"},
{"track":	181	,	 "voz": "Mario Persona",	 "name": "	#491-Imediatamente	",	 "length": "	03:55	",	 "file": "	https://www.mediafire.com/file/	v1dq9guj1pbjyre	/	#491-Imediatamente	"},
{"track":	182	,	 "voz": "Mario Persona",	 "name": "	#492-Servo-ou-Juiz	",	 "length": "	03:52	",	 "file": "	https://www.mediafire.com/file/	j11j5b1y9djmi3o	/	#492-Servo-ou-Juiz	"},
{"track":	183	,	 "voz": "Mario Persona",	 "name": "	#493-O-dia-e-a-hora	",	 "length": "	03:50	",	 "file": "	https://www.mediafire.com/file/	yvwydvfb1h8ad7i	/	#493-O-dia-e-a-hora	"},
{"track":	184	,	 "voz": "Mario Persona",	 "name": "	#494-Meia-noite	",	 "length": "	03:46	",	 "file": "	https://www.mediafire.com/file/	d52419mosw9lofw	/	#494-Meia-noite	"},
{"track":	185	,	 "voz": "Mario Persona",	 "name": "	#495-O-dono-da-casa-e-o-ladrao	",	 "length": "	03:51	",	 "file": "	https://www.mediafire.com/file/	z42y0whdbifqacb	/	#495-O-dono-da-casa-e-o-ladrao	"},
{"track":	186	,	 "voz": "Mario Persona",	 "name": "	#496-Vigilantes-e-ocupados	",	 "length": "	03:55	",	 "file": "	https://www.mediafire.com/file/	5n9xmjbubkqed5e	/	#496-Vigilantes-e-ocupados	"},
{"track":	187	,	 "voz": "Mario Persona",	 "name": "	#497-Comer-rezar-e-amar	",	 "length": "	04:04	",	 "file": "	https://www.mediafire.com/file/	972az1fbk18vp7j	/	#497-Comer-rezar-e-amar	"},
{"track":	188	,	 "voz": "Mario Persona",	 "name": "	#498-Responsabilidade	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	tt44c416akqpvhy	/	#498-Responsabilidade	"},
{"track":	189	,	 "voz": "Mario Persona",	 "name": "	#499-Rejeicao	",	 "length": "	03:47	",	 "file": "	https://www.mediafire.com/file/	nq7ys2613cz149b	/	#499-Rejeicao	"},
{"track":	190	,	 "voz": "Mario Persona",	 "name": "	#500-Compre-colirio	",	 "length": "	04:15	",	 "file": "	https://www.mediafire.com/file/	3zbskdb2t5pjhyk	/	#500-Compre-colirio	"},
{"track":	191	,	 "voz": "Mario Persona",	 "name": "	#501-Saber-julgar	",	 "length": "	03:54	",	 "file": "	https://www.mediafire.com/file/	igj3sewypy8swax	/	#501-Saber-julgar	"},
{"track":	192	,	 "voz": "Mario Persona",	 "name": "	#502-Todos-iguais	",	 "length": "	03:33	",	 "file": "	https://www.mediafire.com/file/	janh1u53q0h8r2f	/	#502-Todos-iguais	"},
{"track":	193	,	 "voz": "Mario Persona",	 "name": "	#503-O-fim-do-judaismo	",	 "length": "	03:43	",	 "file": "	https://www.mediafire.com/file/	bm7t6oawxx5wbqw	/	#503-O-fim-do-judaismo	"},
{"track":	194	,	 "voz": "Mario Persona",	 "name": "	#504-Encurvados	",	 "length": "	03:57	",	 "file": "	https://www.mediafire.com/file/	t9t9o225dg66o6i	/	#504-Encurvados	"},
{"track":	195	,	 "voz": "Mario Persona",	 "name": "	#505-O-Reino	",	 "length": "	03:54	",	 "file": "	https://www.mediafire.com/file/	nuy3db9j6qgopy8	/	#505-O-Reino	"},
{"track":	196	,	 "voz": "Mario Persona",	 "name": "	#506-A-arvore-mutante	",	 "length": "	03:49	",	 "file": "	https://www.mediafire.com/file/	1a17ax1l4ikl7pj	/	#506-A-arvore-mutante	"},
{"track":	197	,	 "voz": "Mario Persona",	 "name": "	#507-A-massa-fermentada	",	 "length": "	03:48	",	 "file": "	https://www.mediafire.com/file/	a2n1cjobjjjlk0z	/	#507-A-massa-fermentada	"},
{"track":	198	,	 "voz": "Mario Persona",	 "name": "	#508-Contexto	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	1f6g66n5lgfvd93	/	#508-Contexto	"},
{"track":	199	,	 "voz": "Mario Persona",	 "name": "	#509-Primeiros-e-ultimos	",	 "length": "	03:43	",	 "file": "	https://www.mediafire.com/file/	obphpma2wixcxx3	/	#509-Primeiros-e-ultimos	"},
{"track":	200	,	 "voz": "Mario Persona",	 "name": "	#510-A-hipocrisia-dos-fariseus	",	 "length": "	03:12	",	 "file": "	https://www.mediafire.com/file/	86h495sijx6t8wb	/	#510-A-hipocrisia-dos-fariseus	"},
{"track":	201	,	 "voz": "Mario Persona",	 "name": "	#511-Nao-me-verao-mais	",	 "length": "	03:33	",	 "file": "	https://www.mediafire.com/file/	m6ny22kn2cxup3d	/	#511-Nao-me-verao-mais	"},
{"track":	202	,	 "voz": "Mario Persona",	 "name": "	#512-Cura-exaltacao-recompensa	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	6x7p7tni329d8da	/	#512-Cura-exaltacao-recompensa	"},
{"track":	203	,	 "voz": "Mario Persona",	 "name": "	#513-Humilhados-exaltados	",	 "length": "	03:44	",	 "file": "	https://www.mediafire.com/file/	611s1krqcdyo4k2	/	#513-Humilhados-exaltados	"},
{"track":	204	,	 "voz": "Mario Persona",	 "name": "	#514-Graca-produz-graca	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	546nz45ef94u1bd	/	#514-Graca-produz-graca	"},
{"track":	205	,	 "voz": "Mario Persona",	 "name": "	#515-Duas-ressurreicoes	",	 "length": "	03:00	",	 "file": "	https://www.mediafire.com/file/	fnmnw22vv2k2wem	/	#515-Duas-ressurreicoes	"},
{"track":	206	,	 "voz": "Mario Persona",	 "name": "	#516-Tres-estagios	",	 "length": "	03:31	",	 "file": "	https://www.mediafire.com/file/	zuscvswnku7agnp	/	#516-Tres-estagios	"},
{"track":	207	,	 "voz": "Mario Persona",	 "name": "	#517-A-segunda-ressurreicao	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	1ke5jzchahti2uc	/	#517-A-segunda-ressurreicao	"},
{"track":	208	,	 "voz": "Mario Persona",	 "name": "	#518-Judeus-gentios-Igreja	",	 "length": "	03:26	",	 "file": "	https://www.mediafire.com/file/	aryltzv1o341ee9	/	#518-Judeus-gentios-Igreja	"},
{"track":	209	,	 "voz": "Mario Persona",	 "name": "	#519-Tudo-pronto	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	jvm0stva0my008e	/	#519-Tudo-pronto	"},
{"track":	210	,	 "voz": "Mario Persona",	 "name": "	#520-Desculpas	",	 "length": "	03:14	",	 "file": "	https://www.mediafire.com/file/	7bacxhh5onbjach	/	#520-Desculpas	"},
{"track":	211	,	 "voz": "Mario Persona",	 "name": "	#521-Uma-casa-cheia	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	aiba9wio3a4wltr	/	#521-Uma-casa-cheia	"},
{"track":	212	,	 "voz": "Mario Persona",	 "name": "	#522-Graca-e-discipulado	",	 "length": "	03:01	",	 "file": "	https://www.mediafire.com/file/	qqm55f3micm3pzu	/	#522-Graca-e-discipulado	"},
{"track":	213	,	 "voz": "Mario Persona",	 "name": "	#523-Discipulado	",	 "length": "	03:09	",	 "file": "	https://www.mediafire.com/file/	b7ihhddzfq1dfgf	/	#523-Discipulado	"},
{"track":	214	,	 "voz": "Mario Persona",	 "name": "	#524-Mais-que-a-propria-vida	",	 "length": "	03:15	",	 "file": "	https://www.mediafire.com/file/	i19c7c3iw00a0eo	/	#524-Mais-que-a-propria-vida	"},
{"track":	215	,	 "voz": "Mario Persona",	 "name": "	#525-Crucificados-com-Cristo	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	m49elmlbd59t51k	/	#525-Crucificados-com-Cristo	"},
{"track":	216	,	 "voz": "Mario Persona",	 "name": "	#526-Crucificado-para-o-mundo	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	7togx30j7gqg5dg	/	#526-Crucificado-para-o-mundo	"},
{"track":	217	,	 "voz": "Mario Persona",	 "name": "	#527-A-torre	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	b24ld388pgv2dsr	/	#527-A-torre	"},
{"track":	218	,	 "voz": "Mario Persona",	 "name": "	#528-Visao-estrategica	",	 "length": "	03:26	",	 "file": "	https://www.mediafire.com/file/	ibaonzeodw8e007	/	#528-Visao-estrategica	"},
{"track":	219	,	 "voz": "Mario Persona",	 "name": "	#529-Cisternas	",	 "length": "	03:33	",	 "file": "	https://www.mediafire.com/file/	huxzyhd9n13d15c	/	#529-Cisternas	"},
{"track":	220	,	 "voz": "Mario Persona",	 "name": "	#530-Guerra-espiritual	",	 "length": "	03:24	",	 "file": "	https://www.mediafire.com/file/	03v8szbsxnb6f5q	/	#530-Guerra-espiritual	"},
{"track":	221	,	 "voz": "Mario Persona",	 "name": "	#531-Sal	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	5wcqeb706dlogmg	/	#531-Sal	"},
{"track":	222	,	 "voz": "Mario Persona",	 "name": "	#532-Cobertos-de-folhas	",	 "length": "	03:27	",	 "file": "	https://www.mediafire.com/file/	g4dhga1axiqg8pr	/	#532-Cobertos-de-folhas	"},
{"track":	223	,	 "voz": "Mario Persona",	 "name": "	#533-O-que-voce-acha-de-si-mesmo	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	4b76b1n4r5an84o	/	#533-O-que-voce-acha-de-si-mesmo	"},
{"track":	224	,	 "voz": "Mario Persona",	 "name": "	#534-Entretenimento-biblico	",	 "length": "	03:21	",	 "file": "	https://www.mediafire.com/file/	s06wdocglwk16kd	/	#534-Entretenimento-biblico	"},
{"track":	225	,	 "voz": "Mario Persona",	 "name": "	#535-Nos-ombros-do-Pastor	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	psfdhchm0ohpyts	/	#535-Nos-ombros-do-Pastor	"},
{"track":	226	,	 "voz": "Mario Persona",	 "name": "	#536-Retocado-ou-perdoado	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	n52un938jksoujm	/	#536-Retocado-ou-perdoado	"},
{"track":	227	,	 "voz": "Mario Persona",	 "name": "	#537-Uma-moeda-nas-trevas	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	skos8b40ss50j18	/	#537-Uma-moeda-nas-trevas	"},
{"track":	228	,	 "voz": "Mario Persona",	 "name": "	#538-O-Pai-prodigo	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	i2zc10kv50isa7w	/	#538-O-Pai-prodigo	"},
{"track":	229	,	 "voz": "Mario Persona",	 "name": "	#539-Perdido-ou-achado	",	 "length": "	03:27	",	 "file": "	https://www.mediafire.com/file/	rnp7oh17g5jl0nh	/	#539-Perdido-ou-achado	"},
{"track":	230	,	 "voz": "Mario Persona",	 "name": "	#540-Correndo-para-o-abraco	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	40a0n494urcf0d1	/	#540-Correndo-para-o-abraco	"},
{"track":	231	,	 "voz": "Mario Persona",	 "name": "	#541-Desprezando-a-bondade	",	 "length": "	03:42	",	 "file": "	https://www.mediafire.com/file/	28e3vvdjh08d68y	/	#541-Desprezando-a-bondade	"},
{"track":	232	,	 "voz": "Mario Persona",	 "name": "	#542-O-administrador-corrupto	",	 "length": "	03:20	",	 "file": "	https://www.mediafire.com/file/	7qa6h4wy81xjcby	/	#542-O-administrador-corrupto	"},
{"track":	233	,	 "voz": "Mario Persona",	 "name": "	#543-Administradores-de-Deus	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	a3axbp6j7g22cyc	/	#543-Administradores-de-Deus	"},
{"track":	234	,	 "voz": "Mario Persona",	 "name": "	#544-Pouco-ou-muito	",	 "length": "	03:32	",	 "file": "	https://www.mediafire.com/file/	ah5v1kq6w7dyatu	/	#544-Pouco-ou-muito	"},
{"track":	235	,	 "voz": "Mario Persona",	 "name": "	#545-Justificar-se	",	 "length": "	03:56	",	 "file": "	https://www.mediafire.com/file/	qxhj02hebaz47i6	/	#545-Justificar-se	"},
{"track":	236	,	 "voz": "Mario Persona",	 "name": "	#546-Lideres-gananciosos	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	pjcip7ecxz442fe	/	#546-Lideres-gananciosos	"},
{"track":	237	,	 "voz": "Mario Persona",	 "name": "	#547-Justificacao	",	 "length": "	03:40	",	 "file": "	https://www.mediafire.com/file/	jy6znog71u8ebhq	/	#547-Justificacao	"},
{"track":	238	,	 "voz": "Mario Persona",	 "name": "	#548-Lei-ou-graca	",	 "length": "	03:48	",	 "file": "	https://www.mediafire.com/file/	8zc6qe25semqapx	/	#548-Lei-ou-graca	"},
{"track":	239	,	 "voz": "Mario Persona",	 "name": "	#549-Adulteros	",	 "length": "	03:40	",	 "file": "	https://www.mediafire.com/file/	bc5wfr735dsst0d	/	#549-Adulteros	"},
{"track":	240	,	 "voz": "Mario Persona",	 "name": "	#550-O-anonimo-e-Lazaro	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	z1y8v8dgzdgrrwd	/	#550-O-anonimo-e-Lazaro	"},
{"track":	241	,	 "voz": "Mario Persona",	 "name": "	#551-Depois-que-morremos	",	 "length": "	03:41	",	 "file": "	https://www.mediafire.com/file/	cciabx8xx9fzrih	/	#551-Depois-que-morremos	"},
{"track":	242	,	 "voz": "Mario Persona",	 "name": "	#552-Destino	",	 "length": "	03:27	",	 "file": "	https://www.mediafire.com/file/	7zh33rg8rp098v6	/	#552-Destino	"},
{"track":	243	,	 "voz": "Mario Persona",	 "name": "	#553-Pedra-de-tropeco	",	 "length": "	03:45	",	 "file": "	https://www.mediafire.com/file/	c55vz9qhui47i36	/	#553-Pedra-de-tropeco	"},
{"track":	244	,	 "voz": "Mario Persona",	 "name": "	#554-Repreensao	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	f4mnjf3ah1z7m6q	/	#554-Repreensao	"},
{"track":	245	,	 "voz": "Mario Persona",	 "name": "	#555-Arrependimento	",	 "length": "	03:38	",	 "file": "	https://www.mediafire.com/file/	xdbtcrd6pezqczt	/	#555-Arrependimento	"},
{"track":	246	,	 "voz": "Mario Persona",	 "name": "	#556-Perdao	",	 "length": "	03:36	",	 "file": "	https://www.mediafire.com/file/	lray1al5zvox0h1	/	#556-Perdao	"},
{"track":	247	,	 "voz": "Mario Persona",	 "name": "	#557-Ira-santa	",	 "length": "	03:44	",	 "file": "	https://www.mediafire.com/file/	zxob0ljo1kcl6no	/	#557-Ira-santa	"},
{"track":	248	,	 "voz": "Mario Persona",	 "name": "	#558-Trocando-de-roupa	",	 "length": "	03:32	",	 "file": "	https://www.mediafire.com/file/	336vl5y4r9h3b8g	/	#558-Trocando-de-roupa	"},
{"track":	249	,	 "voz": "Mario Persona",	 "name": "	#559-Amoreira-no-mar	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	wq3o66p7pr4jaf6	/	#559-Amoreira-no-mar	"},
{"track":	250	,	 "voz": "Mario Persona",	 "name": "	#560-Servir	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	1p9ee3elhrxzpdl	/	#560-Servir	"},
{"track":	251	,	 "voz": "Mario Persona",	 "name": "	#561-Nove-dentre-dez-leprosos	",	 "length": "	03:36	",	 "file": "	https://www.mediafire.com/file/	o3l6a18sosg76c6	/	#561-Nove-dentre-dez-leprosos	"},
{"track":	252	,	 "voz": "Mario Persona",	 "name": "	#562-O-Reino-e-o-Rei	",	 "length": "	03:21	",	 "file": "	https://www.mediafire.com/file/	apkiyx8kjbp84sg	/	#562-O-Reino-e-o-Rei	"},
{"track":	253	,	 "voz": "Mario Persona",	 "name": "	#563-O-Reino-invisivel	",	 "length": "	03:49	",	 "file": "	https://www.mediafire.com/file/	g1i7pu7vqbl8mfe	/	#563-O-Reino-invisivel	"},
{"track":	254	,	 "voz": "Mario Persona",	 "name": "	#564-Um-Rei-ausente	",	 "length": "	03:36	",	 "file": "	https://www.mediafire.com/file/	fxw9b02sstgwgn9	/	#564-Um-Rei-ausente	"},
{"track":	255	,	 "voz": "Mario Persona",	 "name": "	#565-Sob-o-poder-do-Maligno	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	m2eqfxqdvgd8egm	/	#565-Sob-o-poder-do-Maligno	"},
{"track":	256	,	 "voz": "Mario Persona",	 "name": "	#566-Falsos-apostolos-e-profetas	",	 "length": "	03:59	",	 "file": "	https://www.mediafire.com/file/	qan170a9v93zmsc	/	#566-Falsos-apostolos-e-profetas	"},
{"track":	257	,	 "voz": "Mario Persona",	 "name": "	#567 Rejeicao, morte e ressurreicao	",	 "length": "	03:26	",	 "file": "	https://www.mediafire.com/file/	fmb1pfjwx70ctea	/	#567 Rejeicao, morte e ressurreicao	"},
{"track":	258	,	 "voz": "Mario Persona",	 "name": "	#568 Surpresa!	",	 "length": "	03:18	",	 "file": "	https://www.mediafire.com/file/	bccysacy40kr587	/	#568 Surpresa!	"},
{"track":	259	,	 "voz": "Mario Persona",	 "name": "	#569 Jesus ou conspiracoes	",	 "length": "	04:09	",	 "file": "	https://www.mediafire.com/file/	d2g615nxyaa3u5z	/	#569 Jesus ou conspiracoes	"},
{"track":	260	,	 "voz": "Mario Persona",	 "name": "	#570 Uns tirados, outros deixados	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	wuhghllhnll2glc	/	#570 Uns tirados, outros deixados	"},
{"track":	261	,	 "voz": "Mario Persona",	 "name": "	#571 Orar sempre	",	 "length": "	03:21	",	 "file": "	https://www.mediafire.com/file/	6akc6oftuwbhul3	/	#571 Orar sempre	"},
{"track":	262	,	 "voz": "Mario Persona",	 "name": "	#572 Maldicao ou intercessao	",	 "length": "	03:46	",	 "file": "	https://www.mediafire.com/file/	r184io0bosa6oa8	/	#572 Maldicao ou intercessao	"},
{"track":	263	,	 "voz": "Mario Persona",	 "name": "	#573 Batendo no peito alheio	",	 "length": "	03:41	",	 "file": "	https://www.mediafire.com/file/	m5m7i2mxm351t78	/	#573 Batendo no peito alheio	"},
{"track":	264	,	 "voz": "Mario Persona",	 "name": "	#574 Um reino de criancas	",	 "length": "	03:25	",	 "file": "	https://www.mediafire.com/file/	ha41u8f21taatln	/	#574 Um reino de criancas	"},
{"track":	265	,	 "voz": "Mario Persona",	 "name": "	#575 Atrapalhando os dons	",	 "length": "	03:26	",	 "file": "	https://www.mediafire.com/file/	krt5h63rndmkldu	/	#575 Atrapalhando os dons	"},
{"track":	266	,	 "voz": "Mario Persona",	 "name": "	#576 Empecilhos a salvacao	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	4bp1p4k9t9ox36z	/	#576 Empecilhos a salvacao	"},
{"track":	267	,	 "voz": "Mario Persona",	 "name": "	#577 Que farei	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	raacd78kfdfba5a	/	#577 Que farei	"},
{"track":	268	,	 "voz": "Mario Persona",	 "name": "	#578 Camelo em buraco de agulha	",	 "length": "	03:41	",	 "file": "	https://www.mediafire.com/file/	ydgeq3q7g55132z	/	#578 Camelo em buraco de agulha	"},
{"track":	269	,	 "voz": "Mario Persona",	 "name": "	#579 Muitas vezes mais	",	 "length": "	03:30	",	 "file": "	https://www.mediafire.com/file/	x9wt29y5x3wuoo9	/	#579 Muitas vezes mais	"},
{"track":	270	,	 "voz": "Mario Persona",	 "name": "	#580 Criterio de auto referencia	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	dzju9c4ic9rkryc	/	#580 Criterio de auto referencia	"},
{"track":	271	,	 "voz": "Mario Persona",	 "name": "	#581 Incapaz de fazer	",	 "length": "	03:56	",	 "file": "	https://www.mediafire.com/file/	22r5d7dl5rrc5o3	/	#581 Incapaz de fazer	"},
{"track":	272	,	 "voz": "Mario Persona",	 "name": "	#582 Vergonha	",	 "length": "	03:42	",	 "file": "	https://www.mediafire.com/file/	f72bbmmk6ml71h8	/	#582 Vergonha	"},
{"track":	273	,	 "voz": "Mario Persona",	 "name": "	#583 Zaqueu	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	0sj6b3nqdes40hm	/	#583 Zaqueu	"},
{"track":	274	,	 "voz": "Mario Persona",	 "name": "	#584 Desde quando	",	 "length": "	03:54	",	 "file": "	https://www.mediafire.com/file/	9l9moo8aeqn9xd4	/	#584 Desde quando	"},
{"track":	275	,	 "voz": "Mario Persona",	 "name": "	#585 Na esfera do Reino	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	rdh3rr4lt8clynu	/	#585 Na esfera do Reino	"},
{"track":	276	,	 "voz": "Mario Persona",	 "name": "	#586 A parabola das minas	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	xt5l1htc086iunh	/	#586 A parabola das minas	"},
{"track":	277	,	 "voz": "Mario Persona",	 "name": "	#587 Sacrificio vivo	",	 "length": "	03:44	",	 "file": "	https://www.mediafire.com/file/	tcntey43btzgaab	/	#587 Sacrificio vivo	"},
{"track":	278	,	 "voz": "Mario Persona",	 "name": "	#588 O jumento xucro	",	 "length": "	03:18	",	 "file": "	https://www.mediafire.com/file/	m3bma8mvchbo9w4	/	#588 O jumento xucro	"},
{"track":	279	,	 "voz": "Mario Persona",	 "name": "	#589 Bendito e' o Rei	",	 "length": "	03:38	",	 "file": "	https://www.mediafire.com/file/	n63i2fg9bfp2a2l	/	#589 Bendito e' o Rei	"},
{"track":	280	,	 "voz": "Mario Persona",	 "name": "	#590 Paz no ceu	",	 "length": "	03:42	",	 "file": "	https://www.mediafire.com/file/	o1yntfs1euejur9	/	#590 Paz no ceu	"},
{"track":	281	,	 "voz": "Mario Persona",	 "name": "	#591 Vocês não quiseram!	",	 "length": "	03:43	",	 "file": "	https://www.mediafire.com/file/	9b7qvxxdmoeb6sn	/	#591 Vocês não quiseram!	"},
{"track":	282	,	 "voz": "Mario Persona",	 "name": "	#592 De mercadores a assassinos	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	lg5y0x3fg2a3s79	/	#592 De mercadores a assassinos	"},
{"track":	283	,	 "voz": "Mario Persona",	 "name": "	#593 Com que autoridade	",	 "length": "	03:09	",	 "file": "	https://www.mediafire.com/file/	8blbnolqv7366os	/	#593 Com que autoridade	"},
{"track":	284	,	 "voz": "Mario Persona",	 "name": "	#594 Pedra de tropeco	",	 "length": "	03:36	",	 "file": "	https://www.mediafire.com/file/	rm1ta4ndccrrhi7	/	#594 Pedra de tropeco	"},
{"track":	285	,	 "voz": "Mario Persona",	 "name": "	#595 A Deus o que e' de Deus	",	 "length": "	03:49	",	 "file": "	https://www.mediafire.com/file/	6388143jqa3ksxm	/	#595 A Deus o que e' de Deus	"},
{"track":	286	,	 "voz": "Mario Persona",	 "name": "	#596 Os filhos da ressurreicao	",	 "length": "	03:18	",	 "file": "	https://www.mediafire.com/file/	y4u5yrjako3o1cy	/	#596 Os filhos da ressurreicao	"},
{"track":	287	,	 "voz": "Mario Persona",	 "name": "	#597 Morte e ressurreicao	",	 "length": "	03:41	",	 "file": "	https://www.mediafire.com/file/	bj94wq4ubbkbnhu	/	#597 Morte e ressurreicao	"},
{"track":	288	,	 "voz": "Mario Persona",	 "name": "	#598 Heroi ou Deus	",	 "length": "	03:40	",	 "file": "	https://www.mediafire.com/file/	46kblatxitz7i6a	/	#598 Heroi ou Deus	"},
{"track":	289	,	 "voz": "Mario Persona",	 "name": "	#599 Seminarios teologicos	",	 "length": "	04:08	",	 "file": "	https://www.mediafire.com/file/	tc1v4voahtpi48a	/	#599 Seminarios teologicos	"},
{"track":	290	,	 "voz": "Mario Persona",	 "name": "	#600 A viuva pobre	",	 "length": "	03:49	",	 "file": "	https://www.mediafire.com/file/	yd2m8y44p3asn4z	/	#600 A viuva pobre	"},
{"track":	291	,	 "voz": "Mario Persona",	 "name": "	#601 Expectativa ou pavor	",	 "length": "	04:03	",	 "file": "	https://www.mediafire.com/file/	nzri8jtoyvnh8mo	/	#601 Expectativa ou pavor	"},
{"track":	292	,	 "voz": "Mario Persona",	 "name": "	#602 Curiosidade mórbida	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	3veaz2cuu128h4t	/	#602 Curiosidade mórbida	"},
{"track":	293	,	 "voz": "Mario Persona",	 "name": "	#603 O cerco de Jerusalem	",	 "length": "	03:49	",	 "file": "	https://www.mediafire.com/file/	fxgwmgoxeh9khxo	/	#603 O cerco de Jerusalem	"},
{"track":	294	,	 "voz": "Mario Persona",	 "name": "	#604 Cade o Messias	",	 "length": "	03:54	",	 "file": "	https://www.mediafire.com/file/	nz99dbvc7sx1d1i	/	#604 Cade o Messias	"},
{"track":	295	,	 "voz": "Mario Persona",	 "name": "	#605 Uma triplice pergunta	",	 "length": "	04:06	",	 "file": "	https://www.mediafire.com/file/	7xby4d8zibp5bjp	/	#605 Uma triplice pergunta	"},
{"track":	296	,	 "voz": "Mario Persona",	 "name": "	#606 “Observem a figueira”	",	 "length": "	03:50	",	 "file": "	https://www.mediafire.com/file/	5467l1d4mp4m5na	/	#606 “Observem a figueira”	"},
{"track":	297	,	 "voz": "Mario Persona",	 "name": "	#607 Nao passara esta geracao”	",	 "length": "	03:44	",	 "file": "	https://www.mediafire.com/file/	kga9el1rz7bfqq5	/	#607 Nao passara esta geracao”	"},
{"track":	298	,	 "voz": "Mario Persona",	 "name": "	#608 'A espera da ira	",	 "length": "	04:06	",	 "file": "	https://www.mediafire.com/file/	2e3sddhrir3r3qz	/	#608 'A espera da ira	"},
{"track":	299	,	 "voz": "Mario Persona",	 "name": "	#609 'A espera de Cristo	",	 "length": "	04:06	",	 "file": "	https://www.mediafire.com/file/	aewa9nvczsgab8d	/	#609 'A espera de Cristo	"},
{"track":	300	,	 "voz": "Mario Persona",	 "name": "	#610 Judas quer ficar rico	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	wrale9qykhyxg2d	/	#610 Judas quer ficar rico	"},
{"track":	301	,	 "voz": "Mario Persona",	 "name": "	#611 Encontro marcado com a morte	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	2qlh2dyaho6h18w	/	#611 Encontro marcado com a morte	"},
{"track":	302	,	 "voz": "Mario Persona",	 "name": "	#612 Perguntar nao ofende	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	nyw7dv3bdi9oqxk	/	#612 Perguntar nao ofende	"},
{"track":	303	,	 "voz": "Mario Persona",	 "name": "	#613 Onde e como adorar	",	 "length": "	03:40	",	 "file": "	https://www.mediafire.com/file/	otbtq8dqi3633ss	/	#613 Onde e como adorar	"},
{"track":	304	,	 "voz": "Mario Persona",	 "name": "	#614 Fim dos templos	",	 "length": "	03:49	",	 "file": "	https://www.mediafire.com/file/	nddn7f7bn9kul81	/	#614 Fim dos templos	"},
{"track":	305	,	 "voz": "Mario Persona",	 "name": "	#615 O homem com o cantaro	",	 "length": "	03:31	",	 "file": "	https://www.mediafire.com/file/	zzec2aiv9fegs7c	/	#615 O homem com o cantaro	"},
{"track":	306	,	 "voz": "Mario Persona",	 "name": "	#616 Um parentese na Pascoa	",	 "length": "	03:20	",	 "file": "	https://www.mediafire.com/file/	744449rfibfoc4f	/	#616 Um parentese na Pascoa	"},
{"track":	307	,	 "voz": "Mario Persona",	 "name": "	#617 A copia do judaismo	",	 "length": "	03:19	",	 "file": "	https://www.mediafire.com/file/	r6xzxv8iuib2v6k	/	#617 A copia do judaismo	"},
{"track":	308	,	 "voz": "Mario Persona",	 "name": "	#618 Linguagem figurada	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	yzn5y9fhy9yry7l	/	#618 Linguagem figurada	"},
{"track":	309	,	 "voz": "Mario Persona",	 "name": "	#619 Coma do pao e beba do calice	",	 "length": "	03:51	",	 "file": "	https://www.mediafire.com/file/	1hgc9crw2jte4jf	/	#619 Coma do pao e beba do calice	"},
{"track":	310	,	 "voz": "Mario Persona",	 "name": "	#620 O pecado do mundo	",	 "length": "	03:33	",	 "file": "	https://www.mediafire.com/file/	gutwrqvmlkemujd	/	#620 O pecado do mundo	"},
{"track":	311	,	 "voz": "Mario Persona",	 "name": "	#621 Muitos, mas não todos	",	 "length": "	03:31	",	 "file": "	https://www.mediafire.com/file/	ei3vo24kbp891r3	/	#621 Muitos, mas não todos	"},
{"track":	312	,	 "voz": "Mario Persona",	 "name": "	#622 O calice da consolacao	",	 "length": "	03:53	",	 "file": "	https://www.mediafire.com/file/	2t3b4t9r3yam9x7	/	#622 O calice da consolacao	"},
{"track":	313	,	 "voz": "Mario Persona",	 "name": "	#623 Dois traidores	",	 "length": "	03:50	",	 "file": "	https://www.mediafire.com/file/	7ew1884p1x76nhm	/	#623 Dois traidores	"},
{"track":	314	,	 "voz": "Mario Persona",	 "name": "	#624 Menos e' mais	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	2mnb55w8k8mko2n	/	#624 Menos e' mais	"},
{"track":	315	,	 "voz": "Mario Persona",	 "name": "	#625 A recompensa	",	 "length": "	03:36	",	 "file": "	https://www.mediafire.com/file/	ra3abpf7g7p91ld	/	#625 A recompensa	"},
{"track":	316	,	 "voz": "Mario Persona",	 "name": "	#626 Mudanca radical	",	 "length": "	03:44	",	 "file": "	https://www.mediafire.com/file/	hta8o1b58ih6w1d	/	#626 Mudanca radical	"},
{"track":	317	,	 "voz": "Mario Persona",	 "name": "	#627 Briga de foice	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	llv7bkji817fo6k	/	#627 Briga de foice	"},
{"track":	318	,	 "voz": "Mario Persona",	 "name": "	#628 Da maldicao para a bencao	",	 "length": "	03:36	",	 "file": "	https://www.mediafire.com/file/	39hleket24shryd	/	#628 Da maldicao para a bencao	"},
{"track":	319	,	 "voz": "Mario Persona",	 "name": "	#629 Carne fraca, espirito pronto	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	fj997lewd7qdxv9	/	#629 Carne fraca, espirito pronto	"},
{"track":	320	,	 "voz": "Mario Persona",	 "name": "	#630 O beijo da traicao	",	 "length": "	03:49	",	 "file": "	https://www.mediafire.com/file/	d19a79ms1tsy7m5	/	#630 O beijo da traicao	"},
{"track":	321	,	 "voz": "Mario Persona",	 "name": "	#631 A defesa da fe'	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	m534xdlbfvc3yx9	/	#631 A defesa da fe'	"},
{"track":	322	,	 "voz": "Mario Persona",	 "name": "	#632 O ultimo milagre de Jesus	",	 "length": "	04:12	",	 "file": "	https://www.mediafire.com/file/	r1tc1169uw9vyca	/	#632 O ultimo milagre de Jesus	"},
{"track":	323	,	 "voz": "Mario Persona",	 "name": "	#633 A hora de voces	",	 "length": "	04:03	",	 "file": "	https://www.mediafire.com/file/	2yl4hyqj62xnc8g	/	#633 A hora de voces	"},
{"track":	324	,	 "voz": "Mario Persona",	 "name": "	#634 Quando o coracao esfria	",	 "length": "	03:44	",	 "file": "	https://www.mediafire.com/file/	ooozbhb8znyrx6x	/	#634 Quando o coracao esfria	"},
{"track":	325	,	 "voz": "Mario Persona",	 "name": "	#635 Sair chorando	",	 "length": "	03:50	",	 "file": "	https://www.mediafire.com/file/	gbwiu42awaz0dwu	/	#635 Sair chorando	"},
{"track":	326	,	 "voz": "Mario Persona",	 "name": "	#636 Livrando-se de Jesus	",	 "length": "	03:57	",	 "file": "	https://www.mediafire.com/file/	4szv994v8drs79q	/	#636 Livrando-se de Jesus	"},
{"track":	327	,	 "voz": "Mario Persona",	 "name": "	#637 A volta do rejeitado	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	kddd95dy8lsdrd0	/	#637 A volta do rejeitado	"},
{"track":	328	,	 "voz": "Mario Persona",	 "name": "	#638 Quer ver milagres	",	 "length": "	03:25	",	 "file": "	https://www.mediafire.com/file/	xib4qyiga3yo54k	/	#638 Quer ver milagres	"},
{"track":	329	,	 "voz": "Mario Persona",	 "name": "	#639 Imagine	",	 "length": "	03:57	",	 "file": "	https://www.mediafire.com/file/	7k3ii5aijmywz54	/	#639 Imagine	"},
{"track":	330	,	 "voz": "Mario Persona",	 "name": "	#640 Dia de eleicao	",	 "length": "	03:38	",	 "file": "	https://www.mediafire.com/file/	xe73v4y0nkv5sk6	/	#640 Dia de eleicao	"},
{"track":	331	,	 "voz": "Mario Persona",	 "name": "	#641 Futuro sombrio	",	 "length": "	03:42	",	 "file": "	https://www.mediafire.com/file/	a1af663rc4d131j	/	#641 Futuro sombrio	"},
{"track":	332	,	 "voz": "Mario Persona",	 "name": "	#642 Entre ladroes	",	 "length": "	03:53	",	 "file": "	https://www.mediafire.com/file/	2m23sdgin4jfnzm	/	#642 Entre ladroes	"},
{"track":	333	,	 "voz": "Mario Persona",	 "name": "	#643 Hoje no Paraiso	",	 "length": "	03:42	",	 "file": "	https://www.mediafire.com/file/	ucvtdv7g2c2hfcm	/	#643 Hoje no Paraiso	"},
{"track":	334	,	 "voz": "Mario Persona",	 "name": "	#644 Hoje e' o dia da salvacao	",	 "length": "	04:19	",	 "file": "	https://www.mediafire.com/file/	vc1sfp55wgmkc8l	/	#644 Hoje e' o dia da salvacao	"},
{"track":	335	,	 "voz": "Mario Persona",	 "name": "	#645 O ponto alto da historia	",	 "length": "	03:32	",	 "file": "	https://www.mediafire.com/file/	t16r25kzvav68c4	/	#645 O ponto alto da historia	"},
{"track":	336	,	 "voz": "Mario Persona",	 "name": "	#646 Rico ou pobre	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	bs8col11xxlnskt	/	#646 Rico ou pobre	"},
{"track":	337	,	 "voz": "Mario Persona",	 "name": "	#647 Crer no impossivel	",	 "length": "	03:21	",	 "file": "	https://www.mediafire.com/file/	kvrm9ozva81a5f7	/	#647 Crer no impossivel	"},
{"track":	338	,	 "voz": "Mario Persona",	 "name": "	#648 Nem razao, nem emocao	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	qfz832n36slink6	/	#648 Nem razao, nem emocao	"},
{"track":	339	,	 "voz": "Mario Persona",	 "name": "	#649 Pare de duvidar e creia!	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	mxdqst0kl548h2z	/	#649 Pare de duvidar e creia!	"},
{"track":	340	,	 "voz": "Mario Persona",	 "name": "	#650 Nova criacao	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	2l5pr85v758w4g2	/	#650 Nova criacao	"},
{"track":	341	,	 "voz": "Mario Persona",	 "name": "	#651 Todas as Escrituras	",	 "length": "	03:12	",	 "file": "	https://www.mediafire.com/file/	4c7j51ysvvzhkuq	/	#651 Todas as Escrituras	"},
{"track":	342	,	 "voz": "Mario Persona",	 "name": "	#652 Coisas sao abertas	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	wayy2sa1l6at2ii	/	#652 Coisas sao abertas	"},
{"track":	343	,	 "voz": "Mario Persona",	 "name": "	#653 Jerusalem	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	e3gh4wrcg45re2c	/	#653 Jerusalem	"},
{"track":	344	,	 "voz": "Mario Persona",	 "name": "	#654 Jesus no meio	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	bv61mulefpno9zy	/	#654 Jesus no meio	"},
{"track":	345	,	 "voz": "Mario Persona",	 "name": "	#655 Sua proxima piscadela	",	 "length": "	03:40	",	 "file": "	https://www.mediafire.com/file/	zb1ehi7hem43uty	/	#655 Sua proxima piscadela	"},
{"track":	346	,	 "voz": "Mario Persona",	 "name": "	#656 Da Lei para a graca	",	 "length": "	03:43	",	 "file": "	https://www.mediafire.com/file/	zm6n515zqzlx26x	/	#656 Da Lei para a graca	"},
{"track":	347	,	 "voz": "Mario Persona",	 "name": "	#657 Alegria, alegria!	",	 "length": "	03:59	",	 "file": "	https://www.mediafire.com/file/	njup5atkc2rvtbl	/	#657 Alegria, alegria!	"},


                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////

            ],
            buildPlaylist = $.each(tracks, function (key, value) {
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
                // $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + ' - ' + trackVoz + '</div><div class="plLength">' + trackLength + '</div></div></li>');
                $('#plList').append('<li ><div class="plItem" ><div class="plNum">'+ trackNumber + '.</div><div class="plTitle"><a target="_blank" href="' + trackFile + '"><i class="fa fa-download fa-lg"></i></a> ' + trackName + ' - (' + trackVoz + ')' + '</div><div class="plLength">' + trackLength + '</div></div></li>');

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
		
		// ANIMATE Start
                $('html,body').animate({
                scrollTop: $(".plSel").offset().top-240
                });
		// ANIMATE End


                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
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


// Título da playlist
document.write('<title>Audio Player - 3 Min Lucas</title>')

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
    //initialize plyr
    plyr.setup($('#audio1'), {});

  } else
  {
    //initialize plyr
    plyr.setup($('#audio1'), {});
  }
// }
