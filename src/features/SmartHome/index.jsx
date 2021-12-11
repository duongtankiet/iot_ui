import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import Controllers from './pages/Controllers';
import History from './pages/History';
import MainPage from './pages/Main';
import HisAir from './pages/HisAir'
import HisBat from './pages/HisBat';
import HisKit from './pages/HisKit';
import HisBed1 from './pages/HisBed1';
import HisBed2 from './pages/HisBed2';
import HisLiv from './pages/HisLiv';
//import { Connector } from 'mqtt-react-hooks';

// import ControllersApi from './components/ControllersApi'

Photo.propTypes = {};

function Photo(props) {
  const match = useRouteMatch();
  console.log({ match });
  

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path={`${match.url}/controllers`} component={Controllers} />
      <Route path={`${match.url}/history`} component={History} />
      <Route path={`${match.url}/airconditional`} component={HisAir} />
      <Route path={`${match.url}/livingroomlight`} component={HisLiv} />
      <Route path={`${match.url}/bathroomlights`} component={HisBat} />
      <Route path={`${match.url}/kitchenlights`} component={HisKit} />
      <Route path={`${match.url}/bedroomlights1`} component={HisBed1} />
      <Route path={`${match.url}/bedroomlights2`} component={HisBed2} />


      <Route component={NotFound} />
    </Switch>
  );
}

export default Photo;