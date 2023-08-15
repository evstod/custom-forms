class DateInput extends Input {
    constructor() {
        super("New Date", "customInput_date", "", "new_date");
        this.min = '';
        this.max = '';
        this.placeholder = '';
        this.required = false;
        this.className = "DateInput";
    }

    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="date" 
                id="${this.name}" name="${this.name}" min="${this.maxlength}" max="${this.size}" 
                 placeholder="${this.placeholder}" ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="date"  id="template_${index}" 
                name="${this.name}" min="${this.maxlength}" max="${this.size}" 
                 placeholder="${this.placeholder}" ${this.required ? 'required' : ''} disabled />
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

class MonthInput extends Input {
    constructor() {
        super("New Month", "customInput_month", "", "new_month");
        this.placeholder = '';
        this.required = false;
        this.className = "MonthInput";
    }

    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="month" 
                id="${this.name}" name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }
    
    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="month"  id="template_${index}" 
                id="${this.name}" name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} disabled />
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

class WeekInput extends Input {
    constructor() {
        super("New Week", "customInput_week", "", "new_week");
        this.placeholder = '';
        this.required = false;
        this.className = "WeekInput";
    }

    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="week" 
                id="${this.name}" name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="week"  id="template_${index}" 
                 name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} disabled />
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

class TimeInput extends Input {
    constructor() {
        super("New Time", "customInput_time", "", "new_time");
        this.min = '';
        this.max = '';
        this.placeholder = '';
        this.required = false;
        this.className = "TimeInput";
    }

    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="time" 
                id="${this.name}" name="${this.name}" min="${this.maxlength}" max="${this.size}" 
                 placeholder="${this.placeholder}" ${this.required ? 'required' : ''} />
        `
    }
    
    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="time"  id="template_${index}" 
                 name="${this.name}" min="${this.maxlength}" max="${this.size}" 
                placeholder="${this.placeholder}" ${this.required ? 'required' : ''} disabled />
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
