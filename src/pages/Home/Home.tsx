import * as React from 'react'
// Material
import Icon from '@material-ui/core/Icon'
// Redux
import {IStore} from "../../store"
import {connect} from "react-redux"
// Services
import imagesService from '../../services/images'
import votesService from '../../services/votes'
import favouritesService from '../../services/faviourites'
// Types
import {IHomeActionProps, IHomeProps, IHomeState} from "./index"
// Styles
import {
  Wrapper,
  Header, UserButton, SettingButton,
  ImageWrapper, Image,
  ActionDiv, VoteButton, NextButton, FavouriteButton, UploadButton, AnalyzeButton
} from "./styles"
import { IImage, } from "../../env"
import {AxiosResponse} from "axios"
import {Snackbar} from "@material-ui/core"
import TransitionUp from "../../components/TransitionUp"

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      images: [],
      imageInput: React.createRef(),
      isOpenMsg: false,
      msg: ''
    }
  }

  public async componentDidMount() {
    await this.updateImage()
  }

  private vote = async () => {
    await votesService.addVote({
      sub_id: 'hai_test',
      image_id: this.state.images[0].id,
      value: 1
    })
    this.setState({isOpenMsg: true, msg: 'Vote it'})
  }

  private onChangeImage = async () => {
    const {imageInput} = this.state
    if (!imageInput.current || !imageInput.current.files || imageInput.current.files.length === 0) {
      return
    }

    const data = new FormData();
    data.append('sub_id', 'hai_test');
    data.append('file', imageInput.current.files[0]);
    const response: AxiosResponse = await imagesService.uploadImage(data)
    // Error
    if (response.status.toString().startsWith('2')) {
      this.setState({isOpenMsg: true, msg: 'Upload successfully'})
    }
    else {
      this.setState({isOpenMsg: true, msg: response.data.message})
    }
  }

  private onCloseMsg = async () => {
    this.setState({isOpenMsg: false})
  }

  private updateImage = async () => {
    const images: Array<IImage> = await imagesService.getImages()
    this.setState({ images })
  }

  private favourite = async () => {
    await favouritesService.addFavourite({
      sub_id: 'hai_test',
      image_id: this.state.images[0].id
    })
    this.setState({isOpenMsg: true, msg: 'Add to favourite'})
  }

  public render() {
    const {images, imageInput, isOpenMsg, msg} = this.state
    return (
      <Wrapper>
        {
          images.map(image =>
            <div key={image.id}>
              <Header>
                <UserButton > <Icon>person</Icon> </UserButton>
                <span>🐱A🐶</span>
                <SettingButton > <Icon>settings</Icon> </SettingButton>
              </Header>
              <ImageWrapper>
                <Image src={image.url} alt="Animal Image"/>
              </ImageWrapper>
              <ActionDiv>
                <VoteButton color="primary" onClick={this.vote}> <Icon fontSize="large">thumb_up</Icon> </VoteButton>
                <input onChange={this.onChangeImage} accept="image/*" style={{display: 'none'}} id="new-file" type="file" ref={imageInput} />
                <label htmlFor="new-file">
                  <UploadButton component="span"><Icon>cloud_upload</Icon></UploadButton>
                </label>
                <FavouriteButton onClick={this.favourite}> <Icon fontSize="large">star</Icon> </FavouriteButton>
                <AnalyzeButton><Icon>show_chart</Icon></AnalyzeButton>
                <NextButton color="secondary" onClick={this.updateImage}> <Icon fontSize="large">arrow_forward_ios</Icon> </NextButton>
              </ActionDiv>

              <Snackbar open={isOpenMsg} TransitionComponent={TransitionUp} onClose={this.onCloseMsg} message={msg}/>
            </div>
          )
        }
      </Wrapper>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  axios: state.axios,
  breeds: state.breeds,
  categories: state.categories
})
const mapDispatchToProps: IHomeActionProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
