import React from 'react';
import Home from './pages/home';
import { parseRoute } from './lib';
import Header from './components/header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const route = parseRoute(window.location.hash);
      this.setState({ route });
    });
  }

  render() {
    return (
      <div className='flex flex-col items-center'>
        <div className="flex flex-col items-center xl:items-start gap-8 py-5 px-[10px]">
          <Header />
          <Home />
        </div>
      </div>
    );
  }
}
