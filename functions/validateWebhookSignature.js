const crypto = require('crypto');

const SIGNATURE_HEADER = 'x-signature';
const SHARED_SECRET = $env.WEBHOOK_SECRET;

function verifySignature(payload, signature) {
  const hmac = crypto.createHmac('sha256', SHARED_SECRET);
  hmac.update(payload);
  const expected = hmac.digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}

const rawBody = JSON.stringify($json);
const signature = $headers[SIGNATURE_HEADER];

if (!signature || !verifySignature(rawBody, signature)) {
  throw new Error('Invalid webhook signature');
}

return $json;
