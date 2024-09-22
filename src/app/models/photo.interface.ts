import { IPhotoSrc } from "./photosrc.interface"

export interface IPhoto {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string
  src: IPhotoSrc
  liked: boolean
  alt: string
}