import Contact from "@/models/Contact";
import dbConnection from "../../../services/dbConnection";

dbConnection();

export default async function handler(req: any, res: any) {
  const { method } = req;
  const { ContactID } = req.query;

  switch (method) {
    case "PUT":
      try {
        const { name, email, phone }: any = req.body;
        if (!name || !email || phone) throw "invalid data";
        await Contact.updateOne({ _id: ContactID }, { name, email, phone });
        res.status(200).json({ sucess: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
      break;

    case "DELETE":
      try {
        await Contact.deleteOne({ _id: ContactID });
        res.status(204).json({ sucess: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
  }
}
