import { IPhoto } from "./photo.interface"

export interface IPaginationData {
  page: number
  per_page: number
  photos: IPhoto[]
  total_results: number
  prev_page: string
  next_page: string
}