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
 
{"track":	1	,	 "name": "	Floripa 2000 - 1a. Reunião aberta - Atos 20 - Lemão	",	 "length": "	55:22",	 "file": "	http://www.mediafire.com/file/	d0b2vyr00fquq6c	/	"},
{"track":	2	,	 "name": "	Floripa 2000 - 2a. Reunião aberta - Ron Klassen	",	 "length": "	51:51",	 "file": "	http://www.mediafire.com/file/	745u59n7ivw755j	/	"},
{"track":	3	,	 "name": "	Floripa 2000 - Estudos sobre 1a. Tess. - 1a. parte	",	 "length": "	57:59",	 "file": "	http://www.mediafire.com/file/	9k1m5fr8klb9sss	/	"},
{"track":	4	,	 "name": "	Floripa 2000 - Estudos sobre 1a. Tess. - 2a. parte	",	 "length": "	01:18:12	",	 "file": "	http://www.mediafire.com/file/	d9rsuns7ktanynf	/	"},
{"track":	5	,	 "name": "	Floripa 2000 - Pregação do evangelho - Lucas 14 - Lemão	",	 "length": "	45:33",	 "file": "	http://www.mediafire.com/file/	nwsj47i97igmxqc	/	"},
{"track":	6	,	 "name": "	Floripa 2000 - Pregação para crentes - A Vinda do Senhor - Ron Klassen	",	 "length": "	52:49",	 "file": "	http://www.mediafire.com/file/	c09ssu555ery355	/	"},
{"track":	7	,	 "name": "	Floripa 2000 - Pregação para jovens - Samuel - Lemão	",	 "length": "	43:12",	 "file": "	http://www.mediafire.com/file/	27zcx8ntwb80zs2	/	"},
{"track":	8	,	 "name": "	Floripa 2001 - 1a. Reunião Aberta - Mateus 16 13-20 - Lemão	",	 "length": "	32:12",	 "file": "	http://www.mediafire.com/file/	fcz2j5iu5s8r037	/	"},
{"track":	9	,	 "name": "	Floripa 2001 - 2a. Reunião Aberta - Materus 16 18-19 - Lemão	",	 "length": "	01:00:34	",	 "file": "	http://www.mediafire.com/file/	k82aqck2lrik228	/	"},
{"track":	10	,	 "name": "	Floripa 2001 - 3a. Reunião Aberta - Lavar os pés - Bernardo	",	 "length": "	40:45",	 "file": "	http://www.mediafire.com/file/	1f7xaf848a84q1d	/	"},
{"track":	11	,	 "name": "	Floripa 2001 - Estudos sobre 1a. Pedro 1 - 1a. parte	",	 "length": "	48:47",	 "file": "	http://www.mediafire.com/file/	g8f350tn8sfd7y8	/	"},
{"track":	12	,	 "name": "	Floripa 2001 - Estudos sobre 1a. Pedro 1 - 2a. parte	",	 "length": "	39:27",	 "file": "	http://www.mediafire.com/file/	itmfvs23ay7tevq	/	"},
{"track":	13	,	 "name": "	Floripa 2001 - Estudos sobre 1a. Pedro 1 - 3a. parte	",	 "length": "	46:41",	 "file": "	http://www.mediafire.com/file/	cxlv3806wtu7lex	/	"},
{"track":	14	,	 "name": "	Floripa 2001 - Pregação do Evangelho  - Lucas 7 - Lemão	",	 "length": "	50:37",	 "file": "	http://www.mediafire.com/file/	1ta7oat41fl09qn	/	"},
{"track":	15	,	 "name": "	Floripa 2001 - Pregação para Jovens - Barnabé - Luiz	",	 "length": "	18:53",	 "file": "	http://www.mediafire.com/file/	s5rk27d83vg9qm3	/	"},
{"track":	16	,	 "name": "	Floripa 2002 - 1a. Reunião aberta - Jou - Lemão - Peixe	",	 "length": "	52:50",	 "file": "	http://www.mediafire.com/file/	deq58u7z1x1ka11	/	"},
{"track":	17	,	 "name": "	Floripa 2002 - 2a. Reunião aberta - Peixe - Lemão - Bernado - Jou	",	 "length": "	51:44",	 "file": "	http://www.mediafire.com/file/	mc555m5iy25bh4o	/	"},
{"track":	18	,	 "name": "	Floripa 2002 - Estudos sobre Colossenses 1a. parte	",	 "length": "	43:42",	 "file": "	http://www.mediafire.com/file/	ieh6eacb8876xde	/	"},
{"track":	19	,	 "name": "	Floripa 2002 - Estudos sobre Colossenses 2a. parte	",	 "length": "	28:51",	 "file": "	http://www.mediafire.com/file/	bmrettk92sbotvl	/	"},
{"track":	20	,	 "name": "	Floripa 2002 - Estudos sobre Colossenses 3a. parte	",	 "length": "	42:19",	 "file": "	http://www.mediafire.com/file/	r6tn0rr1d0i34tu	/	"},
{"track":	21	,	 "name": "	Floripa 2002 - Pregação aos Jovens - Saindo do Egito - Lemão	",	 "length": "	42:07",	 "file": "	http://www.mediafire.com/file/	qwho37sekp2n2o4	/	"},
{"track":	22	,	 "name": "	Floripa 2003 - Aberta - Albert - Luiz - Jou	",	 "length": "	41:16",	 "file": "	http://www.mediafire.com/file/	oxfp3g5wyjmuke9	/	"},
{"track":	23	,	 "name": "	Floripa 2003 - Estudos sobre 2 Pedro 2 - 1a. parte	",	 "length": "	35:14",	 "file": "	http://www.mediafire.com/file/	tqea3wl2w1d1bo8	/	"},
{"track":	24	,	 "name": "	Floripa 2003 - Estudos sobre 2 Pedro 2 - 2a. parte	",	 "length": "	27:23",	 "file": "	http://www.mediafire.com/file/	1qwteqbao9k22ba	/	"},
{"track":	25	,	 "name": "	Floripa 2003 - Estudos sobre 2 Pedro 2 - 3a. parte	",	 "length": "	36:43",	 "file": "	http://www.mediafire.com/file/	b4ci7ldkkdeqoyh	/	"},
{"track":	26	,	 "name": "	Floripa 2003 - Pregação do Evangelho - Lucas 15 - Lemão	",	 "length": "	44:18",	 "file": "	http://www.mediafire.com/file/	xe5dzbhpew21cmz	/	"},
{"track":	27	,	 "name": "	Floripa 2003 - Pregação para crentes - Peixe - Sábado	",	 "length": "	36:13",	 "file": "	http://www.mediafire.com/file/	e2xbg6wuaggya83	/	"},
{"track":	28	,	 "name": "	Floripa 2004 - Aberta - Fernando - Bernardo	",	 "length": "	30:28",	 "file": "	http://www.mediafire.com/file/	97fq7zgdi6n01r6	/	"},
{"track":	29	,	 "name": "	Floripa 2004 - Aberta - John Kemp	",	 "length": "	44:45",	 "file": "	http://www.mediafire.com/file/	ddqhu2v2098h7ac	/	"},
{"track":	30	,	 "name": "	Floripa 2004 - Escola dominical - John Kemp	",	 "length": "	28:51",	 "file": "	http://www.mediafire.com/file/	2cx2g9i4o7d3scd	/	"},
{"track":	31	,	 "name": "	Floripa 2004 - Estudos sobre Hebreus 2 - parte 1	",	 "length": "	52:48",	 "file": "	http://www.mediafire.com/file/	90dfv7nwdigcruw	/	"},
{"track":	32	,	 "name": "	Floripa 2004 - Estudos sobre Hebreus 2 - parte 2	",	 "length": "	29:32",	 "file": "	http://www.mediafire.com/file/	zd3h9tdtcl7ry8a	/	"},
{"track":	33	,	 "name": "	Floripa 2004 - Estudos sobre Hebreus 2 - parte 3	",	 "length": "	32:32",	 "file": "	http://www.mediafire.com/file/	1tdiuaygj89wosc	/	"},
{"track":	34	,	 "name": "	Floripa 2004 - Pregação aos Crentes - Mateus 18.20 - Lineu	",	 "length": "	48:40",	 "file": "	http://www.mediafire.com/file/	7b264fl1rmjqip6	/	"},
{"track":	35	,	 "name": "	Floripa 2004 - Pregação aos Jovens - 2 Timóteo 2 - Lemão	",	 "length": "	29:04",	 "file": "	http://www.mediafire.com/file/	hcmp1nl9ahxuagu	/	"},
{"track":	36	,	 "name": "	Floripa 2004 - Pregação do Evangelho - Lucas 23 -  Lemão	",	 "length": "	45:46",	 "file": "	http://www.mediafire.com/file/	w1cus5q1164uepe	/	"},
{"track":	37	,	 "name": "	Floripa 2005 - 1a Aberta - Lemão & Lineu	",	 "length": "	44:30",	 "file": "	http://www.mediafire.com/file/	zhc2a8cqwdbu5hr	/	"},
{"track":	38	,	 "name": "	Floripa 2005 - 2a Aberta - Lemão  Lineu & Fernando	",	 "length": "	22:14",	 "file": "	http://www.mediafire.com/file/	xbbk266h88rm5h5	/	"},
{"track":	39	,	 "name": "	Floripa 2005 - Escola Dominical - Luiz	",	 "length": "	14:23",	 "file": "	http://www.mediafire.com/file/	1ugxiwann9rw9xi	/	"},
{"track":	40	,	 "name": "	Floripa 2005 - Estudos sobre João 1 - parte 1	",	 "length": "	39:05",	 "file": "	http://www.mediafire.com/file/	54rvgbdjc33sla9	/	"},
{"track":	41	,	 "name": "	Floripa 2005 - Estudos sobre João 1 - parte 2	",	 "length": "	29:23",	 "file": "	http://www.mediafire.com/file/	xns1u4qtolxom3z	/	"},
{"track":	42	,	 "name": "	Floripa 2005 - Estudos sobre João 1 - parte 3	",	 "length": "	37:09",	 "file": "	http://www.mediafire.com/file/	1zf8mj1m32rzeor	/	"},
{"track":	43	,	 "name": "	Floripa 2005 - Pregação aos Jovens - Bernardo	",	 "length": "	22:27",	 "file": "	http://www.mediafire.com/file/	xee525k2m59o6tl	/	"},
{"track":	44	,	 "name": "	Floripa 2005 - Pregação do Evangelho - João 5 - Lineu	",	 "length": "	35:47",	 "file": "	http://www.mediafire.com/file/	loi0n08nimbgt11	/	"},
{"track":	45	,	 "name": "	Floripa 2005 - Pregação para Crentes - Lemão	",	 "length": "	51:54",	 "file": "	http://www.mediafire.com/file/	yshw3loszlnhziy	/	"},
{"track":	46	,	 "name": "	Floripa 2006 - 1a. Aberta - 'Compra a verdade' - Pizzi - Lemão - Peixe	",	 "length": "	44:02",	 "file": "	http://www.mediafire.com/file/	3y8chcrekwku187	/	"},
{"track":	47	,	 "name": "	Floripa 2006 - 2a. Aberta - Ministério para Edificação - Peixe - Lemão - Bernado	",	 "length": "	44:33",	 "file": "	http://www.mediafire.com/file/	rauinibe9nj9jjr	/	"},
{"track":	48	,	 "name": "	Floripa 2006 - 3a. Aberta - O Pai busca adoradores - Bernardo - Lineu - Luiz - Pizzi	",	 "length": "	48:46",	 "file": "	http://www.mediafire.com/file/	05ysymg3g8bjz58	/	"},
{"track":	49	,	 "name": "	Floripa 2006 - Estudos sobre Tito 2 - parte 1	",	 "length": "	38:56",	 "file": "	http://www.mediafire.com/file/	gbn9icisv1c6z7m	/	"},
{"track":	50	,	 "name": "	Floripa 2006 - Estudos sobre Tito 2 - parte 2	",	 "length": "	24:07",	 "file": "	http://www.mediafire.com/file/	729hw41766w4h68	/	"},
{"track":	51	,	 "name": "	Floripa 2006 - Estudos sobre as Sete Igrejas - Peixe	",	 "length": "	50:46",	 "file": "	http://www.mediafire.com/file/	kcnrc1h3l7rm3bk	/	"},
{"track":	52	,	 "name": "	Floripa 2006 - Pregação aos jovens - Lineu	",	 "length": "	52:47",	 "file": "	http://www.mediafire.com/file/	k1602vqej1hojp3	/	"},
{"track":	53	,	 "name": "	Floripa 2006 - Pregação do Evangelho - Caim e Abel - Lemão	",	 "length": "	44:08",	 "file": "	http://www.mediafire.com/file/	p8j6fj9sitn7rt9	/	"},
{"track":	54	,	 "name": "	Floripa 2007 - Aberta 1 - 2 Reis 4.8 - Toni - Bernardo - Lemão	",	 "length": "	39:21",	 "file": "	http://www.mediafire.com/file/	31bjur1vxsnu5f4	/	"},
{"track":	55	,	 "name": "	Floripa 2007 - Aberta 2 - Lemão e Bernardo	",	 "length": "	14:35",	 "file": "	http://www.mediafire.com/file/	ureo6m89a13dm4z	/	"},
{"track":	56	,	 "name": "	Floripa 2007 - Escolinha dominical - Pizzinatto	",	 "length": "	21:37",	 "file": "	http://www.mediafire.com/file/	1yi47wbfcv7kbdw	/	"},
{"track":	57	,	 "name": "	Floripa 2007 - Estudos sobre Judas - parte 1	",	 "length": "	27:05",	 "file": "	http://www.mediafire.com/file/	774fo67qixgme1x	/	"},
{"track":	58	,	 "name": "	Floripa 2007 - Estudos sobre Judas - parte 2	",	 "length": "	24:43",	 "file": "	http://www.mediafire.com/file/	iqe5m66ewcxymkm	/	"},
{"track":	59	,	 "name": "	Floripa 2007 - Estudos sobre Judas - parte 3	",	 "length": "	43:06",	 "file": "	http://www.mediafire.com/file/	dbv96x58fj57g90	/	"},
{"track":	60	,	 "name": "	Floripa 2007 - Pregaçã aos jovens - Lucas 16 - Os dois filhos - Toni	",	 "length": "	25:58",	 "file": "	http://www.mediafire.com/file/	8vew8n5y5887h9g	/	"},
{"track":	61	,	 "name": "	Floripa 2007 - Pregação aos crentes - Espargimento do sangue sete vezes - Ernie Munck	",	 "length": "	27:24",	 "file": "	http://www.mediafire.com/file/	n9pekck1439ab8t	/	"},
{"track":	62	,	 "name": "	Floripa 2007 - Pregação do evangelho - Hebreus 1 - Lemão	",	 "length": "	39:07",	 "file": "	http://www.mediafire.com/file/	qpyx6llmvpz3yl8	/	"},
{"track":	63	,	 "name": "	Floripa 2008 - 1a. Aberta - Gideão - Lemão e Pizzi	",	 "length": "	01:02:24	",	 "file": "	http://www.mediafire.com/file/	vqd61r7hkmnf8i8	/	"},
{"track":	64	,	 "name": "	Floripa 2008 - 2a. Aberta - Sofrimentos - Jou - Bernardo - Lemão - Pizzi e Lineu	",	 "length": "	41:36",	 "file": "	http://www.mediafire.com/file/	6f9b7p6zxu2dhsd	/	"},
{"track":	65	,	 "name": "	Floripa 2008 - Escolinha Dominical - A mesma Palavra - Toni	",	 "length": "	13:29",	 "file": "	http://www.mediafire.com/file/	9kq2sab9hm92a7b	/	"},
{"track":	66	,	 "name": "	Floripa 2008 - Estudos sobre Atos 9 - parte 1	",	 "length": "	55:26",	 "file": "	http://www.mediafire.com/file/	iwjtgbn6n1gz69n	/	"},
{"track":	67	,	 "name": "	Floripa 2008 - Estudos sobre Atos 9 - parte 2	",	 "length": "	39:06",	 "file": "	http://www.mediafire.com/file/	n05d451263b1a8a	/	"},
{"track":	68	,	 "name": "	Floripa 2008 - Estudos sobre Atos 9 - parte 3	",	 "length": "	17:55",	 "file": "	http://www.mediafire.com/file/	cywz811by24e049	/	"},
{"track":	69	,	 "name": "	Floripa 2008 - Pregação do evangelho - O Evangelho que Paulo pregava - Lineu	",	 "length": "	41:08",	 "file": "	http://www.mediafire.com/file/	v01lx9t5p1wlgh8	/	"},
{"track":	70	,	 "name": "	Floripa 2008 - Pregação para crentes - Vara de Moisés e de Aarão - Douglas Buchannan	",	 "length": "	42:53",	 "file": "	http://www.mediafire.com/file/	d48152hm6dowudu	/	"},
{"track":	71	,	 "name": "	Floripa 2008 - Pregação para jovens - Jovens no livro de Atos - Lemão	",	 "length": "	38:06",	 "file": "	http://www.mediafire.com/file/	ifbxmetj1gwvgmb	/	"},
{"track":	72	,	 "name": "	Floripa 2009 - Aberta - Lemão & Bernardo - À Deus e à Palavra da Sua graça	",	 "length": "	26:18",	 "file": "	http://www.mediafire.com/file/	5rmr50nej1c2bpb	/	"},
{"track":	73	,	 "name": "	Floripa 2009 - Aberta - Lemão & Pizzi	",	 "length": "	42:13",	 "file": "	http://www.mediafire.com/file/	9sp99h7ac1c9wbc	/	"},
{"track":	74	,	 "name": "	Floripa 2009 - Escolinha dominical - Pizzinatto	",	 "length": "	19:47",	 "file": "	http://www.mediafire.com/file/	a2r5r2db4vf71p2	/	"},
{"track":	75	,	 "name": "	Floripa 2009 - Estudos sobre 2a Timóteo 2 - parte 1	",	 "length": "	42:12",	 "file": "	http://www.mediafire.com/file/	66l7z0lfwn6bvuv	/	"},
{"track":	76	,	 "name": "	Floripa 2009 - Estudos sobre 2a Timóteo 2 - parte 2	",	 "length": "	32:33",	 "file": "	http://www.mediafire.com/file/	whfl667y8cp6bfw	/	"},
{"track":	77	,	 "name": "	Floripa 2009 - Estudos sobre 2a Timóteo 2 - parte 3	",	 "length": "	01:04:28	",	 "file": "	http://www.mediafire.com/file/	yx7ind7cavyfbdo	/	"},
{"track":	78	,	 "name": "	Floripa 2009 - Pregação do evangelho - Lucas 4 - Lemão	",	 "length": "	32:42",	 "file": "	http://www.mediafire.com/file/	7mmmb77l2m9cc6l	/	"},
{"track":	79	,	 "name": "	Floripa 2009 - Pregação para crentes - Andar arrependido - Lemão	",	 "length": "	38:21",	 "file": "	http://www.mediafire.com/file/	0xtb29d5xx92h5g	/	"},
{"track":	80	,	 "name": "	Floripa 2009 - Pregação para jovens - Discípulos - Daniel Brimlow	",	 "length": "	59:07",	 "file": "	http://www.mediafire.com/file/	ucxhj1iioa5c080	/	"},
{"track":	81	,	 "name": "	Floripa 2010 - Aberta - Línguas - Lemão & Peixe	",	 "length": "	46:37",	 "file": "	http://www.mediafire.com/file/	okcpbsudkoj7h69	/	"},
{"track":	82	,	 "name": "	Floripa 2010 - Aberta - Manutenção do casamento e do lar cristão - Peixe	",	 "length": "	44:00",	 "file": "	http://www.mediafire.com/file/	fhahhagj11lqzca	/	"},
{"track":	83	,	 "name": "	Floripa 2010 - Escolinha dominical - Arca de Noé - Luiz	",	 "length": "	31:21",	 "file": "	http://www.mediafire.com/file/	37y9k42yddykkqt	/	"},
{"track":	84	,	 "name": "	Floripa 2010 - Estudo Atos 10 - 1a. parte	",	 "length": "	48:46",	 "file": "	http://www.mediafire.com/file/	drrfrlikaoru217	/	"},
{"track":	85	,	 "name": "	Floripa 2010 - Estudo Atos 10 - 2a. parte	",	 "length": "	33:24",	 "file": "	http://www.mediafire.com/file/	03d2chah427qb2a	/	"},
{"track":	86	,	 "name": "	Floripa 2010 - Estudo Atos 10 - 3a. parte	",	 "length": "	49:46",	 "file": "	http://www.mediafire.com/file/	gm1k9592c0b9jqg	/	"},
{"track":	87	,	 "name": "	Floripa 2010 - Pregação para crentes - Interrupções divinas necessárias - Peixe	",	 "length": "	46:14",	 "file": "	http://www.mediafire.com/file/	g43lyy4y2uqki28	/	"},
{"track":	88	,	 "name": "	Floripa 2010 - Pregação para jovens - Vida eterna e vida sem fim - Lemão	",	 "length": "	29:02",	 "file": "	http://www.mediafire.com/file/	dex49rh4d35s4q3	/	"},
{"track":	89	,	 "name": "	Floripa 2010 -Pregação do Evangelho - Lemão	",	 "length": "	33:57",	 "file": "	http://www.mediafire.com/file/	8s7pbb7nwf1e7rd	/	"},
{"track":	90	,	 "name": "	Floripa 2011 - Aberta - Peixe e Pizzi	",	 "length": "	58:20",	 "file": "	http://www.mediafire.com/file/	ii6mqqapatt7klq	/	"},
{"track":	91	,	 "name": "	Floripa 2011 - Escolinha Dominical - Ovelhinha perdida - Luiz	",	 "length": "	17:47",	 "file": "	http://www.mediafire.com/file/	zovepqrteg1z5gx	/	"},
{"track":	92	,	 "name": "	Floripa 2011 - Estudos sobre 1a Coríntios 1 - parte 1	",	 "length": "	54:37",	 "file": "	http://www.mediafire.com/file/	94w5623xcf5mdup	/	"},
{"track":	93	,	 "name": "	Floripa 2011 - Estudos sobre 1a Coríntios 1 - parte 2	",	 "length": "	30:44",	 "file": "	http://www.mediafire.com/file/	59nn71e6yi72w8m	/	"},
{"track":	94	,	 "name": "	Floripa 2011 - Estudos sobre 1a Coríntios 1 - parte 3	",	 "length": "	56:13",	 "file": "	http://www.mediafire.com/file/	3jubwc16tdclj82	/	"},
{"track":	95	,	 "name": "	Floripa 2011 - Pregação do Evangelho - Lemão	",	 "length": "	39:49",	 "file": "	http://www.mediafire.com/file/	49cbww5m4baxz0t	/	"},
{"track":	96	,	 "name": "	Floripa 2011 - Pregação para crentes - 'Eu edificarei a Minha igreja' - Peixe	",	 "length": "	56:50",	 "file": "	http://www.mediafire.com/file/	0c7b6mv2h5hhs1c	/	"},
{"track":	97	,	 "name": "	Floripa 2011 - Pregação para crentes - A casa de Deus e a grande casa - Peixe	",	 "length": "	40:28",	 "file": "	http://www.mediafire.com/file/	zz11sv50nv0cgwt	/	"},
{"track":	98	,	 "name": "	Floripa 2011 - Pregação para jovens - O discípulo a quem Jesus amava - Lemão	",	 "length": "	35:14",	 "file": "	http://www.mediafire.com/file/	2hfurr20eh2998b	/	"},
{"track":	99	,	 "name": "	Floripa 2012 - 1o. Estudo sobre 1a. Coríntios - cap 12	",	 "length": "	52:53",	 "file": "	http://www.mediafire.com/file/	bpcvhvj5wmbiggm	/	"},
{"track":	100	,	 "name": "	Floripa 2012 - 2o. Estudo sobre 1a. Coríntios - cap 14	",	 "length": "	41:54",	 "file": "	http://www.mediafire.com/file/	gry4373g8uiwbwk	/	"},
{"track":	101	,	 "name": "	Floripa 2012 - 3o. Estudo sobre 1a. Coríntios - cap 2	",	 "length": "	56:23",	 "file": "	http://www.mediafire.com/file/	cqm1zt49zcn1lz3	/	"},
{"track":	102	,	 "name": "	Floripa 2012 - Aberta - A graça que restaura - Lemão	",	 "length": "	38:24",	 "file": "	http://www.mediafire.com/file/	r8uln4bgvy6f55z	/	"},
{"track":	103	,	 "name": "	Floripa 2012 - Aberta - O Tribunal de Cristo - Luiz - Lemão - Bernardo - Pizzinatto	",	 "length": "	42:46",	 "file": "	http://www.mediafire.com/file/	vmozzm5obukr4bo	/	"},
{"track":	104	,	 "name": "	Floripa 2012 - Escolinha dominical - Zaqueu - Luiz	",	 "length": "	17:09",	 "file": "	http://www.mediafire.com/file/	2n8gov7svvhc0fh	/	"},
{"track":	105	,	 "name": "	Floripa 2012 - Pregação do evangelho - João 8 - Bernardo	",	 "length": "	32:51",	 "file": "	http://www.mediafire.com/file/	ews8kt9wb3mhlrk	/	"},
{"track":	106	,	 "name": "	Floripa 2012 - Pregação do evangelho - Lucas 15 - Lemão	",	 "length": "	37:43",	 "file": "	http://www.mediafire.com/file/	exq8si2z0sllbm3	/	"},
{"track":	107	,	 "name": "	Floripa 2012 - Pregação para crentes -  Ressurreição - Lineu	",	 "length": "	47:01",	 "file": "	http://www.mediafire.com/file/	rscaqr2m22ddxni	/	"},
{"track":	108	,	 "name": "	Floripa 2013 - Aberta - As portas do templo - Lemão	",	 "length": "	39:26",	 "file": "	http://www.mediafire.com/file/	t7b87w2686597qb	/	"},
{"track":	109	,	 "name": "	Floripa 2013 - Aberta - Lemão e John Kemp	",	 "length": "	48:11",	 "file": "	http://www.mediafire.com/file/	l1cnhb62oq70uda	/	"},
{"track":	110	,	 "name": "	Floripa 2013 - Escolinha dominical - Páscoa - Luiz	",	 "length": "	15:26",	 "file": "	http://www.mediafire.com/file/	vcp65udt90155qn	/	"},
{"track":	111	,	 "name": "	Floripa 2013 - Estudos sobre Filipenses 2 - 1a. parte	",	 "length": "	51:32",	 "file": "	http://www.mediafire.com/file/	n1q6df9st5gdha8	/	"},
{"track":	112	,	 "name": "	Floripa 2013 - Estudos sobre Filipenses 2 - 2a. parte	",	 "length": "	36:21",	 "file": "	http://www.mediafire.com/file/	f53362j54abym33	/	"},
{"track":	113	,	 "name": "	Floripa 2013 - Estudos sobre Filipenses 2 e 3 - 3a. parte	",	 "length": "	01:02:43	",	 "file": "	http://www.mediafire.com/file/	pb0uuhzy6u6gsbg	/	"},
{"track":	114	,	 "name": "	Floripa 2013 - Pregação do Evangelho - Lucas 7 - Lemão	",	 "length": "	39:21",	 "file": "	http://www.mediafire.com/file/	5n0sw89i2rvr44n	/	"},
{"track":	115	,	 "name": "	Floripa 2013 - Pregação do Evangelho - Nicodemos e a mulher samaritana - Lineu	",	 "length": "	38:34",	 "file": "	http://www.mediafire.com/file/	qz6t0b29quunawy	/	"},
{"track":	116	,	 "name": "	Floripa 2013 - Pregação para crentes - Quatro exortações - John Kemp	",	 "length": "	53:21",	 "file": "	http://www.mediafire.com/file/	eyxepgdgkwqqvew	/	"},
{"track":	117	,	 "name": "	Floripa 2014 - Aberta - Filhos de Deus - James Read, Bernardo e Luiz	",	 "length": "	42:11",	 "file": "	http://www.mediafire.com/file/	xn8nk6ocbtv2x1e	/	"},
{"track":	118	,	 "name": "	Floripa 2014 - Aberta - Marcos - Petrus e Bernardo	",	 "length": "	28:18",	 "file": "	http://www.mediafire.com/file/	53kcy0j553ye5v8	/	"},
{"track":	119	,	 "name": "	Floripa 2014 - Escolinha dominical - Conformados a Cristo - Luiz	",	 "length": "	14:46",	 "file": "	http://www.mediafire.com/file/	p4z62u37919bq4x	/	"},
{"track":	120	,	 "name": "	Floripa 2014 - Estudos sobre 1 Corintios 14 - 1a parte	",	 "length": "	54:51",	 "file": "	http://www.mediafire.com/file/	ve98cqnldcs41va	/	"},
{"track":	121	,	 "name": "	Floripa 2014 - Estudos sobre 1 Corintios 14 - 2a parte	",	 "length": "	34:45",	 "file": "	http://www.mediafire.com/file/	y3mn9st06c1d7lk	/	"},
{"track":	122	,	 "name": "	Floripa 2014 - Estudos sobre 1 Corintios 14 - 3a parte	",	 "length": "	01:03:39	",	 "file": "	http://www.mediafire.com/file/	uedbayovfel7et5	/	"},
{"track":	123	,	 "name": "	Floripa 2014 - Pregação do evangelho - John Kemp	",	 "length": "	39:52",	 "file": "	http://www.mediafire.com/file/	79xgc1pjb5o2812	/	"},
{"track":	124	,	 "name": "	Floripa 2014 - Pregação do evangelho - Zaqueu - Lineu	",	 "length": "	35:52",	 "file": "	http://www.mediafire.com/file/	gto0ycyc5nu7zx7	/	"},
{"track":	125	,	 "name": "	Floripa 2014 - Pregação para crentes - Separação do mundo - John Kemp	",	 "length": "	54:48",	 "file": "	http://www.mediafire.com/file/	s63hz0s854nv9az	/	"},
{"track":	126	,	 "name": "	Floripa 2015 - Aberta - Liberdade cristã - Pizzinatto e Lineu	",	 "length": "	45:04",	 "file": "	http://www.mediafire.com/file/	h7t5vcuxralc227	/	"},
{"track":	127	,	 "name": "	Floripa 2015 - Aberta - O Espírito Santo - Petrus, Lemão e Pizzinatto	",	 "length": "	56:35",	 "file": "	http://www.mediafire.com/file/	mednraery5xsncy	/	"},
{"track":	128	,	 "name": "	Floripa 2015 - Escolinha dominical - Copos cheios - Luiz	",	 "length": "	15:48",	 "file": "	http://www.mediafire.com/file/	exncc05a2b9c5jj	/	"},
{"track":	129	,	 "name": "	Floripa 2015 - Estudos sobre 1 João 1 - 1a parte	",	 "length": "	01:03:57	",	 "file": "	http://www.mediafire.com/file/	z8m8562w4ic07ly	/	"},
{"track":	130	,	 "name": "	Floripa 2015 - Estudos sobre 1 João 1 - 2a parte	",	 "length": "	45:00",	 "file": "	http://www.mediafire.com/file/	djspx9xg6c1bdgk	/	"},
{"track":	131	,	 "name": "	Floripa 2015 - Estudos sobre 1 João 1 - 3a parte	",	 "length": "	01:09:45	",	 "file": "	http://www.mediafire.com/file/	w1lxtn7em320dlc	/	"},
{"track":	132	,	 "name": "	Floripa 2015 - Pregação do evangelho - John Kemp	",	 "length": "	42:19",	 "file": "	http://www.mediafire.com/file/	ludsxm7ey42xqak	/	"},
{"track":	133	,	 "name": "	Floripa 2015 - Pregação do evangelho - Lemão	",	 "length": "	37:11",	 "file": "	http://www.mediafire.com/file/	gjs2jyo6zum12vj	/	"},
{"track":	134	,	 "name": "	Floripa 2015 - Pregação para crentes - Tempos - Bob Thonney	",	 "length": "	49:50",	 "file": "	http://www.mediafire.com/file/	v3neou2v0xpcijc	/	"},
{"track":	135	,	 "name": "	Floripa 2016 - Aberta - Autoridades - Pizzinatto	",	 "length": "	51:23",	 "file": "	http://www.mediafire.com/file/	6x7hal09xzawlo3	/	"},
{"track":	136	,	 "name": "	Floripa 2016 - Aberta - Lemão e Bernardo	",	 "length": "	32:28",	 "file": "	http://www.mediafire.com/file/	0u8qq591we48soe	/	"},
{"track":	137	,	 "name": "	Floripa 2016 - Escolinha dominical - Atenção - Luiz	",	 "length": "	19:23",	 "file": "	http://www.mediafire.com/file/	jczfsmdyc0cso4y	/	"},
{"track":	138	,	 "name": "	Floripa 2016 - Estudos sobre 2 Coríntios 5 - 1a parte	",	 "length": "	59:26",	 "file": "	http://www.mediafire.com/file/	w1k4dfkpqn91f98	/	"},
{"track":	139	,	 "name": "	Floripa 2016 - Estudos sobre 2 Coríntios 5 - 2a parte	",	 "length": "	37:06",	 "file": "	http://www.mediafire.com/file/	s1ybgyymyb2ddmi	/	"},
{"track":	140	,	 "name": "	Floripa 2016 - Estudos sobre 2 Coríntios 5 - 3a parte	",	 "length": "	01:16:46	",	 "file": "	http://www.mediafire.com/file/	nf821y18dyryykc	/	"},
{"track":	141	,	 "name": "	Floripa 2016 - Pregação do evangelho - John Kemp	",	 "length": "	58:51",	 "file": "	http://www.mediafire.com/file/	4ddi6dkg0t6s64j	/	"},
{"track":	142	,	 "name": "	Floripa 2016 - Pregação do evangelho - Lemão	",	 "length": "	45:41",	 "file": "	http://www.mediafire.com/file/	nobasd4udnkpk81	/	"},
{"track":	143	,	 "name": "	Floripa 2016 - Pregação para crentes - John	",	 "length": "	57:23",	 "file": "	http://www.mediafire.com/file/	p53urdmkd8jn8ki	/	"},
{"track":	144	,	 "name": "	Floripa 2017-Aberta-A-carne-Pìzzinatto	",	 "length": "	33:55",	 "file": "	http://www.mediafire.com/file/	2wbwyory6tk3jbc	/	"},
{"track":	145	,	 "name": "	Floripa 2017-Aberta-A-carne-parte-2	",	 "length": "	34:14",	 "file": "	http://www.mediafire.com/file/	g9a3ydoa26ah9gl	/	"},
{"track":	146	,	 "name": "	Floripa 2017-Escolinha-dominical-Pizzinatto	",	 "length": "	17:54",	 "file": "	http://www.mediafire.com/file/	8t266vhqaaax5ho	/	"},
{"track":	147	,	 "name": "	Floripa 2017-Estudos-1-Tessalonicenses-4	",	 "length": "	01:15",	 "file": "	http://www.mediafire.com/file/	vv4dnlpz65nkxgh	/	"},
{"track":	148	,	 "name": "	Floripa 2017-Estudos-1-Tessalonicenses-parte-1	",	 "length": "	57:51",	 "file": "	http://www.mediafire.com/file/	3g1vpkcv4occcod	/	"},
{"track":	149	,	 "name": "	Floripa 2017-Estudos-1-Tessalonicenses-parte-2	",	 "length": "	43:15",	 "file": "	http://www.mediafire.com/file/	99dt3f19tmpxd46	/	"},
{"track":	150	,	 "name": "	Floripa 2017-Pregacao-do-Evangelho-John-Kemp	",	 "length": "	51:58",	 "file": "	http://www.mediafire.com/file/	2hjve5rqchqa428	/	"},
{"track":	151	,	 "name": "	Floripa 2017-Pregacao-do-evangelho-Bernardo Lenzi	",	 "length": "	36:22",	 "file": "	http://www.mediafire.com/file/	tcncyn0u05fjl7u	/	"},
{"track":	152	,	 "name": "	Floripa 2017-Pregacao-para-crentes-Lemao	",	 "length": "	44:46",	 "file": "	http://www.mediafire.com/file/	ok86sebt4qrajvk	/	"},
{"track":	153	,	 "name": "	Floripa 2018-Estudos sobre Filipenses 2-1a parte	",	 "length": "	01:09:32	",	 "file": "	http://www.mediafire.com/file/	hj1pf7795bav3e8	/	"},
{"track":	154	,	 "name": "	Floripa 2018-Estudos sobre Filipenses 2-2a parte	",	 "length": "	42:27",	 "file": "	http://www.mediafire.com/file/	2phtri9nklhpskp	/	"},
{"track":	155	,	 "name": "	Floripa 2018-Estudos sobre Filipenses 2-3a parte	",	 "length": "	57:43",	 "file": "	http://www.mediafire.com/file/	562x9ydf3iv6ioh	/	"},
{"track":	156	,	 "name": "	Floripa 2018-Pregacao para crentes-A doutrina de Paulo-Robert Boulard	",	 "length": "	01:01:25	",	 "file": "	http://www.mediafire.com/file/	e4y5146qhxq1xsf	/	"},
{"track":	157	,	 "name": "	Floripa 2018-Pregação do evangelho-Lineu	",	 "length": "	38:31",	 "file": "	http://www.mediafire.com/file/	cr9549davxjj58m	/	"},
{"track":	158	,	 "name": "	Floripa 2018-Reuniao aberta-Lemao	",	 "length": "	32:46",	 "file": "	http://www.mediafire.com/file/	p02pxvd569g8yjk	/	"},
{"track":	159	,	 "name": "	Floripa 2019-Escolinha dominical-Atração	",	 "length": "	22:08",	 "file": "	http://www.mediafire.com/file/	ybjl0bdd78brq7g	/	"},
{"track":	160	,	 "name": "	Floripa 2019-Estudos sobre 3a Joao-parte 1	",	 "length": "	01:01:10	",	 "file": "	http://www.mediafire.com/file/	208m7pxq0bnim40	/	"},
{"track":	161	,	 "name": "	Floripa 2019-Estudos sobre 3a Joao-parte 2	",	 "length": "	44:21",	 "file": "	http://www.mediafire.com/file/	d6h9erz95rueucm	/	"},
{"track":	162	,	 "name": "	Floripa 2019-Estudos sobre 3a Joao-parte 3	",	 "length": "	48:54",	 "file": "	http://www.mediafire.com/file/	i7c7dmr2yh7868d	/	"},
{"track":	163	,	 "name": "	Floripa 2019-Pregacao do evangelho-Pizzi	",	 "length": "	39:57",	 "file": "	http://www.mediafire.com/file/	8glupf6p1tsmtqs	/	"},
{"track":	164	,	 "name": "	Floripa 2019-Pregacao do evangelho-Toni	",	 "length": "	41:45",	 "file": "	http://www.mediafire.com/file/	5cy25llj8iq6uvd	/	"},
{"track":	165	,	 "name": "	Floripa 2019-Pregacao para crentes-As coisas que servem para a paz-Lineu	",	 "length": "	01:09:15	",	 "file": "	http://www.mediafire.com/file/	79vcj7daccja49o	/	"},
{"track":	166	,	 "name": "	Floripa 2019-Reunião aberta-Petrus e Bernardo	",	 "length": "	43:42",	 "file": "	http://www.mediafire.com/file/	158q9j6cx5cdodw	/	"},
{"track":	167	,	 "name": "	Floripa 2019-Reunião aberta-Pizzi, Petrus e Bernardo	",	 "length": "	54:32",	 "file": "	http://www.mediafire.com/file/	igo2bd16g2zv862	/	"},

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
    }
});

// Título da playlist
document.write('<title>Audio Player - Conferência - Floripa</title>')

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
