type About = {
  _id: string
  name: localeString
  photo: image
  subtitle: localeString
  description: localeString
  links: Array<ListenLink>
}

type localeString = {
  en: string
  uk: string
}

type AlbumPage = {
  logo: image
  title: localeString
  description: localeString
  albumImage: image
  player: string
  albumId: string
}

type Header = {
  logo: image
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
  text: localeString
  player: string
  albumId: string
}

type Support = {
  title: localeString
  text: localeString
  patreonLink: string
  bandcampLink: string
  diakaLink: string
}

type image = {
  asset: { _ref: string }
}

type video = {
  _id: string
  youtubeId: string
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
  link: string
  icon: string
}
