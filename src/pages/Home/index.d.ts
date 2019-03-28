import {IAxiosAction} from "./store/axios"
import {AxiosInstance} from "axios"
import {IBreed, ICategory, IImage} from "../../env"

export interface IHomeActionProps {
}
export interface IHomeProps extends IHomeActionProps {
  axios: AxiosInstance
  breeds: Array<IBreed>
  categories: Array<ICategory>
}
export interface IHomeState {
  images: Array<IImage>
}
