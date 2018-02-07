import { connect } from 'react-redux';
import { fetchUsers } from '../../redux/users';
import App from './App';

const mapStateToProps = (state) => ({
  users: state.users.users,
})
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
