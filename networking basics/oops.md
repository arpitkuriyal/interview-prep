# OOPs

---

# OOP BASICS

---

## 1. What is OOP?

**Answer:**
OOP (Object-Oriented Programming) is a programming paradigm based on objects and classes.

Simple:

> It organizes code using objects that contain data and behavior.

---

## 2. What is a Class?

**Answer:**
A class is a blueprint for creating objects.

Example:

```ts
class User {
  name: string;
}
```

---

## 3. What is an Object?

**Answer:**
An object is an instance of a class.

Example:

```ts
const user = new User();
```

---

## 4. What are the 4 Pillars of OOP? (VERY IMPORTANT)

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

Most asked in interviews

---

## 5. Encapsulation

**Answer:**
Bundling data and methods together and restricting direct access.

Example:

```ts
class BankAccount {
  private balance = 0;

  deposit(amount: number) {
    this.balance += amount;
  }
}
```

Simple:

> Protect data using private variables.

---

## 6. Abstraction

**Answer:**
Hiding internal implementation and showing only necessary details.

Example:

```ts
abstract class Shape {
  abstract area(): number;
}
```

Simple:

> Focus on “what”, not “how”.

---

## 7. Inheritance

**Answer:**
One class inherits properties and methods from another.

Example:

```ts
class Animal {
  eat() {}
}

class Dog extends Animal {
  bark() {}
}
```

Benefit:

> Code reuse

---

## 8. Polymorphism

**Answer:**
Ability to take multiple forms.

Types:

* Method Overloading
* Method Overriding

Example:

```ts
class Animal {
  sound() {}
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}
```

---

## 9. What is Constructor?

**Answer:**
A special method used to initialize objects.

```ts
constructor(name: string) {
  this.name = name;
}
```

---

## 10. What is Access Modifier?

* public
* private
* protected

**Answer:**

> Controls visibility of variables and methods.

---

## 11. What is Interface?

**Answer:**
Defines a contract that a class must follow.

```ts
interface User {
  name: string;
}
```

---

## 12. Abstract Class vs Interface

### Abstract Class:

* Can have implementation

### Interface:

* Only method signatures

**Answer:**

> Abstract class can have logic, interface only defines structure.

---

## 13. What is Composition?

**Answer:**
Using objects inside other objects instead of inheritance.

Example:

```ts
class Engine {}

class Car {
  engine: Engine;
}
```

Better than inheritance in many cases.

---

## 14. What is Association?

**Answer:**
Relationship between two classes.

Example:

> Student and Teacher

---

## 15. What is Aggregation vs Composition?

### Aggregation:

* Weak relationship
* Objects can exist independently

### Composition:

* Strong relationship
* Dependent lifecycle

---

## 16. What is Method Overloading?

**Answer:**
Same function name, different parameters.

---

## 17. What is Method Overriding?

**Answer:**
Child class provides its own implementation.

---

## 18. What is SOLID Principles? (VERY IMPORTANT)

1. Single Responsibility
2. Open/Closed
3. Liskov Substitution
4. Interface Segregation
5. Dependency Inversion

These are design principles for writing clean code.

---

## 19. What is Dependency Injection?

**Answer:**
Providing dependencies from outside instead of creating them inside.

Benefit:

* Loose coupling
* Better testing

---

## 20. What is Coupling vs Cohesion?

### Coupling:

* Dependency between modules (low is better)

### Cohesion:

* Relatedness within module (high is better)

---

## 21. What is Design Pattern?

**Answer:**
Reusable solutions to common problems.

Examples:

* Singleton
* Factory
* Observer

---

## 22. What is Singleton Pattern?

**Answer:**
Ensures only one instance of a class exists.

```ts
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton();
    }
    return this.instance;
  }
}
```

---

## 23. What is Factory Pattern?

**Answer:**
Creates objects without exposing creation logic.

---

## 24. What is Observer Pattern?

**Answer:**
Objects get notified when state changes.

Example:

> Event system

---

## 25. What is Immutability?

**Answer:**
Object state cannot be changed after creation.

---

## 26. What is Object Cloning?

**Answer:**
Creating a copy of an object.

---

## 27. What is Deep Copy vs Shallow Copy?

### Shallow Copy:

* Copies reference

### Deep Copy:

* Copies actual data

---