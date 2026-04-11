# 🌐 OWASP Top 10 (Latest Web Security Risks)

## 📌 What is OWASP Top 10?

OWASP Top 10 is a list of the most critical security risks found in web applications. It helps developers and security professionals focus on the most important vulnerabilities.

OWASP Top 10 सबसे खतरनाक web security risks की list है, जो applications में आमतौर पर पाए जाते हैं।

---

## 🔟 OWASP Top 10 (2021)

### 1. Broken Access Control

Applications fail to properly restrict what users can access.

A normal user changes the URL and gains access to admin data, which should not be allowed.

रवि URL बदलकर admin page खोल लेता है, इसका मतलब access control सही से लागू नहीं हुआ।

---

### 2. Cryptographic Failures

Sensitive data is not properly protected using encryption.

If passwords or card details are stored in plain text, attackers can easily read them.

अगर data बिना encryption के store किया गया है, तो attacker आसानी से उसे पढ़ सकता है।

---

### 3. Injection

Untrusted input is executed as a command or query.

An attacker enters malicious SQL code in a login form and extracts database data.

login form में code डालकर attacker database से data निकाल सकता है।

---

### 4. Insecure Design

The application is not designed with security in mind.

Even if code is correct, poor design can still lead to vulnerabilities.

अगर system शुरू से secure design के साथ नहीं बना है, तो बाद में issues आ सकते हैं।

---

### 5. Security Misconfiguration

Security settings are not properly configured.

Default passwords, open ports, or unnecessary services increase risk.

default settings change नहीं किए गए, जिससे system vulnerable हो गया।

---

### 6. Vulnerable and Outdated Components

Using old software or libraries with known vulnerabilities.

Attackers exploit publicly known issues in outdated components.

पुराना software use करने से known vulnerabilities का खतरा बढ़ जाता है।

---

### 7. Identification and Authentication Failures

Weak authentication allows attackers to compromise accounts.

Using simple passwords makes it easy to gain unauthorized access.

कमजोर password की वजह से account hack हो सकता है।

---

### 8. Software and Data Integrity Failures

Untrusted or tampered software updates can be executed.

If updates are not verified, attackers can inject malicious code.

अगर update verify नहीं किया गया, तो malicious code install हो सकता है।

---

### 9. Security Logging and Monitoring Failures

Lack of proper logging delays detection of attacks.

If attacks are not logged, organizations cannot respond in time.

अगर logs maintain नहीं किए गए, तो attack का पता देर से चलता है।

---

### 10. Server-Side Request Forgery (SSRF)

The server makes requests to unintended locations.

An attacker tricks the server into accessing internal systems.

attacker server को trick करके internal resources access कर सकता है।

---

## ⚠️ Why It Matters

Most real-world cyberattacks happen because of these common issues.

---

## 🎯 Interview Tip

Focus on understanding 3 to 5 risks deeply instead of memorizing all.

---

## 🚀 Key Takeaways

- OWASP Top 10 represents real-world attack patterns  
- Most vulnerabilities come from basic mistakes  
- Practical understanding is more important than memorization

---
