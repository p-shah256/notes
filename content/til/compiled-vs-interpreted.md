---
title: Why Compiled Languages Are Faster Than Interpreted Ones (And Why We Still Use Both)
draft: false
tags:
  - languages
created: 2025-07-11
---


I've always heard that compiled languages are faster than interpreted ones but always wondered why? Why is that the case?

After digging a little deeper, here's what I've understood.

### The Core Problem: Getting Code to Run

Let's say you have a piece of code:

```python
def calculate_sum(a, b):
    return a + b

result = calculate_sum(5, 3)
print(result)
```

Now if the CPU wants to run it, it needs something like this in assembly:

```assembly
mov eax, 5
mov ebx, 3
add eax, ebx
```

Or even lower level in machine code:

```
10110000 00000101  ; mov al, 5
10110011 00000011  ; mov bl, 3
00000000 11000011  ; add al, bl
```

### Two Approaches to Getting There

You've got two broad options here:

**Option 1: Compile it and pay the cost upfront**
- Pay the cost of conversion upfront but then benefit from machine code speed
- Your code gets translated once, then runs at native speed

**Option 2: Interpret it - delay that cost until it's required**
- While the CPU wants to run it, parse, interpret and then compile to machine code... line by line
- Translation happens every single time you run the program

### But If Interpreted Languages Are Slow, Why Do It?

The tradeoff I see with compiled languages is that once you compile it - it's done, it's set in stone for that CPU. If you need to run it on some other CPU architecture, compile it again. If you need some other environment, you know the drill - compile again.

The dream for most languages is to **write once, run anywhere**. No matter what CPU, no matter what environment - we want to abstract all of those variables out and have deterministic guarantees.

That's where interpreted languages come in.

### The Core Tradeoffs

**Compiled Languages:**
- Trading off dev flexibility for speed
- We pay the cost for compilation upfront but once it's compiled, we're just flying
- When we're paying the upfront cost, we also get to do a lot of optimizations because we see the code as a whole, not as a path that we might or might not end up taking (i.e., line by line)

**Interpreted Languages:**
- Need to do the parsing, interpreting and compiling every single time
- But we get portability and development flexibility
- A lot of times compilation might take a long time and for dev speed that's not great
- We don't want to compile things that we might never use, so why take a minute or several minutes to compile?
- Things like "hot reloading," "dynamic typing," or "runtime modification" become possible

### The Real World Gets Complicated

There's a whole world of how interpreted languages actually work in practice. Remember, we still need to get to machine code eventually! There are things like JIT (Just-In-Time) compilation, CPython's bytecode compilation, and various other optimizations.

But we'll dive into those later - this is the fundamental tradeoff that drives the whole ecosystem.

### Key Takeaways

- **Compiled = Fast execution, slower development cycle**
- **Interpreted = Flexible development, slower execution**
- **The choice depends on your priorities**: raw performance vs development speed and portability
- **Modern languages often blur these lines** with hybrid approaches
