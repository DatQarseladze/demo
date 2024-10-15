exports.handler = async (event) => {
    const httpMethod = event.requestContext?.http?.method;
    const path = event.requestContext?.http?.path;

    console.log("Event: ", JSON.stringify(event, null, 2)); // Log the event for debugging

    if (path === "/hello" && httpMethod === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Hello from Lambda"
            })
        };
    }

    return {
        statusCode: 400,
        body: JSON.stringify({
            message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${httpMethod}`
        })
    };
};
