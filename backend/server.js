const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/contactDB")
.then(()=>console.log("MongoDB Connected"));

const MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Message = mongoose.model("Message", MessageSchema);

// API to store message
app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: "Error saving message" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
