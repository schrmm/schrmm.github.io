# Security Policy

## Supported Versions

As this is a personal portfolio website, security updates are applied to the latest version only.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| Older   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in this portfolio website, please report it responsibly.

### How to Report

**Please do NOT create a public GitHub issue for security vulnerabilities.**

Instead, please report security issues via one of these methods:

1. **Email**: Send details to `contact@chrisschramm.dev`
2. **GitHub Security Advisory**: Use the "Report a vulnerability" feature in the Security tab

### What to Include

When reporting a vulnerability, please include:

- **Description**: Clear description of the vulnerability
- **Impact**: Potential impact if exploited
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Proof of Concept**: Example code or screenshots (if applicable)
- **Suggested Fix**: Your recommendation for fixing the issue (if you have one)
- **Disclosure Timeline**: When you plan to publicly disclose (if applicable)

### What to Expect

After you submit a vulnerability report, you can expect:

1. **Acknowledgment**: Within 48 hours of submission
2. **Initial Assessment**: Within 5 business days
3. **Status Updates**: Regular updates on the progress
4. **Resolution Timeline**: Fix deployed within 30 days for critical issues, 90 days for non-critical

### Security Considerations

This is a static website built with Hugo and hosted on GitHub Pages. Common security considerations include:

- **Content Security**: Ensuring content doesn't contain malicious code
- **Dependency Security**: Keeping Node.js and Hugo dependencies updated
- **XSS Prevention**: Properly escaping user-generated content
- **HTTPS**: Ensuring all resources are served over HTTPS
- **Third-party Services**: Reviewing security of integrated services (fonts, form endpoints)

### Scope

**In Scope:**
- Cross-Site Scripting (XSS)
- Injection vulnerabilities
- Authentication/authorization issues (if applicable)
- Dependency vulnerabilities
- Misconfiguration issues

**Out of Scope:**
- Issues in third-party services (Google Fonts, Formspree)
- Social engineering attacks
- Denial of Service (DoS) attacks
- Issues already known and documented

## Security Best Practices

If you're contributing to this project, please follow these security practices:

### For Contributors

- **Dependencies**: Keep all dependencies up to date
- **Input Validation**: Validate and sanitize all user inputs
- **Output Encoding**: Properly encode output to prevent XSS
- **Secrets**: Never commit API keys, tokens, or credentials
- **HTTPS**: Always use HTTPS for external resources
- **CSP**: Maintain appropriate Content Security Policy headers

### For Deployment

- **Build Process**: Review build scripts for security issues
- **Environment Variables**: Use environment variables for sensitive data
- **Access Control**: Limit repository access appropriately
- **GitHub Actions**: Review workflow permissions carefully

## Security Updates

We regularly:

- Monitor dependency vulnerabilities using GitHub Dependabot
- Update dependencies when security patches are released
- Review and apply security best practices
- Test for common web vulnerabilities

## Disclosure Policy

- Security issues will be fixed as quickly as possible
- Credit will be given to security researchers who report responsibly
- A public disclosure will be made after the issue is fixed
- Details will be shared in release notes and security advisories

## Contact

For any security-related questions or concerns:
- Email: contact@chrisschramm.dev
- GitHub: @schrmm

## Acknowledgments

We appreciate the security research community's efforts in keeping the web secure. Thank you to everyone who responsibly reports security issues.

---

Last Updated: 2024
