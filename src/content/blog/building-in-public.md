---
title: "Building this site in public"
description: "A placeholder dispatch about making a personal corner of the web feel personal."
pubDate: 2026-07-18
tags: ["meta", "astro"]
draft: false
---

This is placeholder copy, deliberately. Replace it with the story behind your
work and the decisions that shaped it.

## A small technical note

Astro keeps most of this page as HTML and only hydrates the parts that move:

```ts
const page = {
  shipped: true,
  javascript: "only where it earns its place",
};
```

That is the working rule for this site: start quiet, then add motion with
intent.
