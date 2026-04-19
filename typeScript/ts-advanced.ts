/**
 * =========================================================
 * TypeScript Advanced Types (Explained for Interviews)
 * =========================================================
 *
 * Focus:
 * - How it works
 * - Why it's used
 * - What interviewers expect
 *
 * If you understand this file well → you're ahead of most candidates.
 */

/* =========================================================
   1. keyof
========================================================= */

/**
 * keyof:
 * - Extracts keys from an object type
 * - Returns a union of string literals
 */


/**
 * "name" | "age"
 */
type Keys = keyof User;

/**
 * Why interviewers ask:
 * - To check if you understand type-level programming
 */

let key: Keys = "name"; // ✅ valid
// let key2: Keys = "email"; ❌ error (not part of User)

/* =========================================================
   2. typeof (Type Query)
========================================================= */

/**
 * typeof in TypeScript:
 * - Gets the TYPE of a variable (not value like JS)
 * - Avoids repeating types
 */

const person = {
  name: "Arpit",
  age: 21,
};

/**
 * Equivalent to:
 * { name: string; age: number }
 */
type PersonType = typeof person;

/**
 * Why important:
 * - Used in real apps to derive types from objects (API, configs)
 */

/* =========================================================
   3. INDEXED ACCESS TYPES
========================================================= */

/**
 * Access a specific property type
 */

type NameType = User["name"]; // string
type AgeType = User["age"];   // number

/**
 * Combine with keyof → powerful pattern
 */

type AllValues = User[keyof User];
// string | number

/**
 * Why asked:
 * - Used in dynamic typing scenarios
 */

/* =========================================================
   4. MAPPED TYPES
========================================================= */

/**
 * Mapped Types:
 * - Loop over keys of a type
 * - Transform each property
 */

type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

/**
 * Result:
 * {
 *   readonly name: string;
 *   readonly age: number;
 * }
 */

/**
 * Optional version
 */
type PartialUser = {
  [K in keyof User]?: User[K];
};

/**
 * Why important:
 * - Many built-in types (Partial, Required) use this internally
 */

/* =========================================================
   5. CONDITIONAL TYPES
========================================================= */

/**
 * Syntax:
 * T extends U ? X : Y
 *
 * Think like: if (T is assignable to U)
 */

type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

/**
 * Real-world thinking:
 * - Add logic inside types
 */

/**
 * Interview pattern:
 */
type ApiResponse<T> = T extends string ? "string response" : "other response";

type Res1 = ApiResponse<string>; // "string response"
type Res2 = ApiResponse<number>; // "other response"

/* =========================================================
   6. DISTRIBUTIVE CONDITIONAL TYPES
========================================================= */

/**
 * Important behavior:
 * - Runs condition on each union member
 */

type Check<T> = T extends string ? T : never;

type Result = Check<string | number>;
// string (number removed)

/**
 * Why tricky:
 * - Many candidates don't know this behavior
 */

/* =========================================================
   7. infer KEYWORD (VERY IMPORTANT)
========================================================= */

/**
 * infer:
 * - Extracts types inside conditional types
 * - Works like "pattern matching"
 */

/**
 * Example: get return type of function
 */
type GetReturnType<T> =
  T extends (...args: any[]) => infer R ? R : never;

function greet() {
  return "hello";
}

type GreetReturn = GetReturnType<typeof greet>;
// string

/**
 * Example: extract array element type
 */
type ElementType<T> =
  T extends (infer U)[] ? U : never;

type Numbers = ElementType<number[]>; // number
type Strings = ElementType<string[]>; // string

/**
 * Why interviewers love this:
 * - Shows deep understanding of TS internals
 */

/* =========================================================
   8. REAL INTERVIEW COMBINATIONS
========================================================= */

/**
 * Make all properties optional
 */
type MakeOptional<T> = {
  [K in keyof T]?: T[K];
};

type OptionalUser = MakeOptional<User>;

/**
 * Extract only string properties
 */
type OnlyStrings<T> = {
  [K in keyof T]: T[K] extends string ? T[K] : never;
};

type UserStrings = OnlyStrings<User>;

/**
 * Remove properties with non-string values (better version)
 */
type FilterStrings<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

type FilteredUser = FilterStrings<User>;

/**
 * Result:
 * {
 *   name: string;
 * }
 */

/* =========================================================
   9. INDEXED + GENERIC COMBO (VERY COMMON)
========================================================= */

/**
 * Get value type by key
 */
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const userObj = { name: "Arpit", age: 21 };

const val1 = getValue(userObj, "name"); // string
const val2 = getValue(userObj, "age");  // number

/**
 * Why important:
 * - Used everywhere in real codebases
 */

/* =========================================================
   10. KEY INTERVIEW TAKEAWAYS
========================================================= */

/**
 * 🔥 Must remember:
 *
 * keyof → gives keys
 * typeof → gets type from variable
 * T[K] → access property type
 * mapped types → transform types
 * conditional types → logic in types
 * infer → extract types dynamically
 *
 * If you can combine these → you're in top candidates
 */

export {};