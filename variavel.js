var variaveis=location.search.split("?");
var quebra = variaveis[1].split("=");

if (quebra[1]=="audioplayer"){
document.write('<script type="text/javascript" src="index.js"><\/script>');
} else if (quebra[1]=="dispensacao") {
document.write('<script type="text/javascript" src="dispensacao.js"><\/script>');
include("player.html");
} else if (quebra[1]=="hinario") {
document.write('<script type="text/javascript" src="hinario.js"><\/script>');
}else{
document.write('<script type="text/javascript" src="index.js"><\/script>');
}	

function include(file) {

    let script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}    
