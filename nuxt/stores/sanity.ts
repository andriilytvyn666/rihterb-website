import { defineStore } from 'pinia'

export const useSanityStore = defineStore(
  'sanity-store',
  () => {
    const post = ref<Post>()
    const youtubeVideos = ref<video[]>()
    const header = ref<Header>()
    const footerLinks = ref<FooterLinks>()
    const albumPage = ref<AlbumPage>()
    const mainPage = ref<MainPage>()
    const supportPage = ref<SupportPage>()
    const minecraftPage = ref<MinecraftPage>()

    const sanityFetch = async <T>(ref: Ref, query: string): Promise<T> => {
      if (ref.value !== undefined) return ref.value

      const { data } = await useSanityQuery<T>(query)
      ref.value = data.value

      return ref.value
    }

    const getMainPage = async (): Promise<MainPage> =>
      sanityFetch<MainPage>(
        mainPage,
        groq`*[_type == "mainPage"][0] { about, album, magazine, minecraft, support }`
      )

    const getMinecraftPage = async (): Promise<MinecraftPage> =>
      sanityFetch<MinecraftPage>(
        minecraftPage,
        groq`*[_type == "minecraftPage"][0] { title, text, features, ip, buttons }`
      )

    const getSupportPage = async (): Promise<SupportPage> =>
      sanityFetch<SupportPage>(
        supportPage,
        groq`*[_type == "supportPage"][0] { images, title, text, patreon, bandcamp, paypal, diaka, mono }`
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
      getMinecraftPage,
      getMainPage,
      getSupportPage,
      getPost,
      getYoutubeVideos,
      getHeader,
      getFooterLinks,
      getAlbumPage,
    }
  }
  // {
  //   persist: {
  //     storage: persistedState.localStorage,
  //   },
  // }
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSanityStore, import.meta.hot))
}
