const http = require('http');
const urls = process.argv.slice(2);

const httpRequests = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            let result = '';
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                result += chunk;
            });
            response.on('end', () => {
                resolve(result);
            });
        }).on('error', reject);
    });
    }

    Promise.allSettled(urls.map(httpRequests)).then((results) => {
        results.forEach((result) => {
            console.log(result.value);
        });
    });