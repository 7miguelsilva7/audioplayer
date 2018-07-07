// External Files:
// https://api.html5media.info/1.1.8/html5media.min.js (enables <video> and <audio> tags in all major browsers)
// https://cdn.plyr.io/2.0.13/plyr.js


// HTML5 audio player + playlist controls...
// Inspiration: https://jonhall.info/how_to/create_a_playlist_for_html5_audio
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

{"track":	1	,	 "name": "	Hino 001 - Aba, Pai, a Ti Chegamos	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	b1o25cfx24zq3aq	/	Hino 001 - Aba, Pai, a Ti Chegamos.mp3	"},
{"track":	2	,	 "name": "	Hino 002 - Foi Nessa Noite Escura	",	 "length": "	04:03	",	 "file": "	https://www.mediafire.com/file/	70g76ph8lca4kra	/	Hino 002 - Foi Nessa Noite Escura.mp3	"},
{"track":	3	,	 "name": "	Hino 003 - Todos Juntos Adoremos	",	 "length": "	02:47	",	 "file": "	https://www.mediafire.com/file/	b4raj8jeg8fpxs5	/	Hino 003 - Todos Juntos Adoremos.mp3	"},
{"track":	4	,	 "name": "	Hino 004 - Jesus, Senhor Amado!	",	 "length": "	03:10	",	 "file": "	https://www.mediafire.com/file/	88raad68ws66hbx	/	Hino 004 - Jesus, Senhor Amado!.mp3	"},
{"track":	5	,	 "name": "	Hino 005 - Senhor, Hoje Lembrando	",	 "length": "	02:22	",	 "file": "	https://www.mediafire.com/file/	78k3m7y03zav8s4	/	Hino 005 - Senhor, Hoje Lembrando.mp3	"},
{"track":	6	,	 "name": "	Hino 006 - Em Tua Ceia Nos Juntamos	",	 "length": "	02:33	",	 "file": "	https://www.mediafire.com/file/	loew5meooioxo1m	/	Hino 006 - Em Tua Ceia Nos Juntamos.mp3	"},
{"track":	7	,	 "name": "	Hino 007 - Quão Imensa Foi a Graça!	",	 "length": "	03:08	",	 "file": "	https://www.mediafire.com/file/	bbawzriektomcoz	/	Hino 007 - Quão Imensa Foi a Graça!.mp3	"},
{"track":	8	,	 "name": "	Hino 008 - Levantado Foi Jesus	",	 "length": "	02:08	",	 "file": "	https://www.mediafire.com/file/	1fbg9so8095d7db	/	Hino 008 - Levantado Foi Jesus.mp3	"},
{"track":	9	,	 "name": "	Hino 009 - Ao Senhor Jesus Louvemos	",	 "length": "	01:21	",	 "file": "	https://www.mediafire.com/file/	k6ii5tntkm17tcr	/	Hino 009 - Ao Senhor Jesus Louvemos.mp3	"},
{"track":	10	,	 "name": "	Hino 010 - Substituição	",	 "length": "	03:05	",	 "file": "	https://www.mediafire.com/file/	vxq7wyrfx016d44	/	Hino 010 - Substituição.mp3	"},
{"track":	11	,	 "name": "	Hino 011 - Qual Irmãos Reunidos	",	 "length": "	02:42	",	 "file": "	https://www.mediafire.com/file/	d7fffonqmh8iyjb	/	Hino 011 - Qual Irmãos Reunidos.mp3	"},
{"track":	12	,	 "name": "	Hino 012 - O Grande Motivo	",	 "length": "	04:27	",	 "file": "	https://www.mediafire.com/file/	31iacx7zwih8jaw	/	Hino 012 - O Grande Motivo.mp3	"},
{"track":	13	,	 "name": "	Hino 013 - Ao Que Vive	",	 "length": "	02:31	",	 "file": "	https://www.mediafire.com/file/	cjgsiiml6ril9g1	/	Hino 013 - Ao Que Vive.mp3	"},
{"track":	14	,	 "name": "	Hino 014 - Teu Sacrifício Excelso	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	s2fve112zcejm4s	/	Hino 014 - Teu Sacrifício Excelso.mp3	"},
{"track":	15	,	 "name": "	Hino 015 - Rosto Divino	",	 "length": "	02:38	",	 "file": "	https://www.mediafire.com/file/	c7w778xbf7nl21y	/	Hino 015 - Rosto Divino.mp3	"},
{"track":	16	,	 "name": "	Hino 016 - Pontífice Real - Morning Light_ Stand Up For Jesus (The Holiest We Enter)	",	 "length": "	02:42	",	 "file": "	https://www.mediafire.com/file/	0um2e6gz2c4c23e	/	Hino 016 - Pontífice Real - Morning Light_ Stand Up For Jesus (The Holiest We Enter).mp3	"},
{"track":	17	,	 "name": "	Hino 017 - Tua Dura Cruz	",	 "length": "	02:26	",	 "file": "	https://www.mediafire.com/file/	mm7ch84jqc29kcf	/	Hino 017 - Tua Dura Cruz.mp3	"},
{"track":	18	,	 "name": "	Hino 018 - A Tua Palavra, Ó Senhor	",	 "length": "	02:45	",	 "file": "	https://www.mediafire.com/file/	7ap8pmurcuwwz86	/	Hino 018 - A Tua Palavra, Ó Senhor.mp3	"},
{"track":	19	,	 "name": "	Hino 019 - A Ti Para Sempre Seja o Louvor	",	 "length": "	02:22	",	 "file": "	https://www.mediafire.com/file/	98itnbhslz6p439	/	Hino 019 - A Ti Para Sempre Seja o Louvor.mp3	"},
{"track":	20	,	 "name": "	Hino 020 - Remissão	",	 "length": "	01:31	",	 "file": "	https://www.mediafire.com/file/	cik5kea5fporm7i	/	Hino 020 - Remissão.mp3	"},
{"track":	21	,	 "name": "	Hino 021 - A Cruz de Cristo	",	 "length": "	03:17	",	 "file": "	https://www.mediafire.com/file/	fuq1ygsc9awio1x	/	Hino 021 - A Cruz de Cristo.mp3	"},
{"track":	22	,	 "name": "	Hino 022 - Te Adoramos, Ó Cordeiro!	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	fg19rvmfaf82m9a	/	Hino 022 - Te Adoramos, Ó Cordeiro!.mp3	"},
{"track":	23	,	 "name": "	Hino 023 - Teu Amor Tenaz	",	 "length": "	02:08	",	 "file": "	https://www.mediafire.com/file/	qvvxo7rf9eque22	/	Hino 023 - Teu Amor Tenaz.mp3	"},
{"track":	24	,	 "name": "	Hino 024 - Porque Tanto Amou!	",	 "length": "	04:02	",	 "file": "	https://www.mediafire.com/file/	0cax9xojbwb0rnk	/	Hino 024 - Porque Tanto Amou!.mp3	"},
{"track":	25	,	 "name": "	Hino 025 - Ninguém Mais - No One Ever Cared For Me Like Jesus	",	 "length": "	02:24	",	 "file": "	https://www.mediafire.com/file/	l9806qdqtbn0q6z	/	Hino 025 - Ninguém Mais - No One Ever Cared For Me Like Jesus.mp3	"},
{"track":	26	,	 "name": "	Hino 026 - Ao Contemplarmos Tua Cruz	",	 "length": "	02:14	",	 "file": "	https://www.mediafire.com/file/	47pf3x6cwrph57s	/	Hino 026 - Ao Contemplarmos Tua Cruz.mp3	"},
{"track":	27	,	 "name": "	Hino 027 - O Amor Divino	",	 "length": "	03:20	",	 "file": "	https://www.mediafire.com/file/	o1rg1e5l0z0x3m2	/	Hino 027 - O Amor Divino.mp3	"},
{"track":	28	,	 "name": "	Hino 028 - Oh! Que Amor Teve Deus Pai!	",	 "length": "	02:43	",	 "file": "	https://www.mediafire.com/file/	cjbuovcv65b567f	/	Hino 028 - Oh! Que Amor Teve Deus Pai!.mp3	"},
{"track":	29	,	 "name": "	Hino 029 - A Mensagem da Cruz	",	 "length": "	04:02	",	 "file": "	https://www.mediafire.com/file/	8id7xhrwbck5pzb	/	Hino 029 - A Mensagem da Cruz.mp3	"},
{"track":	30	,	 "name": "	Hino 030 - Amor Glorioso	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	2mo217v6luzzgij	/	Hino 030 - Amor Glorioso.mp3	"},
{"track":	31	,	 "name": "	Hino 031 - Alvos, Mais Que a Neve!	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	65gfpbdfm2sfh8n	/	Hino 031 - Alvos, Mais Que a Neve!.mp3	"},
{"track":	32	,	 "name": "	Hino 032 - Jesus, Que Rico Nome!	",	 "length": "	02:40	",	 "file": "	https://www.mediafire.com/file/	lzxuh4x5tft022i	/	Hino 032 - Jesus, Que Rico Nome!.mp3	"},
{"track":	33	,	 "name": "	Hino 033 - Deus e Pai a Ti Louvamos	",	 "length": "	03:05	",	 "file": "	https://www.mediafire.com/file/	u69xi5fyaa35k5o	/	Hino 033 - Deus e Pai a Ti Louvamos.mp3	"},
{"track":	34	,	 "name": "	Hino 034 - Jesus, Estrela Da Manhã	",	 "length": "	02:46	",	 "file": "	https://www.mediafire.com/file/	ainmhamoddfgs0m	/	Hino 034 - Jesus, Estrela Da Manhã.mp3	"},
{"track":	35	,	 "name": "	Hino 035 - Palácios de Marfim	",	 "length": "	03:49	",	 "file": "	https://www.mediafire.com/file/	mu932mxlesj8ajf	/	Hino 035 - Palácios de Marfim.mp3	"},
{"track":	36	,	 "name": "	Hino 036 - Teu Nome, Ó Amado!	",	 "length": "	02:36	",	 "file": "	https://www.mediafire.com/file/	eqd3e8bmwdu9qsf	/	Hino 036 - Teu Nome, Ó Amado!.mp3	"},
{"track":	37	,	 "name": "	Hino 037 - Rocha Eterna	",	 "length": "	02:22	",	 "file": "	https://www.mediafire.com/file/	v55mwuxca4zgre9	/	Hino 037 - Rocha Eterna.mp3	"},
{"track":	38	,	 "name": "	Hino 038 - Rasgou	",	 "length": "	03:03	",	 "file": "	https://www.mediafire.com/file/	cv2epvx990yvkv5	/	Hino 038 - Rasgou.mp3	"},
{"track":	39	,	 "name": "	Hino 039 - Ao Nosso Deus e Pai	",	 "length": "	01:59	",	 "file": "	https://www.mediafire.com/file/	358twtuwz06l9rw	/	Hino 039 - Ao Nosso Deus e Pai.mp3	"},
{"track":	40	,	 "name": "	Hino 040 - Senhor, Te Adoramos	",	 "length": "	02:02	",	 "file": "	https://www.mediafire.com/file/	cumsby0pklade16	/	Hino 040 - Senhor, Te Adoramos.mp3	"},
{"track":	41	,	 "name": "	Hino 041 - Louvamos	",	 "length": "	02:16	",	 "file": "	https://www.mediafire.com/file/	383vhpfd19gdp4j	/	Hino 041 - Louvamos.mp3	"},
{"track":	42	,	 "name": "	Hino 042 - A Deus Seja a Glória	",	 "length": "	03:20	",	 "file": "	https://www.mediafire.com/file/	dahuyd8c0dguhhy	/	Hino 042 - A Deus Seja a Glória.mp3	"},
{"track":	43	,	 "name": "	Hino 043 - Santo, Santo, Santo!	",	 "length": "	02:59	",	 "file": "	https://www.mediafire.com/file/	o6y47962z0yan16	/	Hino 043 - Santo, Santo, Santo!.mp3	"},
{"track":	44	,	 "name": "	Hino 044 - Glória ao Cordeiro	",	 "length": "	02:04	",	 "file": "	https://www.mediafire.com/file/	d9mmfcvq3hamx0a	/	Hino 044 - Glória ao Cordeiro.mp3	"},
{"track":	45	,	 "name": "	Hino 045 - Ao Que Está Sentado	",	 "length": "	01:20	",	 "file": "	https://www.mediafire.com/file/	ct5n2cafa748hqc	/	Hino 045 - Ao Que Está Sentado.mp3	"},
{"track":	46	,	 "name": "	Hino 046 - Amor Sublime	",	 "length": "	01:45	",	 "file": "	https://www.mediafire.com/file/	ad0mi46sqzee3g8	/	Hino 046 - Amor Sublime.mp3	"},
{"track":	47	,	 "name": "	Hino 047 - Tema Encantador	",	 "length": "	02:38	",	 "file": "	https://www.mediafire.com/file/	wgqz887gpymi33i	/	Hino 047 - Tema Encantador.mp3	"},
{"track":	48	,	 "name": "	Hino 048 - Terno Salvador - Meet Me There, Be In Time (De Mi Tierno Salvador)	",	 "length": "	03:00	",	 "file": "	https://www.mediafire.com/file/	i7wl85asss2k2ty	/	Hino 048 - Terno Salvador - Meet Me There, Be In Time (De Mi Tierno Salvador).mp3	"},
{"track":	49	,	 "name": "	Hino 049 - Quão Grande És Tu!	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	byib30eqjxr79k1	/	Hino 049 - Quão Grande És Tu!.mp3	"},
{"track":	50	,	 "name": "	Hino 050 - O Amor de Jesus	",	 "length": "	02:24	",	 "file": "	https://www.mediafire.com/file/	ilq4bq8dr8i0rth	/	Hino 050 - O Amor de Jesus.mp3	"},
{"track":	51	,	 "name": "	Hino 051 - Grata Memória	",	 "length": "	03:01	",	 "file": "	https://www.mediafire.com/file/	0c7g83s9sdsn598	/	Hino 051 - Grata Memória.mp3	"},
{"track":	52	,	 "name": "	Hino 052 - Promessa de Deus	",	 "length": "	03:44	",	 "file": "	https://www.mediafire.com/file/	a9ocj8nr91pvpb2	/	Hino 052 - Promessa de Deus.mp3	"},
{"track":	53	,	 "name": "	Hino 053 - Hoje Remidos!	",	 "length": "	02:59	",	 "file": "	https://www.mediafire.com/file/	xbl607f9tv8kh42	/	Hino 053 - Hoje Remidos!.mp3	"},
{"track":	54	,	 "name": "	Hino 054 - Cristo Já Ressuscitou	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	hhgfgd22yspgvci	/	Hino 054 - Cristo Já Ressuscitou.mp3	"},
{"track":	55	,	 "name": "	Hino 055 - Oh! Que Amor Divino!	",	 "length": "	03:06	",	 "file": "	https://www.mediafire.com/file/	gk5zt6bkpaxyegv	/	Hino 055 - Oh! Que Amor Divino!.mp3	"},
{"track":	56	,	 "name": "	Hino 056 - Rompe a Aurora	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	hebcv8zj5sov81a	/	Hino 056 - Rompe a Aurora.mp3	"},
{"track":	57	,	 "name": "	Hino 057 - Te Contemplamos	",	 "length": "	03:31	",	 "file": "	https://www.mediafire.com/file/	ilmx4472ok1egkg	/	Hino 057 - Te Contemplamos.mp3	"},
{"track":	58	,	 "name": "	Hino 058 - Graças Por Teu Padecer	",	 "length": "	03:21	",	 "file": "	https://www.mediafire.com/file/	5lty1fxf1wqi84f	/	Hino 058 - Graças Por Teu Padecer.mp3	"},
{"track":	59	,	 "name": "	Hino 059 - Somente Em Teu Louvor	",	 "length": "	02:57	",	 "file": "	https://www.mediafire.com/file/	af7beu9ld1vndcz	/	Hino 059 - Somente Em Teu Louvor.mp3	"},
{"track":	60	,	 "name": "	Hino 060 - Teu Nome, Ó Jesus!	",	 "length": "	03:32	",	 "file": "	https://www.mediafire.com/file/	1g9z2icryj5167c	/	Hino 060 - Teu Nome, Ó Jesus!.mp3	"},
{"track":	61	,	 "name": "	Hino 061 - Te Humilhaste, Senhor	",	 "length": "	03:05	",	 "file": "	https://www.mediafire.com/file/	av15z53q0q6vf4d	/	Hino 061 - Te Humilhaste, Senhor.mp3	"},
{"track":	62	,	 "name": "	Hino 062 - Não a Nós Seja a Glória	",	 "length": "	03:43	",	 "file": "	https://www.mediafire.com/file/	uiqno3lle7xan71	/	Hino 062 - Não a Nós Seja a Glória.mp3	"},
{"track":	63	,	 "name": "	Hino 063 - A Cristo Coroai	",	 "length": "	02:18	",	 "file": "	https://www.mediafire.com/file/	5pf6ephzl5cgs2q	/	Hino 063 - A Cristo Coroai.mp3	"},
{"track":	64	,	 "name": "	Hino 064 - Exaltado Na Eterna Glória	",	 "length": "	02:33	",	 "file": "	https://www.mediafire.com/file/	ax7cvw2d3353nds	/	Hino 064 - Exaltado Na Eterna Glória.mp3	"},
{"track":	65	,	 "name": "	Hino 065 - Coro Santo	",	 "length": "	05:10	",	 "file": "	https://www.mediafire.com/file/	4zwz4wr7mwddz4k	/	Hino 065 - Coro Santo.mp3	"},
{"track":	66	,	 "name": "	Hino 066 - Nos Altos Céus	",	 "length": "	02:09	",	 "file": "	https://www.mediafire.com/file/	pp2dwaoap70j997	/	Hino 066 - Nos Altos Céus.mp3	"},
{"track":	67	,	 "name": "	Hino 067 - Aleluia, Ressurgiu!	",	 "length": "	02:35	",	 "file": "	https://www.mediafire.com/file/	49ng76n5ak581l2	/	Hino 067 - Aleluia, Ressurgiu!.mp3	"},
{"track":	68	,	 "name": "	Hino 068 - Cordeiro Imaculado	",	 "length": "	03:40	",	 "file": "	https://www.mediafire.com/file/	9l91ar3dp3vl1n6	/	Hino 068 - Cordeiro Imaculado.mp3	"},
{"track":	69	,	 "name": "	Hino 069 - Nosso Cordial Louvor	",	 "length": "	02:35	",	 "file": "	https://www.mediafire.com/file/	9204bd4x6ax8evl	/	Hino 069 - Nosso Cordial Louvor.mp3	"},
{"track":	70	,	 "name": "	Hino 070 - Glória Damos a Jesus	",	 "length": "	01:55	",	 "file": "	https://www.mediafire.com/file/	5njg6b7h3cx7x69	/	Hino 070 - Glória Damos a Jesus.mp3	"},
{"track":	71	,	 "name": "	Hino 071 - Te Louvamos Jesus	",	 "length": "	02:13	",	 "file": "	https://www.mediafire.com/file/	i85sxu4vtx9i0dd	/	Hino 071 - Te Louvamos Jesus.mp3	"},
{"track":	72	,	 "name": "	Hino 072 - Ó Deus e Pai	",	 "length": "	01:10	",	 "file": "	https://www.mediafire.com/file/	8m5r7xfkdsbv1c5	/	Hino 072 - Ó Deus e Pai.mp3	"},
{"track":	73	,	 "name": "	Hino 073 - A Ti Que Morreste	",	 "length": "	01:20	",	 "file": "	https://www.mediafire.com/file/	bxcb3cxnafv2t1d	/	Hino 073 - A Ti Que Morreste.mp3	"},
{"track":	74	,	 "name": "	Hino 074 - Nome Sem Igual	",	 "length": "	02:18	",	 "file": "	https://www.mediafire.com/file/	8ee7mn3gbizsiir	/	Hino 074 - Nome Sem Igual.mp3	"},
{"track":	75	,	 "name": "	Hino 075 - Adorado Salvador	",	 "length": "	02:40	",	 "file": "	https://www.mediafire.com/file/	q2wfj1jf8jyc7k6	/	Hino 075 - Adorado Salvador.mp3	"},
{"track":	76	,	 "name": "	Hino 076 - Até a Cruz	",	 "length": "	02:39	",	 "file": "	https://www.mediafire.com/file/	9f7sw20b7ysivqv	/	Hino 076 - Até a Cruz.mp3	"},
{"track":	77	,	 "name": "	Hino 077 - Recordação do Teu Amor	",	 "length": "	03:33	",	 "file": "	https://www.mediafire.com/file/	enm02r9otpe29f1	/	Hino 077 - Recordação do Teu Amor.mp3	"},
{"track":	78	,	 "name": "	Hino 078 - Morreste Tu Por Nós	",	 "length": "	01:28	",	 "file": "	https://www.mediafire.com/file/	ymrgt9o33zyqadd	/	Hino 078 - Morreste Tu Por Nós.mp3	"},
{"track":	79	,	 "name": "	Hino 079 - Meditação Sublime	",	 "length": "	01:20	",	 "file": "	https://www.mediafire.com/file/	1zp84u7ttea7c3s	/	Hino 079 - Meditação Sublime.mp3	"},
{"track":	80	,	 "name": "	Hino 080 - Aleluia! Cristo Ressuscitou!	",	 "length": "	03:17	",	 "file": "	https://www.mediafire.com/file/	snhcoaojpf23z6y	/	Hino 080 - Aleluia! Cristo Ressuscitou!.mp3	"},
{"track":	81	,	 "name": "	Hino 081 - Ao Nome Excelso	",	 "length": "	02:29	",	 "file": "	https://www.mediafire.com/file/	9541kxz758zoyo3	/	Hino 081 - Ao Nome Excelso.mp3	"},
{"track":	82	,	 "name": "	Hino 082 - Oh! Quão Ensanguentada!	",	 "length": "	02:44	",	 "file": "	https://www.mediafire.com/file/	z6pcvmgvynzyw63	/	Hino 082 - Oh! Quão Ensanguentada!.mp3	"},
{"track":	83	,	 "name": "	Hino 101 - A Nós Tens Agora, Senhor	",	 "length": "	02:54	",	 "file": "	https://www.mediafire.com/file/	40u93ujuc0l7nhb	/	Hino 101 - A Nós Tens Agora, Senhor.mp3	"},
{"track":	84	,	 "name": "	Hino 102 - Bom Amigo	",	 "length": "	02:33	",	 "file": "	https://www.mediafire.com/file/	pmncinena4fp7w8	/	Hino 102 - Bom Amigo.mp3	"},
{"track":	85	,	 "name": "	Hino 103 - Doce Comunhão	",	 "length": "	02:17	",	 "file": "	https://www.mediafire.com/file/	jzb3s06d83pc7o6	/	Hino 103 - Doce Comunhão.mp3	"},
{"track":	86	,	 "name": "	Hino 104 - Cada Momento	",	 "length": "	04:28	",	 "file": "	https://www.mediafire.com/file/	5ledd4xywe16vhy	/	Hino 104 - Cada Momento.mp3	"},
{"track":	87	,	 "name": "	Hino 105 - Quando a Ti Nos Achegamos	",	 "length": "	03:10	",	 "file": "	https://www.mediafire.com/file/	356k46reuu6yfn0	/	Hino 105 - Quando a Ti Nos Achegamos.mp3	"},
{"track":	88	,	 "name": "	Hino 106 - A Ti, Ó Pai, Em Oração	",	 "length": "	03:06	",	 "file": "	https://www.mediafire.com/file/	6e5rgofhoc5lbjl	/	Hino 106 - A Ti, Ó Pai, Em Oração.mp3	"},
{"track":	89	,	 "name": "	Hino 107 - Deus Proverá	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	g5plqae99i8axt0	/	Hino 107 - Deus Proverá.mp3	"},
{"track":	90	,	 "name": "	Hino 108 - Doce Consolo	",	 "length": "	03:04	",	 "file": "	https://www.mediafire.com/file/	am6p1jz1oaw8cuj	/	Hino 108 - Doce Consolo.mp3	"},
{"track":	91	,	 "name": "	Hino 109 - Quão Bom Escutar Tua Voz!	",	 "length": "	02:34	",	 "file": "	https://www.mediafire.com/file/	80dg84ie32ss3u0	/	Hino 109 - Quão Bom Escutar Tua Voz!.mp3	"},
{"track":	92	,	 "name": "	Hino 110 - Mais de Jesus	",	 "length": "	02:38	",	 "file": "	https://www.mediafire.com/file/	8j4afwktbcf3wd7	/	Hino 110 - Mais de Jesus.mp3	"},
{"track":	93	,	 "name": "	Hino 111 - Pão Sem Par	",	 "length": "	02:05	",	 "file": "	https://www.mediafire.com/file/	s8h601y4o2ub146	/	Hino 111 - Pão Sem Par.mp3	"},
{"track":	94	,	 "name": "	Hino 112 - Com Mil Línguas - Azmon (O For a Thousand Tongues to Sing)	",	 "length": "	02:22	",	 "file": "	https://www.mediafire.com/file/	zrky95c3md9amkj	/	Hino 112 - Com Mil Línguas - Azmon (O For a Thousand Tongues to Sing).mp3	"},
{"track":	95	,	 "name": "	Hino 113 - Nosso Bom Salvador	",	 "length": "	02:08	",	 "file": "	https://www.mediafire.com/file/	0t1tef6vfduis8s	/	Hino 113 - Nosso Bom Salvador.mp3	"},
{"track":	96	,	 "name": "	Hino 114 - Primeiro Amor	",	 "length": "	02:49	",	 "file": "	https://www.mediafire.com/file/	5c4yy8bc21bcc6l	/	Hino 114 - Primeiro Amor.mp3	"},
{"track":	97	,	 "name": "	Hino 115 - Perto, Mais Perto	",	 "length": "	03:47	",	 "file": "	https://www.mediafire.com/file/	rwihnxfvk6h7n7w	/	Hino 115 - Perto, Mais Perto.mp3	"},
{"track":	98	,	 "name": "	Hino 116 - Mais Perto	",	 "length": "	02:20	",	 "file": "	https://www.mediafire.com/file/	3ev73q7jk21duf2	/	Hino 116 - Mais Perto.mp3	"},
{"track":	99	,	 "name": "	Hino 117 - Paz, Paz, Quão Doce Paz!	",	 "length": "	03:52	",	 "file": "	https://www.mediafire.com/file/	bqpff2rs0s020ow	/	Hino 117 - Paz, Paz, Quão Doce Paz!.mp3	"},
{"track":	100	,	 "name": "	Hino 118 - Faze o Que Queres	",	 "length": "	02:42	",	 "file": "	https://www.mediafire.com/file/	2o34m9o7i8nd3y7	/	Hino 118 - Faze o Que Queres.mp3	"},
{"track":	101	,	 "name": "	Hino 119 - Peregrinos	",	 "length": "	02:24	",	 "file": "	https://www.mediafire.com/file/	fdszalt4ebmdw4a	/	Hino 119 - Peregrinos.mp3	"},
{"track":	102	,	 "name": "	Hino 120 - Paciente e Fiel Pastor	",	 "length": "	02:01	",	 "file": "	https://www.mediafire.com/file/	q66smd0ms8clp5e	/	Hino 120 - Paciente e Fiel Pastor.mp3	"},
{"track":	103	,	 "name": "	Hino 121 - És, Senhor, Nosso Pastor - In The Heavenly Pastures Fair	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	c0koh65ftj520bs	/	Hino 121 - És, Senhor, Nosso Pastor - In The Heavenly Pastures Fair.mp3	"},
{"track":	104	,	 "name": "	Hino 122 - Oh! Ensina	",	 "length": "	02:19	",	 "file": "	https://www.mediafire.com/file/	4535djdsfsp05dd	/	Hino 122 - Oh! Ensina.mp3	"},
{"track":	105	,	 "name": "	Hino 123 - Manancial de Todo Gozo	",	 "length": "	01:42	",	 "file": "	https://www.mediafire.com/file/	muok8nd9l180mcc	/	Hino 123 - Manancial de Todo Gozo.mp3	"},
{"track":	106	,	 "name": "	Hino 124 - Precioso Nome	",	 "length": "	03:05	",	 "file": "	https://www.mediafire.com/file/	6266cti62rwr91s	/	Hino 124 - Precioso Nome.mp3	"},
{"track":	107	,	 "name": "	Hino 125 - Firmeza	",	 "length": "	02:18	",	 "file": "	https://www.mediafire.com/file/	i15kpec5fyycv5f	/	Hino 125 - Firmeza.mp3	"},
{"track":	108	,	 "name": "	Hino 126 - Vem, Senhor, Vem Nos Guiar	",	 "length": "	01:45	",	 "file": "	https://www.mediafire.com/file/	rze8zv0fb55ib70	/	Hino 126 - Vem, Senhor, Vem Nos Guiar.mp3	"},
{"track":	109	,	 "name": "	Hino 127 - Toma	",	 "length": "	02:55	",	 "file": "	https://www.mediafire.com/file/	w7trboh2zk11yzo	/	Hino 127 - Toma.mp3	"},
{"track":	110	,	 "name": "	Hino 128 - Trabalho Cristão	",	 "length": "	03:27	",	 "file": "	https://www.mediafire.com/file/	451tlmp6wrevn3g	/	Hino 128 - Trabalho Cristão.mp3	"},
{"track":	111	,	 "name": "	Hino 129 - Obedecer	",	 "length": "	03:55	",	 "file": "	https://www.mediafire.com/file/	uxu8nvx2azmx6rd	/	Hino 129 - Obedecer.mp3	"},
{"track":	112	,	 "name": "	Hino 130 - Tua Senda, Ó Mestre	",	 "length": "	03:04	",	 "file": "	https://www.mediafire.com/file/	opdda4dtvqi98um	/	Hino 130 - Tua Senda, Ó Mestre.mp3	"},
{"track":	113	,	 "name": "	Hino 131 - Cristo Está Conosco	",	 "length": "	04:39	",	 "file": "	https://www.mediafire.com/file/	8nsdnvyii3xvk78	/	Hino 131 - Cristo Está Conosco.mp3	"},
{"track":	114	,	 "name": "	Hino 132 - Para Qualquer Parte	",	 "length": "	02:47	",	 "file": "	https://www.mediafire.com/file/	r2bfeau9d9s3omq	/	Hino 132 - Para Qualquer Parte.mp3	"},
{"track":	115	,	 "name": "	Hino 133 - Nossa Canção Hoje Aceita	",	 "length": "	02:06	",	 "file": "	https://www.mediafire.com/file/	6x4ecauyqq6rurv	/	Hino 133 - Nossa Canção Hoje Aceita.mp3	"},
{"track":	116	,	 "name": "	Hino 134 - Fé, A Vitória É	",	 "length": "	03:27	",	 "file": "	https://www.mediafire.com/file/	75e3p3zv6o6oxpk	/	Hino 134 - Fé, A Vitória É.mp3	"},
{"track":	117	,	 "name": "	Hino 135 - Desperta, Ó Santo!	",	 "length": "	03:17	",	 "file": "	https://www.mediafire.com/file/	wl92as8ahz6995a	/	Hino 135 - Desperta, Ó Santo!.mp3	"},
{"track":	118	,	 "name": "	Hino 136 - Estai Por Cristo Firmes! - Geibel (Stand Up For Jesus)	",	 "length": "	04:13	",	 "file": "	https://www.mediafire.com/file/	36y1p6chgxgr0qg	/	Hino 136 - Estai Por Cristo Firmes! - Geibel (Stand Up For Jesus).mp3	"},
{"track":	119	,	 "name": "	Hino 137 - Quando Nós Formos Chamados - When The Roll Is Called Up Younder	",	 "length": "	03:00	",	 "file": "	https://www.mediafire.com/file/	rk63qrp30reyiqu	/	Hino 137 - Quando Nós Formos Chamados - When The Roll Is Called Up Younder.mp3	"},
{"track":	120	,	 "name": "	Hino 138 - Não Haverá Tribulação	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	v5ux6op1mggovok	/	Hino 138 - Não Haverá Tribulação.mp3	"},
{"track":	121	,	 "name": "	Hino 139 - Indo à Pátria	",	 "length": "	02:34	",	 "file": "	https://www.mediafire.com/file/	9490h77ia2vcw44	/	Hino 139 - Indo à Pátria.mp3	"},
{"track":	122	,	 "name": "	Hino 140 - Fiel e Terno Amigo	",	 "length": "	02:54	",	 "file": "	https://www.mediafire.com/file/	zqnbxw6bthmdkvd	/	Hino 140 - Fiel e Terno Amigo.mp3	"},
{"track":	123	,	 "name": "	Hino 141 - Face a Face	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	gkbaqcz1jkapxj0	/	Hino 141 - Face a Face.mp3	"},
{"track":	124	,	 "name": "	Hino 142 - Em Trevas Foi Nosso Viver	",	 "length": "	02:34	",	 "file": "	https://www.mediafire.com/file/	7xqx9hr6k1rkif6	/	Hino 142 - Em Trevas Foi Nosso Viver.mp3	"},
{"track":	125	,	 "name": "	Hino 143 - Jesus, Em Breve Hás de Vir	",	 "length": "	03:32	",	 "file": "	https://www.mediafire.com/file/	7331vfk4b9u7dj5	/	Hino 143 - Jesus, Em Breve Hás de Vir.mp3	"},
{"track":	126	,	 "name": "	Hino 144 - Oh! Jesus, Bom Pastor!	",	 "length": "	03:08	",	 "file": "	https://www.mediafire.com/file/	aiouuu71xxq92ca	/	Hino 144 - Oh! Jesus, Bom Pastor!.mp3	"},
{"track":	127	,	 "name": "	Hino 145 - Sempre, Sempre	",	 "length": "	02:54	",	 "file": "	https://www.mediafire.com/file/	ffio203bj2z42w2	/	Hino 145 - Sempre, Sempre.mp3	"},
{"track":	128	,	 "name": "	Hino 146 - Há Um Lar Mui Feliz	",	 "length": "	02:25	",	 "file": "	https://www.mediafire.com/file/	uavg22hwc35pk6h	/	Hino 146 - Há Um Lar Mui Feliz.mp3	"},
{"track":	129	,	 "name": "	Hino 147 - Doce Paz	",	 "length": "	02:47	",	 "file": "	https://www.mediafire.com/file/	zq6qtd86ts2fjt2	/	Hino 147 - Doce Paz.mp3	"},
{"track":	130	,	 "name": "	Hino 148 - Nos Levarás ao Lar	",	 "length": "	04:01	",	 "file": "	https://www.mediafire.com/file/	r64bm565dri1mh9	/	Hino 148 - Nos Levarás ao Lar.mp3	"},
{"track":	131	,	 "name": "	Hino 149 - Tu, Senhor, Nos Guias Sempre	",	 "length": "	03:20	",	 "file": "	https://www.mediafire.com/file/	o1gvub16dcg5shd	/	Hino 149 - Tu, Senhor, Nos Guias Sempre.mp3	"},
{"track":	132	,	 "name": "	Hino 201 - Oh! Graça Sublime!	",	 "length": "	02:25	",	 "file": "	https://www.mediafire.com/file/	0sao0r6ooi512k4	/	Hino 201 - Oh! Graça Sublime!.mp3	"},
{"track":	133	,	 "name": "	Hino 202 - Mais Além do Sol	",	 "length": "	04:14	",	 "file": "	https://www.mediafire.com/file/	02y0akv5r4377u3	/	Hino 202 - Mais Além do Sol.mp3	"},
{"track":	134	,	 "name": "	Hino 203 - Já Salvo Sou	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	o7090w9ozd6vm56	/	Hino 203 - Já Salvo Sou.mp3	"},
{"track":	135	,	 "name": "	Hino 204 - Doce Certeza	",	 "length": "	02:53	",	 "file": "	https://www.mediafire.com/file/	z53001oz5lzov9y	/	Hino 204 - Doce Certeza.mp3	"},
{"track":	136	,	 "name": "	Hino 205 - Achei Um Bom Amigo	",	 "length": "	02:17	",	 "file": "	https://www.mediafire.com/file/	f1e1mo0egfxyopp	/	Hino 205 - Achei Um Bom Amigo.mp3	"},
{"track":	137	,	 "name": "	Hino 206 - Livre Estou	",	 "length": "	03:10	",	 "file": "	https://www.mediafire.com/file/	kczbg10fgcvtj2v	/	Hino 206 - Livre Estou.mp3	"},
{"track":	138	,	 "name": "	Hino 207 - Novas Alegres	",	 "length": "	01:59	",	 "file": "	https://www.mediafire.com/file/	axysktybvs2mavg	/	Hino 207 - Novas Alegres.mp3	"},
{"track":	139	,	 "name": "	Hino 208 - Longe Esteja de Mim Gloriar	",	 "length": "	02:06	",	 "file": "	https://www.mediafire.com/file/	mk8loe11hvj9rhr	/	Hino 208 - Longe Esteja de Mim Gloriar.mp3	"},
{"track":	140	,	 "name": "	Hino 209 - A Voz de Cristo	",	 "length": "	02:25	",	 "file": "	https://www.mediafire.com/file/	05fge3aphukef85	/	Hino 209 - A Voz de Cristo.mp3	"},
{"track":	141	,	 "name": "	Hino 210 - Meu Salvador	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	6cahhco8q3kujy5	/	Hino 210 - Meu Salvador.mp3	"},
{"track":	142	,	 "name": "	Hino 211 - Sou Feliz	",	 "length": "	03:51	",	 "file": "	https://www.mediafire.com/file/	4y72f4u5qz0y425	/	Hino 211 - Sou Feliz.mp3	"},
{"track":	143	,	 "name": "	Hino 212 - Deus Cuidará de Ti	",	 "length": "	03:03	",	 "file": "	https://www.mediafire.com/file/	fi6vubbqby2a5bk	/	Hino 212 - Deus Cuidará de Ti.mp3	"},
{"track":	144	,	 "name": "	Hino 213 - Deus Nos Guarde	",	 "length": "	04:16	",	 "file": "	https://www.mediafire.com/file/	68jy6cqejae2vbw	/	Hino 213 - Deus Nos Guarde.mp3	"}

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
