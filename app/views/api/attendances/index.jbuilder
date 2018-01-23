json.array! @attendances do |attendance|
  user = attendance.user
  json.id user.id
  json.first_name user.first_name
  json.last_name user.last_name
  json.image user.image
  json.role user.enrollments.where("course_id = '#{attendance.course_id}'").first.role
  json.status attendance.status
end
