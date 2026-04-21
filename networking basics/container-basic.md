#  Containers & Kubernetes Basic

---

# CONTAINERS BASICS

---

## 1. What is a Container?

**Answer:**
A container is a lightweight package that includes an application and all its dependencies.

Simple:

> “It runs the same everywhere.”

---

## 2. What is Docker?

**Answer:**
Docker is a platform used to build, run, and manage containers.

Example:

> Package a Node.js app with all dependencies and run anywhere.

---

## 3. Container vs Virtual Machine (VERY IMPORTANT)

### Containers:

* Lightweight
* Share OS kernel
* Fast startup

### Virtual Machines:

* Heavy
* Separate OS
* Slower

**Answer:**

> Containers are faster and lightweight, while VMs are more isolated but heavier.

---

## 4. What is a Docker Image?

**Answer:**
A Docker image is a read-only template used to create containers.

Example:

> Blueprint of an app.

---

## 5. What is a Docker Container?

**Answer:**
A running instance of a Docker image.

---

## 6. What is a Dockerfile?

**Answer:**
A script containing instructions to build a Docker image.

---

## 7. What is Docker Hub?

**Answer:**
A repository to store and share Docker images.

---

## 8. What is Containerization?

**Answer:**
The process of packaging an application and its dependencies into a container.

---

## 9. What Problem do Containers Solve?

**Answer:**

> “Works on my machine” problem.

Benefit:

* Consistent environments
* Easy deployment

---

# KUBERNETES BASICS

---

## 10. What is Kubernetes?

**Answer:**
Kubernetes is a container orchestration platform used to manage, scale, and deploy containers.

Simple:

> It manages multiple containers automatically.

---

## 11. Why Kubernetes?

**Answer:**

* Auto-scaling
* Self-healing
* Load balancing
* Easy deployment

---

## 12. What is a Pod?

**Answer:**
A Pod is the smallest unit in Kubernetes that contains one or more containers.

Simple:

> Wrapper around containers.

---

## 13. What is a Node?

**Answer:**
A Node is a machine (VM or physical) that runs pods.

---

## 14. What is a Cluster?

**Answer:**
A group of nodes managed by Kubernetes.

---

## 15. What is Deployment?

**Answer:**
Manages how pods are created and updated.

Example:

> Rolling updates of app versions.

---

## 16. What is a Service?

**Answer:**
Exposes pods to the network.

Types:

* ClusterIP
* NodePort
* LoadBalancer

---

## 17. What is ConfigMap & Secret?

### ConfigMap:

* Stores configuration

### Secret:

* Stores sensitive data

**Answer:**

> ConfigMap is for config, Secret is for secure data.

---

## 18. What is Auto Scaling?

**Answer:**
Automatically increases/decreases pods based on load.

Example:

> More traffic → more pods

---

## 19. What is Self-Healing?

**Answer:**
Kubernetes automatically restarts failed containers.

---

## 20. What is Load Balancing?

**Answer:**
Distributes traffic across pods.

---

## 21. What is Ingress?

**Answer:**
Manages external access to services (HTTP/HTTPS routing).

---

## 22. What is Namespace?

**Answer:**
Logical separation within a cluster.

Used for:

* Multi-team environments

---

## 23. What is Rolling Update?

**Answer:**
Gradually updates application without downtime.

---

## 24. What is Persistent Volume (PV)?

**Answer:**
Storage in Kubernetes that persists beyond pod lifecycle.

---

## 25. What is Stateful vs Stateless App?

### Stateless:

* No memory of previous requests

### Stateful:

* Maintains state (e.g., database)

---

## 26. What is Helm?

**Answer:**
A package manager for Kubernetes.

Used to:

* Deploy apps easily

---

## 27. What is Service Mesh?

**Answer:**
Handles communication between microservices.

Example:

* Istio

---

## 28. What is Horizontal Pod Autoscaler (HPA)?

**Answer:**
Automatically scales pods based on CPU/memory usage.

---

## 29. What is Taints and Tolerations?

**Answer:**
Controls which pods can be scheduled on which nodes.

---

## 30. What is Sidecar Pattern?

**Answer:**
A helper container runs alongside main container.

Example:

* Logging
* Monitoring

---

## 31. What is Init Container?

**Answer:**
Runs before the main container starts.

---

## 32. What is Resource Limits?

**Answer:**
Defines CPU and memory usage limits for containers.

---
