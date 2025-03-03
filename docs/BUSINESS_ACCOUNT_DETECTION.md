# Business Account Detection

This feature allows you to detect if a user connecting via QR code is a business account or not.

## How it works

When a user scans the QR code and authenticates, the library will check if the authenticated user is a business account and emit a `business_account_detected` event with a boolean value indicating whether the user is a business account or not.

## Usage

```javascript
const { Client, LocalAuth } = require("whatsapp-web.js");

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
    // Display QR code to the user
});

// Listen for business account detection
client.on("business_account_detected", (isBusinessAccount) => {
    console.log("Is Business Account:", isBusinessAccount);
    if (isBusinessAccount) {
        console.log("The user connecting is a business account!");
        // Implement your business-specific logic here
    } else {
        console.log("The user connecting is a regular account.");
        // Implement your regular user logic here
    }
});

// Initialize the client
client.initialize();
```

## Event Details

### business_account_detected

This event is emitted after authentication when the library has determined whether the authenticated user is a business account or not.

**Parameters:**

-   `isBusinessAccount` (boolean): Whether the authenticated user is a business account or not.

## Use Cases

-   Implementing different features or workflows for business accounts vs. regular accounts
-   Collecting analytics on the types of accounts using your application
-   Restricting certain features to only business accounts or only regular accounts
-   Customizing the user experience based on account type

## Example

A complete example is available in the `examples/business-account-detection.js` file.
