# Cyber Security

---

## 1. What is Cyber Security?

**Answer:**
Cyber security is the practice of protecting systems, networks, and data from unauthorized access or attacks.

 Simple:

> It ensures that data is safe from hackers and misuse.

---

## 2. CIA Triad (VERY IMPORTANT)

**Answer:**
The CIA Triad is the foundation of security.

* **Confidentiality** → Only authorized users can access data
* **Integrity** → Data should not be altered
* **Availability** → Systems should be accessible when needed

 Example:

> Banking systems must protect user data (confidentiality), prevent tampering (integrity), and stay online (availability).

---

## 3. What is Authentication vs Authorization?

### Authentication:

* Verifies identity
* Example: Login with username/password

### Authorization:

* Grants permissions
* Example: Admin vs normal user access

**Answer:**

> Authentication checks who you are, while authorization checks what you can do.

---

## 4. What is Encryption?

**Answer:**
Encryption converts data into unreadable form to protect it.

 Example:

> HTTPS encrypts communication between browser and server.

---

## 5. Symmetric vs Asymmetric Encryption

### Symmetric:

* Same key for encryption & decryption
* Faster

### Asymmetric:

* Public key + Private key
* More secure

**Answer:**

> Symmetric uses one key, while asymmetric uses two keys (public & private).

---

## 6. What is Hashing?

**Answer:**
Hashing converts data into a fixed-size value.

 Key properties:

* One-way
* Cannot be reversed

Example:

```id="hash1"
password → hashed value
```

---

## 7. What is Firewall?

**Answer:**
A firewall is a security system that monitors and controls incoming and outgoing network traffic.

 It acts like:

> A gatekeeper between trusted and untrusted networks.

---

## 8. What is Malware?

**Answer:**
Malware is malicious software designed to harm systems.

Types:

* Virus
* Worm
* Trojan
* Ransomware

---

## 9. What is Phishing?

**Answer:**
Phishing is a social engineering attack where attackers trick users into revealing sensitive information.

 Example:

> Fake email asking for login credentials.

---

## 10. What is VPN?

**Answer:**
A VPN creates a secure encrypted connection over the internet.

 Benefit:

> Hides IP and protects data.

---

## 11. What is SQL Injection?

**Answer:**
SQL Injection is an attack where malicious SQL queries are inserted into input fields.

 Example:

```sql id="sql1"
SELECT * FROM users WHERE username = 'admin' OR '1'='1';
```

 Impact:

* Unauthorized data access
* Data manipulation

---

## 12. What is XSS (Cross-Site Scripting)?

**Answer:**
XSS is an attack where malicious scripts are injected into web pages.

 Example:

```html id="xss1"
<script>alert('Hacked')</script>
```

 Impact:

* Steal cookies
* Session hijacking

---

## 13. What is CSRF?

**Answer:**
CSRF tricks a user into performing unwanted actions on a website where they are authenticated.

 Example:

> Clicking a malicious link triggers a bank transaction.

---

## 14. What is HTTPS & SSL/TLS?

**Answer:**
HTTPS uses SSL/TLS to encrypt data between client and server.

 Ensures:

* Privacy
* Data integrity

---

## 15. What is Brute Force Attack?

**Answer:**
An attacker tries multiple passwords until the correct one is found.

 Prevention:

* Rate limiting
* Account lock

---

## 16. What is Man-in-the-Middle (MITM)?

**Answer:**
An attacker intercepts communication between two parties.

 Example:

> Public WiFi attacks.

---

## 17. What is Session Hijacking?

**Answer:**
Stealing a user's session ID to gain unauthorized access.

---

## 18. What is OAuth?

**Answer:**
OAuth allows third-party apps to access user data without sharing passwords.

 Example:

> "Login with Google"

---

## 19. What is JWT (JSON Web Token)?

**Answer:**
JWT is a token used for secure data exchange.

 Structure:

* Header
* Payload
* Signature

 Used in:

* Authentication systems

---

## 20. What is Zero Trust Security?

**Answer:**
Zero Trust means:

> Never trust, always verify.

 Even internal users must be authenticated.

---

## 21. What is IDS vs IPS?

### IDS:

* Detects attacks

### IPS:

* Detects and prevents attacks

---

## 22. What is Data Breach?

**Answer:**
Unauthorized access to sensitive data.

---

## 23. What is Rate Limiting?

**Answer:**
Restricting number of requests to prevent abuse.

---

## 24. What is Secure Coding?

**Answer:**
Writing code that prevents vulnerabilities.

 Examples:

* Input validation
* Proper authentication
* Avoid hardcoded secrets

---


