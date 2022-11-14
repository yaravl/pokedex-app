export const getRequestIdNumber = (obj: any, str: string): number =>
  +obj[str].url.slice(0, -1).split(`/${str.replace('_', '-')}/`)[1];
