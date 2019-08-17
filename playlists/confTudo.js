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

{"track":	1	,	 "name": "	Limeira 1995 - Pregação para crentes - Cristo nossa justiça - Bill Warr	",	 "length": "	59:29	",	 "file": "	http://www.mediafire.com/file/	1e6v5e5z6j78595	/	"},
{"track":	2	,	 "name": "	Limeira 1997 - Estudos sobre Romanos 5 a 8 - 1a parte	",	 "length": "	38:06	",	 "file": "	http://www.mediafire.com/file/	i9eiuui3tgxmv1p	/	"},
{"track":	3	,	 "name": "	Limeira 1997 - Estudos sobre Romanos 5 a 8 - 2a parte	",	 "length": "	45:25	",	 "file": "	http://www.mediafire.com/file/	0jkpet55900e8pz	/	"},
{"track":	4	,	 "name": "	Limeira 1997 - Estudos sobre Romanos 5 a 8 - 3a parte	",	 "length": "	41:38	",	 "file": "	http://www.mediafire.com/file/	s0qptufqt8jena4	/	"},
{"track":	5	,	 "name": "	Limeira 1997 - Pregação do evangelho - Lemão	",	 "length": "	48:25	",	 "file": "	http://www.mediafire.com/file/	su1hdxlpxx4rpm5	/	"},
{"track":	6	,	 "name": "	Limeira 1997 - Pregação para crentes - Salvação da vida - Bill Warr	",	 "length": "	51:10	",	 "file": "	http://www.mediafire.com/file/	zeno5fx3cmepaui	/	"},
{"track":	7	,	 "name": "	Limeira 1998 - Escolinha dominical - Sementes - Pizzinatto	",	 "length": "	24:18	",	 "file": "	http://www.mediafire.com/file/	ax1gj0clq8v63gn	/	"},
{"track":	8	,	 "name": "	Limeira 1998 - Estudos sobre Hebreus 13 - 1a parte	",	 "length": "	52:58	",	 "file": "	http://www.mediafire.com/file/	cnfnatavchphd43	/	"},
{"track":	9	,	 "name": "	Limeira 1998 - Estudos sobre Hebreus 13 - 2a parte	",	 "length": "	47:46	",	 "file": "	http://www.mediafire.com/file/	grnncbr5k7ukc6q	/	"},
{"track":	10	,	 "name": "	Limeira 1998 - Estudos sobre Hebreus 13 - 3a parte	",	 "length": "	44:46	",	 "file": "	http://www.mediafire.com/file/	p3mk1wa2h65l9ag	/	"},
{"track":	11	,	 "name": "	Limeira 1998 - Pregação do evangelho - Lineu	",	 "length": "	44:26	",	 "file": "	http://www.mediafire.com/file/	59z90iibmlwcx7d	/	"},
{"track":	12	,	 "name": "	Limeira 1998 - Pregação para crentes - A casa de Deus nos últimos dias  - Bill Warr	",	 "length": "	55:11	",	 "file": "	http://www.mediafire.com/file/	x6u9r9i1ya37trv	/	"},
{"track":	13	,	 "name": "	Limeira 1998 - Pregação para crentes - Servir ao Senhor num espírito correto - Bob Thonney	",	 "length": "	56:06	",	 "file": "	http://www.mediafire.com/file/	kvad9o8yf9z7g7d	/	"},
{"track":	14	,	 "name": "	Limeira 1998 - Pregação para jovens - Títulos do Senhor Jesus Cristo - Bob Thonney	",	 "length": "	31:17	",	 "file": "	http://www.mediafire.com/file/	hma7ynp2sh372v3	/	"},
{"track":	15	,	 "name": "	Limeira 1999 - Estudos sobre 2 Pedro 1 - 1a parte	",	 "length": "	48:39	",	 "file": "	http://www.mediafire.com/file/	2hmh1au3yb2yo9k	/	"},
{"track":	16	,	 "name": "	Limeira 1999 - Pregação para crentes - Andar arrependido diante do Pai - Bill Warr	",	 "length": "	50:57	",	 "file": "	http://www.mediafire.com/file/	9syy8d5mj5s11b8	/	"},
{"track":	17	,	 "name": "	Limeira 1999 - Pregação para crentes - O princípio da fé é a base da vida cristã - Bill Warr	",	 "length": "	29:15	",	 "file": "	http://www.mediafire.com/file/	jh3t459zky66y4x	/	"},
{"track":	18	,	 "name": "	Limeira 1999 - Pregação para crentes - Velha e nova criação - Don Rule	",	 "length": "	57:14	",	 "file": "	http://www.mediafire.com/file/	hke77s2jej85p0z	/	"},
{"track":	19	,	 "name": "	Limeira 1999 - Reunião aberta - Don Rule e John Kemp	",	 "length": "	55:35	",	 "file": "	http://www.mediafire.com/file/	e79p4ckdw3o38dz	/	"},
{"track":	20	,	 "name": "	Limeira 2000 - Escolinha Dominical - Deus Criador Separador e Transformador - Luiz	",	 "length": "	16:14	",	 "file": "	http://www.mediafire.com/file/	eh5ra7tr33p1anx	/	"},
{"track":	21	,	 "name": "	Limeira 2000 - Estudo sobre Efésios 1 - 1a. parte	",	 "length": "	1:00:46	",	 "file": "	http://www.mediafire.com/file/	qylojkac3tpd7wj	/	"},
{"track":	22	,	 "name": "	Limeira 2000 - Estudo sobre Efésios 1 - 2a. parte	",	 "length": "	1:00:44	",	 "file": "	http://www.mediafire.com/file/	29akf36hfxn7d58	/	"},
{"track":	23	,	 "name": "	Limeira 2000 - Estudo sobre Efésios 1 - 3a. parte	",	 "length": "	31:15	",	 "file": "	http://www.mediafire.com/file/	gsybjsgds3b3c52	/	"},
{"track":	24	,	 "name": "	Limeira 2000 - Pregação do Evangelho - Lucas 24 - Batista	",	 "length": "	47:51	",	 "file": "	http://www.mediafire.com/file/	bkbpd7iucaon653	/	"},
{"track":	25	,	 "name": "	Limeira 2000 - Pregação para Crentes - Conformados à Cristo - Bill Warr	",	 "length": "	53:00	",	 "file": "	http://www.mediafire.com/file/	6of5km6c400jha6	/	"},
{"track":	26	,	 "name": "	Limeira 2000 - Pregação para Crentes - Livro de Apocalipse - Bob Thonney	",	 "length": "	56:00	",	 "file": "	http://www.mediafire.com/file/	r5cltnda88y7tup	/	"},
{"track":	27	,	 "name": "	Limeira 2000 - Pregação para Jovens - Dez mil - Douglas Buchanann	",	 "length": "	22:59	",	 "file": "	http://www.mediafire.com/file/	17abq4jau9qoe8n	/	"},
{"track":	28	,	 "name": "	Limeira 2000 - Reunião Aberta - Servir a Cristo - Douglas Buchanann & Bob Thonney	",	 "length": "	54:59	",	 "file": "	http://www.mediafire.com/file/	gicn7485bfcewfl	/	"},
{"track":	29	,	 "name": "	Limeira 2001 - Escolinha Dominical - A Camisa - Mário 	",	 "length": "	26:12	",	 "file": "	http://www.mediafire.com/file/	hb158s8w6kihpgr	/	"},
{"track":	30	,	 "name": "	Limeira 2001 - Estudos sobre João 1 - 1a. parte	",	 "length": "	1:02:58	",	 "file": "	http://www.mediafire.com/file/	6310c43on5bp634	/	"},
{"track":	31	,	 "name": "	Limeira 2001 - Estudos sobre João 1 - 2a. parte	",	 "length": "	44:05	",	 "file": "	http://www.mediafire.com/file/	yahem85ee7b6s8c	/	"},
{"track":	32	,	 "name": "	Limeira 2001 - Estudos sobre João 1 - 3a. parte	",	 "length": "	55:52	",	 "file": "	http://www.mediafire.com/file/	be33snrjtjj62z0	/	"},
{"track":	33	,	 "name": "	Limeira 2001 - Pregação aos Crentes 1 - Hebreus 1 - Bill	",	 "length": "	51:19	",	 "file": "	http://www.mediafire.com/file/	2a7aeuli9gbzmw3	/	"},
{"track":	34	,	 "name": "	Limeira 2001 - Pregação aos Crentes 2 - A Graça e o Governo de Deus - Douglas	",	 "length": "	58:11	",	 "file": "	http://www.mediafire.com/file/	ewzkqg6t236djju	/	"},
{"track":	35	,	 "name": "	Limeira 2001 - Pregação aos Jovens - João 21 - Douglas	",	 "length": "	18:26	",	 "file": "	http://www.mediafire.com/file/	9fh8jcy729z1b54	/	"},
{"track":	36	,	 "name": "	Limeira 2001 - Pregação do Evangelho - Mateus 17 - Lemão	",	 "length": "	45:32	",	 "file": "	http://www.mediafire.com/file/	qxrmay7d4vc9ayc	/	"},
{"track":	37	,	 "name": "	Limeira 2001 - Reunião Aberta. - O amor do Pai ao Filho - Douglas & Disciplina de Deus - Lineu	",	 "length": "	40:19	",	 "file": "	http://www.mediafire.com/file/	ry8vsdhbimdekx0	/	"},
{"track":	38	,	 "name": "	Limeira 2002 - Estudos sobre Efésios 1 - 1a parte	",	 "length": "	1:01:17	",	 "file": "	http://www.mediafire.com/file/	298iw1dgx9b38ca	/	"},
{"track":	39	,	 "name": "	Limeira 2002 - Estudos sobre Efésios 1 - 2a parte	",	 "length": "	43:45	",	 "file": "	http://www.mediafire.com/file/	miwzvdari6fiamd	/	"},
{"track":	40	,	 "name": "	Limeira 2002 - Estudos sobre Efésios 1 - 3a parte	",	 "length": "	50:13	",	 "file": "	http://www.mediafire.com/file/	1uvcaytez75919r	/	"},
{"track":	41	,	 "name": "	Limeira 2002 - Pregação do evangelho - Batista	",	 "length": "	53:22	",	 "file": "	http://www.mediafire.com/file/	nefi0hvkc6dg1ae	/	"},
{"track":	42	,	 "name": "	Limeira 2002 - Pregação para crentes - Filadélfia e Laodicéia - Douglas Buchanann & Bill Warr	",	 "length": "	1:07:05	",	 "file": "	http://www.mediafire.com/file/	9wa1ikiclr2mif6	/	"},
{"track":	43	,	 "name": "	Limeira 2002 - Pregação para crentes - Lembra-te de onde caíste - Bill Warr	",	 "length": "	51:27	",	 "file": "	http://www.mediafire.com/file/	n6jgine4imebfol	/	"},
{"track":	44	,	 "name": "	Limeira 2002 - Pregação para crentes - Sete passos de Filipenses 2 - Douglas	",	 "length": "	50:45	",	 "file": "	http://www.mediafire.com/file/	vo0ffdbett11v5j	/	"},
{"track":	45	,	 "name": "	Limeira 2002 - Pregação para jovens - Poços - Douglas Buchanann	",	 "length": "	36:01	",	 "file": "	http://www.mediafire.com/file/	vfp5mz78rvy3lr9	/	"},
{"track":	46	,	 "name": "	Limeira 2003 - Aberta - O Pai busca adoradores - Peixe - O servo de Abraão - Lemão	",	 "length": "	1:05:33	",	 "file": "	http://www.mediafire.com/file/	1kbjs1a2n6shbf6	/	"},
{"track":	47	,	 "name": "	Limeira 2003 - Escolinha dominical - John Kemp	",	 "length": "	30:36	",	 "file": "	http://www.mediafire.com/file/	fday76r6jazmsf2	/	"},
{"track":	48	,	 "name": "	Limeira 2003 - Estudos sobre Filipenses 4 - 1a parte	",	 "length": "	51:24	",	 "file": "	http://www.mediafire.com/file/	dcmow9c39np67tq	/	"},
{"track":	49	,	 "name": "	Limeira 2003 - Estudos sobre Filipenses 4 - 2a parte	",	 "length": "	1:00:25	",	 "file": "	http://www.mediafire.com/file/	n5wxd4kjpn4evj6	/	"},
{"track":	50	,	 "name": "	Limeira 2003 - Pregação do Evangelho -  John Kemp	",	 "length": "	53:04	",	 "file": "	http://www.mediafire.com/file/	4s85193iujqxuli	/	"},
{"track":	51	,	 "name": "	Limeira 2003 - Pregação do Evangelho - Batista	",	 "length": "	40:59	",	 "file": "	http://www.mediafire.com/file/	66wwk86tiliullk	/	"},
{"track":	52	,	 "name": "	Limeira 2003 - Pregação para Crentes - Gênesis 22 - Lemão	",	 "length": "	42:53	",	 "file": "	http://www.mediafire.com/file/	oo956t2ujduakoy	/	"},
{"track":	53	,	 "name": "	Limeira 2003 - Pregação para Crentes - Lineu - Ressurreição	",	 "length": "	44:31	",	 "file": "	http://www.mediafire.com/file/	z29ue58jmsjf4d9	/	"},
{"track":	54	,	 "name": "	Limeira 2003 - Pregação para Jovens - Aquele que Se compadece -  Vantuil	",	 "length": "	06:44	",	 "file": "	http://www.mediafire.com/file/	zpractoa8cq9bon	/	"},
{"track":	55	,	 "name": "	Limeira 2004 - Escolinha dominical - Batista	",	 "length": "	19:22	",	 "file": "	http://www.mediafire.com/file/	hchtkbnw98fhfnu	/	"},
{"track":	56	,	 "name": "	Limeira 2004 - Estudos sobre João 4 - 1a parte	",	 "length": "	48:10	",	 "file": "	http://www.mediafire.com/file/	mad6yowss2y24gj	/	"},
{"track":	57	,	 "name": "	Limeira 2004 - Estudos sobre João 4 - 2a parte	",	 "length": "	46:16	",	 "file": "	http://www.mediafire.com/file/	kih6tkc1at3yi5a	/	"},
{"track":	58	,	 "name": "	Limeira 2004 - Estudos sobre João 4 - 3a parte	",	 "length": "	59:24	",	 "file": "	http://www.mediafire.com/file/	o5xkxfv3tmbaln2	/	"},
{"track":	59	,	 "name": "	Limeira 2004 - Pregação aos Jovens - Bernardo	",	 "length": "	15:52	",	 "file": "	http://www.mediafire.com/file/	dt8egzqnkpo244p	/	"},
{"track":	60	,	 "name": "	Limeira 2004 - Pregação do Evangelho - Caritá	",	 "length": "	40:36	",	 "file": "	http://www.mediafire.com/file/	b2883110kbw24i2	/	"},
{"track":	61	,	 "name": "	Limeira 2004 - Pregação do Evangelho - Lemão	",	 "length": "	36:21	",	 "file": "	http://www.mediafire.com/file/	7pc88yumfw6zxw0	/	"},
{"track":	62	,	 "name": "	Limeira 2004 - Pregação para Crentes - Bob Thonney	",	 "length": "	52:26	",	 "file": "	http://www.mediafire.com/file/	5dhelf2yos86ll2	/	"},
{"track":	63	,	 "name": "	Limeira 2004 - Pregação para Crentes - Peixe	",	 "length": "	07:40	",	 "file": "	http://www.mediafire.com/file/	f454j4kq995hca0	/	"},
{"track":	64	,	 "name": "	Limeira 2005 - Aberta - Lugar de Reunião - Peixe e Lineu	",	 "length": "	52:20	",	 "file": "	http://www.mediafire.com/file/	agicc9ivcnxhplu	/	"},
{"track":	65	,	 "name": "	Limeira 2005 - Escola Dominical - Dave - Hábitos	",	 "length": "	11:38	",	 "file": "	http://www.mediafire.com/file/	g91nr2cvovk1toc	/	"},
{"track":	66	,	 "name": "	Limeira 2005 - Estudos sobre Romanos 8 - 1a parte	",	 "length": "	29:25	",	 "file": "	http://www.mediafire.com/file/	wf34ihfue3awytt	/	"},
{"track":	67	,	 "name": "	Limeira 2005 - Estudos sobre Romanos 8 - 2a parte	",	 "length": "	58:48	",	 "file": "	http://www.mediafire.com/file/	tenclbb9b6x3kf0	/	"},
{"track":	68	,	 "name": "	Limeira 2005 - Evangelho Batista	",	 "length": "	49:52	",	 "file": "	http://www.mediafire.com/file/	ebnb06qvyep3jrr	/	"},
{"track":	69	,	 "name": "	Limeira 2005 - Evangelho Lineu	",	 "length": "	49:56	",	 "file": "	http://www.mediafire.com/file/	5p5fj1vza2aa1df	/	"},
{"track":	70	,	 "name": "	Limeira 2005 - Pregação para crentes - A Esperança da justiça - Peixe	",	 "length": "	37:33	",	 "file": "	http://www.mediafire.com/file/	1rkvx7b0lg4yaq3	/	"},
{"track":	71	,	 "name": "	Limeira 2005 - Pregação para crentes - Lemão	",	 "length": "	47:54	",	 "file": "	http://www.mediafire.com/file/	huivykbk53ocqel	/	"},
{"track":	72	,	 "name": "	Limeira 2006 - Aberta - Adoração em Espírito - Peixe	",	 "length": "	23:33	",	 "file": "	http://www.mediafire.com/file/	398ch0a23aub8qa	/	"},
{"track":	73	,	 "name": "	Limeira 2006 - Escola Dominical - A Armadura de Deus - Luiz	",	 "length": "	17:36	",	 "file": "	http://www.mediafire.com/file/	l5wmw15ip69nujh	/	"},
{"track":	74	,	 "name": "	Limeira 2006 - Estudos sobre 2 Cor 4 - 1a parte	",	 "length": "	35:12	",	 "file": "	http://www.mediafire.com/file/	hhn2uz83anaixnd	/	"},
{"track":	75	,	 "name": "	Limeira 2006 - Estudos sobre 2 Cor 4 - 2a parte	",	 "length": "	1:05:25	",	 "file": "	http://www.mediafire.com/file/	j2mgsatjqf5d4do	/	"},
{"track":	76	,	 "name": "	Limeira 2006 - Pregação do evangelho - Atos 17-30 - 'Deus não tendo em conta os tempos da ignorância, anuncia agora' - Lineu	",	 "length": "	46:03	",	 "file": "	http://www.mediafire.com/file/	3ot80rlgbe239jr	/	"},
{"track":	77	,	 "name": "	Limeira 2006 - Pregação do evangelho - Hino 211  Sou Feliz -  Batista	",	 "length": "	46:55	",	 "file": "	http://www.mediafire.com/file/	5z6jufhozx4qk3a	/	"},
{"track":	78	,	 "name": "	Limeira 2006 - Pregação para crentes - O Senhor de todos - Bob Thonney	",	 "length": "	57:41	",	 "file": "	http://www.mediafire.com/file/	7kybmy9tdeq1k08	/	"},
{"track":	79	,	 "name": "	Limeira 2006 - Pregação para crentes - Prestaremos contas a Deus - Lemão	",	 "length": "	39:58	",	 "file": "	http://www.mediafire.com/file/	w6cuwi27h33brmz	/	"},
{"track":	80	,	 "name": "	Limeira 2006 - Pregação para jovens - Bernardo	",	 "length": "	21:08	",	 "file": "	http://www.mediafire.com/file/	1t75cbqh5wjs2se	/	"},
{"track":	81	,	 "name": "	Limeira 2007 - Aberta - Palavra de Deus e Ministério - Peixe	",	 "length": "	43:16	",	 "file": "	http://www.mediafire.com/file/	wxcd4ha9txin2tt	/	"},
{"track":	82	,	 "name": "	Limeira 2007 - Escolinha Dominical - John Kemp	",	 "length": "	24:46	",	 "file": "	http://www.mediafire.com/file/	fraa6o7a41mb4j9	/	"},
{"track":	83	,	 "name": "	Limeira 2007 - Estudos sobre João 6 - 1a parte	",	 "length": "	44:50	",	 "file": "	http://www.mediafire.com/file/	gqgpbimig1nzpt5	/	"},
{"track":	84	,	 "name": "	Limeira 2007 - Estudos sobre João 6 - 2a parte	",	 "length": "	1:00:02	",	 "file": "	http://www.mediafire.com/file/	1brz4oci1v14sex	/	"},
{"track":	85	,	 "name": "	Limeira 2007 - Pregação do evangelho - John Kemp	",	 "length": "	48:12	",	 "file": "	http://www.mediafire.com/file/	jreii5iqhhmexdf	/	"},
{"track":	86	,	 "name": "	Limeira 2007 - Pregação do evangelho - O filho pródigo - Lemão	",	 "length": "	36:57	",	 "file": "	http://www.mediafire.com/file/	38890yh9jyjmb2o	/	"},
{"track":	87	,	 "name": "	Limeira 2007 - Pregação para crentes - John Kemp	",	 "length": "	55:36	",	 "file": "	http://www.mediafire.com/file/	4r9rb7lpgv6ot7d	/	"},
{"track":	88	,	 "name": "	Limeira 2007 - Pregação para crentes - Provas em 1a Pedro - Lineu	",	 "length": "	46:18	",	 "file": "	http://www.mediafire.com/file/	x70lq1e8lrrehnq	/	"},
{"track":	89	,	 "name": "	Limeira 2007 - Pregação para jovens - Segue-me - Dave Thonney	",	 "length": "	09:36	",	 "file": "	http://www.mediafire.com/file/	jwk72rqa6brxixd	/	"},
{"track":	90	,	 "name": "	Limeira 2008 - Aberta - Mário - Lineu - Batista	",	 "length": "	44:02	",	 "file": "	http://www.mediafire.com/file/	t7r0clxtrii39o7	/	"},
{"track":	91	,	 "name": "	Limeira 2008 - Escolinha dominical - A luz que resplandece - Batista	",	 "length": "	17:15	",	 "file": "	http://www.mediafire.com/file/	x191kpx6nvn9mob	/	"},
{"track":	92	,	 "name": "	Limeira 2008 - Estudos sobre Judas - 1a parte	",	 "length": "	45:53	",	 "file": "	http://www.mediafire.com/file/	xsugxtqotdq54tg	/	"},
{"track":	93	,	 "name": "	Limeira 2008 - Estudos sobre Judas - 2a parte	",	 "length": "	1:09:56	",	 "file": "	http://www.mediafire.com/file/	dfvdvncmbg1dwr6	/	"},
{"track":	94	,	 "name": "	Limeira 2008 - Pregação - Amor, fé e esperança - John Kemp	",	 "length": "	51:57	",	 "file": "	http://www.mediafire.com/file/	62go8vdr7df3z5d	/	"},
{"track":	95	,	 "name": "	Limeira 2008 - Pregação - Convicção da verdade - Peixe 	",	 "length": "	50:06	",	 "file": "	http://www.mediafire.com/file/	84t9tmi3s2tca99	/	"},
{"track":	96	,	 "name": "	Limeira 2008 - Pregação do evangelho - John Kemp	",	 "length": "	54:56	",	 "file": "	http://www.mediafire.com/file/	wavr58c0mpda8s2	/	"},
{"track":	97	,	 "name": "	Limeira 2008 - Pregação do evangelho - Marcos 5 - Caritá 	",	 "length": "	49:48	",	 "file": "	http://www.mediafire.com/file/	5u6l4gr5te7qqd6	/	"},
{"track":	98	,	 "name": "	Limeira 2008 - Pregação para jovens - Alessandro - Gálatas - 	",	 "length": "	25:58	",	 "file": "	http://www.mediafire.com/file/	792f7xxac07c724	/	"},
{"track":	99	,	 "name": "	Limeira 2009 - Aberta - Daniel - Luiz e Mário 	",	 "length": "	40:17	",	 "file": "	http://www.mediafire.com/file/	bgt3d6tminw64vn	/	"},
{"track":	100	,	 "name": "	Limeira 2009 - Escolinha dominical - John Kemp	",	 "length": "	19:32	",	 "file": "	http://www.mediafire.com/file/	4oujk83xqjj7d9t	/	"},
{"track":	101	,	 "name": "	Limeira 2009 - Estudos sobre 1a Coríntios 15 - 1a parte	",	 "length": "	45:33	",	 "file": "	http://www.mediafire.com/file/	ad95eyqgaag1u1z	/	"},
{"track":	102	,	 "name": "	Limeira 2009 - Estudos sobre 1a Coríntios 15 - 2a parte	",	 "length": "	1:00:14	",	 "file": "	http://www.mediafire.com/file/	c4b7cfz9m5nuw7u	/	"},
{"track":	103	,	 "name": "	Limeira 2009 - Pregação do evangelho - Caritá	",	 "length": "	45:01	",	 "file": "	http://www.mediafire.com/file/	hkx9zgrgkbj6zuw	/	"},
{"track":	104	,	 "name": "	Limeira 2009 - Pregação do evangelho - John Kemp	",	 "length": "	49:21	",	 "file": "	http://www.mediafire.com/file/	8kua46d03x1m1ds	/	"},
{"track":	105	,	 "name": "	Limeira 2009 - Pregação para crentes - A vinda do Senhor em Tessalonicenses - Bob Thonney	",	 "length": "	55:55	",	 "file": "	http://www.mediafire.com/file/	nnhbs6htwu8p1x2	/	"},
{"track":	106	,	 "name": "	Limeira 2009 - Pregação para crentes - Trabalhadores da vinha - Douglas 	",	 "length": "	45:36	",	 "file": "	http://www.mediafire.com/file/	zo430uky2tm4a0d	/	"},
{"track":	107	,	 "name": "	Limeira 2009 - Pregação para jovens - Dave Thonney	",	 "length": "	08:40	",	 "file": "	http://www.mediafire.com/file/	ully19skk917hog	/	"},
{"track":	108	,	 "name": "	Limeira 2010 - Escolinha dominical - As Dez Virgens - John Kemp	",	 "length": "	23:42	",	 "file": "	http://www.mediafire.com/file/	e2839ymv8lptr4h	/	"},
{"track":	109	,	 "name": "	Limeira 2010 - Estudos sobre Mateus 13 - 1a parte.	",	 "length": "	50:36	",	 "file": "	http://www.mediafire.com/file/	jz4bulc18f94pmv	/	"},
{"track":	110	,	 "name": "	Limeira 2010 - Estudos sobre Mateus 13 - 2a parte.	",	 "length": "	1:05:38	",	 "file": "	http://www.mediafire.com/file/	bz3h8cxjiuzbt20	/	"},
{"track":	111	,	 "name": "	Limeira 2010 - Pregação do Evangelho - John Kemp	",	 "length": "	51:14	",	 "file": "	http://www.mediafire.com/file/	qxv3n0lmbnnnye1	/	"},
{"track":	112	,	 "name": "	Limeira 2010 - Pregação do Evangelho - Lineu	",	 "length": "	42:07	",	 "file": "	http://www.mediafire.com/file/	1ist6ss309s1162	/	"},
{"track":	113	,	 "name": "	Limeira 2010 - Pregação para crentes - A queda de Êutico - Atos 20 - Lemão	",	 "length": "	44:06	",	 "file": "	http://www.mediafire.com/file/	2kf9bmo5a3l8je6	/	"},
{"track":	114	,	 "name": "	Limeira 2010 - Pregação para crentes - Batismo - Douglas	",	 "length": "	52:48	",	 "file": "	http://www.mediafire.com/file/	kac8u2deu6zsxh8	/	"},
{"track":	115	,	 "name": "	Limeira 2010 - Pregação para jovens - Fome - Lemão	",	 "length": "	24:58	",	 "file": "	http://www.mediafire.com/file/	89sr1r5fmazx96k	/	"},
{"track":	116	,	 "name": "	Limeira 2010 - Reunião aberta - A presença do Senhor - Douglas	",	 "length": "	16:44	",	 "file": "	http://www.mediafire.com/file/	k4x30mf94w78odg	/	"},
{"track":	117	,	 "name": "	Limeira 2011 - Aberta - Peixe e Mário	",	 "length": "	59:02	",	 "file": "	http://www.mediafire.com/file/	ys4iqx7ahjmtxnt	/	"},
{"track":	118	,	 "name": "	Limeira 2011 - Escolinha Dominical - John Kemp	",	 "length": "	31:37	",	 "file": "	http://www.mediafire.com/file/	hb5sr9b041ovhmx	/	"},
{"track":	119	,	 "name": "	Limeira 2011 - Estudo Bíblico - 1a parte	",	 "length": "	56:02	",	 "file": "	http://www.mediafire.com/file/	cul8ek8dw9eap3w	/	"},
{"track":	120	,	 "name": "	Limeira 2011 - Estudo Bíblico - 2a parte	",	 "length": "	1:10:08	",	 "file": "	http://www.mediafire.com/file/	wnt9jrc97oft12l	/	"},
{"track":	121	,	 "name": "	Limeira 2011 - Pregação aos Jovens - Josué - Luiz	",	 "length": "	17:44	",	 "file": "	http://www.mediafire.com/file/	gdsz7vw73ly7egm	/	"},
{"track":	122	,	 "name": "	Limeira 2011 - Pregação do Evangelho - John Kemp	",	 "length": "	48:24	",	 "file": "	http://www.mediafire.com/file/	h75m8hei34vwsco	/	"},
{"track":	123	,	 "name": "	Limeira 2011 - Pregação do Evangelho - Pizzinatto	",	 "length": "	45:28	",	 "file": "	http://www.mediafire.com/file/	u35u589pu3r45gj	/	"},
{"track":	124	,	 "name": "	Limeira 2011 - Pregação para Crentes - A ordem na igreja - Lineu	",	 "length": "	53:56	",	 "file": "	http://www.mediafire.com/file/	1lhlbyaftnoa07v	/	"},
{"track":	125	,	 "name": "	Limeira 2011 - Pregação para Crentes - Comunhão - Lemão	",	 "length": "	47:34	",	 "file": "	http://www.mediafire.com/file/	6t477i7tum56zk1	/	"},
{"track":	126	,	 "name": "	Limeira 2012 - Escolinha Dominical - John Kemp	",	 "length": "	19:05	",	 "file": "	http://www.mediafire.com/file/	rculeykcg0v4uhd	/	"},
{"track":	127	,	 "name": "	Limeira 2012 - Estudo sobre O Tabernáculo - Douglas Buchanan	",	 "length": "	54:23	",	 "file": "	http://www.mediafire.com/file/	bc20gzyy1d1bb3z	/	"},
{"track":	128	,	 "name": "	Limeira 2012 - Estudos sobre Colossenses 1 - 1a parte	",	 "length": "	43:20	",	 "file": "	http://www.mediafire.com/file/	pljcr7v66d07alp	/	"},
{"track":	129	,	 "name": "	Limeira 2012 - Estudos sobre Colossenses 1 - 2a parte	",	 "length": "	1:00:21	",	 "file": "	http://www.mediafire.com/file/	d0gkc3gwgrmhx7v	/	"},
{"track":	130	,	 "name": "	Limeira 2012 - Estudos sobre Colossenses 1 - 3a parte	",	 "length": "	54:16	",	 "file": "	http://www.mediafire.com/file/	700ifs537v5f3j3	/	"},
{"track":	131	,	 "name": "	Limeira 2012 - Pregação do Evangelho - John Kemp	",	 "length": "	40:28	",	 "file": "	http://www.mediafire.com/file/	1ix5q6x4kg8iff2	/	"},
{"track":	132	,	 "name": "	Limeira 2012 - Pregação do Evangelho - O Cordeiro de Deus - Lemão	",	 "length": "	37:00	",	 "file": "	http://www.mediafire.com/file/	6n6f56m27dx166y	/	"},
{"track":	133	,	 "name": "	Limeira 2012 - Pregação para crentes - A igreja - Bob Thonney	",	 "length": "	49:15	",	 "file": "	http://www.mediafire.com/file/	i1hij3de23n895n	/	"},
{"track":	134	,	 "name": "	Limeira 2012 - Pregação para crentes - Adoração - Douglas Buchanan	",	 "length": "	46:22	",	 "file": "	http://www.mediafire.com/file/	pxb3z5qwex2wsiw	/	"},
{"track":	135	,	 "name": "	Limeira 2013 - Aberta - Despojai-vos e revesti-vos - Lineu	",	 "length": "	37:02	",	 "file": "	http://www.mediafire.com/file/	oilyd19piaqsk26	/	"},
{"track":	136	,	 "name": "	Limeira 2013 - Escolinha dominical - Zaqueu - Luiz	",	 "length": "	17:32	",	 "file": "	http://www.mediafire.com/file/	m0h36r38qgxg9w1	/	"},
{"track":	137	,	 "name": "	Limeira 2013 - Estudo sobre Romanos 12 - 1a parte	",	 "length": "	39:30	",	 "file": "	http://www.mediafire.com/file/	ncu0l506vn6fz8v	/	"},
{"track":	138	,	 "name": "	Limeira 2013 - Estudo sobre Romanos 12 - 2a parte	",	 "length": "	59:16	",	 "file": "	http://www.mediafire.com/file/	n7n9yqt2msyeh7s	/	"},
{"track":	139	,	 "name": "	Limeira 2013 - Pregação do evangelho - John Kemp	",	 "length": "	52:14	",	 "file": "	http://www.mediafire.com/file/	a276m2e67ol1wg6	/	"},
{"track":	140	,	 "name": "	Limeira 2013 - Pregação do evangelho - Lineu	",	 "length": "	35:24	",	 "file": "	http://www.mediafire.com/file/	kfqg1blfbyfetqg	/	"},
{"track":	141	,	 "name": "	Limeira 2013 - Pregação para crentes - Comunhão com o Pai - Bob Thonney	",	 "length": "	52:25	",	 "file": "	http://www.mediafire.com/file/	u6zw8v1zhw44h7i	/	"},
{"track":	142	,	 "name": "	Limeira 2013 - Pregação para crentes - Diferentes caracteres - John Kemp	",	 "length": "	55:06	",	 "file": "	http://www.mediafire.com/file/	um33cmz0ew7bk4x	/	"},
{"track":	143	,	 "name": "	Limeira 2013 - Pregação para jovens - Lemão	",	 "length": "	28:00	",	 "file": "	http://www.mediafire.com/file/	x28c7qh40xym9jy	/	"},
{"track":	144	,	 "name": "	Limeira 2014 - Aberta - O que temos ouvido - Peixe	",	 "length": "	43:15	",	 "file": "	http://www.mediafire.com/file/	ncjulwdwijkgxzq	/	"},
{"track":	145	,	 "name": "	Limeira 2014 - Escolinha dominical - Coleções - Luiz	",	 "length": "	19:12	",	 "file": "	http://www.mediafire.com/file/	18e58pkwc51brao	/	"},
{"track":	146	,	 "name": "	Limeira 2014 - Estudos sobre Romanos 7 - 1a parte	",	 "length": "	37:27	",	 "file": "	http://www.mediafire.com/file/	flcy59lnxndi4n7	/	"},
{"track":	147	,	 "name": "	Limeira 2014 - Estudos sobre Romanos 7 - 2a parte	",	 "length": "	1:07:45	",	 "file": "	http://www.mediafire.com/file/	d1bhvf7cp1i7a4i	/	"},
{"track":	148	,	 "name": "	Limeira 2014 - Pregação aos jovens - Jesus Cristo é o mesmo - Lucas	",	 "length": "	14:13	",	 "file": "	http://www.mediafire.com/file/	2amdt0swapczwqz	/	"},
{"track":	149	,	 "name": "	Limeira 2014 - Pregação do evangelho - John Kemp	",	 "length": "	49:36	",	 "file": "	http://www.mediafire.com/file/	51t6cjbo087f146	/	"},
{"track":	150	,	 "name": "	Limeira 2014 - Pregação do evangelho - Mario	",	 "length": "	51:30	",	 "file": "	http://www.mediafire.com/file/	7429a9qe5562l2a	/	"},
{"track":	151	,	 "name": "	Limeira 2014 - Pregação para crentes - Arrebatamento e Tribunal de Cristo - Lemão	",	 "length": "	40:12	",	 "file": "	http://www.mediafire.com/file/	j5vxw72wj4n4ygu	/	"},
{"track":	152	,	 "name": "	Limeira 2014 - Pregação para crentes - Exortações de Ageu - John Kemp	",	 "length": "	53:20	",	 "file": "	http://www.mediafire.com/file/	ge5r2zfh1zgnq21	/	"},
{"track":	153	,	 "name": "	Limeira 2015 - Escolinha dominical - Horas - Luiz	",	 "length": "	20:09	",	 "file": "	http://www.mediafire.com/file/	tcp3y1thtvgzusb	/	"},
{"track":	154	,	 "name": "	Limeira 2015 - Estudos sobre Adoração - 1a parte	",	 "length": "	36:07	",	 "file": "	http://www.mediafire.com/file/	vl5yslqe5d3ydfn	/	"},
{"track":	155	,	 "name": "	Limeira 2015 - Estudos sobre Adoração - 2a parte	",	 "length": "	1:08:10	",	 "file": "	http://www.mediafire.com/file/	49ge68zyyhpmxau	/	"},
{"track":	156	,	 "name": "	Limeira 2015 - Estudos sobre Adoração - 3a parte	",	 "length": "	39:33	",	 "file": "	http://www.mediafire.com/file/	j444vt316rr6ian	/	"},
{"track":	157	,	 "name": "	Limeira 2015 - Pregação do evangelho - Escolhas e consequências - Luiz	",	 "length": "	32:41	",	 "file": "	http://www.mediafire.com/file/	burtiuxl0ma0y9g	/	"},
{"track":	158	,	 "name": "	Limeira 2015 - Pregação do evangelho - John Kemp	",	 "length": "	44:20	",	 "file": "	http://www.mediafire.com/file/	vwffz6mffmze2vc	/	"},
{"track":	159	,	 "name": "	Limeira 2015 - Pregação para crentes - Novo nascimento e salvação - Lineu	",	 "length": "	54:46	",	 "file": "	http://www.mediafire.com/file/	caaj5kucgvtd2tw	/	"},
{"track":	160	,	 "name": "	Limeira 2015 - Pregação para crentes - Separação do mundo - John Kemp	",	 "length": "	56:27	",	 "file": "	http://www.mediafire.com/file/	rj0ws880vul18ae	/	"},
{"track":	161	,	 "name": "	Limeira 2015 - Pregação para jovens - A escolha do caminho - Lucas	",	 "length": "	11:37	",	 "file": "	http://www.mediafire.com/file/	p2dpchck1wch22t	/	"},
{"track":	162	,	 "name": "	Limeira 2016 - Escolinha dominical - Doenças e remédios - Luiz	",	 "length": "	16:21	",	 "file": "	http://www.mediafire.com/file/	a94q8ayiu3zp7y9	/	"},
{"track":	163	,	 "name": "	Limeira 2016 - Estudos sobre Efésios 4 - 1a parte	",	 "length": "	25:22	",	 "file": "	http://www.mediafire.com/file/	327af2ulzjnv25j	/	"},
{"track":	164	,	 "name": "	Limeira 2016 - Estudos sobre Efésios 4 - 2a parte	",	 "length": "	1:02:45	",	 "file": "	http://www.mediafire.com/file/	31oj02ecbd4obaa	/	"},
{"track":	165	,	 "name": "	Limeira 2016 - Pregação do evangelho - John	",	 "length": "	52:30	",	 "file": "	http://www.mediafire.com/file/	12h1ubj9d2pcq9x	/	"},
{"track":	166	,	 "name": "	Limeira 2016 - Pregação do evangelho - Pizzinatto	",	 "length": "	49:38	",	 "file": "	http://www.mediafire.com/file/	zdwzhn3rgepl6u1	/	"},
{"track":	167	,	 "name": "	Limeira 2016 - Pregação para crentes - Comunhão - John Kemp	",	 "length": "	49:04	",	 "file": "	http://www.mediafire.com/file/	6h0dio87vfl200y	/	"},
{"track":	168	,	 "name": "	Limeira 2016 - Pregação para crentes - Lembra-te de onde caíste - Lemão	",	 "length": "	42:01	",	 "file": "	http://www.mediafire.com/file/	99576bk6sdo8wbi	/	"},
{"track":	169	,	 "name": "	Limeira 2016 - Pregação para jovens - Pagar, orar e obedecer - Petrus	",	 "length": "	23:03	",	 "file": "	http://www.mediafire.com/file/	9lzi9o2hytlgble	/	"},
{"track":	170	,	 "name": "	Limeira 2016 - Reunião aberta - Mario, Lemão e Peixe	",	 "length": "	49:46	",	 "file": "	http://www.mediafire.com/file/	56xdyqewazvo2c5	/	"},
{"track":	171	,	 "name": "	Limeira 2017 Escolinha dominical-Linguas-Lucas	",	 "length": "	11:25	",	 "file": "	http://www.mediafire.com/file/	4jgeo4818uyl9mr	/	"},
{"track":	172	,	 "name": "	Limeira 2017 Estudos sobre Colossenses 1-1a parte	",	 "length": "	34:01	",	 "file": "	http://www.mediafire.com/file/	gp1u4a5sx4grbzp	/	"},
{"track":	173	,	 "name": "	Limeira 2017 Estudos sobre Colossenses 1-2a parte	",	 "length": "	58:29	",	 "file": "	http://www.mediafire.com/file/	44a7kn6lb4kkr98	/	"},
{"track":	174	,	 "name": "	Limeira 2017 Pregacao aos jovens-Daniel-O segredo para vencer-Petrus	",	 "length": "	32:05	",	 "file": "	http://www.mediafire.com/file/	k969s9ci6hi21c5	/	"},
{"track":	175	,	 "name": "	Limeira 2017 Pregacao do evangelho-Mario	",	 "length": "	43:13	",	 "file": "	http://www.mediafire.com/file/	gp67bqpdcdk9d9j	/	"},
{"track":	176	,	 "name": "	Limeira 2017 Pregacao para crentes-Bob Thonney	",	 "length": "	52:27	",	 "file": "	http://www.mediafire.com/file/	5sa3ce9b2p29yiy	/	"},
{"track":	177	,	 "name": "	Limeira 2017 Pregacao para crentes-O cuidado do presbitero-Robert Boulard	",	 "length": "	52:44	",	 "file": "	http://www.mediafire.com/file/	2u8uarpzalz03ob	/	"},
{"track":	178	,	 "name": "	Limeira 2018-Aberta-Marcio,Pizzi,Batista	",	 "length": "	53:25	",	 "file": "	http://www.mediafire.com/file/	feg39f7tu9qt4sy	/	"},
{"track":	179	,	 "name": "	Limeira 2018-Estudos sobre Hebreu 13-1a parte	",	 "length": "	35:46	",	 "file": "	http://www.mediafire.com/file/	z842p1g0dp176p5	/	"},
{"track":	180	,	 "name": "	Limeira 2018-Estudos sobre Hebreu 13-2a parte	",	 "length": "	1:16:53	",	 "file": "	http://www.mediafire.com/file/	r3vp901z8ujryb4	/	"},
{"track":	181	,	 "name": "	Limeira 2018-Pregacao do evangelho-Mario	",	 "length": "	53:06	",	 "file": "	http://www.mediafire.com/file/	kx6f53xm86c10sv	/	"},
{"track":	182	,	 "name": "	Limeira 2018-Pregacao do evangelho-Toni	",	 "length": "	44:39	",	 "file": "	http://www.mediafire.com/file/	f09170rm1rbvstn	/	"},
{"track":	183	,	 "name": "	Limeira 2018-Pregacao para crentes-Atos 2.42-Robert Boulard	",	 "length": "	55:23	",	 "file": "	http://www.mediafire.com/file/	szdzkqo4xnj59os	/	"},
{"track":	184	,	 "name": "	Limeira 2018-Pregacao para crentes-Os sofrimentos de Cristo-Lineu	",	 "length": "	48:35	",	 "file": "	http://www.mediafire.com/file/	tmbp22x7u47btq2	/	"},
{"track":	185	,	 "name": "	Limeira 2018-Pregacao para jovens-O Espirito Santo-Bernardo	",	 "length": "	18:53	",	 "file": "	http://www.mediafire.com/file/	rvnmaivrbk1rq17	/	"},

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
document.write('<title>Audio Player - Conferência - Tudo</title>')

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

