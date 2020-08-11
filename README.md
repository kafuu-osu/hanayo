# Hanayo - kafuu-osu!'s frontend

NOTE: The GoLang backed code is broken... We will fix it *soon*...

This the the [frontend](https://ussr.pl/) of kafuu-osu!.

It is based on kafuu's version of [hanayo](https://github.com/osuripple/hanayo).

Some design elements have been taken from osuAkatsuki.

![Website Screenshot](http://im.ussr.online/5e373b25999d90.14380332-aone.png)

## (Ripple Note) To fellow developers: this is not how you do it!

The biggest flaw of hanayo are that when I set out to create it, I wanted to create a template system that:

* Created a handler by simply having the file "be there"
* Could fetch the data it needed on its own, often from the kafuu-osu! API
* Had the actual Go code be as little as possible

This was not immediately evident to me, a Go beginner, but what I did there was basically make Go be PHP.

The biggest lesson I learned on how to properly do templates, was learning to use [Vue](https://vuejs.org/). Yes, Vue can be used for the frontend and not really for server-rendered stuff, but even just learning how to do stuff with it can help you understand what a template is actually supposed to be in order to be maintainable.

The key concepts and insights for me where:

* Separating clearly code and markup, making the template declarative and keeping as little code in the template
* A template should be purely functional. Its mere creation should not generate side effects, nor should it be dependent on things that are not its precise inputs: for a given input there is a specific output.
* The concept of component as a single self-contained entity which is the same wherever you use it is very powerful.
* Once a template/component starts becoming too big, split it into more components.

But don't stop here. Actually making a project using Vue helps you to understand this much more easily than using mere words. Go ahead and build something, even if just to play around!

