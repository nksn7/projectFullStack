import Contact from "@/models/Contact";
import dbConnection from "../../../services/dbConnection";

dbConnection();

export default async function handler(req: Request, res: any) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const contacts = await Contact.find({});
        res.status(200).json({ sucess: true, data: contacts });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;

    case "POST":
      try {
        const { name, email, phone }: any = req.body;
        if (!name || !email || phone) throw "invalid data";
        const contact = await Contact.create({ name, email, phone });
        res.status(201).json({ sucess: true, data: contact });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
  }
}
