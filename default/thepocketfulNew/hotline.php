<?php

$today = date('l');
$month_day = date('F jS');

?>
<Response>
<Say>Welcome to Crisp on Wheels.</Say>
<Say>Today is <?php echo $today.", ".$month_day; ?>.</Say>
<Say>We are:</Say>
<Say><?php
if ($today == 'Monday') {
    echo "located on Hudson and King Street.";
} else if ($today == 'Tuesday') {
    echo "located on 49th Street and 6th Avenue";
} else if ($today == 'Wednesday') {
    echo "located on 53rd Street between Madison and Park Avenue.";
} else if ($today == 'Thursday') {
    echo "located on 50th Street and 6th Avenue.";
} else if ($today == 'Friday') {
    echo "46th Street and 6th Avenue.";
} else {
    echo "closed. Please check our schedule on Crisp On Wheels dot com for further details.";
}
?></Say>
<Say>See you soon. Goodbye.</Say>
</Response>
