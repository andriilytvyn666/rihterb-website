import { defineStore } from 'pinia'

export const useSanityStore = defineStore('sanity-store', () => {
  const about = ref<About>()
  const support = ref<Support>()
  const post = ref<Post>()
  const youtubeVideos = ref<video[]>()
  const navLinks = ref<NavLink[]>()
  const header = ref<Header>()
  const footerLinks = ref<FooterLinks>()
  const albumPage = ref<AlbumPage>()

  const sanityFetch = async <T>(ref: Ref, query: string): Promise<T> => {
    if (ref.value !== undefined) return ref.value

    const { data } = await useSanityQuery<T>(query)
    ref.value = data.value

    return ref.value
  }

  const getAbout = async (): Promise<About> =>
    sanityFetch<About>(
      about,
      groq`*[_type == "about"][0] {_id, name, photo, subtitle, description, links}`
    )

  const getSupport = async (): Promise<Support> =>
    sanityFetch<Support>(
      support,
      groq`*[_type == "support"][0] {_id, title, text, patreonLink, bandcampLink, diakaLink}`
    )

  const getPost = async (): Promise<Post> =>
    sanityFetch<Post>(
      post,
      groq`*[_type == "post"][0] {_id, title, subtitle, text, player, link, bandcampLink}`
    )

  const getYoutubeVideos = async (): Promise<video[]> =>
    sanityFetch<video[]>(
      youtubeVideos,
      groq`*[_type == "videos"] | order(orderId asc) {_id, orderId, youtubeLink}`
    )

  const getNavLinks = async (): Promise<NavLink[]> =>
    sanityFetch(
      navLinks,
      groq`*[_type == "nav"] {_id, title, linkType, target, link, icon}`
    )
  const getHeader = async (): Promise<Header> =>
    sanityFetch(
      header,
      groq`*[_type == "header"][0] {_id, logo, linkTelegram, linkInstagram}`
    )

  const getAlbumPage = async (): Promise<AlbumPage> =>
    sanityFetch(
      albumPage,
      groq`*[_type == "album"][0]
      {
        _id,
        logo,
        title,
        description,
        albumImage,
        player,
        link,
        bandcampLink
      }`
    )

  const getFooterLinks = async (): Promise<FooterLinks> =>
    sanityFetch(
      footerLinks,
      groq`*[_type == "footerLinks"][0]
      {
        _id,
        spotify,
        youtubemusic,
        applemusic,
        instagram, 
        telegram,
        youtube,
        patreon,
        bandcamp
      }`
    )

  return {
    getAbout,
    getSupport,
    getPost,
    getYoutubeVideos,
    getNavLinks,
    getHeader,
    getFooterLinks,
    getAlbumPage,
  }
})
