<?php
    
    echo exec("whoami");
    echo exec("pwd");
    $listCommand = array(
        "cd /usr/share/nginx/freelancer",
	'eval "$(ssh-agent -s)"',
	'ssh-add ~/.ssh/enjoy',
        "chown -R apache:apache ."
        "git fetch --all",
        "git reset --hard origin/master",
    );
    
    // run command
    foreach ($listCommand as $command) {
        echo exec($command) . '<br />';
    }
    echo "Pulled latest source code successfully.";
