<?php


    // Waiting drama cause localhost is too fast to see the loading buffer
    sleep(4);


    // Check if response is set from client side
    if(isset($_POST['g-recaptcha-response'])){
        $captcha=$_POST['g-recaptcha-response'];
        if(!$captcha){
            echo "It seems you haven't fill in reCAPTCHA";
            exit;
        }
    
        // Process the response
        $secretKey = "6LcpzYwUAAAAAORtznUKA3vzyDJ7tlthT8azcx7U";
        $ip = $_SERVER['REMOTE_ADDR'];
        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
        $responseKeys = json_decode($response,true);
        
        if(intval($responseKeys["success"]) !== 1) {
            echo 'You have been rejected from reCAPTCHA. Try again later.';
            exit;
        } 
    }
    
    //     Prepare data

    if(isset($_POST['locksmith_for'])) $locksmith_for = $_POST['locksmith_for'];
    else $locksmith_for = "";

    if(isset($_POST['other1'])) $other = $_POST['other1'];
    else $other1 = "";

    if(isset($_POST['other2'])) $other = $_POST['other2'];
    else $other2 = "";

    if(isset($_POST['object'])) $object = $_POST['object'];
    else $object = "";

    if(isset($_POST['address'])) $address = $_POST['address'];
    else $address = "";

    if(isset($_POST['name'])) $name = $_POST['name'];
    else $name = "";

    if(isset($_POST['telephone'])) $telephone = $_POST['telephone'];
    else $telephone = "";

    if(isset($_POST['email'])) $email = $_POST['email'];
    else $email = "";

    $services = array();
    if(isset($_POST['services'])) {
        if(!empty($_POST['services'])){
            foreach($_POST['services'] as $selected){
                $services[] = $selected;
            }
        }
    }


    // dummy condition for ajax response testing
    if ($locksmith_for != "") 
        echo "success";
    else
        echo "it really doesnt matter";

?>