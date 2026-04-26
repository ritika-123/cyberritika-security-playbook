# 🔐 TLS/SSL Handshake in Cybersecurity

## 📌 What is TLS/SSL?

TLS (Transport Layer Security) and SSL (Secure Sockets Layer) are protocols used to **secure communication over a network**.

They ensure:
- Data is encrypted  
- Identity is verified  
- Communication is secure  

TLS/SSL का मतलब है network पर data को secure तरीके से भेजना ताकि कोई attacker उसे पढ़ न सके।

---

## 📌 Where is TLS/SSL Used?

- Websites (HTTPS)  
- Email communication  
- VPN connections  
- APIs  
- Secure file transfer  

👉 It is not limited to web—it is used in many secure communication systems.

---

## 🔐 TLS/SSL Handshake Flow

![TLS Handshake](../assets/images/tls-handshake.png)

---

## 🔐 How TLS/SSL Handshake Works

Momo opens a secure website (HTTPS).

### Step 1: Client Hello  
Momo’s browser sends:
- Supported TLS versions  
- Supported cipher suites  
- Random number  

---

### Step 2: Server Hello  
Server responds with:
- Selected TLS version  
- Selected cipher suite  
- Server certificate  

---

### Step 3: Certificate Verification  
Momo’s system checks:
- Is certificate valid?  
- Is it signed by trusted CA?  

👉 If not trusted → connection is blocked

---

### Step 4: Key Exchange  

- Client and server exchange information  
- A **shared session key** is generated  

👉 This key will be used for symmetric encryption

---

### Step 5: Secure Communication Starts  

Now:
- Data is encrypted using session key  
- Communication becomes secure  

Momo अब safely data send और receive कर सकता है।

---

## 🔑 Key Concepts Behind TLS

### 1. Asymmetric Encryption
Used during handshake for:
- Key exchange  
- Authentication  

---

### 2. Symmetric Encryption
Used after handshake for:
- Fast data transfer  

---

### 3. Certificates
Used to:
- Verify server identity  
- Build trust  

---

### 4. Session Key
- Temporary key  
- Used for current session only  

---

## ⚠️ When TLS/SSL Fails

If TLS is not properly implemented:

### ❌ Man-in-the-Middle (MITM) Attack
Attacker intercepts communication  

### ❌ Fake Certificate
User connects to malicious server  

### ❌ Weak Cipher Suites
Encryption can be broken  

### ❌ Old Protocols (SSL, TLS 1.0)
Vulnerable to attacks  

अगर TLS सही से implement न हो, तो attacker data पढ़ सकता है।

---

## 🛡️ Real-World Example

Momo logs into banking website:

- HTTPS ensures encryption  
- Certificate ensures it’s real bank  
- Session key secures communication  

👉 Without TLS, credentials can be stolen easily

---

## 📊 Business Perspective

- Protects customer data  
- Prevents financial fraud  
- Builds user trust  
- Required for compliance  

---

## 🎯 Interview Tips

- Explain handshake steps clearly (Client Hello → Server Hello → Key Exchange → Secure Communication)  
- Mention both encryption types (asymmetric + symmetric)  
- Talk about certificates and CA  
- Highlight MITM attack prevention  

👉 Bonus:
Mention “TLS replaced SSL due to better security”

---

## 🚀 Key Takeaways

- TLS secures communication over networks  
- Uses both symmetric and asymmetric encryption  
- Handshake establishes trust and keys  
- Essential for modern secure systems  

---
