exports.handler = async (event) => {
    const path = event.rawPath || event.path;
    const method = event.requestContext?.http?.method; // Updated to correctly fetch method from request context

    if (path === '/hello') {
        // Handle /hello route
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                statusCode: 200,
                message: 'Hello from Lambda'
            }),
        };
        return response;
    } else {
        // Handle other routes or unsupported methods
        const response = {
            statusCode: 400,
            body: JSON.stringify({
                statusCode: 400,
                message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
            }),
        };
        return response;
    }
};
