var variaveis=location.search.split("?");
var quebra = variaveis[1].split("=");

if (quebra[1]=="audioplayer"){ document.write('<script type="text/javascript" src="index.js"><\/script>');

//playlists
} else if (quebra[1]=="dispensacao") { document.write('<script type="text/javascript" src="playlists/dispensacao.js"><\/script>');

} else if (quebra[1]=="hinarioCantado") { document.write('<script type="text/javascript" src="playlists/hinarioCantado.js"><\/script>');

} else if (quebra[1]=="3minMateus") { document.write('<script type="text/javascript" src="playlists/3minMateus.js"><\/script>');

} else if (quebra[1]=="3minMarcos") { document.write('<script type="text/javascript" src="playlists/3minMarcos.js"><\/script>');

} else if (quebra[1]=="3minLucas") { document.write('<script type="text/javascript" src="playlists/3minLucas.js"><\/script>');

} else if (quebra[1]=="3minJoao") { document.write('<script type="text/javascript" src="playlists/3minJoao.js"><\/script>');

} else if (quebra[1]=="respondi-1-500") { document.write('<script type="text/javascript" src="playlists/respondi-1-500.js"><\/script>');

} else if (quebra[1]=="respondi-501-1000") { document.write('<script type="text/javascript" src="playlists/respondi-501-1000.js"><\/script>');

} else if (quebra[1]=="respondi-1001-1437") { document.write('<script type="text/javascript" src="playlists/respondi-1001-1500.js"><\/script>');

//Ministério

} else if (quebra[1]=="comentsActs") { document.write('<script type="text/javascript" src="playlists/comentsActs.js"><\/script>');

} else if (quebra[1]=="comentsRm") { document.write('<script type="text/javascript" src="playlists/comentsRm.js"><\/script>');

} else if (quebra[1]=="coments1co") { document.write('<script type="text/javascript" src="playlists/coments1co.js"><\/script>');

} else if (quebra[1]=="comentsAp") { document.write('<script type="text/javascript" src="playlists/comentsAp.js"><\/script>');

} else if (quebra[1]=="comentsEf") { document.write('<script type="text/javascript" src="playlists/comentsEf.js"><\/script>');

//Ministério

} else if (quebra[1]=="hinosSalmosCanticos") { document.write('<script type="text/javascript" src="playlists/hinosSalmosCanticos.js"><\/script>');

} else if (quebra[1]=="CanticosCantadoPorCrianca") { document.write('<script type="text/javascript" src="playlists/CanticosCantadoPorCrianca.js"><\/script>');

}else{ document.write('<script type="text/javascript" src="index.js"><\/script>');
}	
