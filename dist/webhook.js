"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = process.env.PORT || 3000;
/**
 * @description Initialize the server and handle all the requests.
 */
const WEBHOOK = () => {
    app.use(body_parser_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.get("/", (req, res) => {
        res.send("Bruh");
    });
    app.get('/verifyWebhook', (req, res) => {
        const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];
        if (mode && token) {
            if (mode === 'subscribe' && token === VERIFY_TOKEN) {
                console.log('VERIFIED');
                res.status(200).send(challenge);
            }
            else
                res.sendStatus(403);
        }
    });
    // Start the server
    app.listen(port, () => console.log(`Listening on ${port}`));
};
exports.WEBHOOK = WEBHOOK;
//# sourceMappingURL=webhook.js.map