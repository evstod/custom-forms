class Input {
    constructor(label, primaryClass, userDefinedClasses, name) {
        this.label = label;
        this.primaryClass = primaryClass;
        this.userDefinedClasses = userDefinedClasses;
        this.name = name;
    }

    render() {}
    renderTemplate(index) {return '';}
    renderOptions() {
        const optionsPane = document.createElement("div");

        const labelLabel = document.createElement("label");
        labelLabel.innerHTML += "Label";

        const labelInput = document.createElement("input");
        labelInput.setAttribute("type", "text")
        labelInput.setAttribute("name", "form-option-label")
        labelInput.className += this.primaryClass;

        labelLabel.appendChild(labelInput);
        optionsPane.appendChild(labelLabel);

        const userDefinedClassesLabel = document.createElement("label");
        userDefinedClassesLabel.innerHTML += "Additional Classes";
        
        const userDefinedClassesInput = document.createElement("input");
        userDefinedClassesInput.setAttribute("type", "text")
        userDefinedClassesInput.setAttribute("name", "form-option-userDefinedClasses")
        userDefinedClassesInput.className += this.primaryClass;

        userDefinedClassesLabel.appendChild(userDefinedClassesInput);
        optionsPane.appendChild(userDefinedClassesLabel);

        return optionsPane;
    }
}
