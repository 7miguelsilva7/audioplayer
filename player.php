<?php $title = "<span class='center' id='npTitle'></span>";?>

<!DOCTYPE html>
<html>

<head>
 
<title><?php echo $title?></title>
<meta name="description" content="<script>window.location.href;</script>"/>
<!-- Meta tags compartilhamento -->
<meta property="og:title" content="<?php echo $title?>"/>
<meta property="og:description" content="<?php echo $title?>"/>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel='stylesheet prefetch' href='http://cdn.plyr.io/2.0.13/plyr.css'>

      <style>
      /* NOTE: The styles were added inline because Prefixfree needs access to your styles and they must be inlined if they are on local disk! */
      /* Font Family
================================================== */

@import url('https://fonts.googleapis.com/css?family=Oxygen:300,400,700');



/* Global Styles
================================================== */

html,body {
-webkit-font-smoothing:antialiased;
-webkit-text-size-adjust:100%;
background-color:#0665a2;
color:#fff;
font-size:105%;
font-family:"Oxygen", HelveticaNeue, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-weight:300;
letter-spacing:.025rem;
line-height:1.618;
padding:1rem 0;
}

* {
-webkit-tap-highlight-color:rgba(0,0,0,0);
-webkit-tap-highlight-color:transparent;
}


/* Setup1
================================================== */

.container2 { position:fixed; margin:0 auto; max-width:800px; width:100%; top:0px; }
.column2 { width:inherit; background: #0665a2; }

/* Setup2
================================================== */

.container { position:relative; align:center; margin:0 auto; max-width:800px; width:100%; top: 190px;
   overflow-y: auto; justify-content: center; align-items: center; 
 }
.column { width:inherit; }


/* Typography / Links
================================================== */

p { color:#fff; display:block; font-size:.9rem; font-weight:400; margin:0 0 2px; }

a,a:visited { color:#8cc3e6; outline:0; text-decoration:underline; }
a:hover,a:focus { color:#bbdef5; }
p a,p a:visited { line-height:inherit; }


/* Misc.
================================================== */

.add-bottom { margin-bottom:2rem !important; }
.left { float:left; }
.right { float:right; }
.center { text-align:center; }


/* Audio Player Styles
================================================== */

audio {
margin:0 15px 0 14px;
width:670px;
}

#mainwrap {}

#audiowrap,
#plwrap {
margin:0 auto;
}

#tracks {
position:relative;
text-align:center;
}

#nowPlay {
display:inline;
}

#npAction {
padding:21px;
position:absolute;
}

#npTitle {
padding:21px;
}

#plList {
    margin-top: 40px;
}

#plList li {
cursor:pointer;
display:block;
margin:0;
padding:21px 0;
}

#plList li:hover {
background-color:rgba(0,0,0,.1);
}

.plItem {
position:relative;
}

.plTitle {
left:50px;
overflow:hidden;
position:absolute;
right:65px;
text-overflow:ellipsis;
top:0;
white-space:nowrap;
}

.plNum {
padding-left:21px;
width:25px;
}

.plLength {
padding-left:21px;
position:absolute;
right:21px;
top:0;
}

.plSel,
.plSel:hover {
background-color:rgba(0,0,0,.1);
color:#fff;
cursor:default !important;
}

a[id^="btn"] {
border-radius:3px;
cursor:pointer;
display:inline-block;
font-size:2rem;
height:35px;
line-height:.8;
margin:0 20px 20px;
padding:10px;
text-decoration:none;
transition:background .3s ease;
width:35px;
}

a[id^="btn"]:last-child {
margin-left:-4px;
}

a[id^="btn"]:hover,
a[id^="btn"]:active,
.btnIcon-active {
background-color:rgba(0,0,0,.1);
}

a[id^="btn"]::-moz-focus-inner {
border:0;
padding:0;
}

.btnSelected {
    color:#fff !important;
}

.arrow {
    color:#fff;
}


/* Plyr Overrides
================================================== */

.plyr--audio .plyr__controls {
background-color:transparent;
border:none;
color:#fff;
padding:20px 20px 20px 13px;
width:100%;
}

.plyr--audio .plyr__controls button.tab-focus:focus,
.plyr--audio .plyr__controls button:hover,
.plyr__play-large {
background:rgba(0,0,0,.1);
}

.plyr__progress--played, .plyr__volume--display {
color:rgba(0,0,0,.1);
}

.plyr--audio .plyr__progress--buffer,
.plyr--audio .plyr__volume--display {
background:rgba(0,0,0,.1);
}

.plyr--audio .plyr__progress--buffer {
color:rgba(0,0,0,.1);
}


/* Media Queries
================================================== */

@media only screen and (max-width:850px) {
    #nowPlay { display:none; }
}

    </style>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>

</head>

<body>
 

<div class="container">
    <div class="column add-bottom">
        <div id="mainwrap">
            
            <!--<div id="audiowrap">
                <div id="audio0">
                    <audio preload id="audio1" controls="controls">Seu navegador não suporta html5 - Atualize-o!</audio>
                </div>
                <div id="tracks">
                    <a id="btnPrev">&larr;</a>
                    <a id="btnNext">&rarr;</a>
                </div>
            </div>-->
            <div id="plwrap">
                <ul id="plList"></ul>
            </div>
        </div>
    </div>

 <div class="container2">
    <div class="column2 add-bottom">
        <div id="mainwrap">
            <div style="float: right; margin-top: 28px">
                    
                </div>
            <div id="nowPlay">
                <!--<span class="left" id="npAction">Parado...</span>-->
                <br>
                <?php echo $title?>
                <!-- <span class="center" id="npTitle"></span> -->
                <!-- <button style="float: right; padding: 8px 10px; cursor: pointer; margin: 0" id="btnReplay"><i class="fa fa-repeat"></i></button> -->
            </div>
            <div id="audiowrap">
                <div id="audio0">
                    <audio preload id="audio1" autoplay controls="controls">Seu navegador não suporta html5 - Atualize-o!</audio>
                </div>
                <div id="tracks">
                    <a style="padding: 3px 10px; cursor: pointer; margin: 0; font-size: 1.5rem " id="btnRandom"><i class="fa fa-random"></i></a>
                    <a style="padding: 3px 10px; cursor: pointer; margin: 0; font-size: 1.5rem" id="btnReplay"><i class="fa fa-repeat"></i> </a>
                    <a href="./"  style="padding: 3px 10px; cursor: pointer; margin: 0; font-size: 1.5rem" id="btnReturn"><i class="fa fa-home"></i></a>
					<a style="padding: 3px 10px; cursor: pointer; margin: 0; font-size: 1.5rem" id="btnShare"><i class="fa fa-share-alt"></i></a>
                </div>
				
				<div id="shareList" style="text-align:center;display:none">
					<ul>
						<li style="display:  inline-block;margin:  0 2px;"><a style="padding: 3px 10px; cursor: pointer; margin: 0; font-size: 1.5rem" id="cShareFacebook" class="btnIcon-active"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
						<li style="display:  inline-block;margin:  0 2px;"><a style="padding: 3px 10px; cursor: pointer; margin: 0; font-size: 1.5rem" id= "cShareWhatsApp" class="btnIcon-active"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				
				
                <div id="tracks">
                    <a class="arrow" id="btnPrev">&larr;</a>
                    <a class="arrow" id="btnNext">&rarr;</a>
                </div>
            </div>
            <!--<div id="plwrap">
                <ul id="plList"></ul>
            </div>-->
        </div>
    </div>
   
</div>

    <div class="column add-bottom center">
        <!--<p>Music by <a href="http://www.mythium.net/">Mythium</a></p>-->
        <p><a href="https://www.mediafire.com/folder/9fdcflgob19s7/evangelho" target="_blank">Downloads</a></p>
    </div>
</div>
<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
<script src='http://api.html5media.info/1.1.8/html5media.min.js'></script>
<script src='http://cdn.plyr.io/2.0.13/plyr.js'></script>
<script  src="variavel.js"></script>
<script>
	//open icons and share redirects
	$('#btnShare').on('click', function() {
	console.log(window.location.href);
			var n = $('#plList .plSel').find('.plTitle').text().trim(),
				l = window.location.href;
		$(this).toggleClass('btnIcon-active');
		$('#shareList').fadeToggle('fast', function() {
			$('#cShareWhatsApp').on('click', function() {
				window.location = 'whatsapp://send?text=' + encodeURIComponent(l);
			});
			$('#cShareFacebook').on('click', function() {
				window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(l),'_blank ','menubar=no');
			});
		});
	});
	
	//check anchor for autoplay in share link 
	// $(document).ready(function() {
	// 	var a = window.location.href.split("#")[1];
	// 	if (a && a != 0) $('#audio1')[0].play(); 
	// });	

</script>
</body>

</html>
