// PROBLEM (for understanding):
// In large apps, different files/modules may do:
// const db = new Database();
// → This creates multiple DB connections (expensive, bad)

// SOLUTION: Singleton Pattern

class Database {
  // holds the single instance
  private static instance: Database;

  // private constructor → prevents: new Database()
  private constructor() {
    console.log("DB Connected"); // will run ONLY once
  }

  // global access point
  public static getInstance(): Database {
    // create instance only first time (lazy initialization)
    if (!Database.instance) {
      Database.instance = new Database();
    }

    // return same instance every time
    return Database.instance;
  }

  public query(sql: string) {
    console.log("Running query:", sql);
  }
}

// ------------------- USAGE -------------------

// simulate different parts of app (controllers/services)

function getUser() {
  // instead of: new Database()
  const db = Database.getInstance(); // reuse same instance
  db.query("SELECT * FROM users");
}

function getOrders() {
  const db = Database.getInstance(); // same instance again
  db.query("SELECT * FROM orders");
}

// ------------------- EXECUTION -------------------

getUser();
getOrders();

// OUTPUT:
// DB Connected (only once)
// Running query: SELECT * FROM users
// Running query: SELECT * FROM orders

// ------------------- KEY IDEA -------------------

// Without Singleton:
// Every "new Database()" → new connection

// With Singleton:
// getInstance()
// → creates once
// → reuses everywhere

// Prevents:
// - multiple DB connections
// - memory waste
// - inconsistent shared state