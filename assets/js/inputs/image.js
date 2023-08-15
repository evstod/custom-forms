class ImageInput extends Input {
    constructor() {
        super("New Image", "customInput_image", "", "new_image");
        this.required = false;
        this.accept = "image/*";
        this.className = "ImageInput";
    }

    render() {
        return `
            <input class="${this.primaryClass} ${this.userDefinedClasses}" type="file" 
                id="${this.name}" name="${this.name}" accept="${this.accept}"
                ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass} ${this.userDefinedClasses} input-template" type="file"   id="template_${index}" 
                 name="${this.name}" ${this.required ? 'required' : ''} />
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
