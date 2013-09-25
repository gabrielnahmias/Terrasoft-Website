var opts =
  // horizontal Dock with images expanding downwards in the vertical axis...
  { align: 'bottom'
  // set the maximum minor axis (vertical) image dimension to 48px
  , size: 48
  // add labels..
  , labels: false
  // swap the GIF extension for PNG extension for the larger image...
  /*, source: function(i){ return this.src.replace(/gif$/,'png'); }*/
  };

function function_exists(function_name) {

    if (typeof function_name === 'string')
        function_name = this.window[function_name];
		
    return typeof function_name === 'function';
	
}

jQuery(document).ready(function() {
	
	var strSVNURL = "http://terrasoft.unfuddle.com/a#/repositories/1/browse";
	var strPhoneURL = "tel:12132593589";
	
	jQuery('#menu').jqDock(opts);
	
	jQuery("img[alt='Our SVN']").colorbox( {
		
		html: '<div class="info">Use <strong><em>guest</em></strong> for the username and password.</div>'+
			  'After closing this window, you will be redirected to:' +
			  '<br /><span class="link">' + strSVNURL + '</span>.',
		
		title: "Access Information",
		
		onClosed:
			
			function() {
				
				window.location = strSVNURL;
				
			}
		
	} );
	
	jQuery("img[alt='Call Us!']").colorbox( {
		
		html: 'If you do not have a client set up to handle the <strong><em>TEL</em></strong>' +
		      '<br />protocol, you can reach us at <em>(213) 259-3589</em>.',
		
		title: "Don't Worry",
		
		onClosed:
			
			function() {
				
				window.location = strPhoneURL;
				
			}
		
	} );
	
} );