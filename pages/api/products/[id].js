import dbConnect from "../../../utilities/dbConnect";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method, body, query } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const product = await Product.findById(query.id);

        res.status(200).json({ result: product });
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
    case "PATCH":
      try {
        let product = await Product.findByIdAndUpdate(
          query.id,
          { ...body },
          { new: true }
        );

        res.status(200).json({ result: product });
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    default:
      res.status(400).json({ success: false });

    // res.status(200).json({ method, query, body });
  }
}
