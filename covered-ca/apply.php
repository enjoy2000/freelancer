<?php
/**
 * Created by PhpStorm.
 * User: Enjoy
 * Date: 12/13/2014
 * Time: 9:33 AM
 */
// init title and description
$title = 'Apply Now! | Get Covered Now California';
$description = '';

include('header.php');
?>

<!-- Main Content -->
<div id="content">
    <div class="container">
        <div class="col-md-8 content">
            <h1>Welcome to GetCoveredNowCalifornia.com</h1>

            <form id="apply-form" action="" method="post" role="form">
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="state-chose">State you live in:</label>
                        <select class="form-control" name="state-chose" id="state-chose">
                            <option value="">&nbsp;</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="District Of Columbia">District Of Columbia</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="first-name">First Name</label>
                        <input class="required form-control" type="text" name="first-name" id="first-name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="last-name">Last Name</label>
                        <input class="required form-control" type="text" name="last-name" id="last-name" />
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="birth">Date of Birth (Primary Subscriber):</label>
                        <input class="form-control" type="date" name="birth" id="birth" />
                    </div>
                </div>

                <div class="row fake">
                    <div class="">
                        <div class="col-md-6 form-group">
                            <label for="address">Address</label>
                            <input class="form-control" type="text" name="address" id="address">
                        </div>
                        <div class="col-md-2">
                            <label for="city">City</label>
                            <input class="form-control" type="text" name="city"></div>
                        <div class="col-md-2">
                            <label for="state">state</label>
                            <input class="form-control" type="text" name="state"></div>
                        <div class="col-md-2">
                            <label for="zip">Zip</label>
                            <input class="form-control" type="text" name="zip"></div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input class="form-control email required" type="email" name="email" id="email" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="phone">Phone</label>
                        <input class="form-control" type="text" name="phone" id="phone" />
                    </div>
                </div>

                <div class="row">
                    <div class="form-group">
                    <input type="submit" class="btn submit btn-primary" name="submit" value="Submit"/>
                    <div class="inactive loading">
                        <div id="circleG">
                            <div id="circleG_1" class="circleG">
                            </div>
                            <div id="circleG_2" class="circleG">
                            </div>
                            <div id="circleG_3" class="circleG">
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div id="response"></div>
                </div>
            </form>
        </div>
        <div class="col-md-4 sidebar">
            <?php include('sidebar.html') ?>
        </div>
    </div>
</div>

<?php
include('footer.php');