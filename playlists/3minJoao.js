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


                { "track": 1, "name": "	#127 O verbo	", "length": "	03:35	", "file": "	http://www.mediafire.com/file/	pbuu2eth4p8u3nb	/	#127 O verbo	" },
                { "track": 2, "name": "	#128 A luz	", "length": "	03:13	", "file": "	http://www.mediafire.com/file/	z3ad88uokjxqadx	/	#128 A luz	" },
                { "track": 3, "name": "	#129 Filhos	", "length": "	03:02	", "file": "	http://www.mediafire.com/file/	vczi4i8dimd5dba	/	#129 Filhos	" },
                { "track": 4, "name": "	#130 A encarnacao	", "length": "	03:19	", "file": "	http://www.mediafire.com/file/	45gt22afvocwqm6	/	#130 A encarnacao	" },
                { "track": 5, "name": "	#131 Graca e verdade	", "length": "	03:39	", "file": "	http://www.mediafire.com/file/	0mi4c84i58t4zc0	/	#131 Graca e verdade	" },
                { "track": 6, "name": "	#132 O Cordeiro que tira o pecado	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	4acfenzga9nebb1	/	#132 O Cordeiro que tira o pecado	" },
                { "track": 7, "name": "	#133 Seguindo a Jesus	", "length": "	03:13	", "file": "	http://www.mediafire.com/file/	kthss5im791x9z5	/	#133 Seguindo a Jesus	" },
                { "track": 8, "name": "	#134 Levando a boa nova	", "length": "	02:56	", "file": "	http://www.mediafire.com/file/	wgitn3teqfzai35	/	#134 Levando a boa nova	" },
                { "track": 9, "name": "	#135 O problema de Natanael	", "length": "	03:22	", "file": "	http://www.mediafire.com/file/	pui3ayrse81yfsj	/	#135 O problema de Natanael	" },
                { "track": 10, "name": "	#136 A festa de casamento	", "length": "	03:08	", "file": "	http://www.mediafire.com/file/	ztafdmn99yc7951	/	#136 A festa de casamento	" },
                { "track": 11, "name": "	#137 O pedido de Maria	", "length": "	03:19	", "file": "	http://www.mediafire.com/file/	ptpdvv3f5vv6g17	/	#137 O pedido de Maria	" },
                { "track": 12, "name": "	#138 O primeiro milagre	", "length": "	03:23	", "file": "	http://www.mediafire.com/file/	b77c8dz2shmmmkb	/	#138 O primeiro milagre	" },
                { "track": 13, "name": "	#139 Aproveitadores	", "length": "	03:29	", "file": "	http://www.mediafire.com/file/	zbpn80v0nk7odzi	/	#139 Aproveitadores	" },
                { "track": 14, "name": "	#140 Nicodemos	", "length": "	03:10	", "file": "	http://www.mediafire.com/file/	ho9nx5h0ydbo9pi	/	#140 Nicodemos	" },
                { "track": 15, "name": "	#141 Agua e Espirito	", "length": "	03:16	", "file": "	http://www.mediafire.com/file/	4y74wy321jt69qw	/	#141 Agua e Espirito	" },
                { "track": 16, "name": "	#142 O vento invisivel	", "length": "	03:37	", "file": "	http://www.mediafire.com/file/	vt411xkh2itgz55	/	#142 O vento invisivel	" },
                { "track": 17, "name": "	#143 A serpente de bronze	", "length": "	03:23	", "file": "	http://www.mediafire.com/file/	6u29vj3oo3lyh3v	/	#143 A serpente de bronze	" },
                { "track": 18, "name": "	#144 Joao 3 16	", "length": "	03:39	", "file": "	http://www.mediafire.com/file/	4b2cp7zcmx7qhd4	/	#144 Joao 3 16	" },
                { "track": 19, "name": "	#145 A unica escolha	", "length": "	03:16	", "file": "	http://www.mediafire.com/file/	fb6drfe83b4cssu	/	#145 A unica escolha	" },
                { "track": 20, "name": "	#146 Como pregar o evangelho	", "length": "	03:13	", "file": "	http://www.mediafire.com/file/	nub941jgiygwij6	/	#146 Como pregar o evangelho	" },
                { "track": 21, "name": "	#147 Intolerancia religiosa	", "length": "	03:14	", "file": "	http://www.mediafire.com/file/	p1squt5698iiwtc	/	#147 Intolerancia religiosa	" },
                { "track": 22, "name": "	#148 Agua viva	", "length": "	03:11	", "file": "	http://www.mediafire.com/file/	y5tdqwob09a0v7f	/	#148 Agua viva	" },
                { "track": 23, "name": "	#149 O pedido	", "length": "	03:24	", "file": "	http://www.mediafire.com/file/	fg5f18at1qbqkc4	/	#149 O pedido	" },
                { "track": 24, "name": "	#150 O opio do povo	", "length": "	03:37	", "file": "	http://www.mediafire.com/file/	l46k1a6vzelv54r	/	#150 O opio do povo	" },
                { "track": 25, "name": "	#151 Salvos pra que	", "length": "	03:23	", "file": "	http://www.mediafire.com/file/	ahqk5lhmz5h7213	/	#151 Salvos pra que	" },
                { "track": 26, "name": "	#152 A comida que satisfaz	", "length": "	03:24	", "file": "	http://www.mediafire.com/file/	65no1p3a91dy8f8	/	#152 A comida que satisfaz	" },
                { "track": 27, "name": "	#153 Espaco e tempo	", "length": "	03:30	", "file": "	http://www.mediafire.com/file/	mp1mkcb4mspbo6p	/	#153 Espaco e tempo	" },
                { "track": 28, "name": "	#154 Olhando pra o lado errado	", "length": "	03:24	", "file": "	http://www.mediafire.com/file/	jj3l5vxm3gxxj5y	/	#154 Olhando pra o lado errado	" },
                { "track": 29, "name": "	#155 Depois da cura	", "length": "	03:10	", "file": "	http://www.mediafire.com/file/	v2mg612oz9rgfy8	/	#155 Depois da cura	" },
                { "track": 30, "name": "	#156 O autor do sabado	", "length": "	02:58	", "file": "	http://www.mediafire.com/file/	qcvl5zd78u18f5w	/	#156 O autor do sabado	" },
                { "track": 31, "name": "	#157 Igual a Deus	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	m02fr7w0c29zf5q	/	#157 Igual a Deus	" },
                { "track": 32, "name": "	#158 Os verbos e seus tempos	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	p3o1onf0kcrik7r	/	#158 Os verbos e seus tempos	" },
                { "track": 33, "name": "	#159 Da morte para a vida	", "length": "	03:05	", "file": "	http://www.mediafire.com/file/	c9uipqz74u8s6zu	/	#159 Da morte para a vida	" },
                { "track": 34, "name": "	#160 A fonte da juventude	", "length": "	03:23	", "file": "	http://www.mediafire.com/file/	5i76fro7e4mkk0e	/	#160 A fonte da juventude	" },
                { "track": 35, "name": "	#161 Duas ressurreicoes	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	61vd8o6d9zl2ty1	/	#161 Duas ressurreicoes	" },
                { "track": 36, "name": "	#162 O gabarito de Deus	", "length": "	03:16	", "file": "	http://www.mediafire.com/file/	ok2ru3ia07lkksn	/	#162 O gabarito de Deus	" },
                { "track": 37, "name": "	#163 Quatro testemunhos	", "length": "	03:13	", "file": "	http://www.mediafire.com/file/	i06xippacqpqcsx	/	#163 Quatro testemunhos	" },
                { "track": 38, "name": "	#164 Jesus no Antigo Testamento	", "length": "	03:31	", "file": "	http://www.mediafire.com/file/	hy8flbdd1parder	/	#164 Jesus no Antigo Testamento	" },
                { "track": 39, "name": "	#165 Satisfacao ter Cristo	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	r688sk92q1jdqmd	/	#165 Satisfacao ter Cristo	" },
                { "track": 40, "name": "	#166 A obra de Deus	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	5envh7tjazr8wtb	/	#166 A obra de Deus	" },
                { "track": 41, "name": "	#167 O pao do ceu	", "length": "	03:17	", "file": "	http://www.mediafire.com/file/	csjom3yay6mb99q	/	#167 O pao do ceu	" },
                { "track": 42, "name": "	#168 Todo aquele que o Pai me da	", "length": "	03:13	", "file": "	http://www.mediafire.com/file/	zqe53csopo4ly9e	/	#168 Todo aquele que o Pai me da	" },
                { "track": 43, "name": "	#169 De maneira nenhuma	", "length": "	03:14	", "file": "	http://www.mediafire.com/file/	14ccwbvch500jx7	/	#169 De maneira nenhuma	" },
                { "track": 44, "name": "	#170 A fisgada da morte	", "length": "	03:02	", "file": "	http://www.mediafire.com/file/	ny87q65puuqk91n	/	#170 A fisgada da morte	" },
                { "track": 45, "name": "	#171 Quem vai a Jesus	", "length": "	03:22	", "file": "	http://www.mediafire.com/file/	418nurozq3ii71h	/	#171 Quem vai a Jesus	" },
                { "track": 46, "name": "	#172 O pao vivo	", "length": "	03:22	", "file": "	http://www.mediafire.com/file/	iy60bp8zex50y93	/	#172 O pao vivo	" },
                { "track": 47, "name": "	#173 Comer carne beber sangue	", "length": "	03:24	", "file": "	http://www.mediafire.com/file/	v6nqha0vr5azja0	/	#173 Comer carne beber sangue	" },
                { "track": 48, "name": "	#174 Verdadeiros falsos traidores	", "length": "	03:14	", "file": "	http://www.mediafire.com/file/	16dgz6dxt2zdyrx	/	#174 Verdadeiros falsos traidores	" },
                { "track": 49, "name": "	#175 Jesus e nada mais	", "length": "	03:13	", "file": "	http://www.mediafire.com/file/	gnxivolzagbhlva	/	#175 Jesus e nada mais	" },
                { "track": 50, "name": "	#176 Fora do arraial	", "length": "	03:13	", "file": "	http://www.mediafire.com/file/	ls3hy4c7997sd5m	/	#176 Fora do arraial	" },
                { "track": 51, "name": "	#177 O segredo p entender biblia	", "length": "	02:57	", "file": "	http://www.mediafire.com/file/	xcbe9dlrid24xqg	/	#177 O segredo p entender biblia	" },
                { "track": 52, "name": "	#178 Os falsos mestres	", "length": "	02:59	", "file": "	http://www.mediafire.com/file/	uarnqjn840ehin8	/	#178 Os falsos mestres	" },
                { "track": 53, "name": "	#179 Os juizes de Deus	", "length": "	03:08	", "file": "	http://www.mediafire.com/file/	76jdj2iajc8wcjc	/	#179 Os juizes de Deus	" },
                { "track": 54, "name": "	#180 Conexao interrompida	", "length": "	03:22	", "file": "	http://www.mediafire.com/file/	zh8mbr3gd49lhd7	/	#180 Conexao interrompida	" },
                { "track": 55, "name": "	#181 Para quem tem sede	", "length": "	03:25	", "file": "	http://www.mediafire.com/file/	m8vuc9ccd7db8lx	/	#181 Para quem tem sede	" },
                { "track": 56, "name": "	#182 Assumindo sua fe	", "length": "	03:14	", "file": "	http://www.mediafire.com/file/	1raioo2qb8tjk63	/	#182 Assumindo sua fe	" },
                { "track": 57, "name": "	#183 O unico lugar seguro	", "length": "	03:21	", "file": "	http://www.mediafire.com/file/	i2yb15bd18628gk	/	#183 O unico lugar seguro	" },
                { "track": 58, "name": "	#184 Baratas aranhas escorpioes	", "length": "	03:21	", "file": "	http://www.mediafire.com/file/	s5b04amm4wxwow6	/	#184 Baratas aranhas escorpioes	" },
                { "track": 59, "name": "	#185 O lugar do tesouro	", "length": "	03:22	", "file": "	http://www.mediafire.com/file/	m53hg6e631s6x56	/	#185 O lugar do tesouro	" },
                { "track": 60, "name": "	#186 A hora da ausencia	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	tcvv0uq2juu9mma	/	#186 A hora da ausencia	" },
                { "track": 61, "name": "	#187 Levantado	", "length": "	03:14	", "file": "	http://www.mediafire.com/file/	5qcv8y88qapqyx1	/	#187 Levantado	" },
                { "track": 62, "name": "	#188 A verdade que liberta	", "length": "	03:27	", "file": "	http://www.mediafire.com/file/	r5lc5qajdnd7j8o	/	#188 A verdade que liberta	" },
                { "track": 63, "name": "	#189 Escravos viciados	", "length": "	03:03	", "file": "	http://www.mediafire.com/file/	y4q3x8snbsx2olb	/	#189 Escravos viciados	" },
                { "track": 64, "name": "	#190 A fe de Abraao	", "length": "	03:07	", "file": "	http://www.mediafire.com/file/	i7xgx353c8te6ub	/	#190 A fe de Abraao	" },
                { "track": 65, "name": "	#191 Justificados pela fe	", "length": "	03:29	", "file": "	http://www.mediafire.com/file/	gpq9uxj8xs3l0t8	/	#191 Justificados pela fe	" },
                { "track": 66, "name": "	#192 Eterno	", "length": "	03:30	", "file": "	http://www.mediafire.com/file/	sg4ynzo6v5ys1dz	/	#192 Eterno	" },
                { "track": 67, "name": "	#193 Por que sofremos	", "length": "	02:53	", "file": "	http://www.mediafire.com/file/	3lma1ztx31wb3wn	/	#193 Por que sofremos	" },
                { "track": 68, "name": "	#194 O cego que nasceu assim	", "length": "	03:14	", "file": "	http://www.mediafire.com/file/	24r0pq1ba7ew8h8	/	#194 O cego que nasceu assim	" },
                { "track": 69, "name": "	#195 As razoes de Deus	", "length": "	03:19	", "file": "	http://www.mediafire.com/file/	xqd2983682pb5qx	/	#195 As razoes de Deus	" },
                { "track": 70, "name": "	#196 A cura do cego	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	143t388cevbagbg	/	#196 A cura do cego	" },
                { "track": 71, "name": "	#197 O cego que nao era mais	", "length": "	03:15	", "file": "	http://www.mediafire.com/file/	0h18p6c069y938j	/	#197 O cego que nao era mais	" },
                { "track": 72, "name": "	#198 Tradicao familia propriedade	", "length": "	03:22	", "file": "	http://www.mediafire.com/file/	a629b5ankp0podc	/	#198 Tradicao familia propriedade	" },
                { "track": 73, "name": "	#199 Expulso	", "length": "	03:18	", "file": "	http://www.mediafire.com/file/	p7tq8fjbb1qo28d	/	#199 Expulso	" },
                { "track": 74, "name": "	#200 O pastor das ovelhas	", "length": "	03:30	", "file": "	http://www.mediafire.com/file/	gbdbc82ebljszx9	/	#200 O pastor das ovelhas	" },
                { "track": 75, "name": "	#201 O pastor morto	", "length": "	03:11	", "file": "	http://www.mediafire.com/file/	ns9k3eck64yy1ym	/	#201 O pastor morto	" },
                { "track": 76, "name": "	#202 O Senhor e o meu pastor	", "length": "	03:17	", "file": "	http://www.mediafire.com/file/	jbcemw1ca17mw47	/	#202 O Senhor e o meu pastor	" },
                { "track": 77, "name": "	#203 O Pastor reina	", "length": "	03:24	", "file": "	http://www.mediafire.com/file/	ld3tp55heq00470	/	#203 O Pastor reina	" },
                { "track": 78, "name": "	#204 Os falsos pastores	", "length": "	03:09	", "file": "	http://www.mediafire.com/file/	7vrfx62fsd235v1	/	#204 Os falsos pastores	" },
                { "track": 79, "name": "	#205 O poder de dar a vida	", "length": "	03:19	", "file": "	http://www.mediafire.com/file/	b5dfy147r6d6f3k	/	#205 O poder de dar a vida	" },
                { "track": 80, "name": "	#206 Seguros eternamente	", "length": "	03:33	", "file": "	http://www.mediafire.com/file/	a29hnd3aao8n3ft	/	#206 Seguros eternamente	" },
                { "track": 81, "name": "	#207 O homem que nao foi curado	", "length": "	02:54	", "file": "	http://www.mediafire.com/file/	mcrf34hzniosfru	/	#207 O homem que nao foi curado	" },
                { "track": 82, "name": "	#208 Crer sem ver	", "length": "	03:29	", "file": "	http://www.mediafire.com/file/	6i9bkyulwok6pb2	/	#208 Crer sem ver	" },
                { "track": 83, "name": "	#209 Lepra e pecado	", "length": "	03:28	", "file": "	http://www.mediafire.com/file/	9fzidc0mt10p4ua	/	#209 Lepra e pecado	" },
                { "track": 84, "name": "	#210 Celebridades para Deus	", "length": "	03:29	", "file": "	http://www.mediafire.com/file/	p5sp85u75yzay2j	/	#210 Celebridades para Deus	" },
                { "track": 85, "name": "	#211 Jesus chorou	", "length": "	03:06	", "file": "	http://www.mediafire.com/file/	zz74i96af04yp56	/	#211 Jesus chorou	" },
                { "track": 86, "name": "	#212 A palavra que da vida	", "length": "	03:21	", "file": "	http://www.mediafire.com/file/	e9udbi6mzq0bio0	/	#212 A palavra que da vida	" },
                { "track": 87, "name": "	#213 Pobre judeu pobre incredulo	", "length": "	03:23	", "file": "	http://www.mediafire.com/file/	co62y6xwb25t1a3	/	#213 Pobre judeu pobre incredulo	" },
                { "track": 88, "name": "	#214 Um por todos	", "length": "	03:25	", "file": "	http://www.mediafire.com/file/	1t0f16iw26k51pk	/	#214 Um por todos	" },
                { "track": 89, "name": "	#215 Cristo o centro	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	o45b141couiu27b	/	#215 Cristo o centro	" },
                { "track": 90, "name": "	#216 Veneno de rato	", "length": "	03:24	", "file": "	http://www.mediafire.com/file/	jmck2wwooapdhna	/	#216 Veneno de rato	" },
                { "track": 91, "name": "	#217 Impossivel	", "length": "	03:30	", "file": "	http://www.mediafire.com/file/	isqk9r9s6i1s6f8	/	#217 Impossivel	" },
                { "track": 92, "name": "	#218 Num piscar de olhos	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	6p4bkw7frd9584a	/	#218 Num piscar de olhos	" },
                { "track": 93, "name": "	#219 Deixados para tras	", "length": "	03:37	", "file": "	http://www.mediafire.com/file/	jcv3ke67fcvkbv5	/	#219 Deixados para tras	" },
                { "track": 94, "name": "	#220 Deixados para tras II	", "length": "	03:32	", "file": "	http://www.mediafire.com/file/	vn5ogj85n4c6r15	/	#220 Deixados para tras II	" },
                { "track": 95, "name": "	#221 Montado em um jumentinho	", "length": "	03:31	", "file": "	http://www.mediafire.com/file/	wyj81e4atzwf9fi	/	#221 Montado em um jumentinho	" },
                { "track": 96, "name": "	#222 O grao de trigo deve morrer	", "length": "	03:45	", "file": "	http://www.mediafire.com/file/	va6ssilj39nzfn9	/	#222 O grao de trigo deve morrer	" },
                { "track": 97, "name": "	#223 Morte e ressureicao	", "length": "	03:51	", "file": "	http://www.mediafire.com/file/	cqv2z4pbd0nlvdb	/	#223 Morte e ressureicao	" },
                { "track": 98, "name": "	#224 Um homem na gloria	", "length": "	03:30	", "file": "	http://www.mediafire.com/file/	z8h5eld157ed617	/	#224 Um homem na gloria	" },
                { "track": 99, "name": "	#225 Vamos fechar	", "length": "	03:54	", "file": "	http://www.mediafire.com/file/	133b17uruc0czz6	/	#225 Vamos fechar	" },
                { "track": 100, "name": "	#226 O juizo do mundo	", "length": "	03:53	", "file": "	http://www.mediafire.com/file/	3gglz08tz6fi6vc	/	#226 O juizo do mundo	" },
                { "track": 101, "name": "	#227 Luz e trevas	", "length": "	03:47	", "file": "	http://www.mediafire.com/file/	44q44xgtf3vo2sd	/	#227 Luz e trevas	" },
                { "track": 102, "name": "	#228 Em cima do muro	", "length": "	03:32	", "file": "	http://www.mediafire.com/file/	ubx8ef85zxon4sj	/	#228 Em cima do muro	" },
                { "track": 103, "name": "	#229 Nas trevas ou na luz	", "length": "	03:11	", "file": "	http://www.mediafire.com/file/	xzo0cf4lkzd1i8d	/	#229 Nas trevas ou na luz	" },
                { "track": 104, "name": "	#230 Os 7 milagres	", "length": "	03:10	", "file": "	http://www.mediafire.com/file/	4jvidjm5st7hmkh	/	#230 Os 7 milagres	" },
                { "track": 105, "name": "	#231 Um por todos	", "length": "	03:12	", "file": "	http://www.mediafire.com/file/	mlzijrddlsvvopa	/	#231 Um por todos	" },
                { "track": 106, "name": "	#232 Da gloria para a gloria	", "length": "	03:23	", "file": "	http://www.mediafire.com/file/	zc1r2so1jgcs84e	/	#232 Da gloria para a gloria	" },
                { "track": 107, "name": "	#233 O que a agua faz	", "length": "	03:15	", "file": "	http://www.mediafire.com/file/	eik5bbuyzeku95h	/	#233 O que a agua faz	" },
                { "track": 108, "name": "	#234 Sangue e agua	", "length": "	03:19	", "file": "	http://www.mediafire.com/file/	t7a54u2s91xow3z	/	#234 Sangue e agua	" },
                { "track": 109, "name": "	#235 O lava-pes	", "length": "	03:22	", "file": "	http://www.mediafire.com/file/	6rigpuoxm6a53ol	/	#235 O lava-pes	" },
                { "track": 110, "name": "	#236 O falso apostolo	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	a125ljbbb4f2o2f	/	#236 O falso apostolo	" },
                { "track": 111, "name": "	#237 Trevas	", "length": "	03:27	", "file": "	http://www.mediafire.com/file/	lo9gip2cuafuxm0	/	#237 Trevas	" },
                { "track": 112, "name": "	#238 Identidade de discipulo	", "length": "	03:36	", "file": "	http://www.mediafire.com/file/	9zkr997a3zuno3d	/	#238 Identidade de discipulo	" },
                { "track": 113, "name": "	#239 Amor	", "length": "	03:28	", "file": "	http://www.mediafire.com/file/	qmcgib5eum7dci9	/	#239 Amor	" },
                { "track": 114, "name": "	#240 Autoconfianca	", "length": "	03:32	", "file": "	http://www.mediafire.com/file/	bc6gas1ltd6idec	/	#240 Autoconfianca	" },
                { "track": 115, "name": "	#241 Uma reserva assegurada	", "length": "	03:07	", "file": "	http://www.mediafire.com/file/	qpq6kodqjn9762p	/	#241 Uma reserva assegurada	" },
                { "track": 116, "name": "	#242 O que voce espera	", "length": "	03:08	", "file": "	http://www.mediafire.com/file/	dsa2u8j8oth1ao4	/	#242 O que voce espera	" },
                { "track": 117, "name": "	#243 O caminho	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	xgxj5kt2d0t9k91	/	#243 O caminho	" },
                { "track": 118, "name": "	#244 O Pai	", "length": "	03:47	", "file": "	http://www.mediafire.com/file/	qfl7a3vpm7z9rmg	/	#244 O Pai	" },
                { "track": 119, "name": "	#245 Crer ou ver	", "length": "	03:30	", "file": "	http://www.mediafire.com/file/	wq873303huczum1	/	#245 Crer ou ver	" },
                { "track": 120, "name": "	#246 Obras maiores	", "length": "	03:15	", "file": "	http://www.mediafire.com/file/	08ye3lf4n7btil2	/	#246 Obras maiores	" },
                { "track": 121, "name": "	#247 Tudo o que pedirmos	", "length": "	03:31	", "file": "	http://www.mediafire.com/file/	y4pgpeo6w16f416	/	#247 Tudo o que pedirmos	" },
                { "track": 122, "name": "	#248 A garantia da salvacao	", "length": "	03:38	", "file": "	http://www.mediafire.com/file/	6pxb5d882agenaj	/	#248 A garantia da salvacao	" },
                { "track": 123, "name": "	#249 Porque Ele vive	", "length": "	03:23	", "file": "	http://www.mediafire.com/file/	g17wiqfap12wapi	/	#249 Porque Ele vive	" },
                { "track": 124, "name": "	#250 Um tipo especial de amor	", "length": "	03:18	", "file": "	http://www.mediafire.com/file/	k48brpk5fedn3bx	/	#250 Um tipo especial de amor	" },
                { "track": 125, "name": "	#251 Morada de Deus	", "length": "	03:23	", "file": "	http://www.mediafire.com/file/	idcsn9g2gnyog8c	/	#251 Morada de Deus	" },
                { "track": 126, "name": "	#252 Uma paz diferente	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	8bwi4ip6tsyyyaa	/	#252 Uma paz diferente	" },
                { "track": 127, "name": "	#253 A videira verdadeira	", "length": "	03:25	", "file": "	http://www.mediafire.com/file/	bpx6r6tvkyld6cd	/	#253 A videira verdadeira	" },
                { "track": 128, "name": "	#254 Fruto	", "length": "	03:35	", "file": "	http://www.mediafire.com/file/	jryb9dd5hqnbsq4	/	#254 Fruto	" },
                { "track": 129, "name": "	#255 Tudo o que voce quiser	", "length": "	03:49	", "file": "	http://www.mediafire.com/file/	a67khe1sl13hhgg	/	#255 Tudo o que voce quiser	" },
                { "track": 130, "name": "	#256 Discipulado	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	55rq53wo6f5sawy	/	#256 Discipulado	" },
                { "track": 131, "name": "	#257 Amor sem medida	", "length": "	03:43	", "file": "	http://www.mediafire.com/file/	dl49dr9k64caxmh	/	#257 Amor sem medida	" },
                { "track": 132, "name": "	#258 Servos amigos irmaos	", "length": "	03:17	", "file": "	http://www.mediafire.com/file/	hv26aiu2721dh5r	/	#258 Servos amigos irmaos	" },
                { "track": 133, "name": "	#259 Um mundo sem conserto	", "length": "	03:32	", "file": "	http://www.mediafire.com/file/	vfupra24c63d8ns	/	#259 Um mundo sem conserto	" },
                { "track": 134, "name": "	#260 O Espirito de verdade	", "length": "	03:27	", "file": "	http://www.mediafire.com/file/	1gxg8bq1wujkgm5	/	#260 O Espirito de verdade	" },
                { "track": 135, "name": "	#261 Pecado justica juizo	", "length": "	03:28	", "file": "	http://www.mediafire.com/file/	sq31xdam7r5gzcz	/	#261 Pecado justica juizo	" },
                { "track": 136, "name": "	#262 Toda verdade	", "length": "	03:40	", "file": "	http://www.mediafire.com/file/	3nciospdx57vad5	/	#262 Toda verdade	" },
                { "track": 137, "name": "	#263 Alegria alegria	", "length": "	03:18	", "file": "	http://www.mediafire.com/file/	acwuixz4kwtm8o1	/	#263 Alegria alegria	" },
                { "track": 138, "name": "	#264 Orando ao Pai e ao Filho	", "length": "	03:21	", "file": "	http://www.mediafire.com/file/	8aqph2xmvkk1134	/	#264 Orando ao Pai e ao Filho	" },
                { "track": 139, "name": "	#265 A hora da despedida	", "length": "	03:47	", "file": "	http://www.mediafire.com/file/	vtr6w50y0vol6vr	/	#265 A hora da despedida	" },
                { "track": 140, "name": "	#266 Amor ou juizo	", "length": "	03:50	", "file": "	http://www.mediafire.com/file/	hu4kzs3jb73j6zb	/	#266 Amor ou juizo	" },
                { "track": 141, "name": "	#267 Voce tem um advogado	", "length": "	03:41	", "file": "	http://www.mediafire.com/file/	adryah30jfda7z2	/	#267 Voce tem um advogado	" },
                { "track": 142, "name": "	#268 Para a gloria de Deus	", "length": "	03:47	", "file": "	http://www.mediafire.com/file/	o9yxuy00evxpofd	/	#268 Para a gloria de Deus	" },
                { "track": 143, "name": "	#269 Um mundo melhor	", "length": "	03:45	", "file": "	http://www.mediafire.com/file/	b3rbxgyf1a63lag	/	#269 Um mundo melhor	" },
                { "track": 144, "name": "	#270 Nenhum deles se perdeu	", "length": "	03:45	", "file": "	http://www.mediafire.com/file/	b9jmzga6hn07yg5	/	#270 Nenhum deles se perdeu	" },
                { "track": 145, "name": "	#271 Para que sejam um	", "length": "	03:39	", "file": "	http://www.mediafire.com/file/	xjhh52la6t9192z	/	#271 Para que sejam um	" },
                { "track": 146, "name": "	#272 Um pai omisso	", "length": "	03:55	", "file": "	http://www.mediafire.com/file/	xhrce445y229s9y	/	#272 Um pai omisso	" },
                { "track": 147, "name": "	#273 Dragao em pele de cordeiro	", "length": "	03:23	", "file": "	http://www.mediafire.com/file/	j9hjzcqdj1131tw	/	#273 Dragao em pele de cordeiro	" },
                { "track": 148, "name": "	#274 Traicao e valentia	", "length": "	03:41	", "file": "	http://www.mediafire.com/file/	e6lh8jk3utt6ece	/	#274 Traicao e valentia	" },
                { "track": 149, "name": "	#275 O julgamento do Juiz	", "length": "	03:30	", "file": "	http://www.mediafire.com/file/	4ymlc8lr7xg8c8t	/	#275 O julgamento do Juiz	" },
                { "track": 150, "name": "	#276 Temperamentos	", "length": "	03:45	", "file": "	http://www.mediafire.com/file/	lcfwoasnb5aj2fa	/	#276 Temperamentos	" },
                { "track": 151, "name": "	#277 Na roda dos impios	", "length": "	03:40	", "file": "	http://www.mediafire.com/file/	vu80x4m426vwjvo	/	#277 Na roda dos impios	" },
                { "track": 152, "name": "	#278 Um prisioneiro perfeito	", "length": "	03:31	", "file": "	http://www.mediafire.com/file/	cd6pp9d2o2cdy6l	/	#278 Um prisioneiro perfeito	" },
                { "track": 153, "name": "	#279 De costas para a verdade	", "length": "	03:41	", "file": "	http://www.mediafire.com/file/	tr3kudg583t3g3e	/	#279 De costas para a verdade	" },
                { "track": 154, "name": "	#280 Livrando-se de Deus	", "length": "	03:36	", "file": "	http://www.mediafire.com/file/	g7toobbohywdo3j	/	#280 Livrando-se de Deus	" },
                { "track": 155, "name": "	#281 Viagem no tempo	", "length": "	03:26	", "file": "	http://www.mediafire.com/file/	36fqh13he627fr2	/	#281 Viagem no tempo	" },
                { "track": 156, "name": "	#282 Uma nova chance	", "length": "	03:38	", "file": "	http://www.mediafire.com/file/	gxh09ucdw9ifxku	/	#282 Uma nova chance	" },
                { "track": 157, "name": "	#283 De sangue em sangue	", "length": "	03:41	", "file": "	http://www.mediafire.com/file/	jhl6zhym5r4r8q4	/	#283 De sangue em sangue	" },
                { "track": 158, "name": "	#284 No fogo cruzado	", "length": "	03:16	", "file": "	http://www.mediafire.com/file/	cw23jw92c5asdfm	/	#284 No fogo cruzado	" },
                { "track": 159, "name": "	#285 Vem Senhor Jesus	", "length": "	03:40	", "file": "	http://www.mediafire.com/file/	68l1rei5m8b3lw5	/	#285 Vem Senhor Jesus	" },
                { "track": 160, "name": "	#286 The End	", "length": "	03:31	", "file": "	http://www.mediafire.com/file/	7be79tyk5fq9m47	/	#286 The End	" },
                { "track": 161, "name": "	#287 O sorteio	", "length": "	03:31	", "file": "	http://www.mediafire.com/file/	rilappv4f8hs6bp	/	#287 O sorteio	" },
                { "track": 162, "name": "	#288 Joao cuida de Maria	", "length": "	03:23	", "file": "	http://www.mediafire.com/file/	3g9tmioc4bd2rk9	/	#288 Joao cuida de Maria	" },
                { "track": 163, "name": "	#289 Tenho sede	", "length": "	03:46	", "file": "	http://www.mediafire.com/file/	93ufqi79iubzhib	/	#289 Tenho sede	" },
                { "track": 164, "name": "	#290 Esta consumado	", "length": "	03:24	", "file": "	http://www.mediafire.com/file/	aakyml3qb2cdjpl	/	#290 Esta consumado	" },
                { "track": 165, "name": "	#291 Morrer	", "length": "	03:22	", "file": "	http://www.mediafire.com/file/	paaggaj5u2mo266	/	#291 Morrer	" },
                { "track": 166, "name": "	#292 O lado ferido	", "length": "	03:36	", "file": "	http://www.mediafire.com/file/	4jwi0axemn2x276	/	#292 O lado ferido	" },
                { "track": 167, "name": "	#293 Deus limpa transforma da o Espirito	", "length": "	03:39	", "file": "	http://www.mediafire.com/file/	3wjhitg7ave3qvw	/	#293 Deus limpa transforma da o Espirito	" },
                { "track": 168, "name": "	#294 Sangue e agua	", "length": "	03:23	", "file": "	http://www.mediafire.com/file/	udxjdzuipo7ilkz	/	#294 Sangue e agua	" },
                { "track": 169, "name": "	#295 Um Deus propicio	", "length": "	03:27	", "file": "	http://www.mediafire.com/file/	4p52wgxka7g590d	/	#295 Um Deus propicio	" },
                { "track": 170, "name": "	#296 Fim de carreira	", "length": "	03:34	", "file": "	http://www.mediafire.com/file/	1hrtkmh1jxxy2um	/	#296 Fim de carreira	" },
                { "track": 171, "name": "	#297 Maria de Magdala	", "length": "	03:11	", "file": "	http://www.mediafire.com/file/	lxm58137e5xbr75	/	#297 Maria de Magdala	" },
                { "track": 172, "name": "	#298 O primeiro	", "length": "	03:34	", "file": "	http://www.mediafire.com/file/	oyg161eiycdeh0d	/	#298 O primeiro	" },
                { "track": 173, "name": "	#299 Que Jesus voce procura	", "length": "	03:34	", "file": "	http://www.mediafire.com/file/	uk69e2pg9afbajb	/	#299 Que Jesus voce procura	" },
                { "track": 174, "name": "	#300 Eu vi o Senhor	", "length": "	03:27	", "file": "	http://www.mediafire.com/file/	o2nvmuswkhuefms	/	#300 Eu vi o Senhor	" },
                { "track": 175, "name": "	#301 O dia do Senhor	", "length": "	03:20	", "file": "	http://www.mediafire.com/file/	ayc2zw3sh0vu7yf	/	#301 O dia do Senhor	" },
                { "track": 176, "name": "	#302 Paz seja com voces	", "length": "	03:50	", "file": "	http://www.mediafire.com/file/	915m3phu9c49jro	/	#302 Paz seja com voces	" },
                { "track": 177, "name": "	#303 Jesus no meio	", "length": "	03:44	", "file": "	http://www.mediafire.com/file/	zwdcoz88yjv8zjh	/	#303 Jesus no meio	" },
                { "track": 178, "name": "	#304 O prototipo	", "length": "	03:43	", "file": "	http://www.mediafire.com/file/	w1h6hpc8n6g9763	/	#304 O prototipo	" },
                { "track": 179, "name": "	#305 Incredulidade	", "length": "	03:29	", "file": "	http://www.mediafire.com/file/	idc5z9mgrc5w7vl	/	#305 Incredulidade	" },
                { "track": 180, "name": "	#306 Vou pescar	", "length": "	03:39	", "file": "	http://www.mediafire.com/file/	qaoadf4x1ebtfgg	/	#306 Vou pescar	" },
                { "track": 181, "name": "	#307 Companhia conforto alimento	", "length": "	03:45	", "file": "	http://www.mediafire.com/file/	iaucx4jz7hum44r	/	#307 Companhia conforto alimento	" },
                { "track": 182, "name": "	#308 Uma triplice restauracao	", "length": "	03:55	", "file": "	http://www.mediafire.com/file/	ehm42zr1cp46xdd	/	#308 Uma triplice restauracao	" },
                { "track": 183, "name": "	#309 O rebanho de Deus	", "length": "	03:44	", "file": "	http://www.mediafire.com/file/	0r812ops4q62fo1	/	#309 O rebanho de Deus	" },
                { "track": 184, "name": "	#310 Sem fim	", "length": "	03:44	", "file": "	http://www.mediafire.com/file/	x1a7atszcsyd40d	/	#310 Sem fim	" },



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
                    audio.togglePlay(true)
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
