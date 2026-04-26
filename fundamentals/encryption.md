# 🔐 Encryption at Rest vs In Transit

## 📌 What is Encryption at Rest?

Encryption at Rest protects data **when it is stored** (disk, database, storage).

---

## 📌 What is Encryption in Transit?

Encryption in Transit protects data **while it is being transferred** over a network.

---

## 🔐 How It Works

Momo stores sensitive data in a database.

- Data is encrypted → At Rest  

When Momo sends data over network:

- Data is encrypted again → In Transit  

इस तरह data हर stage पर secure रहता है।

---

## ⚠️ When It Fails

If encryption is missing:

- Stored data can be stolen  
- Data in transit can be intercepted  

अगर encryption नहीं है, तो attacker आसानी से data access कर सकता है।

---

## 🎯 Interview Tip

Always mention:

- At Rest → Storage security  
- In Transit → Network security  

---

## 🚀 Key Takeaways

- Data must be protected everywhere  
- Both types are equally important  
- Prevents data breaches  

---
