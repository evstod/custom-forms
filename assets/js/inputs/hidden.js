class HiddenInput extends Input {
    constructor() {
        super("New Hidden Value", "customInput_hidden", "", "new_hidden_value");
        this.value = '';
        this.className = "HiddenInput";
    }
    
    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="hidden" 
                id="${this.name}" name="${this.name}" value="${this.value}" />
        `
    }
    
    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="hidden"  id="template_${index}" 
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
