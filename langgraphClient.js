// langgraphClient.js
const { LangGraphClient } = require('langgraph'); // or your SDK import

// Initialize client
const client = new LangGraphClient({
    apiKey: process.env.LANGGRAPH_API_KEY,
});

// Get a graph instance
const graph = client.getGraph(); // make sure getGraph() exists and is synchronous

module.exports = { client, graph };

