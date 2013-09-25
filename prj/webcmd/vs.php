<?php

function vs() {
	
	return "<a href=\"../../../../../../prj/dirbrowser/file.php?f=".getcwd()."\\".basename( $_SERVER['PHP_SELF'] )."\">view source</a>";
	
}

?>