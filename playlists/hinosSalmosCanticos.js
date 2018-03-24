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

                {"track":	1	,	 "name": "	A MENSAGEM DA CRUZ	",	 "length": "	05:46	",	 "file": "	http://www.mediafire.com/file/	35z7gcpezcdd0kj	/	A MENSAGEM DA CRUZ	"},
                {"track":	2	,	 "name": "	A TI QUE HABITAS NOS CÉUS (Salmo 123)	",	 "length": "	02:16	",	 "file": "	http://www.mediafire.com/file/	7tombbuk41d3613	/	A TI QUE HABITAS NOS CÉUS (Salmo 123)	"},
                {"track":	3	,	 "name": "	A TI SENHOR ELEVO A MINHA ALMA (Salmo 25)	",	 "length": "	03:04	",	 "file": "	http://www.mediafire.com/file/	qmxytjc2vxvz61l	/	A TI SENHOR ELEVO A MINHA ALMA (Salmo 25)	"},
                {"track":	4	,	 "name": "	A VOZ DE CRISTO	",	 "length": "	03:55	",	 "file": "	http://www.mediafire.com/file/	sf8yf930w5vwz8z	/	A VOZ DE CRISTO	"},
                {"track":	5	,	 "name": "	ACLAMAI A DEUS (Salmo 66)	",	 "length": "	03:36	",	 "file": "	http://www.mediafire.com/file/	3hdo4gjfqzmdhn2	/	ACLAMAI A DEUS (Salmo 66)	"},
<<<<<<< HEAD
                {"track":	6	,	 "name": "	ALEGRE VERDADE	",	 "length": "	03:55	",	 "file": "	http://www.mediafire.com/file/	ux9y8aqrbwtio8t/	"},
                {"track":	7	,	 "name": "	ALEGREI ME (Salmo 122)	",	 "length": "	03:05	",	 "file": "	http://www.mediafire.com/file/	n2bmcxu8m3tmun1	/	ALEGREI ME (Salmo 122)	"},
                {"track":	8	,	 "name": "	ALVOS MAIS QUE A NEVE FICAMOS QUANDO LAVADOS EM TEU SANGUE SALVADOR	",	 "length": "	03:45	",	 "file": "	http://www.mediafire.com/file/	iuucayyzkbk654e	/	ALVOS MAIS QUE A NEVE FICAMOS QUANDO LAVADOS EM TEU SANGUE SALVADOR	"},
                {"track":	9	,	 "name": "	AO TEU NOME, Ó ALTÍSSIMO; CANTAREI LOUVORES (Salmo 9)	",	 "length": "	03:58	",	 "file": "	http://www.mediafire.com/file/	78x50gyqo3d7yw5	/	AO TEU NOME, Ó ALTÍSSIMO; CANTAREI LOUVORES (Salmo 9)	"},
                {"track":	10	,	 "name": "	ATRIBULADO CORAÇÃO	",	 "length": "	03:16	",	 "file": "	http://www.mediafire.com/file/	lg4bsj3j3oltfck	/	ATRIBULADO CORAÇÃO	"},
                {"track":	11	,	 "name": "	BATEI PALMAS (Salmo 47)	",	 "length": "	03:10	",	 "file": "	http://www.mediafire.com/file/	0bchkdt2k7xnhrj	/	BATEI PALMAS (Salmo 47)	"},
                {"track":	12	,	 "name": "	BENDIREI AO SENHOR EM TODO TEMPO   (SALMO 34)	",	 "length": "	03:18	",	 "file": "	http://www.mediafire.com/file/	2s3t99fr7tvidas	/	BENDIREI AO SENHOR EM TODO TEMPO   (SALMO 34)	"},
                {"track":	13	,	 "name": "	BENDIZE Ó MINHA ALMA AO SENHOR (Salmo 103)	",	 "length": "	03:25	",	 "file": "	http://www.mediafire.com/file/	frqajv0wrrqjp6r	/	BENDIZE Ó MINHA ALMA AO SENHOR (Salmo 103)	"},
                {"track":	14	,	 "name": "	BENDIZEI AO SENHOR (Salmo 134)	",	 "length": "	02:11	",	 "file": "	http://www.mediafire.com/file/	450h9g1b4a9yi54	/	BENDIZEI AO SENHOR (Salmo 134)	"},
                {"track":	15	,	 "name": "	BOM É RENDER GRAÇAS AO SENHOR (Salmo 92)	",	 "length": "	04:01	",	 "file": "	http://www.mediafire.com/file/	bpov7jv1half3rr	/	BOM É RENDER GRAÇAS AO SENHOR (Salmo 92)	"},
                {"track":	16	,	 "name": "	BUSCAI AO SENHOR (Isaías 55)	",	 "length": "	03:46	",	 "file": "	http://www.mediafire.com/file/	a5955umc3965lcg	/	BUSCAI AO SENHOR (Isaías 55)	"},
                {"track":	17	,	 "name": "	CANTAI AO SENHOR (Salmo 96)	",	 "length": "	02:49	",	 "file": "	http://www.mediafire.com/file/	zuv1skff3jdokdg	/	CANTAI AO SENHOR (Salmo 96)	"},
                {"track":	18	,	 "name": "	CANTAREI AO SENHOR PORQUE TRIUNFOU GLORIOSAMENTE (Cântico de Moisés)	",	 "length": "	03:20	",	 "file": "	http://www.mediafire.com/file/	aqsdc7cqnhqmq05	/	CANTAREI AO SENHOR PORQUE TRIUNFOU GLORIOSAMENTE (Cântico de Moisés)	"},
                {"track":	19	,	 "name": "	CELEBRAI COM JÚBILO AO SENHOR (Salmo 100)	",	 "length": "	02:34	",	 "file": "	http://www.mediafire.com/file/	jyvk1cv6a9l8i22	/	CELEBRAI COM JÚBILO AO SENHOR (Salmo 100)	"},
                {"track":	20	,	 "name": "	COMO A ALVA NEVE	",	 "length": "	03:51	",	 "file": "	http://www.mediafire.com/file/	h6o9iuxiaiyonnp	/	COMO A ALVA NEVE	"},
                {"track":	21	,	 "name": "	CONHECEIS AGORA O DIVINAL PODER  (Are you washed in the blood)	",	 "length": "	02:32	",	 "file": "	http://www.mediafire.com/file/	3c6bntddi7866or	/	CONHECEIS AGORA O DIVINAL PODER  (Are you washed in the blood)	"},
                {"track":	22	,	 "name": "	CRISTO É A VIDA	",	 "length": "	04:03	",	 "file": "	http://www.mediafire.com/file/	bzcbl8mw8hbdj30	/	CRISTO É A VIDA	"},
                {"track":	23	,	 "name": "	DESDE AGORA E PARA SEMPRE (Salmo 131)	",	 "length": "	02:51	",	 "file": "	http://www.mediafire.com/file/	w4qru5pk65n7nk1	/	DESDE AGORA E PARA SEMPRE (Salmo 131)	"},
                {"track":	24	,	 "name": "	DEUS É O NOSSO REFÚGIO E FORTALEZA (Salmo 46)	",	 "length": "	03:30	",	 "file": "	http://www.mediafire.com/file/	61puvl0up94iu6b	/	DEUS É O NOSSO REFÚGIO E FORTALEZA (Salmo 46)	"},
                {"track":	25	,	 "name": "	DOCE CERTEZA MEU É JESUS (BLESSED ASSURANCE)	",	 "length": "	04:03	",	 "file": "	http://www.mediafire.com/file/	7mmv8tib5n4c18f	/	DOCE CERTEZA MEU É JESUS (BLESSED ASSURANCE)	"},
                {"track":	26	,	 "name": "	ELEVO OS OLHOS PARA OS MONTES DE ONDE VIRÁ O MEU SOCORRO  (Salmo 121)	",	 "length": "	02:40	",	 "file": "	http://www.mediafire.com/file/	7wmc5r0efpkj007	/	ELEVO OS OLHOS PARA OS MONTES DE ONDE VIRÁ O MEU SOCORRO  (Salmo 121)	"},
                {"track":	27	,	 "name": "	EU ME ALEGRAREI NO SENHOR   (Cântico de Habacuque 3 17 19)	",	 "length": "	04:03	",	 "file": "	http://www.mediafire.com/file/	81d6gwn22rbrg1j	/	EU ME ALEGRAREI NO SENHOR   (Cântico de Habacuque 3 17 19)	"},
                {"track":	28	,	 "name": "	EXULTAI, Ó JUSTOS, NO SENHOR (Salmo 33)	",	 "length": "	04:18	",	 "file": "	http://www.mediafire.com/file/	l25fxqfuut4zy2c	/	EXULTAI, Ó JUSTOS, NO SENHOR (Salmo 33)	"},
                {"track":	29	,	 "name": "	FACE A FACE COM JESUS	",	 "length": "	03:37	",	 "file": "	http://www.mediafire.com/file/	rlkd2yydbqq75ok	/	FACE A FACE COM JESUS	"},
                {"track":	30	,	 "name": "	FIRME ESTÁ MEU CORAÇÃO (Salmo 108)	",	 "length": "	03:26	",	 "file": "	http://www.mediafire.com/file/	axu77bka7489aba	/	FIRME ESTÁ MEU CORAÇÃO (Salmo 108)	"},
                {"track":	31	,	 "name": "	GLÓRIA A JESUS	",	 "length": "	03:33	",	 "file": "	http://www.mediafire.com/file/	26m6wvd1o99pin6	/	GLÓRIA A JESUS	"},
                {"track":	32	,	 "name": "	GLÓRIA AO CORDEIRO (Apocalipse 5.5)	",	 "length": "	04:12	",	 "file": "	http://www.mediafire.com/file/	yrn0z66gcek2pla	/	GLÓRIA AO CORDEIRO (Apocalipse 5.5)	"},
                {"track":	33	,	 "name": "	JESUS DOCE AMIGO MEU	",	 "length": "	03:43	",	 "file": "	http://www.mediafire.com/file/	7kcejf9949drtki	/	JESUS DOCE AMIGO MEU	"},
                {"track":	34	,	 "name": "	LEVANTAI  Ó PORTAS, VOSSAS CABEÇAS (Salmo 24)	",	 "length": "	02:49	",	 "file": "	http://www.mediafire.com/file/	tzvc7wb9saacf65	/	LEVANTAI  Ó PORTAS, VOSSAS CABEÇAS (Salmo 24)	"},
                {"track":	35	,	 "name": "	LOUVAI AO SENHOR (Salmo 148)	",	 "length": "	03:53	",	 "file": "	http://www.mediafire.com/file/	gaxhesmcb0tctyz	/	LOUVAI AO SENHOR (Salmo 148)	"},
                {"track":	36	,	 "name": "	LOUVAI SERVOS DO SENHOR (Salmo 113)	",	 "length": "	03:34	",	 "file": "	http://www.mediafire.com/file/	4lb52ik25eseddt	/	LOUVAI SERVOS DO SENHOR (Salmo 113)	"},
                {"track":	37	,	 "name": "	MAIS ALÉM DO SOL	",	 "length": "	04:11	",	 "file": "	http://www.mediafire.com/file/	vqkx9h52ezevsxt	/	MAIS ALÉM DO SOL	"},
                {"track":	38	,	 "name": "	MEUS PECADOS JESUS EXPIOU NA CRUZ   (Jesus paid it all)	",	 "length": "	03:41	",	 "file": "	http://www.mediafire.com/file/	7i3nx9xo999310i	/	MEUS PECADOS JESUS EXPIOU NA CRUZ   (Jesus paid it all)	"},
                {"track":	39	,	 "name": "	NAQUELE DIA DE ESPLENDOR E GLÓRIA	",	 "length": "	03:34	",	 "file": "	http://www.mediafire.com/file/	rk90ldjk5elm1nh	/	NAQUELE DIA DE ESPLENDOR E GLÓRIA	"},
                {"track":	40	,	 "name": "	NINGUÉM MAIS HAVIA DE TÃO DIGNO PARA LIBERTAR O PECADOR	",	 "length": "	02:52	",	 "file": "	http://www.mediafire.com/file/	1vdcm9v5g3i30ou	/	NINGUÉM MAIS HAVIA DE TÃO DIGNO PARA LIBERTAR O PECADOR	"},
                {"track":	41	,	 "name": "	NÃO A NÓS SENHOR (Salmo 115)	",	 "length": "	03:19	",	 "file": "	http://www.mediafire.com/file/	8y18po3pqj2wqp5	/	NÃO A NÓS SENHOR (Salmo 115)	"},
                {"track":	42	,	 "name": "	NÃO TE INDIGNES (Salmo 37 e 2 Timóteo 2 19,22)	",	 "length": "	03:07	",	 "file": "	http://www.mediafire.com/file/	9n965w8abf2w7e2	/	NÃO TE INDIGNES (Salmo 37 e 2 Timóteo 2 19,22)	"},
                {"track":	43	,	 "name": "	NOVO NASCIMENTO	",	 "length": "	02:57	",	 "file": "	http://www.mediafire.com/file/	2cz710yh7mhu3ks	/		"},
                {"track":	44	,	 "name": "	O AMOR DIVINO	",	 "length": "	03:49	",	 "file": "	http://www.mediafire.com/file/	3uvvx7bh5h85bht	/	O AMOR DIVINO	"},
                {"track":	45	,	 "name": "	OH! MEU JESUS, JESUS DEUS DE AMOR	",	 "length": "	03:00	",	 "file": "	http://www.mediafire.com/file/	5bj168elpjpg8va	/	OH! MEU JESUS, JESUS DEUS DE AMOR	"},
                {"track":	46	,	 "name": "	OH! QUÃO BOM (Salmo 133)	",	 "length": "	02:46	",	 "file": "	http://www.mediafire.com/file/	n832wdcmmctxa3d	/	OH! QUÃO BOM (Salmo 133)	"},
                {"track":	47	,	 "name": "	OH! GRAÇA SUBLIME	",	 "length": "	03:29	",	 "file": "	http://www.mediafire.com/file/	2w1f03eg0tt2d2b	/	"},
                {"track":	48	,	 "name": "	O SENHOR ESCOLHEU A SIÃO	",	 "length": "	03:18	",	 "file": "	http://www.mediafire.com/file/	qrw6n3wm2u44wew	/	"},
                {"track":	49	,	 "name": "	OS CÉUS PROCLAMAM A GLÓRIA DE DEUS (Salmo 19)	",	 "length": "	03:20	",	 "file": "	http://www.mediafire.com/file/	ef986u6c42xcv4j	/	OS CÉUS PROCLAMAM A GLÓRIA DE DEUS (Salmo 19)	"},
                {"track":	50	,	 "name": "	OS QUE CONFIAM NO SENHOR (Salmo 125)	",	 "length": "	04:26	",	 "file": "	http://www.mediafire.com/file/	9gylylq2i7fg0c1	/	OS QUE CONFIAM NO SENHOR (Salmo 125)	"},
                {"track":	51	,	 "name": "	PALAVRA DOS MEUS LÁBIOS   (Salmo 19 14)	",	 "length": "	02:09	",	 "file": "	http://www.mediafire.com/file/	uyyqrvyn81rqkyu	/	PALAVRA DOS MEUS LÁBIOS   (Salmo 19 14)	"},
                {"track":	52	,	 "name": "	QUANDO CHEGARAM AO CALVÁRIO	",	 "length": "	04:12	",	 "file": "	http://www.mediafire.com/file/	vy1dlgmsft89ou9	/	QUANDO CHEGARAM AO CALVÁRIO	"},
                {"track":	53	,	 "name": "	QUANDO O SENHOR JESUS VOLTAR	",	 "length": "	04:21	",	 "file": "	http://www.mediafire.com/file/	9a6ilt1uolp2jl9	/	QUANDO O SENHOR JESUS VOLTAR	"},
                {"track":	54	,	 "name": "	QUÃO IMENSA FOI A GRAÇA	",	 "length": "	03:55	",	 "file": "	http://www.mediafire.com/file/	kvu7h91zvc2b06g	/	"},
                {"track":	55	,	 "name": "	QUÃO BOM ESCUTAR TUA VOZ",	 "length": "	03:16	",	 "file": "	http://www.mediafire.com/file/nc8g3at77q0alyr/	"},
                {"track":	56	,	 "name": "	QUEM PODE FALAR DAS COISAS LÁ DO ALTO (1 João 5 20)	",	 "length": "	02:59	",	 "file": "	http://www.mediafire.com/file/	nica4072xwx7m5s	/	QUEM PODE FALAR DAS COISAS LÁ DO ALTO (1 João 5 20)	"},
                {"track":	57	,	 "name": "	RENDEI GRAÇAS AO SENHOR (Salmo 105)	",	 "length": "	03:36	",	 "file": "	http://www.mediafire.com/file/	89zcvhcah1zh05k	/	RENDEI GRAÇAS AO SENHOR (Salmo 105)	"},
                {"track":	58	,	 "name": "	ROCHA ETERNA (Rock of Ages)	",	 "length": "	03:39	",	 "file": "	http://www.mediafire.com/file/	534s36n66ow52vv	/	ROCHA ETERNA (Rock of Ages)	"},
                {"track":	59	,	 "name": "	SE ISSO NÃO FOR AMOR",	 "length": "	03:15	",	 "file": "	http://www.mediafire.com/file/se6jdq6hkdd2f96/	"},
                {"track":	60	,	 "name": "	SENHOR CONSERVARÁS EM PERFEITA PAZ (Isaías 26 3 4,8 9,12)	",	 "length": "	03:21	",	 "file": "	http://www.mediafire.com/file/	5xkque6ji2obcac	/	SENHOR CONSERVARÁS EM PERFEITA PAZ (Isaías 26 3 4,8 9,12)	"},
                {"track":	61	,	 "name": "	SIÃO (Salmo 126)	",	 "length": "	04:22	",	 "file": "	http://www.mediafire.com/file/	eygdtzudo79zc4j	/	SIÃO (Salmo 126)	"},
                {"track":	62	,	 "name": "	TAL COMO ESTÁS VEM A JESUS (Just as I am)	",	 "length": "	03:58	",	 "file": "	http://www.mediafire.com/file/	z45nqqjqvbnq25p	/	TAL COMO ESTÁS VEM A JESUS (Just as I am)	"},
                {"track":	63	,	 "name": "	TERNO SALVADOR	",	 "length": "	02:55	",	 "file": "	http://www.mediafire.com/file/	b8ltsasa6bjo5k2	/	TERNO SALVADOR	"},
                {"track":	64	,	 "name": "	TEU SACRIFÍCIO EXCELSO	",	 "length": "	03:09	",	 "file": "	http://www.mediafire.com/file/	htfd27t65ljw74h	/	TEU SACRIFÍCIO EXCELSO	"},
                {"track":	65	,	 "name": "	VINDE CANTEMOS (Salmo 95)	",	 "length": "	03:16	",	 "file": "	http://www.mediafire.com/file/	39v8w6xzr9ydyyu	/	VINDE CANTEMOS (Salmo 95)	"}
                                
=======
                {"track":	6	,	 "name": "	ALEGREI ME (Salmo 122)	",	 "length": "	03:05	",	 "file": "	http://www.mediafire.com/file/	n2bmcxu8m3tmun1	/	ALEGREI ME (Salmo 122)	"},
                {"track":	7	,	 "name": "	ALVOS MAIS QUE A NEVE FICAMOS QUANDO LAVADOS EM TEU SANGUE SALVADOR	",	 "length": "	03:45	",	 "file": "	http://www.mediafire.com/file/	iuucayyzkbk654e	/	ALVOS MAIS QUE A NEVE FICAMOS QUANDO LAVADOS EM TEU SANGUE SALVADOR	"},
                {"track":	8	,	 "name": "	AO TEU NOME, Ó ALTÍSSIMO; CANTAREI LOUVORES (Salmo 9)	",	 "length": "	03:58	",	 "file": "	http://www.mediafire.com/file/	78x50gyqo3d7yw5	/	AO TEU NOME, Ó ALTÍSSIMO; CANTAREI LOUVORES (Salmo 9)	"},
                {"track":	9	,	 "name": "	ATRIBULADO CORAÇÃO	",	 "length": "	03:16	",	 "file": "	http://www.mediafire.com/file/	lg4bsj3j3oltfck	/	ATRIBULADO CORAÇÃO	"},
                {"track":	10	,	 "name": "	BATEI PALMAS (Salmo 47)	",	 "length": "	03:10	",	 "file": "	http://www.mediafire.com/file/	0bchkdt2k7xnhrj	/	BATEI PALMAS (Salmo 47)	"},
                {"track":	11	,	 "name": "	BENDIREI AO SENHOR EM TODO TEMPO   (SALMO 34)	",	 "length": "	03:18	",	 "file": "	http://www.mediafire.com/file/	2s3t99fr7tvidas	/	BENDIREI AO SENHOR EM TODO TEMPO   (SALMO 34)	"},
                {"track":	12	,	 "name": "	BENDIZE Ó MINHA ALMA AO SENHOR (Salmo 103)	",	 "length": "	03:25	",	 "file": "	http://www.mediafire.com/file/	frqajv0wrrqjp6r	/	BENDIZE Ó MINHA ALMA AO SENHOR (Salmo 103)	"},
                {"track":	13	,	 "name": "	BENDIZEI AO SENHOR (Salmo 134)	",	 "length": "	02:11	",	 "file": "	http://www.mediafire.com/file/	450h9g1b4a9yi54	/	BENDIZEI AO SENHOR (Salmo 134)	"},
                {"track":	14	,	 "name": "	BOM É RENDER GRAÇAS AO SENHOR (Salmo 92)	",	 "length": "	04:01	",	 "file": "	http://www.mediafire.com/file/	bpov7jv1half3rr	/	BOM É RENDER GRAÇAS AO SENHOR (Salmo 92)	"},
                {"track":	15	,	 "name": "	BUSCAI AO SENHOR (Isaías 55)	",	 "length": "	03:46	",	 "file": "	http://www.mediafire.com/file/	a5955umc3965lcg	/	BUSCAI AO SENHOR (Isaías 55)	"},
                {"track":	16	,	 "name": "	CANTAI AO SENHOR (Salmo 96)	",	 "length": "	02:49	",	 "file": "	http://www.mediafire.com/file/	zuv1skff3jdokdg	/	CANTAI AO SENHOR (Salmo 96)	"},
                {"track":	17	,	 "name": "	CANTAREI AO SENHOR PORQUE TRIUNFOU GLORIOSAMENTE (Cântico de Moisés)	",	 "length": "	03:20	",	 "file": "	http://www.mediafire.com/file/	aqsdc7cqnhqmq05	/	CANTAREI AO SENHOR PORQUE TRIUNFOU GLORIOSAMENTE (Cântico de Moisés)	"},
                {"track":	18	,	 "name": "	CELEBRAI COM JÚBILO AO SENHOR (Salmo 100)	",	 "length": "	02:34	",	 "file": "	http://www.mediafire.com/file/	jyvk1cv6a9l8i22	/	CELEBRAI COM JÚBILO AO SENHOR (Salmo 100)	"},
                {"track":	19	,	 "name": "	COMO A ALVA NEVE	",	 "length": "	03:51	",	 "file": "	http://www.mediafire.com/file/	h6o9iuxiaiyonnp	/	COMO A ALVA NEVE	"},
                {"track":	20	,	 "name": "	CONHECEIS AGORA O DIVINAL PODER  (Are you washed in the blood)	",	 "length": "	02:32	",	 "file": "	http://www.mediafire.com/file/	3c6bntddi7866or	/	CONHECEIS AGORA O DIVINAL PODER  (Are you washed in the blood)	"},
                {"track":	21	,	 "name": "	CRISTO É A VIDA	",	 "length": "	04:03	",	 "file": "	http://www.mediafire.com/file/	bzcbl8mw8hbdj30	/	CRISTO É A VIDA	"},
                {"track":	22	,	 "name": "	DESDE AGORA E PARA SEMPRE (Salmo 131)	",	 "length": "	02:51	",	 "file": "	http://www.mediafire.com/file/	w4qru5pk65n7nk1	/	DESDE AGORA E PARA SEMPRE (Salmo 131)	"},
                {"track":	23	,	 "name": "	DEUS É O NOSSO REFÚGIO E FORTALEZA (Salmo 46)	",	 "length": "	03:30	",	 "file": "	http://www.mediafire.com/file/	61puvl0up94iu6b	/	DEUS É O NOSSO REFÚGIO E FORTALEZA (Salmo 46)	"},
                {"track":	24	,	 "name": "	DOCE CERTEZA MEU É JESUS (BLESSED ASSURANCE)	",	 "length": "	04:03	",	 "file": "	http://www.mediafire.com/file/	7mmv8tib5n4c18f	/	DOCE CERTEZA MEU É JESUS (BLESSED ASSURANCE)	"},
                {"track":	25	,	 "name": "	ELEVO OS OLHOS PARA OS MONTES DE ONDE VIRÁ O MEU SOCORRO  (Salmo 121)	",	 "length": "	02:40	",	 "file": "	http://www.mediafire.com/file/	7wmc5r0efpkj007	/	ELEVO OS OLHOS PARA OS MONTES DE ONDE VIRÁ O MEU SOCORRO  (Salmo 121)	"},
                {"track":	26	,	 "name": "	EU ME ALEGRAREI NO SENHOR   (Cântico de Habacuque 3 17 19)	",	 "length": "	04:03	",	 "file": "	http://www.mediafire.com/file/	81d6gwn22rbrg1j	/	EU ME ALEGRAREI NO SENHOR   (Cântico de Habacuque 3 17 19)	"},
                {"track":	27	,	 "name": "	EXULTAI, Ó JUSTOS, NO SENHOR (Salmo 33)	",	 "length": "	04:18	",	 "file": "	http://www.mediafire.com/file/	l25fxqfuut4zy2c	/	EXULTAI, Ó JUSTOS, NO SENHOR (Salmo 33)	"},
                {"track":	28	,	 "name": "	FACE A FACE COM JESUS	",	 "length": "	03:37	",	 "file": "	http://www.mediafire.com/file/	rlkd2yydbqq75ok	/	FACE A FACE COM JESUS	"},
                {"track":	29	,	 "name": "	FIRME ESTÁ MEU CORAÇÃO (Salmo 108)	",	 "length": "	03:26	",	 "file": "	http://www.mediafire.com/file/	axu77bka7489aba	/	FIRME ESTÁ MEU CORAÇÃO (Salmo 108)	"},
                {"track":	30	,	 "name": "	GLÓRIA A JESUS	",	 "length": "	03:33	",	 "file": "	http://www.mediafire.com/file/	26m6wvd1o99pin6	/	GLÓRIA A JESUS	"},
                {"track":	31	,	 "name": "	GLÓRIA AO CORDEIRO (Apocalipse 5.5)	",	 "length": "	04:12	",	 "file": "	http://www.mediafire.com/file/	yrn0z66gcek2pla	/	GLÓRIA AO CORDEIRO (Apocalipse 5.5)	"},
                {"track":	32	,	 "name": "	JESUS DOCE AMIGO MEU	",	 "length": "	03:43	",	 "file": "	http://www.mediafire.com/file/	7kcejf9949drtki	/	JESUS DOCE AMIGO MEU	"},
                {"track":	33	,	 "name": "	LEVANTAI  Ó PORTAS, VOSSAS CABEÇAS (Salmo 24)	",	 "length": "	02:49	",	 "file": "	http://www.mediafire.com/file/	tzvc7wb9saacf65	/	LEVANTAI  Ó PORTAS, VOSSAS CABEÇAS (Salmo 24)	"},
                {"track":	34	,	 "name": "	LOUVAI AO SENHOR (Salmo 148)	",	 "length": "	03:53	",	 "file": "	http://www.mediafire.com/file/	gaxhesmcb0tctyz	/	LOUVAI AO SENHOR (Salmo 148)	"},
                {"track":	35	,	 "name": "	LOUVAI SERVOS DO SENHOR (Salmo 113)	",	 "length": "	03:34	",	 "file": "	http://www.mediafire.com/file/	4lb52ik25eseddt	/	LOUVAI SERVOS DO SENHOR (Salmo 113)	"},
                {"track":	36	,	 "name": "	MAIS ALÉM DO SOL	",	 "length": "	04:11	",	 "file": "	http://www.mediafire.com/file/	vqkx9h52ezevsxt	/	MAIS ALÉM DO SOL	"},
                {"track":	37	,	 "name": "	MEUS PECADOS JESUS EXPIOU NA CRUZ   (Jesus paid it all)	",	 "length": "	03:41	",	 "file": "	http://www.mediafire.com/file/	7i3nx9xo999310i	/	MEUS PECADOS JESUS EXPIOU NA CRUZ   (Jesus paid it all)	"},
                {"track":	38	,	 "name": "	NAQUELE DIA DE ESPLENDOR E GLÓRIA	",	 "length": "	03:34	",	 "file": "	http://www.mediafire.com/file/	rk90ldjk5elm1nh	/	NAQUELE DIA DE ESPLENDOR E GLÓRIA	"},
                {"track":	39	,	 "name": "	NINGUÉM MAIS HAVIA DE TÃO DIGNO PARA LIBERTAR O PECADOR	",	 "length": "	02:52	",	 "file": "	http://www.mediafire.com/file/	1vdcm9v5g3i30ou	/	NINGUÉM MAIS HAVIA DE TÃO DIGNO PARA LIBERTAR O PECADOR	"},
                {"track":	40	,	 "name": "	NÃO A NÓS SENHOR (Salmo 115)	",	 "length": "	03:19	",	 "file": "	http://www.mediafire.com/file/	8y18po3pqj2wqp5	/	NÃO A NÓS SENHOR (Salmo 115)	"},
                {"track":	41	,	 "name": "	NÃO TE INDIGNES (Salmo 37 e 2 Timóteo 2 19,22)	",	 "length": "	03:07	",	 "file": "	http://www.mediafire.com/file/	9n965w8abf2w7e2	/	NÃO TE INDIGNES (Salmo 37 e 2 Timóteo 2 19,22)	"},
                {"track":	42	,	 "name": "	O AMOR DIVINO	",	 "length": "	03:49	",	 "file": "	http://www.mediafire.com/file/	3uvvx7bh5h85bht	/	O AMOR DIVINO	"},
                {"track":	43	,	 "name": "	OH! MEU JESUS, JESUS DEUS DE AMOR	",	 "length": "	03:00	",	 "file": "	http://www.mediafire.com/file/	5bj168elpjpg8va	/	OH! MEU JESUS, JESUS DEUS DE AMOR	"},
                {"track":	44	,	 "name": "	OH! QUÃO BOM (Salmo 133)	",	 "length": "	02:46	",	 "file": "	http://www.mediafire.com/file/	n832wdcmmctxa3d	/	OH! QUÃO BOM (Salmo 133)	"},
                {"track":	45	,	 "name": "	OS CÉUS PROCLAMAM A GLÓRIA DE DEUS (Salmo 19)	",	 "length": "	03:20	",	 "file": "	http://www.mediafire.com/file/	ef986u6c42xcv4j	/	OS CÉUS PROCLAMAM A GLÓRIA DE DEUS (Salmo 19)	"},
                {"track":	46	,	 "name": "	OS QUE CONFIAM NO SENHOR (Salmo 125)	",	 "length": "	04:26	",	 "file": "	http://www.mediafire.com/file/	9gylylq2i7fg0c1	/	OS QUE CONFIAM NO SENHOR (Salmo 125)	"},
                {"track":	47	,	 "name": "	PALAVRA DOS MEUS LÁBIOS   (Salmo 19 14)	",	 "length": "	02:09	",	 "file": "	http://www.mediafire.com/file/	uyyqrvyn81rqkyu	/	PALAVRA DOS MEUS LÁBIOS   (Salmo 19 14)	"},
                {"track":	48	,	 "name": "	QUANDO CHEGARAM AO CALVÁRIO	",	 "length": "	04:12	",	 "file": "	http://www.mediafire.com/file/	vy1dlgmsft89ou9	/	QUANDO CHEGARAM AO CALVÁRIO	"},
                {"track":	49	,	 "name": "	QUANDO O SENHOR JESUS VOLTAR	",	 "length": "	04:21	",	 "file": "	http://www.mediafire.com/file/	9a6ilt1uolp2jl9	/	QUANDO O SENHOR JESUS VOLTAR	"},
                {"track":	50	,	 "name": "	QUEM PODE FALAR DAS COISAS LÁ DO ALTO (1 João 5 20)	",	 "length": "	02:59	",	 "file": "	http://www.mediafire.com/file/	nica4072xwx7m5s	/	QUEM PODE FALAR DAS COISAS LÁ DO ALTO (1 João 5 20)	"},
                {"track":	51	,	 "name": "	RENDEI GRAÇAS AO SENHOR (Salmo 105)	",	 "length": "	03:36	",	 "file": "	http://www.mediafire.com/file/	89zcvhcah1zh05k	/	RENDEI GRAÇAS AO SENHOR (Salmo 105)	"},
                {"track":	52	,	 "name": "	ROCHA ETERNA (Rock of Ages)	",	 "length": "	03:39	",	 "file": "	http://www.mediafire.com/file/	534s36n66ow52vv	/	ROCHA ETERNA (Rock of Ages)	"},
                {"track":	53	,	 "name": "	SENHOR CONSERVARÁS EM PERFEITA PAZ (Isaías 26 3 4,8 9,12)	",	 "length": "	03:21	",	 "file": "	http://www.mediafire.com/file/	5xkque6ji2obcac	/	SENHOR CONSERVARÁS EM PERFEITA PAZ (Isaías 26 3 4,8 9,12)	"},
                {"track":	54	,	 "name": "	SIÃO (Salmo 126)	",	 "length": "	04:22	",	 "file": "	http://www.mediafire.com/file/	eygdtzudo79zc4j	/	SIÃO (Salmo 126)	"},
                {"track":	55	,	 "name": "	TAL COMO ESTÁS VEM A JESUS (Just as I am)	",	 "length": "	03:58	",	 "file": "	http://www.mediafire.com/file/	z45nqqjqvbnq25p	/	TAL COMO ESTÁS VEM A JESUS (Just as I am)	"},
                {"track":	56	,	 "name": "	TERNO SALVADOR	",	 "length": "	02:55	",	 "file": "	http://www.mediafire.com/file/	b8ltsasa6bjo5k2	/	TERNO SALVADOR	"},
                {"track":	57	,	 "name": "	TEU SACRIFÍCIO EXCELSO	",	 "length": "	03:09	",	 "file": "	http://www.mediafire.com/file/	htfd27t65ljw74h	/	TEU SACRIFÍCIO EXCELSO	"},
                {"track":	58	,	 "name": "	VINDE CANTEMOS (Salmo 95)	",	 "length": "	03:16	",	 "file": "	http://www.mediafire.com/file/	39v8w6xzr9ydyyu	/	VINDE CANTEMOS (Salmo 95)	"},
                {"track":	59	,	 "name": "	O SENHOR ESCOLHEU A SIÃO	",	 "length": "	03:18	",	 "file": "	http://www.mediafire.com/file/	qrw6n3wm2u44wew	/	"},
                {"track":	60	,	 "name": "	NOVO NASCIMENTO	",	 "length": "	02:57	",	 "file": "	http://www.mediafire.com/file/	2cz710yh7mhu3ks	/		"},
                {"track":	61	,	 "name": "	OH! GRAÇA SUBLIME	",	 "length": "	03:29	",	 "file": "	http://www.mediafire.com/file/	2w1f03eg0tt2d2b	/	"},
                {"track":	62	,	 "name": "	QUÃO IMENSA FOI A GRAÇA	",	 "length": "	03:55	",	 "file": "	http://www.mediafire.com/file/	kvu7h91zvc2b06g	/	"},
                {"track":	63	,	 "name": "	ALEGRE VERDADE	",	 "length": "	03:55	",	 "file": "	http://www.mediafire.com/file/	ux9y8aqrbwtio8t/	"},
                {"track":	64	,	 "name": "	SE ISSO NÃO FOR AMOR",	 "length": "	03:15	",	 "file": "	http://www.mediafire.com/file/se6jdq6hkdd2f96/	"},
                {"track":	65	,	 "name": "	NAS ESTRELAS (TUDO ELE É PARA MIM)",	 "length": "	03:27	",	 "file": "	http://www.mediafire.com/file/dvz9d87a8ruiau4/	"},
                {"track":	66	,	 "name": "	SONDA-ME Ó DEUS E CONHECE MEU CORAÇÃO (SALMO 139 )",	 "length": "	04:19	",	 "file": "	http://www.mediafire.com/file/bc1wg0dkn6pqlkh/	"}
                
                
>>>>>>> 07ba328de4e83a31a3504380cf7fda1a6757211a
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

//initialize plyr
plyr.setup($('#audio1'), {});
