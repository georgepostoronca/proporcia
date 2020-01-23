  
<?php 

if($_POST['form-title']) {

    $subject = "заявка с сайта"; 

    $result = "";   

    $index = 0;
    foreach($_POST as $value) {
        $index++;
        if($indexx == 1) {
            continue;
        } else {
            $result .= "<tr><td>" . $value . "<td><tr>";
        }
    }
    $message = "<table border='1' style='width: 100%; border-collapse: collapse;'><tbody>" . $result . "</tbody>" . "</table>";

    $headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
    $headers .= "From: От кого письмо <from@example.com>\r\n"; 
    $headers .= "Reply-To: reply-to@example.com\r\n"; 

    mail("prophair@gmail.com", $subject, $message, $headers); 
    mail("forms@rupor.agency", $subject, $message, $headers); 
    echo $_POST['form-title'];
}

?>