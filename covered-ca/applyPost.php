<?php
/**
 * Created by PhpStorm.
 * User: Enjoy
 * Date: 12/13/2014
 * Time: 11:52 AM
 */
header('Content-Type: application/json');
$whiteList = [
    'state-choose',
    'first-name',
    'last-name',
    'address',
    'city',
    'state',
    'zip',
    'birth',
    'email',
    'phone'
];

if (isset($_POST)) {
    $json = [];
    // check white list
    $params = [];
    foreach ($whiteList as $key) {
        $params[$key] = (isset($_POST[$key])) ? $_POST[$key] : null;
    }

    // check required fields exist
    if ($_POST['email'] && $_POST['first-name'] && $_POST['last-name']) {
        require('PHPMailer/PHPMailerAutoload.php');
        $mail = new PHPMailer();
        //$mail->SMTPDebug = 3;
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'enjoy3013@gmail.com';                 // SMTP username
        $mail->Password = 'manberros1';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        $mail->From = $_POST['email'];
        $mail->FromName = $_POST['first-name'] . ' ' . $_POST['last-name'];
        $mail->addAddress('Mike@cre8ivedepartment.com');
        $mail->isHTML(true);                                  // Set email format to HTML

        $mail->Subject = 'Apply from Get Covered Now California';
        $body = '<table>';
        $body.= '<tr><td>State live in</td><td>' . $params['state-choose'] . '</td></tr>';
        $body.= '<tr><td>First Name</td><td>' . $params['first-name'] . '</td></tr>';
        $body.= '<tr><td>Last Name</td><td>' . $params['last-name'] . '</td></tr>';
        $body.= '<tr><td>Date of Birth</td><td>' . $params['birth'] . '</td></tr>';
        $body.= '<tr><td>Address</td><td>' . $params['address'] . '</td></tr>';
        $body.= '<tr><td>City</td><td>' . $params['city'] . '</td></tr>';
        $body.= '<tr><td>State</td><td>' . $params['state'] . '</td></tr>';
        $body.= '<tr><td>Zip</td><td>' . $params['zip'] . '</td></tr>';
        $body.= '<tr><td>Email</td><td>' . $params['email'] . '</td></tr>';
        $body.= '<tr><td>Phone</td><td>' . $params['phone'] . '</td></tr>';
        $body.= '</table>';
        $mail->Body    = $body;
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        if (!$mail->send()) {
            $json = [
                'result' => false,
                'message' => '1Sorry, there is some error. Please try again later.'
            ];
        } else {
            $json = [
                'result' => true,
                'message' => 'Your message has been sent.'
            ];
        }
    } else {
        $json = [
            'result' => false,
            'message' => 'Sorry, there is some error. Please try again later.'
        ];
    }
    echo json_encode($json);
}