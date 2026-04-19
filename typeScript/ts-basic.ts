/**
 * =========================================
 * TypeScript Interview Prep - Basics (Explained)
 * =========================================
 * This file is designed for quick revision + understanding.
 * Each concept includes short, interview-friendly explanations.
 */

/* =========================================
   1. BASIC TYPES
========================================= */

/**
 * TypeScript adds types on top of JavaScript.
 * This helps catch errors BEFORE running the code.
 */

let userName: string = "Arpit"; // only string allowed
let age: number = 21; // only number allowed
let isLoggedIn: boolean = true; // true or false

// Arrays → define type of elements inside array
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Arpit", "John"];

/* =========================================
   2. ANY vs UNKNOWN vs NEVER
========================================= */

/**
 * any:
 * - Disables TypeScript checking
 * - Avoid in real projects (bad practice)
 */
let valueAny: any = 10;
valueAny = "hello"; // no error (unsafe)

/**
 * unknown:
 * - Safer alternative to any
 * - Must check type before using
 */
let valueUnknown: unknown = 10;

if (typeof valueUnknown === "number") {
  console.log(valueUnknown.toFixed(2)); // safe usage
}

/**
 * never:
 * - Function never returns
 * - Used for errors or infinite loops
 */
function throwError(message: string): never {
  throw new Error(message);
}

/* =========================================
   3. FUNCTIONS
========================================= */

/**
 * Always define return types in interviews
 */

// normal function
function add(a: number, b: number): number {
  return a + b;
}

// optional parameter → may or may not be passed
function subtract(a: number, b: number, c?: number): number {
  return a - b - (c || 0);
}

// default parameter → value used if not provided
function multiply(a: number, b: number = 10): number {
  return a * b;
}

// rest parameters → converts arguments into array
function sumAll(...nums: number[]): number {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

/* =========================================
   4. INTERFACES & TYPE ALIASES
========================================= */

/**
 * type:
 * - More flexible
 * - Can be used for primitives, unions, etc.
 */
type User = {
  name: string;
  age: number;
};

/**
 * interface:
 * - Mainly used for objects
 * - Supports extension (OOP style)
 */
interface Product {
  id: number;
  title: string;
}

// extending interface
interface Book extends Product {
  author: string;
}

const book: Book = {
  id: 1,
  title: "TS Guide",
  author: "Arpit",
};

/* =========================================
   5. OBJECT TYPES
========================================= */

/**
 * Inline object typing
 * '?' means optional property
 */
const car: { brand: string; model: string; year?: number } = {
  brand: "Tata",
  model: "Punch",
};

/* =========================================
   6. TUPLES
========================================= */

/**
 * Tuple = fixed length + fixed types
 */
let userTuple: [number, string, boolean];
userTuple = [1, "Arpit", true];

/**
 * readonly tuple → cannot modify
 */
let fixedTuple: readonly [number, string] = [1, "fixed"];

/* =========================================
   7. ENUMS
========================================= */

/**
 * Enum = set of constant values
 */

// numeric enum (default starts from 0)
enum Direction {
  North,
  South,
  East,
  West,
}

let dir = Direction.North; // value = 0

// string enum (more readable in real apps)
enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
}

/* =========================================
   8. CLASSES & OOP
========================================= */

/**
 * Access modifiers:
 * - public → accessible everywhere
 * - private → only inside class
 * - protected → class + child classes
 */

class Developer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const dev = new Developer("Arpit");
console.log(dev.getName());

/**
 * Inheritance → reuse code from parent class
 */
class Animal {
  protected sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor() {
    super("Bark");
  }
}

const dog = new Dog();
dog.makeSound();

/* =========================================
   9. GENERICS
========================================= */

/**
 * Generics = reusable type-safe code
 */

// generic function
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10);
const str = identity<string>("hello");

/**
 * Generic class
 */
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(100);

/* =========================================
   10. UTILITY TYPES
========================================= */

interface Person {
  name: string;
  age: number;
  location?: string;
}

/**
 * Partial → makes all properties optional
 */
const partialPerson: Partial<Person> = {
  name: "Arpit",
};

/**
 * Required → makes all properties required
 */
const requiredPerson: Required<Person> = {
  name: "Arpit",
  age: 21,
  location: "India",
};

/**
 * Pick → select specific keys
 */
const picked: Pick<Person, "name"> = {
  name: "Arpit",
};

/**
 * Omit → remove specific keys
 */
const omitted: Omit<Person, "age"> = {
  name: "Arpit",
  location: "India",
};

/**
 * Record → key-value object type
 */
const recordExample: Record<string, number> = {
  a: 1,
  b: 2,
};

/**
 * Readonly → cannot modify after assignment
 */
const readonlyPerson: Readonly<Person> = {
  name: "Arpit",
  age: 21,
  location: "India",
};

/* =========================================
   11. UNION TYPES
========================================= */

/**
 * Union → variable can have multiple types
 */
function printId(id: string | number) {
  console.log("ID:", id);
}

printId(101);
printId("101");

/* =========================================
   12. NULLISH COALESCING
========================================= */

/**
 * ?? → fallback only for null or undefined
 */
function showMileage(mileage: number | null | undefined) {
  console.log(mileage ?? "NA");
}

showMileage(null);       // NA
showMileage(0);          // 0 (important interview point)
showMileage(undefined);  // NA


export {};
/**
 * =========================================
 * END OF BASICS
 * =========================================
 *
 * Next to add:
 * - Advanced Types (keyof, infer, mapped types)
 * - Type Guards
 * - Real-world scenarios
 * - Tricky interview questions
 */