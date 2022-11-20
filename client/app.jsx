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

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    // if (route.path === 'products') {
    //   const productId = route.params.get('productId');
    //   return <ProductDetails productId={productId} />;
    // }
    // return <NotFound />;
    return <Home />;
  }

  // test
  render() {
    return (
      <>
        <div className="flex justify-center lg:pl-80">
          <Header />
        </div>
        <Home />
      </>
    );
  }
}
