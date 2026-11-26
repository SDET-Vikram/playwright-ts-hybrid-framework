import dotenv from 'dotenv';

dotenv.config();

function readHttpUrl(name: string, fallback: string): string {
  const value = process.env[name] ?? fallback;

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(value);
  } catch {
    throw new Error(\`Environment variable \${name} must be a valid URL.\`);
  }

  if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
    throw new Error(\`Environment variable \${name} must use HTTP or HTTPS.\`);
  }

  return parsedUrl.toString().replace(/\/$/, '');
}

export const environment = Object.freeze({
  uiBaseUrl: readHttpUrl('UI_BASE_URL', 'https://www.saucedemo.com'),
  apiBaseUrl: readHttpUrl('API_BASE_URL', 'https://restful-booker.herokuapp.com'),
});
