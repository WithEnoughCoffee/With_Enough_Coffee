---
title: Building Spellforge: How a Group Chat, a Used Server, and Too Much Coffee Built my Homelab
slug: spellforge1
description: >-
  Building a Homelab on a budget
tags:
  - Linux
  - Home-lab
  - Servers
  - 3-D-Printing
  - Devloper-Tools

added: "Oct 12 2026"
---

##This is a story that starts out with your group chat indulging your bad ideas.

I’ve been talking about wanting to get my hands on some hardware for while. I love Mac OS as my daily driver when I need to get things done, like filling out school forms, taking meetings, or recording a podcast. Those are times I just need it to work and having everything syncing across all devices is incredibly helpful, especially when your busy.


When it comes to development Linux is my go to environment. I wanted a way to spin up multiple containers and development environments, experiments with different technologies, and have a place to break things without accidentally breaking the machine where my kids photos live.


To ruin my excitement enters the cost of hardware in 2026 in middle of theAI boom.

Naturally this meant organizing a nerd outing in the group chat. We came up with a plan to hunt for deals at a  recycled hardware store. We headed down to RE-PC a Recycled Computer and Peripherals in Seattle.




##A Nerdy Treasure Hunt Begins


RE-PC is one of the oldest and largest computer retail recyclers has two in person locations and an online shop. The store is staffed with really knowledgeable professionals to help you find what your looking for. You can both buy and sell computer parts. They have everything from vintage radios and projectors to hard to find components.

If I’m being honest, I had no idea what I was looking for, so brining friends was a very good decision.

In the back of the store they had a really neat little computer museum. You can’t complain when a shopping trip for parts turns into a impromptu history lesson.


##What I scored:

The box:

HPE ProLiant ML110 Gen10 for 449$
The server includes:
HPE ProLiant ML110 Gen10 chassis
HPE Ethernet 1Gb 2-port 332i Adapter
Integrated HPE iLO 5 management
USB boot media running Unraid

Storage:
I got 3 x 1 TB 2.5 SATA HDDs $19.95 each.


##Summoning the Software

Unraid would be the operating system powering Spellforge.

I picked Unraid because I wanted the flexibility to run different applications in containers, remotely access the server from my Mac, and experiment with the tools available to homelab enthusiasts.

Unraid is a Linux-based operating system designed for managing storage and running applications on a home server. One of the things that appealed to me was its flexible storage approach. Unlike traditional RAID configurations, Unraid's array can accommodate drives of different capacities, subject to its parity and storage requirements.

It also provides NAS capabilities and supports Docker containers. Tailscale integration makes it possible to securely access my server remotely without having to expose it directly to the internet.Unraid has a community Apps catalog with thousands of applications and plugins available, including Docker-based services maintained by community members and other developers.

I'll be using the Tailscale plugin to access Spellforge remotely. It took less than five minutes to get everything set up and working. For backups, I'm considering Backblaze. Getting the software up and running was the easy part.


##The Great Hard Drive Caddy Saga
Ya’ll this is the part where I considered chucking the box out the window.

Installing the hard drives turned into an ordeal of its own. First, finding compatible drive caddies was surprisingly difficult. Then came the fun part: trying to match the drives to the bays and figure out whether everything would actually fit and work.

I was genuinely worried about damaging the drives. Over the course of several weeks, I 3D-printed multiple caddy designs (I’m really sad they didn't work because I may or may not have printed them in bright pink) and bought two more on Amazon.

 A lot of colorful language was spoken, and tears were cried into many cups of coffee.
Eventually, a knowledgeable friend helped me get everything set up in a slightly duck-tape-and-prayers kind of configuration while I waited for the new caddies to arrive.
And then, finally, we had a working server.


##It's Alive!


Spellforge is up and running. I can access it remotely, all four drives are running, and I've completed my first update!
There's still plenty to do.


##What's Next?


In the near future:
Get Backblaze configured for backups.
Spin up some containers and start experimenting with applications.
Set up isolated development environments for different projects.
Further down the road:
Explore adding GPUs.
Run a few models locally and experiment with local AI workloads.
This is just the beginning of Spellforge. I want to use this homelab to learn, experiment, break things, and document what I discover along the way. Because the goal was never just to buy a server. It was to build a place where I could learn by doing and preferably, somewhere that doesn't contain important documents or kids photos.
