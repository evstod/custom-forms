class DateTimeLocalInput extends Input {
    constructor() {
        super("New Date-Time", "customInput_datetime", "", "new_date-time");
        this.min = '';
        this.max = '';
        this.placeholder = '';
        this.required = false;
        this.className = "DateTimeLocalInput";
    }

    render() {
        return `
            <label for="${this.name}">${this.label}</label>
            <input class="${this.primaryClass} ${this.userDefinedClasses}" type="datetime-local" 
                id="${this.name}" name="${this.name}" min="${this.maxlength}" max="${this.size}" 
                 placeholder="${this.placeholder}" ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <label for="${this.name}">${this.label}</label>
            <input class="${this.primaryClass} ${this.userDefinedClasses} input-template" type="datetime-local"  id="template_${index}" 
                name="${this.name}" min="${this.maxlength}" max="${this.size}" 
                 placeholder="${this.placeholder}" ${this.required ? 'required' : ''} />
        `
    }
    
    renderOptions() {
        const options = super.renderOptions();
        options.innerHTML += `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-min">Minimum</label>
        <input type="number" name="form-option-min" />
        <label for="form-option-max">Maximum</label>
        <input type="number" name="form-option-max" />
        <label for="form-option-placeholder">Placeholder</label>
        <input type="text" name="form-option-placeholder" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `;
        return options;
    }
}
