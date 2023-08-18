<?php 
/**
 * Collect the submission rules for sending and write emails for each specified.
 * Activates on form POST
 * Redirects back to global post and adds success state to url parameters
 */
function handle_form_submit($post_id) {
    //The email address to send from
    //TODO: Create option for this
    $from_email = "eds2083@rit.edu";

    //False if the submission failed
    $submitted = true;

    if (!(isset($_POST) && isset($_POST['form-id']))) {
        return;
    }
    $form = get_post($_POST['form-id']);
    $emails = json_decode(get_post_meta($post_id, '_form_emails_array_key'), true);


    apply_filters('wp_mail_from', $from_email);


    foreach ($emails as $email) {
        //Email headers (the sending information)
        $headers = [];
        
        //Set email to send from
        array_push($headers, `From: Test <$from_email>`);
        //Add CC addresses
        foreach ($email['cc'] as $cc) {
            array_push($headers, `Cc: ` . $cc);
        }
        //Add BCC Addresses
        foreach ($email['bcc'] as $bcc) {
            array_push($headers, `Bcc: ` . $bcc);
        }
        
        //Mail it
        $submitted = wp_mail($email['to'], $email['subject'], $email['body'], $headers);

        if (!$submitted) {
            wp_redirect(the_permalink() . "?submitted=0");
            exit();
        }
    }

    wp_redirect(the_permalink() . "?submitted=1");
    exit();
}

add_action("post_action_submit-custom-form", "handle_form_submit");