class EmailInput extends Input {
    constructor() {
        super("New Email", "customInput_email", "", "new_email");
        this.placeholder = '';
        this.required = false;
        this.className = "EmailInput";
    }

    render() {
        return `
            <input class="${this.primaryClass} ${this.userDefinedClasses}" type="email" 
                id="${this.name}" name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass} ${this.userDefinedClasses}" type="email"  id="template_${index}" 
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
