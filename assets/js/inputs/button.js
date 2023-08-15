class ButtonInput extends Input {
    constructor() {
        super("New Button", "customInput_button", "", "new_button");
        this.value = '';
        this.required = false;
        this.className = "ButtonInput";
    }

    render() {
        return `
        <label for="${this.name}">${this.label}</label>
        <input type="button" class="${this.primaryClass} ${this.userDefinedClasses}" 
            name="${this.name}" value="${this.value}" ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
        <label for="${this.name}">${this.label}</label>
        <input type="button" class="${this.primaryClass} ${this.userDefinedClasses} input-template" id="template_${index}" 
            name="${this.name}" value="${this.value}" ${this.required ? 'required' : ''}/>
        `;
    }

    renderOptions() {
        const pane = super.renderOptions();
        pane.innerHTML += `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-value">Value</label>
        <input type="text" name="form-option-value" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `;
        return pane;
    }
}
