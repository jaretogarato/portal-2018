import {
  isAdmin,
  isStaff,
  isTeacher,
  isTa,
  isStudent,
} from '../../utils/permissions';
import { connect } from 'react-redux';


const options = {
  isAdmin,
  isStaff,
  isTeacher,
  isTa,
  isStudent,
}

const CanView = ({ permission, user, children }) => {
  const f = options[permission];
  if ( f(user) ) 
    return children;
  else
    return null;
}

const mapStateToProps = (state) => {
  return { user: state.permissions }
}

export default connect(mapStateToProps)(CanView);
