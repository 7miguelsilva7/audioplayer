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

                {"track":	1	,	 "name": "	CRISTO JÁ RESSUSCITOU	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/054%20-%20Cristo%20J%C3%A1%20Ressuscitou	"},
                {"track":	2	,	 "name": "	QUAO IMENSA FOI A GRACA	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/07-quao-imensa-foi-a-graca	"},
                {"track":	3	,	 "name": "	GRACA SUBLIME	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/201-graca-sublime	"},
                {"track":	4	,	 "name": "	O SENHOR ESCOLHEU A SIAO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/29-O-Senhor-Escolheu-a-Siao	"},
                {"track":	5	,	 "name": "	NAS ESTRELAS (TUDO ELE É PARA MIM).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/42%20-%20Nas%20estrelas%20%28Tudo%20Ele%20%C3%A9%20para%20mim%29	"},
                {"track":	6	,	 "name": "	NOVO NASCIMENTO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/84-Novo-Nascimento	"},
                {"track":	7	,	 "name": "	A LINDA HISTÓRIA (EVANGELISMO).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/A%20Linda%20Hist%C3%B3ria%20%28Evangelismo%29	"},
                {"track":	8	,	 "name": "	A MENSAGEM DA CRUZ	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/A%20MENSAGEM%20DA%20CRUZ	"},
                {"track":	9	,	 "name": "	A PALAVRA DE DEUS	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/A%20PALAVRA%20DE%20DEUS	"},
                {"track":	10	,	 "name": "	A TI QUE HABITAS NOS CÉUS (SALMO 123).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/A%20TI%20QUE%20HABITAS%20NOS%20C%C3%89US%20%28Salmo%20123%29	"},
                {"track":	11	,	 "name": "	A TI SENHOR ELEVO A MINHA ALMA (SALMO 25).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/A%20TI%20SENHOR%20ELEVO%20A%20MINHA%20ALMA%20%28Salmo%2025%29	"},
                {"track":	12	,	 "name": "	A VOZ DE CRISTO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/A%20VOZ%20DE%20CRISTO	"},
                {"track":	13	,	 "name": "	A ULTIMA HORA	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/A-ULTIMA-HORA	"},
                {"track":	14	,	 "name": "	ACLAMAI A DEUS (SALMO 66).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/ACLAMAI%20A%20DEUS%20%28Salmo%2066%29	"},
                {"track":	15	,	 "name": "	ALEGREI ME (SALMO 122).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/ALEGREI-ME%20%28Salmo%20122%29	"},
                {"track":	16	,	 "name": "	ALVOS MAIS QUE A NEVE FICAMOS QUANDO LAVADOS EM TEU SANGUE SALVADOR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/ALVOS%20MAIS%20QUE%20A%20NEVE%20FICAMOS%20QUANDO%20LAVADOS%20EM%20TEU%20SANGUE%20SALVADOR	"},
                {"track":	17	,	 "name": "	AO NOME EXCELSO",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/AO%20NOME%20EXCELSO-DlPRtgWCwic	"},
                {"track":	18	,	 "name": "	AO TEU NOME, Ó ALTÍSSIMO CANTAREI LOUVORES (SALMO 9).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/AO%20TEU%20NOME%2C%20%C3%93%20ALT%C3%8DSSIMO%20CANTAREI%20LOUVORES%20%28Salmo%209%29	"},
                {"track":	19	,	 "name": "	ATRIBULADO CORAÇÃO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/ATRIBULADO%20CORA%C3%87%C3%83O	"},
                {"track":	20	,	 "name": "	ATÉ A CRUZ DESCESTE	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/AT%C3%89%20A%20CRUZ%20DESCESTE	"},
                {"track":	21	,	 "name": "	ATÉ QUANDO (SALMO 4).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/AT%C3%89%20QUANDO%20%28Salmo%204%29	"},
                {"track":	22	,	 "name": "	AMOR GLORIOSO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Amor%20Glorioso	"},
                {"track":	23	,	 "name": "	AO CONTEMPLARMOS TUA CRUZ	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Ao%20Contemplarmos%20Tua%20Cruz	"},
                {"track":	24	,	 "name": "	AO SOM DA ÚLTIMA TROMBETA   I CORÍNTIOS 15	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Ao%20som%20da%20%C3%BAltima%20trombeta%20-%20I%20Cor%C3%ADntios%2015	"},
                {"track":	25	,	 "name": "	BATEI PALMAS (SALMO 47).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/BATEI%20PALMAS%20%28Salmo%2047%29	"},
                {"track":	26	,	 "name": "	BENDIREI AO SENHOR EM TODO TEMPO   (SALMO 34).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/BENDIREI%20AO%20SENHOR%20EM%20TODO%20TEMPO%20%20%20%28SALMO%2034%29	"},
                {"track":	27	,	 "name": "	BENDIZE Ó MINHA ALMA AO SENHOR (SALMO 103).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/BENDIZE%20%C3%93%20MINHA%20ALMA%20AO%20SENHOR%20%28Salmo%20103%29	"},
                {"track":	28	,	 "name": "	BENDIZEI AO SENHOR (SALMO 134).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/BENDIZEI%20AO%20SENHOR%20%28Salmo%20134%29	"},
                {"track":	29	,	 "name": "	BOM É RENDER GRAÇAS AO SENHOR (SALMO 92).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/BOM%20%C3%89%20RENDER%20GRA%C3%87AS%20AO%20SENHOR%20%28Salmo%2092%29	"},
                {"track":	30	,	 "name": "	BUSCAI AO SENHOR (ISAÍAS 55).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/BUSCAI%20AO%20SENHOR%20%28Isa%C3%ADas%2055%29	"},
                {"track":	31	,	 "name": "	BOM AMIGO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Bom%20Amigo	"},
                {"track":	32	,	 "name": "	CANTAI AO SENHOR (SALMO 96).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/CANTAI%20AO%20SENHOR%20%28Salmo%2096%29	"},
                {"track":	33	,	 "name": "	CANTAREI AO SENHOR PORQUE TRIUNFOU GLORIOSAMENTE (CÂNTICO DE MOISÉS).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/CANTAREI%20AO%20SENHOR%20PORQUE%20TRIUNFOU%20GLORIOSAMENTE%20%28C%C3%A2ntico%20de%20Mois%C3%A9s%29	"},
                {"track":	34	,	 "name": "	CELEBRAI COM JÚBILO AO SENHOR (SALMO 100).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/CELEBRAI%20COM%20J%C3%9ABILO%20AO%20SENHOR%20%28Salmo%20100%29	"},
                {"track":	35	,	 "name": "	COMO A ALVA NEVE	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/COMO%20A%20ALVA%20NEVE	"},
                {"track":	36	,	 "name": "	CONHECEIS AGORA O DIVINAL PODER  (ARE YOU WASHED IN THE BLOOD).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/CONHECEIS%20AGORA%20O%20DIVINAL%20PODER%20%20%28Are%20you%20washed%20in%20the%20blood%29	"},
                {"track":	37	,	 "name": "	CRISTO É A VIDA	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/CRISTO%20%C3%89%20A%20VIDA	"},
                {"track":	38	,	 "name": "	DESDE AGORA E PARA SEMPRE (SALMO 131).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/DESDE%20AGORA%20E%20PARA%20SEMPRE%20%28Salmo%20131%29	"},
                {"track":	39	,	 "name": "	DEUS É O NOSSO REFÚGIO E FORTALEZA (SALMO 46).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/DEUS%20%C3%89%20O%20NOSSO%20REF%C3%9AGIO%20E%20FORTALEZA%20%28Salmo%2046%29	"},
                {"track":	40	,	 "name": "	DOCE CERTEZA MEU É JESUS (BLESSED ASSURANCE).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/DOCE%20CERTEZA%20MEU%20%C3%89%20JESUS%20%28BLESSED%20ASSURANCE%29	"},
                {"track":	41	,	 "name": "	DOCE COMUNHÃO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Doce%20comunh%C3%A3o	"},
                {"track":	42	,	 "name": "	ELEVO OS OLHOS PARA OS MONTES DE ONDE VIRÁ O MEU SOCORRO  (SALMO 121).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/ELEVO%20OS%20OLHOS%20PARA%20OS%20MONTES%20DE%20ONDE%20VIR%C3%81%20O%20MEU%20SOCORRO%20%20%28Salmo%20121%29	"},
                {"track":	43	,	 "name": "	EU ME ALEGRAREI NO SENHOR   (CÂNTICO DE HABACUQUE 3 17 19).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/EU%20ME%20ALEGRAREI%20NO%20SENHOR%20%20%20%28C%C3%A2ntico%20de%20Habacuque%203_17-19%29	"},
                {"track":	44	,	 "name": "	EXULTAI, Ó JUSTOS, NO SENHOR (SALMO 33).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/EXULTAI%2C%20%C3%93%20JUSTOS%2C%20NO%20SENHOR%20%28Salmo%2033%29	"},
                {"track":	45	,	 "name": "	ESCUTA, POBRE PECADOR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Escuta%2C%20pobre%20pecador	"},
                {"track":	46	,	 "name": "	FACE A FACE COM JESUS	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/FACE%20A%20FACE%20COM%20JESUS	"},
                {"track":	47	,	 "name": "	FIRME ESTÁ MEU CORAÇÃO (SALMO 108).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/FIRME%20EST%C3%81%20MEU%20CORA%C3%87%C3%83O%20%28Salmo%20108%29	"},
                {"track":	48	,	 "name": "	FOI NA CRUZ	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Foi%20na%20Cruz	"},
                {"track":	49	,	 "name": "	GLÓRIA A JESUS	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/GL%C3%93RIA%20A%20JESUS	"},
                {"track":	50	,	 "name": "	GLÓRIA AO CORDEIRO (APOCALIPSE 5.5).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/GL%C3%93RIA%20AO%20CORDEIRO%20%28Apocalipse%205.5%29	"},
                {"track":	51	,	 "name": "	HOJE REMIDOS	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/HOJE%20REMIDOS	"},
                {"track":	52	,	 "name": "	JA SALVO SOU	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/JA%20SALVO%20SOU	"},
                {"track":	53	,	 "name": "	JESUS DOCE AMIGO MEU	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/JESUS%20DOCE%20AMIGO%20MEU	"},
                {"track":	54	,	 "name": "	JOSÉ BATISTA PEREIRA   SE ISSO NÃO FOR AMOR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/JOS%C3%89%20BATISTA%20PEREIRA%20-%20SE%20ISSO%20N%C3%83O%20FOR%20AMOR	"},
                {"track":	55	,	 "name": "	LEVANTAI  Ó PORTAS, VOSSAS CABEÇAS (SALMO 24).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/LEVANTAI%20%20%C3%93%20PORTAS%2C%20VOSSAS%20CABE%C3%87AS%20%28Salmo%2024%29	"},
                {"track":	56	,	 "name": "	LOUVAI AO SENHOR (SALMO 148).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/LOUVAI%20AO%20SENHOR%20%28Salmo%20148%29	"},
                {"track":	57	,	 "name": "	LOUVAI SERVOS DO SENHOR (SALMO 113).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/LOUVAI%20SERVOS%20DO%20SENHOR%20%28Salmo%20113%29	"},
                {"track":	58	,	 "name": "	MAIS ALÉM DO SOL	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/MAIS%20AL%C3%89M%20DO%20SOL	"},
                {"track":	59	,	 "name": "	MEUS PECADOS JESUS EXPIOU NA CRUZ   (JESUS PAID IT ALL).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/MEUS%20PECADOS%20JESUS%20EXPIOU%20NA%20CRUZ%20%20%20%28Jesus%20paid%20it%20all%29	"},
                {"track":	60	,	 "name": "	NAQUELE DIA DE ESPLENDOR E GLÓRIA	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/NAQUELE%20DIA%20DE%20ESPLENDOR%20E%20GL%C3%93RIA	"},
                {"track":	61	,	 "name": "	NINGUÉM MAIS HAVIA DE TÃO DIGNO PARA LIBERTAR O PECADOR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/NINGU%C3%89M%20MAIS%20HAVIA%20DE%20T%C3%83O%20DIGNO%20PARA%20LIBERTAR%20O%20PECADOR	"},
                {"track":	62	,	 "name": "	NO PUEDE EL MUNDO SER MI HOGAR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/No%20puede%20el%20mundo%20ser%20mi%20hogar	"},
                {"track":	63	,	 "name": "	NÃO A NÓS SENHOR (SALMO 115).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/N%C3%83O%20A%20N%C3%93S%20SENHOR%20%28Salmo%20115%29	"},
                {"track":	64	,	 "name": "	NÃO TE INDIGNES (SALMO 37 E 2 TIMÓTEO 2 19,22).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/N%C3%83O%20TE%20INDIGNES%20%28Salmo%2037%20e%202%20Tim%C3%B3teo%202_19%2C22%29	"},
                {"track":	65	,	 "name": "	O AMOR DIVINO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/O%20AMOR%20DIVINO	"},
                {"track":	66	,	 "name": "	O SENHOR É O MEU PASTOR (SALMO 23).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/O%20SENHOR%20%C3%89%20O%20MEU%20PASTOR%20%28Salmo%2023%29	"},
                {"track":	67	,	 "name": "	O GRANDE MOTIVO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/O-grande-motivo	"},
                {"track":	68	,	 "name": "	OH! MEU JESUS, JESUS DEUS DE AMOR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/OH%21%20MEU%20JESUS%2C%20JESUS%20DEUS%20DE%20AMOR	"},
                {"track":	69	,	 "name": "	OS CÉUS PROCLAMAM A GLÓRIA DE DEUS (SALMO 19).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/OS%20C%C3%89US%20PROCLAMAM%20A%20GL%C3%93RIA%20DE%20DEUS%20%28Salmo%2019%29	"},
                {"track":	70	,	 "name": "	OS QUE CONFIAM NO SENHOR (SALMO 125).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/OS%20QUE%20CONFIAM%20NO%20SENHOR%20%28Salmo%20125%29	"},
                {"track":	71	,	 "name": "	OH! QUE AMOR TEVE DEUS PAI	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Oh%21%20Que%20amor%20teve%20Deus%20Pai	"},
                {"track":	72	,	 "name": "	PALAVRA DOS MEUS LÁBIOS   (SALMO 19 14).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/PALAVRA%20DOS%20MEUS%20L%C3%81BIOS%20%20%20%28Salmo%2019_14%29	"},
                {"track":	73	,	 "name": "	PODES CRER QUE JESUS É DEUS	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/PODES%20CRER%20QUE%20JESUS%20%C3%89%20DEUS	"},
                {"track":	74	,	 "name": "	PARA SALVAR TE	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Para%20salvar-te	"},
                {"track":	75	,	 "name": "	PECADOR TEUS PECADOS BRANCOS BRANCOS SE FARÃO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Pecador%20teus%20pecados%20brancos%20brancos%20se%20far%C3%A3o	"},
                {"track":	76	,	 "name": "	PREFIERO A JESUS	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Prefiero%20a%20Jesus	"},
                {"track":	77	,	 "name": "	QUANDO CHEGARAM AO CALVÁRIO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/QUANDO%20CHEGARAM%20AO%20CALV%C3%81RIO	"},
                {"track":	78	,	 "name": "	QUANDO O SENHOR JESUS VOLTAR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/QUANDO%20O%20SENHOR%20JESUS%20VOLTAR	"},
                {"track":	79	,	 "name": "	QUEM PODE FALAR DAS COISAS LÁ DO ALTO (1 JOÃO 5 20).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/QUEM%20PODE%20FALAR%20DAS%20COISAS%20L%C3%81%20DO%20ALTO%20%281%20Jo%C3%A3o%205_20%29	"},
                {"track":	80	,	 "name": "	QUÃO BOM ESCUTAR TUA VOZ	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/QU%C3%83O%20BOM%20ESCUTAR%20TUA%20VOZ	"},
                {"track":	81	,	 "name": "	QUÃO GRANDE ÉS TU	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Qu%C3%A3o%20grande%20%C3%A9s%20tu	"},
                {"track":	82	,	 "name": "	RENDEI GRAÇAS AO SENHOR (SALMO 105).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/RENDEI%20GRA%C3%87AS%20AO%20SENHOR%20%28Salmo%20105%29	"},
                {"track":	83	,	 "name": "	ROCHA ETERNA (ROCK OF AGES).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/ROCHA%20ETERNA%20%28Rock%20of%20Ages%29	"},
                {"track":	84	,	 "name": "	RECORDAÇÃO DO TEU AMOR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Recorda%C3%A7%C3%A3o%20do%20teu%20amor	"},
                {"track":	85	,	 "name": "	REDENÇÃO CONSUMADA	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Reden%C3%A7%C3%A3o%20consumada	"},
                {"track":	86	,	 "name": "	REIS DOS REIS E SENHOR DOS SENHORES   APOCALIPSE 19	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Reis%20dos%20reis%20e%20Senhor%20dos%20Senhores%20-%20Apocalipse%2019	"},
                {"track":	87	,	 "name": "	ROSTO DIVINO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Rosto%20Divino	"},
                {"track":	88	,	 "name": "	SENHOR CONSERVARÁS EM PERFEITA PAZ (ISAÍAS 26 3 4,8 9,12).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/SENHOR%20CONSERVAR%C3%81S%20EM%20PERFEITA%20PAZ%20%28Isa%C3%ADas%2026_3-4%2C8-9%2C12%29	"},
                {"track":	89	,	 "name": "	SIÃO (SALMO 126).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/SI%C3%83O%20%28Salmo%20126%29	"},
                {"track":	90	,	 "name": "	SOU FELIZ COM JESUS	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/SOU%20FELIZ%20COM%20JESUS	"},
                {"track":	91	,	 "name": "	SALMO 23   VERSÃO II	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Salmo%2023%20-%20Vers%C3%A3o%20II	"},
                {"track":	92	,	 "name": "	SANTO SANTO SANTO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Santo_Santo_Santo	"},
                {"track":	93	,	 "name": "	SEU GRANDE AMOR ME LEVANTOU	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Seu%20grande%20amor%20me%20levantou	"},
                {"track":	94	,	 "name": "	SOMENTE EM TEU LOUVOR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Somente%20em%20teu%20louvor	"},
                {"track":	95	,	 "name": "	SONDA ME Ó DEUS E CONHECE O MEU CORAÇÃO (SALMO 139 ).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Sonda-me%20%C3%B3%20Deus%20e%20conhece%20o%20meu%20cora%C3%A7%C3%A3o%20%28Salmo%20139%20%29	"},
                {"track":	96	,	 "name": "	SOU DE JESUS AGORA   MEU É JESUS TAMBÉM	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Sou%20de%20Jesus%20agora%20-%20Meu%20%C3%A9%20Jesus%20tamb%C3%A9m	"},
                {"track":	97	,	 "name": "	SUBSTITUICAO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Substituicao	"},
                {"track":	98	,	 "name": "	TAL COMO ESTÁS VEM A JESUS (JUST AS I AM).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/TAL%20COMO%20EST%C3%81S%20VEM%20A%20JESUS%20%28Just%20as%20I%20am%29	"},
                {"track":	99	,	 "name": "	TERNO SALVADOR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/TERNO%20SALVADOR	"},
                {"track":	100	,	 "name": "	TEU SACRIFÍCIO EXCELSO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/TEU%20SACRIF%C3%8DCIO%20EXCELSO	"},
                {"track":	101	,	 "name": "	TEMA ENCANTADOR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Tema%20encantador	"},
                {"track":	102	,	 "name": "	TERNO E SUAVE ESTÁ CRISTO CHAMANDO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Terno%20e%20suave%20est%C3%A1%20Cristo%20chamando	"},
                {"track":	103	,	 "name": "	TOMAREI O CÁLICE DA SALVAÇÃO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Tomarei%20o%20c%C3%A1lice%20da%20salva%C3%A7%C3%A3o	"},
                {"track":	104	,	 "name": "	UMA VEZ MAIS	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Uma-vez-mais	"},
                {"track":	105	,	 "name": "	VINDE CANTEMOS (SALMO 95).	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/VINDE%20CANTEMOS%20%28Salmo%2095%29	"},
                {"track":	106	,	 "name": "	VEM JESUS NOS BUSCAR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Vem%20Jesus%20nos%20buscar	"},
                {"track":	107	,	 "name": "	ALEGRE VERDADE	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/alegre-verdade	"},
                {"track":	108	,	 "name": "	BUSCAI PRIMEIRO O REINO DEUS	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/buscaiPrimeiroReinoDeus	"},
                {"track":	109	,	 "name": "	CANTE ALELUA	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/cante_alelua	"},
                {"track":	110	,	 "name": "	CEGUEIRA E VISTA	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/cegueira%20e%20vista	"},
                {"track":	111	,	 "name": "	OH QUE AMOR DIVINO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/oh_que_amor_divino	"},
                {"track":	112	,	 "name": "	PALACIOS DE MARFIM	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/palacios_de_marfim	"},
                {"track":	113	,	 "name": "	PORQUE TANTO AMOR	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/porqueTantoAmor	"},
                {"track":	114	,	 "name": "	QUANDO NÓS FORMOS CHAMADOS	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/quandoNosFormoschamados	"},
                {"track":	115	,	 "name": "	TUA BONDADE E MELHOR QUE A VIDA	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/tua_bondade_e_melhor_que_a_vida	"},
                {"track":	116	,	 "name": "	É TÃO BOM CONFIAR EM CRISTO	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/%C3%89%20t%C3%A3o%20bom%20confiar%20em%20Cristo	"},
                {"track":	117	,	 "name": "	Terás vida em olhar pra Jesus	",	 "file": "	https://leituracrista.com/downloads/hinos_salmos_canticos	/Vida_por_um_olhar	"},
                    
],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                trackFile = value.file,
                trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                // $('#plList').append('<li ><div class="plItem" ><div class="plNum">'+ trackNumber + '.</div><div class="plTitle">' + trackName + ' - (' + trackVoz + ')' + '</div><div class="plLength">' + trackLength + '</div></div></li>');
                // $('#plList').append('<li ><div class="plItem" ><div class="plNum">'+ trackNumber + '.</div><div class="plTitle"><a target="_blank" href="' + trackFile + '"><i class="fa fa-download fa-lg"></i></a> ' + trackName.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase()) + '</div><div class="plLength">' + trackLength + '</div></div></li>');
                $('#plList').append('<li ><div class="plItem" ><div class="plNum">'+ trackNumber + '.</div><div class="plTitle"><a target="_blank" href="' + trackFile + '.mp3"><i class="fa fa-download fa-lg"></i></a> ' + trackName.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase()) + '</div><div class="plLength"></div></div></li>');
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
document.write('<title>Audio Player - Hinos Salmos e Cânticos</title>')

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
