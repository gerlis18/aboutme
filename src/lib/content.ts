type BlogEntry = {
  data: {
    draft: boolean;
    pubDate: Date;
  };
};

type ProjectEntry = {
  data: {
    order: number;
  };
};

export function publishedPosts<T extends BlogEntry>(posts: T[]): T[] {
  return posts
    .filter(({ data }) => !data.draft)
    .toSorted(
      (left, right) => right.data.pubDate.valueOf() - left.data.pubDate.valueOf(),
    );
}

export function orderedProjects<T extends ProjectEntry>(projects: T[]): T[] {
  return projects.toSorted((left, right) => left.data.order - right.data.order);
}

export function formatDate(date: Date, month: 'short' | 'long'): string {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month,
    day: month === 'short' ? '2-digit' : 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
