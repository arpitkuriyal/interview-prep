# Networking Basic


##  1. What is Computer Networking?

**Answer:**
Computer networking is the process of connecting multiple devices so they can communicate and share data.

 In simple terms:

> It allows systems like browsers, servers, and databases to talk to each other.

---

##  2. OSI Model (7 Layers)

**Answer:**
The OSI model is a conceptual framework that divides networking into 7 layers to understand how data flows.

### Layers (Top → Bottom):

1. Application – User interaction (HTTP, FTP)
2. Presentation – Data formatting (encryption, compression)
3. Session – Connection management
4. Transport – Data delivery (TCP/UDP)
5. Network – Routing (IP)
6. Data Link – MAC address, switching
7. Physical – Hardware (cables)

 Easy Explanation:

> Data goes from application → transport → network → physical, then travels and comes back up on the receiver side.

---

##  3. TCP vs UDP

### TCP (Transmission Control Protocol)

* Connection-based
* Reliable (guarantees delivery)
* Slower

### UDP (User Datagram Protocol)

* Connectionless
* No guarantee of delivery
* Faster

**Answer:**

> TCP is used when reliability is important (like web pages), while UDP is used when speed is more important (like video streaming or gaming).

---

##  4. What is an IP Address?

**Answer:**
An IP address is a unique identifier assigned to each device on a network.

Example:

```
192.168.1.1
```

Types:

* IPv4
* IPv6

---

##  5. What is DNS?

**Answer:**
DNS (Domain Name System) converts domain names into IP addresses.

 Example:

```
google.com → 142.250.x.x
```

---

##  6. What happens when you type a URL in a browser?

**Answer:**

1. Browser checks cache
2. OS checks cache
3. DNS resolves domain to IP
4. TCP connection is established
5. HTTP request is sent
6. Server processes request
7. Response is returned
8. Browser renders page

---

##  7. What is HTTP and HTTPS?

### HTTP:

* Protocol for communication
* Not secure

### HTTPS:

* Secure version of HTTP
* Uses SSL/TLS encryption

**Answer:**

> HTTPS encrypts the data between client and server, making it secure.

---

##  8. HTTP Methods

* GET → Fetch data
* POST → Send data
* PUT → Update data
* DELETE → Remove data

---

##  9. What is a Port?

**Answer:**
A port is used to identify a specific service on a system.

Examples:

* 80 → HTTP
* 443 → HTTPS
* 22 → SSH

---

##  10. What is a Socket?

**Answer:**
A socket is a combination of IP address and port.

Example:

```
192.168.1.1:80
```

---

##  11. Client vs Server

**Answer:**

* Client sends requests
* Server responds

Example:

* Browser = Client
* Backend API = Server

---

##  12. TCP 3-Way Handshake

**Answer:**
It is used to establish a connection between client and server.

Steps:

1. SYN → Client sends request
2. SYN-ACK → Server acknowledges
3. ACK → Client confirms

 Final:

> Connection is established after 3 steps.

---

##  13. What is Latency?

**Answer:**
Latency is the time it takes for data to travel from source to destination.

 Lower latency = faster response

---

##  14. What is Bandwidth?

**Answer:**
Bandwidth is the amount of data that can be transmitted in a given time.

---

##  15. Cookies vs Sessions

### Cookies:

* Stored in browser
* Client-side

### Sessions:

* Stored on server
* More secure

**Answer:**

> Cookies store small data in the browser, while sessions store user data on the server.

---

##  16. What is REST API?

**Answer:**
REST is an architectural style for designing APIs using HTTP methods.

 Key Points:

* Stateless
* Uses HTTP methods
* Resource-based URLs

---

##  17. What is Load Balancing?

**Answer:**
Load balancing distributes incoming traffic across multiple servers.

Why?

* Improves performance
* Prevents server overload

---

## 18. What is Caching?

**Answer:**
Caching stores frequently accessed data for faster retrieval.

Example:

* Browser cache
* CDN

---

## 19. What is CDN?

**Answer:**
A CDN (Content Delivery Network) stores content on multiple servers worldwide.

Benefit:

> Reduces latency by serving data from nearest server.

---

## 20. What is HTTPS Encryption?

**Answer:**
HTTPS uses SSL/TLS to encrypt data between client and server.

Ensures:

* Data privacy
* Data integrity

---

