# 🔒 Security Features

Your portfolio backend is now secured with industry-standard security practices!

## Implemented Security Features

### 1. **Helmet.js** - HTTP Headers Security
- Sets secure HTTP headers
- Protects against common vulnerabilities
- Prevents clickjacking, XSS, and other attacks

### 2. **Rate Limiting**
- **General API**: 100 requests per 15 minutes per IP
- **Contact Form**: 5 submissions per hour per IP
- Prevents brute force attacks and spam

### 3. **Input Validation**
- All inputs are validated before processing
- Email validation using validator.js
- Length checks on all fields
- Prevents invalid data from entering database

### 4. **Input Sanitization**
- XSS protection with xss-clean
- HTML escaping to prevent script injection
- NoSQL injection prevention with express-mongo-sanitize
- HTTP Parameter Pollution (HPP) prevention

### 5. **CORS Configuration**
- Restricted to specific origins
- Production: Only your GitHub Pages domain
- Development: localhost:3000 and localhost:3001

### 6. **Request Size Limiting**
- Body size limited to 10KB
- Prevents large payload attacks

### 7. **Admin Route Protection**
- API key authentication for admin endpoints
- Secure access to view contact submissions

### 8. **MongoDB Security**
- Query injection prevention
- Sanitized database queries
- Secure connection string

## Environment Variables

Make sure to set these in your `.env` file:

```env
PORT=5000
NODE_ENV=production
MONGODB_URI=your-mongodb-connection-string
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
ADMIN_API_KEY=generate-a-strong-random-key
```

### Generate Secure API Key

Use one of these methods:

**Node.js:**
```javascript
require('crypto').randomBytes(32).toString('hex')
```

**Online:**
- https://randomkeygen.com/
- Use "CodeIgniter Encryption Keys" or similar

**Command Line:**
```bash
# Linux/Mac
openssl rand -hex 32

# Windows PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

## Testing Security

### Test Rate Limiting
```bash
# Send multiple requests quickly
for i in {1..10}; do
  curl -X POST http://localhost:5000/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Testing rate limit"}'
done
```

### Test Admin Authentication
```bash
# Without API key (should fail)
curl http://localhost:5000/api/contact

# With API key (should succeed)
curl http://localhost:5000/api/contact \
  -H "x-api-key: your-api-key-here"
```

### Test Input Validation
```bash
# Invalid email (should fail)
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"invalid-email","subject":"Test","message":"Test message"}'

# Short message (should fail)
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Hi"}'
```

## Production Deployment Checklist

- [ ] Set `NODE_ENV=production` in .env
- [ ] Use strong, unique ADMIN_API_KEY
- [ ] Use MongoDB Atlas with IP whitelist
- [ ] Enable MongoDB authentication
- [ ] Use HTTPS (SSL/TLS)
- [ ] Update CORS origins to production domain
- [ ] Keep dependencies updated
- [ ] Enable MongoDB backup
- [ ] Monitor logs for suspicious activity
- [ ] Use environment variables (never commit .env)

## Additional Security Recommendations

### 1. HTTPS/SSL
Always use HTTPS in production. Most hosting platforms provide free SSL:
- Heroku: Automatic SSL
- Render: Free SSL
- Railway: Automatic SSL

### 2. MongoDB Atlas Security
- Enable IP whitelist
- Use strong database password
- Enable database encryption
- Regular backups

### 3. Email Security
- Use Gmail App Password (not regular password)
- Enable 2-Factor Authentication
- Monitor for suspicious activity

### 4. Regular Updates
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Update dependencies
npm update
```

### 5. Logging & Monitoring
Consider adding:
- Winston for logging
- Morgan for HTTP request logging
- Sentry for error tracking

## Security Headers Explained

Helmet.js sets these headers:

- **X-DNS-Prefetch-Control**: Controls DNS prefetching
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing
- **X-XSS-Protection**: Enables XSS filter
- **Strict-Transport-Security**: Enforces HTTPS
- **Content-Security-Policy**: Prevents XSS attacks

## Common Vulnerabilities Prevented

✅ **SQL/NoSQL Injection** - Sanitized queries
✅ **Cross-Site Scripting (XSS)** - Input sanitization
✅ **Cross-Site Request Forgery (CSRF)** - CORS configuration
✅ **Brute Force Attacks** - Rate limiting
✅ **DDoS Attacks** - Rate limiting
✅ **HTTP Parameter Pollution** - HPP middleware
✅ **Clickjacking** - X-Frame-Options header
✅ **MIME Sniffing** - X-Content-Type-Options header

## Need Help?

If you discover a security vulnerability, please email:
vivekranaworks@gmail.com

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
