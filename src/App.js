import React, { Suspense, lazy } from 'react';
import './App.scss';
import { Route, Link } from "react-router-dom"
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import NoticeNav from './components/content/NoticeNav'

const SignUp = lazy(() => import('./formContainer/SignUp'));

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <NoticeNav />
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={SignUp} />
        </Suspense>
        <Footer />
      </div>
    );
  }
}

export default App;
