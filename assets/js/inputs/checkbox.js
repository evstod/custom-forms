//Represents group of checkboxes
class CheckboxGroupInput extends Input {
    constructor() {
        super("New Checkbox Group", "customInput_button", "", "new_checkbox_group");
        //options contains Checkbox Inputs for every checkbox input under the same group
        this.options = [];
    }

    render() {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.render();
        });
        return  `
        <div class="${this.primaryClass + ' ' + this.userDefinedClasses}" id="template_${index}" >
            <p>${this.label}</p>
            ${optionsHtml}
        </div>
        `;
    }
    
    renderTemplate(index) {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.renderTemplate();
        });
        return  `
        <div class="${this.primaryClass + ' ' + this.userDefinedClasses}" id="template_${index}" >
            <p>${this.label}</p>
            ${optionsHtml}
        </div>
        `;
    }

    renderOptions() {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += `<div form-element-group-id="${this.id}" form-element-id="${option.id}">`;
            optionsHtml += option.renderOptions().innerHTML;
            optionsHtml += "</div>";
            optionsHtml += "<br>";
        });
        const pane = super.renderOptions();
        pane.innerHTML += `
        <label for="form-option-name">
            Name
            <input type="text" name="form-option-name" />
        </label>
        <hr>
        <div class="${this.name + '-group'}">
            ${optionsHtml}
        </div>
        `;
        const addCheckbox = document.createElement("input")
        addCheckbox.setAttribute("form-element-id", this.id)
        addCheckbox.setAttribute("type", "button")
        addCheckbox.setAttribute("value", "Add Checkbox")
        addCheckbox.addEventListener("click", () => this.newInput(this.id));
        pane.appendChild(addCheckbox)
        return pane;
    }

    newInput(id) {
        const inputObject = new CheckboxInput();
        inputObject.parentId = id;
        inputObject.id = inputs[id].options.push(inputObject) - 1;
        renderPreview();
    }
}

//Represents individual checkbox of a group
class CheckboxInput extends Input {
    constructor() {
        super("New Checkbox", "sub-input", "", "new_checkbox");
        this.value = '';
    }

    render() {
        return `
            <label>
            ${this.label}
                <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="checkbox" id="${this.name}" name="${this.name}" value="${this.value}" />
            </label>
        `
    }
    
    renderTemplate() {
        return `
            <label>
            ${this.label}
                <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="checkbox" id="${this.name}" name="${this.name}" value="${this.value}" disabled />
            </label>
        `
    }

    renderOptions() {
        const options = super.renderOptions();
        options.innerHTML += `
        <label>
            Name
            <input class="sub-input" type="text" name="form-option-name" />
        </label>
        <label for="form-option-value">
            Value
            <input class="sub-input" type="text" name="form-option-value" />
        </label>
        `;
        return options;
    }
}
