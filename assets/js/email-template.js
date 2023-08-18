class EmailTemplate {
    constructor() {
        this.to_addresses = [];
        this.cc_addresses = [];
        this.bcc_addresses = [];
        this.subject = [];
        this.body = [];
    }
    setAttributes(to, cc, bcc, subject, body) {
        this.to_addresses = to;
        this.cc_addresses = cc;
        this.bcc_addresses = bcc;
        this.subject = subject;
        this.body = body;
    }
}