export const isAdmin = (currentUser) => {
  return currentUser.is_admin
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
