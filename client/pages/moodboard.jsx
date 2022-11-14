import React from 'react';
import Header from '../components/header';

export default class Moodboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodboard: null
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
