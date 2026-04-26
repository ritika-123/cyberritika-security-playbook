# 🔐 Salting in Cybersecurity

## 📌 What is Salting?

Salting is adding **random data to a password before hashing**.

Salting का मतलब है password को hash करने से पहले उसमें random value जोड़ना।

---

## 🔐 How Salting Works

Momo and another user both use the same password.

Without salting:
- Both hashes are identical  

With salting:
- Hashes become different  

This makes it harder for attackers to crack passwords.

---

## ⚠️ When Salting is Not Used

If salting is not used:

- Attackers can use rainbow tables  
- Multiple accounts can be cracked easily  

अगर salting नहीं किया जाए, तो attackers आसानी से passwords guess कर सकते हैं।

---

## 🎯 Interview Tip

Salting prevents **precomputed attacks like rainbow tables**.

---

## 🚀 Key Takeaways

- Adds randomness  
- Improves password security  
- Must be used with hashing  

---
