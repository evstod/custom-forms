class RangeInput extends Input {
    constructor() {
        super("New Range", "customInput_range", "", "new_range");
        this.min = '';
        this.max = '';
        this.step = '';
        this.required = false;
        this.className = "RangeInput";
    }

    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="range" 
                id="${this.name}" name="${this.name}" min="${this.maxlength}" max="${this.size}" 
                step="${this.step}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="range"  id="template_${index}" 
                 name="${this.name}" min="${this.maxlength}" max="${this.size}" 
                step="${this.step}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} disabled />
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
        <label for="form-option-step">Step</label>
        <input type="number" name="form-option-step" />
        <label for="form-option-wrap">Wrap</label>
        <input type="text" name="form-option-readonly" />
        <label for="form-option-placeholder">Placeholder</label>
        <input type="text" name="form-option-placeholder" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `;
        return options;
    }
}
