// documents
type Homepage = {
  about: aboutInfo
  blocks: homeCard[]
}

type Header = {
  logo: image
  title: localeString
  buttons: headerButton[]
  buttonMobile: headerButton
}

type VideoPage = {
  youtubeLink: string
  title: localeString
  text: localeText
}

type EventPage = {
  title: localeString
  text: localeText
  image: image
  buttons: buttonLink[]
}

// objects
type aboutInfo = {
  image: image
  name: localeString
  subtitle: localeString
  buttons: buttonLink[]
}

type homeCard = {
  image: image
  textOnTop: boolean
  title: localeString
  description: localeText
  button: buttonLink
}

type buttonLink = {
  openInNewTab: boolean
  primary: boolean
  title: localeString
  link: string
  icon: string
}

type headerButton = {
  openInNewTab: boolean
  title: localeString
  link: string
  icon: string
}

// deprecated
type About = {
  photo: image
  name: localeString
  subtitle: localeString
  description: localeString
  listenName: localeString
  listenLink: string
  socialName: localeString
  socialLink: string
}

type Album = {
  image: image
  title: localeString
  text: localeString
  buttonName: localeString
}

type Magazine = {
  images: image[]
  title: localeString
  text: localeString
  buttonName: localeString
}

type Movie = {
  images: image[]
  title: localeString
  text: localeString
  buttonName: localeString
}

type Support = {
  title: localeString
  text: localeString
  buttonName: localeString
}

type Concert = {
  title: localeString
  text: localeString
  buttonName: localeString
}

type ConcertPage = {
  title: localeString
  poster: image
  description: localePortableText
  tickets: {
    enabled: boolean
    look: string
    text: localeString
    link: string
  }
  instagram: {
    enabled: boolean
    look: default
    text: localeString
    link: string
  }
}

type MainPage = {
  about: About
  concert: Concert
  album: Album
  magazine: Magazine
  movie: Movie
  minecraft: Minecraft
  support: Support
}

type SupportPage = {
  images: {
    imageBack: image
    imageMiddle: image
    imageFront: image
  }
  title: localeString
  text: localeString
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

type AlbumPage = {
  image: image
  title: localeString
  text: localePortableText
  buttons: {
    magazine: {
      name: localeString
    }
    listen: buttonLink
  }
  spotifyLink: string
}

type MagazinePage = {
  title: localeString
  text: localeString
  pages: image[]
}

type Footer = {
  spotify: string
  youtubemusic: string
  applemusic: string
  instagram: string
  telegram: string
  youtube: string
  patreon: string
  bandcamp: string
}

type navLink = {
  name: localeString
  link: striing
}

type localeString = {
  en: string
  uk: string
}

type localePortableText = {
  en: Any
  uk: Any
}

type localeText = {
  en: Any
  uk: Any
}

type image = {
  asset: { _ref: string }
}

type pageBlock = {
  name: string
  visible: boolean
}

type WebsiteBlocks = {
  order: pageBlock[]
}
