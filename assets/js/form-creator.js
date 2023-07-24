        //Get all the form input select buttons
        //Each button has a value representing the input type
        const buttons = document.getElementById("input-select-button-group").querySelectorAll('*');

        //Get Form Preview Container
        //This is where representations of the form inputs added will go
        const formPreview = document.getElementById("form-preview");

        function createInputPreview(inputElement) {
            return `
            <div class="input-preview input-preview-${inputType}">
                <input type="${inputType}" name="label-
            </div>
            `;
        }

        function createInputElement(inputType) {

        }

        function createButtonElement() {
            const newElement = document.createElement('input')
            newElement.setAttribute('type', 'button');
            newElement.setAttribute('value', '');
            newElement.setAttribute('class', 'custom-form_button');
            return newElement;
        }

        function createCheckboxElement() {
            const newElement = document.createElement('input')
            newElement.setAttribute('type', 'checkbox');
            newElement.setAttribute('value', '');
            newElement.setAttribute('name', '');
            newElement.setAttribute('id', '');
            newElement.setAttribute('class', 'custom-form_checkbox');
            return newElement;
        }

        //Function to handle input select button click
        function handleInputSelectClick(event) {
            const value = event.target.value;
            console.log(`Button "${value}" was pressed.`);
            
            //Check for form inputs that are not "input" element types

            if (value == "select") {

            } else if (value == "textarea") {

            }
        }

        //Add a click event listener to each button
        buttons.forEach((button) => {
            button.addEventListener("click", handleInputSelectClick);
        });
