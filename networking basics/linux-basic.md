# Linux Basic
---

# LINUX BASICS

---

## 1. What is Linux?

**Answer:**
Linux is an open-source operating system based on Unix.

Simple:

> It manages hardware and software resources and is widely used in servers.

---

## 2. Why is Linux Important for Backend?

**Answer:**

* Most servers run Linux
* Better performance
* High security

---

## 3. What is Kernel?

**Answer:**
Kernel is the core part of the OS that interacts with hardware.

Role:

* Memory management
* Process management
* Device control

---

## 4. What is Shell?

**Answer:**
Shell is a command-line interface to interact with the OS.

Example:

* Bash

---

## 5. Basic Linux Commands

### File & Directory:

```bash id="cmd1"
ls       # list files
cd       # change directory
pwd      # current path
mkdir    # create folder
rm       # delete
cp       # copy
mv       # move/rename
```

### File Viewing:

```bash id="cmd2"
cat
less
head
tail
```

---

## 6. File Permissions (VERY IMPORTANT)

**Answer:**
Linux uses permissions to control access.

Format:

```id="perm1"
rwx rwx rwx
```

* Owner | Group | Others

Example:

```bash id="perm2"
chmod 755 file.txt
```

---

## 7. What is a Process?

**Answer:**
A process is a running program.

---

## 8. What is a PID?

**Answer:**
Process ID is a unique identifier for each process.

---

## 9. What is a Daemon?

**Answer:**
A daemon is a background process.

Example:

* Web server

---

## 10. What is Environment Variable?

**Answer:**
Variables used by the system and applications.

Example:

```bash id="env1"
PATH
```

---

## 11. Process Management Commands

```bash id="proc1"
ps       # list processes
top      # live processes
kill     # terminate process
```

---

## 12. What is SSH?

**Answer:**
SSH is used to securely connect to remote systems.

```bash id="ssh1"
ssh user@server-ip
```

---

## 13. What is Package Management?

**Answer:**
Installing and managing software.

Examples:

* apt (Ubuntu)
* yum (CentOS)

---

## 14. What is Disk Management?

```bash id="disk1"
df -h    # disk usage
du -sh   # folder size
```

---

## 15. What is Networking in Linux?

```bash id="net1"
ifconfig / ip addr
ping
netstat
```

---

## 16. What is Log Management?

**Answer:**
Logs store system and application events.

Location:

```id="log1"
/var/log/
```

---

## 17. What is Cron Job?

**Answer:**
Used to schedule tasks.

```bash id="cron1"
crontab -e
```

---

## 18. What is Process vs Thread?

### Process:

* Independent
* Own memory

### Thread:

* Lightweight
* Shared memory

---

## 19. What is Memory Management?

**Answer:**
Linux manages RAM and swap space efficiently.

---

## 20. What is Swap Space?

**Answer:**
Extra memory on disk used when RAM is full.

---

## 21. What is System Call?

**Answer:**
Interface between user programs and kernel.

---

## 22. What is File System?

**Answer:**
Structure for storing files.

Types:

* ext4
* xfs

---

## 23. What is Inode?

**Answer:**
Stores metadata of a file (not the content).

---

## 24. What is Soft Link vs Hard Link?

### Soft Link:

* Points to file path

### Hard Link:

* Points to actual data

---

## 25. What is Load Average?

**Answer:**
Average system load over time.

---

## 26. What is Zombie Process?

**Answer:**
A process that has completed but still exists in process table.

---

## 27. What is Deadlock?

**Answer:**
Two or more processes waiting on each other forever.

---

## 28. What is I/O Redirection?

```bash id="io1"
>   # overwrite
>>  # append
<   # input
```

---

## 29. What is Pipe?

```bash id="pipe1"
ls | grep file
```

Output of one command becomes input of another.

---

## 30. What is Grep?

```bash id="grep1"
grep "text" file.txt
```

Used to search text.

---
