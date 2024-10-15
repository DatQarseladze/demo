exports.handler = async (event) => {
    const path = event.rawPath || '/';
    const method = event.requestContext ? event.requestContext.http.method : 'GET';

    if (path === '/hello' && method === 'GET') {
        return {
            statusCode: 200,
            message: "Hello from Lambda"
        };
    }

    return {
        statusCode: 400,
        message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
    };
};
