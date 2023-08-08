const emailContainer = document.getElementById("email-container");
var emailIndex = 1;

document.getElementById("add-email").addEventListener('click', function() {
    emailContainer.innerHTML += `
    <div class='form_email-template' id='email_'>
        <h3>Email ${emailIndex}</h3>
        <p>For multiple email recipients, seperate emails with a comma. Ex: john@john.com, meg@meg.com</p>
        <div class='recipients'>
            <div class='long-input to'>
                <label for='email_${emailIndex}_to'>To: </label>
                <input type="text" name="email_${emailIndex}_to" id="email_${emailIndex}_to">
            </div>
            <div class='long-input cc'>
                <label for='email_${emailIndex}_cc'>Cc: </label>
                <input type="text" name="email__cc" id="email__cc">
            </div>
            <div class='long-input bcc'>
                <label for='email_${emailIndex}_bcc'>Bcc: </label>
                <input type="text" name="email_${emailIndex}_bcc" id="email_${emailIndex}_bcc">
            </div>
        </div>
        <div class="wp-core-ui wp-editor-wrap">
            <label for="email_${emailIndex}_body">Body: </label>
            <div class="wp-editor-container">
                <textarea class="wp-editor-area" style="height: 300px" autocomplete="off" cols="40" name="email_${emailIndex}_body" id="email_${emailIndex}_body"></textarea>
            </div>
        </div>
    </div>
    `
    emailIndex++;
});