const INPUT_NAME_REGEX = /\{(\w+)\}/;

const emailContainer = document.getElementById("email-container");

var emailIndex = 1;

document.getElementById("add-email").addEventListener('click', function() {
    console.log(emailIndex);
    emailContainer.innerHTML += `
    <div class='form_email-template' id='email_${emailIndex}'>
        <h3>Email ${emailIndex}</h3>
        <p>For multiple email recipients, seperate emails with a comma. Ex: john@john.com, meg@meg.com</p>
        <input type='hidden' name='emails_count' value=0 />
        <div class='recipients'>
            <div class='long-input to'>
                <label for='email_${emailIndex}_to'>To: </label>
                <input type="text" name="email_${emailIndex}_to" id="email_${emailIndex}_to">
                <p class='error-message'></p>
            </div>
            <div class='long-input cc'>
                <label for='email_${emailIndex}_cc'>Cc: </label>
                <input type="text" name="email_${emailIndex}_cc" id="email_${emailIndex}_cc">
                <p class='error-message'></p>
            </div>
            <div class='long-input bcc'>
                <label for='email_${emailIndex}_bcc'>Bcc: </label>
                <input type="text" name="email_${emailIndex}_bcc" id="email_${emailIndex}_bcc">
                <p class='error-message'></p>
            </div>
        </div>
        <div class="wp-core-ui wp-editor-wrap">
            <label for="email_${emailIndex}_body">Body: </label>
            <div class="wp-editor-container">
                <textarea class="wp-editor-area" style="height: 300px" autocomplete="off" cols="40" name="email_${emailIndex}_body" id="email_${emailIndex}_body"></textarea>
                <p class='error-message'></p>
            </div>
        </div>
    </div>
    `

    var toInput = document.getElementById(`email_${emailIndex}_to`);
    var ccInput = document.getElementById(`email_${emailIndex}_cc`);
    var bccInput = document.getElementById(`email_${emailIndex}_bcc`);
    var bodyInput = document.getElementById(`email_${emailIndex}_body`);

    toInput.addEventListener('change', handleInputChange);
    ccInput.addEventListener('change', handleInputChange);
    bccInput.addEventListener('change', handleInputChange);
    bodyInput.addEventListener('change', handleInputChange);

    emailIndex++;

    //Track the number of emails
    document.getElementById('email_count').value = emailIndex;
});

function handleInputChange(event) {
    //The element that contains errors relating to the target
    var errorMessageContainer = event.target.nextElementSibling;
    //Check for invalid input names used in the target
    var check = checkInputNames(event.target.value);
    //If there are invalid names, show the user which ones
    if (check != true) {
        console.log('good');
        errorMessageContainer.innerHTML = "The following input names are not found in the form: ";
        check.forEach(name => {
            errorMessageContainer.innerHTML += name + ","
        });
        //Disable the submit button to prevent broken submissions
        document.getElementById('publish').setAttribute('disabled', 'true');
        return;
    }
    //All good, enable the submission button
    document.getElementById('publish').setAttribute('disabled', 'false');
}

function checkInputNames(value) {
    var resultIndex;

    var invalidNames = [];
    while (resultIndex = value.search(INPUT_NAME_REGEX) != -1) {
        //Get the end of the result: the first '}' after the detected '{'
        var resultEndIndex = value.indexOf('}', resultIndex+1);
        //Get the result: everything between '{' and '}'
        var result = value.substring(resultIndex, resultEndIndex);

        //check for inputs with result name
        var associatedInput = formPreview.querySelector(`input[name="${result}"], select[name="${result}"], textarea[name="${result}"]`);

        //if name does not have an input
        if (associatedInput == null) {
            //Add the invalid name
            invalidNames.push(result);
        }

        //Omit the result and '{}' from the value string, replace with associated input value
        //value = value.substring(0, resultIndex-1) + associatedInput.value + value.substring(resultEndIndex+1);
        value = value.substring(0, resultIndex-1) + value.substring(resultEndIndex+1);
    }

    console.log(invalidNames);
    //If there are invalid results
    if (invalidNames.length > 0) {
        console.log('aa');
        //return array of invalid results
        return invalidNames;
    }
    //return 
    return true;
}