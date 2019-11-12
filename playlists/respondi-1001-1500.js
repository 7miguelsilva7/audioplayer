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

 
{"track":	1	,	 "name": "	Existem contradicoes nos evangelhos?	",	 "length": "	14:50	",	 "file": "	https://www.mediafire.com/file/	obvzoxf29dwd2p0	/	Existem contradicoes nos evangelhos?	"},
{"track":	2	,	 "name": "	Existem santos?	",	 "length": "	11:49	",	 "file": "	https://www.mediafire.com/file/	mjn10nq7u0n3nnl	/	Existem santos?	"},
{"track":	3	,	 "name": "	Extinguir o Espirito significa perder a salvacao eterna?	",	 "length": "	06:35	",	 "file": "	https://www.mediafire.com/file/	9uamtyk968zh28q	/	Extinguir o Espirito significa perder a salvacao eterna?	"},
{"track":	4	,	 "name": "	Fazer seguro e' falta de fe'?	",	 "length": "	10:37	",	 "file": "	https://www.mediafire.com/file/	562s8wspy5naroa	/	Fazer seguro e' falta de fe'?	"},
{"track":	5	,	 "name": "	Filhos de crentes estao salvos?	",	 "length": "	01:55	",	 "file": "	https://www.mediafire.com/file/	a78gabnxbaaa4kb	/	Filhos de crentes estao salvos?	"},
{"track":	6	,	 "name": "	Filhos devem pagar pelos pecados dos pais?	",	 "length": "	08:41	",	 "file": "	https://www.mediafire.com/file/	ugzw05ed7dds9gk	/	Filhos devem pagar pelos pecados dos pais?	"},
{"track":	7	,	 "name": "	Foi a tradicao catolica que nos legou o Novo Testamento?	",	 "length": "	07:43	",	 "file": "	https://www.mediafire.com/file/	3509d65u4m4eb53	/	Foi a tradicao catolica que nos legou o Novo Testamento?	"},
{"track":	8	,	 "name": "	Foi Deus quem falou?	",	 "length": "	13:25	",	 "file": "	https://www.mediafire.com/file/	tc7mrvbm6no25m5	/	Foi Deus quem falou?	"},
{"track":	9	,	 "name": "	Foi errada a escolha de Matias para apostolo?	",	 "length": "	08:14	",	 "file": "	https://www.mediafire.com/file/	hd8ita0trpm6d18	/	Foi errada a escolha de Matias para apostolo?	"},
{"track":	10	,	 "name": "	Fui eleito por Deus saber que eu iria crer?	",	 "length": "	09:38	",	 "file": "	https://www.mediafire.com/file/	oz33u3mf2o29m39	/	Fui eleito por Deus saber que eu iria crer?	"},
{"track":	11	,	 "name": "	Fumar e' pecado?	",	 "length": "	12:47	",	 "file": "	https://www.mediafire.com/file/	ephla9oxz6w97h9	/	Fumar e' pecado?	"},
{"track":	12	,	 "name": "	Hebreus 7 ensina que devemos dar o dizimo?	",	 "length": "	03:38	",	 "file": "	https://www.mediafire.com/file/	x1dwdr4dd8d3hl7	/	Hebreus 7 ensina que devemos dar o dizimo?	"},
{"track":	13	,	 "name": "	Jeova seria o Pai de Jesus?	",	 "length": "	10:51	",	 "file": "	https://www.mediafire.com/file/	8y1g72t033t82xj	/	Jeova seria o Pai de Jesus?	"},
{"track":	14	,	 "name": "	Jesus desobedeceu o Salmo 1?	",	 "length": "	13:48	",	 "file": "	https://www.mediafire.com/file/	1ms27q8dl9zj3ba	/	Jesus desobedeceu o Salmo 1?	"},
{"track":	15	,	 "name": "	Jesus diz que somos deuses?	",	 "length": "	04:28	",	 "file": "	https://www.mediafire.com/file/	t6mptq32931slkk	/	Jesus diz que somos deuses?	"},
{"track":	16	,	 "name": "	Jesus e' uma das manifestacoes de Deus?	",	 "length": "	08:48	",	 "file": "	https://www.mediafire.com/file/	19yqdf0s5kcs9h3	/	Jesus e' uma das manifestacoes de Deus?	"},
{"track":	17	,	 "name": "	Jesus elogiou a infidelidade do mordomo infiel?	",	 "length": "	05:13	",	 "file": "	https://www.mediafire.com/file/	n9eja3qvy29f84b	/	Jesus elogiou a infidelidade do mordomo infiel?	"},
{"track":	18	,	 "name": "	Jesus era negro?	",	 "length": "	04:36	",	 "file": "	https://www.mediafire.com/file/	pfrb8bim9m9oi55	/	Jesus era negro?	"},
{"track":	19	,	 "name": "	Jesus era pecador?	",	 "length": "	08:14	",	 "file": "	https://www.mediafire.com/file/	rb0ha26hav0s9a2	/	Jesus era pecador?	"},
{"track":	20	,	 "name": "	Jesus era sem pecado?	",	 "length": "	10:32	",	 "file": "	https://www.mediafire.com/file/	hx1mwk4eigucppp	/	Jesus era sem pecado?	"},
{"track":	21	,	 "name": "	Jesus foi inferior aos anjos?	",	 "length": "	06:06	",	 "file": "	https://www.mediafire.com/file/	uoig6n8pvgfxfci	/	Jesus foi inferior aos anjos?	"},
{"track":	22	,	 "name": "	Jesus foi o primeiro a ser criado?	",	 "length": "	09:16	",	 "file": "	https://www.mediafire.com/file/	id8ko9r69svse0k	/	Jesus foi o primeiro a ser criado?	"},
{"track":	23	,	 "name": "	Jesus levou nossas enfermidades na cruz?	",	 "length": "	12:04	",	 "file": "	https://www.mediafire.com/file/	xcc93if18fie9p8	/	Jesus levou nossas enfermidades na cruz?	"},
{"track":	24	,	 "name": "	Jesus mentiu para o ladrao na cruz?	",	 "length": "	06:07	",	 "file": "	https://www.mediafire.com/file/	91yig2wc57myr95	/	Jesus mentiu para o ladrao na cruz?	"},
{"track":	25	,	 "name": "	Jesus mentiu para o ladrao na cruz?	",	 "length": "	06:46	",	 "file": "	https://www.mediafire.com/file/	8683puox3wep6kz	/	Jesus mentiu para o ladrao na cruz?	"},
{"track":	26	,	 "name": "	Jesus morreu na cruz ou na estaca?	",	 "length": "	09:02	",	 "file": "	https://www.mediafire.com/file/	jxc6p46s70efb4x	/	Jesus morreu na cruz ou na estaca?	"},
{"track":	27	,	 "name": "	Jesus não sabe quando vai voltar?	",	 "length": "	06:14	",	 "file": "	https://www.mediafire.com/file/	plymhssp8zfywt9	/	Jesus não sabe quando vai voltar?	"},
{"track":	28	,	 "name": "	Jesus nao sabia o dia e a hora de sua volta?	",	 "length": "	06:37	",	 "file": "	https://www.mediafire.com/file/	3alx3g30zgs3uw0	/	Jesus nao sabia o dia e a hora de sua volta?	"},
{"track":	29	,	 "name": "	Jesus poderia ter desobedecido o Pai?	",	 "length": "	03:53	",	 "file": "	https://www.mediafire.com/file/	7khhw93tp7cc7yq	/	Jesus poderia ter desobedecido o Pai?	"},
{"track":	30	,	 "name": "	Jesus poderia ter se casado?	",	 "length": "	05:47	",	 "file": "	https://www.mediafire.com/file/	24b7o4oxdadw97d	/	Jesus poderia ter se casado?	"},
{"track":	31	,	 "name": "	Jesus se tornou Filho de Deus ao nascer no mundo?	",	 "length": "	03:20	",	 "file": "	https://www.mediafire.com/file/	en96hs6i845y8se	/	Jesus se tornou Filho de Deus ao nascer no mundo?	"},
{"track":	32	,	 "name": "	Jesus tinha cabelos longos?	",	 "length": "	10:56	",	 "file": "	https://www.mediafire.com/file/	2j8bava4qlkycv3	/	Jesus tinha cabelos longos?	"},
{"track":	33	,	 "name": "	Jesus vai descer do modo como subiu?	",	 "length": "	05:55	",	 "file": "	https://www.mediafire.com/file/	s9wef9hcql24dx7	/	Jesus vai descer do modo como subiu?	"},
{"track":	34	,	 "name": "	Joao Batista perdeu a salvacao?	",	 "length": "	04:07	",	 "file": "	https://www.mediafire.com/file/	fiwu5t598udnd7i	/	Joao Batista perdeu a salvacao?	"},
{"track":	35	,	 "name": "	Jonas nao queria salvar Ninive?	",	 "length": "	04:46	",	 "file": "	https://www.mediafire.com/file/	bywkqhwinivwvlv	/	Jonas nao queria salvar Ninive?	"},
{"track":	36	,	 "name": "	Judas foi salvo?	",	 "length": "	08:32	",	 "file": "	https://www.mediafire.com/file/	vajqp1j30ijgi01	/	Judas foi salvo?	"},
{"track":	37	,	 "name": "	Judas participou da ceia do Senhor?	",	 "length": "	07:47	",	 "file": "	https://www.mediafire.com/file/	49mj300pen27i4n	/	Judas participou da ceia do Senhor?	"},
{"track":	38	,	 "name": "	Judas perdeu a salvacao?	",	 "length": "	11:14	",	 "file": "	https://www.mediafire.com/file/	ayl3dy88m3qssav	/	Judas perdeu a salvacao?	"},
{"track":	39	,	 "name": "	Lembraremos no ceu o que passamos na terra?	",	 "length": "	16:32	",	 "file": "	https://www.mediafire.com/file/	1po12jrj15pbwoq	/	Lembraremos no ceu o que passamos na terra?	"},
{"track":	40	,	 "name": "	Maria foi sem pecado e co-redentora?	",	 "length": "	08:03	",	 "file": "	https://www.mediafire.com/file/	4yusf4cvraydlsl	/	Maria foi sem pecado e co-redentora?	"},
{"track":	41	,	 "name": "	Mesas denominacionais sao de demonios?	",	 "length": "	05:47	",	 "file": "	https://www.mediafire.com/file/	icig1egoyy6mo9l	/	Mesas denominacionais sao de demonios?	"},
{"track":	42	,	 "name": "	Meu filho autista sera' salvo?	",	 "length": "	09:18	",	 "file": "	https://www.mediafire.com/file/	4m96396rwdl6vv8	/	Meu filho autista sera' salvo?	"},
{"track":	43	,	 "name": "	Meu filho deve pedir a bencao a mim?	",	 "length": "	02:51	",	 "file": "	https://www.mediafire.com/file/	d1gwhj3dyad602b	/	Meu filho deve pedir a bencao a mim?	"},
{"track":	44	,	 "name": "	Meu marido pode me impedir de congregar?	",	 "length": "	14:50	",	 "file": "	https://www.mediafire.com/file/	lsvau1dr93ij4gj	/	Meu marido pode me impedir de congregar?	"},
{"track":	45	,	 "name": "	Meu marido voltou ao catolicismo. O que fazer?	",	 "length": "	15:03	",	 "file": "	https://www.mediafire.com/file/	k7eeqs2syd52cn2	/	Meu marido voltou ao catolicismo. O que fazer?	"},
{"track":	46	,	 "name": "	Minhas escolhas sao a vontade de Deus?	",	 "length": "	14:39	",	 "file": "	https://www.mediafire.com/file/	6qt4wer5x279wc0	/	Minhas escolhas sao a vontade de Deus?	"},
{"track":	47	,	 "name": "	Moises inventou Deus?	",	 "length": "	09:10	",	 "file": "	https://www.mediafire.com/file/	mjdwlycw8uz8kfj	/	Moises inventou Deus?	"},
{"track":	48	,	 "name": "	Mulheres podem ensinar na escola dominical?	",	 "length": "	07:52	",	 "file": "	https://www.mediafire.com/file/	6f62n4v8qxaz83t	/	Mulheres podem ensinar na escola dominical?	"},
{"track":	49	,	 "name": "	Mulheres podem escrever sobre o Senhor?	",	 "length": "	11:12	",	 "file": "	https://www.mediafire.com/file/	4ixzckzbdvkkzqh	/	Mulheres podem escrever sobre o Senhor?	"},
{"track":	50	,	 "name": "	Na Biblia mulheres julgavam, profetizavam e ensinavam?	",	 "length": "	14:06	",	 "file": "	https://www.mediafire.com/file/	880nc5n05ywiwuk	/	Na Biblia mulheres julgavam, profetizavam e ensinavam?	"},
{"track":	51	,	 "name": "	Nao devemos julgar nossos irmaos?	",	 "length": "	13:35	",	 "file": "	https://www.mediafire.com/file/	u8yxh1bw1baqfoc	/	Nao devemos julgar nossos irmaos?	"},
{"track":	52	,	 "name": "	Nao devemos pregar o evangelho a todos?	",	 "length": "	02:38	",	 "file": "	https://www.mediafire.com/file/	e14k13vf8rh2w88	/	Nao devemos pregar o evangelho a todos?	"},
{"track":	53	,	 "name": "	Nao devemos utilizar fabulas para ensinar a Biblia?	",	 "length": "	10:12	",	 "file": "	https://www.mediafire.com/file/	b4o2zxnu48uubfh	/	Nao devemos utilizar fabulas para ensinar a Biblia?	"},
{"track":	54	,	 "name": "	Nao devo ser pobre nem rico?	",	 "length": "	10:08	",	 "file": "	https://www.mediafire.com/file/	r7ci99ycdj5re5v	/	Nao devo ser pobre nem rico?	"},
{"track":	55	,	 "name": "	Nao existe nada mais para conhecermos?	",	 "length": "	05:09	",	 "file": "	https://www.mediafire.com/file/	e179dfu5yvwmllp	/	Nao existe nada mais para conhecermos?	"},
{"track":	56	,	 "name": "	Nao existe perdao para quem duvida dos profetas?	",	 "length": "	19:06	",	 "file": "	https://www.mediafire.com/file/	mrw3g80bna3nlwz	/	Nao existe perdao para quem duvida dos profetas?	"},
{"track":	57	,	 "name": "	Não existe uma doutrina perfeita?	",	 "length": "	03:54	",	 "file": "	https://www.mediafire.com/file/	l2d53qogbqeizz7	/	Não existe uma doutrina perfeita?	"},
{"track":	58	,	 "name": "	Nao serei salvo se nao pronunciar o nome original de Jesus?	",	 "length": "	04:36	",	 "file": "	https://www.mediafire.com/file/	ymzpi8n8a5cdg0f	/	Nao serei salvo se nao pronunciar o nome original de Jesus?	"},
{"track":	59	,	 "name": "	Nao seria egoismo de Deus querer ser adorado?	",	 "length": "	05:21	",	 "file": "	https://www.mediafire.com/file/	ts8cv9ugl2bcko0	/	Nao seria egoismo de Deus querer ser adorado?	"},
{"track":	60	,	 "name": "	Nem todos sao chamados para ser santos?	",	 "length": "	07:19	",	 "file": "	https://www.mediafire.com/file/	49q3tae6dq27mb5	/	Nem todos sao chamados para ser santos?	"},
{"track":	61	,	 "name": "	No Antigo Testamento a salvacao era por graca?	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	tjlo4cagdh2px1t	/	No Antigo Testamento a salvacao era por graca?	"},
{"track":	62	,	 "name": "	Nossa salvacao depende dos frutos que produzimos?	",	 "length": "	02:32	",	 "file": "	https://www.mediafire.com/file/	h98qbc669xj7tmz	/	Nossa salvacao depende dos frutos que produzimos?	"},
{"track":	63	,	 "name": "	Nossos filhos devem ser educados em casa?	",	 "length": "	10:11	",	 "file": "	https://www.mediafire.com/file/	fvjcl992ummnzhe	/	Nossos filhos devem ser educados em casa?	"},
{"track":	64	,	 "name": "	O 'anjo' em Apocalipse 1 a 3 e' o pastor?	",	 "length": "	06:00	",	 "file": "	https://www.mediafire.com/file/	wae3jx8g38f2g2p	/	O 'anjo' em Apocalipse 1 a 3 e' o pastor?	"},
{"track":	65	,	 "name": "	O 'ide por todo o mundo' nao foi dado a Igreja?	",	 "length": "	19:04	",	 "file": "	https://www.mediafire.com/file/	8zaaoiuugbastif	/	O 'ide por todo o mundo' nao foi dado a Igreja?	"},
{"track":	66	,	 "name": "	O amor ensina a nao julgarmos?	",	 "length": "	13:23	",	 "file": "	https://www.mediafire.com/file/	6yjte4c2mcfc1vt	/	O amor ensina a nao julgarmos?	"},
{"track":	67	,	 "name": "	O arcanjo Miguel e' Jesus?	",	 "length": "	09:49	",	 "file": "	https://www.mediafire.com/file/	wj0x2dai83fo012	/	O arcanjo Miguel e' Jesus?	"},
{"track":	68	,	 "name": "	O arrebatamento da Igreja aparece no Antigo Testamento?	",	 "length": "	08:05	",	 "file": "	https://www.mediafire.com/file/	4la48vgi3tsugal	/	O arrebatamento da Igreja aparece no Antigo Testamento?	"},
{"track":	69	,	 "name": "	O arrebatamento da igreja sera na tribulacao?	",	 "length": "	13:04	",	 "file": "	https://www.mediafire.com/file/	r2ce6ck8zmbii4x	/	O arrebatamento da igreja sera na tribulacao?	"},
{"track":	70	,	 "name": "	O arrebatamento nao seria depois da tribulacao?	",	 "length": "	16:39	",	 "file": "	https://www.mediafire.com/file/	6tfofv3s2n4nf3t	/	O arrebatamento nao seria depois da tribulacao?	"},
{"track":	71	,	 "name": "	O arrebatamento sera na metade da ultima semana?	",	 "length": "	09:09	",	 "file": "	https://www.mediafire.com/file/	40xqxgfald03xja	/	O arrebatamento sera na metade da ultima semana?	"},
{"track":	72	,	 "name": "	O arrebatamento vem sem sinais?	",	 "length": "	09:55	",	 "file": "	https://www.mediafire.com/file/	bbj91ab80f8e8p8	/	O arrebatamento vem sem sinais?	"},
{"track":	73	,	 "name": "	O assunto da epistola e' a evangelizacao?	",	 "length": "	07:12	",	 "file": "	https://www.mediafire.com/file/	40l3y36x8c8cvb8	/	O assunto da epistola e' a evangelizacao?	"},
{"track":	74	,	 "name": "	O ato sexual e' o que une o casal?	",	 "length": "	07:00	",	 "file": "	https://www.mediafire.com/file/	3bg72aoq9ijz8cr	/	O ato sexual e' o que une o casal?	"},
{"track":	75	,	 "name": "	O batismo nos torna membros da Igreja?	",	 "length": "	07:39	",	 "file": "	https://www.mediafire.com/file/	6ovriyu8bhxvuxc	/	O batismo nos torna membros da Igreja?	"},
{"track":	76	,	 "name": "	O batismo perdoa pecados?	",	 "length": "	08:59	",	 "file": "	https://www.mediafire.com/file/	chj678csv3orjvg	/	O batismo perdoa pecados?	"},
{"track":	77	,	 "name": "	O batismo por aspersao e' valido?	",	 "length": "	07:51	",	 "file": "	https://www.mediafire.com/file/	ej64h4xct18hfu3	/	O batismo por aspersao e' valido?	"},
{"track":	78	,	 "name": "	O Brasil aparece em Isaias 42?	",	 "length": "	04:49	",	 "file": "	https://www.mediafire.com/file/	rj8c5zdxe1bhrc1	/	O Brasil aparece em Isaias 42?	"},
{"track":	79	,	 "name": "	O calice da ceia deve ser apenas um?	",	 "length": "	18:24	",	 "file": "	https://www.mediafire.com/file/	j0cdsvpfa5e863d	/	O calice da ceia deve ser apenas um?	"},
{"track":	80	,	 "name": "	O clero tem fundamento biblico?	",	 "length": "	14:19	",	 "file": "	https://www.mediafire.com/file/	t1fwyo39m315oa2	/	O clero tem fundamento biblico?	"},
{"track":	81	,	 "name": "	O crente e' individualmente a noiva de Cristo?	",	 "length": "	08:16	",	 "file": "	https://www.mediafire.com/file/	m520avsrda0i6le	/	O crente e' individualmente a noiva de Cristo?	"},
{"track":	82	,	 "name": "	O crente esta' liberto do poder de Satanas?	",	 "length": "	08:24	",	 "file": "	https://www.mediafire.com/file/	8k95ytnpcoxnm2j	/	O crente esta' liberto do poder de Satanas?	"},
{"track":	83	,	 "name": "	O crente passara' pela tribulacao?	",	 "length": "	06:12	",	 "file": "	https://www.mediafire.com/file/	z6aaz8ur68dy11k	/	O crente passara' pela tribulacao?	"},
{"track":	84	,	 "name": "	O crente poderia estar no hades?	",	 "length": "	04:45	",	 "file": "	https://www.mediafire.com/file/	c5gkg5x5tfu541g	/	O crente poderia estar no hades?	"},
{"track":	85	,	 "name": "	O cristao deve dar dizimo ou ofertas?	",	 "length": "	07:18	",	 "file": "	https://www.mediafire.com/file/	crvvptb6nf7ftdq	/	O cristao deve dar dizimo ou ofertas?	"},
{"track":	86	,	 "name": "	O cristão deve permanecer no anonimato?	",	 "length": "	11:25	",	 "file": "	https://www.mediafire.com/file/	27qwntam2fp2p71	/	O cristão deve permanecer no anonimato?	"},
{"track":	87	,	 "name": "	O cristao hoje nao precisa ser batizado?	",	 "length": "	14:34	",	 "file": "	https://www.mediafire.com/file/	g8hve11idsm5asn	/	O cristao hoje nao precisa ser batizado?	"},
{"track":	88	,	 "name": "	O cristao pode arriscar a vida praticando esportes radicais?	",	 "length": "	09:33	",	 "file": "	https://www.mediafire.com/file/	8a3vw3camldbjy5	/	O cristao pode arriscar a vida praticando esportes radicais?	"},
{"track":	89	,	 "name": "	O cristao pode contar piadas?	",	 "length": "	13:44	",	 "file": "	https://www.mediafire.com/file/	zz8a5b4hsxf57tc	/	O cristao pode contar piadas?	"},
{"track":	90	,	 "name": "	O cristao pode praticar meditacao?	",	 "length": "	07:39	",	 "file": "	https://www.mediafire.com/file/	vas4kg807g5n1vl	/	O cristao pode praticar meditacao?	"},
{"track":	91	,	 "name": "	O crucifixo deve ser retirado de edificios publicos?	",	 "length": "	05:02	",	 "file": "	https://www.mediafire.com/file/	eu49ipe9i51qban	/	O crucifixo deve ser retirado de edificios publicos?	"},
{"track":	92	,	 "name": "	O Dalai Lama sera salvo?	",	 "length": "	19:04	",	 "file": "	https://www.mediafire.com/file/	k48xjht5h98notz	/	O Dalai Lama sera salvo?	"},
{"track":	93	,	 "name": "	O descanso de Hebreus 4 e' para hoje?	",	 "length": "	03:38	",	 "file": "	https://www.mediafire.com/file/	4a95uvjh3umno0g	/	O descanso de Hebreus 4 e' para hoje?	"},
{"track":	94	,	 "name": "	O dia do Senhor e' o arrebatamento?	",	 "length": "	06:32	",	 "file": "	https://www.mediafire.com/file/	fwri4916s42dn20	/	O dia do Senhor e' o arrebatamento?	"},
{"track":	95	,	 "name": "	O diabo está no ceu?	",	 "length": "	04:29	",	 "file": "	https://www.mediafire.com/file/	v2z1gtkdee1cxcr	/	O diabo está no ceu?	"},
{"track":	96	,	 "name": "	O diabo pode influenciar criancas?	",	 "length": "	11:46	",	 "file": "	https://www.mediafire.com/file/	nzdgckqghq52zjg	/	O diabo pode influenciar criancas?	"},
{"track":	97	,	 "name": "	O dispensacionalismo tem erros graves?	",	 "length": "	14:06	",	 "file": "	https://www.mediafire.com/file/	2rq06dyf6b9tjvz	/	O dispensacionalismo tem erros graves?	"},
{"track":	98	,	 "name": "	O Espirito Santo esta ansioso?	",	 "length": "	06:59	",	 "file": "	https://www.mediafire.com/file/	ss498d5thpmzpg9	/	O Espirito Santo esta ansioso?	"},
{"track":	99	,	 "name": "	O Espirito Santo foi dado antes de Pentecostes?	",	 "length": "	09:50	",	 "file": "	https://www.mediafire.com/file/	0fbmpkbab4wha77	/	O Espirito Santo foi dado antes de Pentecostes?	"},
{"track":	100	,	 "name": "	O evangelho ja' foi pregado a toda criatura?	",	 "length": "	03:15	",	 "file": "	https://www.mediafire.com/file/	37ijul7ato1u7wo	/	O evangelho ja' foi pregado a toda criatura?	"},
{"track":	101	,	 "name": "	O homem foi criado com vida eterna?	",	 "length": "	06:28	",	 "file": "	https://www.mediafire.com/file/	sf26hd4m8b2aas6	/	O homem foi criado com vida eterna?	"},
{"track":	102	,	 "name": "	O inferno e' eterno?	",	 "length": "	03:54	",	 "file": "	https://www.mediafire.com/file/	cov67wkxf494yam	/	O inferno e' eterno?	"},
{"track":	103	,	 "name": "	O jovem que fugiu nu era Marcos ou Joao?	",	 "length": "	02:20	",	 "file": "	https://www.mediafire.com/file/	ekcbou54hdbc1lc	/	O jovem que fugiu nu era Marcos ou Joao?	"},
{"track":	104	,	 "name": "	O juizo final e' para todos?	",	 "length": "	06:56	",	 "file": "	https://www.mediafire.com/file/	h3dx9xnwa31fv40	/	O juizo final e' para todos?	"},
{"track":	105	,	 "name": "	O ladrao na cruz se converteu por escutar o nome Yeshua?	",	 "length": "	05:26	",	 "file": "	https://www.mediafire.com/file/	qbu0ux4odxb0eu7	/	O ladrao na cruz se converteu por escutar o nome Yeshua?	"},
{"track":	106	,	 "name": "	O livro de Jo' ensina o sono da alma?	",	 "length": "	05:42	",	 "file": "	https://www.mediafire.com/file/	u60rqqwmrig7zv3	/	O livro de Jo' ensina o sono da alma?	"},
{"track":	107	,	 "name": "	O louvor liberta?	",	 "length": "	06:52	",	 "file": "	https://www.mediafire.com/file/	0i5j560ydfi9c2e	/	O louvor liberta?	"},
{"track":	108	,	 "name": "	O lugar de reunioes deve ser chamado de Casa de Oracao?	",	 "length": "	07:52	",	 "file": "	https://www.mediafire.com/file/	cy7ox17pgf7egcq	/	O lugar de reunioes deve ser chamado de Casa de Oracao?	"},
{"track":	109	,	 "name": "	O mal, as trevas e o pecado foram criados por Deus?	",	 "length": "	08:09	",	 "file": "	https://www.mediafire.com/file/	rici2y3tb3pbhxj	/	O mal, as trevas e o pecado foram criados por Deus?	"},
{"track":	110	,	 "name": "	O mandamento do Sabado foi dado no Eden?	",	 "length": "	04:35	",	 "file": "	https://www.mediafire.com/file/	7oza1fnpsew3xpb	/	O mandamento do Sabado foi dado no Eden?	"},
{"track":	111	,	 "name": "	O milagre de Jesus incitava a embriaguez?	",	 "length": "	10:10	",	 "file": "	https://www.mediafire.com/file/	ml5w1p3ofbd2fk9	/	O milagre de Jesus incitava a embriaguez?	"},
{"track":	112	,	 "name": "	O Obama aprovou a lei do chip?	",	 "length": "	13:43	",	 "file": "	https://www.mediafire.com/file/	v2a3bxkxdofybfg	/	O Obama aprovou a lei do chip?	"},
{"track":	113	,	 "name": "	O objetivo da obra de Cristo foi salvar o homem?	",	 "length": "	04:04	",	 "file": "	https://www.mediafire.com/file/	kzse7ibre9bqq69	/	O objetivo da obra de Cristo foi salvar o homem?	"},
{"track":	114	,	 "name": "	O Papa e' o lider da igreja catolica?	",	 "length": "	16:32	",	 "file": "	https://www.mediafire.com/file/	t48ov2sycbjg6a5	/	O Papa e' o lider da igreja catolica?	"},
{"track":	115	,	 "name": "	O pecado de Sodoma foi falta de hospitalidade?	",	 "length": "	17:19	",	 "file": "	https://www.mediafire.com/file/	drskdeul200tz6p	/	O pecado de Sodoma foi falta de hospitalidade?	"},
{"track":	116	,	 "name": "	O pre-tribulacionismo esta errado?	",	 "length": "	10:36	",	 "file": "	https://www.mediafire.com/file/	3sqi7wm457hzjew	/	O pre-tribulacionismo esta errado?	"},
{"track":	117	,	 "name": "	O que a Biblia diz sobre imposicao de maos?	",	 "length": "	07:21	",	 "file": "	https://www.mediafire.com/file/	9jv12mdki18g6ja	/	O que a Biblia diz sobre imposicao de maos?	"},
{"track":	118	,	 "name": "	O que a Biblia ensina sobre o Sheol ou Hades?	",	 "length": "	11:49	",	 "file": "	https://www.mediafire.com/file/	rx5zm7gmpxggbu1	/	O que a Biblia ensina sobre o Sheol ou Hades?	"},
{"track":	119	,	 "name": "	O que acha da Biblia na Linguagem de Hoje?	",	 "length": "	07:48	",	 "file": "	https://www.mediafire.com/file/	6hdwjdlfh01h130	/	O que acha da Biblia na Linguagem de Hoje?	"},
{"track":	120	,	 "name": "	O que acha do livro 'Por que voce nao quer mais ir 'a Igreja'?	",	 "length": "	11:20	",	 "file": "	https://www.mediafire.com/file/	4acfictxjyh8a22	/	O que acha do livro 'Por que voce nao quer mais ir 'a Igreja'?	"},
{"track":	121	,	 "name": "	O que acha do universalismo?	",	 "length": "	11:56	",	 "file": "	https://www.mediafire.com/file/	fgkez0wtb6urfw8	/	O que acha do universalismo?	"},
{"track":	122	,	 "name": "	O que dizer de quem rouba, mata e estupra e diz crer em Jesus?	",	 "length": "	05:55	",	 "file": "	https://www.mediafire.com/file/	41ku5l8wvdbix8o	/	O que dizer de quem rouba, mata e estupra e diz crer em Jesus?	"},
{"track":	123	,	 "name": "	O que e' a Nova Jerusalem?	",	 "length": "	05:54	",	 "file": "	https://www.mediafire.com/file/	rv2d0vri18a6e6a	/	O que e' a Nova Jerusalem?	"},
{"track":	124	,	 "name": "	O que e' apostasia?	",	 "length": "	03:03	",	 "file": "	https://www.mediafire.com/file/	ptc3938vzps855e	/	O que e' apostasia?	"},
{"track":	125	,	 "name": "	O que era a serpente de bronze?	",	 "length": "	08:56	",	 "file": "	https://www.mediafire.com/file/	6ld91x9n95rcyum	/	O que era a serpente de bronze?	"},
{"track":	126	,	 "name": "	O que fazer agora que me apartei?	",	 "length": "	06:23	",	 "file": "	https://www.mediafire.com/file/	vagqc2ec2a4gtou	/	O que fazer agora que me apartei?	"},
{"track":	127	,	 "name": "	O que fazer com o ciume doentio?	",	 "length": "	23:57	",	 "file": "	https://www.mediafire.com/file/	4px8py6t14va64v	/	O que fazer com o ciume doentio?	"},
{"track":	128	,	 "name": "	O que fazer para me congregar ao nome do Senhor?	",	 "length": "	10:29	",	 "file": "	https://www.mediafire.com/file/	uearopqyircdskh	/	O que fazer para me congregar ao nome do Senhor?	"},
{"track":	129	,	 "name": "	O que fazer se minha esposa nao pensa igual?	",	 "length": "	07:23	",	 "file": "	https://www.mediafire.com/file/	p5oaoqo7s1t36ib	/	O que fazer se minha esposa nao pensa igual?	"},
{"track":	130	,	 "name": "	O que fiz foi um casamento valido?	",	 "length": "	08:19	",	 "file": "	https://www.mediafire.com/file/	fmkar7javyd1o9s	/	O que fiz foi um casamento valido?	"},
{"track":	131	,	 "name": "	O que impede minha comunhao?	",	 "length": "	06:56	",	 "file": "	https://www.mediafire.com/file/	bwsth3fq2qq3qrc	/	O que impede minha comunhao?	"},
{"track":	132	,	 "name": "	O que iremos comer no ceu?	",	 "length": "	06:36	",	 "file": "	https://www.mediafire.com/file/	6dfz1an5m40rrdb	/	O que iremos comer no ceu?	"},
{"track":	133	,	 "name": "	O que nao e' licito ao homem falar?	",	 "length": "	07:51	",	 "file": "	https://www.mediafire.com/file/	rduvicoe6m6dbo7	/	O que nao e' licito ao homem falar?	"},
{"track":	134	,	 "name": "	O que responder aos professores?	",	 "length": "	04:50	",	 "file": "	https://www.mediafire.com/file/	7dit65b7o8zk6c3	/	O que responder aos professores?	"},
{"track":	135	,	 "name": "	O que se exige de um pastor?	",	 "length": "	06:41	",	 "file": "	https://www.mediafire.com/file/	qe9c409xzennec5	/	O que se exige de um pastor?	"},
{"track":	136	,	 "name": "	O que seria comer indignamente a ceia?	",	 "length": "	11:24	",	 "file": "	https://www.mediafire.com/file/	gwdn1h8z04zzgdf	/	O que seria comer indignamente a ceia?	"},
{"track":	137	,	 "name": "	O que significa 'ligar' e 'desligar'?	",	 "length": "	07:00	",	 "file": "	https://www.mediafire.com/file/	rfk6yi6iy4pjswn	/	O que significa 'ligar' e 'desligar'?	"},
{"track":	138	,	 "name": "	O que significa a fe' uma vez dada aos santos?	",	 "length": "	05:52	",	 "file": "	https://www.mediafire.com/file/	hkk7u4x9245yvji	/	O que significa a fe' uma vez dada aos santos?	"},
{"track":	139	,	 "name": "	O que significa batalha espiritual?	",	 "length": "	09:18	",	 "file": "	https://www.mediafire.com/file/	r3jlvp7gjplaia2	/	O que significa batalha espiritual?	"},
{"track":	140	,	 "name": "	O que significa o cao e a porca?	",	 "length": "	04:22	",	 "file": "	https://www.mediafire.com/file/	qnrzdjx35i76uvl	/	O que significa o cao e a porca?	"},
{"track":	141	,	 "name": "	O que significa o castical em Ap 2:5?	",	 "length": "	03:45	",	 "file": "	https://www.mediafire.com/file/	xy0kmctq2exr7do	/	O que significa o castical em Ap 2:5?	"},
{"track":	142	,	 "name": "	O que significa perseverar ate' o fim?	",	 "length": "	06:33	",	 "file": "	https://www.mediafire.com/file/	zbtw1wdgd3g3zsk	/	O que significa perseverar ate' o fim?	"},
{"track":	143	,	 "name": "	O que significa que Jesus levou cativo o cativeiro?	",	 "length": "	05:27	",	 "file": "	https://www.mediafire.com/file/	5jvo48oj11dprcd	/	O que significa que Jesus levou cativo o cativeiro?	"},
{"track":	144	,	 "name": "	O que significa tomar sobre si a propria cruz?	",	 "length": "	04:48	",	 "file": "	https://www.mediafire.com/file/	d1gsjcqwphg7cbx	/	O que significa tomar sobre si a propria cruz?	"},
{"track":	145	,	 "name": "	O que significam 'trevas exteriores'	",	 "length": "	06:33	",	 "file": "	https://www.mediafire.com/file/	7aobkexsf9kew4g	/	O que significam 'trevas exteriores'	"},
{"track":	146	,	 "name": "	O que significam o sangue e a agua?	",	 "length": "	04:30	",	 "file": "	https://www.mediafire.com/file/	dazs396zu11fj8h	/	O que significam o sangue e a agua?	"},
{"track":	147	,	 "name": "	O que significam ouro, incenso e mirra?	",	 "length": "	05:34	",	 "file": "	https://www.mediafire.com/file/	tx25aszij7kluof	/	O que significam ouro, incenso e mirra?	"},
{"track":	148	,	 "name": "	O que tenho pode ser um dom espiritual?	",	 "length": "	15:45	",	 "file": "	https://www.mediafire.com/file/	1dfu4mk8c5cdw8t	/	O que tenho pode ser um dom espiritual?	"},
{"track":	149	,	 "name": "	O que veio primeiro: monoteismo ou politeismo?	",	 "length": "	07:42	",	 "file": "	https://www.mediafire.com/file/	47y7e5fw5ytk6zy	/	O que veio primeiro: monoteismo ou politeismo?	"},
{"track":	150	,	 "name": "	O que voce acha da Biblia anotada por Scofield?	",	 "length": "	05:18	",	 "file": "	https://www.mediafire.com/file/	im8g0mh7dqqz070	/	O que voce acha da Biblia anotada por Scofield?	"},
{"track":	151	,	 "name": "	O que voce acha da mensagem deste pregador?	",	 "length": "	22:19	",	 "file": "	https://www.mediafire.com/file/	7ot5br49me35dd0	/	O que voce acha da mensagem deste pregador?	"},
{"track":	152	,	 "name": "	O que voce acha de politicos cristaos?	",	 "length": "	09:52	",	 "file": "	https://www.mediafire.com/file/	bkvb6sbzn66e23p	/	O que voce acha de politicos cristaos?	"},
{"track":	153	,	 "name": "	O que voce acha desse pregador?	",	 "length": "	08:07	",	 "file": "	https://www.mediafire.com/file/	nrz0nx3b6noa9u1	/	O que voce acha desse pregador?	"},
{"track":	154	,	 "name": "	O que voce acha deste artigo?	",	 "length": "	17:15	",	 "file": "	https://www.mediafire.com/file/	woim8do5tbx1rf1	/	O que voce acha deste artigo?	"},
{"track":	155	,	 "name": "	O que voce acha deste livro de Frank Viola?	",	 "length": "	22:31	",	 "file": "	https://www.mediafire.com/file/	6lql6pe023zuetf	/	O que voce acha deste livro de Frank Viola?	"},
{"track":	156	,	 "name": "	O que voce acha deste texto?	",	 "length": "	07:51	",	 "file": "	https://www.mediafire.com/file/	ggnne11a5jgw7gv	/	O que voce acha deste texto?	"},
{"track":	157	,	 "name": "	O que voce acha do testemunho desta ex-artista?	",	 "length": "	05:15	",	 "file": "	https://www.mediafire.com/file/	4qq3gwqaq5da0cz	/	O que voce acha do testemunho desta ex-artista?	"},
{"track":	158	,	 "name": "	O que voce acha dos jargoes cristaos?	",	 "length": "	08:52	",	 "file": "	https://www.mediafire.com/file/	hw98m84mbmh70q9	/	O que voce acha dos jargoes cristaos?	"},
{"track":	159	,	 "name": "	O que voce acha dos videos sobre os Illuminati?	",	 "length": "	13:19	",	 "file": "	https://www.mediafire.com/file/	rk7rr5y44y48nwz	/	O que voce acha dos videos sobre os Illuminati?	"},
{"track":	160	,	 "name": "	O que voce diz ser? Cristao? Protestante? Evangelico?	",	 "length": "	09:21	",	 "file": "	https://www.mediafire.com/file/	h302hu7g15jxp0e	/	O que voce diz ser? Cristao? Protestante? Evangelico?	"},
{"track":	161	,	 "name": "	O que voce pensa do acelerador de particulas LHC?	",	 "length": "	06:50	",	 "file": "	https://www.mediafire.com/file/	ym8xh58cjyx0a40	/	O que voce pensa do acelerador de particulas LHC?	"},
{"track":	162	,	 "name": "	O que voce pensa dos sonhos e visoes?	",	 "length": "	08:45	",	 "file": "	https://www.mediafire.com/file/	77u1oku61f4y8zw	/	O que voce pensa dos sonhos e visoes?	"},
{"track":	163	,	 "name": "	O rei Salomao praticou homossexualismo?	",	 "length": "	06:24	",	 "file": "	https://www.mediafire.com/file/	fmjhqxivfw99wkb	/	O rei Salomao praticou homossexualismo?	"},
{"track":	164	,	 "name": "	O salvo volta ao estado de Adao antes do pecado?	",	 "length": "	10:17	",	 "file": "	https://www.mediafire.com/file/	xxapaqhwt2b9xo1	/	O salvo volta ao estado de Adao antes do pecado?	"},
{"track":	165	,	 "name": "	O Senhor vem buscar a igreja antes da chegada do anticristo?	",	 "length": "	11:31	",	 "file": "	https://www.mediafire.com/file/	tyzc1wf2tb4lf3s	/	O Senhor vem buscar a igreja antes da chegada do anticristo?	"},
{"track":	166	,	 "name": "	O Senhor vem como ladrao?	",	 "length": "	10:14	",	 "file": "	https://www.mediafire.com/file/	rjiiuj3orjoo9v1	/	O Senhor vem como ladrao?	"},
{"track":	167	,	 "name": "	O Sudario de Turim pode converter alguem?	",	 "length": "	08:20	",	 "file": "	https://www.mediafire.com/file/	glnejo3xash93gc	/	O Sudario de Turim pode converter alguem?	"},
{"track":	168	,	 "name": "	O templo de Jerusalem era a Casa de Deus?	",	 "length": "	04:58	",	 "file": "	https://www.mediafire.com/file/	aep83hjxtmdei5v	/	O templo de Jerusalem era a Casa de Deus?	"},
{"track":	169	,	 "name": "	O testemunho do Senhor foi interrompido?	",	 "length": "	16:50	",	 "file": "	https://www.mediafire.com/file/	6aqa659k7llq6g4	/	O testemunho do Senhor foi interrompido?	"},
{"track":	170	,	 "name": "	O um so' batismo de Ef 4:5 seria o batismo do Espirito?	",	 "length": "	06:23	",	 "file": "	https://www.mediafire.com/file/	qon2ubgu2jooko8	/	O um so' batismo de Ef 4:5 seria o batismo do Espirito?	"},
{"track":	171	,	 "name": "	Onde diz que o crente vai para o ceu?	",	 "length": "	14:43	",	 "file": "	https://www.mediafire.com/file/	8aypg2oey50p0rw	/	Onde diz que o crente vai para o ceu?	"},
{"track":	172	,	 "name": "	Onde encontrar uma igreja biblica?	",	 "length": "	11:08	",	 "file": "	https://www.mediafire.com/file/	gsdl86x7slrjvu8	/	Onde encontrar uma igreja biblica?	"},
{"track":	173	,	 "name": "	Onde esta a Igreja de Cristo?	",	 "length": "	06:36	",	 "file": "	https://www.mediafire.com/file/	k02txak3au4mfhq	/	Onde esta a Igreja de Cristo?	"},
{"track":	174	,	 "name": "	Onde estava Daniel no episodio da estatua?	",	 "length": "	07:31	",	 "file": "	https://www.mediafire.com/file/	r1nbe9k0a3kqugh	/	Onde estava Daniel no episodio da estatua?	"},
{"track":	175	,	 "name": "	Os 144 mil de Apocalipse sao a Igreja?	",	 "length": "	05:18	",	 "file": "	https://www.mediafire.com/file/	4zwag1a0fadu83k	/	Os 144 mil de Apocalipse sao a Igreja?	"},
{"track":	176	,	 "name": "	Os afloramentos do Mar Morto sao o cumprimento da profecia?	",	 "length": "	10:09	",	 "file": "	https://www.mediafire.com/file/	9d5196avd3fm3jb	/	Os afloramentos do Mar Morto sao o cumprimento da profecia?	"},
{"track":	177	,	 "name": "	Os amalequitas ainda existem?	",	 "length": "	12:17	",	 "file": "	https://www.mediafire.com/file/	fxmbgbh62h5txr9	/	Os amalequitas ainda existem?	"},
{"track":	178	,	 "name": "	Os anjos usaram mulheres para procriar?	",	 "length": "	14:22	",	 "file": "	https://www.mediafire.com/file/	ihtxksyrqdz77z7	/	Os anjos usaram mulheres para procriar?	"},
{"track":	179	,	 "name": "	Os bebes que morreram ressuscitarao no arrebatamento?	",	 "length": "	04:43	",	 "file": "	https://www.mediafire.com/file/	trl5z273v7c810d	/	Os bebes que morreram ressuscitarao no arrebatamento?	"},
{"track":	180	,	 "name": "	Os beijos entre Davi e Jonatas provam que eles eram homossexuais?	",	 "length": "	08:05	",	 "file": "	https://www.mediafire.com/file/	3rnz14szrtb8ibc	/	Os beijos entre Davi e Jonatas provam que eles eram homossexuais?	"},
{"track":	181	,	 "name": "	Os caixoes do FEMA sao para exterminio?	",	 "length": "	19:04	",	 "file": "	https://www.mediafire.com/file/	i4iipsddabl4gp7	/	Os caixoes do FEMA sao para exterminio?	"},
{"track":	182	,	 "name": "	Os cristaos devem combater o casamento gay?	",	 "length": "	16:12	",	 "file": "	https://www.mediafire.com/file/	9yrdj67rw8ncw8c	/	Os cristaos devem combater o casamento gay?	"},
{"track":	183	,	 "name": "	Os cristaos serao salvos no dia da ceifa?	",	 "length": "	09:20	",	 "file": "	https://www.mediafire.com/file/	46ielt3fe7e044c	/	Os cristaos serao salvos no dia da ceifa?	"},
{"track":	184	,	 "name": "	Os dias estao sendo abreviados?	",	 "length": "	13:53	",	 "file": "	https://www.mediafire.com/file/	b04v2dffrf1i8d4	/	Os dias estao sendo abreviados?	"},
{"track":	185	,	 "name": "	Os discipulos receberam o Espirito Santo em Joao 20?	",	 "length": "	14:13	",	 "file": "	https://www.mediafire.com/file/	dk2dv5e51cey5vs	/	Os discipulos receberam o Espirito Santo em Joao 20?	"},
{"track":	186	,	 "name": "	Os dons tem uma ordem de importancia?	",	 "length": "	09:53	",	 "file": "	https://www.mediafire.com/file/	r01r61ca314epvx	/	Os dons tem uma ordem de importancia?	"},
{"track":	187	,	 "name": "	Os gigantes sobreviveram ao dilúvio?	",	 "length": "	10:15	",	 "file": "	https://www.mediafire.com/file/	gqbrk2wi5mruqxd	/	Os gigantes sobreviveram ao dilúvio?	"},
{"track":	188	,	 "name": "	Os incredulos verao a ressurreicao e o arrebatamento?	",	 "length": "	15:20	",	 "file": "	https://www.mediafire.com/file/	bh4o7auxzedon1d	/	Os incredulos verao a ressurreicao e o arrebatamento?	"},
{"track":	189	,	 "name": "	Os irmaos precisam saber que pequei?	",	 "length": "	23:27	",	 "file": "	https://www.mediafire.com/file/	a73ib7w2z93iim7	/	Os irmaos precisam saber que pequei?	"},
{"track":	190	,	 "name": "	Os islamitas vao dominar a populacao mundial?	",	 "length": "	06:25	",	 "file": "	https://www.mediafire.com/file/	v76uky566ztryif	/	Os islamitas vao dominar a populacao mundial?	"},
{"track":	191	,	 "name": "	Os mortos estao dormindo?	",	 "length": "	10:57	",	 "file": "	https://www.mediafire.com/file/	20965t39wh113v9	/	Os mortos estao dormindo?	"},
{"track":	192	,	 "name": "	Os mortos perdem a memoria?	",	 "length": "	06:37	",	 "file": "	https://www.mediafire.com/file/	5dfhtmnm199eyny	/	Os mortos perdem a memoria?	"},
{"track":	193	,	 "name": "	Os mortos podem ajudar os vivos?	",	 "length": "	07:53	",	 "file": "	https://www.mediafire.com/file/	qq68a8neyqyltmk	/	Os mortos podem ajudar os vivos?	"},
{"track":	194	,	 "name": "	Os perdidos ficarao decepcionados com Deus?	",	 "length": "	09:13	",	 "file": "	https://www.mediafire.com/file/	43y08mb7403n47f	/	Os perdidos ficarao decepcionados com Deus?	"},
{"track":	195	,	 "name": "	Os perdidos receberao diferentes penas no dia do juizo?	",	 "length": "	05:45	",	 "file": "	https://www.mediafire.com/file/	2543yee4z08fafg	/	Os perdidos receberao diferentes penas no dia do juizo?	"},
{"track":	196	,	 "name": "	Os primeiros cristaos congregavam em sinagogas?	",	 "length": "	03:59	",	 "file": "	https://www.mediafire.com/file/	75sxe1ozoq9hs0a	/	Os primeiros cristaos congregavam em sinagogas?	"},
{"track":	197	,	 "name": "	Os primeiros cristaos frequentavam uma igreja?	",	 "length": "	13:45	",	 "file": "	https://www.mediafire.com/file/	wvr424p6d5s4dre	/	Os primeiros cristaos frequentavam uma igreja?	"},
{"track":	198	,	 "name": "	Os santos podem interceder por nos?	",	 "length": "	12:35	",	 "file": "	https://www.mediafire.com/file/	6i20lyya0iry3tv	/	Os santos podem interceder por nos?	"},
{"track":	199	,	 "name": "	Para onde vai a Igreja do Senhor?	",	 "length": "	06:40	",	 "file": "	https://www.mediafire.com/file/	3gus9yocreh8upp	/	Para onde vai a Igreja do Senhor?	"},
{"track":	200	,	 "name": "	Para que serve a imposicao de maos?	",	 "length": "	05:38	",	 "file": "	https://www.mediafire.com/file/	x632zyo1exxiu64	/	Para que serve a imposicao de maos?	"},
{"track":	201	,	 "name": "	Para ser salvo preciso dar tudo aos pobres?	",	 "length": "	08:21	",	 "file": "	https://www.mediafire.com/file/	h6p0d4w103r9kd3	/	Para ser salvo preciso dar tudo aos pobres?	"},
{"track":	202	,	 "name": "	Para ser salvo preciso ir a frente orar com o pastor?	",	 "length": "	04:55	",	 "file": "	https://www.mediafire.com/file/	qkhl6qiwoc7a3qd	/	Para ser salvo preciso ir a frente orar com o pastor?	"},
{"track":	203	,	 "name": "	Paulo deveria estudar teologia?	",	 "length": "	02:26	",	 "file": "	https://www.mediafire.com/file/	aqxr3gruch95sbi	/	Paulo deveria estudar teologia?	"},
{"track":	204	,	 "name": "	Paulo nao tinha certeza da ressurreicao?	",	 "length": "	06:43	",	 "file": "	https://www.mediafire.com/file/	pptp5p0nuhcnzdd	/	Paulo nao tinha certeza da ressurreicao?	"},
{"track":	205	,	 "name": "	Paulo nao tinha certeza da salvacao?	",	 "length": "	09:18	",	 "file": "	https://www.mediafire.com/file/	9zp4u206zh9jzq5	/	Paulo nao tinha certeza da salvacao?	"},
{"track":	206	,	 "name": "	Paulo tinha duvidas de sua ressurreicao?	",	 "length": "	04:14	",	 "file": "	https://www.mediafire.com/file/	kuu4mt21211i4r9	/	Paulo tinha duvidas de sua ressurreicao?	"},
{"track":	207	,	 "name": "	Paulo usava amuletos para curar?	",	 "length": "	04:56	",	 "file": "	https://www.mediafire.com/file/	72p264a1vefco6d	/	Paulo usava amuletos para curar?	"},
{"track":	208	,	 "name": "	Pedro recebeu cem vezes mais do que deixou?	",	 "length": "	05:23	",	 "file": "	https://www.mediafire.com/file/	p7qzt121uv7swzn	/	Pedro recebeu cem vezes mais do que deixou?	"},
{"track":	209	,	 "name": "	Pessoas do mesmo sexo podem se casar?	",	 "length": "	07:23	",	 "file": "	https://www.mediafire.com/file/	gft7gkbxhu75rp3	/	Pessoas do mesmo sexo podem se casar?	"},
{"track":	210	,	 "name": "	Pessoas do mesmo sexo podem se casar?	",	 "length": "	22:23	",	 "file": "	https://www.mediafire.com/file/	0yhv26cjb7mxz19	/	Pessoas do mesmo sexo podem se casar?	"},
{"track":	211	,	 "name": "	Pode existir mais de uma assembleia em uma cidade?	",	 "length": "	08:54	",	 "file": "	https://www.mediafire.com/file/	ds6l7vuysjv7n3a	/	Pode existir mais de uma assembleia em uma cidade?	"},
{"track":	212	,	 "name": "	Pode me indicar uma igreja para eu congregar?	",	 "length": "	03:22	",	 "file": "	https://www.mediafire.com/file/	nf252rnbe5xcvbx	/	Pode me indicar uma igreja para eu congregar?	"},
{"track":	213	,	 "name": "	Podemos analisar a inteligencia de Cristo?	",	 "length": "	13:01	",	 "file": "	https://www.mediafire.com/file/	s67sirhn17gyyvx	/	Podemos analisar a inteligencia de Cristo?	"},
{"track":	214	,	 "name": "	Podemos apressar a vinda do Senhor?	",	 "length": "	06:14	",	 "file": "	https://www.mediafire.com/file/	r34v8rur4uqdr8o	/	Podemos apressar a vinda do Senhor?	"},
{"track":	215	,	 "name": "	Podemos confiar no Novo Testamento?	",	 "length": "	11:53	",	 "file": "	https://www.mediafire.com/file/	i8pcxavodr2898k	/	Podemos confiar no Novo Testamento?	"},
{"track":	216	,	 "name": "	Podemos congregar de forma independente?	",	 "length": "	04:29	",	 "file": "	https://www.mediafire.com/file/	8qikd4kud9tke9t	/	Podemos congregar de forma independente?	"},
{"track":	217	,	 "name": "	Podemos entender a Trindade?	",	 "length": "	18:54	",	 "file": "	https://www.mediafire.com/file/	6tol9gvj6pyli8u	/	Podemos entender a Trindade?	"},
{"track":	218	,	 "name": "	Podemos falar mal das autoridades?	",	 "length": "	13:22	",	 "file": "	https://www.mediafire.com/file/	3enrfzmchzkafjj	/	Podemos falar mal das autoridades?	"},
{"track":	219	,	 "name": "	Podemos orar ao Espirito Santo ou adora-lo?	",	 "length": "	06:42	",	 "file": "	https://www.mediafire.com/file/	eaj866b692zghqn	/	Podemos orar ao Espirito Santo ou adora-lo?	"},
{"track":	220	,	 "name": "	Podemos usar de recursos de persuasao?	",	 "length": "	14:47	",	 "file": "	https://www.mediafire.com/file/	f8cul0wt7r745do	/	Podemos usar de recursos de persuasao?	"},
{"track":	221	,	 "name": "	Por que a mulher e' vaso mais fraco?	",	 "length": "	09:09	",	 "file": "	https://www.mediafire.com/file/	bbwbh0u4wz0z2z5	/	Por que a mulher e' vaso mais fraco?	"},
{"track":	222	,	 "name": "	Por que ainda nao se cumpriu a profecia de que seria um grande pregador?	",	 "length": "	10:21	",	 "file": "	https://www.mediafire.com/file/	yxa0dv7vfav190i	/	Por que ainda nao se cumpriu a profecia de que seria um grande pregador?	"},
{"track":	223	,	 "name": "	Por que algumas Bíblias foram mutiladas?	",	 "length": "	21:25	",	 "file": "	https://www.mediafire.com/file/	fgqk8lbuz9lhm8m	/	Por que algumas Bíblias foram mutiladas?	"},
{"track":	224	,	 "name": "	Por que alguns prosperam nessas religioes?	",	 "length": "	08:54	",	 "file": "	https://www.mediafire.com/file/	bqzy92ux496o479	/	Por que alguns prosperam nessas religioes?	"},
{"track":	225	,	 "name": "	Por que alguns textos nao falam especificamente de Satanas?	",	 "length": "	08:02	",	 "file": "	https://www.mediafire.com/file/	odsac8zsomdbc3d	/	Por que alguns textos nao falam especificamente de Satanas?	"},
{"track":	226	,	 "name": "	Por que as 7 cartas de Apocalipse sao profeticas?	",	 "length": "	03:52	",	 "file": "	https://www.mediafire.com/file/	esrpqspqn4v9cz6	/	Por que as 7 cartas de Apocalipse sao profeticas?	"},
{"track":	227	,	 "name": "	Por que atentados como o da revista Charlie Hebdo em Paris?	",	 "length": "	05:59	",	 "file": "	https://www.mediafire.com/file/	pz1208uxt2jy92z	/	Por que atentados como o da revista Charlie Hebdo em Paris?	"},
{"track":	228	,	 "name": "	Por que cristaos perseguiram judeus na Segunda Guerra?	",	 "length": "	20:15	",	 "file": "	https://www.mediafire.com/file/	7zioza1899r7hss	/	Por que cristaos perseguiram judeus na Segunda Guerra?	"},
{"track":	229	,	 "name": "	Por que Deus abencoa alguem se isso o fara tropecar?	",	 "length": "	05:52	",	 "file": "	https://www.mediafire.com/file/	1a3qvwnn8h0u3ba	/	Por que Deus abencoa alguem se isso o fara tropecar?	"},
{"track":	230	,	 "name": "	Por que Deus aceitava a poligamia?	",	 "length": "	06:47	",	 "file": "	https://www.mediafire.com/file/	z4s58z7pbj5fkdo	/	Por que Deus aceitava a poligamia?	"},
{"track":	231	,	 "name": "	Por que Deus escolheu Israel?	",	 "length": "	07:06	",	 "file": "	https://www.mediafire.com/file/	ybxum01hhkgh953	/	Por que Deus escolheu Israel?	"},
{"track":	232	,	 "name": "	Por que Deus matou um homem bem intencionado?	",	 "length": "	14:31	",	 "file": "	https://www.mediafire.com/file/	baend26rgns6jn6	/	Por que Deus matou um homem bem intencionado?	"},
{"track":	233	,	 "name": "	Por que Deus proibiu comer da arvore da vida?	",	 "length": "	03:04	",	 "file": "	https://www.mediafire.com/file/	p7jr9f2j8d7agr7	/	Por que Deus proibiu comer da arvore da vida?	"},
{"track":	234	,	 "name": "	Por que Deus quis matar Moises?	",	 "length": "	05:35	",	 "file": "	https://www.mediafire.com/file/	qqs174k94yav9t4	/	Por que Deus quis matar Moises?	"},
{"track":	235	,	 "name": "	Por que devem ocorrer heresias?	",	 "length": "	13:30	",	 "file": "	https://www.mediafire.com/file/	bv01as0t015222c	/	Por que devem ocorrer heresias?	"},
{"track":	236	,	 "name": "	Por que devemos comprar a verdade?	",	 "length": "	06:36	",	 "file": "	https://www.mediafire.com/file/	j3k5ra4cs7795d9	/	Por que devemos comprar a verdade?	"},
{"track":	237	,	 "name": "	Por que devo pagar pelo que deu errado no Eden?	",	 "length": "	06:52	",	 "file": "	https://www.mediafire.com/file/	z2z6gjb99na08gb	/	Por que devo pagar pelo que deu errado no Eden?	"},
{"track":	238	,	 "name": "	Por que Elias precisou responder duas vezes?	",	 "length": "	04:19	",	 "file": "	https://www.mediafire.com/file/	25m9kv1rdyihis3	/	Por que Elias precisou responder duas vezes?	"},
{"track":	239	,	 "name": "	Por que esta profecia nao se cumpriu?	",	 "length": "	05:28	",	 "file": "	https://www.mediafire.com/file/	9dzhubfv6caylk3	/	Por que esta profecia nao se cumpriu?	"},
{"track":	240	,	 "name": "	Por que Exodo nao diz o nome de Farao'?	",	 "length": "	05:36	",	 "file": "	https://www.mediafire.com/file/	fxm3f4o8fhhas44	/	Por que Exodo nao diz o nome de Farao'?	"},
{"track":	241	,	 "name": "	Por que Farao matou apenas meninos?	",	 "length": "	12:30	",	 "file": "	https://www.mediafire.com/file/	51m3i2930djzauc	/	Por que Farao matou apenas meninos?	"},
{"track":	242	,	 "name": "	Por que fico triste no Natal?	",	 "length": "	10:47	",	 "file": "	https://www.mediafire.com/file/	9p90jr7qdpbonid	/	Por que fico triste no Natal?	"},
{"track":	243	,	 "name": "	Por que isso e por que aquilo?	",	 "length": "	09:44	",	 "file": "	https://www.mediafire.com/file/	snaezxr1fzin65r	/	Por que isso e por que aquilo?	"},
{"track":	244	,	 "name": "	Por que Jesus disse para os mortos sepultarem os mortos?	",	 "length": "	05:27	",	 "file": "	https://www.mediafire.com/file/	sfge95cn839i5qh	/	Por que Jesus disse para os mortos sepultarem os mortos?	"},
{"track":	245	,	 "name": "	Por que Jesus e' chamado de Filho do Homem?	",	 "length": "	03:07	",	 "file": "	https://www.mediafire.com/file/	3b2cc77hf865b3m	/	Por que Jesus e' chamado de Filho do Homem?	"},
{"track":	246	,	 "name": "	Por que Jesus falava por parabolas?	",	 "length": "	02:39	",	 "file": "	https://www.mediafire.com/file/	lszse3yctxerwl9	/	Por que Jesus falava por parabolas?	"},
{"track":	247	,	 "name": "	Por que Jesus nao batizava?	",	 "length": "	13:56	",	 "file": "	https://www.mediafire.com/file/	4vyuyprvaamwffn	/	Por que Jesus nao batizava?	"},
{"track":	248	,	 "name": "	Por que Jesus nao curava adulteros?	",	 "length": "	01:42	",	 "file": "	https://www.mediafire.com/file/	8tpk7oeuzxfx6uz	/	Por que Jesus nao curava adulteros?	"},
{"track":	249	,	 "name": "	Por que Jesus nao deixa Maria Madalena toca-lo?	",	 "length": "	10:49	",	 "file": "	https://www.mediafire.com/file/	42p3ltwt27q2t26	/	Por que Jesus nao deixa Maria Madalena toca-lo?	"},
{"track":	250	,	 "name": "	Por que Jesus nao foi onibenevolente?	",	 "length": "	15:25	",	 "file": "	https://www.mediafire.com/file/	b3lvvb0vkcy4vi0	/	Por que Jesus nao foi onibenevolente?	"},
{"track":	251	,	 "name": "	Por que Jesus nao voltou como prometeu em Mateus 10?	",	 "length": "	06:14	",	 "file": "	https://www.mediafire.com/file/	yiqz9h91ke2m5qs	/	Por que Jesus nao voltou como prometeu em Mateus 10?	"},
{"track":	252	,	 "name": "	Por que Joao Batista e' considerado menor?	",	 "length": "	05:33	",	 "file": "	https://www.mediafire.com/file/	opez1zybmeoeu6j	/	Por que Joao Batista e' considerado menor?	"},
{"track":	253	,	 "name": "	Por que mudaram o nome de Jesus?	",	 "length": "	08:39	",	 "file": "	https://www.mediafire.com/file/	utjq68808sfnnht	/	Por que mudaram o nome de Jesus?	"},
{"track":	254	,	 "name": "	Por que nao consigo falar a lingua dos anjos?	",	 "length": "	16:44	",	 "file": "	https://www.mediafire.com/file/	imn23427pwte43x	/	Por que nao consigo falar a lingua dos anjos?	"},
{"track":	255	,	 "name": "	Por que nao consigo me identificar com os irmaos?	",	 "length": "	04:30	",	 "file": "	https://www.mediafire.com/file/	y121x1nwmhswopl	/	Por que nao consigo me identificar com os irmaos?	"},
{"track":	256	,	 "name": "	Por que nao deram agua a Jesus?	",	 "length": "	07:24	",	 "file": "	https://www.mediafire.com/file/	lgoyi4bh2s773d0	/	Por que nao deram agua a Jesus?	"},
{"track":	257	,	 "name": "	Por que nao existe um homem liderando as reunioes?	",	 "length": "	08:40	",	 "file": "	https://www.mediafire.com/file/	ncuoxu34yfq5brb	/	Por que nao existe um homem liderando as reunioes?	"},
{"track":	258	,	 "name": "	Por que nao posso falar?	",	 "length": "	11:10	",	 "file": "	https://www.mediafire.com/file/	77t6xr7rzr6rds8	/	Por que nao posso falar?	"},
{"track":	259	,	 "name": "	Por que nao posso ofertar?	",	 "length": "	09:14	",	 "file": "	https://www.mediafire.com/file/	63lnkq66k8h8qy4	/	Por que nao posso ofertar?	"},
{"track":	260	,	 "name": "	Por que ninguem encontrou a espada inflamada?	",	 "length": "	05:28	",	 "file": "	https://www.mediafire.com/file/	23oerwpfs03evp8	/	Por que ninguem encontrou a espada inflamada?	"},
{"track":	261	,	 "name": "	Por que o Cordeiro foi morto desde a fundacao do mundo?	",	 "length": "	07:31	",	 "file": "	https://www.mediafire.com/file/	d6i9jl3apx48osf	/	Por que o Cordeiro foi morto desde a fundacao do mundo?	"},
{"track":	262	,	 "name": "	Por que o diabo nos tenta se nao pode nos fazer perder a salvacao?	",	 "length": "	08:30	",	 "file": "	https://www.mediafire.com/file/	t5y2w8atflohtke	/	Por que o diabo nos tenta se nao pode nos fazer perder a salvacao?	"},
{"track":	263	,	 "name": "	Por que os cristaos falam tanto em visao?	",	 "length": "	06:21	",	 "file": "	https://www.mediafire.com/file/	up0matr07o8ea8a	/	Por que os cristaos falam tanto em visao?	"},
{"track":	264	,	 "name": "	Por que os discipulos nao reconheceram Jesus?	",	 "length": "	07:49	",	 "file": "	https://www.mediafire.com/file/	gzzylbtdcmn0kmt	/	Por que os discipulos nao reconheceram Jesus?	"},
{"track":	265	,	 "name": "	Por que os pastores nao entendem estas coisas?	",	 "length": "	18:02	",	 "file": "	https://www.mediafire.com/file/	9dd210mdbs5plxd	/	Por que os pastores nao entendem estas coisas?	"},
{"track":	266	,	 "name": "	Por que os timidos nao serao salvos?	",	 "length": "	03:48	",	 "file": "	https://www.mediafire.com/file/	xenx942ajk9y3r7	/	Por que os timidos nao serao salvos?	"},
{"track":	267	,	 "name": "	Por que Pilatos ficou surpreso?	",	 "length": "	11:02	",	 "file": "	https://www.mediafire.com/file/	jrqplgl5xmpbfbr	/	Por que Pilatos ficou surpreso?	"},
{"track":	268	,	 "name": "	Por que se faz violencia ao reino dos ceus para entrar nele?	",	 "length": "	01:35	",	 "file": "	https://www.mediafire.com/file/	mja0gdbdbae2z7o	/	Por que se faz violencia ao reino dos ceus para entrar nele?	"},
{"track":	269	,	 "name": "	Por que Simao nao recebeu o Espirito?	",	 "length": "	07:27	",	 "file": "	https://www.mediafire.com/file/	oozwgcwxymem73c	/	Por que Simao nao recebeu o Espirito?	"},
{"track":	270	,	 "name": "	Por que so Paulo manda as mulheres ficarem caladas?	",	 "length": "	06:01	",	 "file": "	https://www.mediafire.com/file/	w8ki9clccjt12l6	/	Por que so Paulo manda as mulheres ficarem caladas?	"},
{"track":	271	,	 "name": "	Por que solteiros nao podem ter relacoes sexuais?	",	 "length": "	08:19	",	 "file": "	https://www.mediafire.com/file/	ymae6f3zwb716n2	/	Por que solteiros nao podem ter relacoes sexuais?	"},
{"track":	272	,	 "name": "	Por que tanto silencio nas reunioes?	",	 "length": "	20:25	",	 "file": "	https://www.mediafire.com/file/	fij8g1aginr5bbf	/	Por que tanto silencio nas reunioes?	"},
{"track":	273	,	 "name": "	Por que Tiago escreve para doze tribos?	",	 "length": "	07:04	",	 "file": "	https://www.mediafire.com/file/	iqiedeq45540ttd	/	Por que Tiago escreve para doze tribos?	"},
{"track":	274	,	 "name": "	Por que um gentio precisa crer que Jesus e' o Cristo?	",	 "length": "	06:56	",	 "file": "	https://www.mediafire.com/file/	e5tqcyi02lc5de2	/	Por que um gentio precisa crer que Jesus e' o Cristo?	"},
{"track":	275	,	 "name": "	Por que voce divide os dez mandamentos em 5 e 5?	",	 "length": "	06:06	",	 "file": "	https://www.mediafire.com/file/	fk2fbw117kqd9tn	/	Por que voce divide os dez mandamentos em 5 e 5?	"},
{"track":	276	,	 "name": "	Posso abandonar minha esposa?	",	 "length": "	06:20	",	 "file": "	https://www.mediafire.com/file/	5v1c2e946y5ujrb	/	Posso abandonar minha esposa?	"},
{"track":	277	,	 "name": "	Posso aplicar este versiculo em qualquer caso?	",	 "length": "	07:56	",	 "file": "	https://www.mediafire.com/file/	4l71u539eczdq0u	/	Posso aplicar este versiculo em qualquer caso?	"},
{"track":	278	,	 "name": "	Posso aprender apenas lendo a Biblia	",	 "length": "	08:10	",	 "file": "	https://www.mediafire.com/file/	gv8h9n6u3tbvxis	/	Posso aprender apenas lendo a Biblia	"},
{"track":	279	,	 "name": "	Posso evangelizar com folhetos?	",	 "length": "	15:04	",	 "file": "	https://www.mediafire.com/file/	emk3lk82klovifm	/	Posso evangelizar com folhetos?	"},
{"track":	280	,	 "name": "	Posso orar no inicio das aulas?	",	 "length": "	06:14	",	 "file": "	https://www.mediafire.com/file/	gv4zfx6xke3fu4g	/	Posso orar no inicio das aulas?	"},
{"track":	281	,	 "name": "	Posso orar por um animal de estimacao?	",	 "length": "	09:50	",	 "file": "	https://www.mediafire.com/file/	ket4gkc143wudd1	/	Posso orar por um animal de estimacao?	"},
{"track":	282	,	 "name": "	Posso participar de uma cerimonia de batismo?	",	 "length": "	16:12	",	 "file": "	https://www.mediafire.com/file/	7c4pcgr68jtnpnn	/	Posso participar de uma cerimonia de batismo?	"},
{"track":	283	,	 "name": "	Posso ser cortado depois de crer?	",	 "length": "	08:16	",	 "file": "	https://www.mediafire.com/file/	6arvpdrp1b538cz	/	Posso ser cortado depois de crer?	"},
{"track":	284	,	 "name": "	Posso ser cristao e musico profissional?	",	 "length": "	07:26	",	 "file": "	https://www.mediafire.com/file/	8gxoctzn4552sxa	/	Posso ser cristao e musico profissional?	"},
{"track":	285	,	 "name": "	Posso ser denominacional e congregar com voces?	",	 "length": "	03:40	",	 "file": "	https://www.mediafire.com/file/	l11zkthoucttzup	/	Posso ser denominacional e congregar com voces?	"},
{"track":	286	,	 "name": "	Posso servir a Deus em minha denominacao?	",	 "length": "	04:05	",	 "file": "	https://www.mediafire.com/file/	5hphspwr4u3n5ko	/	Posso servir a Deus em minha denominacao?	"},
{"track":	287	,	 "name": "	Posso testemunhar de Cristo na ilegalidade?	",	 "length": "	11:12	",	 "file": "	https://www.mediafire.com/file/	kicf5rapy4onw6h	/	Posso testemunhar de Cristo na ilegalidade?	"},
{"track":	288	,	 "name": "	Posso usar musica para evangelizar?	",	 "length": "	18:00	",	 "file": "	https://www.mediafire.com/file/	2zv3r4pmvgdp1nw	/	Posso usar musica para evangelizar?	"},
{"track":	289	,	 "name": "	Preciso entender para ser salvo?	",	 "length": "	21:33	",	 "file": "	https://www.mediafire.com/file/	fhoaypdr5n0x6zu	/	Preciso entender para ser salvo?	"},
{"track":	290	,	 "name": "	Preciso me esforcar para ser salvo?	",	 "length": "	10:55	",	 "file": "	https://www.mediafire.com/file/	drvejyjvdn9spyt	/	Preciso me esforcar para ser salvo?	"},
{"track":	291	,	 "name": "	Problema de virgula?	",	 "length": "	05:52	",	 "file": "	https://www.mediafire.com/file/	j1lfido3ec3yhdp	/	Problema de virgula?	"},
{"track":	292	,	 "name": "	Profetizar significa prever o futuro?	",	 "length": "	06:42	",	 "file": "	https://www.mediafire.com/file/	5z41nvtt1z4uhvi	/	Profetizar significa prever o futuro?	"},
{"track":	293	,	 "name": "	Quais foram os pecados de Sodoma e Gomorra?	",	 "length": "	08:12	",	 "file": "	https://www.mediafire.com/file/	9d70xxvfudr5jjg	/	Quais foram os pecados de Sodoma e Gomorra?	"},
{"track":	294	,	 "name": "	Quais profissoes sao licitas para um cristao?	",	 "length": "	07:10	",	 "file": "	https://www.mediafire.com/file/	17dpp10243s81zn	/	Quais profissoes sao licitas para um cristao?	"},
{"track":	295	,	 "name": "	Qual a diferenca entre batismo e selo do Espirito?	",	 "length": "	10:17	",	 "file": "	https://www.mediafire.com/file/	p6z9pdmt05zcjg7	/	Qual a diferenca entre batismo e selo do Espirito?	"},
{"track":	296	,	 "name": "	Qual a diferenca entre bencao e milagre?	",	 "length": "	04:39	",	 "file": "	https://www.mediafire.com/file/	k960lw6s89f6f1z	/	Qual a diferenca entre bencao e milagre?	"},
{"track":	297	,	 "name": "	Qual a diferenca entre palavra da sabedoria e ciencia?	",	 "length": "	02:55	",	 "file": "	https://www.mediafire.com/file/	c2jrbh3c5wj1n5j	/	Qual a diferenca entre palavra da sabedoria e ciencia?	"},
{"track":	298	,	 "name": "	Qual a idade minima para ser batizado?	",	 "length": "	05:55	",	 "file": "	https://www.mediafire.com/file/	nfvx9pqf1aracd7	/	Qual a idade minima para ser batizado?	"},
{"track":	299	,	 "name": "	Qual a maneira correta de tratar Satanas?	",	 "length": "	10:18	",	 "file": "	https://www.mediafire.com/file/	o8sb3m48lo06mle	/	Qual a maneira correta de tratar Satanas?	"},
{"track":	300	,	 "name": "	Qual a melhor traducao da Biblia?	",	 "length": "	07:32	",	 "file": "	https://www.mediafire.com/file/	b993pfprsfpaqkv	/	Qual a melhor traducao da Biblia?	"},
{"track":	301	,	 "name": "	Qual a religiao verdadeira?	",	 "length": "	11:52	",	 "file": "	https://www.mediafire.com/file/	nm0zyr0pqywp3n4	/	Qual a religiao verdadeira?	"},
{"track":	302	,	 "name": "	Qual a versao correta de Apocalipse 22:14?	",	 "length": "	06:31	",	 "file": "	https://www.mediafire.com/file/	m4r2gl6dd2fe98i	/	Qual a versao correta de Apocalipse 22:14?	"},
{"track":	303	,	 "name": "	Qual era o nome original do diabo?	",	 "length": "	08:10	",	 "file": "	https://www.mediafire.com/file/	j5dwbbrbccqs6jv	/	Qual era o nome original do diabo?	"},
{"track":	304	,	 "name": "	Qual o passo-a-passo para congregar?	",	 "length": "	19:45	",	 "file": "	https://www.mediafire.com/file/	maps6i7lj20qzlk	/	Qual o passo-a-passo para congregar?	"},
{"track":	305	,	 "name": "	Qual o problema de chamar Jesus de meu Rei?	",	 "length": "	05:32	",	 "file": "	https://www.mediafire.com/file/	g0ws00g6gva4ll0	/	Qual o problema de chamar Jesus de meu Rei?	"},
{"track":	306	,	 "name": "	Qual o problema de cristaos louvarem com instrumentos musicais?	",	 "length": "	14:08	",	 "file": "	https://www.mediafire.com/file/	zlbpliuil4ziupi	/	Qual o problema de cristaos louvarem com instrumentos musicais?	"},
{"track":	307	,	 "name": "	Qual o sentido de tudo isso?	",	 "length": "	03:45	",	 "file": "	https://www.mediafire.com/file/	uue7826e41dw3dh	/	Qual o sentido de tudo isso?	"},
{"track":	308	,	 "name": "	Qual o significado espiritual das coisas e circunstancias?	",	 "length": "	17:24	",	 "file": "	https://www.mediafire.com/file/	228le5rdrmhp3m1	/	Qual o significado espiritual das coisas e circunstancias?	"},
{"track":	309	,	 "name": "	Qual pecado e' mais grave?	",	 "length": "	09:43	",	 "file": "	https://www.mediafire.com/file/	6ro2ua6z0h40b7j	/	Qual pecado e' mais grave?	"},
{"track":	310	,	 "name": "	Qual roupa usar nas reunioes?	",	 "length": "	19:20	",	 "file": "	https://www.mediafire.com/file/	uhoq9iv1scrweci	/	Qual roupa usar nas reunioes?	"},
{"track":	311	,	 "name": "	Qual versao da Biblia voce usa?	",	 "length": "	07:07	",	 "file": "	https://www.mediafire.com/file/	rrucfzci0y2b679	/	Qual versao da Biblia voce usa?	"},
{"track":	312	,	 "name": "	Qualquer cristao pode participar da ceia?	",	 "length": "	10:03	",	 "file": "	https://www.mediafire.com/file/	ab9lvb6ik71v8uc	/	Qualquer cristao pode participar da ceia?	"},
{"track":	313	,	 "name": "	Qualquer um pode participar da ceia?	",	 "length": "	05:59	",	 "file": "	https://www.mediafire.com/file/	zstu2o3herpag8a	/	Qualquer um pode participar da ceia?	"},
{"track":	314	,	 "name": "	Quando a pessoa recebe o Espirito Santo?	",	 "length": "	10:55	",	 "file": "	https://www.mediafire.com/file/	qhdjg5g2qgyx7tg	/	Quando a pessoa recebe o Espirito Santo?	"},
{"track":	315	,	 "name": "	Quando foi que Balaao ensinou Balaque a fazer Israel pecar?	",	 "length": "	05:06	",	 "file": "	https://www.mediafire.com/file/	25kssaca01jlam9	/	Quando foi que Balaao ensinou Balaque a fazer Israel pecar?	"},
{"track":	316	,	 "name": "	Quando foi que Jesus morreu?	",	 "length": "	06:09	",	 "file": "	https://www.mediafire.com/file/	j8mt99m3w5n6da5	/	Quando foi que Jesus morreu?	"},
{"track":	317	,	 "name": "	Quanto tempo vive o homem?	",	 "length": "	03:35	",	 "file": "	https://www.mediafire.com/file/	2mi84d2axmd4mtf	/	Quanto tempo vive o homem?	"},
{"track":	318	,	 "name": "	Quantos apostolos existem?	",	 "length": "	03:42	",	 "file": "	https://www.mediafire.com/file/	kq589h9ov1l0mjt	/	Quantos apostolos existem?	"},
{"track":	319	,	 "name": "	Quantos evangelhos existem?	",	 "length": "	11:47	",	 "file": "	https://www.mediafire.com/file/	6dyy2qrhb21fodz	/	Quantos evangelhos existem?	"},
{"track":	320	,	 "name": "	Que Biblia devo ler com meus filhos?	",	 "length": "	08:23	",	 "file": "	https://www.mediafire.com/file/	6ktcn8k7qs2wb1x	/	Que Biblia devo ler com meus filhos?	"},
{"track":	321	,	 "name": "	Que coisas os discipulos nao podiam suportar em Jo 16:12?	",	 "length": "	04:57	",	 "file": "	https://www.mediafire.com/file/	j6obcajhl5j7t45	/	Que coisas os discipulos nao podiam suportar em Jo 16:12?	"},
{"track":	322	,	 "name": "	Que livro ler para entender a diferença entre Israel e Igreja?	",	 "length": "	14:13	",	 "file": "	https://www.mediafire.com/file/	702nx8cdq6riq9q	/	Que livro ler para entender a diferença entre Israel e Igreja?	"},
{"track":	323	,	 "name": "	Que profecia fala de ressurreicao no terceiro dia?	",	 "length": "	08:43	",	 "file": "	https://www.mediafire.com/file/	yrmat4eoq8ilz8l	/	Que profecia fala de ressurreicao no terceiro dia?	"},
{"track":	324	,	 "name": "	Que profeta chamou Jesus de Nazareno?	",	 "length": "	03:49	",	 "file": "	https://www.mediafire.com/file/	inddtnttefic633	/	Que profeta chamou Jesus de Nazareno?	"},
{"track":	325	,	 "name": "	Que regime politico Deus aprova?	",	 "length": "	11:52	",	 "file": "	https://www.mediafire.com/file/	vbn7ecg8zq1l8kq	/	Que regime politico Deus aprova?	"},
{"track":	326	,	 "name": "	Quem  pode falar nas reuniões?	",	 "length": "	11:41	",	 "file": "	https://www.mediafire.com/file/	urg6w084y3pd05q	/	Quem  pode falar nas reuniões?	"},
{"track":	327	,	 "name": "	Quem diz 'Senhor, Senhor' nao e' irmao?	",	 "length": "	08:31	",	 "file": "	https://www.mediafire.com/file/	exzi5xjab128fw2	/	Quem diz 'Senhor, Senhor' nao e' irmao?	"},
{"track":	328	,	 "name": "	Quem e' a 'senhora eleita' de 2 Joao 1:1?	",	 "length": "	03:39	",	 "file": "	https://www.mediafire.com/file/	017db3a2ues6m28	/	Quem e' a 'senhora eleita' de 2 Joao 1:1?	"},
{"track":	329	,	 "name": "	Quem e' a serpente?	",	 "length": "	02:09	",	 "file": "	https://www.mediafire.com/file/	9u0cddlua7ru72d	/	Quem e' a serpente?	"},
{"track":	330	,	 "name": "	Quem esta presente: o Senhor ou o Espirito?	",	 "length": "	16:59	",	 "file": "	https://www.mediafire.com/file/	5ty805x4sjeb4df	/	Quem esta presente: o Senhor ou o Espirito?	"},
{"track":	331	,	 "name": "	Quem faz parte do pequeno rebanho?	",	 "length": "	07:51	",	 "file": "	https://www.mediafire.com/file/	38y3cxrsxp966eq	/	Quem faz parte do pequeno rebanho?	"},
{"track":	332	,	 "name": "	Quem foi responsavel pela morte de Jesus?	",	 "length": "	03:42	",	 "file": "	https://www.mediafire.com/file/	6v8kjg7pmolmca0	/	Quem foi responsavel pela morte de Jesus?	"},
{"track":	333	,	 "name": "	Quem levou Davi a fazer o censo: Deus ou o diabo?	",	 "length": "	05:17	",	 "file": "	https://www.mediafire.com/file/	k4sdwnhaqfm3z3m	/	Quem levou Davi a fazer o censo: Deus ou o diabo?	"},
{"track":	334	,	 "name": "	Quem morre no ato do adulterio perde a salvacao?	",	 "length": "	07:38	",	 "file": "	https://www.mediafire.com/file/	dmc9zxl94zj81jz	/	Quem morre no ato do adulterio perde a salvacao?	"},
{"track":	335	,	 "name": "	Quem nasce de novo ja' esta batizado?	",	 "length": "	06:13	",	 "file": "	https://www.mediafire.com/file/	ykou8v5o5k7glpd	/	Quem nasce de novo ja' esta batizado?	"},
{"track":	336	,	 "name": "	Quem pecar deve ser excomungado?	",	 "length": "	15:13	",	 "file": "	https://www.mediafire.com/file/	q76cyxw9azgem7b	/	Quem pecar deve ser excomungado?	"},
{"track":	337	,	 "name": "	Quem pisa o Filho de Deus?	",	 "length": "	09:07	",	 "file": "	https://www.mediafire.com/file/	grj147s3lif742s	/	Quem pisa o Filho de Deus?	"},
{"track":	338	,	 "name": "	Quem sao os 'caes' de Filipenses 3?	",	 "length": "	05:11	",	 "file": "	https://www.mediafire.com/file/	ummc3prmg36cbnz	/	Quem sao os 'caes' de Filipenses 3?	"},
{"track":	339	,	 "name": "	Quem sao os bodes e ovelhas de Mateus 25?	",	 "length": "	13:29	",	 "file": "	https://www.mediafire.com/file/	y65uwok042jw44b	/	Quem sao os bodes e ovelhas de Mateus 25?	"},
{"track":	340	,	 "name": "	Quem sao os lideres?	",	 "length": "	02:46	",	 "file": "	https://www.mediafire.com/file/	l9u6oszjs9bpaqo	/	Quem sao os lideres?	"},
{"track":	341	,	 "name": "	Quem sao os outros que trabalharam?	",	 "length": "	07:10	",	 "file": "	https://www.mediafire.com/file/	ba7v1btyathuxm6	/	Quem sao os outros que trabalharam?	"},
{"track":	342	,	 "name": "	Quem sao os pastores de Hb 13:17?	",	 "length": "	04:06	",	 "file": "	https://www.mediafire.com/file/	45c7mc241k15w48	/	Quem sao os pastores de Hb 13:17?	"},
{"track":	343	,	 "name": "	Quem sao os pastores de Hebreus 13?	",	 "length": "	13:44	",	 "file": "	https://www.mediafire.com/file/	eocvrcm2e1d3wow	/	Quem sao os pastores de Hebreus 13?	"},
{"track":	344	,	 "name": "	Quem sao os que tem a mente de Cristo?	",	 "length": "	04:03	",	 "file": "	https://www.mediafire.com/file/	h7lkmlws8d3k16x	/	Quem sao os que tem a mente de Cristo?	"},
{"track":	345	,	 "name": "	Quem serao os mortos de Zacarias 13?	",	 "length": "	03:57	",	 "file": "	https://www.mediafire.com/file/	dmeddp1vcvk15fa	/	Quem serao os mortos de Zacarias 13?	"},
{"track":	346	,	 "name": "	Quer ser membro da minha igreja?	",	 "length": "	05:09	",	 "file": "	https://www.mediafire.com/file/	5kma730f7i2t2bu	/	Quer ser membro da minha igreja?	"},
{"track":	347	,	 "name": "	Recebemos o Espirito quando somos batizados nas aguas?	",	 "length": "	21:05	",	 "file": "	https://www.mediafire.com/file/	9zn7777eg7i7u5g	/	Recebemos o Espirito quando somos batizados nas aguas?	"},
{"track":	348	,	 "name": "	Recebi o espirito de sabedoria e revelacao?	",	 "length": "	02:57	",	 "file": "	https://www.mediafire.com/file/	s2jbu4almcn8q15	/	Recebi o espirito de sabedoria e revelacao?	"},
{"track":	349	,	 "name": "	Responder ou nao responder?	",	 "length": "	03:04	",	 "file": "	https://www.mediafire.com/file/	274cugqev9dn3rv	/	Responder ou nao responder?	"},
{"track":	350	,	 "name": "	Romanos 8:1 foi adulterado?	",	 "length": "	11:12	",	 "file": "	https://www.mediafire.com/file/	4zkgk77gia0pld6	/	Romanos 8:1 foi adulterado?	"},
{"track":	351	,	 "name": "	Samuel voltou dos mortos para falar com Saul?	",	 "length": "	06:47	",	 "file": "	https://www.mediafire.com/file/	5485x29kz1ha6np	/	Samuel voltou dos mortos para falar com Saul?	"},
{"track":	352	,	 "name": "	Satanas ja foi expulso do ceu?	",	 "length": "	08:28	",	 "file": "	https://www.mediafire.com/file/	6bcego3url04kp6	/	Satanas ja foi expulso do ceu?	"},
{"track":	353	,	 "name": "	Satanas nao pode tocar no crente?	",	 "length": "	05:15	",	 "file": "	https://www.mediafire.com/file/	0iqs3kbsl90u08a	/	Satanas nao pode tocar no crente?	"},
{"track":	354	,	 "name": "	Satanas pode assumir a forma humana?	",	 "length": "	05:00	",	 "file": "	https://www.mediafire.com/file/	ffp56r4x257w187	/	Satanas pode assumir a forma humana?	"},
{"track":	355	,	 "name": "	Satanas pode influenciar um crente?	",	 "length": "	06:44	",	 "file": "	https://www.mediafire.com/file/	7nlq3dnu1x8j28y	/	Satanas pode influenciar um crente?	"},
{"track":	356	,	 "name": "	Satanas pode ler nossos pensamentos?	",	 "length": "	04:55	",	 "file": "	https://www.mediafire.com/file/	pzrf4dzdxcra91i	/	Satanas pode ler nossos pensamentos?	"},
{"track":	357	,	 "name": "	Se a carne e' fraca, como viver a vida crista?	",	 "length": "	05:40	",	 "file": "	https://www.mediafire.com/file/	kj00tlodo4vw6hx	/	Se a carne e' fraca, como viver a vida crista?	"},
{"track":	358	,	 "name": "	Se a mulher nao pode ensinar e' porque ela e' incapaz de aprender?	",	 "length": "	07:59	",	 "file": "	https://www.mediafire.com/file/	4xl7yanpb36u385	/	Se a mulher nao pode ensinar e' porque ela e' incapaz de aprender?	"},
{"track":	359	,	 "name": "	Se Deus quer que todos sejam salvos, por que nao salva todos?	",	 "length": "	07:52	",	 "file": "	https://www.mediafire.com/file/	tl3es2n4tv7d665	/	Se Deus quer que todos sejam salvos, por que nao salva todos?	"},
{"track":	360	,	 "name": "	Se Deus sabe como vai terminar por que continua seu projeto?	",	 "length": "	04:57	",	 "file": "	https://www.mediafire.com/file/	m8p14x7phu25ijp	/	Se Deus sabe como vai terminar por que continua seu projeto?	"},
{"track":	361	,	 "name": "	Se Deus usou Debora por que a mulher deve ficar calada?	",	 "length": "	11:32	",	 "file": "	https://www.mediafire.com/file/	o1qm94mf2sl28ao	/	Se Deus usou Debora por que a mulher deve ficar calada?	"},
{"track":	362	,	 "name": "	Se eu perder a fe' perco a salvacao?	",	 "length": "	10:27	",	 "file": "	https://www.mediafire.com/file/	pvmlz76u668j83x	/	Se eu perder a fe' perco a salvacao?	"},
{"track":	363	,	 "name": "	Se Jesus e' Deus imutavel, como mudou para ser Homem?	",	 "length": "	09:28	",	 "file": "	https://www.mediafire.com/file/	bwmi7wztzxnw19g	/	Se Jesus e' Deus imutavel, como mudou para ser Homem?	"},
{"track":	364	,	 "name": "	Se Jesus nao podia ser apedrejado por que apedrejaram Estevao?	",	 "length": "	09:37	",	 "file": "	https://www.mediafire.com/file/	u997ztwm46wdd8c	/	Se Jesus nao podia ser apedrejado por que apedrejaram Estevao?	"},
{"track":	365	,	 "name": "	Se Maria era pecadora, por que Jesus nao?	",	 "length": "	09:05	",	 "file": "	https://www.mediafire.com/file/	l2a6929xvksv779	/	Se Maria era pecadora, por que Jesus nao?	"},
{"track":	366	,	 "name": "	Se mulheres nao podem falar, como as filhas de Filipe profetizavam?	",	 "length": "	06:23	",	 "file": "	https://www.mediafire.com/file/	4x57u439r8c3pkg	/	Se mulheres nao podem falar, como as filhas de Filipe profetizavam?	"},
{"track":	367	,	 "name": "	Se nao congregar assim estarei perdido?	",	 "length": "	12:22	",	 "file": "	https://www.mediafire.com/file/	rxf848n6muc5xdc	/	Se nao congregar assim estarei perdido?	"},
{"track":	368	,	 "name": "	Se nao permanecer na fe' perco a salvacao?	",	 "length": "	06:21	",	 "file": "	https://www.mediafire.com/file/	77uy9ors6s0c73f	/	Se nao permanecer na fe' perco a salvacao?	"},
{"track":	369	,	 "name": "	Se o justo nao iria mendigar, por que Lazaro era mendigo?	",	 "length": "	06:26	",	 "file": "	https://www.mediafire.com/file/	scc6nmzdhg9ojwb	/	Se o justo nao iria mendigar, por que Lazaro era mendigo?	"},
{"track":	370	,	 "name": "	Se um livro me faz bem isso faz dele um livro bom?	",	 "length": "	06:42	",	 "file": "	https://www.mediafire.com/file/	ipsaiobhjl10sr2	/	Se um livro me faz bem isso faz dele um livro bom?	"},
{"track":	371	,	 "name": "	Sera que nao creio no verdadeiro Jesus?	",	 "length": "	20:01	",	 "file": "	https://www.mediafire.com/file/	fe8avpgt1q43z1f	/	Sera que nao creio no verdadeiro Jesus?	"},
{"track":	372	,	 "name": "	Sera' que estou congregado sobre o fundamento da Palavra?	",	 "length": "	14:19	",	 "file": "	https://www.mediafire.com/file/	xp7ytivrca18kx2	/	Sera' que estou congregado sobre o fundamento da Palavra?	"},
{"track":	373	,	 "name": "	Sera' que nao estou congregado ao nome do Senhor?	",	 "length": "	13:28	",	 "file": "	https://www.mediafire.com/file/	u29cmarki8v91bo	/	Sera' que nao estou congregado ao nome do Senhor?	"},
{"track":	374	,	 "name": "	Serei feliz se crer em Jesus?	",	 "length": "	20:11	",	 "file": "	https://www.mediafire.com/file/	xma83cqoxhyjvfx	/	Serei feliz se crer em Jesus?	"},
{"track":	375	,	 "name": "	Seria a Igreja a continuacao de Israel?	",	 "length": "	14:08	",	 "file": "	https://www.mediafire.com/file/	13n1ys144jlb1rj	/	Seria a Igreja a continuacao de Israel?	"},
{"track":	376	,	 "name": "	Seria Deus o criador do mal?	",	 "length": "	02:57	",	 "file": "	https://www.mediafire.com/file/	ll30zoqkdrvy3tn	/	Seria Deus o criador do mal?	"},
{"track":	377	,	 "name": "	Seria o cristao individualmente igreja?	",	 "length": "	07:44	",	 "file": "	https://www.mediafire.com/file/	bui1q5bzigu6zqu	/	Seria o cristao individualmente igreja?	"},
{"track":	378	,	 "name": "	Seria o Genesis historinha de crianca?	",	 "length": "	07:11	",	 "file": "	https://www.mediafire.com/file/	ykl2itpbf39a95k	/	Seria o Genesis historinha de crianca?	"},
{"track":	379	,	 "name": "	Seria possivel Jesus pecar?	",	 "length": "	05:04	",	 "file": "	https://www.mediafire.com/file/	3g2eomp22yxf5l8	/	Seria possivel Jesus pecar?	"},
{"track":	380	,	 "name": "	Seriam os personagens de 1 Samuel figuras?	",	 "length": "	10:05	",	 "file": "	https://www.mediafire.com/file/	jpny8tdkj90do39	/	Seriam os personagens de 1 Samuel figuras?	"},
{"track":	381	,	 "name": "	Servir a Deus restabelece minha comunhao?	",	 "length": "	12:54	",	 "file": "	https://www.mediafire.com/file/	jbombgfr7pqczpg	/	Servir a Deus restabelece minha comunhao?	"},
{"track":	382	,	 "name": "	Servos perdem a salvacao?	",	 "length": "	12:39	",	 "file": "	https://www.mediafire.com/file/	yxt6a06a6h94s0k	/	Servos perdem a salvacao?	"},
{"track":	383	,	 "name": "	So' a Igreja Catolica pode interpretar a Biblia?	",	 "length": "	05:40	",	 "file": "	https://www.mediafire.com/file/	4ky3w66eb6dxg4u	/	So' a Igreja Catolica pode interpretar a Biblia?	"},
{"track":	384	,	 "name": "	Somos criaturas ou filhos de Deus?	",	 "length": "	16:56	",	 "file": "	https://www.mediafire.com/file/	51fqije3qv3l2bs	/	Somos criaturas ou filhos de Deus?	"},
{"track":	385	,	 "name": "	Somos o testemunho?	",	 "length": "	09:01	",	 "file": "	https://www.mediafire.com/file/	b72lj4oz4gua1ft	/	Somos o testemunho?	"},
{"track":	386	,	 "name": "	Somos salvos pela justiça e santidade de Cristo?	",	 "length": "	06:46	",	 "file": "	https://www.mediafire.com/file/	mfg6vlxzq9ktyr6	/	Somos salvos pela justiça e santidade de Cristo?	"},
{"track":	387	,	 "name": "	Somos tentados pelo diabo como Jesus foi tentado?	",	 "length": "	08:21	",	 "file": "	https://www.mediafire.com/file/	d01l0j3zzc5cead	/	Somos tentados pelo diabo como Jesus foi tentado?	"},
{"track":	388	,	 "name": "	Somos todos macacos?	",	 "length": "	22:00	",	 "file": "	https://www.mediafire.com/file/	apruishxfsz0ui5	/	Somos todos macacos?	"},
{"track":	389	,	 "name": "	Sou iniqua por nao estar em comunhao?	",	 "length": "	10:02	",	 "file": "	https://www.mediafire.com/file/	a97kegaek5ccdh0	/	Sou iniqua por nao estar em comunhao?	"},
{"track":	390	,	 "name": "	Sou salvo exclusivamente por graca?	",	 "length": "	12:51	",	 "file": "	https://www.mediafire.com/file/	lgnx62er47hy4gd	/	Sou salvo exclusivamente por graca?	"},
{"track":	391	,	 "name": "	Sua meta e' ir para o ceu?	",	 "length": "	04:42	",	 "file": "	https://www.mediafire.com/file/	wc6e6adsyja6138	/	Sua meta e' ir para o ceu?	"},
{"track":	392	,	 "name": "	Tamar queria mesmo cometer incesto?	",	 "length": "	08:49	",	 "file": "	https://www.mediafire.com/file/	oi335h1ilsk8w11	/	Tamar queria mesmo cometer incesto?	"},
{"track":	393	,	 "name": "	Teria Judas citado o Livro de Enoque?	",	 "length": "	04:50	",	 "file": "	https://www.mediafire.com/file/	yxj30pngylc6n9n	/	Teria Judas citado o Livro de Enoque?	"},
{"track":	394	,	 "name": "	Tito abandonou Paulo?	",	 "length": "	04:57	",	 "file": "	https://www.mediafire.com/file/	25p8yj32yxba8r6	/	Tito abandonou Paulo?	"},
{"track":	395	,	 "name": "	Tocar no ungido de Deus significa falar mal do pastor?	",	 "length": "	10:48	",	 "file": "	https://www.mediafire.com/file/	987m223gbezbx6c	/	Tocar no ungido de Deus significa falar mal do pastor?	"},
{"track":	396	,	 "name": "	Toda denominacao e' uma seita?	",	 "length": "	10:58	",	 "file": "	https://www.mediafire.com/file/	3x24vxjrqrxee3h	/	Toda denominacao e' uma seita?	"},
{"track":	397	,	 "name": "	Todos os salvos irao para o ceu?	",	 "length": "	07:15	",	 "file": "	https://www.mediafire.com/file/	jv6tystmf457gwd	/	Todos os salvos irao para o ceu?	"},
{"track":	398	,	 "name": "	Todos serao salvos no final?	",	 "length": "	08:02	",	 "file": "	https://www.mediafire.com/file/	rpy6bdj02n6xljb	/	Todos serao salvos no final?	"},
{"track":	399	,	 "name": "	Um anjo apareceu na igreja?	",	 "length": "	03:59	",	 "file": "	https://www.mediafire.com/file/	a4qy3a95zy8d5jw	/	Um anjo apareceu na igreja?	"},
{"track":	400	,	 "name": "	Um católico pode ser salvo?	",	 "length": "	12:24	",	 "file": "	https://www.mediafire.com/file/	9mn1a6zxuck9ucc	/	Um católico pode ser salvo?	"},
{"track":	401	,	 "name": "	Um crente pode perder o Espirito Santo?	",	 "length": "	19:33	",	 "file": "	https://www.mediafire.com/file/	p3n8mtep83xoro9	/	Um crente pode perder o Espirito Santo?	"},
{"track":	402	,	 "name": "	Um crente pode perder sua salvacao?	",	 "length": "	06:49	",	 "file": "	https://www.mediafire.com/file/	hbirajj877b7i3a	/	Um crente pode perder sua salvacao?	"},
{"track":	403	,	 "name": "	Um crente que se suicida perde a salvação?	",	 "length": "	05:26	",	 "file": "	https://www.mediafire.com/file/	s673eu2frm23wux	/	Um crente que se suicida perde a salvação?	"},
{"track":	404	,	 "name": "	Um cristao nao deve fazer dividas?	",	 "length": "	08:15	",	 "file": "	https://www.mediafire.com/file/	7c4ns721p34hkqs	/	Um cristao nao deve fazer dividas?	"},
{"track":	405	,	 "name": "	Um cristao pode participar de greves?	",	 "length": "	10:38	",	 "file": "	https://www.mediafire.com/file/	t0ynukbilbg5qvk	/	Um cristao pode participar de greves?	"},
{"track":	406	,	 "name": "	Um cristao pode pertencer a maconaria?	",	 "length": "	13:59	",	 "file": "	https://www.mediafire.com/file/	hw9euj1r8p6n4e6	/	Um cristao pode pertencer a maconaria?	"},
{"track":	407	,	 "name": "	Um cristao pode processar outro?	",	 "length": "	14:22	",	 "file": "	https://www.mediafire.com/file/	na5euokx7awmjse	/	Um cristao pode processar outro?	"},
{"track":	408	,	 "name": "	Um cristao pode ser ator ou atriz?	",	 "length": "	13:13	",	 "file": "	https://www.mediafire.com/file/	x2b2fuu64afxu2p	/	Um cristao pode ser ator ou atriz?	"},
{"track":	409	,	 "name": "	Um cristao pode ser vendedor?	",	 "length": "	09:31	",	 "file": "	https://www.mediafire.com/file/	6a6l566vn3iau3c	/	Um cristao pode ser vendedor?	"},
{"track":	410	,	 "name": "	Um profeta pode descobrir senhas bancarias?	",	 "length": "	07:51	",	 "file": "	https://www.mediafire.com/file/	an1lwoccdl3053y	/	Um profeta pode descobrir senhas bancarias?	"},
{"track":	411	,	 "name": "	Uma denominacao em uma cidade e' a igreja no local?	",	 "length": "	04:59	",	 "file": "	https://www.mediafire.com/file/	t54c4e55ms3srt1	/	Uma denominacao em uma cidade e' a igreja no local?	"},
{"track":	412	,	 "name": "	Uma vez salvo, salvo para sempre?	",	 "length": "	10:14	",	 "file": "	https://www.mediafire.com/file/	judydt3y6jjoozh	/	Uma vez salvo, salvo para sempre?	"},
{"track":	413	,	 "name": "	Uns vao ao Pai e outros ao Filho?	",	 "length": "	08:49	",	 "file": "	https://www.mediafire.com/file/	fzbojbnh5b0jel8	/	Uns vao ao Pai e outros ao Filho?	"},
{"track":	414	,	 "name": "	Usar drogas e' pecado?	",	 "length": "	05:40	",	 "file": "	https://www.mediafire.com/file/	x124mz1t44fqj8o	/	Usar drogas e' pecado?	"},
{"track":	415	,	 "name": "	Voce acredita em 'atos profeticos'	",	 "length": "	16:55	",	 "file": "	https://www.mediafire.com/file/	8ep866477ppcpop	/	Voce acredita em 'atos profeticos'	"},
{"track":	416	,	 "name": "	Voce acredita na descoberta da Arca da Alianca?	",	 "length": "	09:06	",	 "file": "	https://www.mediafire.com/file/	i58n3djrz84s03q	/	Voce acredita na descoberta da Arca da Alianca?	"},
{"track":	417	,	 "name": "	Voce acredita na descoberta da Arca da Alianca?	",	 "length": "	12:43	",	 "file": "	https://www.mediafire.com/file/	sbjl9pvsssfn20b	/	Voce acredita na descoberta da Arca da Alianca?	"},
{"track":	418	,	 "name": "	Voce acredita no nigeriano que ressuscitou?	",	 "length": "	13:48	",	 "file": "	https://www.mediafire.com/file/	24y5kod22vq8wlb	/	Voce acredita no nigeriano que ressuscitou?	"},
{"track":	419	,	 "name": "	Voce beberia agua com colera?	",	 "length": "	07:58	",	 "file": "	https://www.mediafire.com/file/	1rjqzso7cmve1ak	/	Voce beberia agua com colera?	"},
{"track":	420	,	 "name": "	Voce cre na uncao financeira?	",	 "length": "	08:15	",	 "file": "	https://www.mediafire.com/file/	vk0zmck0s04wxgm	/	Voce cre na uncao financeira?	"},
{"track":	421	,	 "name": "	Voce diz que a salvacao esta garantida sem perseverar?	",	 "length": "	13:19	",	 "file": "	https://www.mediafire.com/file/	tujj2i83exzncnw	/	Voce diz que a salvacao esta garantida sem perseverar?	"},
{"track":	422	,	 "name": "	Você e' convidado para falar em igrejas e programas de TV?	",	 "length": "	09:49	",	 "file": "	https://www.mediafire.com/file/	w7d6ixl15liym6t	/	Você e' convidado para falar em igrejas e programas de TV?	"},
{"track":	423	,	 "name": "	Voce ensina as pessoas a viverem no Egito?	",	 "length": "	19:11	",	 "file": "	https://www.mediafire.com/file/	7ql23vcn6c7igvb	/	Voce ensina as pessoas a viverem no Egito?	"},
{"track":	424	,	 "name": "	Voce faz parte da 'igreja nas casas'?	",	 "length": "	08:43	",	 "file": "	https://www.mediafire.com/file/	j5yb54m5utifb7u	/	Voce faz parte da 'igreja nas casas'?	"},
{"track":	425	,	 "name": "	Voce leu 'Cacadores de Deus'?	",	 "length": "	07:26	",	 "file": "	https://www.mediafire.com/file/	z6jdxqavoqbb99g	/	Voce leu 'Cacadores de Deus'?	"},
{"track":	426	,	 "name": "	Voce me perdoa?	",	 "length": "	13:40	",	 "file": "	https://www.mediafire.com/file/	ahdhfgl6zm5us56	/	Voce me perdoa?	"},
{"track":	427	,	 "name": "	Voce nao cre na cura divina?	",	 "length": "	11:59	",	 "file": "	https://www.mediafire.com/file/	05xi0njitpgz5e3	/	Voce nao cre na cura divina?	"},
{"track":	428	,	 "name": "	Voce nao cre nas bencaos de Deus para o crente?	",	 "length": "	07:50	",	 "file": "	https://www.mediafire.com/file/	6xcfdy9wkds49ad	/	Voce nao cre nas bencaos de Deus para o crente?	"},
{"track":	429	,	 "name": "	Voce nao deve desculpas aos pentecostais que ofendeu?	",	 "length": "	11:41	",	 "file": "	https://www.mediafire.com/file/	94998ny9vdilh0n	/	Voce nao deve desculpas aos pentecostais que ofendeu?	"},
{"track":	430	,	 "name": "	Voce nao estara' no Juizo Final?	",	 "length": "	06:23	",	 "file": "	https://www.mediafire.com/file/	c10aec84w4qculu	/	Voce nao estara' no Juizo Final?	"},
{"track":	431	,	 "name": "	Voce nao tem fe' na humanidade?	",	 "length": "	14:20	",	 "file": "	https://www.mediafire.com/file/	gg7b61922k6m4ix	/	Voce nao tem fe' na humanidade?	"},
{"track":	432	,	 "name": "	Voce pertence a 'igreja local'?	",	 "length": "	05:42	",	 "file": "	https://www.mediafire.com/file/	yayfj84droia2j2	/	Voce pertence a 'igreja local'?	"},
{"track":	433	,	 "name": "	Voce pertence ao movimento da igreja organica simples?	",	 "length": "	12:11	",	 "file": "	https://www.mediafire.com/file/	0kiwyc9uzh03628	/	Voce pertence ao movimento da igreja organica simples?	"},
{"track":	434	,	 "name": "	Você se acha o dono da verdade?	",	 "length": "	13:53	",	 "file": "	https://www.mediafire.com/file/	9vab9wzt6k03b9u	/	Você se acha o dono da verdade?	"},
{"track":	435	,	 "name": "	Voce segue a doutrina de Juan Carlos Ortiz?	",	 "length": "	07:12	",	 "file": "	https://www.mediafire.com/file/	w3j9eorb17myloc	/	Voce segue a doutrina de Juan Carlos Ortiz?	"},
{"track":	436	,	 "name": "	Voce segue os ensinos de Frank Viola e Wolfgang Simson?	",	 "length": "	10:17	",	 "file": "	https://www.mediafire.com/file/	tqtsuba12nh6up5	/	Voce segue os ensinos de Frank Viola e Wolfgang Simson?	"},
{"track":	437	,	 "name": "	Voces se congregam como na igreja primitiva?	",	 "length": "	21:19	",	 "file": "	https://www.mediafire.com/file/	2bx8bryef2feew4	/	Voces se congregam como na igreja primitiva?	"},



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
                // $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
                $('#plList').append('<li ><div class="plItem" ><div class="plNum">'+ '.</div><div class="plTitle"><a target="_blank" href="' + trackFile + '"><i class="fa fa-download fa-lg"></i></a> ' + trackName.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase()) + ' - (' + trackVoz + ')' + '</div><div class="plLength">' + trackLength + '</div></div></li>');

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
document.write('<title>Audio Player - Comentários - Respondi 1001-1500</title>')

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
