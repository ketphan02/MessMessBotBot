"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000 || process.env.PORT;
const WEBHOOK = () => {
    app.get("/", (req, res) => {
        res.send("bruh");
    });
    app.listen(port, () => {
        return console.log(`Listening on ${port}`);
    });
};
exports.WEBHOOK = WEBHOOK;
//# sourceMappingURL=webhook.js.map