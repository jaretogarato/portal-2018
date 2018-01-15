require 'faker'
require_relative 'lecture_content'

course_type = [
  'U of U Pro Ed Web Development',
  'Full Stack Web Development',
  'Part-Time Web Development',
  'Part-Time UX Design',
  'U of U Pro Ed Web Development',
  'Full Stack Web Development',
  'Part-Time Web Development',
  'Part-Time UX Design',
  'U of U Pro Ed Web Development',
  'Full Stack Web Development',
]
course_term = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
  'Winter',
  'Spring',
  'Summer',
  'Fall',
  'Winter',
  'Spring',
]

badges = [
  { title: 'Team Player', icon: 'teamwork', description: 'Works well in a team setting.' },
  { title: 'Leadership', icon: 'leader', description: 'Shows good leadership qualities' },
  { title: 'Coding Aptitude', icon: 'coder', description: 'Shows considerable coding aptitude' },
  { title: '95% Attendance', icon: 'attendance', description: '95% or greater attendance' },
  { title: '100% Homework', icon: 'homework', description: '100% of homework turned in' },
]

course_year = [2017, 2017, 2017, 2017, 2018, 2018, 2018, 2018, 2019, 2019]

5.times do |a|
  assignment = Assignment.create(
    title: "Seeded Assignment #{a}",
    submission_type: 'Online',
    points: 100,
    due_date: 'June 9th, 2018',
    published: true,
    content: Faker::Lorem.paragraph
  )
end


@admin = User.create(
  first_name: 'admin',
  last_name: 'admin',
  email: 'admin@admin.com',
  password: 'password',
  bio: "This is a really good bio don't ya know...",
  nickname: 'Spencer is BOSS',
  is_admin: true,
  image: "https://robohash.org/#{Faker::Number.number(1)}?set=set2"
)

@teacher = User.create(
  email: 'dj@teacher.com',
  password: 'password',
  first_name: 'Dave',
  last_name: 'Jungst',
  bio: "Experienced Co-Founder with a demonstrated history of working in the computer software industry. Skilled in Web Development, Scalability, Agile Methodologies, QA, and Application Programming Interfaces. Strong engineering professional with a background in education and a passion for social impact projects. OSS maintainer / contributor. Educator and JavaScript enthusiast.",
  image: "https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKLAAAAJGZlMDA2Nzk5LWNjNzItNDk3Mi05ZDZhLTQ1M2RlNTRjM2MxYQ.jpg",
  nickname: 'Crypto King',
  invitation_accepted_at: Time.now
)


10.times do |i|
  @course = Course.create(
    course_type: course_type[i],
    term: course_term[i],
    year: course_year[i],
  )
  11.times do |j|
    section = Section.create(
      title: "Week #{j + 1}",
      course_id: @course.id
    )
    5.times do |k|
      sub_section_prog_lang = Faker::ProgrammingLanguage.name
      sub_section_title = "Day #{k + 1}: #{sub_section_prog_lang}"
      sub_section = SubSection.create(
        title: sub_section_title,
        section_id: section.id,
        item_title: Faker::Book.title,
      )
      1.times do |l|
        lecture_scientist = Faker::Science.scientist
        lecture_moon = Faker::Space.moon
        lecture = Lecture.create(
          title: "Lecture #{l + 1}: + #{Faker::Lorem.sentence}",
          content: Faker::Lorem.paragraph(2)
        )
        # lecture = Lecture.create(
        #   title: "Lecture #{l + 1}: #{sub_section_prog_lang}--the #{lecture_scientist} of #{lecture_moon}",
        #   content: lecture_seed.sample,
        #   sub_section_id: sub_section.id
        # )
      end
    end
  end
  Enrollment.create(
    role: 'teacher',
    sub_role: 'JS Ninja',
    user_id: @teacher.id,
    course_id: @course.id
  )
  Enrollment.create(
    role: 'teacher',
    sub_role: 'JS Ninja',
    user_id: @admin.id,
    course_id: @course.id
  )
  10.times do
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
      image: "https://robohash.org/#{Faker::Number.number(3)}",
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
  3.times do
    ta = User.create(
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
      invitation_accepted_at: Time.now,
      image: "https://robohash.org/#{Faker::Number.number(1)}?set=set4"

    )
    Enrollment.create(
      role: 'ta',
      sub_role: Faker::Company.bs,
      user_id: ta.id,
      course_id: @course.id
    )
  end
end

badges.each do |badge|
  Badge.create(
    title: badge[:title],
    icon: badge[:icon],
    description: badge[:description]
  )
end

puts "5 assignments seeded"
puts "10 courses seeded"
puts "11 sections seeded"
puts "5 sub_sections seeded"
puts "3 lectures seeded"
puts "5 badges seeded"

puts "10 students seeded with enrollment, plus faker email and password password. For Each Course"
puts "Teacher seeded with enrollment to every course. password: password"
puts "3 ta's seeded with enrollment, plus faker email and password password. For Each Course"


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





# SOME NOTES TEEHEE
