<?php
//curl -X POST --data-urlencode 'payload={"channel": "#development-team", "username": "webhookbot", "text": "This is posted to #development-team and comes from a bot named webhookbot.", "icon_emoji": ":ghost:"}' https://hooks.slack.com/services/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


$message = "I've just deployed to `heroku` @julianna.j"
$message = urlencode($message); // Contains things like 'This is the message to the channel:\n\nHere is the second line with some *bold text* hopefully!'

$channel = '#development-team';
$data = 'payload=' . json_encode(array(
        'channel'  => $channel,
        'text'     => $message,
));

$url = 'https://hooks.slack.com/services/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';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$result = curl_exec($ch);
if ($result === false) {
    echo 'Curl error: ' . curl_error($ch);
}

curl_close($ch);
