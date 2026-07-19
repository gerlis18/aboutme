import { describe, expect, it } from 'vitest';

import { formatDate, orderedProjects, publishedPosts } from './content';

describe('publishedPosts', () => {
  it('excludes drafts and sorts newest posts first', () => {
    const posts = [
      { data: { draft: false, pubDate: new Date('2025-01-01') } },
      { data: { draft: true, pubDate: new Date('2026-01-01') } },
      { data: { draft: false, pubDate: new Date('2025-06-01') } },
    ];

    expect(publishedPosts(posts)).toEqual([posts[2], posts[0]]);
  });
});

describe('orderedProjects', () => {
  it('returns projects by ascending content order', () => {
    const projects = [
      { data: { order: 3 } },
      { data: { order: 1 } },
      { data: { order: 2 } },
    ];

    expect(orderedProjects(projects)).toEqual([
      projects[1],
      projects[2],
      projects[0],
    ]);
  });
});

describe('formatDate', () => {
  it('keeps date-only frontmatter on the authored calendar day', () => {
    expect(formatDate(new Date('2026-07-18'), 'short')).toBe('Jul 18, 2026');
  });
});
