let Twit = require('twit');

let T = new Twit({
    consumer_key: '...',
    consumer_secret: '...',
    access_token: '...',
    access_token_secret: '...',
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true, // optional - requires SSL certificates to be valid.
});

T.post('statuses/update', { status: 'hello world!' }, function(
    err,
    data,
    response
) {
    console.log(data);
});
