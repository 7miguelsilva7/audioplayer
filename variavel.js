var variaveis=location.search.split("?");
var quebra = variaveis[1].split("=");

if (quebra[1]=="audioplayer"){
document.write('<script type="text/javascript" src="index.js"><\/script>');

} else if (quebra[1]=="dispensacao") {
document.write('<script type="text/javascript" src="playlists/dispensacao.js"><\/script>');

} else if (quebra[1]=="hinarioCantado") {
document.write('<script type="text/javascript" src="playlists/hinarioCantado.js"><\/script>');

} else if (quebra[1]=="apocalipse") {
document.write('<script type="text/javascript" src="playlists/apocalipse.js"><\/script>');

}else{
document.write('<script type="text/javascript" src="index.js"><\/script>');
}	
