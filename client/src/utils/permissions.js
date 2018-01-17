export const isAdmin = (currentUser) => {
  return currentUser.is_admin
}

export const isStaff = (current_user) => {
  let regex = new RegExp('(^ta$|^teacher$)')
  return currentUser.is_admin || regext.test(currentUser.role);
}

export const isTeacher = (currentUser) => {
  return currentUser.role === 'teacher' ? true : false
}

export const isTa = (currentUser) => {
  return currentUser.role === 'ta' ? true : false

}

export const isStudent = (currentUser) => {
  return currentUser.role === 'student' ? true : false
}
