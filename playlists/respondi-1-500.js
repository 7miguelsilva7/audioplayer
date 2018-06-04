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

                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////


                { "track": 1, "name": "	#0121 Por que os terroristas islamicos matam?	", "length": "	11:51	", "file": "	http://www.mediafire.com/file/	puebexgq3u6a4z2	/	#0121 Por que os terroristas islamicos matam?	" },
                { "track": 2, "name": "	#0209 Devo me preocupar com o 'chip da Dilma'?	", "length": "	17:25	", "file": "	http://www.mediafire.com/file/	21a9jopz9i7o6ik	/	#0209 Devo me preocupar com o 'chip da Dilma'?	" },
                { "track": 3, "name": "	#0420 Para onde o crente vai quando morre?	", "length": "	19:38	", "file": "	http://www.mediafire.com/file/	qssgm8gs6099ps4	/	#0420 Para onde o crente vai quando morre?	" },
                { "track": 4, "name": "	#0641 Onde encontrar a chave da sabedoria?	", "length": "	46:31	", "file": "	http://www.mediafire.com/file/	1dpfai9c8k2y3sv	/	#0641 Onde encontrar a chave da sabedoria?	" },
                { "track": 5, "name": "	#0686 Pedofilia deve ser julgada na igreja?	", "length": "	13:25	", "file": "	http://www.mediafire.com/file/	58anw83oa2vvd6l	/	#0686 Pedofilia deve ser julgada na igreja?	" },
                { "track": 6, "name": "	#0687 O cristao deve ser sem igreja?	", "length": "	11:08	", "file": "	http://www.mediafire.com/file/	qp7xn2tqde1mcvx	/	#0687 O cristao deve ser sem igreja?	" },
                { "track": 7, "name": "	#0688 Tendencia suicida e' maldicao familiar?	", "length": "	10:32	", "file": "	http://www.mediafire.com/file/	d3a2y4ue6a2enuh	/	#0688 Tendencia suicida e' maldicao familiar?	" },
                { "track": 8, "name": "	#0689 A Biblia fala algo sobre psicopatas?	", "length": "	05:00	", "file": "	http://www.mediafire.com/file/	c3t1lsaa952holk	/	#0689 A Biblia fala algo sobre psicopatas?	" },
                { "track": 9, "name": "	#0690 O que a Biblia diz dos dinossauros?	", "length": "	18:44	", "file": "	http://www.mediafire.com/file/	b8yug9lcea5pmyu	/	#0690 O que a Biblia diz dos dinossauros?	" },
                { "track": 10, "name": "	#0691 Existia morte antes da queda do homem?	", "length": "	15:04	", "file": "	http://www.mediafire.com/file/	doanoc1vkww1rbn	/	#0691 Existia morte antes da queda do homem?	" },
                { "track": 11, "name": "	#0692 O cristao pode louvar com instrumentos musicais?	", "length": "	08:45	", "file": "	http://www.mediafire.com/file/	ydbq33dmq8bgw32	/	#0692 O cristao pode louvar com instrumentos musicais?	" },
                { "track": 12, "name": "	#0693 O que acha do discipulado e igrejas em celulas?	", "length": "	16:34	", "file": "	http://www.mediafire.com/file/	qb68pv27ui85jhx	/	#0693 O que acha do discipulado e igrejas em celulas?	" },
                { "track": 13, "name": "	#0694 Por que o Deus onisciente permitiu nascer quem vai para o inferno?	", "length": "	05:11	", "file": "	http://www.mediafire.com/file/	2lp4l6iv9du54ku	/	#0694 Por que o Deus onisciente permitiu nascer quem vai para o inferno?	" },
                { "track": 14, "name": "	#0695 Continuamos pecadores depois de salvos?	", "length": "	09:25	", "file": "	http://www.mediafire.com/file/	fxd3a2ng8sceerd	/	#0695 Continuamos pecadores depois de salvos?	" },
                { "track": 15, "name": "	#0696 Como Jesus reagia as tentacoes?	", "length": "	09:21	", "file": "	http://www.mediafire.com/file/	c9q1o27hrqc7px9	/	#0696 Como Jesus reagia as tentacoes?	" },
                { "track": 16, "name": "	#0697 Estou errando por permanecer solteiro?	", "length": "	06:04	", "file": "	http://www.mediafire.com/file/	d1v867keqihr9yz	/	#0697 Estou errando por permanecer solteiro?	" },
                { "track": 17, "name": "	#0698 A Biblia fala em reencarnacao?	", "length": "	08:23	", "file": "	http://www.mediafire.com/file/	3fd1lq1xk91te15	/	#0698 A Biblia fala em reencarnacao?	" },
                { "track": 18, "name": "	#0699 Posso causar contendas por ensinar a verdade?	", "length": "	09:39	", "file": "	http://www.mediafire.com/file/	8nsw8rh8hmj7nu4	/	#0699 Posso causar contendas por ensinar a verdade?	" },
                { "track": 19, "name": "	#0700 Cada Pessoa da Trindade e' Deus?	", "length": "	04:46	", "file": "	http://www.mediafire.com/file/	kd25333cc687wfv	/	#0700 Cada Pessoa da Trindade e' Deus?	" },
                { "track": 20, "name": "	#0701 Os jogadores do Santos foram intolerantes?	", "length": "	12:31	", "file": "	http://www.mediafire.com/file/	oijahc9hc6xxavc	/	#0701 Os jogadores do Santos foram intolerantes?	" },
                { "track": 21, "name": "	#0702 Onde na Biblia diz que reencarnacao nao existe?	", "length": "	09:57	", "file": "	http://www.mediafire.com/file/	uh1s76h4r8cm165	/	#0702 Onde na Biblia diz que reencarnacao nao existe?	" },
                { "track": 22, "name": "	#0703 O que significa Galatas 2:16-21?	", "length": "	06:52	", "file": "	http://www.mediafire.com/file/	ijq0csr7oz4ad22	/	#0703 O que significa Galatas 2:16-21?	" },
                { "track": 23, "name": "	#0704 Por que Deus permitiu minha doenca?	", "length": "	08:29	", "file": "	http://www.mediafire.com/file/	4fpidbues4i9mkw	/	#0704 Por que Deus permitiu minha doenca?	" },
                { "track": 24, "name": "	#0705 Com quem esta a razao - judeus ou palestinos 	", "length": "	11:31	", "file": "	http://www.mediafire.com/file/	9iic00r7kiv1js0	/	#0705 Com quem esta a razao - judeus ou palestinos 	" },
                { "track": 25, "name": "	#0706 Os atuais Palestinos sao os Filisteus da Biblia?	", "length": "	08:37	", "file": "	http://www.mediafire.com/file/	gcp1aseiq9rklb4	/	#0706 Os atuais Palestinos sao os Filisteus da Biblia?	" },
                { "track": 26, "name": "	#0707 O arrebatamento sera audivel e visivel ao mundo?	", "length": "	12:08	", "file": "	http://www.mediafire.com/file/	br515cxyh6qgdsi	/	#0707 O arrebatamento sera audivel e visivel ao mundo?	" },
                { "track": 27, "name": "	#0708 O pastor deve receber salario?	", "length": "	07:56	", "file": "	http://www.mediafire.com/file/	h3u387a5tptcz8r	/	#0708 O pastor deve receber salario?	" },
                { "track": 28, "name": "	#0709 Deus faz acepcao de pessoas?	", "length": "	05:15	", "file": "	http://www.mediafire.com/file/	g4woluwllxl97dl	/	#0709 Deus faz acepcao de pessoas?	" },
                { "track": 29, "name": "	#0710 Como se chama a pessoa que dirige a congregacao?	", "length": "	03:21	", "file": "	http://www.mediafire.com/file/	hsi5uoty9eamz0j	/	#0710 Como se chama a pessoa que dirige a congregacao?	" },
                { "track": 30, "name": "	#0711 O cristao deve buscar a justica dos homens?	", "length": "	06:16	", "file": "	http://www.mediafire.com/file/	oabrsq9c38jg27g	/	#0711 O cristao deve buscar a justica dos homens?	" },
                { "track": 31, "name": "	#0712 Satanas, Lucifer, rei de Tiro ou de Babilonia?	", "length": "	07:24	", "file": "	http://www.mediafire.com/file/	ucsibflr9smtjwl	/	#0712 Satanas, Lucifer, rei de Tiro ou de Babilonia?	" },
                { "track": 32, "name": "	#0713 Existe uma conspiracao para dominar o mundo?	", "length": "	04:57	", "file": "	http://www.mediafire.com/file/	dnuiil2caazczcg	/	#0713 Existe uma conspiracao para dominar o mundo?	" },
                { "track": 33, "name": "	#0714 Como um cristao pode viver solteiro?	", "length": "	13:20	", "file": "	http://www.mediafire.com/file/	cj5cn06vvjlnekv	/	#0714 Como um cristao pode viver solteiro?	" },
                { "track": 34, "name": "	#0715 O vinho na Biblia nao tinha alcool?	", "length": "	13:17	", "file": "	http://www.mediafire.com/file/	xxggg3fsfqgy3xj	/	#0715 O vinho na Biblia nao tinha alcool?	" },
                { "track": 35, "name": "	#0716 Devemos convidar apenas pobres e aleijados?	", "length": "	08:13	", "file": "	http://www.mediafire.com/file/	946yeh17w6cc3is	/	#0716 Devemos convidar apenas pobres e aleijados?	" },
                { "track": 36, "name": "	#0717 Devo sair de casa para servir ao Senhor?	", "length": "	07:01	", "file": "	http://www.mediafire.com/file/	699o306osnbp6b9	/	#0717 Devo sair de casa para servir ao Senhor?	" },
                { "track": 37, "name": "	#0718 Existem crentes sem o Espirito Santo?	", "length": "	03:28	", "file": "	http://www.mediafire.com/file/	arc5c5togy4rddn	/	#0718 Existem crentes sem o Espirito Santo?	" },
                { "track": 38, "name": "	#0719 Por quem voce foi batizado?	", "length": "	08:37	", "file": "	http://www.mediafire.com/file/	88k5b9nrli6rn7r	/	#0719 Por quem voce foi batizado?	" },
                { "track": 39, "name": "	#0720 Por que Deus deixa uma crianca morrer?	", "length": "	06:43	", "file": "	http://www.mediafire.com/file/	0up53mu7nj27ivo	/	#0720 Por que Deus deixa uma crianca morrer?	" },
                { "track": 40, "name": "	#0721 Quem sao as gravidas e as que amamentam de Mateus 24?	", "length": "	03:51	", "file": "	http://www.mediafire.com/file/	elv84a4y7z5n2pu	/	#0721 Quem sao as gravidas e as que amamentam de Mateus 24?	" },
                { "track": 41, "name": "	#0722 Por que Deus nao fala mais por Urim?	", "length": "	07:35	", "file": "	http://www.mediafire.com/file/	805vd49qf2perbc	/	#0722 Por que Deus nao fala mais por Urim?	" },
                { "track": 42, "name": "	#0723 O cristao pode jogar na loteria?	", "length": "	08:38	", "file": "	http://www.mediafire.com/file/	7bm9gg26aza3ze5	/	#0723 O cristao pode jogar na loteria?	" },
                { "track": 43, "name": "	#0724 Para que viver se Deus nao se importa comigo?	", "length": "	11:00	", "file": "	http://www.mediafire.com/file/	bflffoqonm8y1ih	/	#0724 Para que viver se Deus nao se importa comigo?	" },
                { "track": 44, "name": "	#0725 O Brasil ainda precisa ser evangelizado?	", "length": "	05:01	", "file": "	http://www.mediafire.com/file/	gzh77m9nbdzzfzu	/	#0725 O Brasil ainda precisa ser evangelizado?	" },
                { "track": 45, "name": "	#0726 O que fazer agora que enxerguei o erro?	", "length": "	11:48	", "file": "	http://www.mediafire.com/file/	v0w5icl3uvoa0hu	/	#0726 O que fazer agora que enxerguei o erro?	" },
                { "track": 46, "name": "	#0727 A ceia do Senhor seria apenas simbolica?	", "length": "	03:29	", "file": "	http://www.mediafire.com/file/	g3895fk7v70sufv	/	#0727 A ceia do Senhor seria apenas simbolica?	" },
                { "track": 47, "name": "	#0728 Por que a mulher de Lo virou coluna de sal?	", "length": "	03:20	", "file": "	http://www.mediafire.com/file/	wcqejwtznqtrtnz	/	#0728 Por que a mulher de Lo virou coluna de sal?	" },
                { "track": 48, "name": "	#0729 O cristao nao deve comer sangue?	", "length": "	08:20	", "file": "	http://www.mediafire.com/file/	676vsa8byobd9h9	/	#0729 O cristao nao deve comer sangue?	" },
                { "track": 49, "name": "	#0730 Como assim salvar-se-a' dando 'a luz a filhos?	", "length": "	08:38	", "file": "	http://www.mediafire.com/file/	v6kdcfr3sanrchv	/	#0730 Como assim salvar-se-a' dando 'a luz a filhos?	" },
                { "track": 50, "name": "	#0731 Partir o pao na ceia significa repartir os bens?	", "length": "	06:31	", "file": "	http://www.mediafire.com/file/	47a6f0jz93mwt56	/	#0731 Partir o pao na ceia significa repartir os bens?	" },
                { "track": 51, "name": "	#0732 O que fazer agora que sei que minha filha e' lesbica?	", "length": "	20:55	", "file": "	http://www.mediafire.com/file/	0tdtg8lu0jm1h7p	/	#0732 O que fazer agora que sei que minha filha e' lesbica?	" },
                { "track": 52, "name": "	#0733 Por que Paulo reduz seu corpo a escravidao?	", "length": "	06:22	", "file": "	http://www.mediafire.com/file/	9xnv5wt1y7vzur3	/	#0733 Por que Paulo reduz seu corpo a escravidao?	" },
                { "track": 53, "name": "	#0734 Viver com alguém e fornicação?	", "length": "	08:04	", "file": "	http://www.mediafire.com/file/	xy8g8crk896gynu	/	#0734 Viver com alguém e fornicação?	" },
                { "track": 54, "name": "	#0735 Espíritas são melhores que evangélicos?	", "length": "	08:12	", "file": "	http://www.mediafire.com/file/	86cd9slpn5xcn5t	/	#0735 Espíritas são melhores que evangélicos?	" },
                { "track": 55, "name": "	#0736 Como provar os espíritos?	", "length": "	05:43	", "file": "	http://www.mediafire.com/file/	031l7v284wb8drh	/	#0736 Como provar os espíritos?	" },
                { "track": 56, "name": "	#0737 Por que o Deus do Antigo Testamento era cruel?	", "length": "	06:57	", "file": "	http://www.mediafire.com/file/	zs98ps3mb7osvis	/	#0737 Por que o Deus do Antigo Testamento era cruel?	" },
                { "track": 57, "name": "	#0738 Fora da caridade não há salvaçao?	", "length": "	03:14	", "file": "	http://www.mediafire.com/file/	knghfpah0ibyrwa	/	#0738 Fora da caridade não há salvaçao?	" },
                { "track": 58, "name": "	#0739 Em Marcos 2 Jesus errou o nome do sumo-sacerdote?	", "length": "	04:20	", "file": "	http://www.mediafire.com/file/	j6n57vd6xzifsx6	/	#0739 Em Marcos 2 Jesus errou o nome do sumo-sacerdote?	" },
                { "track": 59, "name": "	#0740 As pragas no Egito não mataram todos os animais?	", "length": "	05:43	", "file": "	http://www.mediafire.com/file/	yngj6tn0pbt36a6	/	#0740 As pragas no Egito não mataram todos os animais?	" },
                { "track": 60, "name": "	#0741 Se Jesus não era filho de José, como era descendente de Davi?	", "length": "	06:47	", "file": "	http://www.mediafire.com/file/	o1ondj3u73rftk0	/	#0741 Se Jesus não era filho de José, como era descendente de Davi?	" },
                { "track": 61, "name": "	#0742 Como lidar com os altos e baixos da vida cristã?	", "length": "	10:22	", "file": "	http://www.mediafire.com/file/	wix36e5q2cpg0c3	/	#0742 Como lidar com os altos e baixos da vida cristã?	" },
                { "track": 62, "name": "	#0743 Como as pessoas podiam viver centenas de anos no principio?	", "length": "	04:19	", "file": "	http://www.mediafire.com/file/	62ncl6cu8p84y6w	/	#0743 Como as pessoas podiam viver centenas de anos no principio?	" },
                { "track": 63, "name": "	#0744 Quem foi o faraó do Êxodo?	", "length": "	12:40	", "file": "	http://www.mediafire.com/file/	hxlny6y15nvfibj	/	#0744 Quem foi o faraó do Êxodo?	" },
                { "track": 64, "name": "	#0745 É pecado substituir o ato sexual por masturbação?	", "length": "	10:58	", "file": "	http://www.mediafire.com/file/	sinmf9py0thxnnf	/	#0745 É pecado substituir o ato sexual por masturbação?	" },
                { "track": 65, "name": "	#0746 O que e' pecado?	", "length": "	02:05	", "file": "	http://www.mediafire.com/file/	n00m2k2l9l6t6zf	/	#0746 O que e' pecado?	" },
                { "track": 66, "name": "	#0747 Devo seguir minha consciencia?	", "length": "	03:25	", "file": "	http://www.mediafire.com/file/	lc1v36jzdwmg3yb	/	#0747 Devo seguir minha consciencia?	" },
                { "track": 67, "name": "	#0748 Preciso ler a Bíblia toda para ser salvo?	", "length": "	06:45	", "file": "	http://www.mediafire.com/file/	ebvzb4010wzvabo	/	#0748 Preciso ler a Bíblia toda para ser salvo?	" },
                { "track": 68, "name": "	#0749 Por que os judeus nao creem em Jesus?	", "length": "	04:10	", "file": "	http://www.mediafire.com/file/	k53h5klb79khu3i	/	#0749 Por que os judeus nao creem em Jesus?	" },
                { "track": 69, "name": "	#0750 Os hebreus atravessaram mesmo o Mar Vermelho?	", "length": "	05:35	", "file": "	http://www.mediafire.com/file/	ar3nb8o9ti41fqc	/	#0750 Os hebreus atravessaram mesmo o Mar Vermelho?	" },
                { "track": 70, "name": "	#0751 Como Noe' conseguiu colocar os animais na Arca?	", "length": "	03:22	", "file": "	http://www.mediafire.com/file/	zagirsh9vcvm0k0	/	#0751 Como Noe' conseguiu colocar os animais na Arca?	" },
                { "track": 71, "name": "	#0752 De onde vieram as aguas do Diluvio e para onde foram?	", "length": "	03:37	", "file": "	http://www.mediafire.com/file/	fcfaji8wale8tgr	/	#0752 De onde vieram as aguas do Diluvio e para onde foram?	" },
                { "track": 72, "name": "	#0753 Você é contra pesquisas com celulas-tronco?	", "length": "	08:41	", "file": "	http://www.mediafire.com/file/	11fkx126zdbb8c6	/	#0753 Você é contra pesquisas com celulas-tronco?	" },
                { "track": 73, "name": "	#0754 Existe fundamento biblico para a 'Marcha para Jesus'?	", "length": "	04:50	", "file": "	http://www.mediafire.com/file/	4nto7y42e2nnel3	/	#0754 Existe fundamento biblico para a 'Marcha para Jesus'?	" },
                { "track": 74, "name": "	#0755 Depois de salvo eu perco meu livre arbitrio?	", "length": "	04:51	", "file": "	http://www.mediafire.com/file/	dzpww9p1pksbgjm	/	#0755 Depois de salvo eu perco meu livre arbitrio?	" },
                { "track": 75, "name": "	#0756 Devo construir uma quadra de esportes para evangelizar?	", "length": "	04:35	", "file": "	http://www.mediafire.com/file/	v06cw4rv8wmcshh	/	#0756 Devo construir uma quadra de esportes para evangelizar?	" },
                { "track": 76, "name": "	#0757 Investir em acoes e' jugo desigual?	", "length": "	06:37	", "file": "	http://www.mediafire.com/file/	uo07m64izrf18bv	/	#0757 Investir em acoes e' jugo desigual?	" },
                { "track": 77, "name": "	#0758 E' possivel fazer tudo o que a Biblia diz?	", "length": "	04:03	", "file": "	http://www.mediafire.com/file/	5wkvp1owd7nmjum	/	#0758 E' possivel fazer tudo o que a Biblia diz?	" },
                { "track": 78, "name": "	#0759 Como interpretar as sensacoes?	", "length": "	04:24	", "file": "	http://www.mediafire.com/file/	35zx0nlkc1is257	/	#0759 Como interpretar as sensacoes?	" },
                { "track": 79, "name": "	#0760 O que fazer quando nao sinto a presenca de Deus?	", "length": "	07:17	", "file": "	http://www.mediafire.com/file/	yy49899zytznq7n	/	#0760 O que fazer quando nao sinto a presenca de Deus?	" },
                { "track": 80, "name": "	#0761 Nao e' errado tentar converter pessoas de outras religioes?	", "length": "	04:00	", "file": "	http://www.mediafire.com/file/	7ecolb29n6867w2	/	#0761 Nao e' errado tentar converter pessoas de outras religioes?	" },
                { "track": 81, "name": "	#0762 Religiao boa e' a que faz a pessoa sentir-se bem?	", "length": "	05:45	", "file": "	http://www.mediafire.com/file/	3oaa1352ivdxdi7	/	#0762 Religiao boa e' a que faz a pessoa sentir-se bem?	" },
                { "track": 82, "name": "	#0763 Voce acredita em novas revelacoes?	", "length": "	09:29	", "file": "	http://www.mediafire.com/file/	9amra76yn3kjgw8	/	#0763 Voce acredita em novas revelacoes?	" },
                { "track": 83, "name": "	#0764 Se a salvacao nao depende de mim posso viver como quiser?	", "length": "	03:05	", "file": "	http://www.mediafire.com/file/	q8cz3qduc1gemic	/	#0764 Se a salvacao nao depende de mim posso viver como quiser?	" },
                { "track": 84, "name": "	#0765 Que mentiras podem me condenar ao inferno?	", "length": "	04:59	", "file": "	http://www.mediafire.com/file/	9ptsmmsb4wk444b	/	#0765 Que mentiras podem me condenar ao inferno?	" },
                { "track": 85, "name": "	#0766 Se 2/3 da humanidade crê na reencarnação, por que voce não?	", "length": "	11:44	", "file": "	http://www.mediafire.com/file/	fb13cl6xu7c64v5	/	#0766 Se 2/3 da humanidade crê na reencarnação, por que voce não?	" },
                { "track": 86, "name": "	#0767 A Biblia e' diferente dos originais?	", "length": "	06:44	", "file": "	http://www.mediafire.com/file/	3m963t21czi3io4	/	#0767 A Biblia e' diferente dos originais?	" },
                { "track": 87, "name": "	#0768 A fe' crista e' limitada e excludente?	", "length": "	10:09	", "file": "	http://www.mediafire.com/file/	g99lynpt4k3l4h2	/	#0768 A fe' crista e' limitada e excludente?	" },
                { "track": 88, "name": "	#0769 Devemos obedecer autoridade humana na igreja?	", "length": "	12:55	", "file": "	http://www.mediafire.com/file/	z930jx3k2bq7184	/	#0769 Devemos obedecer autoridade humana na igreja?	" },
                { "track": 89, "name": "	#0770 Sexo antes do casamento me faz perder a salvacao?	", "length": "	05:41	", "file": "	http://www.mediafire.com/file/	ljx97cgzdef8sg2	/	#0770 Sexo antes do casamento me faz perder a salvacao?	" },
                { "track": 90, "name": "	#0771 Deus nao aprova a homo afetividade?	", "length": "	01:40	", "file": "	http://www.mediafire.com/file/	2l84ccsa46w8l8s	/	#0771 Deus nao aprova a homo afetividade?	" },
                { "track": 91, "name": "	#0772 A Bíblia proibe o ministerio das mulheres?	", "length": "	07:14	", "file": "	http://www.mediafire.com/file/	db97qqianv2b179	/	#0772 A Bíblia proibe o ministerio das mulheres?	" },
                { "track": 92, "name": "	#0773 Podemos perder a salvacao?	", "length": "	05:48	", "file": "	http://www.mediafire.com/file/	86d6j668mb43c4q	/	#0773 Podemos perder a salvacao?	" },
                { "track": 93, "name": "	#0774 Voce fala do evangelho em suas palestras?	", "length": "	03:28	", "file": "	http://www.mediafire.com/file/	hp38tlt3o4bqbhl	/	#0774 Voce fala do evangelho em suas palestras?	" },
                { "track": 94, "name": "	#0775 Jesus foi pregar no inferno?	", "length": "	03:29	", "file": "	http://www.mediafire.com/file/	kgxncx4120a1iqq	/	#0775 Jesus foi pregar no inferno?	" },
                { "track": 95, "name": "	#0776 Pode Lucifer ser a estrela da manhã?	", "length": "	04:52	", "file": "	http://www.mediafire.com/file/	xuuv6ej82z3ud07	/	#0776 Pode Lucifer ser a estrela da manhã?	" },
                { "track": 96, "name": "	#0777 Voce jogou fora seus livros quando se converteu?	", "length": "	06:11	", "file": "	http://www.mediafire.com/file/	boyk1lds53zdpyq	/	#0777 Voce jogou fora seus livros quando se converteu?	" },
                { "track": 97, "name": "	#0778 Existem erros no texto da Biblia	", "length": "	03:28	", "file": "	http://www.mediafire.com/file/	xqm845h3c7a4u53	/	#0778 Existem erros no texto da Biblia	" },
                { "track": 98, "name": "	#0779 Posso me tatuar para a glória de Deus?	", "length": "	06:32	", "file": "	http://www.mediafire.com/file/	ldsainw3dai2zdu	/	#0779 Posso me tatuar para a glória de Deus?	" },
                { "track": 99, "name": "	#0780 Deus destinou os negros para serem escravos?	", "length": "	06:34	", "file": "	http://www.mediafire.com/file/	nlm51ua4zw3pzs8	/	#0780 Deus destinou os negros para serem escravos?	" },
                { "track": 100, "name": "	#0781 Devemos voltar ao cristianismo primitivo?	", "length": "	10:44	", "file": "	http://www.mediafire.com/file/	nd6bie7a4bxnesn	/	#0781 Devemos voltar ao cristianismo primitivo?	" },
                { "track": 101, "name": "	#0782 Como evitar a masturbacao?	", "length": "	03:33	", "file": "	http://www.mediafire.com/file/	os32ivfbna0a5bo	/	#0782 Como evitar a masturbacao?	" },
                { "track": 102, "name": "	#0783 Mulheres podem ser pastoras?	", "length": "	14:53	", "file": "	http://www.mediafire.com/file/	ebdkkdck1ilu3ru	/	#0783 Mulheres podem ser pastoras?	" },
                { "track": 103, "name": "	#0784 Voce le qualquer livro cristao ou evangelico?	", "length": "	04:14	", "file": "	http://www.mediafire.com/file/	qlh6tngelgmf9jq	/	#0784 Voce le qualquer livro cristao ou evangelico?	" },
                { "track": 104, "name": "	#0785 Devo vender tudo e dividir com outros cristaos?	", "length": "	04:34	", "file": "	http://www.mediafire.com/file/	afjd3n65ja13399	/	#0785 Devo vender tudo e dividir com outros cristaos?	" },
                { "track": 105, "name": "	#0786 O que fazer se meu marido é homossexual?	", "length": "	08:57	", "file": "	http://www.mediafire.com/file/	c0rl6e7r1g3cs06	/	#0786 O que fazer se meu marido é homossexual?	" },
                { "track": 106, "name": "	#0787 O dilúvio da Biblia foi copiado de lendas de outros povos?	", "length": "	06:10	", "file": "	http://www.mediafire.com/file/	4yspddrbxbihc4c	/	#0787 O dilúvio da Biblia foi copiado de lendas de outros povos?	" },
                { "track": 107, "name": "	#0788 Israel na terra prometida e' a figueira com brotos e folhas?	", "length": "	02:56	", "file": "	http://www.mediafire.com/file/	z70anpbvqjunamm	/	#0788 Israel na terra prometida e' a figueira com brotos e folhas?	" },
                { "track": 108, "name": "	#0789 Qual a diferenca entre tribulacao e grande tribulacao?	", "length": "	03:04	", "file": "	http://www.mediafire.com/file/	br3mbjewk4w8lwk	/	#0789 Qual a diferenca entre tribulacao e grande tribulacao?	" },
                { "track": 109, "name": "	#0790 Existe perdão para o meu pecado?	", "length": "	07:24	", "file": "	http://www.mediafire.com/file/	ahhh2yira22wk19	/	#0790 Existe perdão para o meu pecado?	" },
                { "track": 110, "name": "	#0791 O cristão deve ser vegetariano?	", "length": "	04:56	", "file": "	http://www.mediafire.com/file/	n0w7hp8wwwjqdci	/	#0791 O cristão deve ser vegetariano?	" },
                { "track": 111, "name": "	#0792 Devemos comer apenas alimentos crus, como Adao e Eva?	", "length": "	12:30	", "file": "	http://www.mediafire.com/file/	x22uxi3j9s459l4	/	#0792 Devemos comer apenas alimentos crus, como Adao e Eva?	" },
                { "track": 112, "name": "	#0793 Quem pode batizar uma pessoa?	", "length": "	03:42	", "file": "	http://www.mediafire.com/file/	2ayru9m9fwjb836	/	#0793 Quem pode batizar uma pessoa?	" },
                { "track": 113, "name": "	#0794 Fiquei vulnerável a demonios por ter sido abusada sexualmente?	", "length": "	06:32	", "file": "	http://www.mediafire.com/file/	5kdcbt05vvrwgde	/	#0794 Fiquei vulnerável a demonios por ter sido abusada sexualmente?	" },
                { "track": 114, "name": "	#0795 Se uma denominação prospera, como pode estar errada?	", "length": "	04:23	", "file": "	http://www.mediafire.com/file/	a4tb945vbe2a7d5	/	#0795 Se uma denominação prospera, como pode estar errada?	" },
                { "track": 115, "name": "	#0796 Devo me opor a idolatria em meu trabalho?	", "length": "	03:59	", "file": "	http://www.mediafire.com/file/	gg166a2r56as5af	/	#0796 Devo me opor a idolatria em meu trabalho?	" },
                { "track": 116, "name": "	#0797 O que voce acha da teoria do intervalo?	", "length": "	02:53	", "file": "	http://www.mediafire.com/file/	h573ir0k4qcwce1	/	#0797 O que voce acha da teoria do intervalo?	" },
                { "track": 117, "name": "	#0798 O que você acha do pensamento filosófico cristão?	", "length": "	06:58	", "file": "	http://www.mediafire.com/file/	kte4x80x52cbrfm	/	#0798 O que você acha do pensamento filosófico cristão?	" },
                { "track": 118, "name": "	#0799 Devo ser conivente com a desonestidade na empresa?	", "length": "	09:08	", "file": "	http://www.mediafire.com/file/	yeaoj32455xuqyn	/	#0799 Devo ser conivente com a desonestidade na empresa?	" },
                { "track": 119, "name": "	#0800 Mateus 24, Marcos 13 e Lucas 21 já aconteceram?	", "length": "	04:33	", "file": "	http://www.mediafire.com/file/	d07gn9i3uu2l79x	/	#0800 Mateus 24, Marcos 13 e Lucas 21 já aconteceram?	" },
                { "track": 120, "name": "	#0801 O arrebatamento e a volta de Jesus nao sao a mesma coisa?	", "length": "	04:07	", "file": "	http://www.mediafire.com/file/	lq2568zxsz7e7eb	/	#0801 O arrebatamento e a volta de Jesus nao sao a mesma coisa?	" },
                { "track": 121, "name": "	#0802 Profecia: Perguntas e Respostas	", "length": "	09:52	", "file": "	http://www.mediafire.com/file/	yb3eudyiw49cjz3	/	#0802 Profecia: Perguntas e Respostas	" },
                { "track": 122, "name": "	#0803 A igreja não aparece no Antigo Testamento?	", "length": "	04:29	", "file": "	http://www.mediafire.com/file/	g3gb537iud4ljhf	/	#0803 A igreja não aparece no Antigo Testamento?	" },
                { "track": 123, "name": "	#0804 O primeiro a falar do arrebatamento foi John Nelson Darby?	", "length": "	10:36	", "file": "	http://www.mediafire.com/file/	nrvybd46e1q808e	/	#0804 O primeiro a falar do arrebatamento foi John Nelson Darby?	" },
                { "track": 124, "name": "	#0805 Os eleitos ou escolhidos de Mt 24:31 são cristãos (igreja)?	", "length": "	02:48	", "file": "	http://www.mediafire.com/file/	ozcgv1g65curdw9	/	#0805 Os eleitos ou escolhidos de Mt 24:31 são cristãos (igreja)?	" },
                { "track": 125, "name": "	#0806 O que sao os concertos ou aliancas da Biblia?	", "length": "	04:16	", "file": "	http://www.mediafire.com/file/	bc1e31jmxusnvmb	/	#0806 O que sao os concertos ou aliancas da Biblia?	" },
                { "track": 126, "name": "	#0807 Como me livrar do apego a coisas e hábitos?	", "length": "	09:09	", "file": "	http://www.mediafire.com/file/	lxrlm9729ea34z0	/	#0807 Como me livrar do apego a coisas e hábitos?	" },
                { "track": 127, "name": "	#0808 Qual e' a segunda morte?	", "length": "	05:25	", "file": "	http://www.mediafire.com/file/	v5vcagffikxrptk	/	#0808 Qual e' a segunda morte?	" },
                { "track": 128, "name": "	#0809 Quem sera' o Anticristo?	", "length": "	07:39	", "file": "	http://www.mediafire.com/file/	5wdxdji99upsbub	/	#0809 Quem sera' o Anticristo?	" },
                { "track": 129, "name": "	#0810 Por que o sexo nao pode vir antes do casamento?	", "length": "	08:31	", "file": "	http://www.mediafire.com/file/	v3hj3e5q7c6cwbi	/	#0810 Por que o sexo nao pode vir antes do casamento?	" },
                { "track": 130, "name": "	#0811 Não era para eu prosperar depois de convertido?	", "length": "	06:15	", "file": "	http://www.mediafire.com/file/	cw864xbu83j4thu	/	#0811 Não era para eu prosperar depois de convertido?	" },
                { "track": 131, "name": "	#0812 Quem nunca ouviu o evangelho pode ser salvo?	", "length": "	09:20	", "file": "	http://www.mediafire.com/file/	aijd3dygiyrcz25	/	#0812 Quem nunca ouviu o evangelho pode ser salvo?	" },
                { "track": 132, "name": "	#0813 O que voce pensa do aborto?	", "length": "	09:17	", "file": "	http://www.mediafire.com/file/	y0eh4or363akljc	/	#0813 O que voce pensa do aborto?	" },
                { "track": 133, "name": "	#0814 Que hinos voce e os irmaos cantam nas reunioes?	", "length": "	04:06	", "file": "	http://www.mediafire.com/file/	cb9d6bej1nv21ma	/	#0814 Que hinos voce e os irmaos cantam nas reunioes?	" },
                { "track": 134, "name": "	#0815 Tudo o que fiz sera' revelado quando Jesus vier me buscar?	", "length": "	03:40	", "file": "	http://www.mediafire.com/file/	mukppgiifwuxa0f	/	#0815 Tudo o que fiz sera' revelado quando Jesus vier me buscar?	" },
                { "track": 135, "name": "	#0816 Caim era pedofilo e cometeu incesto?	", "length": "	06:42	", "file": "	http://www.mediafire.com/file/	8xtvs84c4txoopd	/	#0816 Caim era pedofilo e cometeu incesto?	" },
                { "track": 136, "name": "	#0817 Por que voce nao gostou do livro de C. S. Lewis inteiro?	", "length": "	04:44	", "file": "	http://www.mediafire.com/file/	5db1z1q2df5fybt	/	#0817 Por que voce nao gostou do livro de C. S. Lewis inteiro?	" },
                { "track": 137, "name": "	#0818 Como lidar com as maldicoes, macumbarias, trabalhos etc?	", "length": "	05:34	", "file": "	http://www.mediafire.com/file/	7w46o2bnl094o89	/	#0818 Como lidar com as maldicoes, macumbarias, trabalhos etc?	" },
                { "track": 138, "name": "	#0819 O quanto preciso estar preparado para evangelizar?	", "length": "	05:43	", "file": "	http://www.mediafire.com/file/	7mfy8y2gdg2p7qf	/	#0819 O quanto preciso estar preparado para evangelizar?	" },
                { "track": 139, "name": "	#0820 O que voce acha de experiencias misticas?	", "length": "	13:05	", "file": "	http://www.mediafire.com/file/	qv7bud9itf3754e	/	#0820 O que voce acha de experiencias misticas?	" },
                { "track": 140, "name": "	#0821 Devo me preocupar com os documentarios sobre o fim do mundo?	", "length": "	03:11	", "file": "	http://www.mediafire.com/file/	k9yoksaqbgcwna6	/	#0821 Devo me preocupar com os documentarios sobre o fim do mundo?	" },
                { "track": 141, "name": "	#0822 Como lidar com as falhas na Bíblia?	", "length": "	13:23	", "file": "	http://www.mediafire.com/file/	7s4x70o6mgu75hy	/	#0822 Como lidar com as falhas na Bíblia?	" },
                { "track": 142, "name": "	#0823 Devo confessar meu pecado?	", "length": "	06:21	", "file": "	http://www.mediafire.com/file/	nnqtx91jraj0d9e	/	#0823 Devo confessar meu pecado?	" },
                { "track": 143, "name": "	#0824 Sem fe' estou perdido?	", "length": "	03:59	", "file": "	http://www.mediafire.com/file/	4kg8ahslpbp8zys	/	#0824 Sem fe' estou perdido?	" },
                { "track": 144, "name": "	#0825 Artes marciais na igreja abre brecha para o diabo?	", "length": "	07:34	", "file": "	http://www.mediafire.com/file/	mqsoj9b4f6q4igp	/	#0825 Artes marciais na igreja abre brecha para o diabo?	" },
                { "track": 145, "name": "	#0826 Se nao tenho o livre arbitrio como posso ser responsavel por rejeitar?	", "length": "	12:59	", "file": "	http://www.mediafire.com/file/	7328cbxpkw9c8px	/	#0826 Se nao tenho o livre arbitrio como posso ser responsavel por rejeitar?	" },
                { "track": 146, "name": "	#0827 O que pratiquei e' incesto?	", "length": "	02:25	", "file": "	http://www.mediafire.com/file/	bwgbq3194jagd4a	/	#0827 O que pratiquei e' incesto?	" },
                { "track": 147, "name": "	#0828 Maria e' a mae dos cristaos?	", "length": "	08:06	", "file": "	http://www.mediafire.com/file/	3c863e4u48535zg	/	#0828 Maria e' a mae dos cristaos?	" },
                { "track": 148, "name": "	#0829 Tudo o que dizem de Maria e' verdade?	", "length": "	04:58	", "file": "	http://www.mediafire.com/file/	ccsre7bkty1yb62	/	#0829 Tudo o que dizem de Maria e' verdade?	" },
                { "track": 149, "name": "	#0830 Por que nao vemos possessos de demonios no Antigo Testamento?	", "length": "	04:13	", "file": "	http://www.mediafire.com/file/	ypfmjb5z37aga64	/	#0830 Por que nao vemos possessos de demonios no Antigo Testamento?	" },
                { "track": 150, "name": "	#0831 Quem participa da primeira ressurreicao	", "length": "	08:27	", "file": "	http://www.mediafire.com/file/	24pqq2wtsjacyum	/	#0831 Quem participa da primeira ressurreicao	" },
                { "track": 151, "name": "	#0832 Posso participar de um ritual de casamento catolico?	", "length": "	04:46	", "file": "	http://www.mediafire.com/file/	5if95owqr21qxhk	/	#0832 Posso participar de um ritual de casamento catolico?	" },
                { "track": 152, "name": "	#0833 Quem e' quem nas parabolas?	", "length": "	14:21	", "file": "	http://www.mediafire.com/file/	m5gcbga81361wg1	/	#0833 Quem e' quem nas parabolas?	" },
                { "track": 153, "name": "	#0834 Davi e Jonatas eram homossexuais?	", "length": "	17:50	", "file": "	http://www.mediafire.com/file/	78b4l0mrkfjlimm	/	#0834 Davi e Jonatas eram homossexuais?	" },
                { "track": 154, "name": "	#0835 Qual o significado de 1 Corintios 13?	", "length": "	05:20	", "file": "	http://www.mediafire.com/file/	za71sia6dqhrzdo	/	#0835 Qual o significado de 1 Corintios 13?	" },
                { "track": 155, "name": "	#0836 Perderei a salvacao se voltar a fazer o que fazia?	", "length": "	10:25	", "file": "	http://www.mediafire.com/file/	p7mnzi587tj9nu6	/	#0836 Perderei a salvacao se voltar a fazer o que fazia?	" },
                { "track": 156, "name": "	#0837 O batismo salva?	", "length": "	06:15	", "file": "	http://www.mediafire.com/file/	15q1r2f66mrfsx8	/	#0837 O batismo salva?	" },
                { "track": 157, "name": "	#0838 O cristão e' intolerante?	", "length": "	16:20	", "file": "	http://www.mediafire.com/file/	9z1nfj3f7ob96b7	/	#0838 O cristão e' intolerante?	" },
                { "track": 158, "name": "	#0839 A Igreja nao ensina?	", "length": "	07:05	", "file": "	http://www.mediafire.com/file/	5ibf3sdf0212wns	/	#0839 A Igreja nao ensina?	" },
                { "track": 159, "name": "	#0840 Voce nao reconhece o Papa?	", "length": "	06:09	", "file": "	http://www.mediafire.com/file/	uei0vm4wwl5xjy2	/	#0840 Voce nao reconhece o Papa?	" },
                { "track": 160, "name": "	#0841 Sua fe' nao inclui Maria?	", "length": "	04:31	", "file": "	http://www.mediafire.com/file/	x9bffpj8vd8fy27	/	#0841 Sua fe' nao inclui Maria?	" },
                { "track": 161, "name": "	#0842 Nao somos livres para escolher a salvacao?	", "length": "	11:32	", "file": "	http://www.mediafire.com/file/	cia8zgtd29xh4aw	/	#0842 Nao somos livres para escolher a salvacao?	" },
                { "track": 162, "name": "	#0843 Michael Jackson precisava de uma segunda chance?	", "length": "	09:11	", "file": "	http://www.mediafire.com/file/	tbxvgmme42m4765	/	#0843 Michael Jackson precisava de uma segunda chance?	" },
                { "track": 163, "name": "	#0844 A cristandade esta' decadente?	", "length": "	08:20	", "file": "	http://www.mediafire.com/file/	tv2frjdhbd4lwu2	/	#0844 A cristandade esta' decadente?	" },
                { "track": 164, "name": "	#0845 Deus armou uma armadilha para suas criaturas?	", "length": "	06:41	", "file": "	http://www.mediafire.com/file/	0q7yzsnzdd05kbm	/	#0845 Deus armou uma armadilha para suas criaturas?	" },
                { "track": 165, "name": "	#0846 Devo me sujeitar a meus pais?	", "length": "	06:22	", "file": "	http://www.mediafire.com/file/	zsg46a5kokm4oty	/	#0846 Devo me sujeitar a meus pais?	" },
                { "track": 166, "name": "	#0847 O que significa adorar em espirito e em verdade?	", "length": "	08:43	", "file": "	http://www.mediafire.com/file/	lqpb607ysyrwlr5	/	#0847 O que significa adorar em espirito e em verdade?	" },
                { "track": 167, "name": "	#0848 O que acha do que diz o ateu Richard Dawkins?	", "length": "	09:11	", "file": "	http://www.mediafire.com/file/	zrus617pqvw9o1p	/	#0848 O que acha do que diz o ateu Richard Dawkins?	" },
                { "track": 168, "name": "	#0849 Por que Lutero foi dividir os cristaos?	", "length": "	17:28	", "file": "	http://www.mediafire.com/file/	19d75850d57j5nb	/	#0849 Por que Lutero foi dividir os cristaos?	" },
                { "track": 169, "name": "	#0850 O que voce acha da danca como meio de evangelizar?	", "length": "	09:25	", "file": "	http://www.mediafire.com/file/	1ez031519zqq222	/	#0850 O que voce acha da danca como meio de evangelizar?	" },
                { "track": 170, "name": "	#0851 Devemos rasgar o Antigo Testamento?	", "length": "	09:37	", "file": "	http://www.mediafire.com/file/	uz8hrmfw0f426bb	/	#0851 Devemos rasgar o Antigo Testamento?	" },
                { "track": 171, "name": "	#0852 Foi a igreja catolica que definiu o Novo Testamento?	", "length": "	03:44	", "file": "	http://www.mediafire.com/file/	nawb0wa7a43k21d	/	#0852 Foi a igreja catolica que definiu o Novo Testamento?	" },
                { "track": 172, "name": "	#0853 Como me precaver contra o erro?	", "length": "	11:06	", "file": "	http://www.mediafire.com/file/	ozmh6qpkwmzf48o	/	#0853 Como me precaver contra o erro?	" },
                { "track": 173, "name": "	#0854 Você não acredita em dança profética?	", "length": "	05:19	", "file": "	http://www.mediafire.com/file/	ekrdp03mvk0hu3f	/	#0854 Você não acredita em dança profética?	" },
                { "track": 174, "name": "	#0855 Pessoas de religioes apostatas estao salvas?	", "length": "	06:01	", "file": "	http://www.mediafire.com/file/	mcbd378hkb9x963	/	#0855 Pessoas de religioes apostatas estao salvas?	" },
                { "track": 175, "name": "	#0856 Devo me separar de minha denominação?	", "length": "	06:39	", "file": "	http://www.mediafire.com/file/	536ahq5szpvd9m8	/	#0856 Devo me separar de minha denominação?	" },
                { "track": 176, "name": "	#0857 Qual a musica certa para o louvor?	", "length": "	00:22	", "file": "	http://www.mediafire.com/file/	lau59a1uab9p6xi	/	#0857 Qual a musica certa para o louvor?	" },
                { "track": 177, "name": "	#0858 Se nao existe Deus tudo esta' liberado?	", "length": "	17:50	", "file": "	http://www.mediafire.com/file/	iargwpdq1sb1bw1	/	#0858 Se nao existe Deus tudo esta' liberado?	" },
                { "track": 178, "name": "	#0859 A moral faria sentido sem Deus?	", "length": "	14:34	", "file": "	http://www.mediafire.com/file/	s6ib6rdebs88806	/	#0859 A moral faria sentido sem Deus?	" },
                { "track": 179, "name": "	#0860 Posso usar seu video na minha igreja?	", "length": "	07:27	", "file": "	http://www.mediafire.com/file/	8cvgp2wjhu308to	/	#0860 Posso usar seu video na minha igreja?	" },
                { "track": 180, "name": "	#0861 Como conciliar a Biblia e a teoria da evolucao?	", "length": "	09:28	", "file": "	http://www.mediafire.com/file/	p67wpvb3hbwo9h3	/	#0861 Como conciliar a Biblia e a teoria da evolucao?	" },
                { "track": 181, "name": "	#0862 Pra que Deus se temos as Regras de Ouro?	", "length": "	08:49	", "file": "	http://www.mediafire.com/file/	sgfp9zrb46c0sdc	/	#0862 Pra que Deus se temos as Regras de Ouro?	" },
                { "track": 182, "name": "	#0863 Como entender o Apocalipse?	", "length": "	03:01	", "file": "	http://www.mediafire.com/file/	x9225h9q8qv7734	/	#0863 Como entender o Apocalipse?	" },
                { "track": 183, "name": "	#0864 O que acontecera com as criancas no arrebatamento?	", "length": "	02:42	", "file": "	http://www.mediafire.com/file/	mgjy7s6z68r9zr6	/	#0864 O que acontecera com as criancas no arrebatamento?	" },
                { "track": 184, "name": "	#0865 Que diferenca existe entre a minha igreja e a sua?	", "length": "	17:34	", "file": "	http://www.mediafire.com/file/	yotd5c23m90jc44	/	#0865 Que diferenca existe entre a minha igreja e a sua?	" },
                { "track": 185, "name": "	#0866 Qual o papel da Lei de Moises para o cristao?	", "length": "	08:00	", "file": "	http://www.mediafire.com/file/	5pgmv2z14yhvcah	/	#0866 Qual o papel da Lei de Moises para o cristao?	" },
                { "track": 186, "name": "	#0867 Qual a chave para entender o Sermao da Montanha?	", "length": "	09:05	", "file": "	http://www.mediafire.com/file/	ps3kiqunagmku3g	/	#0867 Qual a chave para entender o Sermao da Montanha?	" },
                { "track": 187, "name": "	#0868 Por que Deus permite tanta atrocidade no mundo?	", "length": "	03:07	", "file": "	http://www.mediafire.com/file/	zestcdhydix2om4	/	#0868 Por que Deus permite tanta atrocidade no mundo?	" },
                { "track": 188, "name": "	#0869 Estaria errado chamar Jesus de Rei?	", "length": "	08:13	", "file": "	http://www.mediafire.com/file/	2boawsm5w8mw0zm	/	#0869 Estaria errado chamar Jesus de Rei?	" },
                { "track": 189, "name": "	#0870 Como saber o que se aplica à Igreja?	", "length": "	07:49	", "file": "	http://www.mediafire.com/file/	gh53m65gpplmzm3	/	#0870 Como saber o que se aplica à Igreja?	" },
                { "track": 190, "name": "	#0871 Quem disse que o crente nao sera' julgado?	", "length": "	06:11	", "file": "	http://www.mediafire.com/file/	zuzkqy7277jgpsw	/	#0871 Quem disse que o crente nao sera' julgado?	" },
                { "track": 191, "name": "	#0872 Um cristao pode ser soldado ou policial?	", "length": "	05:06	", "file": "	http://www.mediafire.com/file/	1mlddgv4akzadkd	/	#0872 Um cristao pode ser soldado ou policial?	" },
                { "track": 192, "name": "	#0873 O que você achou do livro A Cabana?	", "length": "	18:31	", "file": "	http://www.mediafire.com/file/	u4fjz4hx87zv6jr	/	#0873 O que você achou do livro A Cabana?	" },
                { "track": 193, "name": "	#0874 Deus ama apenas os salvos?	", "length": "	12:58	", "file": "	http://www.mediafire.com/file/	8pfzbkw9qpntxa3	/	#0874 Deus ama apenas os salvos?	" },
                { "track": 194, "name": "	#0875 O tsunami contradiz Jeremias 5:22?	", "length": "	04:32	", "file": "	http://www.mediafire.com/file/	m6mm5dslin1v50i	/	#0875 O tsunami contradiz Jeremias 5:22?	" },
                { "track": 195, "name": "	#0876 O que acha desses pregadores de prosperidade?	", "length": "	09:30	", "file": "	http://www.mediafire.com/file/	65a9w4i4csg4t2u	/	#0876 O que acha desses pregadores de prosperidade?	" },
                { "track": 196, "name": "	#0877 Por que a mulher não deve ensinar?	", "length": "	06:08	", "file": "	http://www.mediafire.com/file/	x0u7u1crm77m9bt	/	#0877 Por que a mulher não deve ensinar?	" },
                { "track": 197, "name": "	#0878 Como diz que se converteu se já era espiritualista?	", "length": "	18:38	", "file": "	http://www.mediafire.com/file/	ae28az8ubjua7kw	/	#0878 Como diz que se converteu se já era espiritualista?	" },
                { "track": 198, "name": "	#0879 O que acha do espiritismo?	", "length": "	10:42	", "file": "	http://www.mediafire.com/file/	1fiufiq4po3pu9h	/	#0879 O que acha do espiritismo?	" },
                { "track": 199, "name": "	#0880 Jesus era rico?	", "length": "	07:47	", "file": "	http://www.mediafire.com/file/	a6jt5rk5336i7pq	/	#0880 Jesus era rico?	" },
                { "track": 200, "name": "	#0881 Quem é o Espírito Santo?	", "length": "	04:23	", "file": "	http://www.mediafire.com/file/	015xdgsxhsiv282	/	#0881 Quem é o Espírito Santo?	" },
                { "track": 201, "name": "	#0882 Devemos usar a Bíblia para ferir?	", "length": "	01:57	", "file": "	http://www.mediafire.com/file/	k2xq2ib7rs6kqvo	/	#0882 Devemos usar a Bíblia para ferir?	" },
                { "track": 202, "name": "	#0883 Em que Deus voce cre?	", "length": "	05:35	", "file": "	http://www.mediafire.com/file/	9e9k1876nyfe6v0	/	#0883 Em que Deus voce cre?	" },
                { "track": 203, "name": "	#0884 Marketing e' uma atividade boa ou ma' para um cristao?	", "length": "	13:36	", "file": "	http://www.mediafire.com/file/	c9fm7chzpk0578t	/	#0884 Marketing e' uma atividade boa ou ma' para um cristao?	" },
                { "track": 204, "name": "	#0885 Posso viver despreocupado com o pecado?	", "length": "	10:01	", "file": "	http://www.mediafire.com/file/	dg5409xlvgj38sd	/	#0885 Posso viver despreocupado com o pecado?	" },
                { "track": 205, "name": "	#0886 Seria este blog uma injuria a Chico Xavier?	", "length": "	09:58	", "file": "	http://www.mediafire.com/file/	4ziffaaswf3zqu8	/	#0886 Seria este blog uma injuria a Chico Xavier?	" },
                { "track": 206, "name": "	#0887 A Biblia discrimina a mulher?	", "length": "	06:26	", "file": "	http://www.mediafire.com/file/	k715x8cn0759is9	/	#0887 A Biblia discrimina a mulher?	" },
                { "track": 207, "name": "	#0888 Onde esta' meu filho que morreu?	", "length": "	04:34	", "file": "	http://www.mediafire.com/file/	qf0i8ejlw767pb1	/	#0888 Onde esta' meu filho que morreu?	" },
                { "track": 208, "name": "	#0889 E' correto dizer que a igreja ensina?	", "length": "	03:02	", "file": "	http://www.mediafire.com/file/	71iv3w04w2cy48r	/	#0889 E' correto dizer que a igreja ensina?	" },
                { "track": 209, "name": "	#0890 O que você pensa dos judeus?	", "length": "	05:57	", "file": "	http://www.mediafire.com/file/	aqtjht2247vvpx1	/	#0890 O que você pensa dos judeus?	" },
                { "track": 210, "name": "	#0891 O que acha do Evangelho de Judas?	", "length": "	17:42	", "file": "	http://www.mediafire.com/file/	clomz76lpqzgpi0	/	#0891 O que acha do Evangelho de Judas?	" },
                { "track": 211, "name": "	#0892 Devo crer no humanismo?	", "length": "	13:15	", "file": "	http://www.mediafire.com/file/	t3p1385xd6a90qb	/	#0892 Devo crer no humanismo?	" },
                { "track": 212, "name": "	#0893 E quem e' ateu?	", "length": "	04:10	", "file": "	http://www.mediafire.com/file/	tjoriposkd2ovbv	/	#0893 E quem e' ateu?	" },
                { "track": 213, "name": "	#0894 Deus pode usar nossas habilidades naturais?	", "length": "	06:41	", "file": "	http://www.mediafire.com/file/	5x0pzty3xtcusty	/	#0894 Deus pode usar nossas habilidades naturais?	" },
                { "track": 214, "name": "	#0895 Nao acha a reencarnacao uma ideia mais logica e racional?	", "length": "	09:57	", "file": "	http://www.mediafire.com/file/	0becergzc95d8am	/	#0895 Nao acha a reencarnacao uma ideia mais logica e racional?	" },
                { "track": 215, "name": "	#0896 A obediencia aos pastores e' incondicional?	", "length": "	12:11	", "file": "	http://www.mediafire.com/file/	dh00mu4qg7wocm9	/	#0896 A obediencia aos pastores e' incondicional?	" },
                { "track": 216, "name": "	#0897 Voce e' dizimista?	", "length": "	05:14	", "file": "	http://www.mediafire.com/file/	totm3v4hgdsmqtk	/	#0897 Voce e' dizimista?	" },
                { "track": 217, "name": "	#0898 O que voce pensa do divorcio?	", "length": "	12:31	", "file": "	http://www.mediafire.com/file/	hee81e4lxfp6e4z	/	#0898 O que voce pensa do divorcio?	" },
                { "track": 218, "name": "	#0899 Prosperidade: Nao sou filha legitima de Deus?	", "length": "	17:43	", "file": "	http://www.mediafire.com/file/	zibcdym277pbab5	/	#0899 Prosperidade: Nao sou filha legitima de Deus?	" },
                { "track": 219, "name": "	#0900 Como saber se uma igreja reconhece o senhorio de Cristo?	", "length": "	07:43	", "file": "	http://www.mediafire.com/file/	rtnjr4evlp03mu3	/	#0900 Como saber se uma igreja reconhece o senhorio de Cristo?	" },
                { "track": 220, "name": "	#0901 Como saber se um 'apostolo' e' genuino?	", "length": "	04:35	", "file": "	http://www.mediafire.com/file/	c13sbizx3gk7r5w	/	#0901 Como saber se um 'apostolo' e' genuino?	" },
                { "track": 221, "name": "	#0902 Quem pode ser chamado de 'bispo'?	", "length": "	05:47	", "file": "	http://www.mediafire.com/file/	9y2p2ewxr89g4yk	/	#0902 Quem pode ser chamado de 'bispo'?	" },
                { "track": 222, "name": "	#0903 Você faz palestra de espiritualidade na empresa?	", "length": "	15:34	", "file": "	http://www.mediafire.com/file/	ol529k9s5ov50oj	/	#0903 Você faz palestra de espiritualidade na empresa?	" },
                { "track": 223, "name": "	#0904 Havera' mais de uma ressurreicao?	", "length": "	05:22	", "file": "	http://www.mediafire.com/file/	ybl1jia9m6lm9hi	/	#0904 Havera' mais de uma ressurreicao?	" },
                { "track": 224, "name": "	#0905 Onde ficara' Israel, e onde ficara' a Igreja no final?	", "length": "	11:47	", "file": "	http://www.mediafire.com/file/	doo59u8ycz8lefe	/	#0905 Onde ficara' Israel, e onde ficara' a Igreja no final?	" },
                { "track": 225, "name": "	#0906 A que vinda de Cristo se refere Mateus 24:27?	", "length": "	04:29	", "file": "	http://www.mediafire.com/file/	bcozkht0g3bfn8e	/	#0906 A que vinda de Cristo se refere Mateus 24:27?	" },
                { "track": 226, "name": "	#0907 A escola dominical e' uma reuniao de assembleia ou igreja?	", "length": "	10:38	", "file": "	http://www.mediafire.com/file/	8veobkxl62at64b	/	#0907 A escola dominical e' uma reuniao de assembleia ou igreja?	" },
                { "track": 227, "name": "	#0908 Devo dar o dizimo?	", "length": "	11:17	", "file": "	http://www.mediafire.com/file/	dak0vs08go3237d	/	#0908 Devo dar o dizimo?	" },
                { "track": 228, "name": "	#0909 Sera' que minha conversao foi real?	", "length": "	11:42	", "file": "	http://www.mediafire.com/file/	42811i2e7ussgmf	/	#0909 Sera' que minha conversao foi real?	" },
                { "track": 229, "name": "	#0910 A condenacao e' mesmo eterna?	", "length": "	08:39	", "file": "	http://www.mediafire.com/file/	uj6cceycxiof170	/	#0910 A condenacao e' mesmo eterna?	" },
                { "track": 230, "name": "	#0911 Palavras como 'arco-iris' vem do paganismo?	", "length": "	03:40	", "file": "	http://www.mediafire.com/file/	215q8uoaly1l46e	/	#0911 Palavras como 'arco-iris' vem do paganismo?	" },
                { "track": 231, "name": "	#0912 O que a Bíblia diz da pena de morte?	", "length": "	07:41	", "file": "	http://www.mediafire.com/file/	xa4w5rbgc7u370x	/	#0912 O que a Bíblia diz da pena de morte?	" },
                { "track": 232, "name": "	#0913 Reunir-se sem denominacao nao e' criar uma nova igreja?	", "length": "	15:14	", "file": "	http://www.mediafire.com/file/	6iwtoisev26ide6	/	#0913 Reunir-se sem denominacao nao e' criar uma nova igreja?	" },
                { "track": 233, "name": "	#0914 Você e' 'espiritualista' ou o que?	", "length": "	14:04	", "file": "	http://www.mediafire.com/file/	p6uggc8cyxp0jsk	/	#0914 Você e' 'espiritualista' ou o que?	" },
                { "track": 234, "name": "	#0915 Um ministro e' ordenado por um presbiterio?	", "length": "	05:14	", "file": "	http://www.mediafire.com/file/	8y5pv9a6dyh13nx	/	#0915 Um ministro e' ordenado por um presbiterio?	" },
                { "track": 235, "name": "	#0916 Cristo levou embora nossas enfermidades?	", "length": "	05:51	", "file": "	http://www.mediafire.com/file/	gl86a8m1gg3h7is	/	#0916 Cristo levou embora nossas enfermidades?	" },
                { "track": 236, "name": "	#0917 O que Deus nao uniu o homem pode separar?	", "length": "	04:13	", "file": "	http://www.mediafire.com/file/	g2d4g36n6b2y002	/	#0917 O que Deus nao uniu o homem pode separar?	" },
                { "track": 237, "name": "	#0918 Irei para o inferno por ser homossexual?	", "length": "	07:00	", "file": "	http://www.mediafire.com/file/	osqvrr2wocv8ozc	/	#0918 Irei para o inferno por ser homossexual?	" },
                { "track": 238, "name": "	#0919 O que pensar de moribundos que dizem ver familiares que ja' morreram?	", "length": "	05:17	", "file": "	http://www.mediafire.com/file/	3v30veb9cxxdo4i	/	#0919 O que pensar de moribundos que dizem ver familiares que ja' morreram?	" },
                { "track": 239, "name": "	#0920 O que você acha do livro “O Segredo - A Lei da Atração” (The Secret)	", "length": "	16:17	", "file": "	http://www.mediafire.com/file/	tlcod8iqbdcuppg	/	#0920 O que você acha do livro “O Segredo - A Lei da Atração” (The Secret)	" },
                { "track": 240, "name": "	#0921 Por que os 4 evangelhos não coincidem?	", "length": "	03:59	", "file": "	http://www.mediafire.com/file/	cfz1vqi1y3uv575	/	#0921 Por que os 4 evangelhos não coincidem?	" },
                { "track": 241, "name": "	#0922 O cristao deve se envolver em politica?	", "length": "	11:09	", "file": "	http://www.mediafire.com/file/	xpsyby1k6e04wj6	/	#0922 O cristao deve se envolver em politica?	" },
                { "track": 242, "name": "	#0923 Como confiar num livro que contém erros grosseiros?	", "length": "	08:38	", "file": "	http://www.mediafire.com/file/	hfn9j6n36h403ky	/	#0923 Como confiar num livro que contém erros grosseiros?	" },
                { "track": 243, "name": "	#0924 O que significa Reino dos Ceus?	", "length": "	03:13	", "file": "	http://www.mediafire.com/file/	unx4su3svj99lif	/	#0924 O que significa Reino dos Ceus?	" },
                { "track": 244, "name": "	#0925 Teremos cicatrizes no ceu?	", "length": "	04:01	", "file": "	http://www.mediafire.com/file/	czscy9cqb8fyaq9	/	#0925 Teremos cicatrizes no ceu?	" },
                { "track": 245, "name": "	#0926 Como saber se irei para o ceu?	", "length": "	05:05	", "file": "	http://www.mediafire.com/file/	258bxzzmfnnqc1r	/	#0926 Como saber se irei para o ceu?	" },
                { "track": 246, "name": "	#0927 Vamos reconhecer as pessoas no ceu?	", "length": "	05:06	", "file": "	http://www.mediafire.com/file/	4trk7q6xtmw9uab	/	#0927 Vamos reconhecer as pessoas no ceu?	" },
                { "track": 247, "name": "	#0928 O que significa 'ir para o ceu'?	", "length": "	02:30	", "file": "	http://www.mediafire.com/file/	jhfafozqadxdfp1	/	#0928 O que significa 'ir para o ceu'?	" },
                { "track": 248, "name": "	#0929 E' possivel ter certeza de ir para o ceu?	", "length": "	05:48	", "file": "	http://www.mediafire.com/file/	jfhxaxg7rpree8z	/	#0929 E' possivel ter certeza de ir para o ceu?	" },
                { "track": 249, "name": "	#0930 A Biblia tem resposta para tudo?	", "length": "	03:54	", "file": "	http://www.mediafire.com/file/	60e0828u0ya6gx6	/	#0930 A Biblia tem resposta para tudo?	" },
                { "track": 250, "name": "	#0931 Este site é anti-catolicismo?	", "length": "	07:29	", "file": "	http://www.mediafire.com/file/	xrz9zivm40mxa3t	/	#0931 Este site é anti-catolicismo?	" },
                { "track": 251, "name": "	#0932 Minha filha esta' dormindo?	", "length": "	11:22	", "file": "	http://www.mediafire.com/file/	gu8v77gi3u0rj27	/	#0932 Minha filha esta' dormindo?	" },
                { "track": 252, "name": "	#0933 Se Cristo levou nossas enfermidades, por que adoecemos?	", "length": "	10:57	", "file": "	http://www.mediafire.com/file/	0cgak6k2dpjjhlm	/	#0933 Se Cristo levou nossas enfermidades, por que adoecemos?	" },
                { "track": 253, "name": "	#0934 Duvidas sobre uncao e votos	", "length": "	07:59	", "file": "	http://www.mediafire.com/file/	xmp3giyi7mqwz2a	/	#0934 Duvidas sobre uncao e votos	" },
                { "track": 254, "name": "	#0935 O que diz das curas e milagres que mostram na TV?	", "length": "	07:17	", "file": "	http://www.mediafire.com/file/	6nnf7bvxlory1ll	/	#0935 O que diz das curas e milagres que mostram na TV?	" },
                { "track": 255, "name": "	#0936 Já não fomos curados pelas chagas de Jesus?	", "length": "	19:01	", "file": "	http://www.mediafire.com/file/	1bliik44dmabgy6	/	#0936 Já não fomos curados pelas chagas de Jesus?	" },
                { "track": 256, "name": "	#0937 A Biblia condena a doacao e transplante de orgaos?	", "length": "	06:57	", "file": "	http://www.mediafire.com/file/	31pmyn59gd5s3rq	/	#0937 A Biblia condena a doacao e transplante de orgaos?	" },
                { "track": 257, "name": "	#0938 E' errado usar a palavra 'idolo' e 'adorar'?	", "length": "	07:55	", "file": "	http://www.mediafire.com/file/	59qk22c2h055tpe	/	#0938 E' errado usar a palavra 'idolo' e 'adorar'?	" },
                { "track": 258, "name": "	#0939 Os costumes citados em Corintios valem para hoje?	", "length": "	06:48	", "file": "	http://www.mediafire.com/file/	1nub9x34xaeb0ua	/	#0939 Os costumes citados em Corintios valem para hoje?	" },
                { "track": 259, "name": "	#0940 Por que Deus nao cura os amputados?	", "length": "	12:35	", "file": "	http://www.mediafire.com/file/	lc2vo8omehg09gy	/	#0940 Por que Deus nao cura os amputados?	" },
                { "track": 260, "name": "	#0941 Mulheres cristas nao podem falar?	", "length": "	18:03	", "file": "	http://www.mediafire.com/file/	ish2q94uqss5rhs	/	#0941 Mulheres cristas nao podem falar?	" },
                { "track": 261, "name": "	#0942 Nada e' impossivel ao que cre?	", "length": "	05:09	", "file": "	http://www.mediafire.com/file/	yun6hzdebk87ydz	/	#0942 Nada e' impossivel ao que cre?	" },
                { "track": 262, "name": "	#0943 Nao e' mais seguro crer so' na ciencia?	", "length": "	04:07	", "file": "	http://www.mediafire.com/file/	17kmptnc54s885t	/	#0943 Nao e' mais seguro crer so' na ciencia?	" },
                { "track": 263, "name": "	#0944 Se estou salvo, por que continuo aqui?	", "length": "	05:57	", "file": "	http://www.mediafire.com/file/	1i9r1k868tti7d0	/	#0944 Se estou salvo, por que continuo aqui?	" },
                { "track": 264, "name": "	#0945 Como entender a Biblia?	", "length": "	08:39	", "file": "	http://www.mediafire.com/file/	z4hy8co7789b0yq	/	#0945 Como entender a Biblia?	" },
                { "track": 265, "name": "	#0946 So' posso ser batizado se estiver legalmente casado?	", "length": "	05:45	", "file": "	http://www.mediafire.com/file/	9h4yag8n14844oy	/	#0946 So' posso ser batizado se estiver legalmente casado?	" },
                { "track": 266, "name": "	#0947 Nao preciso fazer nada para entrar no ceu?	", "length": "	07:29	", "file": "	http://www.mediafire.com/file/	6888s6oy9larso2	/	#0947 Nao preciso fazer nada para entrar no ceu?	" },
                { "track": 267, "name": "	#0948 E' possivel um cristao entrar em depressao?	", "length": "	09:43	", "file": "	http://www.mediafire.com/file/	dcdrwg476y666kh	/	#0948 E' possivel um cristao entrar em depressao?	" },
                { "track": 268, "name": "	#0949 Como e' uma reuniao da assembleia na pratica?	", "length": "	01:44	", "file": "	http://www.mediafire.com/file/	md872ve2dfvd9ym	/	#0949 Como e' uma reuniao da assembleia na pratica?	" },
                { "track": 269, "name": "	#0950 Os ataques do ISIS são o cumprimento da profecia?	", "length": "	12:28	", "file": "	http://www.mediafire.com/file/	7jzqaalq1oae4ax	/	#0950 Os ataques do ISIS são o cumprimento da profecia?	" },
                { "track": 270, "name": "	#0951 O que voce acha do Natal?	", "length": "	18:37	", "file": "	http://www.mediafire.com/file/	dqjeyvdpcci97k3	/	#0951 O que voce acha do Natal?	" },
                { "track": 271, "name": "	#0952 Devo seguir as palavras de Paulo?	", "length": "	13:36	", "file": "	http://www.mediafire.com/file/	klhqbb2ji3697uo	/	#0952 Devo seguir as palavras de Paulo?	" },
                { "track": 272, "name": "	#0953 O cristao pode andar armado?	", "length": "	09:11	", "file": "	http://www.mediafire.com/file/	21u1q5q87853791	/	#0953 O cristao pode andar armado?	" },
                { "track": 273, "name": "	#0954 O cristao deve orar na direcao de Jerusalem?	", "length": "	07:12	", "file": "	http://www.mediafire.com/file/	hcah442oy6f5zs4	/	#0954 O cristao deve orar na direcao de Jerusalem?	" },
                { "track": 274, "name": "	#0955 Como suportar a morte na familia?	", "length": "	13:56	", "file": "	http://www.mediafire.com/file/	9cnansf65vxxjxv	/	#0955 Como suportar a morte na familia?	" },
                { "track": 275, "name": "	#0956 Os anjos foram os pais dos gigantes da Biblia?	", "length": "	04:47	", "file": "	http://www.mediafire.com/file/	xm6r5epzty6qv5z	/	#0956 Os anjos foram os pais dos gigantes da Biblia?	" },
                { "track": 276, "name": "	#0957 Quem nao ira' no arrebatamento?	", "length": "	04:08	", "file": "	http://www.mediafire.com/file/	rs1q6gr8v1o3xu1	/	#0957 Quem nao ira' no arrebatamento?	" },
                { "track": 277, "name": "	#0958 O que significa 'a letra mata'?	", "length": "	04:49	", "file": "	http://www.mediafire.com/file/	oeyb32gax8n4pb5	/	#0958 O que significa 'a letra mata'?	" },
                { "track": 278, "name": "	#0959 O que acha da 'Congregacao Crista no Brasil'?	", "length": "	23:32	", "file": "	http://www.mediafire.com/file/	vazzgeuaxlgtlmp	/	#0959 O que acha da 'Congregacao Crista no Brasil'?	" },
                { "track": 279, "name": "	#0960 Devemos seguir o Antigo Testamento?	", "length": "	04:30	", "file": "	http://www.mediafire.com/file/	85wma5m82am15oc	/	#0960 Devemos seguir o Antigo Testamento?	" },
                { "track": 280, "name": "	#0961 O cristianismo nao é uma religiao?	", "length": "	14:28	", "file": "	http://www.mediafire.com/file/	0lu4u2gedy7ddnj	/	#0961 O cristianismo nao é uma religiao?	" },
                { "track": 281, "name": "	#0962 Devo participar de abaixo assinado contra filme?	", "length": "	10:23	", "file": "	http://www.mediafire.com/file/	85tjksijf7r4hud	/	#0962 Devo participar de abaixo assinado contra filme?	" },
                { "track": 282, "name": "	#0963 O nome de Jesus so' pode ser pregado em hebraico?	", "length": "	08:14	", "file": "	http://www.mediafire.com/file/	bvj76dazq8w5dhk	/	#0963 O nome de Jesus so' pode ser pregado em hebraico?	" },
                { "track": 283, "name": "	#0964 É certo eu ser chamado de fundamentalista?	", "length": "	03:27	", "file": "	http://www.mediafire.com/file/	7p8cx68cbep6gev	/	#0964 É certo eu ser chamado de fundamentalista?	" },
                { "track": 284, "name": "	#0965 Como se reunir sem um templo?	", "length": "	07:01	", "file": "	http://www.mediafire.com/file/	0k10v221m7i310w	/	#0965 Como se reunir sem um templo?	" },
                { "track": 285, "name": "	#0966 Quem são os justos na Biblia?	", "length": "	07:44	", "file": "	http://www.mediafire.com/file/	asvk35hlmsyx4as	/	#0966 Quem são os justos na Biblia?	" },
                { "track": 286, "name": "	#0967 Como voce entende a expressao 'casa de deus'?	", "length": "	11:30	", "file": "	http://www.mediafire.com/file/	a9288y2fzu7o38s	/	#0967 Como voce entende a expressao 'casa de deus'?	" },
                { "track": 287, "name": "	#0968 Qual o papel que 'minha igreja' teve em minha conversao e edificacao?	", "length": "	14:13	", "file": "	http://www.mediafire.com/file/	3bibapex5ab5tco	/	#0968 Qual o papel que 'minha igreja' teve em minha conversao e edificacao?	" },
                { "track": 288, "name": "	#0969 Como evitar ser tentado?	", "length": "	18:16	", "file": "	http://www.mediafire.com/file/	xi9dxvu8y1ckjnj	/	#0969 Como evitar ser tentado?	" },
                { "track": 289, "name": "	#0970 Jesus e' Deus?	", "length": "	06:19	", "file": "	http://www.mediafire.com/file/	ul4b8z4d71kj10w	/	#0970 Jesus e' Deus?	" },
                { "track": 290, "name": "	#0971 A salvacao e' pela graca somente?	", "length": "	12:41	", "file": "	http://www.mediafire.com/file/	2t9dojgbgw97m6g	/	#0971 A salvacao e' pela graca somente?	" },
                { "track": 291, "name": "	#0972 Deus não quer mais boas obras?	", "length": "	09:49	", "file": "	http://www.mediafire.com/file/	mlprrq3c1r13afk	/	#0972 Deus não quer mais boas obras?	" },
                { "track": 292, "name": "	#0973 Jesus foi um profeta como Maome'?	", "length": "	09:30	", "file": "	http://www.mediafire.com/file/	dy572tdmm5gafar	/	#0973 Jesus foi um profeta como Maome'?	" },
                { "track": 293, "name": "	#0974 Qual a diferenca entre islamismo e cristianismo?	", "length": "	17:25	", "file": "	http://www.mediafire.com/file/	ucb491banpe2f68	/	#0974 Qual a diferenca entre islamismo e cristianismo?	" },
                { "track": 294, "name": "	#0975 Existem contradicoes na Biblia?	", "length": "	09:20	", "file": "	http://www.mediafire.com/file/	pfa5i2ejdmb1ljs	/	#0975 Existem contradicoes na Biblia?	" },
                { "track": 295, "name": "	#0976 Quem morre vai ao ceu ou ao paraiso?	", "length": "	09:06	", "file": "	http://www.mediafire.com/file/	btkjptc82dmt3y5	/	#0976 Quem morre vai ao ceu ou ao paraiso?	" },
                { "track": 296, "name": "	#0977 Qual fe' e' suficiente para salvar?	", "length": "	12:43	", "file": "	http://www.mediafire.com/file/	ayp961s9qa6xza8	/	#0977 Qual fe' e' suficiente para salvar?	" },
                { "track": 297, "name": "	#0978 O cristianismo nao e' baseado no paganismo?	", "length": "	09:35	", "file": "	http://www.mediafire.com/file/	pky807hk85vv5z8	/	#0978 O cristianismo nao e' baseado no paganismo?	" },
                { "track": 298, "name": "	#0979 A fe' pode ser provada pela ciencia?	", "length": "	14:04	", "file": "	http://www.mediafire.com/file/	58uj1v8jznfsspu	/	#0979 A fe' pode ser provada pela ciencia?	" },
                { "track": 299, "name": "	#0980 Por que Deus cria pessoas com imperfeicoes?	", "length": "	04:21	", "file": "	http://www.mediafire.com/file/	5azd6acr2778ztz	/	#0980 Por que Deus cria pessoas com imperfeicoes?	" },
                { "track": 300, "name": "	#0981 As coisas foram criadas a partir da luz?	", "length": "	06:17	", "file": "	http://www.mediafire.com/file/	c2h5d2bwb79j8ng	/	#0981 As coisas foram criadas a partir da luz?	" },
                { "track": 301, "name": "	#0982 Existem milagres?	", "length": "	07:18	", "file": "	http://www.mediafire.com/file/	dztiymd21qg52zd	/	#0982 Existem milagres?	" },
                { "track": 302, "name": "	#0983 A que obras maiores o Senhor se referiu?	", "length": "	04:01	", "file": "	http://www.mediafire.com/file/	2nc7qurrcl9kftr	/	#0983 A que obras maiores o Senhor se referiu?	" },
                { "track": 303, "name": "	#0984 O inferno existe ou e' so' uma expressao?	", "length": "	09:35	", "file": "	http://www.mediafire.com/file/	1s65olqo2egf3p9	/	#0984 O inferno existe ou e' so' uma expressao?	" },
                { "track": 304, "name": "	#0985 Os espiritas acreditam so' nos evangelhos?	", "length": "	10:46	", "file": "	http://www.mediafire.com/file/	a3ajslu2ed7tphb	/	#0985 Os espiritas acreditam so' nos evangelhos?	" },
                { "track": 305, "name": "	#0986 E' pecado considerar-se salvo?	", "length": "	07:40	", "file": "	http://www.mediafire.com/file/	ca6ys886qhj9m6g	/	#0986 E' pecado considerar-se salvo?	" },
                { "track": 306, "name": "	#0987 Preciso ser catolico para ser salvo?	", "length": "	14:15	", "file": "	http://www.mediafire.com/file/	z6ecly7c4583ypd	/	#0987 Preciso ser catolico para ser salvo?	" },
                { "track": 307, "name": "	#0988 A doutrina espirita é baseada na Biblia?	", "length": "	10:36	", "file": "	http://www.mediafire.com/file/	3bsxzqf3p3lm9wn	/	#0988 A doutrina espirita é baseada na Biblia?	" },
                { "track": 308, "name": "	#0989 A reencarnacao e' uma lei natural?	", "length": "	07:34	", "file": "	http://www.mediafire.com/file/	p0wraf6534omcx4	/	#0989 A reencarnacao e' uma lei natural?	" },
                { "track": 309, "name": "	#0990 A reencarnacao e' uma doutrina racista?	", "length": "	13:31	", "file": "	http://www.mediafire.com/file/	mm3m2v65ranq0j7	/	#0990 A reencarnacao e' uma doutrina racista?	" },
                { "track": 310, "name": "	#0991 Quem sao os filhos de Deus?	", "length": "	04:47	", "file": "	http://www.mediafire.com/file/	5095ijrpxj6qa2b	/	#0991 Quem sao os filhos de Deus?	" },
                { "track": 311, "name": "	#0992 Para ser cristao e' preciso ser perfeito?	", "length": "	04:27	", "file": "	http://www.mediafire.com/file/	m2vw7jnue6ype8s	/	#0992 Para ser cristao e' preciso ser perfeito?	" },
                { "track": 312, "name": "	#0993 Foi a guerra do Iraque uma nova cruzada?	", "length": "	19:10	", "file": "	http://www.mediafire.com/file/	mqx4czztkbyer9y	/	#0993 Foi a guerra do Iraque uma nova cruzada?	" },
                { "track": 313, "name": "	#0994 Por que voce ataca os espiritas?	", "length": "	06:11	", "file": "	http://www.mediafire.com/file/	sc11u7iwtfcz7kg	/	#0994 Por que voce ataca os espiritas?	" },
                { "track": 314, "name": "	#0995 Jesus nao disse para nao julgarmos?	", "length": "	14:34	", "file": "	http://www.mediafire.com/file/	3fkl311997t9dzz	/	#0995 Jesus nao disse para nao julgarmos?	" },
                { "track": 315, "name": "	#0996 Os cristaos sao intolerantes?	", "length": "	06:42	", "file": "	http://www.mediafire.com/file/	xpwudjy8ayuy2ed	/	#0996 Os cristaos sao intolerantes?	" },
                { "track": 316, "name": "	#0997 A Biblia ensina que a salvacao e' por obras?	", "length": "	09:54	", "file": "	http://www.mediafire.com/file/	9ts38j6gtbdjbdl	/	#0997 A Biblia ensina que a salvacao e' por obras?	" },
                { "track": 317, "name": "	#0998 Em que parte da Biblia devemos crer?	", "length": "	04:02	", "file": "	http://www.mediafire.com/file/	sq5b5322ll60i91	/	#0998 Em que parte da Biblia devemos crer?	" },
                { "track": 318, "name": "	#0999 Devo fazer um curso de teologia?	", "length": "	05:25	", "file": "	http://www.mediafire.com/file/	pq625sqw77f67vv	/	#0999 Devo fazer um curso de teologia?	" },
                { "track": 319, "name": "	#1000 Por que a Biblia e' comparada 'a espada?	", "length": "	06:11	", "file": "	http://www.mediafire.com/file/	z6n3103p1oo5prf	/	#1000 Por que a Biblia e' comparada 'a espada?	" },
                { "track": 320, "name": "	#1001 A Biblia foi realmente inspirada por Deus?	", "length": "	11:07	", "file": "	http://www.mediafire.com/file/	1y86y2bkhedtn50	/	#1001 A Biblia foi realmente inspirada por Deus?	" },
                { "track": 321, "name": "	#1002 Quem sao os anticristos?	", "length": "	18:02	", "file": "	http://www.mediafire.com/file/	11ely5z2acolb8l	/	#1002 Quem sao os anticristos?	" },
                { "track": 322, "name": "	#1003 O que significa a Mesa do Senhor?	", "length": "	05:21	", "file": "	http://www.mediafire.com/file/	9ebjzw8ya7b66ei	/	#1003 O que significa a Mesa do Senhor?	" },
                { "track": 323, "name": "	#1004 Qual religiao pode me salvar?	", "length": "	07:48	", "file": "	http://www.mediafire.com/file/	l7116qm2t0ijb2r	/	#1004 Qual religiao pode me salvar?	" },
                { "track": 324, "name": "	#1005 Em que templo devo adorar?	", "length": "	06:06	", "file": "	http://www.mediafire.com/file/	qd2l8f296jad9aq	/	#1005 Em que templo devo adorar?	" },
                { "track": 325, "name": "	#1006 O que o Espirito Santo veio fazer aqui?	", "length": "	10:44	", "file": "	http://www.mediafire.com/file/	9p2s325vajqaixy	/	#1006 O que o Espirito Santo veio fazer aqui?	" },
                { "track": 326, "name": "	#1007 O espiritismo acredita nas palavras de Jesus?	", "length": "	05:54	", "file": "	http://www.mediafire.com/file/	m8oc721gk433xu7	/	#1007 O espiritismo acredita nas palavras de Jesus?	" },
                { "track": 327, "name": "	#1008 Por que Deus mandou matar nações inteiras no Antigo Testamento?	", "length": "	07:07	", "file": "	http://www.mediafire.com/file/	7pua356saw7qvqp	/	#1008 Por que Deus mandou matar nações inteiras no Antigo Testamento?	" },
                { "track": 328, "name": "	#1009 O que preciso fazer para ser salvo?	", "length": "	04:01	", "file": "	http://www.mediafire.com/file/	b8nabxd6jpt90r4	/	#1009 O que preciso fazer para ser salvo?	" },
                { "track": 329, "name": "	#1010 O que significa Abba?	", "length": "	02:53	", "file": "	http://www.mediafire.com/file/	b8qourtv4cass5o	/	#1010 O que significa Abba?	" },
                { "track": 330, "name": "	#1011 Pode explicar espirito, alma e corpo?	", "length": "	04:42	", "file": "	http://www.mediafire.com/file/	9s2bbv81d5s6bv6	/	#1011 Pode explicar espirito, alma e corpo?	" },
                { "track": 331, "name": "	#1012 Quem sao os anjos caidos?	", "length": "	04:00	", "file": "	http://www.mediafire.com/file/	k416uc926u55c1i	/	#1012 Quem sao os anjos caidos?	" },
                { "track": 332, "name": "	#1013 O que e' batismo do Espirito Santo?	", "length": "	04:53	", "file": "	http://www.mediafire.com/file/	dzlbbhpzaky5437	/	#1013 O que e' batismo do Espirito Santo?	" },
                { "track": 333, "name": "	#1014 Qual é o pecado sem perdão?	", "length": "	04:37	", "file": "	http://www.mediafire.com/file/	326oc3iwpftctdv	/	#1014 Qual é o pecado sem perdão?	" },
                { "track": 334, "name": "	#1015 Com quem se casou Caim?	", "length": "	08:54	", "file": "	http://www.mediafire.com/file/	dbnbo5cd59uwri1	/	#1015 Com quem se casou Caim?	" },
                { "track": 335, "name": "	#1016 Onde celebrar a ceia do Senhor?	", "length": "	08:15	", "file": "	http://www.mediafire.com/file/	kmezc34c2yda15c	/	#1016 Onde celebrar a ceia do Senhor?	" },
                { "track": 336, "name": "	#1017 Existe diferença entre inferno, lago de fogo, hades, sheol e geena?	", "length": "	07:04	", "file": "	http://www.mediafire.com/file/	cf86s4b0a3058u9	/	#1017 Existe diferença entre inferno, lago de fogo, hades, sheol e geena?	" },
                { "track": 337, "name": "	#1018 O que significa o Batismo?	", "length": "	12:33	", "file": "	http://www.mediafire.com/file/	p5go3gtx5o5un5q	/	#1018 O que significa o Batismo?	" },
                { "track": 338, "name": "	#1019 Como conviver com o vazio e a tristeza?	", "length": "	11:55	", "file": "	http://www.mediafire.com/file/	u62r7hkrfs536e6	/	#1019 Como conviver com o vazio e a tristeza?	" },
                { "track": 339, "name": "	#1020 Como enfrentar as tentações?	", "length": "	05:12	", "file": "	http://www.mediafire.com/file/	f4xfy3h9g91fc7n	/	#1020 Como enfrentar as tentações?	" },
                { "track": 340, "name": "	#1021 Por que ha' tantas denominacoes?	", "length": "	02:08	", "file": "	http://www.mediafire.com/file/	eiueby8y9ydnpij	/	#1021 Por que ha' tantas denominacoes?	" },
                { "track": 341, "name": "	#1022 Como celebrar a ceia do Senhor?	", "length": "	09:57	", "file": "	http://www.mediafire.com/file/	odw8phd6sg4k21b	/	#1022 Como celebrar a ceia do Senhor?	" },
                { "track": 342, "name": "	#1022 Como celebrar a ceia do Senhor?	", "length": "	09:32	", "file": "	http://www.mediafire.com/file/	ndu91cfmr7zmua7	/	#1022 Como celebrar a ceia do Senhor?	" },
                { "track": 343, "name": "	#1023 Devo divulgar denominacao?	", "length": "	04:01	", "file": "	http://www.mediafire.com/file/	glwew1vi194dwl1	/	#1023 Devo divulgar denominacao?	" },
                { "track": 344, "name": "	#1024 A Biblia considera a mulher inferior ao homem?	", "length": "	10:02	", "file": "	http://www.mediafire.com/file/	cv3j13pu7amk98f	/	#1024 A Biblia considera a mulher inferior ao homem?	" },
                { "track": 345, "name": "	#1025 Existe alguma condicao para falar linguas estranhas?	", "length": "	03:37	", "file": "	http://www.mediafire.com/file/	lahqszxy1caei5a	/	#1025 Existe alguma condicao para falar linguas estranhas?	" },
                { "track": 346, "name": "	#1026 Como enfrentar as aflicoes?	", "length": "	03:36	", "file": "	http://www.mediafire.com/file/	lbzb0dll736x98r	/	#1026 Como enfrentar as aflicoes?	" },
                { "track": 347, "name": "	#1027 O cristao pode beber vinho?	", "length": "	03:33	", "file": "	http://www.mediafire.com/file/	udw9dfj17bxdry0	/	#1027 O cristao pode beber vinho?	" },
                { "track": 348, "name": "	#1028 Quem deve celebrar o casamento?	", "length": "	05:09	", "file": "	http://www.mediafire.com/file/	q89r89mvm6mj628	/	#1028 Quem deve celebrar o casamento?	" },
                { "track": 349, "name": "	#1029 O que é ósculo?	", "length": "	04:22	", "file": "	http://www.mediafire.com/file/	ak0922vmiew3lnx	/	#1029 O que é ósculo?	" },
                { "track": 350, "name": "	#1030 O que significa o lava-pes?	", "length": "	02:42	", "file": "	http://www.mediafire.com/file/	gqsmyr0udsk7y1v	/	#1030 O que significa o lava-pes?	" },
                { "track": 351, "name": "	#1031 Existem profetas hoje?	", "length": "	03:16	", "file": "	http://www.mediafire.com/file/	0z6jy7cyg6mv7mp	/	#1031 Existem profetas hoje?	" },
                { "track": 352, "name": "	#1032 Joao Batista era Elias?	", "length": "	05:02	", "file": "	http://www.mediafire.com/file/	td3ooeelvddtu8g	/	#1032 Joao Batista era Elias?	" },
                { "track": 353, "name": "	#1033 Quando um cristao se torna santo?	", "length": "	03:21	", "file": "	http://www.mediafire.com/file/	dqd6j4fe7abjvob	/	#1033 Quando um cristao se torna santo?	" },
                { "track": 354, "name": "	#1034 Não e' presuncao você dizer que esta' salvo?	", "length": "	03:54	", "file": "	http://www.mediafire.com/file/	geta1kzvdieqbbq	/	#1034 Não e' presuncao você dizer que esta' salvo?	" },
                { "track": 355, "name": "	#1035 Qual o significado da Besta e do 666 em Apocalipse?	", "length": "	07:21	", "file": "	http://www.mediafire.com/file/	xkx4ojkxwfa9182	/	#1035 Qual o significado da Besta e do 666 em Apocalipse?	" },
                { "track": 356, "name": "	#1036 Qual a diferenca entre 'pecado' e 'pecados'?	", "length": "	06:01	", "file": "	http://www.mediafire.com/file/	zai4ladkpba261i	/	#1036 Qual a diferenca entre 'pecado' e 'pecados'?	" },
                { "track": 357, "name": "	#1037 Você já pertenceu a alguma denominação?	", "length": "	10:02	", "file": "	http://www.mediafire.com/file/	26wv6v9vjrwjps5	/	#1037 Você já pertenceu a alguma denominação?	" },
                { "track": 358, "name": "	#1038 Como posso servir mais ao Senhor?	", "length": "	05:26	", "file": "	http://www.mediafire.com/file/	k53311f9hn90v69	/	#1038 Como posso servir mais ao Senhor?	" },
                { "track": 359, "name": "	#1039 Devemos usar instrumentos musicais na adoracao?	", "length": "	13:54	", "file": "	http://www.mediafire.com/file/	nkfv5t4o6a5l7qn	/	#1039 Devemos usar instrumentos musicais na adoracao?	" },
                { "track": 360, "name": "	#1040 Quem deve liderar nas reunioes da igreja?	", "length": "	09:23	", "file": "	http://www.mediafire.com/file/	8bldq4jpd4ybcof	/	#1040 Quem deve liderar nas reunioes da igreja?	" },
                { "track": 361, "name": "	#1041 Qual o verdadeiro lugar de adoracao?	", "length": "	16:44	", "file": "	http://www.mediafire.com/file/	4r4cp6efs8krpa4	/	#1041 Qual o verdadeiro lugar de adoracao?	" },
                { "track": 362, "name": "	#1042 Como os dons se manifestam na igreja?	", "length": "	13:07	", "file": "	http://www.mediafire.com/file/	i6hk08hc11vvdjq	/	#1042 Como os dons se manifestam na igreja?	" },
                { "track": 363, "name": "	#1043 O que faz um evangelista?	", "length": "	06:08	", "file": "	http://www.mediafire.com/file/	3qbvrzz3tqad010	/	#1043 O que faz um evangelista?	" },
                { "track": 364, "name": "	#1044 O que significa 'reunir-se ao nome do Senhor'?	", "length": "	15:25	", "file": "	http://www.mediafire.com/file/	cccyfv3fn8cuxf7	/	#1044 O que significa 'reunir-se ao nome do Senhor'?	" },
                { "track": 365, "name": "	#1045 Posso pedir dinheiro para a obra do evangelho?	", "length": "	06:08	", "file": "	http://www.mediafire.com/file/	vscs1b9z969sdlx	/	#1045 Posso pedir dinheiro para a obra do evangelho?	" },
                { "track": 366, "name": "	#1046 Por que nao otimizar o tempo das reunioes?	", "length": "	11:09	", "file": "	http://www.mediafire.com/file/	u33yg3v36ro7flu	/	#1046 Por que nao otimizar o tempo das reunioes?	" },
                { "track": 367, "name": "	#1047 A arca de Noe' transportou dinossauros?	", "length": "	08:53	", "file": "	http://www.mediafire.com/file/	lou85sy5k0k6mnb	/	#1047 A arca de Noe' transportou dinossauros?	" },
                { "track": 368, "name": "	#1048 O que significa dispensacao?	", "length": "	06:38	", "file": "	http://www.mediafire.com/file/	28pd6n6hah51ttj	/	#1048 O que significa dispensacao?	" },
                { "track": 369, "name": "	#1049 Qual sua opiniao sobre folhetos evangelisticos?	", "length": "	06:02	", "file": "	http://www.mediafire.com/file/	q30zak8hr7ect69	/	#1049 Qual sua opiniao sobre folhetos evangelisticos?	" },
                { "track": 370, "name": "	#1050 Um cristao pode dancar?	", "length": "	08:27	", "file": "	http://www.mediafire.com/file/	kq01c55j17pc47b	/	#1050 Um cristao pode dancar?	" },
                { "track": 371, "name": "	#1051 Que significado tem o sabado para o cristao?	", "length": "	06:00	", "file": "	http://www.mediafire.com/file/	0opdvf5b49cfl2i	/	#1051 Que significado tem o sabado para o cristao?	" },
                { "track": 372, "name": "	#1052 Noe' realmente se embriagou?	", "length": "	05:37	", "file": "	http://www.mediafire.com/file/	l0yis743aypz23s	/	#1052 Noe' realmente se embriagou?	" },
                { "track": 373, "name": "	#1053 O que significa o remendo novo e o odre novo?	", "length": "	04:19	", "file": "	http://www.mediafire.com/file/	7bqlbr5tkhhv9r6	/	#1053 O que significa o remendo novo e o odre novo?	" },
                { "track": 374, "name": "	#1054 O que significa a palavra Igreja?	", "length": "	10:55	", "file": "	http://www.mediafire.com/file/	jjbbcce2ctwexse	/	#1054 O que significa a palavra Igreja?	" },
                { "track": 375, "name": "	#1055 E' possivel ver a Deus?	", "length": "	05:38	", "file": "	http://www.mediafire.com/file/	dq773u5b49i495w	/	#1055 E' possivel ver a Deus?	" },
                { "track": 376, "name": "	#1056 Como um cristao deve se vestir?	", "length": "	05:00	", "file": "	http://www.mediafire.com/file/	p53i4h982dz5u8b	/	#1056 Como um cristao deve se vestir?	" },
                { "track": 377, "name": "	#1057 Jesus tinha irmaos?	", "length": "	04:11	", "file": "	http://www.mediafire.com/file/	ybd2scg0fwdf1j5	/	#1057 Jesus tinha irmaos?	" },
                { "track": 378, "name": "	#1058 A Biblia proibe a transfusao de sangue?	", "length": "	02:46	", "file": "	http://www.mediafire.com/file/	u3pz33r7in4rl28	/	#1058 A Biblia proibe a transfusao de sangue?	" },
                { "track": 379, "name": "	#1059 E' possível congregar com desprendimento denominacional?	", "length": "	22:25	", "file": "	http://www.mediafire.com/file/	dxzlux62mi5odml	/	#1059 E' possível congregar com desprendimento denominacional?	" },
                { "track": 380, "name": "	#1060 Deus e' autor do mal?	", "length": "	06:44	", "file": "	http://www.mediafire.com/file/	2uz0ycerwqoj34y	/	#1060 Deus e' autor do mal?	" },
                { "track": 381, "name": "	#1061 O que significa o arrebatamento?	", "length": "	05:26	", "file": "	http://www.mediafire.com/file/	qd8op9wiod3l0ze	/	#1061 O que significa o arrebatamento?	" },
                { "track": 382, "name": "	#1062 Qual a relacao de Cristo com a Lei dada a Moises?	", "length": "	03:27	", "file": "	http://www.mediafire.com/file/	nucta6e5jmbecc1	/	#1062 Qual a relacao de Cristo com a Lei dada a Moises?	" },
                { "track": 383, "name": "	#1063 Qual a diferenca entre crer e acreditar?	", "length": "	03:27	", "file": "	http://www.mediafire.com/file/	1lvg333q3a9x1ne	/	#1063 Qual a diferenca entre crer e acreditar?	" },
                { "track": 384, "name": "	#1064 Posso perder minha salvacao?	", "length": "	04:40	", "file": "	http://www.mediafire.com/file/	b4pvbrtwzjmwbbt	/	#1064 Posso perder minha salvacao?	" },
                { "track": 385, "name": "	#1065 A Bíblia proibe a mulher de cortar o cabelo?	", "length": "	05:05	", "file": "	http://www.mediafire.com/file/	k4n1s69xez47dro	/	#1065 A Bíblia proibe a mulher de cortar o cabelo?	" },
                { "track": 386, "name": "	#1066 Deus induz alguem a pecar?	", "length": "	03:48	", "file": "	http://www.mediafire.com/file/	6cdcj6qcooln7x2	/	#1066 Deus induz alguem a pecar?	" },
                { "track": 387, "name": "	#1067 Qual a diferenca entre o batismo e o selo do Espirito?	", "length": "	14:36	", "file": "	http://www.mediafire.com/file/	ltjujvalc5b9uuo	/	#1067 Qual a diferenca entre o batismo e o selo do Espirito?	" },
                { "track": 388, "name": "	#1068 Afastei-me de Jesus. O que fazer?	", "length": "	07:30	", "file": "	http://www.mediafire.com/file/	0y8a0sqnwjsybyd	/	#1068 Afastei-me de Jesus. O que fazer?	" },
                { "track": 389, "name": "	#1069 Como proceder em relação 'a 'Nova Era'?	", "length": "	04:16	", "file": "	http://www.mediafire.com/file/	xsm63tm0xdnntis	/	#1069 Como proceder em relação 'a 'Nova Era'?	" },
                { "track": 390, "name": "	#1070 Como enfrentar a doenca e o sofrimento?	", "length": "	16:44	", "file": "	http://www.mediafire.com/file/	ys442fkg6sajnu2	/	#1070 Como enfrentar a doenca e o sofrimento?	" },
                { "track": 391, "name": "	#1071 Por que no radio oferecem lencos, azeite e outros objetos 'ungidos'?	", "length": "	08:19	", "file": "	http://www.mediafire.com/file/	66wlxilh7nt1ejq	/	#1071 Por que no radio oferecem lencos, azeite e outros objetos 'ungidos'?	" },
                { "track": 392, "name": "	#1072 Qual a diferenca entre o arrebatamento e a vinda de Cristo?	", "length": "	05:18	", "file": "	http://www.mediafire.com/file/	ueei2eki2re2g1a	/	#1072 Qual a diferenca entre o arrebatamento e a vinda de Cristo?	" },
                { "track": 393, "name": "	#1073 O que acontecera' com o Espirito Santo no arrebatamento?	", "length": "	03:29	", "file": "	http://www.mediafire.com/file/	0l46290rxbhmncq	/	#1073 O que acontecera' com o Espirito Santo no arrebatamento?	" },
                { "track": 394, "name": "	#1074 Qual o carater de Cristo como juiz?	", "length": "	02:14	", "file": "	http://www.mediafire.com/file/	smfkoweg0qc4wob	/	#1074 Qual o carater de Cristo como juiz?	" },
                { "track": 395, "name": "	#1075 O que e' o Tribunal de Cristo?	", "length": "	02:26	", "file": "	http://www.mediafire.com/file/	2dcg13my93lmkjw	/	#1075 O que e' o Tribunal de Cristo?	" },
                { "track": 396, "name": "	#1076 Onde as Americas se encaixam na profecia?	", "length": "	01:52	", "file": "	http://www.mediafire.com/file/	tywew395vessrsd	/	#1076 Onde as Americas se encaixam na profecia?	" },
                { "track": 397, "name": "	#1077 O que e' o 'Evangelho do Reino'?	", "length": "	03:24	", "file": "	http://www.mediafire.com/file/	he608ulageqn15d	/	#1077 O que e' o 'Evangelho do Reino'?	" },
                { "track": 398, "name": "	#1078 O que e' o exercito de 200 milhoes de Apocalipse?	", "length": "	04:37	", "file": "	http://www.mediafire.com/file/	prkmqafozcz5q6y	/	#1078 O que e' o exercito de 200 milhoes de Apocalipse?	" },
                { "track": 399, "name": "	#1079 De quantas Jerusalens a Biblia fala?	", "length": "	01:34	", "file": "	http://www.mediafire.com/file/	b93qmp0dsa817p9	/	#1079 De quantas Jerusalens a Biblia fala?	" },
                { "track": 400, "name": "	#1080 Devo guardar a Lei para ser salvo?	", "length": "	10:02	", "file": "	http://www.mediafire.com/file/	jeqhgfdzjdx6dp6	/	#1080 Devo guardar a Lei para ser salvo?	" },
                { "track": 401, "name": "	#1081 Posso me casar com uma incredula?	", "length": "	07:04	", "file": "	http://www.mediafire.com/file/	22s60rsxnxc3by9	/	#1081 Posso me casar com uma incredula?	" },
                { "track": 402, "name": "	#1082 A Biblia condena o sexo antes do casamento?	", "length": "	11:30	", "file": "	http://www.mediafire.com/file/	ao6o7rxllo491wh	/	#1082 A Biblia condena o sexo antes do casamento?	" },
                { "track": 403, "name": "	#1083 Um cristao pode usar crucifixos?	", "length": "	04:25	", "file": "	http://www.mediafire.com/file/	ag753uz958mcyfb	/	#1083 Um cristao pode usar crucifixos?	" },
                { "track": 404, "name": "	#1084 O que e' a Trindade?	", "length": "	02:46	", "file": "	http://www.mediafire.com/file/	zhb9scvsf6bo7g6	/	#1084 O que e' a Trindade?	" },
                { "track": 405, "name": "	#1085 Como expulsar demonios?	", "length": "	03:52	", "file": "	http://www.mediafire.com/file/	eylbgdvoxenmp4d	/	#1085 Como expulsar demonios?	" },
                { "track": 406, "name": "	#1086 O que e' uma seita?	", "length": "	03:06	", "file": "	http://www.mediafire.com/file/	voct138omfd0230	/	#1086 O que e' uma seita?	" },
                { "track": 407, "name": "	#1087 O que sao as Testemunhas de Jeova?	", "length": "	13:49	", "file": "	http://www.mediafire.com/file/	w9sbobgf6jbl326	/	#1087 O que sao as Testemunhas de Jeova?	" },
                { "track": 408, "name": "	#1088 Quem deve testemunhar de Cristo?	", "length": "	06:46	", "file": "	http://www.mediafire.com/file/	7h84aur8oydsu2i	/	#1088 Quem deve testemunhar de Cristo?	" },
                { "track": 409, "name": "	#1089 Qual a ordem dos acontecimentos profeticos?	", "length": "	03:51	", "file": "	http://www.mediafire.com/file/	brhbl4ball9c0e7	/	#1089 Qual a ordem dos acontecimentos profeticos?	" },
                { "track": 410, "name": "	#1090 E' errado deixar de congregar?	", "length": "	04:06	", "file": "	http://www.mediafire.com/file/	gikmlbaqrj26r6v	/	#1090 E' errado deixar de congregar?	" },
                { "track": 411, "name": "	#1091 Devemos obedecer aos pastores?	", "length": "	04:06	", "file": "	http://www.mediafire.com/file/	0jyyee1l174bbfg	/	#1091 Devemos obedecer aos pastores?	" },
                { "track": 412, "name": "	#1092 Qual e' a hierarquia na igreja?	", "length": "	09:37	", "file": "	http://www.mediafire.com/file/	vddh9h5tcz5jbts	/	#1092 Qual e' a hierarquia na igreja?	" },
                { "track": 413, "name": "	#1093 Deus responde a TODAS oracoes?	", "length": "	02:40	", "file": "	http://www.mediafire.com/file/	47lcg39sr4xb4y4	/	#1093 Deus responde a TODAS oracoes?	" },
                { "track": 414, "name": "	#1094 Mateus 24:40-41 fala do arrebatamento?	", "length": "	06:58	", "file": "	http://www.mediafire.com/file/	3syo95o1q2335t8	/	#1094 Mateus 24:40-41 fala do arrebatamento?	" },
                { "track": 415, "name": "	#1095 Um cristao pode tirar e ter retratos ou imagens de pessoas?	", "length": "	11:06	", "file": "	http://www.mediafire.com/file/	fatleb1j94m5vb4	/	#1095 Um cristao pode tirar e ter retratos ou imagens de pessoas?	" },
                { "track": 416, "name": "	#1096 Satanás pode influenciar um crente?	", "length": "	02:30	", "file": "	http://www.mediafire.com/file/	ub4666bmcsluxw7	/	#1096 Satanás pode influenciar um crente?	" },
                { "track": 417, "name": "	#1097 Cometer suicidio nao seria uma solucao?	", "length": "	09:16	", "file": "	http://www.mediafire.com/file/	h39q8q3o6i8fa3i	/	#1097 Cometer suicidio nao seria uma solucao?	" },
                { "track": 418, "name": "	#1098 Como enfrentar a morte de quem amamos?	", "length": "	14:43	", "file": "	http://www.mediafire.com/file/	1nvk5wgd5vcy61h	/	#1098 Como enfrentar a morte de quem amamos?	" },
                { "track": 419, "name": "	#1099 O que significa 'entregar a Satanas'?	", "length": "	05:32	", "file": "	http://www.mediafire.com/file/	xb7v266u09ir27r	/	#1099 O que significa 'entregar a Satanas'?	" },
                { "track": 420, "name": "	#1100 O que significa 'inferno'?	", "length": "	03:17	", "file": "	http://www.mediafire.com/file/	3a5by9x6p5f5v73	/	#1100 O que significa 'inferno'?	" },
                { "track": 421, "name": "	#1101 Como deve ser a saudacao entre irmaos?	", "length": "	01:53	", "file": "	http://www.mediafire.com/file/	u85gf2eqwesbo1f	/	#1101 Como deve ser a saudacao entre irmaos?	" },
                { "track": 422, "name": "	#1102 Como é o jejum que a Biblia ensina?	", "length": "	06:44	", "file": "	http://www.mediafire.com/file/	hah24chlc88d4r6	/	#1102 Como é o jejum que a Biblia ensina?	" },
                { "track": 423, "name": "	#1103 O que e' 'comer indignamente' a ceia?	", "length": "	03:32	", "file": "	http://www.mediafire.com/file/	1uzusgu5kccvl9x	/	#1103 O que e' 'comer indignamente' a ceia?	" },
                { "track": 424, "name": "	#1104 A mulher que ora sem veu ou sem cobrir a cabeca esta' salva?	", "length": "	08:16	", "file": "	http://www.mediafire.com/file/	ypfyt0k0yn0y7a5	/	#1104 A mulher que ora sem veu ou sem cobrir a cabeca esta' salva?	" },
                { "track": 425, "name": "	#1105 E' pecado usar aneis, pulseiras e colares?	", "length": "	07:57	", "file": "	http://www.mediafire.com/file/	wksb59v78n8eqmm	/	#1105 E' pecado usar aneis, pulseiras e colares?	" },
                { "track": 426, "name": "	#1106 O que e' ser “mais que vencedor”?	", "length": "	02:32	", "file": "	http://www.mediafire.com/file/	smj9a8p3yb8b44e	/	#1106 O que e' ser “mais que vencedor”?	" },
                { "track": 427, "name": "	#1107 O que significa o 'arraial' de Hebreus 13?	", "length": "	09:32	", "file": "	http://www.mediafire.com/file/	1y65708t9kdmsay	/	#1107 O que significa o 'arraial' de Hebreus 13?	" },
                { "track": 428, "name": "	#1108 Por que os animais sofrem e morrem?	", "length": "	03:06	", "file": "	http://www.mediafire.com/file/	tcutekudwmxufu1	/	#1108 Por que os animais sofrem e morrem?	" },
                { "track": 429, "name": "	#1109 As pessoas viviam mais no princípio?	", "length": "	04:25	", "file": "	http://www.mediafire.com/file/	87iddfkip04exzn	/	#1109 As pessoas viviam mais no princípio?	" },
                { "track": 430, "name": "	#1110 O que e' o Livro da Vida?	", "length": "	02:21	", "file": "	http://www.mediafire.com/file/	reolw899w924jae	/	#1110 O que e' o Livro da Vida?	" },
                { "track": 431, "name": "	#1111 E' possível reconhecer quem e' crente pelas roupas?	", "length": "	07:04	", "file": "	http://www.mediafire.com/file/	gaqg4fggmgbgqqg	/	#1111 E' possível reconhecer quem e' crente pelas roupas?	" },
                { "track": 432, "name": "	#1112 O 'Dia de Cristo' e' o arrebatamento?	", "length": "	02:05	", "file": "	http://www.mediafire.com/file/	avkqj14431qiq4d	/	#1112 O 'Dia de Cristo' e' o arrebatamento?	" },
                { "track": 433, "name": "	#1113 O que significa a Rosa de Sarom?	", "length": "	06:49	", "file": "	http://www.mediafire.com/file/	z40oya3i53wh63i	/	#1113 O que significa a Rosa de Sarom?	" },
                { "track": 434, "name": "	#1114 Como pregar o evangelho?	", "length": "	11:41	", "file": "	http://www.mediafire.com/file/	95i379wo094u44n	/	#1114 Como pregar o evangelho?	" },
                { "track": 435, "name": "	#1115 O mundo esta' realmente perdido?	", "length": "	04:58	", "file": "	http://www.mediafire.com/file/	97dc7i61wcwd8mi	/	#1115 O mundo esta' realmente perdido?	" },
                { "track": 436, "name": "	#1116 Como foi sua conversao?	", "length": "	07:52	", "file": "	http://www.mediafire.com/file/	nle3ppaxmcrfthp	/	#1116 Como foi sua conversao?	" },
                { "track": 437, "name": "	#1117 Como voce ve a volta dos judeus a Israel?	", "length": "	04:51	", "file": "	http://www.mediafire.com/file/	i27p96j6xdcwymx	/	#1117 Como voce ve a volta dos judeus a Israel?	" },
                { "track": 438, "name": "	#1118 O que a Bíblia diz sobre o homossexualismo e o homossexual?	", "length": "	19:07	", "file": "	http://www.mediafire.com/file/	ve759g3ddqjmp6g	/	#1118 O que a Bíblia diz sobre o homossexualismo e o homossexual?	" },
                { "track": 439, "name": "	#1119 O que significa 'canon'?	", "length": "	04:47	", "file": "	http://www.mediafire.com/file/	9z26l6q21ve4g1u	/	#1119 O que significa 'canon'?	" },
                { "track": 440, "name": "	#1120 Um cristao nao pode praticar esportes?	", "length": "	01:42	", "file": "	http://www.mediafire.com/file/	z9v9pymo0la8oht	/	#1120 Um cristao nao pode praticar esportes?	" },
                { "track": 441, "name": "	#1121 O que acha da musica gospel?	", "length": "	12:10	", "file": "	http://www.mediafire.com/file/	6ua76p37a7e5od4	/	#1121 O que acha da musica gospel?	" },
                { "track": 442, "name": "	#1122 O que e' novo nascimento?	", "length": "	09:54	", "file": "	http://www.mediafire.com/file/	28vy5vb841v83gk	/	#1122 O que e' novo nascimento?	" },
                { "track": 443, "name": "	#1123 O que e' revelacao?	", "length": "	05:19	", "file": "	http://www.mediafire.com/file/	ytbmb59c9jtqwur	/	#1123 O que e' revelacao?	" },
                { "track": 444, "name": "	#1124 O que significa 'fogo estranho'?	", "length": "	02:04	", "file": "	http://www.mediafire.com/file/	1t636hnm7t8ha6p	/	#1124 O que significa 'fogo estranho'?	" },
                { "track": 445, "name": "	#1125 Como deve ser o clero na igreja?	", "length": "	02:51	", "file": "	http://www.mediafire.com/file/	bz7bcypzc0u3ehd	/	#1125 Como deve ser o clero na igreja?	" },
                { "track": 446, "name": "	#1126 A Biblia fala da transubstanciacao?	", "length": "	07:01	", "file": "	http://www.mediafire.com/file/	271o4x0sc8gffbm	/	#1126 A Biblia fala da transubstanciacao?	" },
                { "track": 447, "name": "	#1127 E' Pedro a 'pedra' 'a qual Jesus se refere?	", "length": "	05:49	", "file": "	http://www.mediafire.com/file/	apva52ahgiiv2bt	/	#1127 E' Pedro a 'pedra' 'a qual Jesus se refere?	" },
                { "track": 448, "name": "	#1128 O que você acha dos testemunhos?	", "length": "	05:07	", "file": "	http://www.mediafire.com/file/	ajniu9cv4vubv4t	/	#1128 O que você acha dos testemunhos?	" },
                { "track": 449, "name": "	#1129 Epilepsia e' possessão demoniaca?	", "length": "	04:13	", "file": "	http://www.mediafire.com/file/	a06pai10rwkw3u5	/	#1129 Epilepsia e' possessão demoniaca?	" },
                { "track": 450, "name": "	#1130 Devo procurar a paz dentro de mim?	", "length": "	05:13	", "file": "	http://www.mediafire.com/file/	g076pong8qcc3nk	/	#1130 Devo procurar a paz dentro de mim?	" },
                { "track": 451, "name": "	#1131 Por que o cego foi expulso pelos judeus em Joao 9?	", "length": "	04:19	", "file": "	http://www.mediafire.com/file/	7771m09g3xpgt2w	/	#1131 Por que o cego foi expulso pelos judeus em Joao 9?	" },
                { "track": 452, "name": "	#1132 O que significa galardao?	", "length": "	03:56	", "file": "	http://www.mediafire.com/file/	ixhbc772lvtb30y	/	#1132 O que significa galardao?	" },
                { "track": 453, "name": "	#1133 Você acredita em discos voadores?	", "length": "	05:22	", "file": "	http://www.mediafire.com/file/	a1p4ufnt54f35v3	/	#1133 Você acredita em discos voadores?	" },
                { "track": 454, "name": "	#1134 Devemos esperar a igreja voltar ao que era no início?	", "length": "	09:50	", "file": "	http://www.mediafire.com/file/	hu4127sm8sxnfue	/	#1134 Devemos esperar a igreja voltar ao que era no início?	" },
                { "track": 455, "name": "	#1135 Qual reza ou oracao pode resolver meus problemas?	", "length": "	20:53	", "file": "	http://www.mediafire.com/file/	lhhkm5nnt87udwn	/	#1135 Qual reza ou oracao pode resolver meus problemas?	" },
                { "track": 456, "name": "	#1136 O que e' Teologia do Dominio?	", "length": "	11:02	", "file": "	http://www.mediafire.com/file/	359d1dpd56bpw6y	/	#1136 O que e' Teologia do Dominio?	" },
                { "track": 457, "name": "	#1137 Pessoas esclarecidas creem na Biblia?	", "length": "	12:27	", "file": "	http://www.mediafire.com/file/	3mkl0m7iuv4wdeb	/	#1137 Pessoas esclarecidas creem na Biblia?	" },
                { "track": 458, "name": "	#1138 Quem nunca ouviu o evangelho pode ser salvo?	", "length": "	08:25	", "file": "	http://www.mediafire.com/file/	qpcgjx7ulyljcxc	/	#1138 Quem nunca ouviu o evangelho pode ser salvo?	" },
                { "track": 459, "name": "	#1139 Existe livre arbitrio?	", "length": "	03:55	", "file": "	http://www.mediafire.com/file/	yg0abashtg75zv8	/	#1139 Existe livre arbitrio?	" },
                { "track": 460, "name": "	#1140 A Biblia fala algo sobre eleicao?	", "length": "	05:00	", "file": "	http://www.mediafire.com/file/	qfol0wv3v0fq2qa	/	#1140 A Biblia fala algo sobre eleicao?	" },
                { "track": 461, "name": "	#1141 Deus poderia salvar a TODOS?	", "length": "	03:59	", "file": "	http://www.mediafire.com/file/	m90yfkpuf7hz2de	/	#1141 Deus poderia salvar a TODOS?	" },
                { "track": 462, "name": "	#1142 O que e' um clerigo?	", "length": "	09:28	", "file": "	http://www.mediafire.com/file/	ei6uo7d9vdudafe	/	#1142 O que e' um clerigo?	" },
                { "track": 463, "name": "	#1143 Qual o significado do fermento em Mateus 13:33?	", "length": "	05:56	", "file": "	http://www.mediafire.com/file/	z3pn2laam5n2gh1	/	#1143 Qual o significado do fermento em Mateus 13:33?	" },
                { "track": 464, "name": "	#1144 Jesus era casado com Maria Madalena?	", "length": "	09:51	", "file": "	http://www.mediafire.com/file/	s78yxkd35kgzhb8	/	#1144 Jesus era casado com Maria Madalena?	" },
                { "track": 465, "name": "	#1145 O cristao pode fazer tatuagem?	", "length": "	02:11	", "file": "	http://www.mediafire.com/file/	c77qsl85malazxa	/	#1145 O cristao pode fazer tatuagem?	" },
                { "track": 466, "name": "	#1146 Satanas esta' no inferno?	", "length": "	04:57	", "file": "	http://www.mediafire.com/file/	nwfajh2h4g7ahac	/	#1146 Satanas esta' no inferno?	" },
                { "track": 467, "name": "	#1147 Existe reencarnacao?	", "length": "	12:21	", "file": "	http://www.mediafire.com/file/	aez2yqblv544595	/	#1147 Existe reencarnacao?	" },
                { "track": 468, "name": "	#1148 Existe vida em outros planetas?	", "length": "	15:55	", "file": "	http://www.mediafire.com/file/	a6h494cmnussnhd	/	#1148 Existe vida em outros planetas?	" },
                { "track": 469, "name": "	#1149 Por que o Senhor repreendeu os espiritos que o reconheceram?	", "length": "	03:07	", "file": "	http://www.mediafire.com/file/	44aguayo3mogsse	/	#1149 Por que o Senhor repreendeu os espiritos que o reconheceram?	" },
                { "track": 470, "name": "	#1150 O que significa a parabola das dez virgens?	", "length": "	03:14	", "file": "	http://www.mediafire.com/file/	bxcrvbyfievcy6p	/	#1150 O que significa a parabola das dez virgens?	" },
                { "track": 471, "name": "	#1151 Deus pode usar um falso cristão para pregar a Verdade?	", "length": "	08:18	", "file": "	http://www.mediafire.com/file/	o0op9lp3clyx49e	/	#1151 Deus pode usar um falso cristão para pregar a Verdade?	" },
                { "track": 472, "name": "	#1152 A Biblia tem base cientifica?	", "length": "	07:41	", "file": "	http://www.mediafire.com/file/	ce0lj0nrmwbcg9r	/	#1152 A Biblia tem base cientifica?	" },
                { "track": 473, "name": "	#1153 O que acha do livro “Ismael - Um Romance da Condicao Humana” 	", "length": "	08:58	", "file": "	http://www.mediafire.com/file/	3kti6d4kbpybvco	/	#1153 O que acha do livro “Ismael - Um Romance da Condicao Humana” 	" },
                { "track": 474, "name": "	#1154 O que devo fazer para ser “mais e mais” cristao?	", "length": "	06:09	", "file": "	http://www.mediafire.com/file/	2paa4dn82nznlcl	/	#1154 O que devo fazer para ser “mais e mais” cristao?	" },
                { "track": 475, "name": "	#1155 E' possivel chegar 'a fe' pela razao?	", "length": "	08:18	", "file": "	http://www.mediafire.com/file/	jsj0hm2vv4bbem0	/	#1155 E' possivel chegar 'a fe' pela razao?	" },
                { "track": 476, "name": "	#1156 O que aconteceu apos sua conversao?	", "length": "	08:31	", "file": "	http://www.mediafire.com/file/	nn76y1m3mq49boq	/	#1156 O que aconteceu apos sua conversao?	" },
                { "track": 477, "name": "	#1157 Voce acredita que e' possivel melhorar este mundo?	", "length": "	09:27	", "file": "	http://www.mediafire.com/file/	bddxgbfndya3gc1	/	#1157 Voce acredita que e' possivel melhorar este mundo?	" },
                { "track": 478, "name": "	#1158 O que voce acha da ideia de monges e monastérios?	", "length": "	06:38	", "file": "	http://www.mediafire.com/file/	x2d1nawf6dpsxrt	/	#1158 O que voce acha da ideia de monges e monastérios?	" },
                { "track": 479, "name": "	#1159 O que e' conversao?	", "length": "	06:44	", "file": "	http://www.mediafire.com/file/	ue7vwpg6f5n0ycn	/	#1159 O que e' conversao?	" },
                { "track": 480, "name": "	#1160 O evangelho sera' pregado em todo o mundo antes do fim?	", "length": "	10:19	", "file": "	http://www.mediafire.com/file/	nxs3e9i71s7m13d	/	#1160 O evangelho sera' pregado em todo o mundo antes do fim?	" },
                { "track": 481, "name": "	#1161 O que acha de filmes sobre temas biblicos?	", "length": "	03:37	", "file": "	http://www.mediafire.com/file/	7mjp4b6umkr7enh	/	#1161 O que acha de filmes sobre temas biblicos?	" },
                { "track": 482, "name": "	#1162 Com que autoridade biblica?	", "length": "	07:18	", "file": "	http://www.mediafire.com/file/	1p7polq47j4ajg5	/	#1162 Com que autoridade biblica?	" },
                { "track": 483, "name": "	#1163 Devemos orar o Pai Nosso?	", "length": "	04:53	", "file": "	http://www.mediafire.com/file/	02qnwb1fkdx2m7t	/	#1163 Devemos orar o Pai Nosso?	" },
                { "track": 484, "name": "	#1164 Quem sao a besta e o anticristo?	", "length": "	10:33	", "file": "	http://www.mediafire.com/file/	mnp50dsi9ik6ks1	/	#1164 Quem sao a besta e o anticristo?	" },
                { "track": 485, "name": "	#1165 Devemos estudar as coisas do demonio para saber evita-las ou combate-las?	", "length": "	08:29	", "file": "	http://www.mediafire.com/file/	56fuxk6x3u66ppy	/	#1165 Devemos estudar as coisas do demonio para saber evita-las ou combate-las?	" },
                { "track": 486, "name": "	#1166 Quando Jesus morreu na cruz, Deus morreu?	", "length": "	04:10	", "file": "	http://www.mediafire.com/file/	qnb996k06q2ml9l	/	#1166 Quando Jesus morreu na cruz, Deus morreu?	" },
                { "track": 487, "name": "	#1167 Devemos rezar a Ave Maria?	", "length": "	10:33	", "file": "	http://www.mediafire.com/file/	uop3ycsc31j64nw	/	#1167 Devemos rezar a Ave Maria?	" },
                { "track": 488, "name": "	#1168 O cristao deve impor sua cultura e costumes?	", "length": "	07:23	", "file": "	http://www.mediafire.com/file/	sy1kk09uiwml4vy	/	#1168 O cristao deve impor sua cultura e costumes?	" },
                { "track": 489, "name": "	#1169 E' possivel ter fe' sem pertencer a uma religiao?	", "length": "	21:02	", "file": "	http://www.mediafire.com/file/	r4v9bwf77cwkdsi	/	#1169 E' possivel ter fe' sem pertencer a uma religiao?	" },
                { "track": 490, "name": "	#1170 E' errado cremar os mortos?	", "length": "	04:33	", "file": "	http://www.mediafire.com/file/	dr1qzta86ocd6si	/	#1170 E' errado cremar os mortos?	" },
                { "track": 491, "name": "	#1171 Devemos exaltar Nossa Senhora?	", "length": "	04:38	", "file": "	http://www.mediafire.com/file/	9bgnk40zgns9mzz	/	#1171 Devemos exaltar Nossa Senhora?	" },
                { "track": 492, "name": "	#1172 Devo ajudar uma organizacao espirita?	", "length": "	19:07	", "file": "	http://www.mediafire.com/file/	x504g6j071tkbty	/	#1172 Devo ajudar uma organizacao espirita?	" },
                { "track": 493, "name": "	#1173 O que acha do livro 'Deixados para tras'?	", "length": "	06:34	", "file": "	http://www.mediafire.com/file/	570ybd5od5u8x15	/	#1173 O que acha do livro 'Deixados para tras'?	" },
                { "track": 494, "name": "	#1174 Qual foi o sinal que Deus colocou em Caim?	", "length": "	06:58	", "file": "	http://www.mediafire.com/file/	k0qtlsmqu6ipxlx	/	#1174 Qual foi o sinal que Deus colocou em Caim?	" },
                { "track": 495, "name": "	#1175 Um salvo ira' pecar como antes?	", "length": "	04:25	", "file": "	http://www.mediafire.com/file/	d34clotr6xc3ira	/	#1175 Um salvo ira' pecar como antes?	" },
                { "track": 496, "name": "	#1176 Se Deus julga os adulteros, por que os irmaos precisam saber?	", "length": "	19:18	", "file": "	http://www.mediafire.com/file/	9splz84zacq6nvs	/	#1176 Se Deus julga os adulteros, por que os irmaos precisam saber?	" },
                { "track": 497, "name": "	#1177 Basta confessar a Deus para tudo ficar bem?	", "length": "	14:29	", "file": "	http://www.mediafire.com/file/	1ch8k0pd6es7czw	/	#1177 Basta confessar a Deus para tudo ficar bem?	" },
                { "track": 498, "name": "	#1178 A cruz de Cristo foi um fracasso como o Papa afirmou?	", "length": "	18:39	", "file": "	http://www.mediafire.com/file/	cj8ka1mdac4097a	/	#1178 A cruz de Cristo foi um fracasso como o Papa afirmou?	" },
                { "track": 499, "name": "	#1179 Devo ouvir o 'profeta'?	", "length": "	20:45	", "file": "	http://www.mediafire.com/file/	8rwxymtir9wjb3u	/	#1179 Devo ouvir o 'profeta'?	" },
                { "track": 500, "name": "	#1180 Por que voce critica a 'minha' igreja?	", "length": "	19:11	", "file": "	http://www.mediafire.com/file/	a9ra0c84mlvri62	/	#1180 Por que voce critica a 'minha' igreja?	" },



                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////

            ],
            buildPlaylist = $.each(tracks, function (key, value) {
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
