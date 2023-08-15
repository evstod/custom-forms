//All the Input classes and their string equivalents
var inputClasses = {
    "ButtonInput": ButtonInput,
    "CheckboxGroupInput": CheckboxGroupInput,
    "CheckboxInput": CheckboxInput,
    "ColorInput": ColorInput,
    "DateInput": DateInput,
    "MonthInput": MonthInput,
    "WeekInput": WeekInput,
    "TimeInput": TimeInput,
    "DateTimeLocalInput": DateTimeLocalInput,
    "EmailInput": EmailInput,
    "FileInput": FileInput,
    "HiddenInput": HiddenInput,
    "ImageInput": ImageInput,
    "NumberInput": NumberInput,
    "RadioGroupInput": RadioGroupInput,
    "RadioInput": RadioInput,
    "RangeInput": RangeInput,
    "SelectGroupInput": SelectGroupInput,
    "SelectInput": SelectInput,
    "TextInput": TextInput,
    "TextAreaInput": TextAreaInput,
    "UrlInput": UrlInput,
};

//Get all the form input select buttons
//Each button has a value representing the input type
const buttons = document.getElementById("input-select-button-group").querySelectorAll('button');

//The list of input objects in order of first placed to last placed
var inputs = [];

//The index of the input template that was last clicked
//Used to show the options panel for the correct input
var lastClickedIndex;

//Get Form Preview Container
//This is where representations of the form inputs added will go
const formPreview = document.getElementById("form-preview");

//Get Input Editor Container
//This is where all attributes and content of an input object can be modified
const inputEditor = document.getElementById("input-editor");

//The hidden inputs used to store the values passed to/from WordPress backend for saving
const form_inputs_array_field = document.getElementsByName('form_inputs_array_field')[0];
const form_inputs_html_field = document.getElementsByName('form_inputs_html_field')[0];

/**
 * Set the inputs array and form preview based on the saved metadata from wordpress 
 */
document.addEventListener("DOMContentLoaded", function() {
    inputs = createObjectsFromJSON(form_inputs_array_field.value);
    console.log(inputs);
    renderPreview();
});

/**
 * Sets an object type to each object in a json list of objects based on the JSON object's className attribute
 * @param {string} jsonString the json string to be parsed
 * @returns list of objects with corrected classes
 */
function createObjectsFromJSON(jsonString) {
    var objects = [];
    var jsonArray = JSON.parse(jsonString);
  
    jsonArray.forEach(function(jsonObj) {
        var className = jsonObj.className;
        console.log(className);
        if (!(typeof className == 'undefined')) {
            // Use eval() to dynamically create an object of the specified class
            var newObj = new (inputClasses[className])();
            
            // Copy properties from the JSON object to the new object
            Object.assign(newObj, jsonObj);

            objects.push(newObj);
        }
    });
  
    return objects;
  }
  

//Function to handle input select button click
function handleInputSelectClick(event) {
    const value = event.currentTarget.value;
    console.log(`Button "${value}" was pressed.`);

    //Check for form inputs that are not "input" element types

    //The input object to be put in the input list rendered
    var inputObj;

    //Set the input object based on the button value
    switch (value) {
        case "button":
            inputObj = new ButtonInput();
            break;
        case "checkbox":
            inputObj = new CheckboxGroupInput();
            break;
        case "radio":
            inputObj = new RadioGroupInput();
            break;
        case "select":
            inputObj = new SelectGroupInput();
            break;
        case "text":
            inputObj = new TextInput();
            break;
        case "textarea":
            inputObj = new TextAreaInput();
            break;
        case "number":
            inputObj = new NumberInput();
            break;
        case "range":
            inputObj = new RangeInput();
            break;
        case "color":
            inputObj = new ColorInput();
            break;
        case "date":
            inputObj = new DateInput();
            break;
        case "datetime-local":
            inputObj = new DateTimeLocalInput();
            break;
        case "month":
            inputObj = new MonthInput();
            break;
        case "week":
            inputObj = new WeekInput();
            break;
        case "time":
            inputObj = new TimeInput();
            break;
        case "email":
            inputObj = new EmailInput();
            break;
        case "phone":
            inputObj = new PhoneInput();
            break;
        case "file":
            inputObj = new FileInput();
            break;
        case "url":
            inputObj = new UrlInput();
            break;
        case "image":
            inputObj = new ImageInput();
            break;
        case "hidden":
            inputObj = new HiddenInput();
            break;
        default:
            console.error("Target Value does not coorelate to any input");
            return;
    }
    console.log(inputObj);

    //Append input object to array and get its index
    lastClickedIndex = inputs.push(inputObj) - 1;

    //Render the inputs
    renderPreview();
}

//Add a click event listener to each button
buttons.forEach((button) => {
    button.addEventListener("click", handleInputSelectClick);
});


/**
 * Render each input by renderTemplate function
 */
function renderPreview() {
    formPreview.innerHTML = "";
    console.log(inputs);
    var inputIndex = 0;
    inputs.forEach(input => {
        input.id = inputIndex;
        formPreview.innerHTML += input.renderTemplate(inputIndex++) + "</br>";
    });

    Array.from(document.getElementsByClassName("input-template")).forEach(element => {
        console.log(element);
        element.addEventListener("click", handleInputTemplateClick);
    });


    renderOptionsPane(lastClickedIndex);

    updateHiddenFields();
    console.log(2);
}

function handleInputTemplateClick(event) {
    console.log(event.currentTarget);
    var index = parseInt(event.currentTarget.id.split('_')[1]);
    renderOptionsPane(index);
}

/**
 * Render the option inputs available for the specified input
 */
function renderOptionsPane(inputIndex) {
    //Check if inputIndex didnt set correctly
    if (typeof inputs[inputIndex] == 'undefined') {
        inputIndex = 0;
    }

    var input = inputs[inputIndex];

    //Set contents of inputEditor to an input for every input attribute
    inputEditor.replaceChildren(inputs[inputIndex].renderOptions());

    //For every input rendered in the input editor
    inputEditor.querySelectorAll('input[type]:not(.sub-input):not([type="button"])').forEach((option) => {
        //add a listener for value change to input
        option.addEventListener("change", handleOptionInputChange);
        //set content of input to the value of the matching attribute
        option.value = input[option.name.replace('form-option-', '')];
    });

    inputEditor.querySelectorAll("input.sub-input").forEach((option) => {
        option.addEventListener("change", handleSubOptionInputChange);
        option.value = input.options[option.parentElement.parentElement.getAttribute("form-element-id")][option.name.replace('form-option-', '')];
    })
}

function handleSubOptionInputChange(event) {
    var input = inputs[event.target.parentElement.parentElement.getAttribute("form-element-group-id")].options[event.target.parentElement.parentElement.getAttribute("form-element-id")];
    console.log(input);
    var editedAttributeName = event.target.name.replace('form-option-', '');
    input[editedAttributeName] = event.target.value;
    renderPreview();
}

/**
 * Set attribute of an object to new value when matching input is changed
 */
function handleOptionInputChange(event) {
    var input = inputs[lastClickedIndex];
    var editedAttributeName = event.target.name.replace('form-option-', '');
    input[editedAttributeName] = event.target.value;
    renderPreview();
}

/**
 * Update the values of the hidden fields for form_inputs_array_field and form_inputs_html_field 
 */
function updateHiddenFields() {
    form_inputs_array_field.value = JSON.stringify(inputs);
    form_inputs_html_field.value = "";

    var index = 0
    inputs.forEach(input => {
        form_inputs_html_field.value += input.render(index++);
    });

    console.log(form_inputs_array_field.value);
    console.log(form_inputs_html_field.value);
}