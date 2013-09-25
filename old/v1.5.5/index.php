<?php

$CONFIG['name'] = "Terrasoft";
$CONFIG['company'] = "Terrasoft Corporation";

?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title><?=$CONFIG['name']?> - Home</title>
    
    <base target="_new" />
    
    <meta property="og:title" content="Terrasoft" />
    <meta property="og:type" content="company" />
    <meta property="og:url" content="http://www.terrasoftlabs.com" />
    <meta property="og:image" content="http://terrasoft.x10.mx/img/symbol.png" />
    <meta property="og:site_name" content="Terrasoft" />
    <meta property="fb:admins" content="100000142903767" />
    
    <link href="img/fv.ico" rel="shortcut icon" />
    
    <link href="./css/styles.css" rel="stylesheet" type="text/css" />
	<link href="./js/cb/colorbox.css" rel="stylesheet" type="text/css" />
    
    <script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
    <?php
	
	// Ouput correct script depending on whether we're online or not.
    
	print '<script type="text/javascript" src="'. ( ( !@file("http://www.google.com") ) ? './js/jquery-1.6.2.js' : 'http://code.jquery.com/jquery-latest.js' ) . '"></script>';
			
    ?>
	<script type="text/javascript" src="js/dock.js"></script>
	<script type="text/javascript" src="js/scripts.js"></script>
    <script type="text/javascript" src="js/cb/colorbox.js" language="javascript"></script>
    
    <!--
    
    Copyright © 2011 Terrasoft Corporation
    Created June 24th, 2011
    
    -->

</head>

<body>
    
    <div id="header">
        
        <div class="left">
        
        <!-- Facebook BS -->
        
        <div id="social">
        
        <div id="fb-root"></div>
        
        <script src="http://connect.facebook.net/en_US/all.js#appId=217346414968478&amp;xfbml=1"></script>
        
        <fb:like href="http://www.facebook.com/TerrasoftCorporation" send="false" layout="button_count" width="100" show_faces="false" font="verdana"></fb:like>
        
        <div id="plus">
        
        <g:plusone></g:plusone>
        
        </div>
        
        </div>
        
        <!-- end this crap -->
        
        </div>
        
        <div class="right">
        
        <!-- PayPal -->
        
        <div id="donate">
        
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" />
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
        " />
        <input type="image" src="img/dollar.gif" border="0" name="submit" title="Invest your cash, inspire creation, and invent the world!" alt="Donate" />
        <img border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
        </form>
        
        </div>
        
        <!-- end PayPal -->
        
        </div>
    
    </div>
    
    <div id="content">
    	
        <table height="100%" width="100%">
        	
            <tr>
            	
                <td align="center" height="500" valign="middle">
                            
                    <a href="#" title="Best Symbol in the Universe"><img id="symbol" src="img/symbol.png" width="180" /></a>
                    
                    <div id="statement"><div class="company"><?=$CONFIG['company']?></div></div>
                    
                    <div id="motto">Connect the World</div>
                    
                    <noscript>
                        
                        <div id="links">
                            
                            <div class="info">For our SVN, use <strong><em>guest</em></strong> for the username and password.</div>
                            
                        </div>
                        
                    </noscript>
                    
        		</td>
                
        	</tr>
            
		</table>
    
    </div>
        
    <div id="menu">
        
        <a href="http://www.facebook.com/TerrasoftCorporation" title="Like us on Facebook"><img alt="Facebook" src="img/menu/fb.gif" width="48" /></a>
        
        <a href="http://twitter.com/terrasoftlabs" title="Follow Us on Twitter"><img src="img/menu/twitter.png" alt="Twitter" width="48" /></a>
        
        <a href="http://gplus.to/Terrasoft" title="Circle us on Google Plus"><img alt="Google Plus" src="img/menu/plus.gif" width="48" /></a>
        
        <!-- <a href="http://terrasoft.unfuddle.com/a#/repositories/1/browse" title="Check out our SVN"><img alt="Our SVN" src="img/menu/svn.gif" width="48" /></a> -->
        
        <a href="mailto:admin@terrasoftlabs.com?subject=Site%20Comment&body=You%20guys%20sure%20made%20a%20super%20snazzy%20site;%20however,%20I%20digress...%0D%0A%0D%0A" title="Shoot Us an E-mail"><img alt="E-mail Us" src="img/menu/mail.gif" width="48" /></a>
        
        <!-- <a href="tel:12132593589" title="Call Us!"><img alt="Call Us!" src="img/menu/phone.gif" width="48" /></a> -->
        
    </div>

</body>

</html>