export interface filmModel {
  status: boolean
  msg: string
  movie: movieModel
  episodes: episodesModel[]
}
export interface movieModel {
  modified: any
  _id: string
  name?: string
  origin_name: string
  content: string
  type: string
  status: string
  thumb_url?: string
  poster_url: string
  is_copyright: string
  sub_docquyen: string
  chieurap: string
  trailer_url: string
  time: string
  episode_current: string
  episode_total: string
  quality: string
  lang: string
  notify: string
  showtimes: string
  slug: string
  year: number
  actor: any
  director: any
  category: any
  country: Country[]
}
export interface episodesModel {
  server_name: string
  server_data: serverDataModel[]
}
export interface serverDataModel {
  name: string
  slug: string
  filename: string
  link_embed: string
  link_m3u8: string
}
export interface Country {
  name: string
}
