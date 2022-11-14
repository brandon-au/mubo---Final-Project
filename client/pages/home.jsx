import React from 'react';
import HelloWorld from '../components/hello-world';
import Header from '../components/header';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodboards: []
    };
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <>
        <div>
          <Header />
        </div>
        {/* rendered moodboards */}
        <div>
          {/* <a
          href={`#moodboards?moodboardId=${moodboardId}`} /> */}
          <HelloWorld />
        </div>
      </>
    );
  }
}

// moodboard render to home
// function Moodboard(props) {

// }
