---
title: Self and local hosting
outline: deep
---

# Self and local hosting

Lorist is open source and, as such, can be deployed to any server you like, or simply forked/downloaded and ran locally.

## What you can/can’t do

While the code itself is open source, it is offered as–is, and **fully unsupported**. If you’re trying to do something weird with Lorist and things break, it’s _highly likely_ that you’re on your own. This is not an SDK or an npm package that precipitates ongoing maintenance and support, it’s a standalone web app that you can _choose_ to put somewhere other than `lorist.app`.

You can use, modify and host Lorist for non-commercial purposes without any restrictions. You cannot host your own version of Lorist, modified or otherwise, and charge people to access it. That’s just dickhead behaviour. You can, however, host your own version of Lorist, modified or otherwise, and use that version to write words that you charge for. So it’s okay to make money _with_ Lorist, just not to make money _from_ it.

You might ask, dear reader, why you would _want_ to self– or local–host Lorist given that everything is saved locally, and the answer to that lies in the implicit trust you put in the fact that 1. this will never change (I promise it won’t, but you don’t have to believe me) and 2. `lorist.app` will exist in perpetuity.

Many folks will prefer the convenience of an easy URL and no need to maintain their own instances of a project, but some folks won’t, and if you’re one of such folks, you’re still valid and loved.

## Running locally

If you want to run Lorist locally, you can grab the source code and do so in something of a jiffy. Download, clone, or fork the repository, `cd` into the directory, `npm install` everything, `npm run dev` and you should be good to go. By default it’ll spin up at `http://localhost:5173` but if you’re running another instance of a Vite project your port might be different.

Note that **IndexedDB instances are silo’d to the browser and domain they’re created at** so running Lorist from `localhost:5173` will be a completely discrete database to running it from `localhost:8080` or whatever other idiosyncratic porting approach you take.

You can also statically serve Lorist and run it behind a proxied alias (e.g. `lorist.dev`) – if you know how to do that, feel free. That’s out of the scope for these guides.

## Self hosting

You can self–host Lorist without (much) restriction in terms of license. Provided you’re not charging for access (which would be weird) you’re free to deploy any release or your own custom (god help you in that codebase) build to any platform you like.

You’ll have a much better time deploying to a PaaS that supports Node.js and can auto-build a SvelteKit project, but if you want to go wild and set up a full Docker situation, you can (possibly? probably?) do that. You’re on your own with that one though.

## Modifying Lorist’s code

If you want to modify Lorist for whatever reason, you can do so, provided you’re not charging people to access it or building your own features behind some kind of paywall. Again, make money _with_ it, not _from_ it.

If you want to make some simple, superficial modifications like changing the UI appearance or modifying the fonts used for the different editor themes, most of Lorist’s styles are handled via CSS custom properties. You can override them with custom CSS.

If you want to go deeper, just know that the codebase isn’t perfect. It’s a handcrafted mess. Most stuff is properly typed using TypeScript and it’s not _horrendous_ but it’s also not a codebase designed for multiple collaborators or enterprise-scale deployment. You’ll find it lacking a lot of what ‘real’ FOSS packages have.

The most common modification folks will want to make is to add remote syncing. If you do this, and want to share it publicly with others, **please rename your project** and remove any association with Lorist. This goes against the initial premise of the product.

## I am once again reminding you that this is an unsupported codebase

Not to labour the point, but if you intend to modify or self-host Lorist, you do so at your own risk and at your own endeavour. Please don’t raise code-related issues in the GitHub repository. Follow a simple rubric:

- Does this issue make it harder/worse/impossible to use Lorist? **Raise an issue**.
- Does this thing make it harder/worse/impossible to modify or host Lorist? **Keep your peace**.

Similarly, feature contributions are actively discouraged. If you’re kind enough to want to contribute something to Lorist, then simple things like bugfixes or performance improvements are welcomed, but as far as features go, it’s an opinionated product with an opinionated maintainer, and I would hate to see folks sink valuable time into proposing or building features that are simply not aligned with the project.
