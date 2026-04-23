# 🥗 ShelfLife App — Developer Thinking Guide

## 🧠 How to Approach This Project (Like an Engineer)

You’re not building “an app.”

You’re building **systems**:

* Data system (inventory)
* Input system (scanner + manual)
* Logic system (recipe ranking)
* Storage system (offline-first)
* UI system (display + feedback)

---

## 🧩 Step 1: Break the Project into Systems

### 🔹 Inventory System (Core Brain)

Ask yourself:

* What is a food item in code?

👉 Think in terms of a **model/class**

```
FoodItem
- name
- brand
- quantity
- unit (g, kg, count)
- expiryDate
- category (fridge/pantry/freezer)
```

### 🔥 Your Task

* Write this as a class (or data structure)
* Ask: **What must every item ALWAYS have?**

---

## 🧩 Step 2: Think Like a Database (Offline-First)

Key rule:

> “All data must live locally first”

Ask:

* Where do I store items?
* How do I retrieve them?
* How do I update them?

👉 That leads to:

```
CREATE → READ → UPDATE → DELETE
(CRUD)
```

### 🔥 Your Task

Design functions like:

* addItem()
* getAllItems()
* updateItem()
* deleteItem()

❗ Don’t code yet — just plan them clearly

---

## 🧩 Step 3: Freshness Logic (Thinking First)

The “Freshness Meter” is **logic first**, not UI.

Ask:

* How do I calculate freshness?

👉 Hint:

```
freshness = (today → expiryDate)
```

Now think deeper:

* What happens if expiry = today?
* What happens if expiry < today?

### 🔥 Your Task

Write logic in plain English:

> “If X, then Y”

---

## 🧩 Step 4: Barcode Scanner (Input System)

Don’t think “camera” first.

Think:

```
Input → Data → Save
```

Flow:

1. Scan barcode → get code
2. Send code → API
3. API returns product info
4. User fills missing info
5. Save to DB

### 🔥 Your Task

Understand this flow:

```
SCAN → FETCH → COMPLETE → SAVE
```

If you can explain it clearly, you understand it.

---

## 🧩 Step 5: Recipe Engine (Core Logic)

You are NOT just fetching recipes.

You are **ranking them**.

---

### 🧠 Think Like This:

Each recipe gets a **score**

#### Factors:

* Uses expiring items → HIGH score
* Uses many owned ingredients → HIGH score
* Missing ingredients → LOWER score

---

### 🔥 Your Task

Define your own scoring system:

```
score =
+50 if uses expiring item
+10 per ingredient matched
-5 per missing ingredient
```

👉 You must justify your scoring choices.

---

## 🧩 Step 6: Unit Conversion (Logic Challenge)

Ask:

* How do I compare 1kg vs 200g?

👉 You need a **standard unit**

### 🔥 Your Task

Define:

```
1 kg = 1000 g
```

Then ask:

* Should everything be converted before comparing?

---

## 🧩 Step 7: Notifications (Automation Thinking)

This is **time-based logic**

Ask:

* When should the app check expiry?
* What condition triggers a notification?

### 🔥 Your Task

Define logic like:

```
IF expiryDate - today <= 2 days
THEN send notification
```

---

## 🧩 Step 8: Sync System (Advanced Thinking)

Key idea:

* Local DB = source of truth
* Cloud = backup/sync

Ask:

* What happens when 2 users edit the same item?

👉 This introduces:

* Conflict resolution

(You don’t need to solve it yet — just understand the problem.)

---

## 🚀 Final Mindset

For every feature:

1. Describe it in English
2. Break it into steps
3. Write the logic
4. Then code

---

💡 If you can design the logic clearly, building the app becomes much easier.
