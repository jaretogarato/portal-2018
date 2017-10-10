10.times do 
  @course = Course.create(
    course_type: Faker::Zelda.game,
    term: Faker::Zelda.location,
    year: Faker::Number.number(4)
  )
   
    10.times do    
      section = Section.create(
        title: Faker::Company.catch_phrase,
        course_id: @course.id
      )

      10.times do 
        group = Group.create(
          title: Faker::Company.catch_phrase,
          section_id: section.id
        )
      end
    end
end

admin = User.create(
  first_name: 'admin',
  last_name: 'admin',
  email: 'admin@admin.com',
  password: 'password',
  is_admin: true
  )

  1.times do 
    student = User.create(
      first_name: 'student',
      last_name: 'student',
      email: 'test@test.com',
      password: 'password',
      is_admin: false
      )

        Enrollment.create(
          role: 'student',
          sub_role: Faker::Company.bs,
          user_id: student.id,
          course_id: @course.id
        )
  end

puts "Success"