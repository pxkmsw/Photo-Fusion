import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const data = await cloudinary.api.root_folders();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}
