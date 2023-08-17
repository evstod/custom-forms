const INPUT_NAME_REGEX = /\{(\w+)\}/;

const emailContainer = document.getElementById("email-container");

const emailsArrayField = document.getElementById("form_emails_array_field");

var emailIndex = document.getElementsByClassName('form_email-template').length;
if (emailIndex == 0) emailIndex = 1;

var emailTemplates = [];

function addEmailTemplate(email) {
    emailTemplates.push(email);
    updateEmailsArrayField();
}

function updateEmailTemplate(to, cc, bcc, body, index) {
    emailTemplates[index-1].setAttributes(to, cc, bcc, body);
    updateEmailsArrayField();
}

function updateEmailsArrayField() {
    emailsArrayField.value = JSON.stringify(emailTemplates);
}

document.getElementById("add-email").addEventListener('click', function() {
    console.log(emailIndex);

    const emailDiv = document.createElement('div');
    emailDiv.classList.add('form_email-template');
    emailDiv.id = `email_${emailIndex}`;

    const h3 = document.createElement('h3');
    h3.textContent = `Email ${emailIndex}`;
    emailDiv.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = 'For multiple email recipients, separate emails with a comma. Ex: john@john.com, meg@meg.com';
    emailDiv.appendChild(p);

    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'emails_count';
    hiddenInput.value = 0;
    emailDiv.appendChild(hiddenInput);

    const recipientsDiv = document.createElement('div');
    recipientsDiv.classList.add('recipients');

    ['to', 'cc', 'bcc'].forEach(type => {
        const longInputDiv = document.createElement('div');
        longInputDiv.classList.add('long-input', type);

        const label = document.createElement('label');
        label.htmlFor = `email_${emailIndex}_${type}`;
        label.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}: `;
        longInputDiv.appendChild(label);

        const input = document.createElement('input');
        input.type = 'text';
        input.name = `email_${emailIndex}_${type}`;
        input.id = `email_${emailIndex}_${type}`;
        longInputDiv.appendChild(input);

        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        longInputDiv.appendChild(errorMessage);

        recipientsDiv.appendChild(longInputDiv);
    });

    emailDiv.appendChild(recipientsDiv);

    const wpEditorWrapDiv = document.createElement('div');
    wpEditorWrapDiv.classList.add('wp-core-ui', 'wp-editor-wrap');

    const wpEditorLabel = document.createElement('label');
    wpEditorLabel.htmlFor = `email_${emailIndex}_body`;
    wpEditorLabel.textContent = 'Body: ';
    wpEditorWrapDiv.appendChild(wpEditorLabel);

    const wpEditorContainerDiv = document.createElement('div');
    wpEditorContainerDiv.classList.add('wp-editor-container');

    const textarea = document.createElement('textarea');
    textarea.classList.add('wp-editor-area');
    textarea.style.height = '300px';
    textarea.autocomplete = 'off';
    textarea.cols = 40;
    textarea.name = `email_${emailIndex}_body`;
    textarea.id = `email_${emailIndex}_body`;
    wpEditorContainerDiv.appendChild(textarea);

    const errorMessageTextarea = document.createElement('p');
    errorMessageTextarea.classList.add('error-message');
    wpEditorContainerDiv.appendChild(errorMessageTextarea);

    wpEditorWrapDiv.appendChild(wpEditorContainerDiv);
    emailDiv.appendChild(wpEditorWrapDiv);

    emailContainer.appendChild(emailDiv);


    var toInput = document.getElementById(`email_${emailIndex}_to`);
    var ccInput = document.getElementById(`email_${emailIndex}_cc`);
    var bccInput = document.getElementById(`email_${emailIndex}_bcc`);
    var bodyInput = document.getElementById(`email_${emailIndex}_body`);

    toInput.addEventListener('change', handleInputChange);
    ccInput.addEventListener('change', handleInputChange);
    bccInput.addEventListener('change', handleInputChange);
    bodyInput.addEventListener('change', handleInputChange);

    emailIndex++;

    //Add blank email template to array
    addEmailTemplate(new EmailTemplate);
});

function handleInputChange(event) {
    console.log(event.currentTarget.id);
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
    } else errorMessageContainer.innerHTML = "";

    //Get email index
    var index = parseInt(event.currentTarget.name.split("_")[1]);
    console.log(index);

    //Get to recipients and split them into an array
    var to = document.getElementById(`email_${index}_to`).value.replace(" ", "").split(",");
    //Get cc recipients and split them into an array
    var cc = document.getElementById(`email_${index}_cc`).value.replace(" ", "").split(",");
    //Get bcc recipients and split them into an array
    var bcc = document.getElementById(`email_${index}_bcc`).value.replace(" ", "").split(",");
    //Get body
    var body = document.getElementById(`email_${index}_body`).value;

    //update Email object with new content
    updateEmailTemplate(to, cc, bcc, body, index);

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