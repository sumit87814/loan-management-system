import { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';
import Loading from '../pages/Loading';

const PublicRoute = ({ component: Component, ...rest }) => {
    const { user, loading } = useContext(UserContext);
    if(loading){
        return <Loading />
    }
    return ( !user ? <Route {...rest} render={(props) => (<Component {...props} />)}/> : <Navigate to='/profile'/> )
}

export default PublicRoute