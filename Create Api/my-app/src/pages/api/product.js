const data = [
    {
        id: 1,
        name: "Iphone",
        price: 220000,

    }, {
        id: 2,
        name: "VIVO",
        price: 65000,

    }, {
        id: 3,
        name: "nokia",
        price: 4000,

    }, {
        id: 3,
        name: "vivo",
        price: 12000,

    }
];

export default function handle(req, res) {
    if (req.method === "GET") {
        return res.status(200).json(data);
    } else {
        return res.status(404)
            .json({ message: "This Method is Not Allowed" })
            .send();
    }
}