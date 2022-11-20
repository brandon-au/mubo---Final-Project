import React from 'react';
import Header from '../components/header';

export default class Moodboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodboard: null // TODO: remove you don't need this because you can't store information about the overview
      // TODO: should include name, id, url whatever you need here
      // name: "",
      // id: 0 or whatever number,
      // urls: [],
    };
  }

  componentDidMount() {
    fetch(`/api/moodboard/${this.props.moodboardId}`)
      .then(res => res.json())
      .then(moodboard => this.setState({ moodboard }));
  }

  render() {
    if (!this.state.moodboard) return null;
    return (
      <Header />
    );
  }
}
