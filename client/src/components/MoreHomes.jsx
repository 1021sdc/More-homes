import React from 'react';
import axios from 'axios';
import ListOfHomes from './ListOfHomes.jsx';

class MoreHomes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      data: [],
    }

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

    // ?id=${params.get('id')}`)
    // window.addEventListener("resize", this.handleResize);
    // const search = window.location.search;
    // const params = new URLSearchParams(search);

  componentDidMount(e) {
    axios.get(`/MoreHomes`)
      .then((response) => {
        this.setState({ data: response.data })
        console.log('response: ', response)
      })
      .catch((error) => {
        console.log('GET error: ', error)
      });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div className="module">
        <div className="moduleTitle">
          <span>More homes you may like</span>
        </div>
        <ListOfHomes data={this.state.data}
          height={this.state.height}
          width={this.state.width}
        />
      </div>
    )
  }
}

export default MoreHomes;
