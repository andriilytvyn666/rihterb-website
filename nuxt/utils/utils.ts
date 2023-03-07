export const getLocalizedString = (
  locale: string,
  string: localeString
): string => {
  return locale === 'en' ? string.en : string.uk
}
