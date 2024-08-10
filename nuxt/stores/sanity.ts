import { defineStore } from 'pinia'

export const useSanityStore = defineStore('sanity-store', () => {
  const header = ref<Header>()
  const footer = ref<Footer>()
  const mainPage = ref<MainPage>()
  const supportPage = ref<SupportPage>()
  const albumPage = ref<AlbumPage>()
  const magazinePage = ref<MagazinePage>()
  const moviePage = ref<MoviePage>()
  const websiteBlocks = ref<WebsiteBlocks>()
  const concertPage = ref<ConcertPage>()

  const homepage = ref<Homepage>()

  const sanityFetch = async <T>(ref: Ref, query: string): Promise<T> => {
    if (ref.value !== undefined) return ref.value

    const { data } = await useSanityQuery<T>(query)
    ref.value = data.value

    return ref.value
  }

  const getHomepage = async (): Promise<Homepage> =>
    sanityFetch<Homepage>(
      homepage,
      groq`*[_type == "homepage"][0] { about, blocks }`
    )

  const getWebsiteBlocks = async (): Promise<WebsiteBlocks> =>
    sanityFetch<WebsiteBlocks>(
      websiteBlocks,
      groq`*[_type == "websiteBlocks"][0] { order }`
    )

  const getConcertPage = async (): Promise<ConcertPage> =>
    sanityFetch<ConcertPage>(
      concertPage,
      groq`*[_type == "concertPage"][0] { title, poster, description, tickets, instagram }`
    )

  const getMagazinePage = async (): Promise<MagazinePage> =>
    sanityFetch<MagazinePage>(
      magazinePage,
      groq`*[_type == "magazinePage"][0] { title, text, pages }`
    )

  const getMoviePage = async (): Promise<MoviePage> =>
    sanityFetch<MoviePage>(
      moviePage,
      groq`*[_type == "moviePage"][0] { title, youtubeLink, listenText, magazineText }`
    )

  const getMainPage = async (): Promise<MainPage> =>
    sanityFetch<MainPage>(
      mainPage,
      groq`*[_type == "mainPage"][0] { about, concert, album, magazine, movie, support }`
    )

  const getSupportPage = async (): Promise<SupportPage> =>
    sanityFetch<SupportPage>(
      supportPage,
      groq`*[_type == "supportPage"][0] { images, title, text, patreon, bandcamp, paypal, diaka, mono }`
    )

  // TODO: refactor
  const getHeader = async (): Promise<Header> =>
    sanityFetch(
      header,
      groq`*[_type == "header"][0] {logo, navLinks, navLinksLeft, navLinksRight, listenLink, socialsLink }`
    )

  const getAlbumPage = async (): Promise<AlbumPage> =>
    sanityFetch(
      albumPage,
      groq`*[_type == "albumPage"][0]
      {
        image,
        title,
        text,
        buttons,
        spotifyLink
      }`
    )

  const getFooter = async (): Promise<Footer> =>
    sanityFetch(
      footer,
      groq`*[_type == "footerLinks"][0]
      {
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
    getHomepage,

    getConcertPage,
    getMainPage,
    getSupportPage,
    getHeader,
    getFooter,
    getAlbumPage,
    getMagazinePage,
    getMoviePage,
    getWebsiteBlocks,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSanityStore, import.meta.hot))
}
