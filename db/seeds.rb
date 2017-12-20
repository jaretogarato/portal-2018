require 'faker'
require_relative 'lecture_content'

course_name = [
  'Fall 2016 U of U Pro Ed Web Development',
  'Fall 2016 Full Stack Web Development',
  'Winter 2016 U of U Pro Ed Web Development',
  'Winter 2016 Full Stack Web Development',
  'Summer 2017 U of U Pro Ed Web Development',
  'Summer 2017 Full Stack Web Development',
  'Spring 2017 U of U Pro Ed Web Development',
  'Spring 2017 Full Stack Web Development',
  'Fall 2017 U of U Pro Ed Web Development',
  'Fall 2017 Full Stack Web Development',
]
course_type = [
  'Full-Time',
  'Part-Time',
  'Full-Time',
  'Part-Time',
  'Full-Time',
  'Part-Time',
  'Full-Time',
  'Part-Time',
  'Full-Time',
  'Part-Time',
]

course_year = [2016, 2016, 2016, 2016, 2017, 2017, 2017, 2017, 2017, 2017]

10.times do |i|
  @course = Course.create(
    course_type: course_name[i],
    term: course_type[i],
    year: course_year[i],
  )
  11.times do |j|
    section = Section.create(
      title: "Week #{j + 1}",
      course_id: @course.id
    )
    5.times do |k|
      group_prog_lang = Faker::ProgrammingLanguage.name
      group_title = "Day #{k + 1}: #{group_prog_lang}"
      group = Group.create(
        title: group_title,
        section_id: section.id
      )
      3.times do |l|
        lecture_scientist = Faker::Science.scientist
        lecture_moon = Faker::Space.moon
        lecture = Lecture.create(
          title: "Lecture #{l + 1}: #{group_prog_lang}--the #{lecture_scientist} of #{lecture_moon}",
          content: lecture_seed.sample,
          group_id: group.id
        )
      end
    end
  end
end

puts "10 courses seeded"
puts "11 sections seeded"
puts "5 groups seeded"
puts "3 lectures seeded"

admin = User.create(
  first_name: 'admin',
  last_name: 'admin',
  email: 'admin@admin.com',
  password: 'password',
  bio: "This is a really good bio don't ya know...",
  nickname: 'Spencer is BOSS',
  is_admin: true
)

1.times do
  student = User.create(
    first_name: 'student',
    last_name: 'student',
    email: 'test@test.com',
    password: 'password',
    bio: "This is a really good bio don't ya know...",
    nickname: 'Spencer is BOSS',
    is_admin: false
  )
  3.times do |i|
    Enrollment.create(
      role: 'student',
      sub_role: Faker::Company.bs,
      user_id: student.id,
      course_id: "#{i + 1}".to_i
    )
  end
end

puts "Test Admin seeded email: admin@admin.com and password: password"
puts "Test Student seeded email: test@test.com and password: password"

20.times do
  student = User.create(
    email: Faker::Internet.email,
    password: 'password',
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    bio: "#{Faker::Demographic.race},
    #{Faker::Demographic.educational_attainment},
    #{Faker::Demographic.marital_status},
    #{Faker::Demographic.sex},
    #{Faker::Demographic.height}",

    nickname: Faker::Pokemon.name,
    invitation_accepted_at: Time.now
  )
    Enrollment.create(
      role: 'student',
      sub_role: Faker::Company.bs,
      user_id: student.id,
      course_id: @course.id
    )
end

puts "20 students seeded with enrollment, plus faker email and password password."

# SOME NOTES TEEHEE
