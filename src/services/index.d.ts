// Image Service
export interface IGetImagesParams {
  size?: 'full' | 'med' | 'small' | 'thumb'
  mime_types?: 'jpg' | 'png' | 'gif' | 'jpg,gif,png'
  format?: 'json'
  order?: 'RANDOM' | 'ASC' | 'DESC'
  page?: number
  limit?: number
  category_ids?: string
}

export interface IGetImageByIdParams {
  sub_id?: string
  size?: 'full' | 'med' | 'small' | 'thumb'
  include_vote?: string
  include_favourite?: string
}

export interface IGetUploadedImagesParams {
  limit?: number
  page?: number
  order?: 'DESC' | 'ASC'
  sub_id?: string
  breed_ids?: string
  category_ids?: string
  format?: 'json'
  original_filename?: string
}

export interface IUploadImageData {
  file: File
  sub_id?: string
}

// Favourites Service
export interface IGetFavouritesParams {
  sub_id: string
}

export interface IAddFavouriteData {
  image_id: string
  sub_id: string
}

// Votes Service
export interface IGetVotesParams {
  sub_id?: string
}

export interface IAddVoteData {
  image_id: string
  sub_id: string
  value: number
}

// Breeds Service
export interface IGetBreedsParams {
  limit?: number
  page?: number
}


// Sources Service
export interface IGetSourcesParams {
  limit?: number
  page?: number
}
