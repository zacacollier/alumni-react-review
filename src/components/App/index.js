import { connect } from 'react-redux';
import { fetchUsers } from '../../redux/users';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(null, mapDispatchToProps)(App);
