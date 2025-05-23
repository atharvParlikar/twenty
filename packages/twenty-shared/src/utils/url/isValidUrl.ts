import { absoluteUrlSchema } from 'src/utils/url/absoluteUrlSchema';

export const isValidUrl = (url: string): boolean => {
  const result = absoluteUrlSchema.safeParse(url);

  return result.success;
};
