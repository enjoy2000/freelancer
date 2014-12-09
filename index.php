<?php
$dir = __DIR__;
$cdir = scandir($dir);
foreach ($cdir as $key => $value) 
    { 
        if (!in_array($value,array(".","..",".git",".idea"))) 
        {
	    if (is_dir($dir . DIRECTORY_SEPARATOR . $value))
	    echo '<a href="/'.$value.'">'.$value.'</a><br/>';
        }
    }
