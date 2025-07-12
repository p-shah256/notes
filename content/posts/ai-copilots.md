---
title: Why I Think AI Copilots Be Hurting Junior Developers
created: 2024-08-05
---


> I know there are two kinds of people in tech - one who just care about the product, and then the others who care about the actual engineering and code. This post is for the second kind of people. For the first ones, it's actually good news - AI writes code and you can get a 'product'. I don't know how far that'll take you in the long run, I'm still pretty skeptical about it, but hey, it's great for you if that's what you're optimizing for! 
But it's not so great if you're a junior and you actually care about understanding the concepts and ideas and the science - not just code that works and you don't even know it exists.

So I've been thinking about this for a while, and I'm starting to wonder if AI copilots are actually making things harder for junior developers like me who want to understand how things work, not easier.

I used to be completely obsessed with coding fast. Like, fire up the IDE, let GitHub Copilot do its thing, hit TAB on whatever looked reasonable, and boom - ship it. That's what good engineers do, right? Move fast, ship features, get stuff done.

Turns out I was completely wrong about this.

It took having to completely rewrite a systems programming project to realize what I was actually missing. I wasn't learning how anything actually worked.

## The Unix Shell Story

Picture this: systems programming class, we're building a Unix shell from scratch. Being "efficient," I dove straight into coding. No planning, no design - just me, my IDE, and a feature list.

The result? 1,200 lines of what I'll generously call code. It technically worked, but every new feature felt like playing Jenga with spaghetti. Edge cases were pure nightmare fuel.

Then came submission day. 7 PM, five hours until deadline, after a full week of wrestling with this thing. I hit a wall. Looking at my tangled mess of array manipulations and nested loops, something finally clicked - I had never actually thought about the design. Not once.

So I did something that felt crazy at the time. I stepped away from my computer. Took a walk. And for the first time, I actually thought about how a shell should work. No IDE, no Stack Overflow, no copilot suggestions. Just thinking.

When I came back, I rebuilt the whole thing using linked lists instead of arrays. The result? 300 lines of code that I could actually explain. Features that had been taking hours now took minutes. Edge cases almost handled themselves.

This wasn't just about picking a different data structure. It was about understanding why that structure made sense. Every line had a purpose. Every decision had reasoning behind it. For the first time, I wasn't just writing code - I was actually engineering something.

## What My Workflow Looks Like Now

After the shell thing, I completely changed how I approach coding. The difference is pretty striking:

### Before (The Copilot Days)

My old workflow was embarrassingly simple:

1. See unfamiliar concept
2. Get AI suggestion
3. Hit TAB
4. Ready to ship!

Total time? Maybe 5 minutes. I felt like a coding superhero, but I was really just pretending to be an engineer.

### Now (The Intentional Days)

Now it looks more like this:

1. Encounter something I don't know
2. Actually dive into documentation, Google around, take notes
3. Experiment with the concept - try to understand why it works
4. Write code with actual understanding

Total time? Hours, sometimes days. And honestly? It's worth every minute.

Here's a real example: Last week we were debugging performance issues where our service was crawling while reading millions of records from Postgres. Old me would've copy-pasted some query optimization suggestions and hoped for the best.

Instead, I spent an evening going down this fascinating rabbit hole learning how the PostgreSQL wire protocol actually works, why we scan rows one at a time, what the driver limitations are, and why obvious solutions like increasing batch size to 1000 rows weren't as straightforward as they seemed.

Yeah, it took longer. But now I can actually explain our caching strategy to anyone who asks. More importantly, I can debug it when things go wrong.

## What I Think Is Actually Happening

I've been reading about John Ousterhout's "tactical vs. strategic programming" concept, and it finally clicked after that Postgres debugging session. Every time I take a shortcut with AI, I'm basically borrowing against my future understanding. And like any debt, it compounds.

The time I "save" using AI copilots isn't really saved - it's just deferred, with interest.

Here's what I think is happening to a lot of junior developers: we're optimizing for the wrong thing. We think speed is what matters, but what actually matters is understanding. The engineers I look up to aren't just fast - they have this ability to see through abstractions and understand systems from low-level details to high-level architecture. You can't get that from hitting TAB on AI suggestions.

You wouldn't give a power tool to a child without proper training because they'd likely hurt themselves. I think AI copilots might be similar for junior developers. They're incredibly powerful tools, but without understanding the fundamentals of what you're building, you might end up cutting yourself in ways you don't even realize until it's too late.
