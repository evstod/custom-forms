class TextInput extends Input {
    constructor() {
        super("New Text", "customInput_text", "", "new_text");
        this.value = '';
        this.maxlength = '';
        this.size = '';
        this.placeholder = '';
        this.required = false;
        this.className = "TextInput";
    }

    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="text" 
                id="${this.name}" name="${this.name}" value="${this.value}" 
                maxlength="${this.maxlength}" size="${this.size}" 
                placeholder="${this.placeholder}" ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="text"  id="template_${index}" 
                 name="${this.name}" value="${this.value}" 
                maxlength="${this.maxlength}" size="${this.size}" 
                placeholder="${this.placeholder}" ${this.required ? 'required' : ''} disabled />
        `
    }
    
    renderOptions() {
        const options = super.renderOptions();
        options.innerHTML += `
        <label>
            Name
            <input type="text" name="form-option-name" />
        </label>
        <label>
            Maxlength
            <input type="maxlength" name="form-option-maxlength" />
        </label>
        <label>
            Size
            <input type="number" name="form-option-size" />
        </label>
        <label>
            Placeholder
            <input type="text" name="form-option-placeholder" />
        </label>
        <label>
            Is a Required Field?
            <input type="checkbox" name="form-option-required" />
        </label>
        `;
        return options;
    }
}
