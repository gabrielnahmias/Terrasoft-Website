<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Terrasoft.com Availability Checker</title>

<link href="img/favicon.ico" rel="shortcut icon" />

<style>

body {
	
	color: #333333;
	
	font: 15px Verdana, Geneva, sans-serif;
	
	text-align: center;
	
}

iframe {
	
	border: 1px solid #333333;
	
	height: 500px;
	
	width: 700px;
	
}

img {
	
	margin: 0;
	
}

#header {
	
	margin-bottom: 10px;
	
	position: relative;
	
	text-align: center;
	
}

	#header h1 {
			
		font-size: 26px;
		
		font-weight: bold;
		
		display: inline;
		
		text-decoration: underline;
		
	}

#middle {
	
	text-align: middle;
	
}

#play {
	
	background: url('img/play.png') no-repeat;
	
	display: inline;
	
	float: left;
	
	height: 41px;
	
	margin-right: 20px;
	
	cursor: pointer;
	
	width: 40px;
	
}
	
	#play:hover {
		
		background: url('img/play-hover.png');
		
	}


#stop {
	
	background: url('img/stop.png') no-repeat;
	
	float: left;
	
	height: 41px;
	
	cursor: pointer;
	
	margin-right: 20px;
	
	width: 40px;
	
}
	
	#stop:hover {
		
		background: url('img/stop-hover.png');
		
	}

#toolbar {
	
	position: fixed;
	
	right: 0;
	
}

</style>

<script>

var refresher;

function doIt() {
	
	refresher = setInterval( function() {
						
						document.getElementById("refresher").src = 'http://www.terrasoft.com';
					
					}, 500);
	
	}

doIt();

</script>

</head>

<body>

<div id="toolbar">

<div id="stop" onclick="clearInterval(refresher)" title="Stop this FUCKING THING!!!" /></div>

<div id="play" onclick="doIt()" title="Give it a WHIRL!" /></div>

</div>

<div id="content">

<div id="middle">

<div id="header">

<h1>Are We There Yet?</h1>

</div>

<iframe id="refresher"></iframe>

</div>

</div>

</body>

</html>