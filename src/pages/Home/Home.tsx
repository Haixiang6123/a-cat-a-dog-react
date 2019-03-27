import * as React from 'react'
import {connect} from "react-redux"
import {IHomeActionProps, IHomeProps, IHomeState, IHomeStoreProps} from "./index"
import {IAxiosStore} from "../../store"
import {updateAxios} from "../../store/axios/actions"
import imagesService from '../../services/images'
// Styles
import './styles'

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      animals: []
    }
  }

  public async componentDidMount() {
    await this.props.updateAxios('DOG')
    const resources = await imagesService.getImages()
    this.setState({
      animals: resources
    })
  }

  public render() {
    return (
      <div>
        {
          this.state.animals.map(animal =>
            <div key={animal.id}>
              <img src={animal.url} alt="animalImg"/>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state: IAxiosStore): IHomeStoreProps => ({
  axios: state.axios
})
const mapDispatchToProps: IHomeActionProps = {
  updateAxios
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
