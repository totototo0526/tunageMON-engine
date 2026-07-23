const http = require('http');
const { exec } = require('child_process');

const PORT = 3005;
const SECRET_TOKEN = 'tunagemon_deploy_secret_2026';

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/api/webhook') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                if (data.secret !== SECRET_TOKEN) {
                    res.writeHead(403, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Forbidden' }));
                    return;
                }

                console.log(`[${new Date().toISOString()}] Received valid webhook trigger. Starting build process...`);
                
                // Return 200 OK immediately so GitHub Actions doesn't hang
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Build started' }));
                
                // Execute the pull and build process
                exec('git pull origin main && ./build.sh', { cwd: '/var/www/tunageMON-engine' }, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`[${new Date().toISOString()}] Build error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.error(`[${new Date().toISOString()}] Build stderr: ${stderr}`);
                    }
                    console.log(`[${new Date().toISOString()}] Build stdout: ${stdout}`);
                    console.log(`[${new Date().toISOString()}] Build completed successfully.`);
                });
                
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Webhook listener running on port ${PORT}`);
});
