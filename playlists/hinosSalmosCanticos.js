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

                {"track":	1	,	 "voz": "José Batista Pereira",	 "name": "	A MENSAGEM DA CRUZ	",	 "length": "	05:46	",	 "file": "	https://www.mediafire.com/file/	35z7gcpezcdd0kj	/	A MENSAGEM DA CRUZ	" },
                {"track":	2	,	 "voz": "José Batista Pereira",	 "name": "	A TI QUE HABITAS NOS CÉUS (Salmo 123)	",	 "length": "	02:16	",	 "file": "	https://www.mediafire.com/file/	7tombbuk41d3613	/	A TI QUE HABITAS NOS CÉUS (Salmo 123)	"},
                {"track":	3	,	 "voz": "José Batista Pereira",	 "name": "	A TI SENHOR ELEVO A MINHA ALMA (Salmo 25)	",	 "length": "	03:04	",	 "file": "	https://www.mediafire.com/file/	qmxytjc2vxvz61l	/	A TI SENHOR ELEVO A MINHA ALMA (Salmo 25)	"},
                {"track":	4	,	 "voz": "José Batista Pereira",	 "name": "	A VOZ DE CRISTO	",	 "length": "	03:55	",	 "file": "	https://www.mediafire.com/file/	sf8yf930w5vwz8z	/	A VOZ DE CRISTO	"},
                {"track":	5	,	 "voz": "José Batista Pereira",	 "name": "	ACLAMAI A DEUS (Salmo 66)	",	 "length": "	03:36	",	 "file": "	https://www.mediafire.com/file/	3hdo4gjfqzmdhn2	/	ACLAMAI A DEUS (Salmo 66)	"},
                {"track":	6	,	 "voz": "José Batista Pereira",	 "name": "	ALEGRE VERDADE	",	 "length": "	03:55	",	 "file": "	https://www.mediafire.com/file/	ux9y8aqrbwtio8t/	"},
                {"track":	7	,	 "voz": "José Batista Pereira",	 "name": "	ALEGREI ME (Salmo 122)	",	 "length": "	03:05	",	 "file": "	https://www.mediafire.com/file/	n2bmcxu8m3tmun1	/	ALEGREI ME (Salmo 122)	"},
                {"track":	8	,	 "voz": "José Batista Pereira",	 "name": "	ALVOS MAIS QUE A NEVE FICAMOS QUANDO LAVADOS EM TEU SANGUE SALVADOR	",	 "length": "	03:45	",	 "file": "	https://www.mediafire.com/file/	iuucayyzkbk654e	/	ALVOS MAIS QUE A NEVE FICAMOS QUANDO LAVADOS EM TEU SANGUE SALVADOR	"},
                {"track":	9	,	 "voz": "José Batista Pereira",	 "name": "	AO TEU NOME, Ó ALTÍSSIMO; CANTAREI LOUVORES (Salmo 9)	",	 "length": "	03:58	",	 "file": "	https://www.mediafire.com/file/	78x50gyqo3d7yw5	/	AO TEU NOME, Ó ALTÍSSIMO; CANTAREI LOUVORES (Salmo 9)	"},
                {"track":	10	,	 "voz": "José Batista Pereira",	 "name": "	ATRIBULADO CORAÇÃO	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	lg4bsj3j3oltfck	/	ATRIBULADO CORAÇÃO	"},
                {"track":	11	,	 "voz": "José Batista Pereira",	 "name": "	BATEI PALMAS (Salmo 47)	",	 "length": "	03:10	",	 "file": "	https://www.mediafire.com/file/	0bchkdt2k7xnhrj	/	BATEI PALMAS (Salmo 47)	"},
                {"track":	12	,	 "voz": "José Batista Pereira",	 "name": "	BENDIREI AO SENHOR EM TODO TEMPO   (SALMO 34)	",	 "length": "	03:18	",	 "file": "	https://www.mediafire.com/file/	2s3t99fr7tvidas	/	BENDIREI AO SENHOR EM TODO TEMPO   (SALMO 34)	"},
                {"track":	13	,	 "voz": "José Batista Pereira",	 "name": "	BENDIZE Ó MINHA ALMA AO SENHOR (Salmo 103)	",	 "length": "	03:25	",	 "file": "	https://www.mediafire.com/file/	frqajv0wrrqjp6r	/	BENDIZE Ó MINHA ALMA AO SENHOR (Salmo 103)	"},
                {"track":	14	,	 "voz": "José Batista Pereira",	 "name": "	BENDIZEI AO SENHOR (Salmo 134)	",	 "length": "	02:11	",	 "file": "	https://www.mediafire.com/file/	450h9g1b4a9yi54	/	BENDIZEI AO SENHOR (Salmo 134)	"},
                {"track":	15	,	 "voz": "José Batista Pereira",	 "name": "	BOM É RENDER GRAÇAS AO SENHOR (Salmo 92)	",	 "length": "	04:01	",	 "file": "	https://www.mediafire.com/file/	bpov7jv1half3rr	/	BOM É RENDER GRAÇAS AO SENHOR (Salmo 92)	"},
                {"track":	16	,	 "voz": "José Batista Pereira",	 "name": "	BUSCAI AO SENHOR (Isaías 55)	",	 "length": "	03:46	",	 "file": "	https://www.mediafire.com/file/	a5955umc3965lcg	/	BUSCAI AO SENHOR (Isaías 55)	"},
                {"track":	17	,	 "voz": "José Batista Pereira",	 "name": "	CANTAI AO SENHOR (Salmo 96)	",	 "length": "	02:49	",	 "file": "	https://www.mediafire.com/file/	zuv1skff3jdokdg	/	CANTAI AO SENHOR (Salmo 96)	"},
                {"track":	18	,	 "voz": "José Batista Pereira",	 "name": "	CANTAREI AO SENHOR PORQUE TRIUNFOU GLORIOSAMENTE (Cântico de Moisés)	",	 "length": "	03:20	",	 "file": "	https://www.mediafire.com/file/	aqsdc7cqnhqmq05	/	CANTAREI AO SENHOR PORQUE TRIUNFOU GLORIOSAMENTE (Cântico de Moisés)	"},
                {"track":	19	,	 "voz": "José Batista Pereira",	 "name": "	CELEBRAI COM JÚBILO AO SENHOR (Salmo 100)	",	 "length": "	02:34	",	 "file": "	https://www.mediafire.com/file/	jyvk1cv6a9l8i22	/	CELEBRAI COM JÚBILO AO SENHOR (Salmo 100)	"},
                {"track":	20	,	 "voz": "José Batista Pereira",	 "name": "	COMO A ALVA NEVE	",	 "length": "	03:51	",	 "file": "	https://www.mediafire.com/file/	h6o9iuxiaiyonnp	/	COMO A ALVA NEVE	"},
                {"track":	21	,	 "voz": "José Batista Pereira",	 "name": "	CONHECEIS AGORA O DIVINAL PODER  (Are you washed in the blood)	",	 "length": "	02:32	",	 "file": "	https://www.mediafire.com/file/	3c6bntddi7866or	/	CONHECEIS AGORA O DIVINAL PODER  (Are you washed in the blood)	"},
                {"track":	22	,	 "voz": "José Batista Pereira",	 "name": "	CRISTO É A VIDA	",	 "length": "	04:03	",	 "file": "	https://www.mediafire.com/file/	bzcbl8mw8hbdj30	/	CRISTO É A VIDA	"},
                {"track":	23	,	 "voz": "José Batista Pereira",	 "name": "	DESDE AGORA E PARA SEMPRE (Salmo 131)	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	w4qru5pk65n7nk1	/	DESDE AGORA E PARA SEMPRE (Salmo 131)	"},
                {"track":	24	,	 "voz": "José Batista Pereira",	 "name": "	DEUS É O NOSSO REFÚGIO E FORTALEZA (Salmo 46)	",	 "length": "	03:30	",	 "file": "	https://www.mediafire.com/file/	61puvl0up94iu6b	/	DEUS É O NOSSO REFÚGIO E FORTALEZA (Salmo 46)	"},
                {"track":	25	,	 "voz": "José Batista Pereira",	 "name": "	DOCE CERTEZA MEU É JESUS (BLESSED ASSURANCE)	",	 "length": "	04:03	",	 "file": "	https://www.mediafire.com/file/	7mmv8tib5n4c18f	/	DOCE CERTEZA MEU É JESUS (BLESSED ASSURANCE)	"},
                {"track":	26	,	 "voz": "José Batista Pereira",	 "name": "	ELEVO OS OLHOS PARA OS MONTES DE ONDE VIRÁ O MEU SOCORRO  (Salmo 121)	",	 "length": "	02:40	",	 "file": "	https://www.mediafire.com/file/	7wmc5r0efpkj007	/	ELEVO OS OLHOS PARA OS MONTES DE ONDE VIRÁ O MEU SOCORRO  (Salmo 121)	"},
                {"track":	27	,	 "voz": "José Batista Pereira",	 "name": "	EU ME ALEGRAREI NO SENHOR   (Cântico de Habacuque 3 17 19)	",	 "length": "	04:03	",	 "file": "	https://www.mediafire.com/file/	81d6gwn22rbrg1j	/	EU ME ALEGRAREI NO SENHOR   (Cântico de Habacuque 3 17 19)	"},
                {"track":	28	,	 "voz": "José Batista Pereira",	 "name": "	EXULTAI, Ó JUSTOS, NO SENHOR (Salmo 33)	",	 "length": "	04:18	",	 "file": "	https://www.mediafire.com/file/	l25fxqfuut4zy2c	/	EXULTAI, Ó JUSTOS, NO SENHOR (Salmo 33)	"},
                {"track":	29	,	 "voz": "José Batista Pereira",	 "name": "	FACE A FACE COM JESUS	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	rlkd2yydbqq75ok	/	FACE A FACE COM JESUS	"},
                {"track":	30	,	 "voz": "José Batista Pereira",	 "name": "	FIRME ESTÁ MEU CORAÇÃO (Salmo 108)	",	 "length": "	03:26	",	 "file": "	https://www.mediafire.com/file/	axu77bka7489aba	/	FIRME ESTÁ MEU CORAÇÃO (Salmo 108)	"},
                {"track":	31	,	 "voz": "José Batista Pereira",	 "name": "	GLÓRIA A JESUS	",	 "length": "	03:33	",	 "file": "	https://www.mediafire.com/file/	26m6wvd1o99pin6	/	GLÓRIA A JESUS	"},
                {"track":	32	,	 "voz": "José Batista Pereira",	 "name": "	GLÓRIA AO CORDEIRO (Apocalipse 5.5)	",	 "length": "	04:12	",	 "file": "	https://www.mediafire.com/file/	yrn0z66gcek2pla	/	GLÓRIA AO CORDEIRO (Apocalipse 5.5)	"},
                {"track":	33	,	 "voz": "José Batista Pereira",	 "name": "	JESUS DOCE AMIGO MEU	",	 "length": "	03:43	",	 "file": "	https://www.mediafire.com/file/	7kcejf9949drtki	/	JESUS DOCE AMIGO MEU	"},
                {"track":	34	,	 "voz": "José Batista Pereira",	 "name": "	LEVANTAI  Ó PORTAS, VOSSAS CABEÇAS (Salmo 24)	",	 "length": "	02:49	",	 "file": "	https://www.mediafire.com/file/	tzvc7wb9saacf65	/	LEVANTAI  Ó PORTAS, VOSSAS CABEÇAS (Salmo 24)	"},
                {"track":	35	,	 "voz": "José Batista Pereira",	 "name": "	LOUVAI AO SENHOR (Salmo 148)	",	 "length": "	03:53	",	 "file": "	https://www.mediafire.com/file/	gaxhesmcb0tctyz	/	LOUVAI AO SENHOR (Salmo 148)	"},
                {"track":	36	,	 "voz": "José Batista Pereira",	 "name": "	LOUVAI SERVOS DO SENHOR (Salmo 113)	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	4lb52ik25eseddt	/	LOUVAI SERVOS DO SENHOR (Salmo 113)	"},
                {"track":	37	,	 "voz": "José Batista Pereira",	 "name": "	MAIS ALÉM DO SOL	",	 "length": "	04:11	",	 "file": "	https://www.mediafire.com/file/	vqkx9h52ezevsxt	/	MAIS ALÉM DO SOL	"},
                {"track":	38	,	 "voz": "José Batista Pereira",	 "name": "	MEUS PECADOS JESUS EXPIOU NA CRUZ   (Jesus paid it all)	",	 "length": "	03:41	",	 "file": "	https://www.mediafire.com/file/	7i3nx9xo999310i	/	MEUS PECADOS JESUS EXPIOU NA CRUZ   (Jesus paid it all)	"},
                {"track":	39	,	 "voz": "José Batista Pereira",	 "name": "	NAQUELE DIA DE ESPLENDOR E GLÓRIA	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	rk90ldjk5elm1nh	/	NAQUELE DIA DE ESPLENDOR E GLÓRIA	"},
                {"track":	40	,	 "voz": "José Batista Pereira",	 "name": "	NINGUÉM MAIS HAVIA DE TÃO DIGNO PARA LIBERTAR O PECADOR	",	 "length": "	02:52	",	 "file": "	https://www.mediafire.com/file/9n965w8abf2w7e2/	"},
                {"track":	41	,	 "voz": "José Batista Pereira",	 "name": "	NÃO A NÓS SENHOR (Salmo 115)	",	 "length": "	03:19	",	 "file": "	https://www.mediafire.com/file/1vdcm9v5g3i30ou/"},
                {"track":	42	,	 "voz": "José Batista Pereira",	 "name": "	NÃO TE INDIGNES (Salmo 37 e 2 Timóteo 2 19,22)	",	 "length": "	03:07	",	 "file": "	https://www.mediafire.com/file/8y18po3pqj2wqp5/"},
                {"track":	43	,	 "voz": "José Batista Pereira",	 "name": "	NOVO NASCIMENTO	",	 "length": "	02:57	",	 "file": "	https://www.mediafire.com/file/	2cz710yh7mhu3ks	/		"},
                {"track":	44	,	 "voz": "José Batista Pereira",	 "name": "	O AMOR DIVINO	",	 "length": "	03:49	",	 "file": "	https://www.mediafire.com/file/	3uvvx7bh5h85bht	/	O AMOR DIVINO	"},
                {"track":	45	,	 "voz": "José Batista Pereira",	 "name": "	OH! MEU JESUS, JESUS DEUS DE AMOR	",	 "length": "	03:00	",	 "file": "	https://www.mediafire.com/file/	5bj168elpjpg8va	/	OH! MEU JESUS, JESUS DEUS DE AMOR	"},
                {"track":	46	,	 "voz": "José Batista Pereira",	 "name": "	OH! QUÃO BOM (Salmo 133)	",	 "length": "	02:46	",	 "file": "	https://www.mediafire.com/file/	n832wdcmmctxa3d	/	OH! QUÃO BOM (Salmo 133)	"},
                {"track":	47	,	 "voz": "José Batista Pereira",	 "name": "	OH! GRAÇA SUBLIME	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	2w1f03eg0tt2d2b	/	"},
                {"track":	48	,	 "voz": "José Batista Pereira",	 "name": "	O SENHOR ESCOLHEU A SIÃO	",	 "length": "	03:18	",	 "file": "	https://www.mediafire.com/file/	qrw6n3wm2u44wew	/	"},
                {"track":	49	,	 "voz": "José Batista Pereira",	 "name": "	OS CÉUS PROCLAMAM A GLÓRIA DE DEUS (Salmo 19)	",	 "length": "	03:20	",	 "file": "	https://www.mediafire.com/file/	ef986u6c42xcv4j	/	OS CÉUS PROCLAMAM A GLÓRIA DE DEUS (Salmo 19)	"},
                {"track":	50	,	 "voz": "José Batista Pereira",	 "name": "	OS QUE CONFIAM NO SENHOR (Salmo 125)	",	 "length": "	04:26	",	 "file": "	https://www.mediafire.com/file/	9gylylq2i7fg0c1	/	OS QUE CONFIAM NO SENHOR (Salmo 125)	"},
                {"track":	51	,	 "voz": "José Batista Pereira",	 "name": "	PALAVRA DOS MEUS LÁBIOS   (Salmo 19 14)	",	 "length": "	02:09	",	 "file": "	https://www.mediafire.com/file/	uyyqrvyn81rqkyu	/	PALAVRA DOS MEUS LÁBIOS   (Salmo 19 14)	"},
                {"track":	52	,	 "voz": "José Batista Pereira",	 "name": "	QUANDO CHEGARAM AO CALVÁRIO	",	 "length": "	04:12	",	 "file": "	https://www.mediafire.com/file/	vy1dlgmsft89ou9	/	QUANDO CHEGARAM AO CALVÁRIO	"},
                {"track":	53	,	 "voz": "José Batista Pereira",	 "name": "	QUANDO O SENHOR JESUS VOLTAR	",	 "length": "	04:21	",	 "file": "	https://www.mediafire.com/file/	9a6ilt1uolp2jl9	/	QUANDO O SENHOR JESUS VOLTAR	"},
                {"track":	54	,	 "voz": "José Batista Pereira",	 "name": "	QUÃO IMENSA FOI A GRAÇA	",	 "length": "	03:55	",	 "file": "	https://www.mediafire.com/file/	kvu7h91zvc2b06g	/	"},
                {"track":	55	,	 "voz": "José Batista Pereira",	 "name": "	QUÃO BOM ESCUTAR TUA VOZ",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/nc8g3at77q0alyr/	"},
                {"track":	56	,	 "voz": "José Batista Pereira",	 "name": "	QUEM PODE FALAR DAS COISAS LÁ DO ALTO (1 João 5 20)	",	 "length": "	02:59	",	 "file": "	https://www.mediafire.com/file/	nica4072xwx7m5s	/	QUEM PODE FALAR DAS COISAS LÁ DO ALTO (1 João 5 20)	"},
                {"track":	57	,	 "voz": "José Batista Pereira",	 "name": "	RENDEI GRAÇAS AO SENHOR (Salmo 105)	",	 "length": "	03:36	",	 "file": "	https://www.mediafire.com/file/	89zcvhcah1zh05k	/	RENDEI GRAÇAS AO SENHOR (Salmo 105)	"},
                {"track":	58	,	 "voz": "José Batista Pereira",	 "name": "	ROCHA ETERNA (Rock of Ages)	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	534s36n66ow52vv	/	ROCHA ETERNA (Rock of Ages)	"},
                {"track":	59	,	 "voz": "José Batista Pereira",	 "name": "	SE ISSO NÃO FOR AMOR",	 "length": "	03:15	",	 "file": "	https://www.mediafire.com/file/se6jdq6hkdd2f96/	"},
                {"track":	60	,	 "voz": "José Batista Pereira",	 "name": "	SENHOR CONSERVARÁS EM PERFEITA PAZ (Isaías 26 3 4,8 9,12)	",	 "length": "	03:21	",	 "file": "	https://www.mediafire.com/file/	5xkque6ji2obcac	/	SENHOR CONSERVARÁS EM PERFEITA PAZ (Isaías 26 3 4,8 9,12)	"},
                {"track":	61	,	 "voz": "José Batista Pereira",	 "name": "	SIÃO (Salmo 126)	",	 "length": "	04:22	",	 "file": "	https://www.mediafire.com/file/	eygdtzudo79zc4j	/	SIÃO (Salmo 126)	"},
                {"track":	62	,	 "voz": "José Batista Pereira",	 "name": "	TAL COMO ESTÁS VEM A JESUS (Just as I am)	",	 "length": "	03:58	",	 "file": "	https://www.mediafire.com/file/	z45nqqjqvbnq25p	/	TAL COMO ESTÁS VEM A JESUS (Just as I am)	"},
                {"track":	63	,	 "voz": "José Batista Pereira",	 "name": "	TERNO SALVADOR	",	 "length": "	02:55	",	 "file": "	https://www.mediafire.com/file/	b8ltsasa6bjo5k2	/	TERNO SALVADOR	"},
                {"track":	64	,	 "voz": "José Batista Pereira",	 "name": "	TEU SACRIFÍCIO EXCELSO	",	 "length": "	03:09	",	 "file": "	https://www.mediafire.com/file/	htfd27t65ljw74h	/	TEU SACRIFÍCIO EXCELSO	"},
                {"track":	65	,	 "voz": "José Batista Pereira",	 "name": "	VINDE CANTEMOS (Salmo 95)	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	39v8w6xzr9ydyyu	/	VINDE CANTEMOS (Salmo 95)	"},
                {"track":	66	,	 "voz": "José Batista Pereira",	 "name": "	SONDA-ME Ó DEUS E CONHECE O MEU CORAÇÃO	",	 "length": "	04:20	",	 "file": "	https://www.mediafire.com/file/bc1wg0dkn6pqlkh/"},
                {"track":	67	,	 "voz": "José Batista Pereira",	 "name": "	ATÉ A CRUZ DESCESTE	",	 "length": "	03:56	",	 "file": "	https://www.mediafire.com/file/998hxmexvbr58vb/	"},
                {"track":	68	,	 "voz": "José Batista Pereira",	 "name": "	NAS ESTRELAS (TUDO É PARA MIM)	",	 "length": "	03:27	",	 "file": "	https://www.mediafire.com/file/dvz9d87a8ruiau4/	"},
                {"track":	69	,	 "voz": "José Batista Pereira",	 "name": "	SOMENTE EM TEU LOUVOR	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/qdu9u3d7929l119/	"},
                {"track":	70	,	 "voz": "José Batista Pereira",	 "name": "	REDENÇÃO CONSUMADA	",	 "length": "	02:59	",	 "file": "	https://www.mediafire.com/file/i8a4441dw378n08/	"},
                {"track":	71	,	 "voz": "José Batista Pereira",	 "name": "	A ÚLTIMA HORA	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/gm5hf4o5z8c62d3/	"},
                {"track":	72	,	 "voz": "José Batista Pereira",	 "name": "	PODES CRER QUE JESUS É DEUS	",	 "length": "	02:29	",	 "file": "	https://www.mediafire.com/file/89813vr6hkl910a/	"},
                {"track":	73	,	 "voz": "José Batista Pereira",	 "name": "	A LINDA HISTÓRIA (EVANGELISMO)	",	 "length": "	02:49	",	 "file": "	https://www.mediafire.com/file/p2xw6ltn30iye4n/	"},
                {"track":	74	,	 "voz": "José Batista Pereira",	 "name": "	QUÃO GRANDE ÉS TU	",	 "length": "	05:20	",	 "file": "	https://www.mediafire.com/file/46myaap2uo6e632/	"},
                {"track":	75	,	 "voz": "José Batista Pereira",	 "name": "	AO SOM DA ÚLTIMA TROMBETA - 1 CORÍNTIOS 15",	 "length": "	03:01	",	 "file": "	https://www.mediafire.com/file/5g37n233rvfg1f8/	"},
                {"track":	76	,	 "voz": "José Batista Pereira",	 "name": "	O SENHOR É O MEU PASTOR (Salmos 23)",	 "length": "	03:12	",	 "file": "	https://www.mediafire.com/file/00nq57l9nau4py0/	"},
                {"track":	77	,	 "voz": "Lineu Arruda Binotti",	 "name": "	PORQUE TANTO AMOU!",	 "length": "	04:22	",	 "file": "	https://www.mediafire.com/file/7b8d9eetzpd4vxt/	"},
                {"track":	78	,	 "voz": "José Batista Pereira",	 "name": "	RECORDAÇÃO DO TEU AMOR!",	 "length": "	03:31	",	 "file": "	https://www.mediafire.com/file/gqdv00lephys539/	"},
                {"track":	79	,	 "voz": "Francisco Gregório Júnior",	 "name": "	ATÉ QUANDO (Salmo 4)",	 "length": "	02:36	",	 "file": "	https://www.mediafire.com/file/c0gr8fu6y1nz2dy/	"},
                {"track":	80	,	 "voz": "José Batista Pereira",	 "name": "	ROSTO DIVINO",	 "length": "	03:30	",	 "file": "	http://www.mediafire.com/file/7g68swt74s88bey/	"},
                {"track":	81	,	 "voz": "Lineu Arruda Binotti",	 "name": "	JÁ SALVO SOU",	 "length": "	03:28	",	 "file": "	http://www.mediafire.com/file/ycbak33fj1pm3g4/	"},
                {"track":	82	,	 "voz": "José Batista Pereira",	 "name": "BUSCAI PRIMEIRO O REINO DE DEUS",	 "length": "	02:35	",	 "file": "	http://www.mediafire.com/file/o2u16cxx64ub4ah/ "},
                {"track":	83	,	 "voz": "José Batista Pereira",	 "name": "QUANDO NÓS FORMOS CHAMADOS",	 "length": "	02:58	",	 "file": "	http://www.mediafire.com/file/hoeviwwe4edb6yl/	"},
                {"track":	84	,	 "voz": "José Batista Pereira",	 "name": "PARA SALVAR-TE",	 "length": "	05:01	",	 "file": "	http://www.mediafire.com/file/uu95d5vz8ivzlr5/	"},
                {"track":	85	,	 "voz": "Lineu Arruda Binotti",	 "name": "HOJE REMIDOS!",	 "length": "	03:17	",	 "file": "	http://www.mediafire.com/file/4dc6yj9z2y84i5c/	"},
                {"track":	86	,	 "voz": "José Batista Pereira",	 "name": "BOM AMIGO",	 "length": "	02:29	",	 "file": "	http://www.mediafire.com/file/rtrq42cfca96l6i/	"},
                {"track":	87	,	 "voz": "José Batista Pereira",	 "name": "TERNO E SUAVE",	 "length": "	04:41	",	 "file": "	https://www.mediafire.com/file/r971n5vo4p9335j/	"},
                {"track":	88	,	 "voz": "José Batista Pereira",	 "name": "NO PUEDE EL MUNDO SER MI HOGAR",	 "length": "	02:31	",	 "file": "	https://www.mediafire.com/file/xrcn627aj3s20oi/	"},
                {"track":	89	,	 "voz": "José Batista Pereira",	 "name": "A PALAVRA DE DEUS",	 "length": "	03:56	",	 "file": "	https://www.mediafire.com/file/8q6lhpdnpb59ag1/	"},
                {"track":	90	,	 "voz": "José Batista Pereira",	 "name": "VEM JESUS NOS BUSCAR",	 "length": "	03:01	",	 "file": "	https://www.mediafire.com/file/882i0mxtm544b4o/	"},
                {"track":	91	,	 "voz": "José Batista Pereira",	 "name": "SALMO 23 - VERSÃO II",	 "length": "	03:24	",	 "file": "	https://www.mediafire.com/file/83vb9lj55ackjyr/	"},
                {"track":	92	,	 "voz": "José Batista Pereira",	 "name": "SUBSTITUiÇÃO",	 "length": "	03:09	",	 "file": "	https://www.mediafire.com/file/ff6j2pycylznawa/	"},
                {"track":	93	,	 "voz": "José Batista Pereira",	 "name": "UMA VEZ MAIS",	 "length": "	03:01	",	 "file": "	https://www.mediafire.com/file/ihnederz4peages/	"},
                {"track":	94	,	 "voz": "José Batista Pereira",	 "name": "O GRANDE MOTIVO",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/3hhycuc2033bywj/	"},
                {"track":	95	,	 "voz": "José Batista Pereira",	 "name": "SOU FELIZ COM JESUS",	 "length": "	04:07	",	 "file": "	https://www.mediafire.com/file/iwgv3gcju4qmddz/	"},

],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackVoz = value.voz,
                    trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + ' - (' + trackVoz + ')' + '</div><div class="plLength">' + trackLength + '</div></div></li>');
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
document.write('<title>Audio Player - Comentários - Hinos Salmos e Cânticos</title>')

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
if(localStorage.hasOwnProperty(audioNextKey[0].innerHTML))
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
