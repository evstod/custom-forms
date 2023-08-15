class ColorInput extends Input {
    constructor() {
        super("New Color", "customInput_color", "", "new_color");
        this.required = false;
        this.className = "ColorInput";
    }

    render() {
        return `
            <input class="${this.primaryClass} ${this.userDefinedClasses}" type="color" 
                id="${this.name}" name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass} ${this.userDefinedClasses} input-template" type="color"  id="template_${index}"
            name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderOptions() {
        const options = super.renderOptions();
        options.innerHTML += `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `;
        return options;
    }
}
