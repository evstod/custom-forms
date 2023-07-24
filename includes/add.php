<?php
/**
 * Add Metaboxes for the form post type edit/add screens:
 * - Form Builder
 * - Submission Rules
 */
function add_form_custom_metaboxes() {
    add_meta_box(
        'form_builder',
        'Form Builder',
        'form_builder_html',
        'form'
    );
    add_meta_box(
        'form_submission_rules',
        'Form Submission Rules',
        'form_submission_rules_html',
        'form'
    );
}


/**
 * Form Builder Metabox HTML
*/
function form_builder_html($post) {
    ?>
    <div id="input-editor">

    </div>
    <div class="pane-container">
        <div class="left-pane" id="input-select-button-group">
            <button type="button" value="button"><span class="dashicons-button"></span> Button</button>
            <button type="button" value="checkbox"><span class="dashicons-forms"></span> Checkbox</button>
            <button type="button" value="radio"><span class="dashicons-editor-ul"></span> Radio Button</button>
            <button type="button" value="select"><span class="dashicons-menu"></span> Select</button>
            <button type="button" value="text"><span class="dashicons-textcolor"></span> Text</button>
            <button type="button" value="textarea"><span class="dashicons-editor-paragraph"></span> Text Area</button>
            <button type="button" value="number"><span class="dashicons-info"></span> Number</button>
            <button type="button" value="range"><span class="dashicons-admin-settings"></span> Slider</button>
            <button type="button" value="color"><span class="dashicons-color-picker"></span> Color Select</button>
            <button type="button" value="date"><span class="dashicons-calendar-alt"></span> Date</button>
            <button type="button" value="datetime-local"><span class="dashicons-calendar-alt"></span> Date & Time</button>
            <button type="button" value="month"><span class="dashicons-calendar"></span> Month</button>
            <button type="button" value="week"><span class="dashicons-calendar"></span> Week</button>
            <button type="button" value="time"><span class="dashicons-clock"></span> Time</button>
            <button type="button" value="email"><span class="dashicons-email"></span> Email</button>
            <button type="button" value="phone"><span class="dashicons-phone"></span> Phone Number</button>
            <button type="button" value="file"><span class="dashicons-default"></span> File Upload</button>
            <button type="button" value="url"><span class="dashicons-admin-links"></span> URL</button>
            <button type="button" value="image"><span class="dashicons-image"></span> Image Upload</button>
            <button type="button" value="hidden"><span class="dashicons-hidden"></span> Hidden Value</button>
        </div>
        <div class="right-pane" id="form-preview">

        </div>
    </div>
    <?php
}
?>