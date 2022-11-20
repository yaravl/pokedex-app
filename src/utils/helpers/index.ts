export const getRequestIdNumber = (obj: any, str: string): number =>
  +obj[str].url.slice(0, -1).split(`/${str.replace('_', '-')}/`)[1];

export const snakeCaseToTitleCase = (str: string) =>
  str.replace(/^(.)|-+(.)/g, (_, p1, p2) => (p1 ? p1.toUpperCase() : ` ${p2.toUpperCase()}`));
