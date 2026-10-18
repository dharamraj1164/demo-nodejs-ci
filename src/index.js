
const http = require('node:http');

function getMessage() {
    return 'Welcome to DevOps Training';
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(getMessage());
});

if (require.main === module) {
    const PORT = process.env.PORT || 3000;

    server.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = { getMessage };
