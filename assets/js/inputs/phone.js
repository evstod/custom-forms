class PhoneInput extends Input {
    constructor() {
        super("New Phone", "customInput_phone", "", "new_phone");
        this.placeholder = '';
        this.required = false;
        this.className = "PhoneInput";
    }
    
    render() {
        return `
            <label for="${this.name}">${this.label}</label>
            <input class="${this.primaryClass} ${this.userDefinedClasses}" type="phone" 
                id="${this.name}" name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <label for="${this.name}">${this.label}</label>
            <input class="${this.primaryClass} ${this.userDefinedClasses} input-template" type="phone"  id="template_${index}" 
                 name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderOptions() {
        const options = super.renderOptions();
        options.innerHTML += `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-placeholder">Placeholder</label>
        <input type="text" name="form-option-placeholder" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `;
        return options;
    }
}
