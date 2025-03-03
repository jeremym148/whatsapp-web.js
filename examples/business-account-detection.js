const { Client, LocalAuth } = require("../index");

// Create a new client
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: false, // Set to true in production
    },
});

// Listen for QR code
client.on("qr", (qr) => {
    console.log("QR RECEIVED", qr);
    // You can use qrcode-terminal to display the QR code in the terminal
    // Or implement your own QR code display method
});

// Listen for business account detection
client.on("business_account_detected", (isBusinessAccount) => {
    console.log("Is Business Account:", isBusinessAccount);
    if (isBusinessAccount) {
        console.log("The user connecting is a business account!");
        // You can implement your business-specific logic here
    } else {
        console.log("The user connecting is a regular account.");
        // You can implement your regular user logic here
    }
});

// Listen for authentication
client.on("authenticated", () => {
    console.log("AUTHENTICATED");
});

// Listen for auth failures
client.on("auth_failure", (msg) => {
    console.error("AUTHENTICATION FAILURE", msg);
});

// Listen for ready event
client.on("ready", () => {
    console.log("Client is ready!");
});

// Initialize the client
client.initialize();
