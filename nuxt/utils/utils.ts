export const getLocalizedString = (
  locale: string,
  string: localeString
): string => {
  return locale === 'en' ? string.en : string.uk
}

export const getLocalizedPortableText = (
  locale: string,
  portableText: localePortableText
) => {
  return locale === 'en' ? portableText.en : portableText.uk
}
