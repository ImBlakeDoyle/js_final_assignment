const InquiryModel = require("./../database/models/inquiry_model");
const Mailer = require("./../services/Mailer");
const inquiryTemplate = require('../services/emailTemplates/inquiryTemplate')

async function create(req, res) {
    const { name, email, comment, phone } = req.body;
    const inquiryemail = req.body;

    const inquiry = await InquiryModel.create({ name, email, comment, phone });

    const mailer = new Mailer("carlgrayau@gmail.com", "admin@bali.com.au", "new inquiry", JSON.stringify(inquiryemail));
    mailer.send();
    return res.status(200)
}

module.exports = {
    create
}