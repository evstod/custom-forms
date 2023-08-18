class TextAreaInput extends Input {
    constructor() {
        super("New Text Area", "customInput_textarea", "", "new_text_area");
        this.value = '';
        this.rows = '';
        this.cols = '';
        this.wrap = '';
        this.readonly = false;
        this.placeholder = '';
        this.required = false;
        this.className = "TextAreaInput";
    }

    render() {
        return `
            <label for="${this.name}">${this.label}</label>
            <textarea class="${this.primaryClass} ${this.userDefinedClasses}" id="${this.name}" 
                name="${this.name}" rows="${this.rows}" cols="${this.cols}" wrap="${this.wrap}" 
                ${this.readonly ? 'readonly' : ''} ${this.required ? 'required' : ''}
                 placeholder="${this.placeholder}">${this.value}</textarea>
        `
    }

    renderTemplate(index) {
        return `
            <label for="${this.name}">${this.label}</label>
            <textarea class="${this.primaryClass} ${this.userDefinedClasses} input-template" id="${this.name}"  id="template_${index}" 
                name="${this.name}" rows="${this.rows}" cols="${this.cols}" wrap="${this.wrap}" 
                ${this.readonly ? 'readonly' : ''} ${this.required ? 'required' : ''}
                 placeholder="${this.placeholder}" disabled>${this.value}</textarea>
        `
    }
        
    renderOptions() {
        const options = super.renderOptions();
        options.innerHTML += `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-rows">Rows</label>
        <input type="number" name="form-option-rows" />
        <label for="form-option-cols">Cols</label>
        <input type="number" name="form-option-cols" />
        <label for="form-option-wrap">Wrap</label>
        <input type="number" name="form-option-wrap" />
        <label for="form-option-readoly">Read-only?</label>
        <input type="text" name="form-option-readonly" />
        <label for="form-option-placeholder">Placeholder</label>
        <input type="text" name="form-option-placeholder" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `;
        return options;
    }
}
