<?php
    
    echo exec("whoami");
    echo exec("pwd");
    $listCommand = array(
        "cd /usr/share/nginx/freelancer",
        "git fetch --all",
        "git reset --hard origin/master",
        "chown -R nginx:nginx ."
    );
    
    // run command
    foreach ($listCommand as $command) {
        echo exec($command) . '<br />';
    }
    echo "Pulled latest source code successfully.";
