// src/data/codeSnippets.ts
export const codeSnippets: Record<string, { problem: string; code: string }> = {
  JavaScript: {
    problem: "Reverse a string",
    code: `// Reverse a string in JavaScript
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
`,
  },

  Python: {
    problem: "Check if a number is prime",
    code: `# Check if a number is prime in Python
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

print(is_prime(17))  # True
`,
  },

  Java: {
    problem: "Calculate Fibonacci sequence iteratively",
    code: `// Calculate Fibonacci sequence in Java
public class Fibonacci {
    public static int fib(int n) {
        if (n <= 1) return n;
        int a = 0, b = 1, c = 1;
        for (int i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
    public static void main(String[] args) {
        System.out.println(fib(10));  // 55
    }
}
`,
  },

  C: {
    problem: "Calculate factorial using recursion",
    code: `// Factorial function in C
#include <stdio.h>

int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("%d\\n", factorial(5));  // 120
    return 0;
}
`,
  },

  "C++": {
    problem: "Sort an array using STL sort",
    code: `// Sort array in C++
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int arr[] = {5, 2, 8, 3, 1};
    int n = sizeof(arr) / sizeof(arr[0]);

    sort(arr, arr + n);

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout << endl;
    return 0;
}
`,
  },

  "C#": {
    problem: "Filter list with LINQ",
    code: `// LINQ filtering example in C#
using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> numbers = new List<int> {1, 2, 3, 4, 5};
        var evens = numbers.Where(n => n % 2 == 0);
        Console.WriteLine(string.Join(", ", evens));  // 2, 4
    }
}
`,
  },

  Ruby: {
    problem: "Check if a string is a palindrome",
    code: `# Palindrome check in Ruby
def palindrome?(str)
  str == str.reverse
end

puts palindrome?("level")  # true
puts palindrome?("hello")  # false
`,
  },

  Go: {
    problem: "Run two goroutines concurrently",
    code: `// Goroutines example in Go
package main

import (
    "fmt"
    "time"
)

func say(s string) {
    for i := 0; i < 3; i++ {
        fmt.Println(s)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    go say("world")
    say("hello")
}
`,
  },

  Rust: {
    problem: "Ownership example with borrowing",
    code: `// Ownership and borrowing in Rust
fn main() {
    let s = String::from("hello");

    takes_ownership(&s);

    println!("String is still valid: {}", s);
}

fn takes_ownership(s: &String) {
    println!("Borrowed string: {}", s);
}
`,
  },

  Scala: {
    problem: "Use map and filter on a list",
    code: `// Functional operations in Scala
object Example extends App {
  val nums = List(1, 2, 3, 4, 5)
  val evens = nums.filter(_ % 2 == 0)
  val doubled = evens.map(_ * 2)
  println(doubled)  // List(4, 8)
}
`,
  },

  Haskell: {
    problem: "Calculate factorial recursively",
    code: `-- Factorial in Haskell
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

main = print (factorial 5)  -- 120
`,
  },

  Kotlin: {
    problem: "Use data class and null safety",
    code: `// Kotlin data class example
data class User(val name: String, val age: Int?)

fun main() {
    val user: User? = User("Alice", null)
    println(user?.age ?: "Age unknown")  // Age unknown
}
`,
  },

  TypeScript: {
    problem: "Define interface and use type guards",
    code: `// Interface and type guard in TypeScript
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getPet(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}
`,
  },

  Elixir: {
    problem: "Calculate factorial recursively",
    code: `# Factorial in Elixir
defmodule Math do
  def factorial(0), do: 1
  def factorial(n), do: n * factorial(n - 1)
end

IO.puts Math.factorial(5)  # 120
`,
  },

  R: {
    problem: "Basic plot with ggplot2",
    code: `# Simple scatter plot in R
library(ggplot2)

data <- data.frame(x = 1:10, y = (1:10)^2)
ggplot(data, aes(x=x, y=y)) + geom_point()
`,
  },

  Lua: {
    problem: "Iterate over table",
    code: `-- Iterate over a table in Lua
local tbl = {a = 1, b = 2, c = 3}

for k, v in pairs(tbl) do
  print(k, v)
end
`,
  },

  Dart: {
    problem: "Basic Flutter widget",
    code: `// Flutter stateless widget in Dart
import 'package:flutter/material.dart';

class HelloWorld extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(child: Text('Hello World'));
  }
}
`,
  },

  Prolog: {
    problem: "Simple family relationship",
    code: `% Prolog family relations
parent(john, mary).
parent(mary, susan).

grandparent(X, Y) :-
    parent(X, Z),
    parent(Z, Y).
`,
  },
};
