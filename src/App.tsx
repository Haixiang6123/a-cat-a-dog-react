import React, {Component} from 'react';
import {updateAxios} from "./store/axios/actions"
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
import {connect} from "react-redux"
import {IAxiosStore} from "./store"
import {IAppActionProps, IAppStoreProps, IAppState, IAppProps} from "./env"
import Child from './Child'
import './App.scss'

const Wrapper = styled.div`
  text-align: center;
  color: red;
  .change {
    color: green;
  }
`

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      animals: []
    }
  }

  public async componentDidMount() {
    await this.props.updateAxios('DOG')
    const response = await this.props.axios.get('/images/search')
    const votes = await this.props.axios.get('/votes?sub_id=hai_test')
    console.log(votes)
    this.setState({
      animals: response.data
    })
  }

  private vote = async () => {
    const { animals } = this.state
    await this.props.axios.post('/votes', {
      image_id: 'eUKD6V2pm',
      sub_id: 'hai_test',
      value: 1
    })
  }

  render() {
    return (
      <Wrapper>
        Test
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <div className="change">
          Change Color
        </div>
        <Child/>
        <div className="hello">
          Yes {this.props.a}
        </div>
        {
          this.state.animals.map(animal =>
            <div key={animal.id}>
              <img src={animal.url} alt="animalImg"/>
              <div>
                {JSON.stringify(animal)}
              </div>
              <Button onClick={this.vote}>Vote</Button>
            </div>
          )
        }
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: IAxiosStore): IAppStoreProps => ({
  axios: state.axios
})
const mapDispatchToProps: IAppActionProps = {
  updateAxios
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
