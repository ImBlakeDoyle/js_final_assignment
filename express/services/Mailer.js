const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SEND_GRID_KEY);

class Mailer {
    constructor(to, from, subject, text) {
        this.to = to;
        this.from = from;
        this.subject = subject;
        this.text = text; 
    }
    async send() {
    const response = await sgMail.send({
        to: this.to,
        from: this.from,
        subject: this.subject,
        text: this.text
    })

    return response
    }
}

module.exports = Mailer;
