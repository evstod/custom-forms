class EmailTemplate {
    constructor() {
        this.to_addresses = [];
        this.cc_addresses = [];
        this.bcc_addresses = [];
        this.body = [];
    }
    setAttributes(to, cc, bcc, body) {
        this.to_addresses = to;
        this.cc_addresses = cc;
        this.bcc_addresses = bcc;
        this.body = body;
    }
}