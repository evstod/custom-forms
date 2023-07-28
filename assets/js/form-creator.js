//Get all the form input select buttons
//Each button has a value representing the input type
const buttons = document.getElementById("input-select-button-group").querySelectorAll('button');

//Get Form Preview Container
//This is where representations of the form inputs added will go
const formPreview = document.getElementById("form-preview");


//Function to handle input select button click
function handleInputSelectClick(event) {
    const value = event.currentTarget.value;
    console.log(`Button "${value}" was pressed.`);

    //Check for form inputs that are not "input" element types

    var inputObj;

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
            inputObj = new HtmlInputs.PhoneInput();
            break;
        case "file":
            inputObj = new HtmlInputs.FileInput();
            break;
        case "url":
            inputObj = new HtmlInputs.UrlInput();
            break;
        case "image":
            inputObj = new HtmlInputs.ImageInput();
            break;
        case "hidden":
            inputObj = new HtmlInputs.HiddenInput();
            break;
        default:
            console.log("Value get error");
            break;
    }
    console.log(inputObj);
}

//Add a click event listener to each button
buttons.forEach((button) => {
    button.addEventListener("click", handleInputSelectClick);
});
