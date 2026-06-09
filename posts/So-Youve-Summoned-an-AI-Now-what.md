---
title: "So You've Summoned an AI - Now What?"
slug: so-youve-summoned-an-ai-now-what
description: >-
  Lessons learned on using AI as part of my development toolkit — from planning to security to verification.
tags:
  - AI
  - developer-tools
added: "Jun 8 2026"
---

I've put a lot of work into understanding AI and figuring out how to incorporate it into my toolkit and my process for investigating, researching, designing, and writing code.

My favorite use for AI so far is using it to get over that initial "deer in the headlights" feeling of overwhelm. I love using AI to figure out where to start.

This will probably be an ongoing series. So much has changed since I started writing this, and I've rewritten it multiple times over the last few months. This is what I've learned so far.

## You Are Still Responsible

You are responsible for the code you write. You are responsible for gaining the context you need. You can't blame Claude if your PR is horrible, so make sure you test and verify everything.

## Security Still Matters & Trust, But Verify (Actually—Don't Trust)

Remember security best practices: an agent should only have access to the files and materials it needs to perform a specific task. I like to create a workspace with my project folders and try to keep that main project directory as a sandbox or in a separate VM. Always follow the principle of least privilege, just like you would with a new human.

Trust is learned in drops but lost in buckets.

Ask questions. Remember, you can ask AI to cite its sources—and then go verify them.

Ask it to start your design process with security in mind. Can you limit the blast radius?

I know that sounds like you're doing double the work, but over time you'll develop a process. You'll build a "smell test" and learn how to quickly get the context you need.

## Start With a Plan

Flash back to your first CS 101 class. You should be doing a lot of research, design, and planning before you start writing code.

Coding—whether by a human or an agent—should always start with a plan.

Do not skip the planning phase, and include AI in it.

Make sure your AI is clear on how you're going to build what you're building. Discuss trade-offs.

Define which requirements are most important.

Context is what makes or breaks you. This is where you should spend most of your time. Better planning leads to better output.

Are you accounting for edge cases?

Are you asking questions and thinking through trade-offs?

Ask questions. Challenge its responses. Ask for sources to be cited.

It's great to spin up a quick proof of concept with AI, but you should still understand what's going on.

You end up shortchanging yourself as an engineer if you don't prioritize learning, growth, and working on your craft. It's vital to make sure you're still growing and learning, no matter how much you utilize AI.

Knowledge is power, and maintaining your curiosity and problem-solving skills will be imperative in this new world.

## Don't Delegate Your Brain

Problem-solving is your gift. Context is something engineers need.

You have to actively find ways to build context and form opinions while using AI because you will be held accountable—not the AI. You'll also be the one debugging and fixing the flaws.

How can you learn from your agent? I've picked up quite a few commands that have become part of my workflow.

My favorite new one is the safer version of a Git force push:

```bash
git push --force-with-lease origin main
```

Ask your AI to explain and elaborate on concepts that come up that you're not familiar with.

When you're doing a code review, you can't rely on the same AI agent to review its own code. We don't do that in real life. Person A writes the code and Person B reviews it, and vice versa.

Never trust. Always verify.

It wrote the tests, and they passed—but were the tests actually testing the right thing?

It's hard to be objective and avoid being context-blind when you've written the code.

You can even have another agent review the code. This gives you more chances to catch bugs. I'd say "more eyes," but does AI even have eyes?

You should obviously review it too.

Can AI help you gain context or perspective? Absolutely.

## Leverage Instructions and .md Files

When working with agents, use a markdown (.md) file.

* Add your coding standards.
* Define linting and formatting rules.
* Include best practices and style guides.
* Document expectations clearly.

If it gets something wrong repeatedly, take note and update your instructions to prevent it from happening again.

Here are a few links I've really enjoyed that helped me get started:

* https://github.com/github/awesome-copilot
* https://code.visualstudio.com/docs/agent-customization/custom-instructions

## Work Incrementally

Don't try to do everything in one shot. Work in small, testable increments. This makes it easier to catch issues early and maintain control over the output.

Watch the thinking trace. I like to use GitHub Copilot CLI, and I like to watch the trace while working with AI and building. I often ask about terms or commands I don't know. I take notes and try out commands. My goal is to learn and grow, so I try to be intentional about learning.

Have you ever done a git blame and discovered it was code you wrote and forgot about? Now we're writing code at 10x the speed.

Make your AI take notes, too, so both you and the AI can remember your trade-offs, lessons learned, and why you made the decisions you did in case either of you forget. I also like to take handwritten notes myself.

I've really enjoyed learning to work with new AI tools. It's also heartwarming to see how many traditional engineering concepts are still important, even when using AI.

I've been on this journey for about a year, and honestly, it was hard. Using AI to spit out a bunch of code was easy. Getting to a point where you can use it well is hard.

Developing and maintaining style, quality, and good engineering practices while making sure you're still learning is challenging. Most importantly, context is everything.

I hope you continue to join me for the journey. I'd love it if you shared some of your favorite tips with me!