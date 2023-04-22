type About = {
  _id: string
  photo: image
  name: localeString
  subtitle: localeString
  description: localeString
  listenName: localeString
  listenLink: string
  socialName: localeString
  socialLink: string
}

type localeString = {
  en: string
  uk: string
}

type localePortableText = {
  en: Any
  uk: Any
}

type AlbumSection = {
  _id: string
  imageLarge: image
  imageSmall: image
  title: localeString
  text: localeString
  buttonName: localeString
}

type AlbumPage = {
  logo: image
  title: localeString
  description: localeString
  albumImage: image
  player: string
  link: string
  bandcampLink: string
}

type Header = {
  logo: image
  linkTelegram: string
  linkInstagram: string
}

type FooterLinks = {
  spotify: string
  youtubemusic: string
  applemusic: string
  instagram: string
  telegram: string
  youtube: string
  patreon: string
  bandcamp: string
}

type Post = {
  title: localeString
  subtitle: localeString
  text: localePortableText
  player: string
  link: string
  bandcampLink: string
}

type Support = {
  title: localeString
  text: localeString
  buttonName: localeString
  patreonLink: string
  bandcampLink: string
  diakaLink: string
  patreon: {
    name: localeString
    link: string
  }
  bandcamp: {
    name: localeString
    link: string
  }
  paypal: {
    name: localeString
    link: string
  }
  diaka: {
    name: localeString
    link: string
  }
  mono: {
    name: localeString
    link: string
  }
}

type image = {
  asset: { _ref: string }
}

type video = {
  _id: string
  orderId: int
  youtubeLink: string
}

type ListenLink = {
  _id: string
  title: string
  link: string
  logo: string
}

type NavLink = {
  _id: string
  title: localeString
  linkType: string
  target: string
  link: string
  icon: string
}
