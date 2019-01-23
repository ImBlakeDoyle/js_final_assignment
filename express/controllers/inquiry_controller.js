const InquiryModel = require("./../database/models/inquiry_model");

async function create(req, res) {
    const { name, email, comment, phone } = req.body;

    const inquiry = await InquiryModel.create({ name, email, comment, phone });

}

module.exports = {
    create
}