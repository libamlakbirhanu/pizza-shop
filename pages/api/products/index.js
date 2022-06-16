import dbConnect from "../../../utilities/dbConnect";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method, body, query } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const products = await Product.find();

        res.status(200).json({ result: products });
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case "POST":
      try {
        const product = await Product.create(body);

        res.status(201).json({ result: product });
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }

  // res.status(200).json({ method, query, body });
}
