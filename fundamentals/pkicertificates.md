# 🔐 PKI, Certificates & Secure Communication

## 📌 What is PKI?

Public Key Infrastructure (PKI) is a system that manages:

- Keys  
- Certificates  
- Secure communication  

PKI का काम secure communication को manage करना है।

---

## 🔐 How It Works

Momo visits a secure website.

- Website provides a certificate  
- System verifies it using a trusted authority  
- Secure connection is established  

---

## 🔑 Certificates & Certificate Authorities

- Certificate = Digital identity proof  
- Certificate Authority (CA) = Trusted issuer  

Momo trusts the website because it is verified by a CA.

---

## 🔄 TLS/SSL Handshake (Conceptual)

When Momo connects to a server:

1. Server sends certificate  
2. Client verifies it  
3. Secure key is generated  
4. Encrypted communication starts  

---

## 🔐 Encryption at Rest vs In Transit

- At Rest → Data stored (disk, database)  
- In Transit → Data moving (network)  

Momo’s data is protected in both cases.

---

## ⚠️ When It Fails

- Fake certificates  
- Compromised CA  
- Weak encryption  

---

## 🎯 Interview Tip

Explain:

- PKI manages trust  
- Certificates verify identity  
- TLS secures communication  

---

## 🚀 Key Takeaways

- PKI enables secure communication  
- Certificates build trust  
- Encryption protects data everywhere  

---
