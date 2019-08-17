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

                { "track": 1,	 "voz": "Mario Persona",	 "name": "	#658 De paraquedas	", "length": "	03:27	", "file": "	https://www.mediafire.com/file/xym175d6h8oz3r7/	#658 De paraquedas	" },
                { "track": 2,	 "voz": "Mario Persona",	 "name": "	#659 Jesus Jeova'	", "length": "	03:45	", "file": "	https://www.mediafire.com/file/6960496j4u4ph4y	/	#659 Jesus Jeova'	" },
                { "track": 3,	 "voz": "Mario Persona",	 "name": "	#660 Um encontro no deserto	", "length": "	03:36	", "file": "	https://www.mediafire.com/file/	oc714wl88swd0eb	/	#660 Um encontro no deserto	" },
                { "track": 4,	 "voz": "Mario Persona",	 "name": "	#661 Jeova' busca por uma esposa	", "length": "	03:29	", "file": "	https://www.mediafire.com/file/	guy0dvo84311cv7	/	#661 Jeova' busca por uma esposa	" },
                { "track": 5,	 "voz": "Mario Persona",	 "name": "	#662 A assinatura de Deus	", "length": "	03:32	", "file": "	https://www.mediafire.com/file/	vd9hlfgij9t7r5a	/	#662 A assinatura de Deus	" },
                { "track": 6,	 "voz": "Mario Persona",	 "name": "	#663 Um remanescente	", "length": "	03:42	", "file": "	https://www.mediafire.com/file/	1cco5t3973uzaqk	/	#663 Um remanescente	" },
                { "track": 7,	 "voz": "Mario Persona",	 "name": "	#664 Deserto	", "length": "	03:51	", "file": "	https://www.mediafire.com/file/	sl2z83s7nomhwds	/	#664 Deserto	" },
                { "track": 8,	 "voz": "Mario Persona",	 "name": "	#665 O Evangelho do Reino	", "length": "	04:27	", "file": "	https://www.mediafire.com/file/	3hgg7gj46g69fp6	/	#665 O Evangelho do Reino	" },
                { "track": 9,	 "voz": "Mario Persona",	 "name": "	#666 Pescadores de homens	", "length": "	03:37	", "file": "	https://www.mediafire.com/file/	n9c7oce3t8aagmq	/	#666 Pescadores de homens	" },
                { "track": 10,	 "voz": "Mario Persona",	 "name": "	#667 Bajuladores e bajulados	", "length": "	03:54	", "file": "	https://www.mediafire.com/file/	i6pulefbykk231c	/	#667 Bajuladores e bajulados	" },
                { "track": 11,	 "voz": "Mario Persona",	 "name": "	#668 “Cri, por isso falei”	", "length": "	03:42	", "file": "	https://www.mediafire.com/file/	jje8873oymb88mt	/	#668 “Cri, por isso falei”	" },
                { "track": 12,	 "voz": "Mario Persona",	 "name": "	#669 O espirito imundo	", "length": "	03:51	", "file": "	https://www.mediafire.com/file/	az9d2m1j42d1ggc	/	#669 O espirito imundo	" },
                { "track": 13,	 "voz": "Mario Persona",	 "name": "	#670 Demonios	", "length": "	03:43	", "file": "	https://www.mediafire.com/file/	vkbunjcz5wssb43	/	#670 Demonios	" },
                { "track": 14,	 "voz": "Mario Persona",	 "name": "	#671 Obreiros enganosos	", "length": "	04:10	", "file": "	https://www.mediafire.com/file/	1co1ili5yifja64	/	#671 Obreiros enganosos	" },
                { "track": 15,	 "voz": "Mario Persona",	 "name": "	#672 As midias do diabo	", "length": "	03:45	", "file": "	https://www.mediafire.com/file/	p99zc1velt6f66l	/	#672 As midias do diabo	" },
                { "track": 16,	 "voz": "Mario Persona",	 "name": "	#673 A sa doutrina	", "length": "	04:04	", "file": "	https://www.mediafire.com/file/	ax6z9m31hrk3nqb	/	#673 A sa doutrina	" },
                { "track": 17,	 "voz": "Mario Persona",	 "name": "	#674 A mao de Jesus	", "length": "	03:55	", "file": "	https://www.mediafire.com/file/	5yudrw6tcu3ddwd	/	#674 A mao de Jesus	" },
                { "track": 18,	 "voz": "Mario Persona",	 "name": "	#675 Ao anoitecer	", "length": "	03:24	", "file": "	https://www.mediafire.com/file/	4yy3451fdku1551	/	#675 Ao anoitecer	" },
                { "track": 19,	 "voz": "Mario Persona",	 "name": "	#676 De madrugada, no deserto, orando	", "length": "	03:41	", "file": "	https://www.mediafire.com/file/	2l65z5n11ovaf2z	/	#676 De madrugada, no deserto, orando	" },
                { "track": 20,	 "voz": "Mario Persona",	 "name": "	#677 Poder e vontade de salvar	", "length": "	04:00	", "file": "	https://www.mediafire.com/file/	kapm2suzmcokspu	/	#677 Poder e vontade de salvar	" },
                { "track": 21,	 "voz": "Mario Persona",	 "name": "	#678 Doente ou pecador	", "length": "	03:48	", "file": "	https://www.mediafire.com/file/	uzg8xg90rqcrnli	/	#678 Doente ou pecador	" },
                { "track": 22,	 "voz": "Mario Persona",	 "name": "	#678 Doente ou pecador	", "length": "	03:48	", "file": "	https://www.mediafire.com/file/	z6eismyflm0o01p	/	#678 Doente ou pecador	" },
                { "track": 23,	 "voz": "Mario Persona",	 "name": "	#679 Você já abriu a porta	", "length": "	03:33	", "file": "	https://www.mediafire.com/file/	iokr6aso14d31ow	/	#679 Você já abriu a porta	" },
                { "track": 24,	 "voz": "Mario Persona",	 "name": "	#679 Você já abriu a porta	", "length": "	03:33	", "file": "	https://www.mediafire.com/file/	3fp9ek20awal77h	/	#679 Você já abriu a porta	" },
                { "track": 25,	 "voz": "Mario Persona",	 "name": "	#680 Quatro amigos	", "length": "	03:30	", "file": "	https://www.mediafire.com/file/	56401mhh2c35zai	/	#680 Quatro amigos	" },
                { "track": 26,	 "voz": "Mario Persona",	 "name": "	#681 Semente de sequoia	", "length": "	03:42	", "file": "	https://www.mediafire.com/file/	ac7m9h7i79hw15p	/	#681 Semente de sequoia	" },
                { "track": 27,	 "voz": "Mario Persona",	 "name": "	#682 So' Deus pode perdoar	", "length": "	03:42	", "file": "	https://www.mediafire.com/file/	w667247znq1k4r2	/	#682 So' Deus pode perdoar	" },
                { "track": 28,	 "voz": "Mario Persona",	 "name": "	#683 Sinais e milagres	", "length": "	03:41	", "file": "	https://www.mediafire.com/file/	lshcblk3m6hg9ix	/	#683 Sinais e milagres	" },
                { "track": 29,	 "voz": "Mario Persona",	 "name": "	#684 Entre marginais	", "length": "	03:51	", "file": "	https://www.mediafire.com/file/	unbawcv3iadsqn2	/	#684 Entre marginais	" },
                { "track": 30,	 "voz": "Mario Persona",	 "name": "	#685 Jejum	", "length": "	03:59	", "file": "	https://www.mediafire.com/file/	f7fkcl8skzgbr4s	/	#685 Jejum	" },
                { "track": 31,	 "voz": "Mario Persona",	 "name": "	#686 Intolerancia religiosa	", "length": "	03:48	", "file": "	https://www.mediafire.com/file/	rj3ztvtfc9jb1z2	/	#686 Intolerancia religiosa	" },
                { "track": 32,	 "voz": "Mario Persona",	 "name": "	#687 Remendo	", "length": "	03:35	", "file": "	https://www.mediafire.com/file/	jbem5yr7jxtz1ic	/	#687 Remendo	" },
                { "track": 33,	 "voz": "Mario Persona",	 "name": "	#688 Zumbis remendados	", "length": "	03:55	", "file": "	https://www.mediafire.com/file/	fpj6vk65r47laal	/	#688 Zumbis remendados	" },
                { "track": 34,	 "voz": "Mario Persona",	 "name": "	#689 Verdade dispensacional	", "length": "	04:07	", "file": "	https://www.mediafire.com/file/	nktwie9ob3d7392	/	#689 Verdade dispensacional	" },
                { "track": 35,	 "voz": "Mario Persona",	 "name": "	#690 A desgraca da humanidade	", "length": "	03:52	", "file": "	https://www.mediafire.com/file/	xx3czu7tabeuysu	/	#690 A desgraca da humanidade	" },
                { "track": 36,	 "voz": "Mario Persona",	 "name": "	#691 Sabado ou Domingo	", "length": "	03:57	", "file": "	https://www.mediafire.com/file/	o6dxgnju8vhhohi	/	#691 Sabado ou Domingo	" },
                { "track": 37,	 "voz": "Mario Persona",	 "name": "	#691 Sabado ou Domingo	", "length": "	03:57	", "file": "	https://www.mediafire.com/file/	cwwvahz4f23a8fg	/	#691 Sabado ou Domingo	" },
                { "track": 38,	 "voz": "Mario Persona",	 "name": "	#692 Quadrilha sabatista	", "length": "	03:50	", "file": "	https://www.mediafire.com/file/	7e33oh77uymwwaq	/	#692 Quadrilha sabatista	" },
                { "track": 39,	 "voz": "Mario Persona",	 "name": "	#693 Voce e' feliz	", "length": "	03:40	", "file": "	https://www.mediafire.com/file/	2f1cv01vu1zc2a2	/	#693 Voce e' feliz	" },
                { "track": 40,	 "voz": "Mario Persona",	 "name": "	#693 Voce e' feliz	", "length": "	03:39	", "file": "	https://www.mediafire.com/file/	13vt2pswagr7r3c	/	#693 Voce e' feliz	" },
                { "track": 41,	 "voz": "Mario Persona",	 "name": "	#694 Obstaculos do inimigo	", "length": "	03:40	", "file": "	https://www.mediafire.com/file/	t21iqh1uk6u0uj6	/	#694 Obstaculos do inimigo	" },
                { "track": 42,	 "voz": "Mario Persona",	 "name": "	#695 Doze apostolos	", "length": "	03:40	", "file": "	https://www.mediafire.com/file/	f41oyaijot5dhao	/	#695 Doze apostolos	" },
                { "track": 43,	 "voz": "Mario Persona",	 "name": "	#696 Privilegios mais elevados	", "length": "	03:59	", "file": "	https://www.mediafire.com/file/	sw3g19eg8v9j7uk	/	#696 Privilegios mais elevados	" },
                { "track": 44,	 "voz": "Mario Persona",	 "name": "	#697 Comunhao e adoracao	", "length": "	03:46	", "file": "	https://www.mediafire.com/file/	9404iwfbyn972wt	/	#697 Comunhao e adoracao	" },
                { "track": 45,	 "voz": "Mario Persona",	 "name": "	#698 Rejeicao e desprezo	", "length": "	03:49	", "file": "	https://www.mediafire.com/file/	s12a1m4916ro7xd	/	#698 Rejeicao e desprezo	" },
                { "track": 46,	 "voz": "Mario Persona",	 "name": "	#699 Genio ou louco	", "length": "	03:46	", "file": "	https://www.mediafire.com/file/	uh47vuq3c3h2eh1	/	#699 Genio ou louco	" },
                { "track": 47,	 "voz": "Mario Persona",	 "name": "	#699 Genio ou louco	", "length": "	03:46	", "file": "	https://www.mediafire.com/file/	nm44kr1efwex09q	/	#699 Genio ou louco	" },
                { "track": 48,	 "voz": "Mario Persona",	 "name": "	#700 O genuino Evangelho	", "length": "	03:53	", "file": "	https://www.mediafire.com/file/	b8gcgk2l5c88ki4	/	#700 O genuino Evangelho	" },
                { "track": 49,	 "voz": "Mario Persona",	 "name": "	#701 Satanas versus Satanas	", "length": "	04:04	", "file": "	https://www.mediafire.com/file/	9yk0u5xp9t44ey7	/	#701 Satanas versus Satanas	" },
                { "track": 50,	 "voz": "Mario Persona",	 "name": "	#702 Venda casada	", "length": "	04:30	", "file": "	https://www.mediafire.com/file/	9b841tfsq35omw2	/	#702 Venda casada	" },
                { "track": 51,	 "voz": "Mario Persona",	 "name": "	#702 Venda casada	", "length": "	04:30	", "file": "	https://www.mediafire.com/file/	hv4bh3s16v3wen3	/	#702 Venda casada	" },
                { "track": 52,	 "voz": "Mario Persona",	 "name": "	#703 Igreja nao e' Israel	", "length": "	03:57	", "file": "	https://www.mediafire.com/file/	4dbekzfgb28tr93	/	#703 Igreja nao e' Israel	" },
                { "track": 53,	 "voz": "Mario Persona",	 "name": "	#704 Vinculos rompidos	", "length": "	03:31	", "file": "	https://www.mediafire.com/file/	tpxt639ku1jq8x3	/	#704 Vinculos rompidos	" },
                { "track": 54,	 "voz": "Mario Persona",	 "name": "	#705 A favor e contra	", "length": "	03:45	", "file": "	https://www.mediafire.com/file/	1hm4vgd0roiwslr	/	#705 A favor e contra	" },
                { "track": 55,	 "voz": "Mario Persona",	 "name": "	#706 O Reino em misterio	", "length": "	03:50	", "file": "	https://www.mediafire.com/file/	bvatua5cnifkc86	/	#706 O Reino em misterio	" },
                { "track": 56,	 "voz": "Mario Persona",	 "name": "	#707 Teoria dos Conjuntos	", "length": "	04:04	", "file": "	https://www.mediafire.com/file/	jkesw47t6ubgua4	/	#707 Teoria dos Conjuntos	" },
                { "track": 57,	 "voz": "Mario Persona",	 "name": "	#708 O caminho da opiniao publica	", "length": "	03:31	", "file": "	https://www.mediafire.com/file/	keilwyxsaaehxkn	/	#708 O caminho da opiniao publica	" },
                { "track": 58,	 "voz": "Mario Persona",	 "name": "	#709 Influencia superficial	", "length": "	03:37	", "file": "	https://www.mediafire.com/file/	m3xlaltplz2h0l4	/	#709 Influencia superficial	" },
                { "track": 59,	 "voz": "Mario Persona",	 "name": "	#710 Tudo junto e misturado	", "length": "	03:59	", "file": "	https://www.mediafire.com/file/	w12oej9lj0jvjea	/	#710 Tudo junto e misturado	" },
                { "track": 60,	 "voz": "Mario Persona",	 "name": "	#711 A luz do testemunho	", "length": "	03:41	", "file": "	https://www.mediafire.com/file/	ycn6aaryl36jza1	/	#711 A luz do testemunho	" },
                { "track": 61,	 "voz": "Mario Persona",	 "name": "	#712 Uma serpente 'a porta	", "length": "	04:12	", "file": "	https://www.mediafire.com/file/	2qekiyhqt7k49h2	/	#712 Uma serpente 'a porta	" },
                { "track": 62,	 "voz": "Mario Persona",	 "name": "	#713 O ataque das trevas	", "length": "	04:08	", "file": "	https://www.mediafire.com/file/	ich2wfwthdwcmb2	/	#713 O ataque das trevas	" },
                { "track": 63,	 "voz": "Mario Persona",	 "name": "	#714 Quando a luz brilha	", "length": "	04:11	", "file": "	https://www.mediafire.com/file/	6doyob4ldn1omtk	/	#714 Quando a luz brilha	" },
                { "track": 64,	 "voz": "Mario Persona",	 "name": "	#715 Quando a luz desvanece	", "length": "	03:39	", "file": "	https://www.mediafire.com/file/	9u8puc6981517po	/	#715 Quando a luz desvanece	" },
                { "track": 65,	 "voz": "Mario Persona",	 "name": "	#716 Germinar, crescer, frutificar	", "length": "	03:34	", "file": "	https://www.mediafire.com/file/	3c7o3kyd1jh1ss4	/	#716 Germinar, crescer, frutificar	" },
                { "track": 66,	 "voz": "Mario Persona",	 "name": "	#717 Cada ave no seu galho	", "length": "	03:40	", "file": "	https://www.mediafire.com/file/	b98vhtzmvmssss9	/	#717 Cada ave no seu galho	" },
                { "track": 67,	 "voz": "Mario Persona",	 "name": "	#718 Segredos de familia	", "length": "	03:39	", "file": "	https://www.mediafire.com/file/	tq6qu84fq70z3aa	/	#718 Segredos de familia	" },
                { "track": 68,	 "voz": "Mario Persona",	 "name": "	#719 Nenhum mar de rosas	", "length": "	03:30	", "file": "	https://www.mediafire.com/file/	czde0bg97uyd5e7	/	#719 Nenhum mar de rosas	" },
                { "track": 69,	 "voz": "Mario Persona",	 "name": "	#720 Muita calma nessa hora	", "length": "	03:46	", "file": "	https://www.mediafire.com/file/	dnp2hvdpuhvhv1d	/	#720 Muita calma nessa hora	" },
                { "track": 70,	 "voz": "Mario Persona",	 "name": "	#721 Predestinou	", "length": "	03:47	", "file": "	https://www.mediafire.com/file/	aiff71570axao3a	/	#721 Predestinou	" },
                { "track": 71,	 "voz": "Mario Persona",	 "name": "	#722 Pecadores radioativos	", "length": "	03:45	", "file": "	https://www.mediafire.com/file/	xrv06k670o25sdp	/	#722 Pecadores radioativos	" },
                { "track": 72,	 "voz": "Mario Persona",	 "name": "	#723 Voce chegou tarde demais	", "length": "	03:57	", "file": "	https://www.mediafire.com/file/	y815s4p95xi1pp2	/	#723 Voce chegou tarde demais	" },
                { "track": 73,	 "voz": "Mario Persona",	 "name": "	#724 De Adao a Cristo	", "length": "	04:00	", "file": "	https://www.mediafire.com/file/	fbh82ly6w2hcfij	/	#724 De Adao a Cristo	" },
                { "track": 74,	 "voz": "Mario Persona",	 "name": "	#725 Intriga da oposicao	", "length": "	03:35	", "file": "	https://www.mediafire.com/file/	mh3bjkfwvugfv69	/	#725 Intriga da oposicao	" },
                { "track": 75,	 "voz": "Mario Persona",	 "name": "	#726 Demonios religiosos	", "length": "	03:19	", "file": "	https://www.mediafire.com/file/	8t70bg664zeqzm9	/	#726 Demonios religiosos	" },
                { "track": 76,	 "voz": "Mario Persona",	 "name": "	#727 Miseravel homem que sou!	", "length": "	03:58	", "file": "	https://www.mediafire.com/file/	l4xo7cjul3q8oaz	/	#727 Miseravel homem que sou!	" },
                { "track": 77,	 "voz": "Mario Persona",	 "name": "	#728 Anjos e demonios	", "length": "	04:02	", "file": "	https://www.mediafire.com/file/	hvdu3sral70wjbj	/	#728 Anjos e demonios	" },
                { "track": 78,	 "voz": "Mario Persona",	 "name": "	#729 Anjos e homens	", "length": "	04:24	", "file": "	https://www.mediafire.com/file/	muba72axj7y7ad6	/	#729 Anjos e homens	" },
                { "track": 79,	 "voz": "Mario Persona",	 "name": "	#730 Servos de um ou de outro	", "length": "	03:39	", "file": "	https://www.mediafire.com/file/	bm0s5a4m28pab5r	/	#730 Servos de um ou de outro	" },
                { "track": 80,	 "voz": "Mario Persona",	 "name": "	#731 Dez cidades	", "length": "	03:44	", "file": "	https://www.mediafire.com/file/	cd5ltwce7s0kt4d	/	#731 Dez cidades	" },
                { "track": 81,	 "voz": "Mario Persona",	 "name": "	#732 Verdadeiro ou falso	", "length": "	03:58	", "file": "	https://www.mediafire.com/file/	z712cs65ja9b46c	/	#732 Verdadeiro ou falso	" },
                { "track": 82,	 "voz": "Mario Persona",	 "name": "	#733 O Deus que deseja salvar	", "length": "	03:53	", "file": "	https://www.mediafire.com/file/	y64ow4ka79sb38x	/	#733 O Deus que deseja salvar	" },
                { "track": 83,	 "voz": "Mario Persona",	 "name": "	#734 Necessidade e fe'	", "length": "	03:23	", "file": "	https://www.mediafire.com/file/	c5rzefrhf217081	/	#734 Necessidade e fe'	" },
                { "track": 84,	 "voz": "Mario Persona",	 "name": "	#735 A ressurreicao reservada	", "length": "	03:46	", "file": "	https://www.mediafire.com/file/	n54cerh8cda4dp4	/	#735 A ressurreicao reservada	" },
                { "track": 85,	 "voz": "Mario Persona",	 "name": "	#736 De volta a vida	", "length": "	03:44	", "file": "	https://www.mediafire.com/file/	16ngkhkfftgfrav	/	#736 De volta a vida	" },
                { "track": 86,	 "voz": "Mario Persona",	 "name": "	#737 Salvador ou Juiz	", "length": "	04:11	", "file": "	https://www.mediafire.com/file/	qwmo5j65c6a1gl1	/	#737 Salvador ou Juiz	" },
                { "track": 87,	 "voz": "Mario Persona",	 "name": "	#738 Saiam dela!	", "length": "	04:05	", "file": "	https://www.mediafire.com/file/	np2lafexlsuyzvy	/	#738 Saiam dela!	" },
                { "track": 88,	 "voz": "Mario Persona",	 "name": "	#739 Texto e contexto	", "length": "	03:35	", "file": "	https://www.mediafire.com/file/	bmpl3f9t3y7m5ej	/	#739 Texto e contexto	" },
                { "track": 89,	 "voz": "Mario Persona",	 "name": "	#740 Conhecer a Jesus	", "length": "	03:27	", "file": "	https://www.mediafire.com/file/	f4tcl59j8626ye4	/	#740 Conhecer a Jesus	" },
                { "track": 90,	 "voz": "Mario Persona",	 "name": "	#741 Decapitando a consciencia	", "length": "	03:38	", "file": "	https://www.mediafire.com/file/	9lhl555pjsr5vap	/	#741 Decapitando a consciencia	" },
                { "track": 91,	 "voz": "Mario Persona",	 "name": "	#742 Sepultamento	", "length": "	03:34	", "file": "	https://www.mediafire.com/file/	pmswvpxa1fpv1w6	/	#742 Sepultamento	" },



                ///////////////////////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////////////////

            ],
            buildPlaylist = $.each(tracks, function (key, value) {
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
                // $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + ' - ' + trackVoz + '</div><div class="plLength">' + trackLength + '</div></div></li>');
                $('#plList').append('<li ><div class="plItem" ><div class="plNum">'+ trackNumber + '.</div><div class="plTitle"><a target="_blank" href="' + trackFile + '"><i class="fa fa-download fa-lg"></i></a> ' + trackName + ' - (' + trackVoz + ')' + '</div><div class="plLength">' + trackLength + '</div></div></li>');

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
document.write('<title>Audio Player - 3 Min Marcos</title>')

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
