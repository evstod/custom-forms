class HiddenInput extends Input {
    constructor() {
        super("New Hidden Value", "customInput_hidden", "", "new_hidden_value");
        this.value = '';
        this.className = "HiddenInput";
    }
    
    render() {
        return `
            <label for="${this.name}">${this.label}</label>
            <input class="${this.primaryClass} ${this.userDefinedClasses}" type="hidden" 
                id="${this.name}" name="${this.name}" value="${this.value}" />
        `
    }
    
    renderTemplate(index) {
        return `
            <label for="${this.name}">${this.label}</label>
            <input class="${this.primaryClass} ${this.userDefinedClasses} input-template" type="text"  id="template_${index}" 
                 name="${this.name}" value="${this.value}" />
        `
    }

    renderOptions() {
        const options = super.renderOptions();
        options.innerHTML += `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        `;
        return options;
    }
}
