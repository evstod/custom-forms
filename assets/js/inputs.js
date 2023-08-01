class Input {
    constructor() {
        this.label = '';
        this.primaryClass = '';
        this.userDefinedClasses = '';
        this.name = '';
    }

    render() {}
    renderTemplate(index) {return '';}
    renderOptions() {
        var a;
        return `
        <label for="form-option-label">Label</label>
        <input type="text" name="form-option-label" />
        <label for="form-option-userDefinedClasses">Additional Classes</label>
        <input type="text" name="form-option-userDefinedClasses" />
        `;
    }
}

class ButtonInput extends Input {
    constructor() {
        super("New Button", "customInput_button", "", "new_button");
        this.value = '';
        this.required = false;
    }

    render() {
        return `
        <input type="button" class="${this.primaryClass + ' ' + this.userDefinedClasses}" 
            name="${this.name}" name="${this.name}" ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
        <input type="button" class="${this.primaryClass + ' ' + this.userDefinedClasses} id="template_${index}" 
            name="${this.name}" name="${this.name}" ${this.required ? 'required' : ''} disabled/>
        `;
    }

    renderOptions() {
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-value">Value</label>
        <input type="text" name="form-option-value" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `;
    }
}

//Represents group of checkboxes
class CheckboxGroupInput extends Input {
    constructor() {
        super("New Checkbox Group", "customInput_button", "", "new_checkbox_group");
        //options contains Checkbox Inputs for every checkbox input under the same group
        this.options = [];
    }

    render() {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.render();
        });
        return  `
        <div class="${this.primaryClass + ' ' + this.userDefinedClasses}" id="template_${index}" >
            <p>${this.label}</p>
            ${optionsHtml}
        </div>
        `;
    }
    
    renderTemplate(index) {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.renderTemplate();
        });
        return  `
        <div class="${this.primaryClass + ' ' + this.userDefinedClasses}" id="template_${index}" >
            <p>${this.label}</p>
            ${optionsHtml}
        </div>
        `;
    }

    renderOptions() {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.renderTemplate();
        });
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <div class="${this.primaryClass + '-group'}">
            ${optionsHtml}
        </div>
        `;
    }
}

//Represents individual checkbox of a group
class CheckboxInput extends Input {
    constructor() {
        super("New Checkbox", "", "", "new_checkbox");
        this.value = '';
    }

    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="checkbox" 
                id="${this.name}" name="${this.name}" value="${this.value}" />
        `
    }
    
    renderTemplate() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="checkbox" 
                id="${this.name}" name="${this.name}" value="${this.value}" disabled />
        `
    }

    renderOptions() {
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-value">Value</label>
        <input type="text" name="form-option-value" />
        `
    }
}

//Represents group of radio buttons
class RadioGroupInput extends Input {
    constructor() {
        super("New Radio Button Group", "customInput_radio", "", "new_radio_button_group");
        //options contains Radio Inputs for every button input under the same group and name
        this.options = [];
    }

    render() {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.render();
        });
        return  `
        <div class="${this.primaryClass + ' ' + this.userDefinedClasses}" id="${this.name}">
            <p>${this.label}</p>
            ${optionsHtml}
        </div>
        `;
    }
        
    renderTemplate(index) {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.renderTemplate();
        });
        return  `
        <div class="${this.primaryClass + ' ' + this.userDefinedClasses}" id="template_${index}" >
            <p>${this.label}</p>
            ${optionsHtml}
        </div>
        `;
    }

    renderOptions() {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.renderTemplate();
        });
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <div class="${this.primaryClass + '-group'}">
            ${optionsHtml}
        </div>
        `;
    }
}

//Represents individual radio button of a group and name
class RadioInput extends Input {
    constructor() {
        super("New Radio Button", "", "", "new_radio_button");
        this.value = '';
    }

    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="radio" 
                id="${this.name}" name="${this.name}" value="${this.value}" />
        `
    }
        
    renderTemplate() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="radio" 
                id="${this.name}" name="${this.name}" value="${this.value}" disabled />
        `
    }

    renderOptions() {
        return super.renderOptions() + `
        <label for="form-option-value">Value</label>
        <input type="text" name="form-option-value" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `
    }
}

//represents dropdown and all options
class SelectGroupInput extends Input {
    constructor() {
        super("New Select Group", "customInput_select", "", "new_select_group");
        this.size = '';
        this.multiple = false;
        this.required = false;
    }

    
    render() {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.render();
        });
        return  `
        <div class="${this.primaryClass + ' ' + this.userDefinedClasses}"  id="template_${index}" >
            <p>${this.label}</p>
            <select id="${this.name}" name="${this.name}" disabled">
                ${optionsHtml}
            </select>
        </div>
        `;
    }
            
    renderTemplate(index) {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.renderTemplate();
        });
        return  `
        <div class="${this.primaryClass + ' ' + this.userDefinedClasses}"  id="template_${index}" >
            <p>${this.label}</p>
            <selectname="${this.name}">
                ${optionsHtml}
            </select>
        </div>
        `;
    }

    renderOptions() {
        var optionsHtml = ``;
        this.options.forEach(option => {
            optionsHtml += option.renderTemplate();
        });
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <div class="${this.primaryClass + '-group'}">
            ${optionsHtml}
        </div>
        `;
    }
}

//Represents individual select option of a group
class SelectInput extends Input {
    constructor() {
        super("New Option", "", "", "new_option");
        this.value = '';
    }

    render() {
        return `
            <option value="${this.value}">${this.label}</option>
        `
    }
            
    renderTemplate() {
        return `
            <option value="${this.value}" disabled>${this.label}</option>
        `
    }

    renderOptions() {
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-value">Value</label>
        <input type="text" name="form-option-value" />
        `
    }
}

class TextInput extends Input {
    constructor() {
        super("New Text", "customInput_text", "", "new_text");
        this.value = '';
        this.maxlength = '';
        this.size = '';
        this.placeholder = '';
        this.required = false;
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
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-value">Maxlength</label>
        <input type="maxlength" name="form-option-maxlength" />
        <label for="form-option-size">Size</label>
        <input type="number" name="form-option-size" />
        <label for="form-option-placeholder">Placeholder</label>
        <input type="text" name="form-option-placeholder" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `
    }
}

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
    }

    render() {
        return `
            <textarea class="${this.primaryClass + ' ' + this.userDefinedClasses}" id="${this.name}" 
                name="${this.name}" rows="${this.rows}" cols="${this.cols}" wrap="${this.wrap}" 
                ${this.readonly ? 'readonly' : ''} ${this.required ? 'required' : ''}
                 placeholder="${this.placeholder}">${this.value}</textarea>
        `
    }

    renderTemplate(index) {
        return `
            <textarea class="${this.primaryClass + ' ' + this.userDefinedClasses}" id="${this.name}"  id="template_${index}" 
                name="${this.name}" rows="${this.rows}" cols="${this.cols}" wrap="${this.wrap}" 
                ${this.readonly ? 'readonly' : ''} ${this.required ? 'required' : ''}
                 placeholder="${this.placeholder}" disabled>${this.value}</textarea>
        `
    }
        
    renderOptions() {
        return super.renderOptions() + `
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
        `
    }
}

class NumberInput extends Input {
    constructor() {
        super("New Number", "customInput_number", "", "new_number");
        this.min = '';
        this.max = '';
        this.step = '';
        this.placeholder = '';
        this.required = false;
    }

    
    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="number" 
                id="${this.name}" name="${this.name}" min="${this.maxlength}" max="${this.size}" 
                step="${this.step}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="number"  id="template_${index}" 
                 name="${this.name}" min="${this.maxlength}" max="${this.size}" 
                step="${this.step}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} disabled />
        `
    }

    renderOptions() {
        return super.renderOptions() + `
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
        `
    }
}

class RangeInput extends Input {
    constructor() {
        super("New Range", "customInput_range", "", "new_range");
        this.min = '';
        this.max = '';
        this.step = '';
        this.required = false;
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
        return super.renderOptions() + `
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
        `
    }
}

class ColorInput extends Input {
    constructor() {
        super("New Color", "customInput_color", "", "new_color");
        this.required = false;
    }

    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="color" 
                id="${this.name}" name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="color"  id="template_${index}"
            name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderOptions() {
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `
    }
}

class DateInput extends Input {
    constructor() {
        super("New Date", "customInput_date", "", "new_date");
        this.min = '';
        this.max = '';
        this.placeholder = '';
        this.required = false;
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
        return super.renderOptions() + `
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
        `
    }
}

class DateTimeLocalInput extends Input {
    constructor() {
        super("New Date-Time", "customInput_datetime", "", "new_date-time");
        this.min = '';
        this.max = '';
        this.placeholder = '';
        this.required = false;
    }

    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="datetime-local" 
                id="${this.name}" name="${this.name}" min="${this.maxlength}" max="${this.size}" 
                 placeholder="${this.placeholder}" ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="datetime-local"  id="template_${index}" 
                name="${this.name}" min="${this.maxlength}" max="${this.size}" 
                 placeholder="${this.placeholder}" ${this.required ? 'required' : ''} disabled />
        `
    }
    
    renderOptions() {
        return super.renderOptions() + `
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
        `
    }
}

class MonthInput extends Input {
    constructor() {
        super("New Month", "customInput_month", "", "new_month");
        this.placeholder = '';
        this.required = false;
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
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-placeholder">Placeholder</label>
        <input type="text" name="form-option-placeholder" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `
    }
}

class WeekInput extends Input {
    constructor() {
        super("New Week", "customInput_week", "", "new_week");
        this.placeholder = '';
        this.required = false;
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
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-placeholder">Placeholder</label>
        <input type="text" name="form-option-placeholder" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `
    }
}

class TimeInput extends Input {
    constructor() {
        super("New Time", "customInput_time", "", "new_time");
        this.min = '';
        this.max = '';
        this.placeholder = '';
        this.required = false;
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
        return super.renderOptions() + `
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
        `
    }
}

class EmailInput extends Input {
    constructor() {
        super("New Email", "customInput_email", "", "new_email");
        this.placeholder = '';
        this.required = false;
    }

    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="email" 
                id="${this.name}" name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="email"  id="template_${index}" 
                 name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} disabled />
        `
    }

    renderOptions() {
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-placeholder">Placeholder</label>
        <input type="text" name="form-option-placeholder" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `
    }
}

class PhoneInput extends Input {
    constructor() {
        super("New Phone", "customInput_phone", "", "new_phone");
        this.placeholder = '';
        this.required = false;
    }
    
    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="phone" 
                id="${this.name}" name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="phone"  id="template_${index}" 
                 name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderOptions() {
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-placeholder">Placeholder</label>
        <input type="text" name="form-option-placeholder" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `
    }
}

class FileInput extends Input {
    constructor() {
        super("New File", "customInput_file", "", "new_file");
        this.accept = "";
        this.mutliple = false;
        this.required = false;
    }
    
    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="file" 
                id="${this.name}" name="${this.name}" accept="${this.accept}" 
                multiple="${this.mutliple}" ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="file"  id="template_${index}" 
                 name="${this.name}" accept="${this.accept}" 
                multiple="${this.mutliple}" ${this.required ? 'required' : ''} disabled />
        `
    }

    renderOptions() {
        return super.renderOptions() + `
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
        `
    }
}

class UrlInput extends Input {
    constructor() {
        super("New Url", "customInput_url", "", "new_url");
        this.placeholder = '';
        this.required = false;
    }
    
    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="url" 
                id="${this.name}" name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="url"  id="template_${index}" 
                 name="${this.name}" placeholder="${this.placeholder}" 
                ${this.required ? 'required' : ''} />
        `
    }

    renderOptions() {
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-placeholder">Placeholder</label>
        <input type="text" name="form-option-placeholder" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `
    }
}

class ImageInput extends Input {
    constructor() {
        super("New Image", "customInput_image", "", "new_image");
        this.required = false;
        this.accept = "image/*";
    }

    render() {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="file" 
                id="${this.name}" name="${this.name}" accept="${this.accept}"
                ${this.required ? 'required' : ''} />
        `
    }

    renderTemplate(index) {
        return `
            <input class="${this.primaryClass + ' ' + this.userDefinedClasses}" type="image"  id="template_${index}" 
                 name="${this.name}" ${this.required ? 'required' : ''} />
        `
    }

    renderOptions() {
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        <label for="form-option-placeholder">Placeholder</label>
        <input type="text" name="form-option-placeholder" />
        <label for="form-option-required">Is a Required Field?</label>
        <input type="checkbox" name="form-option-required" />
        `
    }
}

class HiddenInput extends Input {
    constructor() {
        super("New Hidden Value", "customInput_hidden", "", "new_hidden_value");
        this.value = '';
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
        return super.renderOptions() + `
        <label for="form-option-name">Name</label>
        <input type="text" name="form-option-name" />
        `
    }
}
