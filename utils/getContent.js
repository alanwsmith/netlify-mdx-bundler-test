import { bundleMDX } from 'mdx-bundler'

export const getContent = async () => {
  return <div>asdf</div>
}

export const getContent2 = async () => {
  const mdxSource = `
---
title: Example Post
published: 2021-02-13
description: This is some description
---

# Wahoo

Here's a **neat** demo:

`.trim()

  const result = await bundleMDX(mdxSource)

  const { code, frontmatter } = result
  return {
    frontmatter,
    code,
  }
}
