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

// verifica quantidade de audios
console.log(tracks.length);
var ended = tracks.length;
localStorage.setItem('length', ended);
console.log(localStorage.getItem('length'))
// Fim de verifica quantidade de audios
    }
});

// Título da playlist
document.write('<title>Audio Player - Conferência - Limeira</title>')

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
