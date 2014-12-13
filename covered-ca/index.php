<?php
/**
 * Created by PhpStorm.
 * User: Enjoy
 * Date: 12/13/2014
 * Time: 9:33 AM
 */
// init title and description
$title = 'Get Covered Now California';
$description = '';

include('header.php');
?>

<!-- Main Content -->
<div id="content">
    <div class="container">
        <div class="col-md-8 content">
            <h1>Welcome to GetCoveredNowCalifornia.com</h1>

            <p>Whether you are single, married, a student, young professional, low-income, unemployed or even have a preexisting
                condition, you can qualify for heath insurance through Covered California.</p>

            <p><strong>Nobody is turned away.</strong> Assistance is based on a sliding scale with your income. The less you make, the more help you
                can receive, but you need to act now. Open enrollment runs until February 15th. If you don’t enroll, you may be 
                subject to financial penalties.</p>

            <p><strong>Questions? Need some additional help?</strong><br />
                Call (XXX) XXX-XXXX to speak with a Covered California Certified Insurance Agent</p>
        </div>
        <div class="col-md-4 sidebar">
            <?php include('sidebar.html') ?>
        </div>
    </div>
    <!-- If on homepage add more block -->
    <?php include('addtional_home.html') ?>
</div>

<?php
include('footer.php');