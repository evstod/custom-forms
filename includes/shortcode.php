<?php
function print_form($id) {
    ?>
    <form action="<?php //TODO: enpoint to handle post submissions ?>" method="post">
        <?php 
        //Print all inputs. Maintain any filter hooks.
        echo apply_filters('the_content', get_post($id)->post_content); 
        ?>
    </form>
    <?php
}

add_shortcode('custom-form', 'print-form');