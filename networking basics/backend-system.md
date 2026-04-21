# Backend & System Thinking

---

# BACKEND BASICS

---

## 1. What is Backend Development?

**Answer:**
Backend development focuses on server-side logic, databases, and APIs.

Simple:

> Backend handles data processing, storage, and business logic.

---

## 2. What is an API?

**Answer:**
API (Application Programming Interface) allows communication between systems.

Example:

> Frontend calls API → backend returns data.

---

## 3. What is REST API?

**Answer:**
REST is an architectural style for designing APIs using HTTP methods.

Key Points:

* Stateless
* Uses HTTP methods
* Resource-based URLs

---

## 4. HTTP Methods

* GET → Fetch data
* POST → Create data
* PUT → Update data
* DELETE → Remove data

---

## 5. What is Statelessness?

**Answer:**
Server does not store client state between requests.

Benefit:

> Easy scalability

---

## 6. What is Database?

**Answer:**
A database stores and manages data.

Types:

* SQL (structured)
* NoSQL (flexible)

---

## 7. SQL vs NoSQL

### SQL:

* Structured schema
* Relational

### NoSQL:

* Flexible schema
* Scalable

**Answer:**

> SQL is used for structured data, NoSQL for scalability and flexibility.

---

## 8. What is Indexing?

**Answer:**
Indexing improves database query performance.

Example:

> Faster search on large datasets.

---

## 9. What is Caching?

**Answer:**
Storing frequently accessed data for faster retrieval.

Example:

* Redis
* In-memory cache

---

## 10. What is Middleware?

**Answer:**
Middleware is code that runs between request and response.

Example:

* Authentication
* Logging

---

## 11. What is Authentication vs Authorization?

**Answer:**

* Authentication → Who you are
* Authorization → What you can do

---

## 12. What is JWT?

**Answer:**
JWT (JSON Web Token) is used for secure authentication.

Structure:

* Header
* Payload
* Signature

---

## 13. What is Session-Based Auth?

**Answer:**
Server stores user session and identifies user via session ID.

---

## 14. What is Rate Limiting?

**Answer:**
Limits number of requests to prevent abuse.

---

## 15. What is Pagination?

**Answer:**
Breaking large data into smaller chunks.

Example:

> Page 1, Page 2

---

## 16. What is N+1 Query Problem?

**Answer:**
Multiple queries executed unnecessarily instead of one optimized query.

Impact:

> Performance issue

---

## 17. What is Connection Pooling?

**Answer:**
Reusing database connections instead of creating new ones.

---

# SYSTEM THINKING (VERY IMPORTANT)

---

## 18. What is System Design?

**Answer:**
Designing scalable, reliable, and efficient systems.

Focus:

* Performance
* Scalability
* Reliability

---

## 19. What is Scalability?

**Answer:**
Ability to handle increased load.

Types:

* Vertical
* Horizontal

---

## 20. What is Load Balancer?

**Answer:**
Distributes traffic across multiple servers.

---

## 21. What is Monolith vs Microservices?

### Monolith:

* Single codebase

### Microservices:

* Multiple independent services

**Answer:**

> Monolith is simple, microservices are scalable and flexible.

---

## 22. What is Database Sharding?

**Answer:**
Splitting database into smaller parts.

Benefit:

> Handles large-scale data

---

## 23. What is Replication?

**Answer:**
Copying data across multiple databases.

Benefit:

* High availability
* Fault tolerance

---

## 24. What is CAP Theorem?

**Answer:**
A system can provide only two:

* Consistency
* Availability
* Partition Tolerance

---

## 25. What is Event-Driven Architecture?

**Answer:**
System reacts to events.

Example:

> Order placed → trigger payment service

---

## 26. What is Message Queue?

**Answer:**
Queue used for asynchronous communication.

Examples:

* Kafka
* RabbitMQ

---

## 27. What is Idempotency?

**Answer:**
Multiple identical requests give same result.

Example:

> Payment API should not charge twice

---

## 28. What is Distributed System?

**Answer:**
Multiple machines working together as one system.

---

## 29. What is Consistency Models?

**Answer:**
Rules defining how data is consistent across systems.

Types:

* Strong consistency
* Eventual consistency

---

## 30. What is Circuit Breaker Pattern?

**Answer:**
Stops requests to failing services.

Prevents:

> System overload

---

## 31. What is Backpressure?

**Answer:**
Handling overload when system receives too many requests.

---

## 32. What is API Gateway?

**Answer:**
Single entry point for all client requests.

---

## 33. What is Observability?

**Answer:**
Monitoring system health using:

* Logs
* Metrics
* Traces

---

## 34. What is Blue-Green Deployment?

**Answer:**
Deploy new version alongside old one and switch traffic.

---
