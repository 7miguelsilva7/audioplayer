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
		anchorTrack = 1;
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
                {"track":	80	,	 "voz": "José Batista Pereira",	 "name": "	ROSTO DIVINO",	 "length": "	03:30	",	 "file": "	https://www.mediafire.com/file/7g68swt74s88bey/	"},
                {"track":	81	,	 "voz": "Lineu Arruda Binotti",	 "name": "	JÁ SALVO SOU",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/ycbak33fj1pm3g4/	"},
                {"track":	82	,	 "voz": "José Batista Pereira",	 "name": "BUSCAI PRIMEIRO O REINO DE DEUS",	 "length": "	02:35	",	 "file": "	https://www.mediafire.com/file/o2u16cxx64ub4ah/ "},
                {"track":	83	,	 "voz": "José Batista Pereira",	 "name": "QUANDO NÓS FORMOS CHAMADOS",	 "length": "	02:58	",	 "file": "	https://www.mediafire.com/file/hoeviwwe4edb6yl/	"},
                {"track":	84	,	 "voz": "José Batista Pereira",	 "name": "PARA SALVAR-TE",	 "length": "	05:01	",	 "file": "	https://www.mediafire.com/file/uu95d5vz8ivzlr5/	"},
                {"track":	85	,	 "voz": "Lineu Arruda Binotti",	 "name": "HOJE REMIDOS!",	 "length": "	03:17	",	 "file": "	https://www.mediafire.com/file/4dc6yj9z2y84i5c/	"},
                {"track":	86	,	 "voz": "José Batista Pereira",	 "name": "BOM AMIGO",	 "length": "	02:29	",	 "file": "	https://www.mediafire.com/file/rtrq42cfca96l6i/	"},
                {"track":	87	,	 "voz": "José Batista Pereira",	 "name": "TERNO E SUAVE",	 "length": "	04:41	",	 "file": "	https://www.mediafire.com/file/r971n5vo4p9335j/	"},
                {"track":	88	,	 "voz": "José Batista Pereira",	 "name": "NO PUEDE EL MUNDO SER MI HOGAR",	 "length": "	02:31	",	 "file": "	https://www.mediafire.com/file/xrcn627aj3s20oi/	"},
                {"track":	89	,	 "voz": "José Batista Pereira",	 "name": "A PALAVRA DE DEUS",	 "length": "	03:56	",	 "file": "	https://www.mediafire.com/file/8q6lhpdnpb59ag1/	"},
                {"track":	90	,	 "voz": "José Batista Pereira",	 "name": "VEM JESUS NOS BUSCAR",	 "length": "	03:01	",	 "file": "	https://www.mediafire.com/file/882i0mxtm544b4o/	"},
                {"track":	91	,	 "voz": "José Batista Pereira",	 "name": "SALMO 23 - VERSÃO II",	 "length": "	03:24	",	 "file": "	https://www.mediafire.com/file/83vb9lj55ackjyr/	"},
                {"track":	92	,	 "voz": "José Batista Pereira",	 "name": "SUBSTITUiÇÃO",	 "length": "	03:09	",	 "file": "	https://www.mediafire.com/file/ff6j2pycylznawa/	"},
                {"track":	93	,	 "voz": "José Batista Pereira",	 "name": "UMA VEZ MAIS",	 "length": "	03:01	",	 "file": "	https://www.mediafire.com/file/ihnederz4peages/	"},
                {"track":	94	,	 "voz": "José Batista Pereira",	 "name": "O GRANDE MOTIVO",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/3hhycuc2033bywj/	"},
                {"track":	95	,	 "voz": "José Batista Pereira",	 "name": "SOU FELIZ COM JESUS",	 "length": "	04:07	",	 "file": "	https://www.mediafire.com/file/iwgv3gcju4qmddz/	"},
                {"track":	96	,	 "voz": "José Batista Pereira",	 "name": "ESCUTA, POBRE PECADOR",	 "length": "	03:11	",	 "file": "	https://www.mediafire.com/file/6aud3v475cmbcuj/	"},

                {"track":	1	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 001 - Aba, Pai, a Ti Chegamos	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	b1o25cfx24zq3aq	/	Hino 001 - Aba, Pai, a Ti Chegamos.mp3	"},
                {"track":	2	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 002 - Foi Nessa Noite Escura	",	 "length": "	04:03	",	 "file": "	https://www.mediafire.com/file/	70g76ph8lca4kra	/	Hino 002 - Foi Nessa Noite Escura.mp3	"},
                {"track":	3	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 003 - Todos Juntos Adoremos	",	 "length": "	02:47	",	 "file": "	https://www.mediafire.com/file/	b4raj8jeg8fpxs5	/	Hino 003 - Todos Juntos Adoremos.mp3	"},
                {"track":	4	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 004 - Jesus, Senhor Amado!	",	 "length": "	03:10	",	 "file": "	https://www.mediafire.com/file/	88raad68ws66hbx	/	Hino 004 - Jesus, Senhor Amado!.mp3	"},
                {"track":	5	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 005 - Senhor, Hoje Lembrando	",	 "length": "	02:22	",	 "file": "	https://www.mediafire.com/file/	78k3m7y03zav8s4	/	Hino 005 - Senhor, Hoje Lembrando.mp3	"},
                {"track":	6	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 006 - Em Tua Ceia Nos Juntamos	",	 "length": "	02:33	",	 "file": "	https://www.mediafire.com/file/	loew5meooioxo1m	/	Hino 006 - Em Tua Ceia Nos Juntamos.mp3	"},
                {"track":	7	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 007 - Quão Imensa Foi a Graça!	",	 "length": "	03:08	",	 "file": "	https://www.mediafire.com/file/	bbawzriektomcoz	/	Hino 007 - Quão Imensa Foi a Graça!.mp3	"},
                {"track":	8	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 008 - Levantado Foi Jesus	",	 "length": "	02:08	",	 "file": "	https://www.mediafire.com/file/	1fbg9so8095d7db	/	Hino 008 - Levantado Foi Jesus.mp3	"},
                {"track":	9	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 009 - Ao Senhor Jesus Louvemos	",	 "length": "	01:21	",	 "file": "	https://www.mediafire.com/file/	k6ii5tntkm17tcr	/	Hino 009 - Ao Senhor Jesus Louvemos.mp3	"},
                {"track":	10	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 010 - Substituição	",	 "length": "	03:05	",	 "file": "	https://www.mediafire.com/file/	vxq7wyrfx016d44	/	Hino 010 - Substituição.mp3	"},
                {"track":	11	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 011 - Qual Irmãos Reunidos	",	 "length": "	02:42	",	 "file": "	https://www.mediafire.com/file/	d7fffonqmh8iyjb	/	Hino 011 - Qual Irmãos Reunidos.mp3	"},
                {"track":	12	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 012 - O Grande Motivo	",	 "length": "	04:27	",	 "file": "	https://www.mediafire.com/file/	31iacx7zwih8jaw	/	Hino 012 - O Grande Motivo.mp3	"},
                {"track":	13	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 013 - Ao Que Vive	",	 "length": "	02:31	",	 "file": "	https://www.mediafire.com/file/	cjgsiiml6ril9g1	/	Hino 013 - Ao Que Vive.mp3	"},
                {"track":	14	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 014 - Teu Sacrifício Excelso	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	s2fve112zcejm4s	/	Hino 014 - Teu Sacrifício Excelso.mp3	"},
                {"track":	15	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 015 - Rosto Divino	",	 "length": "	02:38	",	 "file": "	https://www.mediafire.com/file/	c7w778xbf7nl21y	/	Hino 015 - Rosto Divino.mp3	"},
                {"track":	16	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 016 - Pontífice Real - Morning Light_ Stand Up For Jesus (The Holiest We Enter)	",	 "length": "	02:42	",	 "file": "	https://www.mediafire.com/file/	0um2e6gz2c4c23e	/	Hino 016 - Pontífice Real - Morning Light_ Stand Up For Jesus (The Holiest We Enter).mp3	"},
                {"track":	17	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 017 - Tua Dura Cruz	",	 "length": "	02:26	",	 "file": "	https://www.mediafire.com/file/	mm7ch84jqc29kcf	/	Hino 017 - Tua Dura Cruz.mp3	"},
                {"track":	18	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 018 - A Tua Palavra, Ó Senhor	",	 "length": "	02:45	",	 "file": "	https://www.mediafire.com/file/	7ap8pmurcuwwz86	/	Hino 018 - A Tua Palavra, Ó Senhor.mp3	"},
                {"track":	19	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 019 - A Ti Para Sempre Seja o Louvor	",	 "length": "	02:22	",	 "file": "	https://www.mediafire.com/file/	98itnbhslz6p439	/	Hino 019 - A Ti Para Sempre Seja o Louvor.mp3	"},
                {"track":	20	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 020 - Remissão	",	 "length": "	01:31	",	 "file": "	https://www.mediafire.com/file/	cik5kea5fporm7i	/	Hino 020 - Remissão.mp3	"},
                {"track":	21	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 021 - A Cruz de Cristo	",	 "length": "	03:17	",	 "file": "	https://www.mediafire.com/file/	fuq1ygsc9awio1x	/	Hino 021 - A Cruz de Cristo.mp3	"},
                {"track":	22	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 022 - Te Adoramos, Ó Cordeiro!	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	fg19rvmfaf82m9a	/	Hino 022 - Te Adoramos, Ó Cordeiro!.mp3	"},
                {"track":	23	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 023 - Teu Amor Tenaz	",	 "length": "	02:08	",	 "file": "	https://www.mediafire.com/file/	qvvxo7rf9eque22	/	Hino 023 - Teu Amor Tenaz.mp3	"},
                {"track":	24	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 024 - Porque Tanto Amou!	",	 "length": "	04:02	",	 "file": "	https://www.mediafire.com/file/	0cax9xojbwb0rnk	/	Hino 024 - Porque Tanto Amou!.mp3	"},
                {"track":	25	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 025 - Ninguém Mais - No One Ever Cared For Me Like Jesus	",	 "length": "	02:24	",	 "file": "	https://www.mediafire.com/file/	l9806qdqtbn0q6z	/	Hino 025 - Ninguém Mais - No One Ever Cared For Me Like Jesus.mp3	"},
                {"track":	26	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 026 - Ao Contemplarmos Tua Cruz	",	 "length": "	02:14	",	 "file": "	https://www.mediafire.com/file/	47pf3x6cwrph57s	/	Hino 026 - Ao Contemplarmos Tua Cruz.mp3	"},
                {"track":	27	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 027 - O Amor Divino	",	 "length": "	03:20	",	 "file": "	https://www.mediafire.com/file/	o1rg1e5l0z0x3m2	/	Hino 027 - O Amor Divino.mp3	"},
                {"track":	28	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 028 - Oh! Que Amor Teve Deus Pai!	",	 "length": "	02:43	",	 "file": "	https://www.mediafire.com/file/	cjbuovcv65b567f	/	Hino 028 - Oh! Que Amor Teve Deus Pai!.mp3	"},
                {"track":	29	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 029 - A Mensagem da Cruz	",	 "length": "	04:02	",	 "file": "	https://www.mediafire.com/file/	8id7xhrwbck5pzb	/	Hino 029 - A Mensagem da Cruz.mp3	"},
                {"track":	30	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 030 - Amor Glorioso	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	2mo217v6luzzgij	/	Hino 030 - Amor Glorioso.mp3	"},
                {"track":	31	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 031 - Alvos, Mais Que a Neve!	",	 "length": "	03:28	",	 "file": "	https://www.mediafire.com/file/	65gfpbdfm2sfh8n	/	Hino 031 - Alvos, Mais Que a Neve!.mp3	"},
                {"track":	32	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 032 - Jesus, Que Rico Nome!	",	 "length": "	02:40	",	 "file": "	https://www.mediafire.com/file/	lzxuh4x5tft022i	/	Hino 032 - Jesus, Que Rico Nome!.mp3	"},
                {"track":	33	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 033 - Deus e Pai a Ti Louvamos	",	 "length": "	03:05	",	 "file": "	https://www.mediafire.com/file/	u69xi5fyaa35k5o	/	Hino 033 - Deus e Pai a Ti Louvamos.mp3	"},
                {"track":	34	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 034 - Jesus, Estrela Da Manhã	",	 "length": "	02:46	",	 "file": "	https://www.mediafire.com/file/	ainmhamoddfgs0m	/	Hino 034 - Jesus, Estrela Da Manhã.mp3	"},
                {"track":	35	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 035 - Palácios de Marfim	",	 "length": "	03:49	",	 "file": "	https://www.mediafire.com/file/	mu932mxlesj8ajf	/	Hino 035 - Palácios de Marfim.mp3	"},
                {"track":	36	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 036 - Teu Nome, Ó Amado!	",	 "length": "	02:36	",	 "file": "	https://www.mediafire.com/file/	eqd3e8bmwdu9qsf	/	Hino 036 - Teu Nome, Ó Amado!.mp3	"},
                {"track":	37	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 037 - Rocha Eterna	",	 "length": "	02:22	",	 "file": "	https://www.mediafire.com/file/	v55mwuxca4zgre9	/	Hino 037 - Rocha Eterna.mp3	"},
                {"track":	38	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 038 - Rasgou	",	 "length": "	03:03	",	 "file": "	https://www.mediafire.com/file/	cv2epvx990yvkv5	/	Hino 038 - Rasgou.mp3	"},
                {"track":	39	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 039 - Ao Nosso Deus e Pai	",	 "length": "	01:59	",	 "file": "	https://www.mediafire.com/file/	358twtuwz06l9rw	/	Hino 039 - Ao Nosso Deus e Pai.mp3	"},
                {"track":	40	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 040 - Senhor, Te Adoramos	",	 "length": "	02:02	",	 "file": "	https://www.mediafire.com/file/	cumsby0pklade16	/	Hino 040 - Senhor, Te Adoramos.mp3	"},
                {"track":	41	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 041 - Louvamos	",	 "length": "	02:16	",	 "file": "	https://www.mediafire.com/file/	383vhpfd19gdp4j	/	Hino 041 - Louvamos.mp3	"},
                {"track":	42	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 042 - A Deus Seja a Glória	",	 "length": "	03:20	",	 "file": "	https://www.mediafire.com/file/	dahuyd8c0dguhhy	/	Hino 042 - A Deus Seja a Glória.mp3	"},
                {"track":	43	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 043 - Santo, Santo, Santo!	",	 "length": "	02:59	",	 "file": "	https://www.mediafire.com/file/	o6y47962z0yan16	/	Hino 043 - Santo, Santo, Santo!.mp3	"},
                {"track":	44	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 044 - Glória ao Cordeiro	",	 "length": "	02:04	",	 "file": "	https://www.mediafire.com/file/	d9mmfcvq3hamx0a	/	Hino 044 - Glória ao Cordeiro.mp3	"},
                {"track":	45	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 045 - Ao Que Está Sentado	",	 "length": "	01:20	",	 "file": "	https://www.mediafire.com/file/	ct5n2cafa748hqc	/	Hino 045 - Ao Que Está Sentado.mp3	"},
                {"track":	46	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 046 - Amor Sublime	",	 "length": "	01:45	",	 "file": "	https://www.mediafire.com/file/	ad0mi46sqzee3g8	/	Hino 046 - Amor Sublime.mp3	"},
                {"track":	47	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 047 - Tema Encantador	",	 "length": "	02:38	",	 "file": "	https://www.mediafire.com/file/	wgqz887gpymi33i	/	Hino 047 - Tema Encantador.mp3	"},
                {"track":	48	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 048 - Terno Salvador - Meet Me There, Be In Time (De Mi Tierno Salvador)	",	 "length": "	03:00	",	 "file": "	https://www.mediafire.com/file/	i7wl85asss2k2ty	/	Hino 048 - Terno Salvador - Meet Me There, Be In Time (De Mi Tierno Salvador).mp3	"},
                {"track":	49	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 049 - Quão Grande És Tu!	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	byib30eqjxr79k1	/	Hino 049 - Quão Grande És Tu!.mp3	"},
                {"track":	50	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 050 - O Amor de Jesus	",	 "length": "	02:24	",	 "file": "	https://www.mediafire.com/file/	ilq4bq8dr8i0rth	/	Hino 050 - O Amor de Jesus.mp3	"},
                {"track":	51	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 051 - Grata Memória	",	 "length": "	03:01	",	 "file": "	https://www.mediafire.com/file/	0c7g83s9sdsn598	/	Hino 051 - Grata Memória.mp3	"},
                {"track":	52	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 052 - Promessa de Deus	",	 "length": "	03:44	",	 "file": "	https://www.mediafire.com/file/	a9ocj8nr91pvpb2	/	Hino 052 - Promessa de Deus.mp3	"},
                {"track":	53	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 053 - Hoje Remidos!	",	 "length": "	02:59	",	 "file": "	https://www.mediafire.com/file/	xbl607f9tv8kh42	/	Hino 053 - Hoje Remidos!.mp3	"},
                {"track":	54	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 054 - Cristo Já Ressuscitou	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	hhgfgd22yspgvci	/	Hino 054 - Cristo Já Ressuscitou.mp3	"},
                {"track":	55	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 055 - Oh! Que Amor Divino!	",	 "length": "	03:06	",	 "file": "	https://www.mediafire.com/file/	gk5zt6bkpaxyegv	/	Hino 055 - Oh! Que Amor Divino!.mp3	"},
                {"track":	56	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 056 - Rompe a Aurora	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	hebcv8zj5sov81a	/	Hino 056 - Rompe a Aurora.mp3	"},
                {"track":	57	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 057 - Te Contemplamos	",	 "length": "	03:31	",	 "file": "	https://www.mediafire.com/file/	ilmx4472ok1egkg	/	Hino 057 - Te Contemplamos.mp3	"},
                {"track":	58	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 058 - Graças Por Teu Padecer	",	 "length": "	03:21	",	 "file": "	https://www.mediafire.com/file/	5lty1fxf1wqi84f	/	Hino 058 - Graças Por Teu Padecer.mp3	"},
                {"track":	59	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 059 - Somente Em Teu Louvor	",	 "length": "	02:57	",	 "file": "	https://www.mediafire.com/file/	af7beu9ld1vndcz	/	Hino 059 - Somente Em Teu Louvor.mp3	"},
                {"track":	60	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 060 - Teu Nome, Ó Jesus!	",	 "length": "	03:32	",	 "file": "	https://www.mediafire.com/file/	1g9z2icryj5167c	/	Hino 060 - Teu Nome, Ó Jesus!.mp3	"},
                {"track":	61	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 061 - Te Humilhaste, Senhor	",	 "length": "	03:05	",	 "file": "	https://www.mediafire.com/file/	av15z53q0q6vf4d	/	Hino 061 - Te Humilhaste, Senhor.mp3	"},
                {"track":	62	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 062 - Não a Nós Seja a Glória	",	 "length": "	03:43	",	 "file": "	https://www.mediafire.com/file/	uiqno3lle7xan71	/	Hino 062 - Não a Nós Seja a Glória.mp3	"},
                {"track":	63	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 063 - A Cristo Coroai	",	 "length": "	02:18	",	 "file": "	https://www.mediafire.com/file/	5pf6ephzl5cgs2q	/	Hino 063 - A Cristo Coroai.mp3	"},
                {"track":	64	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 064 - Exaltado Na Eterna Glória	",	 "length": "	02:33	",	 "file": "	https://www.mediafire.com/file/	ax7cvw2d3353nds	/	Hino 064 - Exaltado Na Eterna Glória.mp3	"},
                {"track":	65	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 065 - Coro Santo	",	 "length": "	05:10	",	 "file": "	https://www.mediafire.com/file/	4zwz4wr7mwddz4k	/	Hino 065 - Coro Santo.mp3	"},
                {"track":	66	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 066 - Nos Altos Céus	",	 "length": "	02:09	",	 "file": "	https://www.mediafire.com/file/	pp2dwaoap70j997	/	Hino 066 - Nos Altos Céus.mp3	"},
                {"track":	67	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 067 - Aleluia, Ressurgiu!	",	 "length": "	02:35	",	 "file": "	https://www.mediafire.com/file/	49ng76n5ak581l2	/	Hino 067 - Aleluia, Ressurgiu!.mp3	"},
                {"track":	68	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 068 - Cordeiro Imaculado	",	 "length": "	03:40	",	 "file": "	https://www.mediafire.com/file/	9l91ar3dp3vl1n6	/	Hino 068 - Cordeiro Imaculado.mp3	"},
                {"track":	69	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 069 - Nosso Cordial Louvor	",	 "length": "	02:35	",	 "file": "	https://www.mediafire.com/file/	9204bd4x6ax8evl	/	Hino 069 - Nosso Cordial Louvor.mp3	"},
                {"track":	70	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 070 - Glória Damos a Jesus	",	 "length": "	01:55	",	 "file": "	https://www.mediafire.com/file/	5njg6b7h3cx7x69	/	Hino 070 - Glória Damos a Jesus.mp3	"},
                {"track":	71	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 071 - Te Louvamos Jesus	",	 "length": "	02:13	",	 "file": "	https://www.mediafire.com/file/	i85sxu4vtx9i0dd	/	Hino 071 - Te Louvamos Jesus.mp3	"},
                {"track":	72	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 072 - Ó Deus e Pai	",	 "length": "	01:10	",	 "file": "	https://www.mediafire.com/file/	8m5r7xfkdsbv1c5	/	Hino 072 - Ó Deus e Pai.mp3	"},
                {"track":	73	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 073 - A Ti Que Morreste	",	 "length": "	01:20	",	 "file": "	https://www.mediafire.com/file/	bxcb3cxnafv2t1d	/	Hino 073 - A Ti Que Morreste.mp3	"},
                {"track":	74	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 074 - Nome Sem Igual	",	 "length": "	02:18	",	 "file": "	https://www.mediafire.com/file/	8ee7mn3gbizsiir	/	Hino 074 - Nome Sem Igual.mp3	"},
                {"track":	75	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 075 - Adorado Salvador	",	 "length": "	02:40	",	 "file": "	https://www.mediafire.com/file/	q2wfj1jf8jyc7k6	/	Hino 075 - Adorado Salvador.mp3	"},
                {"track":	76	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 076 - Até a Cruz	",	 "length": "	02:39	",	 "file": "	https://www.mediafire.com/file/	9f7sw20b7ysivqv	/	Hino 076 - Até a Cruz.mp3	"},
                {"track":	77	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 077 - Recordação do Teu Amor	",	 "length": "	03:33	",	 "file": "	https://www.mediafire.com/file/	enm02r9otpe29f1	/	Hino 077 - Recordação do Teu Amor.mp3	"},
                {"track":	78	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 078 - Morreste Tu Por Nós	",	 "length": "	01:28	",	 "file": "	https://www.mediafire.com/file/	ymrgt9o33zyqadd	/	Hino 078 - Morreste Tu Por Nós.mp3	"},
                {"track":	79	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 079 - Meditação Sublime	",	 "length": "	01:20	",	 "file": "	https://www.mediafire.com/file/	1zp84u7ttea7c3s	/	Hino 079 - Meditação Sublime.mp3	"},
                {"track":	80	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 080 - Aleluia! Cristo Ressuscitou!	",	 "length": "	03:17	",	 "file": "	https://www.mediafire.com/file/	snhcoaojpf23z6y	/	Hino 080 - Aleluia! Cristo Ressuscitou!.mp3	"},
                {"track":	81	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 081 - Ao Nome Excelso	",	 "length": "	02:29	",	 "file": "	https://www.mediafire.com/file/	9541kxz758zoyo3	/	Hino 081 - Ao Nome Excelso.mp3	"},
                {"track":	82	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 082 - Oh! Quão Ensanguentada!	",	 "length": "	02:44	",	 "file": "	https://www.mediafire.com/file/	z6pcvmgvynzyw63	/	Hino 082 - Oh! Quão Ensanguentada!.mp3	"},
                {"track":	83	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 101 - A Nós Tens Agora, Senhor	",	 "length": "	02:54	",	 "file": "	https://www.mediafire.com/file/	40u93ujuc0l7nhb	/	Hino 101 - A Nós Tens Agora, Senhor.mp3	"},
                {"track":	84	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 102 - Bom Amigo	",	 "length": "	02:33	",	 "file": "	https://www.mediafire.com/file/	pmncinena4fp7w8	/	Hino 102 - Bom Amigo.mp3	"},
                {"track":	85	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 103 - Doce Comunhão	",	 "length": "	02:17	",	 "file": "	https://www.mediafire.com/file/	jzb3s06d83pc7o6	/	Hino 103 - Doce Comunhão.mp3	"},
                {"track":	86	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 104 - Cada Momento	",	 "length": "	04:28	",	 "file": "	https://www.mediafire.com/file/	5ledd4xywe16vhy	/	Hino 104 - Cada Momento.mp3	"},
                {"track":	87	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 105 - Quando a Ti Nos Achegamos	",	 "length": "	03:10	",	 "file": "	https://www.mediafire.com/file/	356k46reuu6yfn0	/	Hino 105 - Quando a Ti Nos Achegamos.mp3	"},
                {"track":	88	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 106 - A Ti, Ó Pai, Em Oração	",	 "length": "	03:06	",	 "file": "	https://www.mediafire.com/file/	6e5rgofhoc5lbjl	/	Hino 106 - A Ti, Ó Pai, Em Oração.mp3	"},
                {"track":	89	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 107 - Deus Proverá	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	g5plqae99i8axt0	/	Hino 107 - Deus Proverá.mp3	"},
                {"track":	90	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 108 - Doce Consolo	",	 "length": "	03:04	",	 "file": "	https://www.mediafire.com/file/	am6p1jz1oaw8cuj	/	Hino 108 - Doce Consolo.mp3	"},
                {"track":	91	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 109 - Quão Bom Escutar Tua Voz!	",	 "length": "	02:34	",	 "file": "	https://www.mediafire.com/file/	80dg84ie32ss3u0	/	Hino 109 - Quão Bom Escutar Tua Voz!.mp3	"},
                {"track":	92	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 110 - Mais de Jesus	",	 "length": "	02:38	",	 "file": "	https://www.mediafire.com/file/	8j4afwktbcf3wd7	/	Hino 110 - Mais de Jesus.mp3	"},
                {"track":	93	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 111 - Pão Sem Par	",	 "length": "	02:05	",	 "file": "	https://www.mediafire.com/file/	s8h601y4o2ub146	/	Hino 111 - Pão Sem Par.mp3	"},
                {"track":	94	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 112 - Com Mil Línguas - Azmon (O For a Thousand Tongues to Sing)	",	 "length": "	02:22	",	 "file": "	https://www.mediafire.com/file/	zrky95c3md9amkj	/	Hino 112 - Com Mil Línguas - Azmon (O For a Thousand Tongues to Sing).mp3	"},
                {"track":	95	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 113 - Nosso Bom Salvador	",	 "length": "	02:08	",	 "file": "	https://www.mediafire.com/file/	0t1tef6vfduis8s	/	Hino 113 - Nosso Bom Salvador.mp3	"},
                {"track":	96	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 114 - Primeiro Amor	",	 "length": "	02:49	",	 "file": "	https://www.mediafire.com/file/	5c4yy8bc21bcc6l	/	Hino 114 - Primeiro Amor.mp3	"},
                {"track":	97	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 115 - Perto, Mais Perto	",	 "length": "	03:47	",	 "file": "	https://www.mediafire.com/file/	rwihnxfvk6h7n7w	/	Hino 115 - Perto, Mais Perto.mp3	"},
                {"track":	98	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 116 - Mais Perto	",	 "length": "	02:20	",	 "file": "	https://www.mediafire.com/file/	3ev73q7jk21duf2	/	Hino 116 - Mais Perto.mp3	"},
                {"track":	99	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 117 - Paz, Paz, Quão Doce Paz!	",	 "length": "	03:52	",	 "file": "	https://www.mediafire.com/file/	bqpff2rs0s020ow	/	Hino 117 - Paz, Paz, Quão Doce Paz!.mp3	"},
                {"track":	100	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 118 - Faze o Que Queres	",	 "length": "	02:42	",	 "file": "	https://www.mediafire.com/file/	2o34m9o7i8nd3y7	/	Hino 118 - Faze o Que Queres.mp3	"},
                {"track":	101	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 119 - Peregrinos	",	 "length": "	02:24	",	 "file": "	https://www.mediafire.com/file/	fdszalt4ebmdw4a	/	Hino 119 - Peregrinos.mp3	"},
                {"track":	102	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 120 - Paciente e Fiel Pastor	",	 "length": "	02:01	",	 "file": "	https://www.mediafire.com/file/	q66smd0ms8clp5e	/	Hino 120 - Paciente e Fiel Pastor.mp3	"},
                {"track":	103	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 121 - És, Senhor, Nosso Pastor - In The Heavenly Pastures Fair	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	c0koh65ftj520bs	/	Hino 121 - És, Senhor, Nosso Pastor - In The Heavenly Pastures Fair.mp3	"},
                {"track":	104	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 122 - Oh! Ensina	",	 "length": "	02:19	",	 "file": "	https://www.mediafire.com/file/	4535djdsfsp05dd	/	Hino 122 - Oh! Ensina.mp3	"},
                {"track":	105	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 123 - Manancial de Todo Gozo	",	 "length": "	01:42	",	 "file": "	https://www.mediafire.com/file/	muok8nd9l180mcc	/	Hino 123 - Manancial de Todo Gozo.mp3	"},
                {"track":	106	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 124 - Precioso Nome	",	 "length": "	03:05	",	 "file": "	https://www.mediafire.com/file/	6266cti62rwr91s	/	Hino 124 - Precioso Nome.mp3	"},
                {"track":	107	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 125 - Firmeza	",	 "length": "	02:18	",	 "file": "	https://www.mediafire.com/file/	i15kpec5fyycv5f	/	Hino 125 - Firmeza.mp3	"},
                {"track":	108	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 126 - Vem, Senhor, Vem Nos Guiar	",	 "length": "	01:45	",	 "file": "	https://www.mediafire.com/file/	rze8zv0fb55ib70	/	Hino 126 - Vem, Senhor, Vem Nos Guiar.mp3	"},
                {"track":	109	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 127 - Toma	",	 "length": "	02:55	",	 "file": "	https://www.mediafire.com/file/	w7trboh2zk11yzo	/	Hino 127 - Toma.mp3	"},
                {"track":	144	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 128 - Deus Nos Guarde	",	 "length": "	04:16	",	 "file": "	https://www.mediafire.com/file/	68jy6cqejae2vbw	/	Hino 213 - Deus Nos Guarde.mp3	"},
                {"track":	111	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 129 - Obedecer	",	 "length": "	03:55	",	 "file": "	https://www.mediafire.com/file/	uxu8nvx2azmx6rd	/	Hino 129 - Obedecer.mp3	"},
                {"track":	112	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 130 - Tua Senda, Ó Mestre	",	 "length": "	03:04	",	 "file": "	https://www.mediafire.com/file/	opdda4dtvqi98um	/	Hino 130 - Tua Senda, Ó Mestre.mp3	"},
                {"track":	113	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 131 - Cristo Está Conosco	",	 "length": "	04:39	",	 "file": "	https://www.mediafire.com/file/	8nsdnvyii3xvk78	/	Hino 131 - Cristo Está Conosco.mp3	"},
                {"track":	114	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 132 - Para Qualquer Parte	",	 "length": "	02:47	",	 "file": "	https://www.mediafire.com/file/	r2bfeau9d9s3omq	/	Hino 132 - Para Qualquer Parte.mp3	"},
                {"track":	115	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 133 - Nossa Canção Hoje Aceita	",	 "length": "	02:06	",	 "file": "	https://www.mediafire.com/file/	6x4ecauyqq6rurv	/	Hino 133 - Nossa Canção Hoje Aceita.mp3	"},
                {"track":	116	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 134 - Fé, A Vitória É	",	 "length": "	03:27	",	 "file": "	https://www.mediafire.com/file/	75e3p3zv6o6oxpk	/	Hino 134 - Fé, A Vitória É.mp3	"},
                {"track":	117	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 135 - Desperta, Ó Santo!	",	 "length": "	03:17	",	 "file": "	https://www.mediafire.com/file/	wl92as8ahz6995a	/	Hino 135 - Desperta, Ó Santo!.mp3	"},
                {"track":	118	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 136 - Estai Por Cristo Firmes! - Geibel (Stand Up For Jesus)	",	 "length": "	04:13	",	 "file": "	https://www.mediafire.com/file/	36y1p6chgxgr0qg	/	Hino 136 - Estai Por Cristo Firmes! - Geibel (Stand Up For Jesus).mp3	"},
                {"track":	119	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 137 - Quando Nós Formos Chamados - When The Roll Is Called Up Younder	",	 "length": "	03:00	",	 "file": "	https://www.mediafire.com/file/	rk63qrp30reyiqu	/	Hino 137 - Quando Nós Formos Chamados - When The Roll Is Called Up Younder.mp3	"},
                {"track":	120	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 138 - Não Haverá Tribulação	",	 "length": "	03:16	",	 "file": "	https://www.mediafire.com/file/	v5ux6op1mggovok	/	Hino 138 - Não Haverá Tribulação.mp3	"},
                {"track":	121	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 139 - Indo à Pátria	",	 "length": "	02:34	",	 "file": "	https://www.mediafire.com/file/	9490h77ia2vcw44	/	Hino 139 - Indo à Pátria.mp3	"},
                {"track":	122	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 140 - Fiel e Terno Amigo	",	 "length": "	02:54	",	 "file": "	https://www.mediafire.com/file/	zqnbxw6bthmdkvd	/	Hino 140 - Fiel e Terno Amigo.mp3	"},
                {"track":	123	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 141 - Face a Face	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	gkbaqcz1jkapxj0	/	Hino 141 - Face a Face.mp3	"},
                {"track":	124	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 142 - Em Trevas Foi Nosso Viver	",	 "length": "	02:34	",	 "file": "	https://www.mediafire.com/file/	7xqx9hr6k1rkif6	/	Hino 142 - Em Trevas Foi Nosso Viver.mp3	"},
                {"track":	125	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 143 - Jesus, Em Breve Hás de Vir	",	 "length": "	03:32	",	 "file": "	https://www.mediafire.com/file/	7331vfk4b9u7dj5	/	Hino 143 - Jesus, Em Breve Hás de Vir.mp3	"},
                {"track":	126	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 144 - Oh! Jesus, Bom Pastor!	",	 "length": "	03:08	",	 "file": "	https://www.mediafire.com/file/	aiouuu71xxq92ca	/	Hino 144 - Oh! Jesus, Bom Pastor!.mp3	"},
                {"track":	127	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 145 - Sempre, Sempre	",	 "length": "	02:54	",	 "file": "	https://www.mediafire.com/file/	ffio203bj2z42w2	/	Hino 145 - Sempre, Sempre.mp3	"},
                {"track":	128	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 146 - Há Um Lar Mui Feliz	",	 "length": "	02:25	",	 "file": "	https://www.mediafire.com/file/	uavg22hwc35pk6h	/	Hino 146 - Há Um Lar Mui Feliz.mp3	"},
                {"track":	129	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 147 - Doce Paz	",	 "length": "	02:47	",	 "file": "	https://www.mediafire.com/file/	zq6qtd86ts2fjt2	/	Hino 147 - Doce Paz.mp3	"},
                {"track":	130	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 148 - Nos Levarás ao Lar	",	 "length": "	04:01	",	 "file": "	https://www.mediafire.com/file/	r64bm565dri1mh9	/	Hino 148 - Nos Levarás ao Lar.mp3	"},
                {"track":	131	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 149 - Tu, Senhor, Nos Guias Sempre	",	 "length": "	03:20	",	 "file": "	https://www.mediafire.com/file/	o1gvub16dcg5shd	/	Hino 149 - Tu, Senhor, Nos Guias Sempre.mp3	"},
                {"track":	131	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 150 - Admirável Amor	",	 "length": "	00:40	",	 "file": "	https://www.mediafire.com/file/	3bm3773q0c9u54b/	"},
                {"track":	132	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 201 - Oh! Graça Sublime!	",	 "length": "	02:25	",	 "file": "	https://www.mediafire.com/file/	0sao0r6ooi512k4	/	Hino 201 - Oh! Graça Sublime!.mp3	"},
                {"track":	133	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 202 - Mais Além do Sol	",	 "length": "	04:14	",	 "file": "	https://www.mediafire.com/file/	02y0akv5r4377u3	/	Hino 202 - Mais Além do Sol.mp3	"},
                {"track":	134	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 203 - Já Salvo Sou	",	 "length": "	03:23	",	 "file": "	https://www.mediafire.com/file/	o7090w9ozd6vm56	/	Hino 203 - Já Salvo Sou.mp3	"},
                {"track":	135	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 204 - Doce Certeza	",	 "length": "	02:53	",	 "file": "	https://www.mediafire.com/file/	z53001oz5lzov9y	/	Hino 204 - Doce Certeza.mp3	"},
                {"track":	136	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 205 - Achei Um Bom Amigo	",	 "length": "	02:17	",	 "file": "	https://www.mediafire.com/file/	f1e1mo0egfxyopp	/	Hino 205 - Achei Um Bom Amigo.mp3	"},
                {"track":	137	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 206 - Livre Estou	",	 "length": "	03:10	",	 "file": "	https://www.mediafire.com/file/	kczbg10fgcvtj2v	/	Hino 206 - Livre Estou.mp3	"},
                {"track":	138	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 207 - Novas Alegres	",	 "length": "	01:59	",	 "file": "	https://www.mediafire.com/file/	axysktybvs2mavg	/	Hino 207 - Novas Alegres.mp3	"},
                {"track":	139	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 208 - Longe Esteja de Mim Gloriar	",	 "length": "	02:06	",	 "file": "	https://www.mediafire.com/file/	mk8loe11hvj9rhr	/	Hino 208 - Longe Esteja de Mim Gloriar.mp3	"},
                {"track":	140	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 209 - A Voz de Cristo	",	 "length": "	02:25	",	 "file": "	https://www.mediafire.com/file/	05fge3aphukef85	/	Hino 209 - A Voz de Cristo.mp3	"},
                {"track":	141	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 210 - Meu Salvador	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	6cahhco8q3kujy5	/	Hino 210 - Meu Salvador.mp3	"},
                {"track":	142	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 211 - Sou Feliz	",	 "length": "	03:51	",	 "file": "	https://www.mediafire.com/file/	4y72f4u5qz0y425	/	Hino 211 - Sou Feliz.mp3	"},
                {"track":	143	,	"voz": "Lineu Arruda Binotti", "name": "	Hino 212 - Deus Cuidará de Ti	",	 "length": "	03:03	",	 "file": "	https://www.mediafire.com/file/	fi6vubbqby2a5bk	/	Hino 212 - Deus Cuidará de Ti.mp3	"},
                
               
                {"track":	1	, "voz": "Catherine",    "name": "	A PORTA É UMA SÓ (Cantado por uma criança)	",	 "length": "	01:27	",	 "file": "	https://www.mediafire.com/file/	dp90tj5e23tes6f	/	A PORTA EU SOU (Cantado por uma criança)	"},
                {"track":	2	, "voz": "Catherine",	 "name": "	A PORTA EU SOU (Cantado por uma criança)	",	 "length": "	01:11	",	 "file": "	https://www.mediafire.com/file/	dhoz68adhuyadbg	/	A PORTA É UMA SÓ (Cantado por uma criança)	"},
                {"track":	3	, "voz": "Catherine",	 "name": "	É FÁCIL DE ENTENDER (Cantado por uma criança)	",	 "length": "	00:50	",	 "file": "	https://www.mediafire.com/file/	p1bh34yeey6dy9e	/	É FÁCIL DE ENTENDER (Cantado por uma criança)	"},
                {"track":	4	, "voz": "Catherine",	 "name": "	COM AMOR BUSCANDO  (Cantado por uma criança)	",	 "length": "	01:36	",	 "file": "	https://www.mediafire.com/file/	8475by3ejy6f9mt	/	COM AMOR BUSCANDO  (Cantado por uma criança)	"},
                {"track":	5	, "voz": "Catherine",	 "name": "	COMO OVELHINHAS  (Cantado por uma criança)	",	 "length": "	01:18	",	 "file": "	https://www.mediafire.com/file/	ws9zt5rr28ha69r	/	COMO OVELHINHAS  (Cantado por uma criança)	"},
                {"track":	6	, "voz": "Catherine",	 "name": "	CRER NO QUE DEUS DISSE (Cantado por uma criança)	",	 "length": "	01:06	",	 "file": "	https://www.mediafire.com/file/	qdqcjjf46a577y0	/	CRER NO QUE DEUS DISSE (Cantado por uma criança)	"},
                {"track":	7	, "voz": "Catherine",	 "name": "	CRISTO AMA OS PEQUENINOS (Cantado por uma criança)	",	 "length": "	00:44	",	 "file": "	https://www.mediafire.com/file/	t7m8fsb08rpbinc	/	CRISTO AMA OS PEQUENINOS (Cantado por uma criança)	"},
                {"track":	8	, "voz": "Catherine",	 "name": "	CRISTO JESUS VEIO AO MUNDO (Cantado por uma criança)	",	 "length": "	01:00	",	 "file": "	https://www.mediafire.com/file/	7j9uhbct0zyrhyx	/	CRISTO JESUS VEIO AO MUNDO (Cantado por uma criança)	"},
                {"track":	9	, "voz": "Catherine",	 "name": "	DEUS É BOM PARA MIM (Cantado por uma criança)	",	 "length": "	00:58	",	 "file": "	https://www.mediafire.com/file/	uaqar3kmie5ye8n	/	DEUS É BOM PARA MIM (Cantado por uma criança)	"},
                {"track":	10	, "voz": "Catherine",	 "name": "	EU PERTENÇO A CRISTO (Cantado por uma criança)	",	 "length": "	01:10	",	 "file": "	https://www.mediafire.com/file/	4dam15jxufkhxa9	/	EU PERTENÇO A CRISTO (Cantado por uma criança)	"},
                {"track":	11	, "voz": "Catherine",	 "name": "	GRAÇAS TE DOU (Cantado por uma criança)	",	 "length": "	01:30	",	 "file": "	https://www.mediafire.com/file/	yw59et3dmjjg6r7	/	GRANDE FARDO (Cantado por uma criança)	"},
                {"track":	12	, "voz": "Catherine",	 "name": "	GRANDE FARDO (Cantado por uma criança)	",	 "length": "	01:26	",	 "file": "	https://www.mediafire.com/file/	46pe5ildbj7am2f	/	GRAÇAS TE DOU (Cantado por uma criança)	"},
                {"track":	13	, "voz": "Catherine",	 "name": "	HÁ UM CAMINHO CHEIO DE LUZ (Cantado por uma criança)	",	 "length": "	01:05	",	 "file": "	https://www.mediafire.com/file/	544bya63tut7qxr	/	HÁ UM CAMINHO CHEIO DE LUZ (Cantado por uma criança)	"},
                {"track":	14	, "voz": "Catherine",	 "name": "	JESUS, TUDO TENHO EM TI (Cantado por uma criança)	",	 "length": "	01:15	",	 "file": "	https://www.mediafire.com/file/	3zi6pzlamdkum3e	/	JESUS, TUDO TENHO EM TI (Cantado por uma criança)	"},
                {"track":	15	, "voz": "Catherine",	 "name": "	MAIS VASTO QUE O MUNDO (Cantado por uma criança)	",	 "length": "	01:28	",	 "file": "	https://www.mediafire.com/file/	up2q3fnih9nei0p	/	MAIS VASTO QUE O MUNDO (Cantado por uma criança)	"},
                {"track":	16	, "voz": "Catherine",	 "name": "	MEU BOM PASTOR É CRISTO (Cantado por uma criança)	",	 "length": "	00:54	",	 "file": "	https://www.mediafire.com/file/	teasetpqk3lak9x	/	MEU BOM PASTOR É CRISTO (Cantado por uma criança)	"},
                {"track":	17	, "voz": "Catherine",	 "name": "	MEU CORAÇÃO ERA SUJO (Cantado por uma criança )	",	 "length": "	01:33	",	 "file": "	https://www.mediafire.com/file/	7b3m892wxko5ijw	/	MEU CORAÇÃO ERA SUJO (Cantado por uma criança )	"},
                {"track":	18	, "voz": "Catherine",	 "name": "	MOSTRA JESUS (Cantado por uma criança)	",	 "length": "	01:17	",	 "file": "	https://www.mediafire.com/file/	9vs1c7zjdcu0xsy	/	MOSTRA JESUS (Cantado por uma criança)	"},
                {"track":	19	, "voz": "Catherine",	 "name": "	NO MEU CORAÇÃO (Cantado por uma criança)	",	 "length": "	01:06	",	 "file": "	https://www.mediafire.com/file/	k1r2qg990481qrk	/	NO MEU CORAÇÃO (Cantado por uma criança)	"},
                {"track":	20	, "voz": "Catherine",	 "name": "	O COFRINHO (Cânticos para crianças)	",	 "length": "	01:51	",	 "file": "	https://www.mediafire.com/file/	kkuskcs6cbevpz6	/	O COFRINHO (Cânticos para crianças)	"},
                {"track":	21	, "voz": "Catherine",	 "name": "	OS QUE ESPERAM NO SENHOR (Cantado por uma criança)	",	 "length": "	01:41	",	 "file": "	https://www.mediafire.com/file/	cnmfa01209o6o9y	/	OS QUE ESPERAM NO SENHOR (Cantado por uma criança)	"},
                {"track":	22	, "voz": "Catherine",	 "name": "	PESCADOR DE HOMENS (Cantado por uma Criança)	",	 "length": "	01:30	",	 "file": "	https://www.mediafire.com/file/	n1j1a1lpu1zruu4	/	PESCADOR DE HOMENS (Cantado por uma Criança)	"},
                {"track":	23	, "voz": "Catherine",	 "name": "	PODEROSO É NOSSO DEUS (Cantado por uma criança)	",	 "length": "	00:48	",	 "file": "	https://www.mediafire.com/file/	d5qtdk7ktn5ug05	/	PODEROSO É NOSSO DEUS (Cantado por uma criança)	"},
                {"track":	24	, "voz": "Catherine",	 "name": "	QUEM FAZ AS LINDAS FLORES (Cantado por uma criança)	",	 "length": "	00:57	",	 "file": "	https://www.mediafire.com/file/	49ixezb48k914et	/	QUEM FAZ AS LINDAS FLORES (Cantado por uma criança)	"},
                {"track":	25	, "voz": "Catherine",	 "name": "	TOC! TOC! TOC! (Cantado por uma criança)	",	 "length": "	00:52	",	 "file": "	https://www.mediafire.com/file/	d5d3vcl5n3p99ls	/	TOC! TOC! TOC! (Cantado por uma criança)	"},
                {"track":	26	, "voz": "Catherine",	 "name": "	TODOS PECARAM (Cantado por uma criança)	",	 "length": "	00:29	",	 "file": "	https://www.mediafire.com/file/	npirnm498w4194o	/	TODOS PECARAM (Cantado por uma criança)	"},
                
                {"track":	27	, "voz": "Catherine",	 "name": "	ASSIM DEUS NOS AMOU (Cantado por uma criança)	",	 "length": "	01:08	",	 "file": "	https://www.mediafire.com/file/yx21f7855ja6ml2/		"},
                {"track":	28	, "voz": "Catherine",	 "name": "	PORQUE MORREU POR MIM (Cantado por uma criança)	",	 "length": "	01:00	",	 "file": "	https://www.mediafire.com/file/rjdib9szkjaaibf/		"},
                {"track":	29	, "voz": "Catherine",	 "name": "	SEM EU CONHECÊ-LO (Cantado por uma criança)	",	 "length": "	01:29	",	 "file": "	https://www.mediafire.com/file/gzhrhngdcuh1hmq/	"},
                {"track":	30	, "voz": "Catherine",	 "name": "	CRISTO VIVE (Cantado por uma criança)	",	 "length": "	01:04	",	 "file": "	https://www.mediafire.com/file/1xqoy1z6g923rkw/	"},
                {"track":	31	, "voz": "Catherine",	 "name": "	SUBINDO (Cantado por uma criança)	",	 "length": "	01:03	",	 "file": "	https://www.mediafire.com/file/a2z1v4f5kt740fd/		"},
                {"track":	32	, "voz": "Catherine",	 "name": "	BUSCAI PRIMEIRO (Cantado por uma criança)	",	 "length": "	02:17	",	 "file": "	https://www.mediafire.com/file/tgsfnlsxz40lmyq/		"},
                {"track":	33	, "voz": "Catherine",	 "name": "	SATISFAÇÃO (Cantado por uma criança)	",	 "length": "	02:04	",	 "file": "	https://www.mediafire.com/file/gk955sbcanc9c2y/		"},
          

],
            
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                trackVoz = value.voz,
                trackFile = value.file,
                trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                // $('#plList').append('<li ><div class="plItem" ><div class="plNum">'+ trackNumber + '.</div><div class="plTitle">' + trackName + ' - (' + trackVoz + ')' + '</div><div class="plLength">' + trackLength + '</div></div></li>');
                $('#plList').append('<li ><div class="plItem" ><div class="plNum">'+ '.</div><div class="plTitle"><a target="_blank" href="' + trackFile + '"><i class="fa fa-download fa-lg"></i></a> ' + trackName + ' - (' + trackVoz + ')' + '</div><div class="plLength">' + trackLength + '</div></div></li>');
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

// verifica quantidade de audios
console.log(tracks.length);
var ended = tracks.length;
localStorage.setItem('length', ended);
console.log(localStorage.getItem('length'))
// Fim de verifica quantidade de audios


    }
});

// Título da playlist
document.write('<title>Audio Player - Músicas - Tudo</title>')

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


