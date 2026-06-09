 title: "So You've Summoned an AI - Now What?"
 slug: so-youve-summoned-an-ai-now-what
 description: >-
   Lessons learned on using AI as part of my development toolkit — from planning to security to verification.
 tags:
   - AI
   - developer-tools
 added: "Jun 8 2026"


#So You've Summoned an AI - Now what?

I've put a lot of work into trying to understand AI and how to use it as part of my toolkit and incorporate it into my process of investigating, researching, designing, and writing code.

This will probably be an ongoing series. So much has changed since I started writing this, and I've rewritten it multiple times over the last few months. But this is what I've learned so far.

## You Are Still Responsible

You are responsible for the code you write. You are responsible for gaining the context you need. You can't blame Claude if your PR is horrible, so make sure you test and verify everything.

## Security Still Matters

Remember security best practices: an agent should only have access to the files and materials it needs to perform a specific task. Always follow the principle of least privilege.

Reduce your blast radius.

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

## Trust, But Verify (Actually—Don't Trust)

Always have it cite its sources—and go verify them.

I know that sounds like you're doing double the work, but over time you'll develop a process. You'll build a "smell test" and learn how to quickly get the context you need.

## Don't Delegate Your Brain

Problem-solving is your gift. Context is something engineers need.

You have to actively find ways to build context and form opinions while using AI because you will be held accountable—not the AI. You'll also be the one debugging and fixing the flaws.

Never trust. Always verify.

It wrote the tests, and they passed—but were the tests actually testing the right thing?

## Leverage Instructions and .md Files

When working with agents, use a markdown (.md) file.

* Add your coding standards.
* Define linting and formatting rules.
* Include best practices and style guides.
* Document expectations clearly.

If it gets something wrong repeatedly, take note and update your instructions to prevent it from happening again.

## Work Incrementally

Don't try to do everything in one shot. Work in small, testable increments. This makes it easier to catch issues early and maintain control over the output.

Watch the thinking trace. I like to use GitHub Copilot CLI, and I like to watch the trace while working with AI and building. I often ask about terms or commands I don't know. I take notes and try out commands. My goal is to learn and grow, so I try to be intentional about learning.

Have you ever done a git blame and discovered it was code you wrote and forgot about? Now we're writing code at 10x the speed.

Make your AI take notes, too, so both you and the AI can remember your trade-offs, lessons learned, and why you made the decisions you did in case either of you forget. I also like to take handwritten notes myself.

I've been on this journey for about a year, and honestly, it was hard. Using AI to spit out a bunch of code was easy. Getting to a point where you can use it well is hard.

Developing and maintaining style, quality, and good engineering practices while making sure you're still learning is challenging. Most importantly, context is everything.

