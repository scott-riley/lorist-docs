---
title: "Browser support"
outline: deep
---

# Browser support

Lorist is built for modern browsers and might behave unexpectedly, erratically, and point–blank not work at all on older or more idiosyncratic browsers. If you’re trying to run it on a smart fridge to prove a point you will probably be disappointed.

## Required browser features

If your browser doesn’t support the following, you might notice some issues with Lorist.

::: info {no-title}
**Hard** = unusable without, **soft** = usable, some things might be weird
:::

| Browser support    | Used for         | Type of requirement |
| ------------------ | ---------------- | ------------------- |
| IndexedDB          | Saving locally   | Hard requirement    |
| JavaScript Enabled | Everything       | Hard requirement    |
| Popover API        | Menus and modals | Soft requirement    |

Before raising an issue, double check your browser supports these features.
