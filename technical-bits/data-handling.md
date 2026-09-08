---
title: Data handling
outline: deep
---

# Data handling

Lorist is a local-only app, meaning all your data is saved to your browser. If you want to learn more about how that works, just know that this is a _somewhat_ technical overview, you might not need to care.

## IndexedDB

Lorist uses IndexedDB to save your data locally. Supported by all modern browsers, IndexedDB works like any other database in principle. Your data is saved to various tables so it can be persisted between sessions, meaning that if you close your tab, browser, or shut down your device entirely, the next time you load things up, you don’t lose any data.

All your folders, documents, and daily word counts (for goal–tracking) are saved in IndexedDB. There is no way for a site to access IndexedDB values outside of the origin it was created in. This means that your Lorist data is only accessible by `lorist.app`—or wherever you’ve deployed it if you’re self-hosting, or whatever `localhost` you serve it from if you’re running it locally.

Similarly, there’s (as of yet) no way for one browser to access the same IndexedDB data stored in another browser. Which means `lorist.app` (or wherever, see above) opened in Firefox would reference a completely discrete database to `lorist.app` opened in Vivaldi. Or your smart fridge.

Clearing your IndexedDB **will result in full data loss** in Lorist. If you’re someone who likes to play around in Dev Tools, you might be tempted by that big delete icon when inspecting the Storage tab. Only click it if you actually _want_ to banish all your words to the shadow realm.

## Soft–delete

Lorist uses a soft–delete approach to deleting folders and documents. When you delete a folder or document through the UI, it’ll be given a ‘trashed’ state. You can then restore anything previously deleted, empty your trash, or fully delete an item from the ‘Deleted items’ area of the UI.

Only when fully deleting an item—either by specifically choosing that item or by emptying your trash—will that data be actually deleted from the IndexedDB.

## localStorage

localStorage is a means of saving simpler or smaller pieces of data in a browser. Similarly to IndexedDB it lets web apps save data locally to your browser to then access in subsequent sessions.

Lorist uses localStorage to save trivial things, like your selected theme, whether focus mode is enabled/disabled, the expanded/collapsed state of the sidebar, etc. Essentially, all the stuff that lets the UI stay consistent between sessions, but none of the critical data.

## Library export

You can export your library at any time via the ‘Export library’ section of the UI. The export action compiles a `.zip` file containing all your documents as Markdown (`.md`) documents within their respective folders.

The compilation of the `.zip` file is all handled completely client-side and doesn’t send any data to a server. The ‘download’ of the file is purely just a means of sending data from your browser to your device’s file system.

Currently it’s not possible to download your daily counts data directly from the Lorist UI, but can be inspected and copied out of the IndexedDB via your browser’s Dev Tools.
