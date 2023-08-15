//Represents group of radio buttons
class RadioGroupInput extends Input {
    constructor() {
        super("New Radio Button Group", "customInput_radio", "", "new_radio_button_group");
        //options contains Radio Inputs for every button input under the same group and name
        this.options = [];
        this.className = "RadioGroupInput";
    }

    render() {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.render();
        });
        return  `
        <div class="${this.primaryClass + ' ' + this.userDefinedClasses}" id="${this.name}">
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
        const addRadio = document.createElement("input")
        addRadio.setAttribute("form-element-id", this.id)
        addRadio.setAttribute("type", "button")
        addRadio.setAttribute("value", "Add Option")
        addRadio.addEventListener("click", () => this.newInput(this.id));
        pane.appendChild(addRadio)
        return pane;
    }

    newInput(id) {
        const inputObject = new RadioInput();
        inputObject.parentId = id;
        inputObject.id = inputs[id].options.push(inputObject) - 1;
        renderPreview();
    }
}

//Represents individual radio button of a group and name
class RadioInput extends Input {
    constructor() {
        super("New Radio Button", "sub-input", "", "new_radio_button");
        this.value = '';
        this.className = "RadioInput";
    }

    render() {
        return `
            <label>
            ${this.label}
                <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="radio" id="${this.name}" name="${this.name}" value="${this.value}" />
            </label>
        `
    }
        
    renderTemplate() {
        return `
            <label>
            ${this.label}
                <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="radio" id="${this.name}" name="${this.name}" value="${this.value}" disabled />
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
