# 🔐 Security Principles in Cybersecurity (Least Privilege & Need-to-Know)

## 📌 What are Security Principles?

Security principles are fundamental guidelines used to design secure systems and protect sensitive data.

Two of the most important principles are:
- **Least Privilege**
- **Need-to-Know**

Security principles ensure that access is controlled, risks are minimized, and systems remain secure.

Security principles का मतलब है system को इस तरह design करना कि unauthorized access और misuse कम से कम हो।

---

## 🧠 Understanding Through a Scenario

Rahul works in a company as a junior analyst.

- He can access only the data required for his job  
- He cannot access financial records or admin settings  

Meanwhile:
- A manager has more access  
- An admin has full control  

In this case:
- Rahul follows **Least Privilege**  
- Access is also controlled based on **Need-to-Know**  

राहुल को सिर्फ उतना ही access मिलता है जितना उसके काम के लिए जरूरी है, इससे security बनी रहती है।

---

## 🔑 Key Concepts

### 🔹 Least Privilege (PoLP)

Users are given the **minimum level of access** required to perform their tasks.

👉 Example:
- Employee → Read-only access  
- Admin → Full access  

Least Privilege का मतलब है user को सिर्फ minimum permissions देना।

---

### 🔹 Need-to-Know

Users can access only the **specific information necessary** for their role.

👉 Example:
- HR can access employee records  
- IT team cannot access salary details  

Need-to-Know में user को सिर्फ relevant data दिखाया जाता है।

---

## ⚖️ Difference Between Least Privilege & Need-to-Know

| Aspect | Least Privilege | Need-to-Know |
|--------|----------------|--------------|
| Focus  | Permissions    | Information  |
| Goal   | Minimize access rights | Restrict data visibility |
| Example| Limited system access | Limited data access |

👉 Both work together to enhance security.

---

## 🔄 Where These Principles Are Used

- Operating Systems  
- Databases  
- Cloud Platforms  
- Enterprise Applications  

👉 Especially critical in:
- IAM systems  
- Role-based environments  

---

## 📊 Implementation Approach

To apply these principles:

1. Define roles clearly  
2. Assign minimum permissions  
3. Restrict sensitive data access  
4. Regularly review permissions  
5. Remove unused access  

---

## ⚠️ Common Issues

- Excessive permissions (Over-privileged users)  
- Privilege creep (access increases over time)  
- Lack of access review  
- Insider threats  

अगर user को ज्यादा access मिल जाए, तो data breach का risk बढ़ जाता है।

---

## 🛡️ Real-World Attacks Related

- Privilege Escalation  
- Insider Data Theft  
- Unauthorized Access  

👉 Many breaches happen due to **lack of least privilege**

---

## 🎯 Interview Tips

- Clearly explain Least Privilege vs Need-to-Know  
- Give real-world examples  
- Mention risks like privilege escalation  
- Explain how to implement in organizations  

---

## 🚀 Key Takeaways

- Least Privilege = Minimum access  
- Need-to-Know = Limited data visibility  
- Both reduce attack surface  
- Critical for strong security posture  

---
