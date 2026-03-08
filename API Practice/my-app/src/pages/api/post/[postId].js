import { getPostById } from "@/services/postServices";

export default function handler(req, res) {
    if (req.method === "GET") {
        const id = req.query.postId
        const data = getPostById(id);
        return res.status(200).json(data)
    }
    return res.status(404).json({}).send()
}