import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
// import CakeContainer from './components/CakeContainer'
// import HookCakeContainer from './components/HookCakeContainer'
// import PizzaContainer from './components/PizzaContainer'
// import CakeBuyNumberContainer from './components/CakeBuyNumberContainer'
// import ItemContainer from './components/itemContainer'
import UserContainer from './components/UserContainer'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake />
        <ItemContainer />
        <HookCakeContainer />
        <CakeContainer />
        <PizzaContainer />
        <CakeBuyNumberContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
