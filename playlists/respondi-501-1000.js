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

 
{"track":	1	,	 "name": "	#1181 Apocalipse 1:7 prova que a terra e' plana?	",	 "length": "	21:43	",	 "file": "	https://www.mediafire.com/file/	boe7n357tazyj7p	/	#1181 Apocalipse 1:7 prova que a terra e' plana?	"},
{"track":	2	,	 "name": "	#1182 Os cristaos deveriam fazer mais caridade?	",	 "length": "	10:00	",	 "file": "	https://www.mediafire.com/file/	j60ejcttqdjaml3	/	#1182 Os cristaos deveriam fazer mais caridade?	"},
{"track":	3	,	 "name": "	#1183 Os apostolos ensinavam a Igreja a guardar a Lei?	",	 "length": "	09:30	",	 "file": "	https://www.mediafire.com/file/	tn43lothbkd4c4h	/	#1183 Os apostolos ensinavam a Igreja a guardar a Lei?	"},
{"track":	4	,	 "name": "	#1184 Devemos denunciar pessoas, acoes e doutrinas?	",	 "length": "	12:53	",	 "file": "	https://www.mediafire.com/file/	lmt2059d1c41984	/	#1184 Devemos denunciar pessoas, acoes e doutrinas?	"},
{"track":	5	,	 "name": "	#1185 O ladrao de Joao 10 e' o diabo?	",	 "length": "	12:30	",	 "file": "	https://www.mediafire.com/file/	4f1rpsrprfs82zp	/	#1185 O ladrao de Joao 10 e' o diabo?	"},
{"track":	6	,	 "name": "	#1186 Se os homens morrem uma vez por que Lazaro morreu duas?	",	 "length": "	07:23	",	 "file": "	https://www.mediafire.com/file/	l6em437xyohi6o4	/	#1186 Se os homens morrem uma vez por que Lazaro morreu duas?	"},
{"track":	7	,	 "name": "	#1187 Nao querer filhos e' pecado?	",	 "length": "	02:15	",	 "file": "	https://www.mediafire.com/file/	j3hitsaxt4kpcaf	/	#1187 Nao querer filhos e' pecado?	"},
{"track":	8	,	 "name": "	#1188 Devo celebrar a Pascoa?	",	 "length": "	16:27	",	 "file": "	https://www.mediafire.com/file/	b1mae596b07wjnt	/	#1188 Devo celebrar a Pascoa?	"},
{"track":	9	,	 "name": "	#1189 O que significa 'pagar o ultimo centavo'?	",	 "length": "	09:40	",	 "file": "	https://www.mediafire.com/file/	lgnd462zygquoln	/	#1189 O que significa 'pagar o ultimo centavo'?	"},
{"track":	10	,	 "name": "	#1190 Por que esse 'estilo de culto'?	",	 "length": "	00:08	",	 "file": "	https://www.mediafire.com/file/	c79hd0yt0vye764	/	#1190 Por que esse 'estilo de culto'?	"},
{"track":	11	,	 "name": "	#1191 Por que Farao' e Judas foram culpados?	",	 "length": "	03:26	",	 "file": "	https://www.mediafire.com/file/	rommg0kmdctfnuf	/	#1191 Por que Farao' e Judas foram culpados?	"},
{"track":	12	,	 "name": "	#1192 Seria Eva a segunda esposa de Adao?	",	 "length": "	15:26	",	 "file": "	https://www.mediafire.com/file/	z3rejknlb02lui8	/	#1192 Seria Eva a segunda esposa de Adao?	"},
{"track":	13	,	 "name": "	#1193 O que acha do pregador Fulano?	",	 "length": "	00:33	",	 "file": "	https://www.mediafire.com/file/	g4ph9d12m8yb4a0	/	#1193 O que acha do pregador Fulano?	"},
{"track":	14	,	 "name": "	#1194 O ISIS aparece na profecia biblica?	",	 "length": "	00:12	",	 "file": "	https://www.mediafire.com/file/	me3m7v8at1dmr8v	/	#1194 O ISIS aparece na profecia biblica?	"},
{"track":	15	,	 "name": "	#1195 Seria Cristo um 'Segundo Adao'?	",	 "length": "	04:48	",	 "file": "	https://www.mediafire.com/file/	742cqzlqi930lj3	/	#1195 Seria Cristo um 'Segundo Adao'?	"},
{"track":	16	,	 "name": "	#1196 Cristaos denominacionais sao mais ativos no evangelismo?	",	 "length": "	12:08	",	 "file": "	https://www.mediafire.com/file/	3mkqlr6oin27qe5	/	#1196 Cristaos denominacionais sao mais ativos no evangelismo?	"},
{"track":	17	,	 "name": "	#1197 Religiao seria e' religiao boa?	",	 "length": "	16:37	",	 "file": "	https://www.mediafire.com/file/	yjbloo86hek106j	/	#1197 Religiao seria e' religiao boa?	"},
{"track":	18	,	 "name": "	#1198 Devo interferir na politica por 'sede de justica'?	",	 "length": "	05:55	",	 "file": "	https://www.mediafire.com/file/	55uvx8g98s1bd8k	/	#1198 Devo interferir na politica por 'sede de justica'?	"},
{"track":	19	,	 "name": "	#1199 A luta de Jaco' nos ensina a lutarmos por nossos sonhos?	",	 "length": "	20:54	",	 "file": "	https://www.mediafire.com/file/	vuc4kze5074rr2y	/	#1199 A luta de Jaco' nos ensina a lutarmos por nossos sonhos?	"},
{"track":	20	,	 "name": "	#1200 E' errado ser bela, recatada e do lar?	",	 "length": "	00:33	",	 "file": "	https://www.mediafire.com/file/	h7vjgq2izsormsz	/	#1200 E' errado ser bela, recatada e do lar?	"},
{"track":	21	,	 "name": "	#1201 Seria a ceia do Senhor um 'engano de Satanas'?	",	 "length": "	06:28	",	 "file": "	https://www.mediafire.com/file/	e3yf938oe89cb3l	/	#1201 Seria a ceia do Senhor um 'engano de Satanas'?	"},
{"track":	22	,	 "name": "	#1202 Como ter seguranca, certeza e alegria da salvacao eterna?	",	 "length": "	10:58	",	 "file": "	https://www.mediafire.com/file/	s4adnugq97invv1	/	#1202 Como ter seguranca, certeza e alegria da salvacao eterna?	"},
{"track":	23	,	 "name": "	#1203 Seria Paulo um falso profeta?	",	 "length": "	19:58	",	 "file": "	https://www.mediafire.com/file/	w9w9ecfj07y7p85	/	#1203 Seria Paulo um falso profeta?	"},
{"track":	24	,	 "name": "	#1204 O fogo nunca se apaga? O salvo nunca se perde?	",	 "length": "	00:38	",	 "file": "	https://www.mediafire.com/file/	892fqq767f3n060	/	#1204 O fogo nunca se apaga? O salvo nunca se perde?	"},
{"track":	25	,	 "name": "	#1205 Por que as ursas mataram os jovens?	",	 "length": "	11:05	",	 "file": "	https://www.mediafire.com/file/	6s6vs8xq8d2xf4h	/	#1205 Por que as ursas mataram os jovens?	"},
{"track":	26	,	 "name": "	#1206 Devemos celebrar dias santos?	",	 "length": "	10:12	",	 "file": "	https://www.mediafire.com/file/	nq975cjurvn1op3	/	#1206 Devemos celebrar dias santos?	"},
{"track":	27	,	 "name": "	#1207 Ate' onde cristaos devem interferir na politica?	",	 "length": "	07:28	",	 "file": "	https://www.mediafire.com/file/	sjwwksp5dw6pl61	/	#1207 Ate' onde cristaos devem interferir na politica?	"},
{"track":	28	,	 "name": "	#1208 Esse evangelho vem de Deus?	",	 "length": "	04:54	",	 "file": "	https://www.mediafire.com/file/	k1ynsm8jznwc8zp	/	#1208 Esse evangelho vem de Deus?	"},
{"track":	29	,	 "name": "	#1209 Podemos usar novas tecnologias para evangelizar?	",	 "length": "	10:44	",	 "file": "	https://www.mediafire.com/file/	7az804xs9ck1ifm	/	#1209 Podemos usar novas tecnologias para evangelizar?	"},
{"track":	30	,	 "name": "	#1210 Somos todos corruptos?	",	 "length": "	06:52	",	 "file": "	https://www.mediafire.com/file/	e4jf51w4zih3ypr	/	#1210 Somos todos corruptos?	"},
{"track":	31	,	 "name": "	#1211 Jesus amava mais a Joao que aos outros?	",	 "length": "	12:13	",	 "file": "	https://www.mediafire.com/file/	i3z3jfci803lmp3	/	#1211 Jesus amava mais a Joao que aos outros?	"},
{"track":	32	,	 "name": "	#1212 Posso usar fotos de celebridades para evangelizar?	",	 "length": "	10:07	",	 "file": "	https://www.mediafire.com/file/	0fchdsa0wvhon1l	/	#1212 Posso usar fotos de celebridades para evangelizar?	"},
{"track":	33	,	 "name": "	#1213 Os filhos nao devem pagar pelos pecados dos pais?	",	 "length": "	12:13	",	 "file": "	https://www.mediafire.com/file/	9e0zr4jenmzz1bb	/	#1213 Os filhos nao devem pagar pelos pecados dos pais?	"},
{"track":	34	,	 "name": "	#1214 O que voce acha da “Biblia Judaica Completa”?	",	 "length": "	10:50	",	 "file": "	https://www.mediafire.com/file/	5zga540nnntqubz	/	#1214 O que voce acha da “Biblia Judaica Completa”?	"},
{"track":	35	,	 "name": "	#1215 O que sao as 'obras mortas' de Hebreus 6?	",	 "length": "	13:58	",	 "file": "	https://www.mediafire.com/file/	ur87vvuxb3vves5	/	#1215 O que sao as 'obras mortas' de Hebreus 6?	"},
{"track":	36	,	 "name": "	#1216 Disciplina na assembleia e' para condenar quem pecou?	",	 "length": "	14:16	",	 "file": "	https://www.mediafire.com/file/	dbd429kkzn36il4	/	#1216 Disciplina na assembleia e' para condenar quem pecou?	"},
{"track":	37	,	 "name": "	#1217 Por que me decepcionei com as reunioes?	",	 "length": "	22:12	",	 "file": "	https://www.mediafire.com/file/	d8yk0ilgeadd7za	/	#1217 Por que me decepcionei com as reunioes?	"},
{"track":	38	,	 "name": "	#1218 Cristao deve votar em cristao?	",	 "length": "	05:39	",	 "file": "	https://www.mediafire.com/file/	l8av72octd96y32	/	#1218 Cristao deve votar em cristao?	"},
{"track":	39	,	 "name": "	#1219 Posso colocar flores no tumulo de meu pai?	",	 "length": "	13:00	",	 "file": "	https://www.mediafire.com/file/	iitthidxtq1thg6	/	#1219 Posso colocar flores no tumulo de meu pai?	"},
{"track":	40	,	 "name": "	#1220 Tudo bem pregar um evangelho distorcido?	",	 "length": "	09:23	",	 "file": "	https://www.mediafire.com/file/	pcexjocy40wehys	/	#1220 Tudo bem pregar um evangelho distorcido?	"},
{"track":	41	,	 "name": "	#1221 Estou sendo injustamente perseguido?	",	 "length": "	14:25	",	 "file": "	https://www.mediafire.com/file/	6tkdi7707iekm6p	/	#1221 Estou sendo injustamente perseguido?	"},
{"track":	42	,	 "name": "	#1222 Devo me aprofundar em conhecer a “Nova Era”?	",	 "length": "	10:38	",	 "file": "	https://www.mediafire.com/file/	gd0bik5a3nkk83p	/	#1222 Devo me aprofundar em conhecer a “Nova Era”?	"},
{"track":	43	,	 "name": "	#1223 O capítulo 24 de Mateus fala da Igreja?	",	 "length": "	07:48	",	 "file": "	https://www.mediafire.com/file/	ofso99aapw37vwr	/	#1223 O capítulo 24 de Mateus fala da Igreja?	"},
{"track":	44	,	 "name": "	#1224 O que e' um verdadeiro arrependimento?	",	 "length": "	11:52	",	 "file": "	https://www.mediafire.com/file/	g8r5vstj2pdx9jb	/	#1224 O que e' um verdadeiro arrependimento?	"},
{"track":	45	,	 "name": "	#1225 Perdi minha comunhao com Deus. O que fazer?	",	 "length": "	07:58	",	 "file": "	https://www.mediafire.com/file/	otu7chn71mw97j7	/	#1225 Perdi minha comunhao com Deus. O que fazer?	"},
{"track":	46	,	 "name": "	#1226 O que fazer agora que entendi onde e como congregar?	",	 "length": "	10:13	",	 "file": "	https://www.mediafire.com/file/	70pbja6ip8ssyjp	/	#1226 O que fazer agora que entendi onde e como congregar?	"},
{"track":	47	,	 "name": "	#1227 Anulamos a Lei pela fe'?	",	 "length": "	09:47	",	 "file": "	https://www.mediafire.com/file/	x04x67994qgxl0a	/	#1227 Anulamos a Lei pela fe'?	"},
{"track":	48	,	 "name": "	#1228 Podemos congregar ao nome do Senhor numa praca?	",	 "length": "	06:36	",	 "file": "	https://www.mediafire.com/file/	i4vm94ghaq44vii	/	#1228 Podemos congregar ao nome do Senhor numa praca?	"},
{"track":	49	,	 "name": "	#1229 Quem seria o Profeta?	",	 "length": "	05:07	",	 "file": "	https://www.mediafire.com/file/	6zzln7wmq52dawp	/	#1229 Quem seria o Profeta?	"},
{"track":	50	,	 "name": "	#1230 O apóstolo recorre à lei para ordenar o silêncio das mulheres?	",	 "length": "	04:45	",	 "file": "	https://www.mediafire.com/file/	qbqdz54gfrhq4bk	/	#1230 O apóstolo recorre à lei para ordenar o silêncio das mulheres?	"},
{"track":	51	,	 "name": "	#1231 O que acha de direitos autorais para literatura cristã?	",	 "length": "	06:55	",	 "file": "	https://www.mediafire.com/file/	u5w0pwy69e5hv29	/	#1231 O que acha de direitos autorais para literatura cristã?	"},
{"track":	52	,	 "name": "	#1232 Na Bíblia existe o casamento civil?	",	 "length": "	16:02	",	 "file": "	https://www.mediafire.com/file/	a866wcygsis6gn4	/	#1232 Na Bíblia existe o casamento civil?	"},
{"track":	53	,	 "name": "	#1233 Como usar os recursos da coleta?	",	 "length": "	21:26	",	 "file": "	https://www.mediafire.com/file/	9393exwuww0zsdf	/	#1233 Como usar os recursos da coleta?	"},
{"track":	54	,	 "name": "	#1234 Vai ter Chip, Lua de sangue, Tsunami, Trombetas, Blue Beam etc.?	",	 "length": "	17:18	",	 "file": "	https://www.mediafire.com/file/	7lmbgh9oii59ivs	/	#1234 Vai ter Chip, Lua de sangue, Tsunami, Trombetas, Blue Beam etc.?	"},
{"track":	55	,	 "name": "	#1235 Como me preparar para evangelizar?	",	 "length": "	08:51	",	 "file": "	https://www.mediafire.com/file/	na2gbpqnrb0ug3s	/	#1235 Como me preparar para evangelizar?	"},
{"track":	56	,	 "name": "	#1236 A Palavra de Deus proibe tatuagens?	",	 "length": "	01:50	",	 "file": "	https://www.mediafire.com/file/	jltl4a612ybo7tc	/	#1236 A Palavra de Deus proibe tatuagens?	"},
{"track":	57	,	 "name": "	#1237 O que voce fara' se alguem pedir para ser curado?	",	 "length": "	16:24	",	 "file": "	https://www.mediafire.com/file/	beca4nzouaguxk9	/	#1237 O que voce fara' se alguem pedir para ser curado?	"},
{"track":	58	,	 "name": "	#1238 O que voce pensa da hipnose?	",	 "length": "	21:16	",	 "file": "	https://www.mediafire.com/file/	b5ckk98e01szhsk	/	#1238 O que voce pensa da hipnose?	"},
{"track":	59	,	 "name": "	#1239 De que pecado Jesus estava falando neste versiculo?	",	 "length": "	04:33	",	 "file": "	https://www.mediafire.com/file/	6kgp1c39j1l3xfm	/	#1239 De que pecado Jesus estava falando neste versiculo?	"},
{"track":	60	,	 "name": "	#1240 Para que pregar o evangelho se ele já foi pregado a toda criatura?	",	 "length": "	03:14	",	 "file": "	https://www.mediafire.com/file/	zju9qfhthe64xup	/	#1240 Para que pregar o evangelho se ele já foi pregado a toda criatura?	"},
{"track":	61	,	 "name": "	#1241 Existe um padrao para a vida de cada pessoa?	",	 "length": "	07:37	",	 "file": "	https://www.mediafire.com/file/	rk2rn2n25gln7u5	/	#1241 Existe um padrao para a vida de cada pessoa?	"},
{"track":	62	,	 "name": "	#1242 Podemos usar novas midias na evangelizacao?	",	 "length": "	06:37	",	 "file": "	https://www.mediafire.com/file/	5rzzls3z5gv2xe7	/	#1242 Podemos usar novas midias na evangelizacao?	"},
{"track":	63	,	 "name": "	#1243 Fui possuida por um 'espirito de prostituicao'?	",	 "length": "	04:07	",	 "file": "	https://www.mediafire.com/file/	026j361h5lgsugd	/	#1243 Fui possuida por um 'espirito de prostituicao'?	"},
{"track":	64	,	 "name": "	#1244 Por que Pedro disse que as mulheres iriam profetizar?	",	 "length": "	07:14	",	 "file": "	https://www.mediafire.com/file/	wcaecqa3cm8mybj	/	#1244 Por que Pedro disse que as mulheres iriam profetizar?	"},
{"track":	65	,	 "name": "	#1245 Posso me manter atualizado?	",	 "length": "	10:07	",	 "file": "	https://www.mediafire.com/file/	yp44jsi9vscm62p	/	#1245 Posso me manter atualizado?	"},
{"track":	66	,	 "name": "	#1246 Submissao feminina e' coisa do passado?	",	 "length": "	22:06	",	 "file": "	https://www.mediafire.com/file/	jqifro9sd0x56gd	/	#1246 Submissao feminina e' coisa do passado?	"},
{"track":	67	,	 "name": "	#1247 Devo convencer o outro a trocar de religiao?	",	 "length": "	12:16	",	 "file": "	https://www.mediafire.com/file/	xs6edqi1odzyu6g	/	#1247 Devo convencer o outro a trocar de religiao?	"},
{"track":	68	,	 "name": "	#1248 Como entender tempo e materia?	",	 "length": "	09:43	",	 "file": "	https://www.mediafire.com/file/	5t50khgg4immukz	/	#1248 Como entender tempo e materia?	"},
{"track":	69	,	 "name": "	#1249 Mulheres podem ocupar cargos de chefia?	",	 "length": "	03:37	",	 "file": "	https://www.mediafire.com/file/	kixqmgrg0rpnexr	/	#1249 Mulheres podem ocupar cargos de chefia?	"},
{"track":	70	,	 "name": "	#1250 Qual Biblia de Estudo voce utiliza?	",	 "length": "	06:30	",	 "file": "	https://www.mediafire.com/file/	42ddq59dsfhdd19	/	#1250 Qual Biblia de Estudo voce utiliza?	"},
{"track":	71	,	 "name": "	#1251 A ordem 'falem dois ou tres' e' no sentido literal?	",	 "length": "	17:08	",	 "file": "	https://www.mediafire.com/file/	m56xgah4v68zlhm	/	#1251 A ordem 'falem dois ou tres' e' no sentido literal?	"},
{"track":	72	,	 "name": "	#1252 Devo perder tempo lendo o Antigo Testamento?	",	 "length": "	00:27	",	 "file": "	https://www.mediafire.com/file/	j3nwt7toet8hxud	/	#1252 Devo perder tempo lendo o Antigo Testamento?	"},
{"track":	73	,	 "name": "	#1253 Por que voce nao permite comentarios?	",	 "length": "	08:37	",	 "file": "	https://www.mediafire.com/file/	z8c8cnjpivai386	/	#1253 Por que voce nao permite comentarios?	"},
{"track":	74	,	 "name": "	#1254 A Policia Federal desrespeitou a Biblia?	",	 "length": "	19:16	",	 "file": "	https://www.mediafire.com/file/	zgkjhm0oihbqcks	/	#1254 A Policia Federal desrespeitou a Biblia?	"},
{"track":	75	,	 "name": "	#1255 Como lidar com argumentos de Testemunhas de Jeova?	",	 "length": "	14:19	",	 "file": "	https://www.mediafire.com/file/	d98e4g3cl0d32lf	/	#1255 Como lidar com argumentos de Testemunhas de Jeova?	"},
{"track":	76	,	 "name": "	#1256 Lutero odiava judeus e disse que Jesus era adultero?	",	 "length": "	12:01	",	 "file": "	https://www.mediafire.com/file/	zvk74h9fsag19ph	/	#1256 Lutero odiava judeus e disse que Jesus era adultero?	"},
{"track":	77	,	 "name": "	#1257 Cristaos devem celebrar festas judaicas?	",	 "length": "	18:19	",	 "file": "	https://www.mediafire.com/file/	uhgidh7esmlnnjp	/	#1257 Cristaos devem celebrar festas judaicas?	"},
{"track":	78	,	 "name": "	#1258 Posso ministrar a Palavra em grupos mistos de oracao?	",	 "length": "	05:28	",	 "file": "	https://www.mediafire.com/file/	b9z84cr99d38zrk	/	#1258 Posso ministrar a Palavra em grupos mistos de oracao?	"},
{"track":	79	,	 "name": "	#1259 Por que voce e' rispido com algumas pessoas?	",	 "length": "	10:16	",	 "file": "	https://www.mediafire.com/file/	c9kfpj70i6kdipd	/	#1259 Por que voce e' rispido com algumas pessoas?	"},
{"track":	80	,	 "name": "	#1260 O que e' a 'doutrina de Cristo'?	",	 "length": "	11:58	",	 "file": "	https://www.mediafire.com/file/	hfl3s86wwpm5nrq	/	#1260 O que e' a 'doutrina de Cristo'?	"},
{"track":	81	,	 "name": "	#1261 Por que um incredulo bom vai para o inferno?	",	 "length": "	13:57	",	 "file": "	https://www.mediafire.com/file/	vj2iujbu2bi47wo	/	#1261 Por que um incredulo bom vai para o inferno?	"},
{"track":	82	,	 "name": "	#1262 Noe' tinha filhos quando foi avisado do fim do mundo?	",	 "length": "	06:33	",	 "file": "	https://www.mediafire.com/file/	tn2gabkfinm0ut4	/	#1262 Noe' tinha filhos quando foi avisado do fim do mundo?	"},
{"track":	83	,	 "name": "	#1263 Os sonhos e visões de muçulmanos são o cumprimento de Joel 2?	",	 "length": "	05:18	",	 "file": "	https://www.mediafire.com/file/	5ba3vodx30rmqsj	/	#1263 Os sonhos e visões de muçulmanos são o cumprimento de Joel 2?	"},
{"track":	84	,	 "name": "	#1264 O que e' a sa doutrina?	",	 "length": "	22:41	",	 "file": "	https://www.mediafire.com/file/	kst8d2aj396ry0u	/	#1264 O que e' a sa doutrina?	"},
{"track":	85	,	 "name": "	#1265 Apostatas irao para o ceu?	",	 "length": "	09:37	",	 "file": "	https://www.mediafire.com/file/	k3jzm9x3522bcal	/	#1265 Apostatas irao para o ceu?	"},
{"track":	86	,	 "name": "	#1266 A partir de que momento o pecador esta' salvo para sempre?	",	 "length": "	04:04	",	 "file": "	https://www.mediafire.com/file/	ashf5l72d2vng4g	/	#1266 A partir de que momento o pecador esta' salvo para sempre?	"},
{"track":	87	,	 "name": "	#1267 Quem praticar um destes pecados se perdera' eternamente?	",	 "length": "	07:12	",	 "file": "	https://www.mediafire.com/file/	701lyv72rl0j373	/	#1267 Quem praticar um destes pecados se perdera' eternamente?	"},
{"track":	88	,	 "name": "	#1268 Qual a melhor hora para se ler a Biblia?	",	 "length": "	10:16	",	 "file": "	https://www.mediafire.com/file/	so5e875s419769a	/	#1268 Qual a melhor hora para se ler a Biblia?	"},
{"track":	89	,	 "name": "	#1269 Ossos e reliquias de santos podem fazer milagres?	",	 "length": "	11:25	",	 "file": "	https://www.mediafire.com/file/	h9bs0savysf9gb0	/	#1269 Ossos e reliquias de santos podem fazer milagres?	"},
{"track":	90	,	 "name": "	#1270 Por que o exame previo para participar da ceia e ministerio?	",	 "length": "	09:39	",	 "file": "	https://www.mediafire.com/file/	8n91896kc1gk45p	/	#1270 Por que o exame previo para participar da ceia e ministerio?	"},
{"track":	91	,	 "name": "	#1271 Por que o Deus de Moises era mau?	",	 "length": "	09:16	",	 "file": "	https://www.mediafire.com/file/	ts5aynbbddd9u7n	/	#1271 Por que o Deus de Moises era mau?	"},
{"track":	92	,	 "name": "	#1272 O pregador profetizou que eu encontraria emprego?	",	 "length": "	11:12	",	 "file": "	https://www.mediafire.com/file/	rxuevh4xbej39ob	/	#1272 O pregador profetizou que eu encontraria emprego?	"},
{"track":	93	,	 "name": "	#1273 O que cometi foi adulterio?	",	 "length": "	05:33	",	 "file": "	https://www.mediafire.com/file/	krpu17gkdkr2ek5	/	#1273 O que cometi foi adulterio?	"},
{"track":	94	,	 "name": "	#1274 Posso jogar a Biblia no lixo?	",	 "length": "	05:53	",	 "file": "	https://www.mediafire.com/file/	e0usr9w13ke9j7i	/	#1274 Posso jogar a Biblia no lixo?	"},
{"track":	95	,	 "name": "	#1275 O que significava 'vida eterna' para um israelita?	",	 "length": "	06:01	",	 "file": "	https://www.mediafire.com/file/	ylmf60ncva60z0w	/	#1275 O que significava 'vida eterna' para um israelita?	"},
{"track":	96	,	 "name": "	#1276 O pastor de minha igreja adota o titulo de Profeta. Isso e' correto?	",	 "length": "	06:33	",	 "file": "	https://www.mediafire.com/file/	ozoizz1pw7j36j1	/	#1276 O pastor de minha igreja adota o titulo de Profeta. Isso e' correto?	"},
{"track":	97	,	 "name": "	#1277 Se somos sacerdotes nao podemos beber vinho?	",	 "length": "	06:46	",	 "file": "	https://www.mediafire.com/file/	99zb9a9qu28vef5	/	#1277 Se somos sacerdotes nao podemos beber vinho?	"},
{"track":	98	,	 "name": "	#1278 Romanos 2 ensina salvacao por obras?	",	 "length": "	06:01	",	 "file": "	https://www.mediafire.com/file/	g7xae5serg24we1	/	#1278 Romanos 2 ensina salvacao por obras?	"},
{"track":	99	,	 "name": "	#1279 O que e' pregar o evangelho?	",	 "length": "	07:54	",	 "file": "	https://www.mediafire.com/file/	porrdex5qqm1qbh	/	#1279 O que e' pregar o evangelho?	"},
{"track":	100	,	 "name": "	#1280 Voce participa de debates?	",	 "length": "	00:48	",	 "file": "	https://www.mediafire.com/file/	j9zkh5gc09zrbc6	/	#1280 Voce participa de debates?	"},
{"track":	101	,	 "name": "	#1281 Os salvos no ceu veem o que ocorre na terra?	",	 "length": "	07:56	",	 "file": "	https://www.mediafire.com/file/	09u547a414s9hd4	/	#1281 Os salvos no ceu veem o que ocorre na terra?	"},
{"track":	102	,	 "name": "	#1282 Estarei seguro congregando fora das denominacoes?	",	 "length": "	21:58	",	 "file": "	https://www.mediafire.com/file/	ekar95xuwble9x4	/	#1282 Estarei seguro congregando fora das denominacoes?	"},
{"track":	103	,	 "name": "	#1283 O que teria acontecido se os judeus tivessem recebido Jesus?	",	 "length": "	06:43	",	 "file": "	https://www.mediafire.com/file/	59q9saz453kq7dj	/	#1283 O que teria acontecido se os judeus tivessem recebido Jesus?	"},
{"track":	104	,	 "name": "	#1284 Cristo e' um mero conscientizador de meus erros?	",	 "length": "	07:02	",	 "file": "	https://www.mediafire.com/file/	esd2btkc7t9isqg	/	#1284 Cristo e' um mero conscientizador de meus erros?	"},
{"track":	105	,	 "name": "	#1285 Qual nivel de bondade devo atingir para ser salvo?	",	 "length": "	09:03	",	 "file": "	https://www.mediafire.com/file/	qu3b18x2ejkznzl	/	#1285 Qual nivel de bondade devo atingir para ser salvo?	"},
{"track":	106	,	 "name": "	#1286 O que este bispo diz de Darby procede?	",	 "length": "	09:52	",	 "file": "	https://www.mediafire.com/file/	8212aozycf2ygn3	/	#1286 O que este bispo diz de Darby procede?	"},
{"track":	107	,	 "name": "	#1287 Existem pessoas que vendem a alma ao diabo?	",	 "length": "	08:55	",	 "file": "	https://www.mediafire.com/file/	r68xdd8izwl1ein	/	#1287 Existem pessoas que vendem a alma ao diabo?	"},
{"track":	108	,	 "name": "	#1288 Por que o Salmo 91 parece nao funcionar comigo?	",	 "length": "	14:22	",	 "file": "	https://www.mediafire.com/file/	5zmfk1v2x2r2tbo	/	#1288 Por que o Salmo 91 parece nao funcionar comigo?	"},
{"track":	109	,	 "name": "	#1289 Por que protestantes e catolicos criticam o dispensacionalismo?	",	 "length": "	21:40	",	 "file": "	https://www.mediafire.com/file/	1d013x16uep1a68	/	#1289 Por que protestantes e catolicos criticam o dispensacionalismo?	"},
{"track":	110	,	 "name": "	#1290 Esses irmaos guardam a unidade do corpo?	",	 "length": "	20:23	",	 "file": "	https://www.mediafire.com/file/	j14jul7len5hr1e	/	#1290 Esses irmaos guardam a unidade do corpo?	"},
{"track":	111	,	 "name": "	#1291 Qual a origem do homossexualismo?	",	 "length": "	10:25	",	 "file": "	https://www.mediafire.com/file/	8jme3bfd95m3u6u	/	#1291 Qual a origem do homossexualismo?	"},
{"track":	112	,	 "name": "	#1292 Cristaos devem promover conferencias?	",	 "length": "	09:01	",	 "file": "	https://www.mediafire.com/file/	x24or6yyp8porwt	/	#1292 Cristaos devem promover conferencias?	"},
{"track":	113	,	 "name": "	#1293 O que aconteceu com os corpos de Enoque e Elias?	",	 "length": "	06:41	",	 "file": "	https://www.mediafire.com/file/	yfjoogk81s3dz2h	/	#1293 O que aconteceu com os corpos de Enoque e Elias?	"},
{"track":	114	,	 "name": "	#1294 Por que o livro de Enoque nao faz parte da Biblia?	",	 "length": "	06:34	",	 "file": "	https://www.mediafire.com/file/	89suidwy3cngpiv	/	#1294 Por que o livro de Enoque nao faz parte da Biblia?	"},
{"track":	115	,	 "name": "	#1295 Existe alguma profecia que fale do futuro do Brasil?	",	 "length": "	07:00	",	 "file": "	https://www.mediafire.com/file/	v1ueyf2lafjx429	/	#1295 Existe alguma profecia que fale do futuro do Brasil?	"},
{"track":	116	,	 "name": "	#1296 Sera' que o que voce prega e' a Verdade?	",	 "length": "	18:05	",	 "file": "	https://www.mediafire.com/file/	ag1827i6iwt5idk	/	#1296 Sera' que o que voce prega e' a Verdade?	"},
{"track":	117	,	 "name": "	#1297 Quem era o vulgo que saiu do Egito?	",	 "length": "	06:41	",	 "file": "	https://www.mediafire.com/file/	p8lx4y9n59nnd5y	/	#1297 Quem era o vulgo que saiu do Egito?	"},
{"track":	118	,	 "name": "	#1298 Jesus foi ao inferno tomar a chave das maos do diabo?	",	 "length": "	13:41	",	 "file": "	https://www.mediafire.com/file/	e1m7jnjpogs80wo	/	#1298 Jesus foi ao inferno tomar a chave das maos do diabo?	"},
{"track":	119	,	 "name": "	#1299 No lago de fogo as pessoas serao aniquiladas e deixarao de existir?	",	 "length": "	06:53	",	 "file": "	https://www.mediafire.com/file/	f340zkd644jlaiq	/	#1299 No lago de fogo as pessoas serao aniquiladas e deixarao de existir?	"},
{"track":	120	,	 "name": "	#1300 Somente governantes justos sao ministros de Deus?	",	 "length": "	04:44	",	 "file": "	https://www.mediafire.com/file/	4xy9a1mrbtqxclx	/	#1300 Somente governantes justos sao ministros de Deus?	"},
{"track":	121	,	 "name": "	#1301 Deus nao seria injusto salvando um filho que se desviou?	",	 "length": "	07:25	",	 "file": "	https://www.mediafire.com/file/	zim12cay1p4afaj	/	#1301 Deus nao seria injusto salvando um filho que se desviou?	"},
{"track":	122	,	 "name": "	#1302 As mulheres sao proibidas de julgar?	",	 "length": "	19:06	",	 "file": "	https://www.mediafire.com/file/	tfo8b2oektvr7z0	/	#1302 As mulheres sao proibidas de julgar?	"},
{"track":	123	,	 "name": "	#1303 Estas passagens dizem que Deus aboliu o veu?	",	 "length": "	06:53	",	 "file": "	https://www.mediafire.com/file/	jpxly7hnaw35jgl	/	#1303 Estas passagens dizem que Deus aboliu o veu?	"},
{"track":	124	,	 "name": "	#1304 Você ganha dinheiro pregando o evangelho na Internet?	",	 "length": "	10:01	",	 "file": "	https://www.mediafire.com/file/	tepjrkxt1lprvlp	/	#1304 Você ganha dinheiro pregando o evangelho na Internet?	"},
{"track":	125	,	 "name": "	#1306 A profecia aconteceu, esta' acontecendo ou acontecera'?	",	 "length": "	17:57	",	 "file": "	https://www.mediafire.com/file/	t62dfz8xthapil3	/	#1306 A profecia aconteceu, esta' acontecendo ou acontecera'?	"},
{"track":	126	,	 "name": "	#1307 Nao existe dizimo na doutrina dos apostolos?	",	 "length": "	19:18	",	 "file": "	https://www.mediafire.com/file/	hddpqc0s42txyat	/	#1307 Nao existe dizimo na doutrina dos apostolos?	"},
{"track":	127	,	 "name": "	#1308 Abrao mentiu?	",	 "length": "	11:12	",	 "file": "	https://www.mediafire.com/file/	y9t2kylhzwb17y5	/	#1308 Abrao mentiu?	"},
{"track":	128	,	 "name": "	#1309 Como o cristao deve se posicionar politicamente?	",	 "length": "	15:11	",	 "file": "	https://www.mediafire.com/file/	d666o0dpy3oe0d8	/	#1309 Como o cristao deve se posicionar politicamente?	"},
{"track":	129	,	 "name": "	#1310 Deus fixou em 120 anos a idade maxima do homem?	",	 "length": "	08:12	",	 "file": "	https://www.mediafire.com/file/	sblst5qbxwdnfqs	/	#1310 Deus fixou em 120 anos a idade maxima do homem?	"},
{"track":	130	,	 "name": "	#1311 Se os demonios creem por que nao sao salvos?	",	 "length": "	03:47	",	 "file": "	https://www.mediafire.com/file/	c681mxsrf41b2zh	/	#1311 Se os demonios creem por que nao sao salvos?	"},
{"track":	131	,	 "name": "	#1312 Jesus mandou dar o dízimo?	",	 "length": "	10:29	",	 "file": "	https://www.mediafire.com/file/	c497mhyg0zdzk7w	/	#1312 Jesus mandou dar o dízimo?	"},
{"track":	132	,	 "name": "	#1313 Você conhece minha igreja para poder criticar?	",	 "length": "	08:15	",	 "file": "	https://www.mediafire.com/file/	e2pqc1vr45t570j	/	#1313 Você conhece minha igreja para poder criticar?	"},
{"track":	133	,	 "name": "	#1314 Qual a diferenca entre circuncisao, incircuncisao e concisao?	",	 "length": "	05:08	",	 "file": "	https://www.mediafire.com/file/	2vb1z6sivsuocfz	/	#1314 Qual a diferenca entre circuncisao, incircuncisao e concisao?	"},
{"track":	134	,	 "name": "	#1315 Como agir quando nao existe um mandamento explicito na Biblia?	",	 "length": "	08:05	",	 "file": "	https://www.mediafire.com/file/	zaeuxb5azt5cfe6	/	#1315 Como agir quando nao existe um mandamento explicito na Biblia?	"},
{"track":	135	,	 "name": "	#1316 O costume era de nao ser contencioso ou de cobrir a cabeca?	",	 "length": "	06:42	",	 "file": "	https://www.mediafire.com/file/	dc8jnfs9wpt0hnd	/	#1316 O costume era de nao ser contencioso ou de cobrir a cabeca?	"},
{"track":	136	,	 "name": "	#1317 Com que idade aparente estaremos no ceu?	",	 "length": "	06:38	",	 "file": "	https://www.mediafire.com/file/	w7c0iadcx20f8ve	/	#1317 Com que idade aparente estaremos no ceu?	"},
{"track":	137	,	 "name": "	#1318 Por que o cristao sofre?	",	 "length": "	06:21	",	 "file": "	https://www.mediafire.com/file/	nxg383bb9u282fi	/	#1318 Por que o cristao sofre?	"},
{"track":	138	,	 "name": "	#1319 Como pode o diabo fazer o bem?	",	 "length": "	10:24	",	 "file": "	https://www.mediafire.com/file/	uisetwawqdv1eon	/	#1319 Como pode o diabo fazer o bem?	"},
{"track":	139	,	 "name": "	#1320 O que esse rabino diz no video esta correto?	",	 "length": "	14:42	",	 "file": "	https://www.mediafire.com/file/	f2xki81fksa0b6z	/	#1320 O que esse rabino diz no video esta correto?	"},
{"track":	140	,	 "name": "	#1321 Voce nao respeita todas as religioes?	",	 "length": "	13:46	",	 "file": "	https://www.mediafire.com/file/	cfmz6nuz4flfj78	/	#1321 Voce nao respeita todas as religioes?	"},
{"track":	141	,	 "name": "	#1322 Seria falta de amor bloquear alguem nas redes sociais?	",	 "length": "	18:18	",	 "file": "	https://www.mediafire.com/file/	2dsx6b1tite4xde	/	#1322 Seria falta de amor bloquear alguem nas redes sociais?	"},
{"track":	142	,	 "name": "	#1323 O que significa Eclesiastes 7:10?	",	 "length": "	05:20	",	 "file": "	https://www.mediafire.com/file/	s8t5bunalzbm2zf	/	#1323 O que significa Eclesiastes 7:10?	"},
{"track":	143	,	 "name": "	#1324 Quem voce pensa que e' para me julgar?	",	 "length": "	07:50	",	 "file": "	https://www.mediafire.com/file/	12548aa8911zws9	/	#1324 Quem voce pensa que e' para me julgar?	"},
{"track":	144	,	 "name": "	#1325 Atos 14:23 autoriza a eleicao de presbiteros?	",	 "length": "	07:56	",	 "file": "	https://www.mediafire.com/file/	rxedlpvumm3emfu	/	#1325 Atos 14:23 autoriza a eleicao de presbiteros?	"},
{"track":	145	,	 "name": "	#1326 Por que nao me deixaram participar do pao e do vinho?	",	 "length": "	06:59	",	 "file": "	https://www.mediafire.com/file/	5ecv5god6tfa3ry	/	#1326 Por que nao me deixaram participar do pao e do vinho?	"},
{"track":	146	,	 "name": "	#1327 O que significam o cadaver e a aguia de Mateus 24?	",	 "length": "	05:21	",	 "file": "	https://www.mediafire.com/file/	23nt4w9s8s2xx8n	/	#1327 O que significam o cadaver e a aguia de Mateus 24?	"},
{"track":	147	,	 "name": "	#1328 O que voce acha do que diz este professor?	",	 "length": "	10:22	",	 "file": "	https://www.mediafire.com/file/	r9savrbw7qrbmh8	/	#1328 O que voce acha do que diz este professor?	"},
{"track":	148	,	 "name": "	#1329 Mario, qual e' o seu dom?	",	 "length": "	07:25	",	 "file": "	https://www.mediafire.com/file/	iv5j4n96huyz47z	/	#1329 Mario, qual e' o seu dom?	"},
{"track":	149	,	 "name": "	#1330 Estes sao os cristaos salvos que estao no ceu?	",	 "length": "	08:03	",	 "file": "	https://www.mediafire.com/file/	6o5ncetpw1224a2	/	#1330 Estes sao os cristaos salvos que estao no ceu?	"},
{"track":	150	,	 "name": "	#1331 Por que o ceu e' chamado de Paraiso se este ficava na terra?	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	biteojxb1fxv616	/	#1331 Por que o ceu e' chamado de Paraiso se este ficava na terra?	"},
{"track":	151	,	 "name": "	#1332 No ceu nao havera' mais nascimentos?	",	 "length": "	05:03	",	 "file": "	https://www.mediafire.com/file/	3fmqzh9tqbourb9	/	#1332 No ceu nao havera' mais nascimentos?	"},
{"track":	152	,	 "name": "	#1333 Satanas esta' no ceu ou na terra?	",	 "length": "	06:02	",	 "file": "	https://www.mediafire.com/file/	4t4vdcevo9doc1a	/	#1333 Satanas esta' no ceu ou na terra?	"},
{"track":	153	,	 "name": "	#1334 Existe uma contradicao no fato de Deus se arrepender?	",	 "length": "	02:37	",	 "file": "	https://www.mediafire.com/file/	w63glraih8lskws	/	#1334 Existe uma contradicao no fato de Deus se arrepender?	"},
{"track":	154	,	 "name": "	#1335 Devo destruir trabalhos de macumba?	",	 "length": "	08:14	",	 "file": "	https://www.mediafire.com/file/	mxwaga3394q2ece	/	#1335 Devo destruir trabalhos de macumba?	"},
{"track":	155	,	 "name": "	#1336 Como fazer uma campanha ou proposito para com Deus?	",	 "length": "	14:49	",	 "file": "	https://www.mediafire.com/file/	759yyatyjnwz7c8	/	#1336 Como fazer uma campanha ou proposito para com Deus?	"},
{"track":	156	,	 "name": "	#1337 O que voce acha de comediantes nas igrejas?	",	 "length": "	13:35	",	 "file": "	https://www.mediafire.com/file/	6506dnwvi07aotw	/	#1337 O que voce acha de comediantes nas igrejas?	"},
{"track":	157	,	 "name": "	#1338 O que acha da Baleia Azul?	",	 "length": "	09:25	",	 "file": "	https://www.mediafire.com/file/	tr2or0vjpe6tpb6	/	#1338 O que acha da Baleia Azul?	"},
{"track":	158	,	 "name": "	#1339 Devo preparar minha familia para a perseguicao?	",	 "length": "	22:08	",	 "file": "	https://www.mediafire.com/file/	2twqxboxxeuoxwy	/	#1339 Devo preparar minha familia para a perseguicao?	"},
{"track":	159	,	 "name": "	#1340 E' pecado pedir prosperidade a Deus?	",	 "length": "	07:06	",	 "file": "	https://www.mediafire.com/file/	blf177m2k8yp6xi	/	#1340 E' pecado pedir prosperidade a Deus?	"},
{"track":	160	,	 "name": "	#1341 As reunioes devem ser publicas ou reservadas?	",	 "length": "	08:57	",	 "file": "	https://www.mediafire.com/file/	k4542pyy0yiv3vk	/	#1341 As reunioes devem ser publicas ou reservadas?	"},
{"track":	161	,	 "name": "	#1342 Nao posso me agarrar 'a promessa deste versiculo?	",	 "length": "	05:47	",	 "file": "	https://www.mediafire.com/file/	ohx244fib2s4q54	/	#1342 Nao posso me agarrar 'a promessa deste versiculo?	"},
{"track":	162	,	 "name": "	#1343 Qual versao da Biblia voce usa em suas mensagens?	",	 "length": "	08:37	",	 "file": "	https://www.mediafire.com/file/	8w68smppiz9yh8g	/	#1343 Qual versao da Biblia voce usa em suas mensagens?	"},
{"track":	163	,	 "name": "	#1344 Nao devo pregar mudanca de vida ao incredulo?	",	 "length": "	04:01	",	 "file": "	https://www.mediafire.com/file/	alu9aecyhzx6ohk	/	#1344 Nao devo pregar mudanca de vida ao incredulo?	"},
{"track":	164	,	 "name": "	#1345 O evangelho pode ser pregado de qualquer maneira?	",	 "length": "	05:46	",	 "file": "	https://www.mediafire.com/file/	1dxzhne82sx31l5	/	#1345 O evangelho pode ser pregado de qualquer maneira?	"},
{"track":	165	,	 "name": "	#1346 Se Satanas sabia quem era Jesus para que tenta-lo no deserto?	",	 "length": "	04:14	",	 "file": "	https://www.mediafire.com/file/	1nnqktdozh23pcc	/	#1346 Se Satanas sabia quem era Jesus para que tenta-lo no deserto?	"},
{"track":	166	,	 "name": "	#1347 Voce e' de direita?	",	 "length": "	21:24	",	 "file": "	https://www.mediafire.com/file/	cjjuls2g9eaqsd5	/	#1347 Voce e' de direita?	"},
{"track":	167	,	 "name": "	#1348 Existe um arrebatamento parcial?	",	 "length": "	11:02	",	 "file": "	https://www.mediafire.com/file/	vzleazhttut5wbn	/	#1348 Existe um arrebatamento parcial?	"},
{"track":	168	,	 "name": "	#1349 Voce faz aconselhamento matrimonial?	",	 "length": "	06:41	",	 "file": "	https://www.mediafire.com/file/	4z6a3bd788z0dff	/	#1349 Voce faz aconselhamento matrimonial?	"},
{"track":	169	,	 "name": "	#1350 Por que estas Biblias nao concordam entre si?	",	 "length": "	06:38	",	 "file": "	https://www.mediafire.com/file/	qk3adc9ciqf0cjx	/	#1350 Por que estas Biblias nao concordam entre si?	"},
{"track":	170	,	 "name": "	#1351 Mateus 12:40 diz que Jesus teria ido ao inferno?	",	 "length": "	07:48	",	 "file": "	https://www.mediafire.com/file/	e3tcwbixnralcb3	/	#1351 Mateus 12:40 diz que Jesus teria ido ao inferno?	"},
{"track":	171	,	 "name": "	#1352 Como um crente no Antigo Testamento podia viver sem o Espirito Santo?	",	 "length": "	10:00	",	 "file": "	https://www.mediafire.com/file/	0m5hbzeymdcomsu	/	#1352 Como um crente no Antigo Testamento podia viver sem o Espirito Santo?	"},
{"track":	172	,	 "name": "	#1353 Que vantagem existe em congregar ao nome do Senhor?	",	 "length": "	07:56	",	 "file": "	https://www.mediafire.com/file/	bbo9pe9o44aznpe	/	#1353 Que vantagem existe em congregar ao nome do Senhor?	"},
{"track":	173	,	 "name": "	#1354 Por que meu filho adolescente virou ateu?	",	 "length": "	15:14	",	 "file": "	https://www.mediafire.com/file/	94kt4u4xlt5w02t	/	#1354 Por que meu filho adolescente virou ateu?	"},
{"track":	174	,	 "name": "	#1355 Por que irmaos mais velhos desprezam minha juventude?	",	 "length": "	13:32	",	 "file": "	https://www.mediafire.com/file/	y5xpbixhw6xb7se	/	#1355 Por que irmaos mais velhos desprezam minha juventude?	"},
{"track":	175	,	 "name": "	#1356 O que fazer quando descubro que agi errado?	",	 "length": "	06:09	",	 "file": "	https://www.mediafire.com/file/	o4oqnpsoq4lau4w	/	#1356 O que fazer quando descubro que agi errado?	"},
{"track":	176	,	 "name": "	#1357 O 'homem' com o qual Jaco lutou era Deus ou um anjo?	",	 "length": "	11:24	",	 "file": "	https://www.mediafire.com/file/	1taaf7fyqvhyi0d	/	#1357 O 'homem' com o qual Jaco lutou era Deus ou um anjo?	"},
{"track":	177	,	 "name": "	#1358 Um esquizofrenico esta' possesso por demonios?	",	 "length": "	04:16	",	 "file": "	https://www.mediafire.com/file/	37vipixyi51tlt7	/	#1358 Um esquizofrenico esta' possesso por demonios?	"},
{"track":	178	,	 "name": "	#1359 Paulo excluia mulheres das reunioes?	",	 "length": "	11:20	",	 "file": "	https://www.mediafire.com/file/	c5ae7ppag4eqr4j	/	#1359 Paulo excluia mulheres das reunioes?	"},
{"track":	179	,	 "name": "	#1360 Meu filho que tem paralisia cerebral pode ser batizado?	",	 "length": "	06:15	",	 "file": "	https://www.mediafire.com/file/	573wzi2rly9i4ar	/	#1360 Meu filho que tem paralisia cerebral pode ser batizado?	"},
{"track":	180	,	 "name": "	#1361 Os judeus hoje adoram em verdade?	",	 "length": "	06:08	",	 "file": "	https://www.mediafire.com/file/	v345l0j77rt5u9f	/	#1361 Os judeus hoje adoram em verdade?	"},
{"track":	181	,	 "name": "	#1362 Quem foi Diotrefes?	",	 "length": "	04:44	",	 "file": "	https://www.mediafire.com/file/	2ni4w2vai2jjjzu	/	#1362 Quem foi Diotrefes?	"},
{"track":	182	,	 "name": "	#1363 Bruxaria, macumba e feiticaria funcionam?	",	 "length": "	03:06	",	 "file": "	https://www.mediafire.com/file/	x5kl4oyvp62nf1d	/	#1363 Bruxaria, macumba e feiticaria funcionam?	"},
{"track":	183	,	 "name": "	#1364 O que voce acha do transplante de cabeca?	",	 "length": "	08:33	",	 "file": "	https://www.mediafire.com/file/	lgnwp4ahymyud6v	/	#1364 O que voce acha do transplante de cabeca?	"},
{"track":	184	,	 "name": "	#1365 Padre pode cantar em igreja de pastor?	",	 "length": "	09:58	",	 "file": "	https://www.mediafire.com/file/	cbof487t1vexswr	/	#1365 Padre pode cantar em igreja de pastor?	"},
{"track":	185	,	 "name": "	#1366 Como pregar o modo como congregamos?	",	 "length": "	07:32	",	 "file": "	https://www.mediafire.com/file/	dj5iv4atj8eiauk	/	#1366 Como pregar o modo como congregamos?	"},
{"track":	186	,	 "name": "	#1367 Meus filhos nasceram deficientes porque me desviei da igreja?	",	 "length": "	06:15	",	 "file": "	https://www.mediafire.com/file/	b6s7bb779i2dg52	/	#1367 Meus filhos nasceram deficientes porque me desviei da igreja?	"},
{"track":	187	,	 "name": "	#1368 Voce considera sua comunicacao e linguajar apropriados?	",	 "length": "	02:59	",	 "file": "	https://www.mediafire.com/file/	m1o229oxvj6sm7n	/	#1368 Voce considera sua comunicacao e linguajar apropriados?	"},
{"track":	188	,	 "name": "	#1369 O que significa orar no Espirito Santo?	",	 "length": "	14:22	",	 "file": "	https://www.mediafire.com/file/	491vdyy4lo07u5t	/	#1369 O que significa orar no Espirito Santo?	"},
{"track":	189	,	 "name": "	#1370 Darby era maçom?	",	 "length": "	22:59	",	 "file": "	https://www.mediafire.com/file/	jtv3a0irny382u6	/	#1370 Darby era maçom?	"},
{"track":	190	,	 "name": "	#1371 O que era a igreja de Filadelfia?	",	 "length": "	14:03	",	 "file": "	https://www.mediafire.com/file/	d4lzi5p8tb9q50a	/	#1371 O que era a igreja de Filadelfia?	"},
{"track":	191	,	 "name": "	#1372 O cego de Joao 9 nasceu assim por vontade de Deus?	",	 "length": "	07:05	",	 "file": "	https://www.mediafire.com/file/	dyd9dqp9jd19tds	/	#1372 O cego de Joao 9 nasceu assim por vontade de Deus?	"},
{"track":	192	,	 "name": "	#1373 Foi no batismo que Jesus recebeu nossos pecados?	",	 "length": "	04:47	",	 "file": "	https://www.mediafire.com/file/	vd8qbal6x9ibw08	/	#1373 Foi no batismo que Jesus recebeu nossos pecados?	"},
{"track":	193	,	 "name": "	#1374 Se o cristianismo cresce no Brasil, por que a violencia e corrupcao nao diminuem?	",	 "length": "	07:38	",	 "file": "	https://www.mediafire.com/file/	kbul7vi078f6dfq	/	#1374 Se o cristianismo cresce no Brasil, por que a violencia e corrupcao nao diminuem?	"},
{"track":	194	,	 "name": "	#1375 Como deixamos de ser assim se somos capazes de fazer estas coisas?	",	 "length": "	05:31	",	 "file": "	https://www.mediafire.com/file/	cdg2mdrs0pmg13g	/	#1375 Como deixamos de ser assim se somos capazes de fazer estas coisas?	"},
{"track":	195	,	 "name": "	#1376 O que acha de muculmanos convertidos depois de sonharem com Jesus?	",	 "length": "	06:39	",	 "file": "	https://www.mediafire.com/file/	5we7ck97yjnsaf8	/	#1376 O que acha de muculmanos convertidos depois de sonharem com Jesus?	"},
{"track":	196	,	 "name": "	#1377 Se nao devemos chamar ninguem de Mestre, como voce diz que existe dom de mestre?	",	 "length": "	05:58	",	 "file": "	https://www.mediafire.com/file/	4qf589w96wyiyik	/	#1377 Se nao devemos chamar ninguem de Mestre, como voce diz que existe dom de mestre?	"},
{"track":	197	,	 "name": "	#1378 As denominacoes cristas foram criadas por Satanas?	",	 "length": "	03:30	",	 "file": "	https://www.mediafire.com/file/	q6qc7tuio63clic	/	#1378 As denominacoes cristas foram criadas por Satanas?	"},
{"track":	198	,	 "name": "	#1379 Paulo estava falando das denominacoes?	",	 "length": "	07:16	",	 "file": "	https://www.mediafire.com/file/	9siinmwifsotd7t	/	#1379 Paulo estava falando das denominacoes?	"},
{"track":	199	,	 "name": "	#1380 Como Jesus pode ser a mesma Pessoa?	",	 "length": "	04:01	",	 "file": "	https://www.mediafire.com/file/	0y0fee1vd9k7th2	/	#1380 Como Jesus pode ser a mesma Pessoa?	"},
{"track":	200	,	 "name": "	#1381 O peso do ouro trazido a Salomao tem algo a ver com o anticristo?	",	 "length": "	05:21	",	 "file": "	https://www.mediafire.com/file/	tz942s3o72d1in7	/	#1381 O peso do ouro trazido a Salomao tem algo a ver com o anticristo?	"},
{"track":	201	,	 "name": "	#1382 Minha filhinha tem pesadelos com monstros. Pode ser influencia demoniaca?	",	 "length": "	04:16	",	 "file": "	https://www.mediafire.com/file/	2z1zs8ehdcz0ah3	/	#1382 Minha filhinha tem pesadelos com monstros. Pode ser influencia demoniaca?	"},
{"track":	202	,	 "name": "	#1383 Jesus mandou Joao cuidar de Maria ou Maria cuidar de Joao?	",	 "length": "	04:57	",	 "file": "	https://www.mediafire.com/file/	hbhjc4515q9ic1w	/	#1383 Jesus mandou Joao cuidar de Maria ou Maria cuidar de Joao?	"},
{"track":	203	,	 "name": "	#1384 Jesus irou-se pelo comercio no Templo ou porque os sacerdotes vendiam mais caro?	",	 "length": "	03:50	",	 "file": "	https://www.mediafire.com/file/	8q7f6s9666y6qqm	/	#1384 Jesus irou-se pelo comercio no Templo ou porque os sacerdotes vendiam mais caro?	"},
{"track":	204	,	 "name": "	#1385 Precisamos começar as reunioes invocando o Senhor?	",	 "length": "	08:49	",	 "file": "	https://www.mediafire.com/file/	i229odcwv61s8f4	/	#1385 Precisamos começar as reunioes invocando o Senhor?	"},
{"track":	205	,	 "name": "	#1386 Por que Deus exigia o sacrificio de animais?	",	 "length": "	13:44	",	 "file": "	https://www.mediafire.com/file/	ngae9py8x51lg5k	/	#1386 Por que Deus exigia o sacrificio de animais?	"},
{"track":	206	,	 "name": "	#1387 Todos pastores sao corruptos?	",	 "length": "	20:13	",	 "file": "	https://www.mediafire.com/file/	r34e98db0u3cab9	/	#1387 Todos pastores sao corruptos?	"},
{"track":	207	,	 "name": "	#1388 Os perdidos também ressuscitarao em corpos?	",	 "length": "	09:40	",	 "file": "	https://www.mediafire.com/file/	96wc21h391m1w5a	/	#1388 Os perdidos também ressuscitarao em corpos?	"},
{"track":	208	,	 "name": "	#1389 A Biblia diz que ciencia se multiplicaria no final?	",	 "length": "	12:56	",	 "file": "	https://www.mediafire.com/file/	cmeddcy7kuoqdhc	/	#1389 A Biblia diz que ciencia se multiplicaria no final?	"},
{"track":	209	,	 "name": "	#1390 Devo orar por minha amiga?	",	 "length": "	11:47	",	 "file": "	https://www.mediafire.com/file/	m4cuy4dwyb7a6nw	/	#1390 Devo orar por minha amiga?	"},
{"track":	210	,	 "name": "	#1391 Devo protestar contra a Parada Gay?	",	 "length": "	11:55	",	 "file": "	https://www.mediafire.com/file/	u3p8se5uq786mn3	/	#1391 Devo protestar contra a Parada Gay?	"},
{"track":	211	,	 "name": "	#1392 Como alguem pode acreditar numa Trindade?	",	 "length": "	16:11	",	 "file": "	https://www.mediafire.com/file/	3hxq3v037qo7oq9	/	#1392 Como alguem pode acreditar numa Trindade?	"},
{"track":	212	,	 "name": "	#1393 O que sao doutrinas de demonios?	",	 "length": "	16:40	",	 "file": "	https://www.mediafire.com/file/	k8g30x3g36qi0sv	/	#1393 O que sao doutrinas de demonios?	"},
{"track":	213	,	 "name": "	#1394 O Deus de Davi era o diabo?	",	 "length": "	06:00	",	 "file": "	https://www.mediafire.com/file/	sd249808d5knmat	/	#1394 O Deus de Davi era o diabo?	"},
{"track":	214	,	 "name": "	#1395 Por que os judeus usam uma fita no braço e uma caixinha na testa?	",	 "length": "	04:28	",	 "file": "	https://www.mediafire.com/file/	5bx6l11bxuta126	/	#1395 Por que os judeus usam uma fita no braço e uma caixinha na testa?	"},
{"track":	215	,	 "name": "	#1396 Voce acha correto evangelizar em frente a bares, baladas, etc.?	",	 "length": "	08:26	",	 "file": "	https://www.mediafire.com/file/	oiy3cay3r4fkjec	/	#1396 Voce acha correto evangelizar em frente a bares, baladas, etc.?	"},
{"track":	216	,	 "name": "	#1397 Como saber que a Bíblia não foi alterada?	",	 "length": "	13:24	",	 "file": "	https://www.mediafire.com/file/	3pysw4nw7xc4b0s	/	#1397 Como saber que a Bíblia não foi alterada?	"},
{"track":	217	,	 "name": "	#1398 Minha salvacao nao foi completa?	",	 "length": "	10:48	",	 "file": "	https://www.mediafire.com/file/	3ic6cxi6ity6514	/	#1398 Minha salvacao nao foi completa?	"},
{"track":	218	,	 "name": "	#1399 Os refugiados islamicos irao invadir o Brasil?	",	 "length": "	01:59	",	 "file": "	https://www.mediafire.com/file/	8g09hszyi6a2sf9	/	#1399 Os refugiados islamicos irao invadir o Brasil?	"},
{"track":	219	,	 "name": "	#1400 Você concorda com quem diz que Jesus foi um homem comum?	",	 "length": "	12:44	",	 "file": "	https://www.mediafire.com/file/	y62bjd1mo0puwxz	/	#1400 Você concorda com quem diz que Jesus foi um homem comum?	"},
{"track":	220	,	 "name": "	#1401 Por que aquela casta de demonios nao podia sair sem jejum e oracao?	",	 "length": "	11:56	",	 "file": "	https://www.mediafire.com/file/	tgbsikuiaa51h11	/	#1401 Por que aquela casta de demonios nao podia sair sem jejum e oracao?	"},
{"track":	221	,	 "name": "	#1402 Todos no tempo de Noe' tiveram chance de ouvir?	",	 "length": "	22:02	",	 "file": "	https://www.mediafire.com/file/	y65shr3l0pjggu4	/	#1402 Todos no tempo de Noe' tiveram chance de ouvir?	"},
{"track":	222	,	 "name": "	#1403 Deus e' Pai apenas de cristaos?	",	 "length": "	11:51	",	 "file": "	https://www.mediafire.com/file/	ad7nd835qbscb31	/	#1403 Deus e' Pai apenas de cristaos?	"},
{"track":	223	,	 "name": "	#1404 O batismo unicista esta' correto?	",	 "length": "	10:21	",	 "file": "	https://www.mediafire.com/file/	t7vivlm4yz13rb6	/	#1404 O batismo unicista esta' correto?	"},
{"track":	224	,	 "name": "	#1405 Quando o carcereiro creu toda a sua familia foi salva?	",	 "length": "	11:55	",	 "file": "	https://www.mediafire.com/file/	10q2xqxvhh5cxax	/	#1405 Quando o carcereiro creu toda a sua familia foi salva?	"},
{"track":	225	,	 "name": "	#1406 O templo que Salomao edificou era para deuses pagaos?	",	 "length": "	14:18	",	 "file": "	https://www.mediafire.com/file/	jwobm65ktpnznaj	/	#1406 O templo que Salomao edificou era para deuses pagaos?	"},
{"track":	226	,	 "name": "	#1407 Nao devo comemorar meu aniversario?	",	 "length": "	07:14	",	 "file": "	https://www.mediafire.com/file/	oxb7542emuyorle	/	#1407 Nao devo comemorar meu aniversario?	"},
{"track":	227	,	 "name": "	#1408 Teria existido um dilúvio antes de Adao?	",	 "length": "	06:40	",	 "file": "	https://www.mediafire.com/file/	te6vto9sgvrw2df	/	#1408 Teria existido um dilúvio antes de Adao?	"},
{"track":	228	,	 "name": "	#1409 Como argumentar com quem despreza o dispensacionalismo?	",	 "length": "	07:48	",	 "file": "	https://www.mediafire.com/file/	aa1x1dzwwmbgzd4	/	#1409 Como argumentar com quem despreza o dispensacionalismo?	"},
{"track":	229	,	 "name": "	#1410 Qual foi o pecado dos filhos de Jó?	",	 "length": "	05:42	",	 "file": "	https://www.mediafire.com/file/	4d1j5855nqwxj1t	/	#1410 Qual foi o pecado dos filhos de Jó?	"},
{"track":	230	,	 "name": "	#1411 Havia poligamia no inicio da igreja?	",	 "length": "	06:05	",	 "file": "	https://www.mediafire.com/file/	xy21z1klqlysbo4	/	#1411 Havia poligamia no inicio da igreja?	"},
{"track":	231	,	 "name": "	#1412 Por que não consigo compartilhar nada com os irmaos?	",	 "length": "	19:38	",	 "file": "	https://www.mediafire.com/file/	d1329ujfiziacbi	/	#1412 Por que não consigo compartilhar nada com os irmaos?	"},
{"track":	232	,	 "name": "	#1413 Coré, Datã e Abirão foram lançados vivos no inferno?	",	 "length": "	02:30	",	 "file": "	https://www.mediafire.com/file/	2daujk03tcfty5b	/	#1413 Coré, Datã e Abirão foram lançados vivos no inferno?	"},
{"track":	233	,	 "name": "	#1414 Esta passagem de Apocalipse 22 diz que podemos perder a salvacao?	",	 "length": "	11:55	",	 "file": "	https://www.mediafire.com/file/	xk3j1s55o59j3tg	/	#1414 Esta passagem de Apocalipse 22 diz que podemos perder a salvacao?	"},
{"track":	234	,	 "name": "	#1415 Voce estava pregando no pulpito de um templo?	",	 "length": "	15:23	",	 "file": "	https://www.mediafire.com/file/	8c9cwk5r5ec0viv	/	#1415 Voce estava pregando no pulpito de um templo?	"},
{"track":	235	,	 "name": "	#1416 Por que voce nao respondeu minha duvida?	",	 "length": "	15:45	",	 "file": "	https://www.mediafire.com/file/	83ddwb10xfg48wp	/	#1416 Por que voce nao respondeu minha duvida?	"},
{"track":	236	,	 "name": "	#1417 Por que voce chama a Teoria da Evolucao de bobagem?	",	 "length": "	10:47	",	 "file": "	https://www.mediafire.com/file/	s6jvhhdrwep2rq4	/	#1417 Por que voce chama a Teoria da Evolucao de bobagem?	"},
{"track":	237	,	 "name": "	#1418 Se Deus amou o mundo por que nao devemos amar o mundo?	",	 "length": "	06:33	",	 "file": "	https://www.mediafire.com/file/	cwggw875kk9ke88	/	#1418 Se Deus amou o mundo por que nao devemos amar o mundo?	"},
{"track":	238	,	 "name": "	#1419 Midia impressa ou eletronica? Qual a melhor?	",	 "length": "	04:52	",	 "file": "	https://www.mediafire.com/file/	c8vdzddv0qsbjj0	/	#1419 Midia impressa ou eletronica? Qual a melhor?	"},
{"track":	239	,	 "name": "	#1420 A separacao de joio e trigo so' sera' quando Cristo voltar?	",	 "length": "	13:51	",	 "file": "	https://www.mediafire.com/file/	xd7xs0o73zkc3pb	/	#1420 A separacao de joio e trigo so' sera' quando Cristo voltar?	"},
{"track":	240	,	 "name": "	#1421 Por que Deus criou a maconha sabendo que ela poderia ser usada como droga?	",	 "length": "	06:05	",	 "file": "	https://www.mediafire.com/file/	d8bmsc4rgjn3z41	/	#1421 Por que Deus criou a maconha sabendo que ela poderia ser usada como droga?	"},
{"track":	241	,	 "name": "	#1422 Cristao nao pode usar barba?	",	 "length": "	11:23	",	 "file": "	https://www.mediafire.com/file/	jb3kswpcmpxhsz2	/	#1422 Cristao nao pode usar barba?	"},
{"track":	242	,	 "name": "	#1423 Deus perdoaria meu suicidio?	",	 "length": "	09:37	",	 "file": "	https://www.mediafire.com/file/	blv7spu83jp4qma	/	#1423 Deus perdoaria meu suicidio?	"},
{"track":	243	,	 "name": "	#1424 Os diferentes ministerios em 1 Corintios 12 sao denominacoes?	",	 "length": "	11:23	",	 "file": "	https://www.mediafire.com/file/	0564pcz0decb7w8	/	#1424 Os diferentes ministerios em 1 Corintios 12 sao denominacoes?	"},
{"track":	244	,	 "name": "	#1425 Devo evitar anestesia contra a dor de parto?	",	 "length": "	14:19	",	 "file": "	https://www.mediafire.com/file/	rdy85s5xu5g9h1w	/	#1425 Devo evitar anestesia contra a dor de parto?	"},
{"track":	245	,	 "name": "	#1426 Podemos ver anjos?	",	 "length": "	04:11	",	 "file": "	https://www.mediafire.com/file/	2g2iq5a4p7y9a15	/	#1426 Podemos ver anjos?	"},
{"track":	246	,	 "name": "	#1427 Como aconselhar uma amiga que traiu o marido?	",	 "length": "	15:07	",	 "file": "	https://www.mediafire.com/file/	bb7jspiqq188zab	/	#1427 Como aconselhar uma amiga que traiu o marido?	"},
{"track":	247	,	 "name": "	#1428 Devo contar ao meu marido?	",	 "length": "	14:42	",	 "file": "	https://www.mediafire.com/file/	gl5f8c9h7lxw6ng	/	#1428 Devo contar ao meu marido?	"},
{"track":	248	,	 "name": "	#1429 Por que Paulo nao curou Timoteo?	",	 "length": "	05:14	",	 "file": "	https://www.mediafire.com/file/	o36u1u0agyt519f	/	#1429 Por que Paulo nao curou Timoteo?	"},
{"track":	249	,	 "name": "	#1430 Devo permanecer na igreja em que Deus me tocou?	",	 "length": "	09:53	",	 "file": "	https://www.mediafire.com/file/	9e1hu90fl1axp9y	/	#1430 Devo permanecer na igreja em que Deus me tocou?	"},
{"track":	250	,	 "name": "	#1431 Qual deve ser minha prioridade: Deus, família ou igreja?	",	 "length": "	09:14	",	 "file": "	https://www.mediafire.com/file/	341dyd3kouk3449	/	#1431 Qual deve ser minha prioridade: Deus, família ou igreja?	"},
{"track":	251	,	 "name": "	#1432 Por que fui proibido de cear?	",	 "length": "	11:16	",	 "file": "	https://www.mediafire.com/file/	9y9bmn219ba1g7g	/	#1432 Por que fui proibido de cear?	"},
{"track":	252	,	 "name": "	#1433 Voce aceita o batismo por aspersao?	",	 "length": "	21:53	",	 "file": "	https://www.mediafire.com/file/	xke3orrihgy0zi0	/	#1433 Voce aceita o batismo por aspersao?	"},
{"track":	253	,	 "name": "	#1434 Por que nao tenho o direito de reagir com armas?	",	 "length": "	13:59	",	 "file": "	https://www.mediafire.com/file/	rvg41tv8u29vmy7	/	#1434 Por que nao tenho o direito de reagir com armas?	"},
{"track":	254	,	 "name": "	#1435 Adao e Eva foram salvos?	",	 "length": "	07:49	",	 "file": "	https://www.mediafire.com/file/	arq9sw8npl22e1f	/	#1435 Adao e Eva foram salvos?	"},
{"track":	255	,	 "name": "	#1436 A Bíblia diz como lidar com a transexualidade?	",	 "length": "	14:46	",	 "file": "	https://www.mediafire.com/file/	86az5k0aml14su6	/	#1436 A Bíblia diz como lidar com a transexualidade?	"},
{"track":	256	,	 "name": "	#1437 Por que Noe' amaldicoou seu filho?	",	 "length": "	03:38	",	 "file": "	https://www.mediafire.com/file/	z1pzhlldiqjkxk2	/	#1437 Por que Noe' amaldicoou seu filho?	"},
{"track":	257	,	 "name": "	#1438 Deus pode mudar de ideia?	",	 "length": "	23:03	",	 "file": "	https://www.mediafire.com/file/	klk860y76wexz7i	/	#1438 Deus pode mudar de ideia?	"},
{"track":	258	,	 "name": "	1 Co 14 incentiva as linguas para a edificacao propria?	",	 "length": "	04:38	",	 "file": "	https://www.mediafire.com/file/	1ai5w99r8hjh6fe	/	1 Co 14 incentiva as linguas para a edificacao propria?	"},
{"track":	259	,	 "name": "	15 passagens que dizem que podemos perder a salvacao?	",	 "length": "	07:07	",	 "file": "	https://www.mediafire.com/file/	xukik0s565gj5gv	/	15 passagens que dizem que podemos perder a salvacao?	"},
{"track":	260	,	 "name": "	A 'grande comissao' de Mt 28:18-20 vale para hoje?	",	 "length": "	08:26	",	 "file": "	https://www.mediafire.com/file/	ruczi3iizzcsimc	/	A 'grande comissao' de Mt 28:18-20 vale para hoje?	"},
{"track":	261	,	 "name": "	A arca de Noe' seria uma figura do arrebatamento?	",	 "length": "	08:38	",	 "file": "	https://www.mediafire.com/file/	u4cn3jtqaf2x326	/	A arca de Noe' seria uma figura do arrebatamento?	"},
{"track":	262	,	 "name": "	A arvore de natal me deixa vulneravel aos demonios?	",	 "length": "	16:52	",	 "file": "	https://www.mediafire.com/file/	9zizm2148op7xu4	/	A arvore de natal me deixa vulneravel aos demonios?	"},
{"track":	263	,	 "name": "	A assembleia se reune para ler livros?	",	 "length": "	17:43	",	 "file": "	https://www.mediafire.com/file/	u184fmr33f6952d	/	A assembleia se reune para ler livros?	"},
{"track":	264	,	 "name": "	A besta e o anticristo sao pessoas diferentes?	",	 "length": "	05:47	",	 "file": "	https://www.mediafire.com/file/	z0iftbd9rez49zf	/	A besta e o anticristo sao pessoas diferentes?	"},
{"track":	265	,	 "name": "	A Biblia e' ou contem a Palavra de Deus?	",	 "length": "	10:53	",	 "file": "	https://www.mediafire.com/file/	apvyhb3db8ou8fm	/	A Biblia e' ou contem a Palavra de Deus?	"},
{"track":	266	,	 "name": "	A Biblia errou na semente de mostarda?	",	 "length": "	05:34	",	 "file": "	https://www.mediafire.com/file/	qv8en5715hiu3c4	/	A Biblia errou na semente de mostarda?	"},
{"track":	267	,	 "name": "	A Bíblia fala de dirigentes de uma igreja?	",	 "length": "	03:50	",	 "file": "	https://www.mediafire.com/file/	ai0d35s0hracloi	/	A Bíblia fala de dirigentes de uma igreja?	"},
{"track":	268	,	 "name": "	A Biblia incentiva a venda da filha como escrava?	",	 "length": "	12:07	",	 "file": "	https://www.mediafire.com/file/	zx8lzq0s4q5q9du	/	A Biblia incentiva a venda da filha como escrava?	"},
{"track":	269	,	 "name": "	A Biblia nao e' toda inspirada?	",	 "length": "	06:03	",	 "file": "	https://www.mediafire.com/file/	8w157jv6x9n5uts	/	A Biblia nao e' toda inspirada?	"},
{"track":	270	,	 "name": "	A Biblia so fala de inferno?	",	 "length": "	05:25	",	 "file": "	https://www.mediafire.com/file/	oo83oqdg3vat5om	/	A Biblia so fala de inferno?	"},
{"track":	271	,	 "name": "	A Biblia tem detalhes insignificantes?	",	 "length": "	05:03	",	 "file": "	https://www.mediafire.com/file/	5c5a5ldcrv9cfoa	/	A Biblia tem detalhes insignificantes?	"},
{"track":	272	,	 "name": "	A comissao aos apostolos nao era para a igreja?	",	 "length": "	06:25	",	 "file": "	https://www.mediafire.com/file/	ajpwmm252wk2q4r	/	A comissao aos apostolos nao era para a igreja?	"},
{"track":	273	,	 "name": "	A eleicao ou predestinacao e' para a igreja ou individuos?	",	 "length": "	06:08	",	 "file": "	https://www.mediafire.com/file/	80dpcdzoc2c0gjc	/	A eleicao ou predestinacao e' para a igreja ou individuos?	"},
{"track":	274	,	 "name": "	A familia do carcereiro foi salva sem crer?	",	 "length": "	07:17	",	 "file": "	https://www.mediafire.com/file/	0tf18b5b35w1q2k	/	A familia do carcereiro foi salva sem crer?	"},
{"track":	275	,	 "name": "	A filha de Jairo estava morta ou moribunda?	",	 "length": "	04:03	",	 "file": "	https://www.mediafire.com/file/	c1y746lys0z434s	/	A filha de Jairo estava morta ou moribunda?	"},
{"track":	276	,	 "name": "	A guarda do sabado e' o sinal que identifica os salvos?	",	 "length": "	06:45	",	 "file": "	https://www.mediafire.com/file/	xc0b1awbcd005d3	/	A guarda do sabado e' o sinal que identifica os salvos?	"},
{"track":	277	,	 "name": "	A humanidade de Jesus nao foi real?	",	 "length": "	18:31	",	 "file": "	https://www.mediafire.com/file/	1a61u8b4761wxc1	/	A humanidade de Jesus nao foi real?	"},
{"track":	278	,	 "name": "	A ideia do arrebatamento e' demoniaca em sua origem?	",	 "length": "	05:37	",	 "file": "	https://www.mediafire.com/file/	rhr743lxsvcxruc	/	A ideia do arrebatamento e' demoniaca em sua origem?	"},
{"track":	279	,	 "name": "	A igreja deve celebrar o casamento de gays?	",	 "length": "	19:21	",	 "file": "	https://www.mediafire.com/file/	9w6bgw8bk3bcmx2	/	A igreja deve celebrar o casamento de gays?	"},
{"track":	280	,	 "name": "	A igreja e' mais hospital que tribunal?	",	 "length": "	08:20	",	 "file": "	https://www.mediafire.com/file/	iiql3n3j8ue3db3	/	A igreja e' mais hospital que tribunal?	"},
{"track":	281	,	 "name": "	A igreja envia missionarios?	",	 "length": "	08:32	",	 "file": "	https://www.mediafire.com/file/	gp72gapxkmplwao	/	A igreja envia missionarios?	"},
{"track":	282	,	 "name": "	A Igreja foi construida sobre Pedro?	",	 "length": "	07:07	",	 "file": "	https://www.mediafire.com/file/	vee95p4d498mdkq	/	A Igreja foi construida sobre Pedro?	"},
{"track":	283	,	 "name": "	A igreja nao evangeliza?	",	 "length": "	00:21	",	 "file": "	https://www.mediafire.com/file/	xuja2dyal8umzq0	/	A igreja nao evangeliza?	"},
{"track":	284	,	 "name": "	A igreja primitiva usava instrumentos na adoracao?	",	 "length": "	12:09	",	 "file": "	https://www.mediafire.com/file/	47ucrqu1177yc1r	/	A igreja primitiva usava instrumentos na adoracao?	"},
{"track":	285	,	 "name": "	A lei vigorou ate' Joao?	",	 "length": "	05:24	",	 "file": "	https://www.mediafire.com/file/	o4wi9eiuxtgwo2n	/	A lei vigorou ate' Joao?	"},
{"track":	286	,	 "name": "	A mulher de Apocalipse 12 e' Maria?	",	 "length": "	05:27	",	 "file": "	https://www.mediafire.com/file/	69h8hxed7i84opb	/	A mulher de Apocalipse 12 e' Maria?	"},
{"track":	287	,	 "name": "	A mulher deve evitar o veu para nao escandalizar?	",	 "length": "	15:39	",	 "file": "	https://www.mediafire.com/file/	t17zp2fduof84b4	/	A mulher deve evitar o veu para nao escandalizar?	"},
{"track":	288	,	 "name": "	A mulher pode trabalhar fora?	",	 "length": "	06:32	",	 "file": "	https://www.mediafire.com/file/	66mbnr11girmi4b	/	A mulher pode trabalhar fora?	"},
{"track":	289	,	 "name": "	A oracao de Tiago 5 serve para qualquer enfermidade?	",	 "length": "	14:53	",	 "file": "	https://www.mediafire.com/file/	wb8v6gu7bc53nzr	/	A oracao de Tiago 5 serve para qualquer enfermidade?	"},
{"track":	290	,	 "name": "	A palavra ‘Escrituras’ no Novo Testamento refere-se ao Antigo Testamento?	",	 "length": "	07:53	",	 "file": "	https://www.mediafire.com/file/	k54n32f4gwcal8m	/	A palavra ‘Escrituras’ no Novo Testamento refere-se ao Antigo Testamento?	"},
{"track":	291	,	 "name": "	A palavra 'povo' no AT serve para todos?	",	 "length": "	12:09	",	 "file": "	https://www.mediafire.com/file/	pqkffe7kibv47yf	/	A palavra 'povo' no AT serve para todos?	"},
{"track":	292	,	 "name": "	A pena de morte em Israel era por apedrejamento ou crucificacao?	",	 "length": "	06:50	",	 "file": "	https://www.mediafire.com/file/	6463u5nw99d0jbv	/	A pena de morte em Israel era por apedrejamento ou crucificacao?	"},
{"track":	293	,	 "name": "	A perda de meu filho foi maldicao?	",	 "length": "	06:28	",	 "file": "	https://www.mediafire.com/file/	suw8fxjq2lhoq1s	/	A perda de meu filho foi maldicao?	"},
{"track":	294	,	 "name": "	A profecia de Joel 2 se cumpriu em Atos 2?	",	 "length": "	04:11	",	 "file": "	https://www.mediafire.com/file/	3wqedtci28v1y1n	/	A profecia de Joel 2 se cumpriu em Atos 2?	"},
{"track":	295	,	 "name": "	A profecia se cumpriu com a volta dos judeus em 1948?	",	 "length": "	06:55	",	 "file": "	https://www.mediafire.com/file/	5gunh59942vbn2m	/	A profecia se cumpriu com a volta dos judeus em 1948?	"},
{"track":	296	,	 "name": "	A que autoridade devemos obedecer na igreja?	",	 "length": "	16:22	",	 "file": "	https://www.mediafire.com/file/	7dt8a1o50k18j7t	/	A que autoridade devemos obedecer na igreja?	"},
{"track":	297	,	 "name": "	A que pastor devo obedecer?	",	 "length": "	08:12	",	 "file": "	https://www.mediafire.com/file/	o9wn7407zp1d30n	/	A que pastor devo obedecer?	"},
{"track":	298	,	 "name": "	A relacao biblica homem-mulher esta fora de moda?	",	 "length": "	05:34	",	 "file": "	https://www.mediafire.com/file/	8danfdfbk4a96z4	/	A relacao biblica homem-mulher esta fora de moda?	"},
{"track":	299	,	 "name": "	A revelacao de Deus esta completa?	",	 "length": "	11:11	",	 "file": "	https://www.mediafire.com/file/	2q0vtb5sqy3lw4q	/	A revelacao de Deus esta completa?	"},
{"track":	300	,	 "name": "	A salvacao e' condicional?	",	 "length": "	09:43	",	 "file": "	https://www.mediafire.com/file/	6tdetjt4exr9ue4	/	A salvacao e' condicional?	"},
{"track":	301	,	 "name": "	A seguranca da salvacao depende de mim?	",	 "length": "	11:01	",	 "file": "	https://www.mediafire.com/file/	xkqz48fxbho967k	/	A seguranca da salvacao depende de mim?	"},
{"track":	302	,	 "name": "	A sombra de Pedro curava?	",	 "length": "	02:33	",	 "file": "	https://www.mediafire.com/file/	ju5cqao14s54s2n	/	A sombra de Pedro curava?	"},
{"track":	303	,	 "name": "	A terra foi criada antes das estrelas?	",	 "length": "	04:12	",	 "file": "	https://www.mediafire.com/file/	2xd0kzg53te4762	/	A terra foi criada antes das estrelas?	"},
{"track":	304	,	 "name": "	A unica biblia correta e' a King James?	",	 "length": "	11:06	",	 "file": "	https://www.mediafire.com/file/	tukca4dy1k3gta4	/	A unica biblia correta e' a King James?	"},
{"track":	305	,	 "name": "	Acaso sou eu guardador de meu irmao?	",	 "length": "	05:53	",	 "file": "	https://www.mediafire.com/file/	8k87wpuxx0pvu5j	/	Acaso sou eu guardador de meu irmao?	"},
{"track":	306	,	 "name": "	Adao e Eva tiveram filhos enquanto estavam no Eden?	",	 "length": "	05:13	",	 "file": "	https://www.mediafire.com/file/	9622nhvq8047dh4	/	Adao e Eva tiveram filhos enquanto estavam no Eden?	"},
{"track":	307	,	 "name": "	Adulterei e estou gravida. O que fazer?	",	 "length": "	09:48	",	 "file": "	https://www.mediafire.com/file/	bapqjyar560eq3l	/	Adulterei e estou gravida. O que fazer?	"},
{"track":	308	,	 "name": "	Ainda existe perseguicao contra cristaos?	",	 "length": "	10:08	",	 "file": "	https://www.mediafire.com/file/	ekg8cwg1vf7c00t	/	Ainda existe perseguicao contra cristaos?	"},
{"track":	309	,	 "name": "	Ainda existem anjos que assumem a forma humana?	",	 "length": "	13:59	",	 "file": "	https://www.mediafire.com/file/	61znwwdw1c898ls	/	Ainda existem anjos que assumem a forma humana?	"},
{"track":	310	,	 "name": "	Alguem liberto pode ser possuido por outros espiritos?	",	 "length": "	06:14	",	 "file": "	https://www.mediafire.com/file/	hffptayla525heq	/	Alguem liberto pode ser possuido por outros espiritos?	"},
{"track":	311	,	 "name": "	Alianca de noivado ou casamento e' pecado?	",	 "length": "	10:10	",	 "file": "	https://www.mediafire.com/file/	21oqva5ltyc4sf2	/	Alianca de noivado ou casamento e' pecado?	"},
{"track":	312	,	 "name": "	Anjos tem asas?	",	 "length": "	05:06	",	 "file": "	https://www.mediafire.com/file/	dilq97e4980iw59	/	Anjos tem asas?	"},
{"track":	313	,	 "name": "	Antes da queda os animais falavam?	",	 "length": "	07:04	",	 "file": "	https://www.mediafire.com/file/	886kvc52efr1fk1	/	Antes da queda os animais falavam?	"},
{"track":	314	,	 "name": "	Antes de Cristo as pessoas eram salvas pela fe'?	",	 "length": "	07:02	",	 "file": "	https://www.mediafire.com/file/	w4er19rtrxxjz3u	/	Antes de Cristo as pessoas eram salvas pela fe'?	"},
{"track":	315	,	 "name": "	Antes de eu crer Deus ja' cuidava de minhas necessidades?	",	 "length": "	04:20	",	 "file": "	https://www.mediafire.com/file/	vwpxqm2dceus0jp	/	Antes de eu crer Deus ja' cuidava de minhas necessidades?	"},
{"track":	316	,	 "name": "	Apocalipse 22:18-19 serve para toda a Biblia?	",	 "length": "	07:33	",	 "file": "	https://www.mediafire.com/file/	eqvek8q8fm627th	/	Apocalipse 22:18-19 serve para toda a Biblia?	"},
{"track":	317	,	 "name": "	Arrebatamento: Verdade ou mito?	",	 "length": "	00:42	",	 "file": "	https://www.mediafire.com/file/	xeve8sxaf41e6yy	/	Arrebatamento: Verdade ou mito?	"},
{"track":	318	,	 "name": "	As 'filhas dos homens' eram descendentes de Caim?	",	 "length": "	16:04	",	 "file": "	https://www.mediafire.com/file/	omc8oqc3f379klz	/	As 'filhas dos homens' eram descendentes de Caim?	"},
{"track":	319	,	 "name": "	As Biblias deveriam ser gratis?	",	 "length": "	13:11	",	 "file": "	https://www.mediafire.com/file/	4sp8cjvkjvf8833	/	As Biblias deveriam ser gratis?	"},
{"track":	320	,	 "name": "	As cartas dos apostolos sao para nos?	",	 "length": "	14:32	",	 "file": "	https://www.mediafire.com/file/	725u62j1whubee3	/	As cartas dos apostolos sao para nos?	"},
{"track":	321	,	 "name": "	As manifestacoes espirituais nas igrejas sao reais?	",	 "length": "	23:47	",	 "file": "	https://www.mediafire.com/file/	vcauvufja1gr0l8	/	As manifestacoes espirituais nas igrejas sao reais?	"},
{"track":	322	,	 "name": "	As mulheres devem lavar os pes dos irmaos?	",	 "length": "	04:45	",	 "file": "	https://www.mediafire.com/file/	mvntaq8gn268lrt	/	As mulheres devem lavar os pes dos irmaos?	"},
{"track":	323	,	 "name": "	As mulheres nao podem cantar?	",	 "length": "	07:51	",	 "file": "	https://www.mediafire.com/file/	zuoqrj5s61zoe9r	/	As mulheres nao podem cantar?	"},
{"track":	324	,	 "name": "	As mulheres tambem tem dons?	",	 "length": "	14:20	",	 "file": "	https://www.mediafire.com/file/	8lp1p37mdeoqmg3	/	As mulheres tambem tem dons?	"},
{"track":	325	,	 "name": "	As organizacoes religiosas nao vem de Deus?	",	 "length": "	19:13	",	 "file": "	https://www.mediafire.com/file/	s06y2nactquga36	/	As organizacoes religiosas nao vem de Deus?	"},
{"track":	326	,	 "name": "	As pessoas irao morrer no ceu?	",	 "length": "	11:47	",	 "file": "	https://www.mediafire.com/file/	vqyo1pc21obpitk	/	As pessoas irao morrer no ceu?	"},
{"track":	327	,	 "name": "	As profecias estao se cumprindo?	",	 "length": "	02:28	",	 "file": "	https://www.mediafire.com/file/	6acfj2w8isidbdg	/	As profecias estao se cumprindo?	"},
{"track":	328	,	 "name": "	As profecias ja se cumpriram?	",	 "length": "	10:50	",	 "file": "	https://www.mediafire.com/file/	4lnzmc44y61vx5b	/	As profecias ja se cumpriram?	"},
{"track":	329	,	 "name": "	As promessas feitas a Israel agora são para a Igreja?	",	 "length": "	06:14	",	 "file": "	https://www.mediafire.com/file/	4dqd3p5dmv6scw5	/	As promessas feitas a Israel agora são para a Igreja?	"},
{"track":	330	,	 "name": "	As virgens de Mt 25 representam a igreja?	",	 "length": "	04:04	",	 "file": "	https://www.mediafire.com/file/	z63irlsyouir2ok	/	As virgens de Mt 25 representam a igreja?	"},
{"track":	331	,	 "name": "	Barnabe' era apostolo?	",	 "length": "	04:16	",	 "file": "	https://www.mediafire.com/file/	my1edni4s4itapm	/	Barnabe' era apostolo?	"},
{"track":	332	,	 "name": "	Basta crer em Jesus para ser salvo?	",	 "length": "	12:24	",	 "file": "	https://www.mediafire.com/file/	dv0nvdn2vllj793	/	Basta crer em Jesus para ser salvo?	"},
{"track":	333	,	 "name": "	Beber bebida alcoolica e' pecado?	",	 "length": "	08:54	",	 "file": "	https://www.mediafire.com/file/	4amc3ec3ax297v2	/	Beber bebida alcoolica e' pecado?	"},
{"track":	334	,	 "name": "	Cachorros nao vao para o ceu?	",	 "length": "	05:58	",	 "file": "	https://www.mediafire.com/file/	7k4ih14xd6uze0d	/	Cachorros nao vao para o ceu?	"},
{"track":	335	,	 "name": "	Cair da graca, desviar e naufragar na fe' me fazem perder a salvacao?	",	 "length": "	11:47	",	 "file": "	https://www.mediafire.com/file/	91wetpddvcwlfjd	/	Cair da graca, desviar e naufragar na fe' me fazem perder a salvacao?	"},
{"track":	336	,	 "name": "	Casados devem cortar o relacionamento com os pais?	",	 "length": "	03:29	",	 "file": "	https://www.mediafire.com/file/	8cucegqifvrb1zc	/	Casados devem cortar o relacionamento com os pais?	"},
{"track":	337	,	 "name": "	Colar na prova e' pecado?	",	 "length": "	04:10	",	 "file": "	https://www.mediafire.com/file/	ccpiack82s8i1t9	/	Colar na prova e' pecado?	"},
{"track":	338	,	 "name": "	Com que frequencia voces se reunem?	",	 "length": "	11:45	",	 "file": "	https://www.mediafire.com/file/	dxt6fnus6ynw90i	/	Com que frequencia voces se reunem?	"},
{"track":	339	,	 "name": "	Com que o crente deve se ocupar?	",	 "length": "	12:23	",	 "file": "	https://www.mediafire.com/file/	7uqqo80mm39mhk9	/	Com que o crente deve se ocupar?	"},
{"track":	340	,	 "name": "	Como a minha justica pode exceder a dos fariseus?	",	 "length": "	08:15	",	 "file": "	https://www.mediafire.com/file/	315e9xdhgebpvx4	/	Como a minha justica pode exceder a dos fariseus?	"},
{"track":	341	,	 "name": "	Como congregar ao nome do Senhor?	",	 "length": "	08:34	",	 "file": "	https://www.mediafire.com/file/	6u6f4f7cbsxii2u	/	Como congregar ao nome do Senhor?	"},
{"track":	342	,	 "name": "	Como congregar estando sozinho?	",	 "length": "	04:48	",	 "file": "	https://www.mediafire.com/file/	sybgcndjdcyuilx	/	Como congregar estando sozinho?	"},
{"track":	343	,	 "name": "	Como convencer catolicos do pecado da idolatria?	",	 "length": "	15:59	",	 "file": "	https://www.mediafire.com/file/	vkuate6fn79gz9i	/	Como convencer catolicos do pecado da idolatria?	"},
{"track":	344	,	 "name": "	Como descobrir em que carreira atuar?	",	 "length": "	04:41	",	 "file": "	https://www.mediafire.com/file/	gkathcm6s8ye975	/	Como descobrir em que carreira atuar?	"},
{"track":	345	,	 "name": "	Como desenvolver o fruto do Espirito?	",	 "length": "	09:33	",	 "file": "	https://www.mediafire.com/file/	7pe0h5hb0c2m6m8	/	Como desenvolver o fruto do Espirito?	"},
{"track":	346	,	 "name": "	Como Deus nos enxerga?	",	 "length": "	04:08	",	 "file": "	https://www.mediafire.com/file/	mtxfav4rc58tgvk	/	Como Deus nos enxerga?	"},
{"track":	347	,	 "name": "	Como Deus pode perdoar alguém como eu?	",	 "length": "	07:22	",	 "file": "	https://www.mediafire.com/file/	3qdy64mefel32bb	/	Como Deus pode perdoar alguém como eu?	"},
{"track":	348	,	 "name": "	Como devem ser os que ministram?	",	 "length": "	09:48	",	 "file": "	https://www.mediafire.com/file/	1q9mpq95c21vfcq	/	Como devem ser os que ministram?	"},
{"track":	349	,	 "name": "	Como devemos nos congregar? PARTE 1	",	 "length": "	07:02	",	 "file": "	https://www.mediafire.com/file/	eax6h6qz1tegm25	/	Como devemos nos congregar? PARTE 1	"},
{"track":	350	,	 "name": "	Como devemos nos congregar? PARTE 2	",	 "length": "	05:56	",	 "file": "	https://www.mediafire.com/file/	d14hsqdbpqbbb36	/	Como devemos nos congregar? PARTE 2	"},
{"track":	351	,	 "name": "	Como devemos nos congregar? PARTE 3	",	 "length": "	06:06	",	 "file": "	https://www.mediafire.com/file/	duqrilqqqv4xq99	/	Como devemos nos congregar? PARTE 3	"},
{"track":	352	,	 "name": "	Como devemos nos congregar? PARTE 4	",	 "length": "	10:51	",	 "file": "	https://www.mediafire.com/file/	yz4owu55zob4zv1	/	Como devemos nos congregar? PARTE 4	"},
{"track":	353	,	 "name": "	Como devemos nos congregar? PARTE 5	",	 "length": "	07:32	",	 "file": "	https://www.mediafire.com/file/	nyfuu4f9az6k9u8	/	Como devemos nos congregar? PARTE 5	"},
{"track":	354	,	 "name": "	Como devemos nos congregar? PARTE 6	",	 "length": "	04:26	",	 "file": "	https://www.mediafire.com/file/	n1kwsbh2la6c7wi	/	Como devemos nos congregar? PARTE 6	"},
{"track":	355	,	 "name": "	Como devemos nos congregar? PARTE 7	",	 "length": "	02:32	",	 "file": "	https://www.mediafire.com/file/	2wc01g6kqx9d2z8	/	Como devemos nos congregar? PARTE 7	"},
{"track":	356	,	 "name": "	Como educar meus filhos?	",	 "length": "	05:12	",	 "file": "	https://www.mediafire.com/file/	4uxdl9s79s49c6y	/	Como educar meus filhos?	"},
{"track":	357	,	 "name": "	Como entender o dispensacionalismo?	",	 "length": "	04:26	",	 "file": "	https://www.mediafire.com/file/	dm6hc7tdjz6tjt6	/	Como entender o dispensacionalismo?	"},
{"track":	358	,	 "name": "	Como era o rosto de Jesus?	",	 "length": "	07:29	",	 "file": "	https://www.mediafire.com/file/	0c2tlikob2jldl0	/	Como era o rosto de Jesus?	"},
{"track":	359	,	 "name": "	Como evangelizar meus filhos?	",	 "length": "	15:00	",	 "file": "	https://www.mediafire.com/file/	dm54bl5n43819nz	/	Como evangelizar meus filhos?	"},
{"track":	360	,	 "name": "	Como evangelizar um adepto da Nova Era?	",	 "length": "	10:06	",	 "file": "	https://www.mediafire.com/file/	cel2d454y89ds78	/	Como evangelizar um adepto da Nova Era?	"},
{"track":	361	,	 "name": "	Como evitar sonhos homossexuais?	",	 "length": "	11:09	",	 "file": "	https://www.mediafire.com/file/	zdpv4ayi6n1oqv1	/	Como evitar sonhos homossexuais?	"},
{"track":	362	,	 "name": "	Como identificar a voz do diabo?	",	 "length": "	15:17	",	 "file": "	https://www.mediafire.com/file/	sdgmwo5wom345n1	/	Como identificar a voz do diabo?	"},
{"track":	363	,	 "name": "	Como iniciar uma conversa?	",	 "length": "	21:26	",	 "file": "	https://www.mediafire.com/file/	id6q16pjdj6h4a6	/	Como iniciar uma conversa?	"},
{"track":	364	,	 "name": "	Como interpretar o Apocalipse?	",	 "length": "	06:31	",	 "file": "	https://www.mediafire.com/file/	qjlfcnug1mihhi5	/	Como interpretar o Apocalipse?	"},
{"track":	365	,	 "name": "	Como lidar com a degradacao da sociedade?	",	 "length": "	09:38	",	 "file": "	https://www.mediafire.com/file/	xpz5lv5p4qfu5fu	/	Como lidar com a degradacao da sociedade?	"},
{"track":	366	,	 "name": "	Como lidar com a pornografia?	",	 "length": "	17:16	",	 "file": "	https://www.mediafire.com/file/	e2b9wd5ndqgdb53	/	Como lidar com a pornografia?	"},
{"track":	367	,	 "name": "	Como lidar com as dificuldades da vida?	",	 "length": "	10:32	",	 "file": "	https://www.mediafire.com/file/	whsow33b1c1ig20	/	Como lidar com as dificuldades da vida?	"},
{"track":	368	,	 "name": "	Como lidar com as festas?	",	 "length": "	11:55	",	 "file": "	https://www.mediafire.com/file/	23njybpmiph8x2z	/	Como lidar com as festas?	"},
{"track":	369	,	 "name": "	Como lidar com contradicoes na Biblia?	",	 "length": "	04:51	",	 "file": "	https://www.mediafire.com/file/	28mwfauno6v196o	/	Como lidar com contradicoes na Biblia?	"},
{"track":	370	,	 "name": "	Como lidar com o medo da morte?	",	 "length": "	02:42	",	 "file": "	https://www.mediafire.com/file/	261d5dfdu50uy95	/	Como lidar com o medo da morte?	"},
{"track":	371	,	 "name": "	Como lidar com os que discordam?	",	 "length": "	10:11	",	 "file": "	https://www.mediafire.com/file/	rmmr3oekohm6y8n	/	Como lidar com os que discordam?	"},
{"track":	372	,	 "name": "	Como lidar com visitantes?	",	 "length": "	15:09	",	 "file": "	https://www.mediafire.com/file/	z3u6oqwo3d4od8y	/	Como lidar com visitantes?	"},
{"track":	373	,	 "name": "	Como me sustentar se deixar o cargo de pastor?	",	 "length": "	05:24	",	 "file": "	https://www.mediafire.com/file/	wmsmg23b2avdfct	/	Como me sustentar se deixar o cargo de pastor?	"},
{"track":	374	,	 "name": "	Como os Salmos se aplicam ao cristao?	",	 "length": "	05:39	",	 "file": "	https://www.mediafire.com/file/	9vu092vn9le1836	/	Como os Salmos se aplicam ao cristao?	"},
{"track":	375	,	 "name": "	Como perdoar quem nao aceita meu perdao?	",	 "length": "	06:40	",	 "file": "	https://www.mediafire.com/file/	80rk47ay80rndly	/	Como perdoar quem nao aceita meu perdao?	"},
{"track":	376	,	 "name": "	Como permanecer na fe' com teorias assim?	",	 "length": "	14:48	",	 "file": "	https://www.mediafire.com/file/	furqe2l8qazwc47	/	Como permanecer na fe' com teorias assim?	"},
{"track":	377	,	 "name": "	Como pode Deus se arrepender?	",	 "length": "	04:35	",	 "file": "	https://www.mediafire.com/file/	0b22owu8dpcgnfs	/	Como pode Deus se arrepender?	"},
{"track":	378	,	 "name": "	Como pode haver joio no Reino dos Ceus se existem condicoes para se entrar nele?	",	 "length": "	06:43	",	 "file": "	https://www.mediafire.com/file/	xvpf7ap9y373kgl	/	Como pode haver joio no Reino dos Ceus se existem condicoes para se entrar nele?	"},
{"track":	379	,	 "name": "	Como pode Jesus ter sido Jeova?	",	 "length": "	15:33	",	 "file": "	https://www.mediafire.com/file/	n7gk7byckxlkd2x	/	Como pode Jesus ter sido Jeova?	"},
{"track":	380	,	 "name": "	Como pode o Espirito Santo habitar no ser humano?	",	 "length": "	09:56	",	 "file": "	https://www.mediafire.com/file/	2xqyq9t9ffdt9k2	/	Como pode o Espirito Santo habitar no ser humano?	"},
{"track":	381	,	 "name": "	Como posso ser util?	",	 "length": "	09:19	",	 "file": "	https://www.mediafire.com/file/	12g4q9jdmvpn59e	/	Como posso ser util?	"},
{"track":	382	,	 "name": "	Como proceder para me congregar somente em nome de Jesus?	",	 "length": "	18:27	",	 "file": "	https://www.mediafire.com/file/	efms5cmn2rkzcgc	/	Como proceder para me congregar somente em nome de Jesus?	"},
{"track":	383	,	 "name": "	Como pronunciar os nomes sagrados?	",	 "length": "	18:52	",	 "file": "	https://www.mediafire.com/file/	y36hxzpdtncxzx4	/	Como pronunciar os nomes sagrados?	"},
{"track":	384	,	 "name": "	Como provar que Matusalem viveu tanto?	",	 "length": "	04:35	",	 "file": "	https://www.mediafire.com/file/	lclpx0da7xinq71	/	Como provar que Matusalem viveu tanto?	"},
{"track":	385	,	 "name": "	Como saber a vontade de Deus?	",	 "length": "	05:41	",	 "file": "	https://www.mediafire.com/file/	hszjyxvkqbc4hkd	/	Como saber a vontade de Deus?	"},
{"track":	386	,	 "name": "	Como saber se vem do Espirito Santo?	",	 "length": "	12:08	",	 "file": "	https://www.mediafire.com/file/	1pjcecb5lqe3o4h	/	Como saber se vem do Espirito Santo?	"},
{"track":	387	,	 "name": "	Como Satanas conseguiu impedir Paulo?	",	 "length": "	14:27	",	 "file": "	https://www.mediafire.com/file/	5sxd193l6vyyh65	/	Como Satanas conseguiu impedir Paulo?	"},
{"track":	388	,	 "name": "	Como ser batizado com fogo?	",	 "length": "	04:17	",	 "file": "	https://www.mediafire.com/file/	nrcbg68io2hr4tn	/	Como ser batizado com fogo?	"},
{"track":	389	,	 "name": "	Como surgiram as diferentes racas?	",	 "length": "	05:40	",	 "file": "	https://www.mediafire.com/file/	o05mfmfkskt68so	/	Como surgiram as diferentes racas?	"},
{"track":	390	,	 "name": "	Como surgiu o diabo?	",	 "length": "	09:21	",	 "file": "	https://www.mediafire.com/file/	fxss9l68kh5gq55	/	Como surgiu o diabo?	"},
{"track":	391	,	 "name": "	Como um catolico pode ser salvo se Deus condena a idolatria?	",	 "length": "	00:24	",	 "file": "	https://www.mediafire.com/file/	6523rj2bh98cfhi	/	Como um catolico pode ser salvo se Deus condena a idolatria?	"},
{"track":	392	,	 "name": "	Como você conduz as reunioes?	",	 "length": "	09:35	",	 "file": "	https://www.mediafire.com/file/	q26amw186xx22cc	/	Como você conduz as reunioes?	"},
{"track":	393	,	 "name": "	Crentes e incredulos serao igualmente julgados?	",	 "length": "	03:34	",	 "file": "	https://www.mediafire.com/file/	levxusf2x216w5r	/	Crentes e incredulos serao igualmente julgados?	"},
{"track":	394	,	 "name": "	Criancas tem anjo da guarda?	",	 "length": "	06:36	",	 "file": "	https://www.mediafire.com/file/	f5yby02dciac470	/	Criancas tem anjo da guarda?	"},
{"track":	395	,	 "name": "	Cristaos devem ser patriotas?	",	 "length": "	11:05	",	 "file": "	https://www.mediafire.com/file/	hpi807gbpoz49z3	/	Cristaos devem ser patriotas?	"},
{"track":	396	,	 "name": "	Cristaos podem construir altares?	",	 "length": "	15:39	",	 "file": "	https://www.mediafire.com/file/	k1cx5d2cpiaon2o	/	Cristaos podem construir altares?	"},
{"track":	397	,	 "name": "	Cristaos podem fazer inseminacao artificial?	",	 "length": "	05:44	",	 "file": "	https://www.mediafire.com/file/	v8lavaeohcp8cn0	/	Cristaos podem fazer inseminacao artificial?	"},
{"track":	398	,	 "name": "	Cristo devolvera' o reino ao Pai?	",	 "length": "	08:22	",	 "file": "	https://www.mediafire.com/file/	hg94zvt3tv10k5c	/	Cristo devolvera' o reino ao Pai?	"},
{"track":	399	,	 "name": "	Cristo e' Deus?	",	 "length": "	18:50	",	 "file": "	https://www.mediafire.com/file/	dk0m1kalzrqd9jk	/	Cristo e' Deus?	"},
{"track":	400	,	 "name": "	Cristo foi nosso substituto ou representante?	",	 "length": "	15:32	",	 "file": "	https://www.mediafire.com/file/	a8rdyh810loiw0v	/	Cristo foi nosso substituto ou representante?	"},
{"track":	401	,	 "name": "	De onde vim, o que sou, para onde vou?	",	 "length": "	06:09	",	 "file": "	https://www.mediafire.com/file/	u2d9xqbrldlx9f8	/	De onde vim, o que sou, para onde vou?	"},
{"track":	402	,	 "name": "	De que espirito esta falando em 1 Co 14:32?	",	 "length": "	10:26	",	 "file": "	https://www.mediafire.com/file/	ntpf56riaa1dyya	/	De que espirito esta falando em 1 Co 14:32?	"},
{"track":	403	,	 "name": "	De que geracao Mateus 24:34 esta falando?	",	 "length": "	08:30	",	 "file": "	https://www.mediafire.com/file/	tiq3tzlksvmzyq4	/	De que geracao Mateus 24:34 esta falando?	"},
{"track":	404	,	 "name": "	De que mal devemos nos apartar?	",	 "length": "	09:35	",	 "file": "	https://www.mediafire.com/file/	f3a0yv2aguw3f4a	/	De que mal devemos nos apartar?	"},
{"track":	405	,	 "name": "	De quem e' a voz que diz 'Eis o Noivo'?	",	 "length": "	08:45	",	 "file": "	https://www.mediafire.com/file/	p0pzuucywxd8a1b	/	De quem e' a voz que diz 'Eis o Noivo'?	"},
{"track":	406	,	 "name": "	Demonios nao sao mais anjos?	",	 "length": "	10:00	",	 "file": "	https://www.mediafire.com/file/	eir35ahb93g3x49	/	Demonios nao sao mais anjos?	"},
{"track":	407	,	 "name": "	Depois do arrebatamento nao havera segunda chance?	",	 "length": "	07:18	",	 "file": "	https://www.mediafire.com/file/	pajymbmtzhpc24a	/	Depois do arrebatamento nao havera segunda chance?	"},
{"track":	408	,	 "name": "	Deus aboliu a diferenca homem-mulher?	",	 "length": "	10:32	",	 "file": "	https://www.mediafire.com/file/	ypb475tm1ob53q8	/	Deus aboliu a diferenca homem-mulher?	"},
{"track":	409	,	 "name": "	Deus ainda fala conosco hoje?	",	 "length": "	16:25	",	 "file": "	https://www.mediafire.com/file/	c4po4mooarzw33v	/	Deus ainda fala conosco hoje?	"},
{"track":	410	,	 "name": "	Deus ama apenas os eleitos e predestinados?	",	 "length": "	08:38	",	 "file": "	https://www.mediafire.com/file/	3cnc2wwtg5wwpww	/	Deus ama apenas os eleitos e predestinados?	"},
{"track":	411	,	 "name": "	Deus aprova a escravidao?	",	 "length": "	08:44	",	 "file": "	https://www.mediafire.com/file/	6tdirp922ds45n0	/	Deus aprova a escravidao?	"},
{"track":	412	,	 "name": "	Deus castiga?	",	 "length": "	04:34	",	 "file": "	https://www.mediafire.com/file/	muk6ps9houho58u	/	Deus castiga?	"},
{"track":	413	,	 "name": "	Deus controla o clima?	",	 "length": "	18:51	",	 "file": "	https://www.mediafire.com/file/	xe54zqmg5cm34ba	/	Deus controla o clima?	"},
{"track":	414	,	 "name": "	Deus discrimina negros e deficientes?	",	 "length": "	11:17	",	 "file": "	https://www.mediafire.com/file/	bfp1brtc7f389uv	/	Deus discrimina negros e deficientes?	"},
{"track":	415	,	 "name": "	Deus existe?	",	 "length": "	03:04	",	 "file": "	https://www.mediafire.com/file/	hhbmw2cre55vwgl	/	Deus existe?	"},
{"track":	416	,	 "name": "	Deus matou o homem que abandonou a denominacao?	",	 "length": "	08:24	",	 "file": "	https://www.mediafire.com/file/	myzxo1gw3gtvwfe	/	Deus matou o homem que abandonou a denominacao?	"},
{"track":	417	,	 "name": "	Deus mudou de opiniao sobre o casamento?	",	 "length": "	08:45	",	 "file": "	https://www.mediafire.com/file/	bccxxrvplnc0rig	/	Deus mudou de opiniao sobre o casamento?	"},
{"track":	418	,	 "name": "	Deus nao ama pecadores?	",	 "length": "	09:09	",	 "file": "	https://www.mediafire.com/file/	c6bqudx3a78dbhu	/	Deus nao ama pecadores?	"},
{"track":	419	,	 "name": "	Deus precisa descansar?	",	 "length": "	09:34	",	 "file": "	https://www.mediafire.com/file/	tco8hcum3p4cwjk	/	Deus precisa descansar?	"},
{"track":	420	,	 "name": "	Devemos aceitar a Palavra de Deus sem questionar?	",	 "length": "	04:52	",	 "file": "	https://www.mediafire.com/file/	1bfd0ez07czue9b	/	Devemos aceitar a Palavra de Deus sem questionar?	"},
{"track":	421	,	 "name": "	Devemos buscar membros para uma reuniao?	",	 "length": "	03:47	",	 "file": "	https://www.mediafire.com/file/	dcu9924wkqz15ci	/	Devemos buscar membros para uma reuniao?	"},
{"track":	422	,	 "name": "	Devemos buscar o batismo com o Espirito Santo?	",	 "length": "	09:35	",	 "file": "	https://www.mediafire.com/file/	12yejanmcz5gua6	/	Devemos buscar o batismo com o Espirito Santo?	"},
{"track":	423	,	 "name": "	Devemos elogiar as pessoas?	",	 "length": "	07:36	",	 "file": "	https://www.mediafire.com/file/	uc9bx4msxta0zgf	/	Devemos elogiar as pessoas?	"},
{"track":	424	,	 "name": "	Devemos escolher o 'caminho do meio'?	",	 "length": "	07:48	",	 "file": "	https://www.mediafire.com/file/	agk561hygmacgdl	/	Devemos escolher o 'caminho do meio'?	"},
{"track":	425	,	 "name": "	Devemos humilhar quem pecou?	",	 "length": "	13:45	",	 "file": "	https://www.mediafire.com/file/	kufkqk0potmlxow	/	Devemos humilhar quem pecou?	"},
{"track":	426	,	 "name": "	Devemos isolar nossos filhos do contato com incredulos?	",	 "length": "	09:14	",	 "file": "	https://www.mediafire.com/file/	n3mle9bl068afb8	/	Devemos isolar nossos filhos do contato com incredulos?	"},
{"track":	427	,	 "name": "	Devemos nos batizar pelos mortos?	",	 "length": "	02:06	",	 "file": "	https://www.mediafire.com/file/	znhybu691gadgo8	/	Devemos nos batizar pelos mortos?	"},
{"track":	428	,	 "name": "	Devemos nos preocupar com o que as escolas ensinam?	",	 "length": "	18:34	",	 "file": "	https://www.mediafire.com/file/	ogxkmkdxtz7111k	/	Devemos nos preocupar com o que as escolas ensinam?	"},
{"track":	429	,	 "name": "	Devemos orar pela paz de Jerusalem?	",	 "length": "	04:31	",	 "file": "	https://www.mediafire.com/file/	3lpruutrwhcdfxd	/	Devemos orar pela paz de Jerusalem?	"},
{"track":	430	,	 "name": "	Devemos pregar o evangelho a cristaos?	",	 "length": "	16:13	",	 "file": "	https://www.mediafire.com/file/	ffuo2i5puut9zun	/	Devemos pregar o evangelho a cristaos?	"},
{"track":	431	,	 "name": "	Devemos restaurar a igreja?	",	 "length": "	10:00	",	 "file": "	https://www.mediafire.com/file/	qe1483vgopavtjz	/	Devemos restaurar a igreja?	"},
{"track":	432	,	 "name": "	Devemos separar as criancas dos adultos nas reunioes?	",	 "length": "	09:52	",	 "file": "	https://www.mediafire.com/file/	2y8yggd9mp4rhk3	/	Devemos separar as criancas dos adultos nas reunioes?	"},
{"track":	433	,	 "name": "	Devemos ter tudo em comum como os primeiros cristaos?	",	 "length": "	10:52	",	 "file": "	https://www.mediafire.com/file/	8vt4a5t1lll3elv	/	Devemos ter tudo em comum como os primeiros cristaos?	"},
{"track":	434	,	 "name": "	Devo abandonar minha esposa?	",	 "length": "	08:43	",	 "file": "	https://www.mediafire.com/file/	9pswdopzy591rp1	/	Devo abandonar minha esposa?	"},
{"track":	435	,	 "name": "	Devo aguardar na denominacao enquanto nao existe uma assembleia?	",	 "length": "	08:49	",	 "file": "	https://www.mediafire.com/file/	m05abub88w0o6qb	/	Devo aguardar na denominacao enquanto nao existe uma assembleia?	"},
{"track":	436	,	 "name": "	Devo apresentar meu filho no templo?	",	 "length": "	07:39	",	 "file": "	https://www.mediafire.com/file/	erekjbdlyho8yr8	/	Devo apresentar meu filho no templo?	"},
{"track":	437	,	 "name": "	Devo aproveitar a vida?	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	gmkob94crugjayp	/	Devo aproveitar a vida?	"},
{"track":	438	,	 "name": "	Devo chamar a todos de 'irmaos'?	",	 "length": "	08:37	",	 "file": "	https://www.mediafire.com/file/	06i2822ssywmxru	/	Devo chamar a todos de 'irmaos'?	"},
{"track":	439	,	 "name": "	Devo continuar colaborando com a denominacao?	",	 "length": "	06:23	",	 "file": "	https://www.mediafire.com/file/	24hz74ac7ml8zjv	/	Devo continuar colaborando com a denominacao?	"},
{"track":	440	,	 "name": "	Devo dar esmolas?	",	 "length": "	14:26	",	 "file": "	https://www.mediafire.com/file/	nhm5od07q61ft8p	/	Devo dar esmolas?	"},
{"track":	441	,	 "name": "	Devo deixar meus pais interferirem na educacao de meus filhos?	",	 "length": "	09:21	",	 "file": "	https://www.mediafire.com/file/	h3qcqwwrf29fk1d	/	Devo deixar meus pais interferirem na educacao de meus filhos?	"},
{"track":	442	,	 "name": "	Devo denunciar as perversoes?	",	 "length": "	05:00	",	 "file": "	https://www.mediafire.com/file/	w7prb0rbymgwfwz	/	Devo denunciar as perversoes?	"},
{"track":	443	,	 "name": "	Devo denunciar os erros da cristandade?	",	 "length": "	06:38	",	 "file": "	https://www.mediafire.com/file/	bwnetobttno5db1	/	Devo denunciar os erros da cristandade?	"},
{"track":	444	,	 "name": "	Devo disciplinar meus filhos?	",	 "length": "	20:26	",	 "file": "	https://www.mediafire.com/file/	rby0o8hafva6egc	/	Devo disciplinar meus filhos?	"},
{"track":	445	,	 "name": "	Devo dividir meus bens com o Bispo Primaz?	",	 "length": "	06:13	",	 "file": "	https://www.mediafire.com/file/	6a73he0i444b5ci	/	Devo dividir meus bens com o Bispo Primaz?	"},
{"track":	446	,	 "name": "	Devo estar revoltado?	",	 "length": "	07:07	",	 "file": "	https://www.mediafire.com/file/	xaifdrlxfocokj8	/	Devo estar revoltado?	"},
{"track":	447	,	 "name": "	Devo estudar as religioes para conhecer seus erros?	",	 "length": "	04:21	",	 "file": "	https://www.mediafire.com/file/	nb7zcby33563ovn	/	Devo estudar as religioes para conhecer seus erros?	"},
{"track":	448	,	 "name": "	Devo guardar o sabado?	",	 "length": "	06:18	",	 "file": "	https://www.mediafire.com/file/	edn5jm81uqpyc6e	/	Devo guardar o sabado?	"},
{"track":	449	,	 "name": "	Devo insistir neste namoro?	",	 "length": "	10:49	",	 "file": "	https://www.mediafire.com/file/	3recnfeqkk35bj1	/	Devo insistir neste namoro?	"},
{"track":	450	,	 "name": "	Devo levantar as maos para orar?	",	 "length": "	05:36	",	 "file": "	https://www.mediafire.com/file/	6pjueod2cmc0rrx	/	Devo levantar as maos para orar?	"},
{"track":	451	,	 "name": "	Devo me preocupar com o que pensam de mim?	",	 "length": "	10:40	",	 "file": "	https://www.mediafire.com/file/	tpta9gsr0d11ewe	/	Devo me preocupar com o que pensam de mim?	"},
{"track":	452	,	 "name": "	Devo me submeter ao ritual da crisma?	",	 "length": "	14:52	",	 "file": "	https://www.mediafire.com/file/	ntciawje8wd0obj	/	Devo me submeter ao ritual da crisma?	"},
{"track":	453	,	 "name": "	Devo me sujeitar ao meu marido?	",	 "length": "	09:40	",	 "file": "	https://www.mediafire.com/file/	hw3rvwhfsepsayp	/	Devo me sujeitar ao meu marido?	"},
{"track":	454	,	 "name": "	Devo mentir para nao me expor?	",	 "length": "	09:21	",	 "file": "	https://www.mediafire.com/file/	ym62b466pydslmy	/	Devo mentir para nao me expor?	"},
{"track":	455	,	 "name": "	Devo mentir se o chefe mandar?	",	 "length": "	07:33	",	 "file": "	https://www.mediafire.com/file/	gk0rt0rhmlfdxtd	/	Devo mentir se o chefe mandar?	"},
{"track":	456	,	 "name": "	Devo mudar de emprego?	",	 "length": "	07:18	",	 "file": "	https://www.mediafire.com/file/	zv4nn2ufkabbjdv	/	Devo mudar de emprego?	"},
{"track":	457	,	 "name": "	Devo parar de jogar futebol?	",	 "length": "	14:25	",	 "file": "	https://www.mediafire.com/file/	s12osqsvrbwgud2	/	Devo parar de jogar futebol?	"},
{"track":	458	,	 "name": "	Devo parar de trabalhar?	",	 "length": "	06:42	",	 "file": "	https://www.mediafire.com/file/	7dvi2n72i8cwkl8	/	Devo parar de trabalhar?	"},
{"track":	459	,	 "name": "	Devo participar de manifestacoes contra o governo?	",	 "length": "	04:05	",	 "file": "	https://www.mediafire.com/file/	1ri0xyllobniy3y	/	Devo participar de manifestacoes contra o governo?	"},
{"track":	460	,	 "name": "	Devo proibir minha mae de ver TV?	",	 "length": "	09:15	",	 "file": "	https://www.mediafire.com/file/	1nad1m4nqf99f88	/	Devo proibir minha mae de ver TV?	"},
{"track":	461	,	 "name": "	Devo protestar contra videos de humor?	",	 "length": "	17:07	",	 "file": "	https://www.mediafire.com/file/	8kd9r2w59xuyxmu	/	Devo protestar contra videos de humor?	"},
{"track":	462	,	 "name": "	Devo sair da igreja?	",	 "length": "	06:31	",	 "file": "	https://www.mediafire.com/file/	6lnrp1hc36m5mpr	/	Devo sair da igreja?	"},
{"track":	463	,	 "name": "	Devo sair de casa para nao me contaminar?	",	 "length": "	09:44	",	 "file": "	https://www.mediafire.com/file/	bijv312cpdd7wnv	/	Devo sair de casa para nao me contaminar?	"},
{"track":	464	,	 "name": "	Devo sempre usar 'Senhor' antes do nome 'Jesus'?	",	 "length": "	10:48	",	 "file": "	https://www.mediafire.com/file/	s2z7v3weudzdx7i	/	Devo sempre usar 'Senhor' antes do nome 'Jesus'?	"},
{"track":	465	,	 "name": "	Devo ser discipulo de um apostolo?	",	 "length": "	14:28	",	 "file": "	https://www.mediafire.com/file/	16ndq165i5sr6s1	/	Devo ser discipulo de um apostolo?	"},
{"track":	466	,	 "name": "	Devo ser fiel para receber bencaos?	",	 "length": "	03:19	",	 "file": "	https://www.mediafire.com/file/	h129mk5d82utyuh	/	Devo ser fiel para receber bencaos?	"},
{"track":	467	,	 "name": "	Devo subir ao monte para orar?	",	 "length": "	08:57	",	 "file": "	https://www.mediafire.com/file/	r8kgt1y994r8d92	/	Devo subir ao monte para orar?	"},
{"track":	468	,	 "name": "	Devo viver antenado no mundo evangelico?	",	 "length": "	17:29	",	 "file": "	https://www.mediafire.com/file/	qivkos9s2ds0ac8	/	Devo viver antenado no mundo evangelico?	"},
{"track":	469	,	 "name": "	Devo voltar para a igreja católica?	",	 "length": "	02:23	",	 "file": "	https://www.mediafire.com/file/	889wgan68481hkr	/	Devo voltar para a igreja católica?	"},
{"track":	470	,	 "name": "	E' errado estudar a Biblia em casa?	",	 "length": "	06:55	",	 "file": "	https://www.mediafire.com/file/	jucvkrw7teb6xc8	/	E' errado estudar a Biblia em casa?	"},
{"track":	471	,	 "name": "	Efeso, Corinto ou Tiatira nao eram denominacoes?	",	 "length": "	11:52	",	 "file": "	https://www.mediafire.com/file/	4xuz1w2nsk12qmi	/	Efeso, Corinto ou Tiatira nao eram denominacoes?	"},
{"track":	472	,	 "name": "	Eleicao ou nao?	",	 "length": "	08:14	",	 "file": "	https://www.mediafire.com/file/	u2szdk17fyq08h2	/	Eleicao ou nao?	"},
{"track":	473	,	 "name": "	Eleicao, predestinacao e presciencia sao ideias biblicas?	",	 "length": "	04:41	",	 "file": "	https://www.mediafire.com/file/	zerfn8fy6h1t9lr	/	Eleicao, predestinacao e presciencia sao ideias biblicas?	"},
{"track":	474	,	 "name": "	Em 1948 cumpriu-se a profecia da volta de Israel?	",	 "length": "	00:15	",	 "file": "	https://www.mediafire.com/file/	jq7kbxj6on7bzbm	/	Em 1948 cumpriu-se a profecia da volta de Israel?	"},
{"track":	475	,	 "name": "	Em Lucas 24 o 'partir o pao' era a ceia do Senhor?	",	 "length": "	07:39	",	 "file": "	https://www.mediafire.com/file/	3xp1p91vih9pd9k	/	Em Lucas 24 o 'partir o pao' era a ceia do Senhor?	"},
{"track":	476	,	 "name": "	Enoque morreu ou nao?	",	 "length": "	05:35	",	 "file": "	https://www.mediafire.com/file/	l070bjuiu2azsko	/	Enoque morreu ou nao?	"},
{"track":	477	,	 "name": "	Eram onze, doze, treze ou mais apóstolos?	",	 "length": "	04:03	",	 "file": "	https://www.mediafire.com/file/	fsc62adg2jjjmba	/	Eram onze, doze, treze ou mais apóstolos?	"},
{"track":	478	,	 "name": "	Essas igrejas deveriam se unir?	",	 "length": "	15:44	",	 "file": "	https://www.mediafire.com/file/	crc7k7r4qk7wo6j	/	Essas igrejas deveriam se unir?	"},
{"track":	479	,	 "name": "	Esta passagem fala de quem mata um crente?	",	 "length": "	10:07	",	 "file": "	https://www.mediafire.com/file/	6eu07uxczma956f	/	Esta passagem fala de quem mata um crente?	"},
{"track":	480	,	 "name": "	Estamos vivendo o apogeu da cristandade?	",	 "length": "	17:25	",	 "file": "	https://www.mediafire.com/file/	qe0vmjnbx4hj9fx	/	Estamos vivendo o apogeu da cristandade?	"},
{"track":	481	,	 "name": "	Estarei pecando se fizer plastica?	",	 "length": "	01:50	",	 "file": "	https://www.mediafire.com/file/	xli4i172mo9r5lf	/	Estarei pecando se fizer plastica?	"},
{"track":	482	,	 "name": "	Estarei perdida para sempre?	",	 "length": "	08:58	",	 "file": "	https://www.mediafire.com/file/	u409vn9vnqrs8no	/	Estarei perdida para sempre?	"},
{"track":	483	,	 "name": "	Estas passagens afirmam que podemos perder a salvacao?	",	 "length": "	16:05	",	 "file": "	https://www.mediafire.com/file/	169q6i64qyqwfr0	/	Estas passagens afirmam que podemos perder a salvacao?	"},
{"track":	484	,	 "name": "	Estas passagens falam de salvacao por obras?	",	 "length": "	07:17	",	 "file": "	https://www.mediafire.com/file/	if3ii7u67n7z9db	/	Estas passagens falam de salvacao por obras?	"},
{"track":	485	,	 "name": "	Estou errando ao pedir a Deus a morte?	",	 "length": "	04:18	",	 "file": "	https://www.mediafire.com/file/	srht3slhot1p561	/	Estou errando ao pedir a Deus a morte?	"},
{"track":	486	,	 "name": "	Estou sob maldicao por nao ter pregado o evangelho?	",	 "length": "	19:45	",	 "file": "	https://www.mediafire.com/file/	c78a6jcwda30d1z	/	Estou sob maldicao por nao ter pregado o evangelho?	"},
{"track":	487	,	 "name": "	Estou sofrendo por estar desobedecendo?	",	 "length": "	05:20	",	 "file": "	https://www.mediafire.com/file/	ta0jrw13v410jsx	/	Estou sofrendo por estar desobedecendo?	"},
{"track":	488	,	 "name": "	Eu e meu namorado podemos ter uma vida intima?	",	 "length": "	09:55	",	 "file": "	https://www.mediafire.com/file/	vpaxsuis5w4yiu7	/	Eu e meu namorado podemos ter uma vida intima?	"},
{"track":	489	,	 "name": "	Evitar filhos e' pecado?	",	 "length": "	03:11	",	 "file": "	https://www.mediafire.com/file/	9cdoti2chwuwhfq	/	Evitar filhos e' pecado?	"},
{"track":	490	,	 "name": "	Existe alguma profecia sobre o novo Papa?	",	 "length": "	17:23	",	 "file": "	https://www.mediafire.com/file/	vvm1oco9c5vvdez	/	Existe alguma profecia sobre o novo Papa?	"},
{"track":	491	,	 "name": "	Existe alguma verdade oculta?	",	 "length": "	08:56	",	 "file": "	https://www.mediafire.com/file/	dkpf1kd09du173l	/	Existe alguma verdade oculta?	"},
{"track":	492	,	 "name": "	Existe base biblica para o dispensacionalismo?	",	 "length": "	06:11	",	 "file": "	https://www.mediafire.com/file/	5bxom9143kp22tw	/	Existe base biblica para o dispensacionalismo?	"},
{"track":	493	,	 "name": "	Existe consciencia no pos-morte para quem nao foi salvo?	",	 "length": "	06:23	",	 "file": "	https://www.mediafire.com/file/	0gptht2s1xui6d0	/	Existe consciencia no pos-morte para quem nao foi salvo?	"},
{"track":	494	,	 "name": "	Existe diferenca entre dom e ministerio?	",	 "length": "	05:01	",	 "file": "	https://www.mediafire.com/file/	2ig8gzgkzg76k2g	/	Existe diferenca entre dom e ministerio?	"},
{"track":	495	,	 "name": "	Existe diferença entre os dons?	",	 "length": "	19:21	",	 "file": "	https://www.mediafire.com/file/	d8ms0p01k1a8sia	/	Existe diferença entre os dons?	"},
{"track":	496	,	 "name": "	Existe um HOMEM de carne e ossos no ceu?	",	 "length": "	06:07	",	 "file": "	https://www.mediafire.com/file/	x8alup0vycwdjug	/	Existe um HOMEM de carne e ossos no ceu?	"},
{"track":	497	,	 "name": "	Existe um proposito para minha vida?	",	 "length": "	06:11	",	 "file": "	https://www.mediafire.com/file/	u7b6exnhqnfaaiv	/	Existe um proposito para minha vida?	"},
{"track":	498	,	 "name": "	Existe uma cronologia profetica nas cartas as 7 igrejas?	",	 "length": "	05:53	",	 "file": "	https://www.mediafire.com/file/	h5jcoczcchxx6hi	/	Existe uma cronologia profetica nas cartas as 7 igrejas?	"},
{"track":	499	,	 "name": "	Existe uma organizacao central?	",	 "length": "	17:55	",	 "file": "	https://www.mediafire.com/file/	4jjhqwx8plnjpep	/	Existe uma organizacao central?	"},
{"track":	500	,	 "name": "	Existem cavalos no ceu?	",	 "length": "	07:19	",	 "file": "	https://www.mediafire.com/file/	rrndkrnycqi41er	/	Existem cavalos no ceu?	"},



///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

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

// Título da playlist
document.write('<title>Audio Player - Comentários - Respondi 501-1000</title>')

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
