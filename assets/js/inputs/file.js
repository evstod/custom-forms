class FileInput extends Input {
    constructor() {
        super("New File", "customInput_file", "", "new_file");
        this.accept = "";
        this.mutliple = false;
        this.required = false;
        this.className = "FileInput";
    }
    
    render() {
        return `
            <input class="${this.primaryClass} ${this.userDefinedClasses}" type="file" 
                id="${this.name}" name="${this.name}" accept="${this.accept}" 
                multiple="${this.mutliple}" ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass} ${this.userDefinedClasses} input-template" type="file"  id="template_${index}" 
                 name="${this.name}" accept="${this.accept}" 
                multiple="${this.mutliple}" ${this.required ? 'required' : ''} />
        `
    }

    renderOptions() {
        const options = super.renderOptions();
        options.innerHTML += `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-accept">Accept</label>
        <input type="text" name="form-option-accept" />
        <label for="form-option-name">Allow Multiple</label>
        <input type="checkbox" name="form-option-checkbox" />
        <label for="form-option-placeholder">Placeholder</label>
        <input type="text" name="form-option-placeholder" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `;
        return options;
    }
}
