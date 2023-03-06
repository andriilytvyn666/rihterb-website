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
  title: string
  link: string
  icon: string
}
