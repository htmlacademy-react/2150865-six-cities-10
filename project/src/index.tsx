import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {offerCard,offerList} from './mocks/offerList';
// import {POINTS} from './mocks/points';
// import {CITY} from './mocks/city';

const Setting = {
  PLACES_COUNT: 3,
};

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement,
// );
//
// root.render(
//   <React.StrictMode>
//     <App points={POINTS} city={CITY} />
//     {/*<App placesCount={Setting.PLACES_COUNT} offers={offers} offerListForPage={offerList} offerList={offerCard}/>*/}
//   </React.StrictMode>,
// );
ReactDOM.render(
  <React.StrictMode>
    {/*<App points={POINTS} city={CITY} />*/}
    <App placesCount={Setting.PLACES_COUNT} offers={offers} offerListForPage={offerList} offerList={offerCard}/>
  </React.StrictMode>,
  document.getElementById('root')
);
