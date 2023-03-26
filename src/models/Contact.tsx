import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  registed: {
    type: Date,
    default: new Date(),
  },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
