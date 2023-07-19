<?php
if (!defined('WP_UNINSTALL_PLUGIN')) {
    die;
}

//Clear all Forms Posts

foreach (get_posts(array('post_type' => 'book', 'numberposts' => -1)) as $form) {
    wp_delete_post($form->ID, false);
}