/**
 * =========================================================
 * TypeScript Interview Practice (Detailed + Real-World)
 * =========================================================
 *
 * This file focuses on:
 * - Real-world usage (what companies actually use)
 * - Type safety (main goal of TS)
 * - Interview reasoning (WHY, not just WHAT)
 *
 * If you understand this file deeply → you're interview ready.
 */

export {}; // makes file a module (prevents global conflicts)

/* =========================================================
   1. REAL-WORLD TYPESCRIPT USAGE
========================================================= */

/**
 * 1. Type-safe API Response
 *
 * Problem in JS:
 * - API responses are unpredictable
 * - You may access properties that don't exist → runtime error
 *
 * Solution in TS:
 * - Define expected shape using types
 */

type User = {
  id: number;
  name: string;
};

/**
 * This function guarantees:
 * - It will ALWAYS return a User object
 * - If structure changes → TypeScript error
 */
async function fetchUser(): Promise<User> {
  return {
    id: 1,
    name: "Arpit",
  };
}

/**
 * Interview Insight:
 * - Promise<User> = async function resolves to User
 */

/**
 * 2. Using API data safely
 */
async function getUserName(): Promise<string> {
  const user = await fetchUser();

  // TS knows user has 'name'
  return user.name;
}

/**
 * 3. Error handling with unknown
 *
 * Why unknown?
 * - Error can be anything (string, object, etc.)
 * - unknown forces us to check before usage
 */
function handleError(error: unknown) {
  if (error instanceof Error) {
    console.log(error.message); // safe
  } else {
    console.log("Unknown error");
  }
}

/**
 * 4. Typing React Props (VERY COMMON)
 *
 * Even if you don’t use React in interview,
 * they test if you can type component props.
 */
type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button(props: ButtonProps) {
  console.log(props.label);
}

/**
 * Interview Insight:
 * - Props are just typed objects
 */

/* =========================================================
   2. TYPE GUARDS & NARROWING (VERY IMPORTANT)
========================================================= */

/**
 * TypeScript narrowing:
 * - Reduces a union type into a specific type
 *
 * WHY?
 * - Because TS needs certainty before allowing operations
 */

/**
 * 1. typeof narrowing
 */
function printValue(value: string | number) {
  if (typeof value === "string") {
    // TS knows it's string here
    console.log(value.toUpperCase());
  } else {
    // TS knows it's number here
    console.log(value.toFixed(2));
  }
}

/**
 * Interview Insight:
 * - typeof works only for primitives
 */

/**
 * 2. instanceof narrowing
 */

class Dog {
  bark() {
    console.log("bark");
  }
}

class Cat {
  meow() {
    console.log("meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // TS knows Dog
  } else {
    animal.meow(); // TS knows Cat
  }
}

/**
 * Interview Insight:
 * - instanceof works with classes
 */

/**
 * 3. Custom Type Guard (VERY IMPORTANT)
 *
 * Syntax:
 * function fn(x): x is Type
 */

type Admin = {
  role: "admin";
  accessLevel: number;
};

type RegularUser = {
  role: "user";
};

/**
 * Custom guard:
 * - tells TS "this is Admin"
 */
function isAdmin(user: Admin | RegularUser): user is Admin {
  return (user as Admin).accessLevel !== undefined;
}

function checkAccess(user: Admin | RegularUser) {
  if (isAdmin(user)) {
    // TS knows it's Admin
    console.log(user.accessLevel);
  } else {
    console.log("No access");
  }
}

/**
 * Interview Insight:
 * - This is a HIGH-FREQUENCY question
 */

/* =========================================================
   3. DIFFERENCE QUESTIONS (CRITICAL)
========================================================= */

/**
 * type vs interface
 *
 * type:
 * - supports unions, primitives
 * - more flexible
 *
 * interface:
 * - used for objects
 * - supports extension & merging
 *
 * Interview answer (short):
 * "Use interface for objects, type for everything else"
 */

/**
 * any vs unknown
 *
 * any:
 * - disables type checking
 *
 * unknown:
 * - forces type checking before use
 *
 * Interview answer:
 * "unknown is a safer version of any"
 */

/**
 * interface vs abstract class
 *
 * interface:
 * - only structure (no implementation)
 *
 * abstract class:
 * - can have methods + logic
 *
 * Interview answer:
 * "Use abstract class when you need shared logic"
 */

/**
 * enum vs union types
 *
 * enum:
 * - fixed named constants
 *
 * union:
 * - lightweight and preferred
 *
 * Interview answer:
 * "Union types are preferred over enums in modern TS"
 */

type Status = "success" | "error";

/* =========================================================
   4. PRACTICAL + TRICKY QUESTIONS
========================================================= */

/**
 * Q1: Predict output
 */

let x: any = "hello";
x = 10;

/**
 * TS allows this because 'any' disables checking
 * BUT runtime will crash
 */
console.log(x.toUpperCase()); // runtime error

/**
 * Interview Insight:
 * - Shows why 'any' is dangerous
 */

/**
 * Q2: Fix error
 */

function greet(name: string | null) {
  // console.log(name.toUpperCase()); unsafe

  if (name !== null) {
    console.log(name.toUpperCase()); // safe
  }
}

/**
 * Q3: Improve type safety
 */

function getLength(value: any) {
  return value.length;
}

// Better:
function getLengthSafe(value: string | any[]) {
  return value.length;
}

/**
 * Q4: Refactor JS → TS
 */

// JS (unsafe)
function addJS(a, b) {
  return a + b;
}

// TS (safe)
function addTS(a: number, b: number): number {
  return a + b;
}

/**
 * Q5: Optional chaining
 */

type Profile = {
  name?: string;
};

const profile: Profile = {};

/**
 * Prevents crash if name is undefined
 */
console.log(profile.name?.toUpperCase());

/**
 * Q6: Nullish coalescing
 *
 * ?? only checks null or undefined
 * NOT 0 or empty string
 */
function show(value: string | null) {
  console.log(value ?? "default");
}

/**
 * Q7: Subtle bug
 */

function printLength(value: string | number) {
  // console.log(value.length); error

  if (typeof value === "string") {
    console.log(value.length); // safe
  }
}
