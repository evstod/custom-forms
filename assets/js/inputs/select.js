//represents dropdown and all options
class SelectGroupInput extends Input {
    constructor() {
        super("New Select Group", "customInput_select", "", "new_select_group");
        this.size = 5;
        this.multiple = false;
        this.required = false;
        this.options = [];
        this.className = "SelectGroupInput";
    }

    
    render() {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.render();
        });
        return  `
        <div class="${this.primaryClass} ${this.userDefinedClasses}" >
            <p>${this.label}</p>
            <select id="${this.name}" name="${this.name}" >
                ${optionsHtml}
            </select>
        </div>
        `;
    }
            
    renderTemplate(index) {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.renderTemplate();
        });
        return  `
        <div class="${this.primaryClass} ${this.userDefinedClasses}"  id="template_${index}" >
            <p>${this.label}</p>
            <select id="${this.name}" name="${this.name}" >
                ${optionsHtml}
            </select>
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
        const addSelect = document.createElement("input")
        addSelect.setAttribute("form-element-id", this.id)
        addSelect.setAttribute("type", "button")
        addSelect.setAttribute("value", "Add Select")
        addSelect.addEventListener("click", () => this.newInput(this.id));
        pane.appendChild(addSelect)
        return pane;
    }

    newInput(id) {
        const inputObject = new SelectInput();
        inputObject.parentId = id;
        inputObject.id = inputs[id].options.push(inputObject) - 1;
        renderPreview();
    }
}

//Represents individual select option of a group
class SelectInput extends Input {
    constructor() {
        super("New Option", "sub-input", "", "new_option");
        this.value = '';
        this.className = "SelectInput";
    }

    render() {
        return `
            <option value="${this.value}">${this.label}</option>
        `
    }
            
    renderTemplate() {
        return `
            <option value="${this.value}" disabled>${this.label}</option>
        `
    }

    renderOptions() {
        // const options = super.renderOptions();
        const optionsPane = document.createElement("div");
        optionsPane.innerHTML += `
        <label>
            Label
            <input class="sub-input" type="text" name="form-option-label" />
        </label>
        <label for="form-option-value">
            Value
            <input class="sub-input" type="text" name="form-option-value" />
        </label>
        `;
        return optionsPane;
    }
}
