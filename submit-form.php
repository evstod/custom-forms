<?php 
function handle_form_submit($post_id) {
    if (!(isset($_POST) && isset($_POST['form-id']))) {
        return;
    }
    $form = get_post($_POST['form-id']);
    //get_post_meta($post_id, )
}

add_action("post_action_submit-custom-form", "handle_form_submit");