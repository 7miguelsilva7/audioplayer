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

                { "track": 1,	 "voz": "Mario Persona",	 "name": "	 So pode ser verdade	", "length": "	02:31	", "file": "	https://www.mediafire.com/file/	tttbf3lc3bmkc45	/	 So pode ser verdade	" },
                { "track": 2,	 "voz": "Mario Persona",	 "name": "	 De mal a pior	", "length": "	02:15	", "file": "	https://www.mediafire.com/file/	aph1bhppv1b85om	/	 De mal a pior	" },
                { "track": 3,	 "voz": "Mario Persona",	 "name": "	 O precursor do Rei	", "length": "	03:42	", "file": "	https://www.mediafire.com/file/	opj2zkt1cyb74r0	/	 O precursor do Rei	" },
                { "track": 4,	 "voz": "Mario Persona",	 "name": "	 Bem acompanhado	", "length": "	03:06	", "file": "	https://www.mediafire.com/file/	7thaa6cjip7yhrb	/	 Bem acompanhado	" },
                { "track": 5,	 "voz": "Mario Persona",	 "name": "	 As respostas	", "length": "	02:56	", "file": "	https://www.mediafire.com/file/	u0jmg46hxbiojtb	/	 As respostas	" },
                { "track": 6,	 "voz": "Mario Persona",	 "name": "	 Pessoa ou religiao	", "length": "	03:31	", "file": "	https://www.mediafire.com/file/	v5l48080ah5ffs3	/	 Pessoa ou religiao	" },
                { "track": 7,	 "voz": "Mario Persona",	 "name": "	 Pescadores de homens	", "length": "	03:25	", "file": "	https://www.mediafire.com/file/	d9bj3u77a7q79go	/	 Pescadores de homens	" },
                { "track": 8,	 "voz": "Mario Persona",	 "name": "	 Os perdedores	", "length": "	03:17	", "file": "	https://www.mediafire.com/file/	wh1zpat97lcnobx	/	 Os perdedores	" },
                { "track": 9,	 "voz": "Mario Persona",	 "name": "	 Voce nao conhece	", "length": "	03:34	", "file": "	https://www.mediafire.com/file/	xtlm85htku9059y	/	 Voce nao conhece	" },
                { "track": 10,	 "voz": "Mario Persona",	 "name": "	 Filho ou hipocrita	", "length": "	03:35	", "file": "	https://www.mediafire.com/file/	ifv2uvqc77rfgki	/	 Filho ou hipocrita	" },
                { "track": 11,	 "voz": "Mario Persona",	 "name": "	 Pai nosso	", "length": "	03:26	", "file": "	https://www.mediafire.com/file/	09z0nk7rr7owof1	/	 Pai nosso	" },
                { "track": 12,	 "voz": "Mario Persona",	 "name": "	 Tesouros	", "length": "	02:54	", "file": "	https://www.mediafire.com/file/	o9y4agp39nmd4qi	/	 Tesouros	" },
                { "track": 13,	 "voz": "Mario Persona",	 "name": "	 Mais do que aves e lirios	", "length": "	03:34	", "file": "	https://www.mediafire.com/file/	7x13brkcahhao5b	/	 Mais do que aves e lirios	" },
                { "track": 14,	 "voz": "Mario Persona",	 "name": "	 Na trave	", "length": "	03:15	", "file": "	https://www.mediafire.com/file/	cuf1k348yly1wt6	/	 Na trave	" },
                { "track": 15,	 "voz": "Mario Persona",	 "name": "	 A oracao	", "length": "	03:33	", "file": "	https://www.mediafire.com/file/	dr1kns4fxnxxw8t	/	 A oracao	" },
                { "track": 16,	 "voz": "Mario Persona",	 "name": "	 A porta estreita	", "length": "	03:22	", "file": "	https://www.mediafire.com/file/	ylb2ch7jz3ddh5d	/	 A porta estreita	" },
                { "track": 17,	 "voz": "Mario Persona",	 "name": "	 O caminho estreito	", "length": "	03:16	", "file": "	https://www.mediafire.com/file/	7ojmn42agyuw5sb	/	 O caminho estreito	" },
                { "track": 18,	 "voz": "Mario Persona",	 "name": "	 Os falsos profetas	", "length": "	03:43	", "file": "	https://www.mediafire.com/file/	od2wvfvs26b204r	/	 Os falsos profetas	" },
                { "track": 19,	 "voz": "Mario Persona",	 "name": "	 A Rocha	", "length": "	03:10	", "file": "	https://www.mediafire.com/file/	m9ue0uy5qa07mfu	/	 A Rocha	" },
                { "track": 20,	 "voz": "Mario Persona",	 "name": "	 O leproso	", "length": "	03:20	", "file": "	https://www.mediafire.com/file/	p6vyo64cp58sj67	/	 O leproso	" },
                { "track": 21,	 "voz": "Mario Persona",	 "name": "	 O servo do centuriao	", "length": "	03:28	", "file": "	https://www.mediafire.com/file/	p6vc86b54o44z1d	/	 O servo do centuriao	" },
                { "track": 22,	 "voz": "Mario Persona",	 "name": "	 Salvo para servir	", "length": "	03:21	", "file": "	https://www.mediafire.com/file/	6ocb8u2ccb47e33	/	 Salvo para servir	" },
                { "track": 23,	 "voz": "Mario Persona",	 "name": "	 A prioridade	", "length": "	03:18	", "file": "	https://www.mediafire.com/file/	pd3m3fctgqhii85	/	 A prioridade	" },
                { "track": 24,	 "voz": "Mario Persona",	 "name": "	 A tempestade	", "length": "	02:42	", "file": "	https://www.mediafire.com/file/	sd4n7fez3nzi6bc	/	 A tempestade	" },
                { "track": 25,	 "voz": "Mario Persona",	 "name": "	 Demonios e porcos	", "length": "	03:39	", "file": "	https://www.mediafire.com/file/	j2wrxu1d69y9xcp	/	 Demonios e porcos	" },
                { "track": 26,	 "voz": "Mario Persona",	 "name": "	 O paralitico	", "length": "	02:29	", "file": "	https://www.mediafire.com/file/	d5tc4o8t7udlp9o	/	 O paralitico	" },
                { "track": 27,	 "voz": "Mario Persona",	 "name": "	 Publicanos e pecadores	", "length": "	03:25	", "file": "	https://www.mediafire.com/file/	jugbcnc7ckkk2gp	/	 Publicanos e pecadores	" },
                { "track": 28,	 "voz": "Mario Persona",	 "name": "	 Vinho novo	", "length": "	03:46	", "file": "	https://www.mediafire.com/file/	8s9a3ddoaavf2i9	/	 Vinho novo	" },
                { "track": 29,	 "voz": "Mario Persona",	 "name": "	 A menina e a mulher	", "length": "	03:12	", "file": "	https://www.mediafire.com/file/	ns6ja8sj6j20tyg	/	 A menina e a mulher	" },
                { "track": 30,	 "voz": "Mario Persona",	 "name": "	 Vida visao e testemunho	", "length": "	03:15	", "file": "	https://www.mediafire.com/file/	cqgo6iiirwivu28	/	 Vida visao e testemunho	" },
                { "track": 31,	 "voz": "Mario Persona",	 "name": "	 Os trabalhadores	", "length": "	03:47	", "file": "	https://www.mediafire.com/file/	fw89ofy5xnaipfs	/	 Os trabalhadores	" },
                { "track": 32,	 "voz": "Mario Persona",	 "name": "	 Doze apostolos	", "length": "	03:14	", "file": "	https://www.mediafire.com/file/	l4y9l523g7mbfuz	/	 Doze apostolos	" },
                { "track": 33,	 "voz": "Mario Persona",	 "name": "	 Missao possivel	", "length": "	03:48	", "file": "	https://www.mediafire.com/file/	ka4dmsjivgsv2pk	/	 Missao possivel	" },
                { "track": 34,	 "voz": "Mario Persona",	 "name": "	 Duvidas	", "length": "	03:01	", "file": "	https://www.mediafire.com/file/	g76v6cc53ia4ecc	/	 Duvidas	" },
                { "track": 35,	 "voz": "Mario Persona",	 "name": "	 Criancas mimadas	", "length": "	02:59	", "file": "	https://www.mediafire.com/file/	pdwd8idzbbfzi1e	/	 Criancas mimadas	" },
                { "track": 36,	 "voz": "Mario Persona",	 "name": "	 Os filhos da sabedoria	", "length": "	02:49	", "file": "	https://www.mediafire.com/file/	z2r4e9p9jj2onc7	/	 Os filhos da sabedoria	" },
                { "track": 37,	 "voz": "Mario Persona",	 "name": "	 Os pequeninos	", "length": "	02:47	", "file": "	https://www.mediafire.com/file/	sm969dchd49kv8s	/	 Os pequeninos	" },
                { "track": 38,	 "voz": "Mario Persona",	 "name": "	 Vinde a mim	", "length": "	03:02	", "file": "	https://www.mediafire.com/file/	45icx6ftutfib5s	/	 Vinde a mim	" },
                { "track": 39,	 "voz": "Mario Persona",	 "name": "	 O sabado	", "length": "	03:36	", "file": "	https://www.mediafire.com/file/	0vuyk64ga643tag	/	 O sabado	" },
                { "track": 40,	 "voz": "Mario Persona",	 "name": "	 A mao atrofiada	", "length": "	02:51	", "file": "	https://www.mediafire.com/file/	vt6p3r3awr5ab7r	/	 A mao atrofiada	" },
                { "track": 41,	 "voz": "Mario Persona",	 "name": "	 O servo	", "length": "	02:59	", "file": "	https://www.mediafire.com/file/	usf24qh16sbhcwu	/	 O servo	" },
                { "track": 42,	 "voz": "Mario Persona",	 "name": "	 Invejosos religiosos	", "length": "	02:51	", "file": "	https://www.mediafire.com/file/	9o6x2f393klpva8	/	 Invejosos religiosos	" },
                { "track": 43,	 "voz": "Mario Persona",	 "name": "	 Pecado sem perdao	", "length": "	03:05	", "file": "	https://www.mediafire.com/file/	lq29ovq98gq8iqa	/	 Pecado sem perdao	" },
                { "track": 44,	 "voz": "Mario Persona",	 "name": "	 Raca de viboras	", "length": "	03:00	", "file": "	https://www.mediafire.com/file/	6c8bl501wmmw509	/	 Raca de viboras	" },
                { "track": 45,	 "voz": "Mario Persona",	 "name": "	 Sinais	", "length": "	03:02	", "file": "	https://www.mediafire.com/file/	xawatk8bednsl0c	/	 Sinais	" },
                { "track": 46,	 "voz": "Mario Persona",	 "name": "	 A familia de Jesus	", "length": "	02:37	", "file": "	https://www.mediafire.com/file/	ymo63ogpr8n8xmk	/	 A familia de Jesus	" },
                { "track": 47,	 "voz": "Mario Persona",	 "name": "	 Parabolas	", "length": "	02:59	", "file": "	https://www.mediafire.com/file/	57847p5drx7uu5n	/	 Parabolas	" },
                { "track": 48,	 "voz": "Mario Persona",	 "name": "	 O semeador	", "length": "	02:42	", "file": "	https://www.mediafire.com/file/	3401yynl3bwdvdc	/	 O semeador	" },
                { "track": 49,	 "voz": "Mario Persona",	 "name": "	 Trigo e joio	", "length": "	02:53	", "file": "	https://www.mediafire.com/file/	bq0fczwmm2v8wem	/	 Trigo e joio	" },
                { "track": 50,	 "voz": "Mario Persona",	 "name": "	 A semente de mostarda	", "length": "	03:09	", "file": "	https://www.mediafire.com/file/	ditej59s75bv45g	/	 A semente de mostarda	" },
                { "track": 51,	 "voz": "Mario Persona",	 "name": "	 O fermento	", "length": "	03:04	", "file": "	https://www.mediafire.com/file/	w1ee13s215dia36	/	 O fermento	" },
                { "track": 52,	 "voz": "Mario Persona",	 "name": "	 O tesouro	", "length": "	02:52	", "file": "	https://www.mediafire.com/file/	o0y1uc6lav21isp	/	 O tesouro	" },
                { "track": 53,	 "voz": "Mario Persona",	 "name": "	 A perola	", "length": "	03:13	", "file": "	https://www.mediafire.com/file/	mtz1wap3mix12su	/	 A perola	" },
                { "track": 54,	 "voz": "Mario Persona",	 "name": "	 Peixes	", "length": "	03:26	", "file": "	https://www.mediafire.com/file/	lt8u71eiozsn1he	/	 Peixes	" },
                { "track": 55,	 "voz": "Mario Persona",	 "name": "	 Coisas novas e velhas	", "length": "	03:04	", "file": "	https://www.mediafire.com/file/	at2y2a8g43jkeg1	/	 Coisas novas e velhas	" },
                { "track": 56,	 "voz": "Mario Persona",	 "name": "	 Incredulos	", "length": "	03:19	", "file": "	https://www.mediafire.com/file/	myr44tf7ctq3qh2	/	 Incredulos	" },
                { "track": 57,	 "voz": "Mario Persona",	 "name": "	 Consciencia	", "length": "	03:07	", "file": "	https://www.mediafire.com/file/	7f4t7gb0c7m9akg	/	 Consciencia	" },
                { "track": 58,	 "voz": "Mario Persona",	 "name": "	 A multiplicacao dos paes	", "length": "	03:04	", "file": "	https://www.mediafire.com/file/	vg2l5dhjfna8ne1	/	 A multiplicacao dos paes	" },
                { "track": 59,	 "voz": "Mario Persona",	 "name": "	 O temporal	", "length": "	03:13	", "file": "	https://www.mediafire.com/file/	goc6tx5c9r7obfe	/	 O temporal	" },
                { "track": 60,	 "voz": "Mario Persona",	 "name": "	 Tradicao	", "length": "	02:53	", "file": "	https://www.mediafire.com/file/	u22np2tf75rto8k	/	 Tradicao	" },
                { "track": 61,	 "voz": "Mario Persona",	 "name": "	 Migalhas	", "length": "	02:52	", "file": "	https://www.mediafire.com/file/	o8tame4lm08vjn4	/	 Migalhas	" },
                { "track": 62,	 "voz": "Mario Persona",	 "name": "	 O sinal de Jonas	", "length": "	03:06	", "file": "	https://www.mediafire.com/file/	067wmmabpdtuayh	/	 O sinal de Jonas	" },
                { "track": 63,	 "voz": "Mario Persona",	 "name": "	 Fariseus e saduceus	", "length": "	03:13	", "file": "	https://www.mediafire.com/file/	2apma1dme6dldyu	/	 Fariseus e saduceus	" },
                { "track": 64,	 "voz": "Mario Persona",	 "name": "	 Revelacao	", "length": "	03:15	", "file": "	https://www.mediafire.com/file/	nwqwsnm86br46ge	/	 Revelacao	" },
                { "track": 65,	 "voz": "Mario Persona",	 "name": "	 A igreja	", "length": "	03:09	", "file": "	https://www.mediafire.com/file/	cnderkm348png33	/	 A igreja	" },
                { "track": 66,	 "voz": "Mario Persona",	 "name": "	 O adversario	", "length": "	03:14	", "file": "	https://www.mediafire.com/file/	5lkk1l7xzvatf1k	/	 O adversario	" },
                { "track": 67,	 "voz": "Mario Persona",	 "name": "	 A transfiguracao	", "length": "	03:08	", "file": "	https://www.mediafire.com/file/	9fit9bajx9hy22j	/	 A transfiguracao	" },
                { "track": 68,	 "voz": "Mario Persona",	 "name": "	 Marionetes	", "length": "	02:50	", "file": "	https://www.mediafire.com/file/	n2p0sdd5ndsybcj	/	 Marionetes	" },
                { "track": 69,	 "voz": "Mario Persona",	 "name": "	 Grandes pequenos	", "length": "	03:03	", "file": "	https://www.mediafire.com/file/	6n4mgp46wif24qq	/	 Grandes pequenos	" },
                { "track": 70,	 "voz": "Mario Persona",	 "name": "	 A ovelha perdida	", "length": "	03:10	", "file": "	https://www.mediafire.com/file/	dr97b4cvuurdmvy	/	 A ovelha perdida	" },
                { "track": 71,	 "voz": "Mario Persona",	 "name": "	 Setenta vezes sempre	", "length": "	03:11	", "file": "	https://www.mediafire.com/file/	fqc11xal021a1ea	/	 Setenta vezes sempre	" },
                { "track": 72,	 "voz": "Mario Persona",	 "name": "	 A divida impagavel	", "length": "	03:02	", "file": "	https://www.mediafire.com/file/	pea3b4zfpedpvgp	/	 A divida impagavel	" },
                { "track": 73,	 "voz": "Mario Persona",	 "name": "	 O milionario	", "length": "	03:31	", "file": "	https://www.mediafire.com/file/	qy1ouz5htv0fshz	/	 O milionario	" },
                { "track": 74,	 "voz": "Mario Persona",	 "name": "	 O camelo e a agulha	", "length": "	03:10	", "file": "	https://www.mediafire.com/file/	di0ugsxtiparf39	/	 O camelo e a agulha	" },
                { "track": 75,	 "voz": "Mario Persona",	 "name": "	 Justica e graca	", "length": "	03:16	", "file": "	https://www.mediafire.com/file/	mcu1bf1qkl5ro09	/	 Justica e graca	" },
                { "track": 76,	 "voz": "Mario Persona",	 "name": "	 O tema recorrente	", "length": "	03:01	", "file": "	https://www.mediafire.com/file/	cq5k9erp33q23o0	/	 O tema recorrente	" },
                { "track": 77,	 "voz": "Mario Persona",	 "name": "	 Na base da piramide	", "length": "	03:05	", "file": "	https://www.mediafire.com/file/	8df7anm9zbng60b	/	 Na base da piramide	" },
                { "track": 78,	 "voz": "Mario Persona",	 "name": "	 Cegos individuais	", "length": "	02:53	", "file": "	https://www.mediafire.com/file/	9svfki0iu95b9uj	/	 Cegos individuais	" },
                { "track": 79,	 "voz": "Mario Persona",	 "name": "	 O Messias	", "length": "	03:15	", "file": "	https://www.mediafire.com/file/	u8nd32qmgi2zloz	/	 O Messias	" },
                { "track": 80,	 "voz": "Mario Persona",	 "name": "	 O templo	", "length": "	03:34	", "file": "	https://www.mediafire.com/file/	jileiu16i3bv71g	/	 O templo	" },
                { "track": 81,	 "voz": "Mario Persona",	 "name": "	 Covil de ladroes	", "length": "	03:10	", "file": "	https://www.mediafire.com/file/	gnj839k883na308	/	 Covil de ladroes	" },
                { "track": 82,	 "voz": "Mario Persona",	 "name": "	 A figueira	", "length": "	03:00	", "file": "	https://www.mediafire.com/file/	hukidun5a5wce70	/	 A figueira	" },
                { "track": 83,	 "voz": "Mario Persona",	 "name": "	 A autoridade de Jesus	", "length": "	03:12	", "file": "	https://www.mediafire.com/file/	46vw246mi659oy1	/	 A autoridade de Jesus	" },
                { "track": 84,	 "voz": "Mario Persona",	 "name": "	 Da boca para fora	", "length": "	03:27	", "file": "	https://www.mediafire.com/file/	nwmp0199w1eoaor	/	 Da boca para fora	" },
                { "track": 85,	 "voz": "Mario Persona",	 "name": "	 A pedra de tropeco	", "length": "	03:05	", "file": "	https://www.mediafire.com/file/	ab32qrw3ws6axf1	/	 A pedra de tropeco	" },
                { "track": 86,	 "voz": "Mario Persona",	 "name": "	 A festa de casamento	", "length": "	03:17	", "file": "	https://www.mediafire.com/file/	guwzfelsz6ulegi	/	 A festa de casamento	" },
                { "track": 87,	 "voz": "Mario Persona",	 "name": "	 Traje a rigor	", "length": "	03:09	", "file": "	https://www.mediafire.com/file/	2pb9lt3b2bwcj7z	/	 Traje a rigor	" },
                { "track": 88,	 "voz": "Mario Persona",	 "name": "	 Eu Cesar e Deus	", "length": "	03:26	", "file": "	https://www.mediafire.com/file/	7eojjat7om4ztvn	/	 Eu Cesar e Deus	" },
                { "track": 89,	 "voz": "Mario Persona",	 "name": "	 Palavra poder fidelidade	", "length": "	03:09	", "file": "	https://www.mediafire.com/file/	qnpazyv4lvc9qex	/	 Palavra poder fidelidade	" },
                { "track": 90,	 "voz": "Mario Persona",	 "name": "	 O grande mandamento	", "length": "	03:37	", "file": "	https://www.mediafire.com/file/	s1c8sneb7gb7k5c	/	 O grande mandamento	" },
                { "track": 91,	 "voz": "Mario Persona",	 "name": "	 O segundo mandamento	", "length": "	03:38	", "file": "	https://www.mediafire.com/file/	h9bgc0hdf1zu1j6	/	 O segundo mandamento	" },
                { "track": 92,	 "voz": "Mario Persona",	 "name": "	 O clero	", "length": "	03:17	", "file": "	https://www.mediafire.com/file/	abwca49c5p9q8bf	/	 O clero	" },
                { "track": 93,	 "voz": "Mario Persona",	 "name": "	 A hipocrisia de Pedro	", "length": "	03:08	", "file": "	https://www.mediafire.com/file/	l6cm3joj39s1a2q	/	 A hipocrisia de Pedro	" },
                { "track": 94,	 "voz": "Mario Persona",	 "name": "	 Moda eclesiastica	", "length": "	03:08	", "file": "	https://www.mediafire.com/file/	2ex5uyg6oy3pc9y	/	 Moda eclesiastica	" },
                { "track": 95,	 "voz": "Mario Persona",	 "name": "	 Reverencia	", "length": "	03:28	", "file": "	https://www.mediafire.com/file/	tmaxoyi53q74mak	/	 Reverencia	" },
                { "track": 96,	 "voz": "Mario Persona",	 "name": "	 Profecia	", "length": "	03:31	", "file": "	https://www.mediafire.com/file/	ukfkw8bgc9basq8	/	 Profecia	" },
                { "track": 97,	 "voz": "Mario Persona",	 "name": "	 O parentese biblico	", "length": "	03:43	", "file": "	https://www.mediafire.com/file/	mm3hwrqea33n2jm	/	 O parentese biblico	" },
                { "track": 98,	 "voz": "Mario Persona",	 "name": "	 A tribulacao	", "length": "	03:35	", "file": "	https://www.mediafire.com/file/	ksgjeh24jbx3814	/	 A tribulacao	" },
                { "track": 99,	 "voz": "Mario Persona",	 "name": "	 A grande tribulacao	", "length": "	03:38	", "file": "	https://www.mediafire.com/file/	wa4vvmcbdtwura4	/	 A grande tribulacao	" },
                { "track": 100,	 "voz": "Mario Persona",	 "name": "	 A segunda vinda de Cristo	", "length": "	03:05	", "file": "	https://www.mediafire.com/file/	yev3ohhf1my944b	/	 A segunda vinda de Cristo	" },
                { "track": 101,	 "voz": "Mario Persona",	 "name": "	 Anjos que resgatam	", "length": "	03:45	", "file": "	https://www.mediafire.com/file/	964lkrtun5wtxlg	/	 Anjos que resgatam	" },
                { "track": 102,	 "voz": "Mario Persona",	 "name": "	 Anjos que condenam	", "length": "	03:08	", "file": "	https://www.mediafire.com/file/	x52x8j189b3a7f3	/	 Anjos que condenam	" },
                { "track": 103,	 "voz": "Mario Persona",	 "name": "	 Dois servos duas expectativas	", "length": "	03:21	", "file": "	https://www.mediafire.com/file/	cw7tgm0lhe7ni9u	/	 Dois servos duas expectativas	" },
                { "track": 104,	 "voz": "Mario Persona",	 "name": "	 As dez virgens	", "length": "	03:07	", "file": "	https://www.mediafire.com/file/	155pg3md58hliwa	/	 As dez virgens	" },
                { "track": 105,	 "voz": "Mario Persona",	 "name": "	 O grito da meia-noite	", "length": "	03:14	", "file": "	https://www.mediafire.com/file/	ursxk0zcx3bw9c8	/	 O grito da meia-noite	" },
                { "track": 106,	 "voz": "Mario Persona",	 "name": "	 Investimentos	", "length": "	03:28	", "file": "	https://www.mediafire.com/file/	i45w6whstz1643m	/	 Investimentos	" },
                { "track": 107,	 "voz": "Mario Persona",	 "name": "	 Bodes ovelhas pequeninos	", "length": "	03:45	", "file": "	https://www.mediafire.com/file/	fjvulwkq4q4lwro	/	 Bodes ovelhas pequeninos	" },
                { "track": 108,	 "voz": "Mario Persona",	 "name": "	 Livrando-se de Jesus	", "length": "	03:29	", "file": "	https://www.mediafire.com/file/	5ojzvbddoufbxa2	/	 Livrando-se de Jesus	" },
                { "track": 109,	 "voz": "Mario Persona",	 "name": "	 O desperdicio de Deus	", "length": "	03:22	", "file": "	https://www.mediafire.com/file/	7m8pl2lvr17md9w	/	 O desperdicio de Deus	" },
                { "track": 110,	 "voz": "Mario Persona",	 "name": "	 O que eu ganho com isso	", "length": "	03:15	", "file": "	https://www.mediafire.com/file/	xbq62zuli80o2q9	/	 O que eu ganho com isso	" },
                { "track": 111,	 "voz": "Mario Persona",	 "name": "	 A pascoa	", "length": "	03:26	", "file": "	https://www.mediafire.com/file/	7ngurvgiakpgdm4	/	 A pascoa	" },
                { "track": 112,	 "voz": "Mario Persona",	 "name": "	 A ceia	", "length": "	03:36	", "file": "	https://www.mediafire.com/file/	ja5hvicz797x5pl	/	 A ceia	" },
                { "track": 113,	 "voz": "Mario Persona",	 "name": "	 Getsemani	", "length": "	03:30	", "file": "	https://www.mediafire.com/file/	4xf0bf53sdmuc53	/	 Getsemani	" },
                { "track": 114,	 "voz": "Mario Persona",	 "name": "	 Preso	", "length": "	03:07	", "file": "	https://www.mediafire.com/file/	y2o3fokbcib35lf	/	 Preso	" },
                { "track": 115,	 "voz": "Mario Persona",	 "name": "	 O julgamento	", "length": "	03:17	", "file": "	https://www.mediafire.com/file/	banbg85ile2ifec	/	 O julgamento	" },
                { "track": 116,	 "voz": "Mario Persona",	 "name": "	 O arrependimento de Pedro	", "length": "	03:18	", "file": "	https://www.mediafire.com/file/	2k3aime5k7iagom	/	 O arrependimento de Pedro	" },
                { "track": 117,	 "voz": "Mario Persona",	 "name": "	 O arrependimento de Judas	", "length": "	03:24	", "file": "	https://www.mediafire.com/file/	fm0ds12u9jjgwje	/	 O arrependimento de Judas	" },
                { "track": 118,	 "voz": "Mario Persona",	 "name": "	 A voz do povo	", "length": "	03:25	", "file": "	https://www.mediafire.com/file/	35mb3m61n81688m	/	 A voz do povo	" },
                { "track": 119,	 "voz": "Mario Persona",	 "name": "	 A cruz	", "length": "	03:22	", "file": "	https://www.mediafire.com/file/	z4n6bfxgfc1f9xw	/	 A cruz	" },
                { "track": 120,	 "voz": "Mario Persona",	 "name": "	 O mau ladrao	", "length": "	03:24	", "file": "	https://www.mediafire.com/file/	ugdbph13kzv06g5	/	 O mau ladrao	" },
                { "track": 121,	 "voz": "Mario Persona",	 "name": "	 A morte voluntaria	", "length": "	03:45	", "file": "	https://www.mediafire.com/file/	crptsfkyeket0ub	/	 A morte voluntaria	" },
                { "track": 122,	 "voz": "Mario Persona",	 "name": "	 O veu rasgado	", "length": "	03:29	", "file": "	https://www.mediafire.com/file/	431wrsd76grl1lz	/	 O veu rasgado	" },
                { "track": 123,	 "voz": "Mario Persona",	 "name": "	 A sepultura	", "length": "	03:38	", "file": "	https://www.mediafire.com/file/	jbak4j9sjnvdhg0	/	 A sepultura	" },
                { "track": 124,	 "voz": "Mario Persona",	 "name": "	 A ressurreicao	", "length": "	03:35	", "file": "	https://www.mediafire.com/file/	b0ousmiyajbwfyy	/	 A ressurreicao	" },
                { "track": 125,	 "voz": "Mario Persona",	 "name": "	 O ressuscitado	", "length": "	03:40	", "file": "	https://www.mediafire.com/file/	j2pdt8kzp0j2fbt	/	 O ressuscitado	" },
                { "track": 126,	 "voz": "Mario Persona",	 "name": "	 A grande comissao	", "length": "	03:16	", "file": "	https://www.mediafire.com/file/	tozg7zclz0j7uaj	/	 A grande comissao	" },


                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////

            ],
            buildPlaylist = $.each(tracks, function (key, value) {
                var trackNumber = value.track,
                trackName = value.name,
                trackVoz = value.voz,
                trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + ' - ' + trackVoz + '</div><div class="plLength">' + trackLength + '</div></div></li>');
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

// Título da playlist
document.write('<title>Audio Player - 3 Min Mateus</title>')

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
    var a = window.location.href.split("#")[1];

if(localStorage.hasOwnProperty(audioNextKey[0].innerHTML))
  {     
    if (a == 0){
    location.replace(localStorage.getItem(audioNextKey[0].innerHTML))
    //initialize plyr
    plyr.setup($('#audio1'), {});
    }
    plyr.setup($('#audio1'), {});

  } else
  {
    //initialize plyr
    plyr.setup($('#audio1'), {});
  }
// }

