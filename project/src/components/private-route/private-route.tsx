import {AppRoute, AuthorizationStatus} from '../../const';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps ={
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Main}/>
  );
}
export default PrivateRoute;
