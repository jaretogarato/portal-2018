# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180118030214) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assignments", force: :cascade do |t|
    t.string "title"
    t.string "submission_type"
    t.integer "points"
    t.string "due_date"
    t.boolean "published"
    t.boolean "group_assignment"
    t.text "content"
    t.bigint "sub_section_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sub_section_id"], name: "index_assignments_on_sub_section_id"
  end

  create_table "attendances", force: :cascade do |t|
    t.string "status"
    t.date "record_date"
    t.bigint "user_id"
    t.bigint "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_attendances_on_course_id"
    t.index ["user_id"], name: "index_attendances_on_user_id"
  end

  create_table "avatars", force: :cascade do |t|
    t.string "url"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_avatars_on_user_id"
  end

  create_table "badges", force: :cascade do |t|
    t.string "icon"
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "course_contents", force: :cascade do |t|
    t.bigint "sub_section_id", null: false
    t.bigint "quiz_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "lecture_id"
    t.bigint "assignment_id"
    t.index ["assignment_id"], name: "index_course_contents_on_assignment_id"
    t.index ["quiz_id"], name: "index_course_contents_on_quiz_id"
    t.index ["sub_section_id"], name: "index_course_contents_on_sub_section_id"
  end

  create_table "courses", force: :cascade do |t|
    t.string "course_type", null: false
    t.string "term", null: false
    t.integer "year", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "create_assignments", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer "priority", default: 0, null: false
    t.integer "attempts", default: 0, null: false
    t.text "handler", null: false
    t.text "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string "locked_by"
    t.string "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["priority", "run_at"], name: "delayed_jobs_priority"
  end

  create_table "enrollments", force: :cascade do |t|
    t.string "role", null: false
    t.string "sub_role"
    t.bigint "user_id"
    t.bigint "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_enrollments_on_course_id"
    t.index ["user_id"], name: "index_enrollments_on_user_id"
  end

  create_table "group_memberships", force: :cascade do |t|
    t.bigint "ta_group_id"
    t.bigint "enrollment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["enrollment_id"], name: "index_group_memberships_on_enrollment_id"
    t.index ["ta_group_id"], name: "index_group_memberships_on_ta_group_id"
  end

  create_table "lectures", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notes", force: :cascade do |t|
    t.string "title", default: "", null: false
    t.text "content", default: "", null: false
    t.boolean "visible", default: false, null: false
    t.integer "sender_id", null: false
    t.integer "recipient_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "question_options", force: :cascade do |t|
    t.string "content", default: "", null: false
    t.boolean "correct", default: false
    t.bigint "quiz_question_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["quiz_question_id"], name: "index_question_options_on_quiz_question_id"
  end

  create_table "quiz_questions", force: :cascade do |t|
    t.text "question", default: "", null: false
    t.boolean "multiple_choice", default: true
    t.boolean "multiple_correct", default: false
    t.boolean "true_false", default: false
    t.bigint "quiz_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["quiz_id"], name: "index_quiz_questions_on_quiz_id"
  end

  create_table "quizzes", force: :cascade do |t|
    t.string "title", default: "", null: false
    t.text "content", default: "", null: false
    t.string "due_date", default: "", null: false
    t.integer "points", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sections", force: :cascade do |t|
    t.string "title"
    t.bigint "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "active", default: true
    t.index ["course_id"], name: "index_sections_on_course_id"
  end

  create_table "sub_sections", force: :cascade do |t|
    t.string "title"
    t.bigint "section_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "item_title"
    t.index ["section_id"], name: "index_sub_sections_on_section_id"
  end

  create_table "ta_groups", force: :cascade do |t|
    t.bigint "section_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["section_id"], name: "index_ta_groups_on_section_id"
  end

  create_table "user_badges", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "badge_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["badge_id"], name: "index_user_badges_on_badge_id"
    t.index ["user_id"], name: "index_user_badges_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.text "bio"
    t.boolean "is_admin", default: false
    t.string "invitation_token"
    t.datetime "invitation_created_at"
    t.datetime "invitation_sent_at"
    t.datetime "invitation_accepted_at"
    t.integer "invitation_limit"
    t.string "invited_by_type"
    t.integer "invited_by_id"
    t.integer "invitations_count", default: 0
    t.string "avatar_url"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["invitation_token"], name: "index_users_on_invitation_token", unique: true
    t.index ["invitations_count"], name: "index_users_on_invitations_count"
    t.index ["invited_by_id"], name: "index_users_on_invited_by_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "assignments", "sub_sections"
  add_foreign_key "attendances", "courses"
  add_foreign_key "attendances", "users"
  add_foreign_key "avatars", "users"
  add_foreign_key "course_contents", "assignments"
  add_foreign_key "course_contents", "lectures"
  add_foreign_key "course_contents", "quizzes"
  add_foreign_key "course_contents", "sub_sections"
  add_foreign_key "enrollments", "courses"
  add_foreign_key "enrollments", "users"
  add_foreign_key "group_memberships", "enrollments"
  add_foreign_key "group_memberships", "ta_groups"
  add_foreign_key "question_options", "quiz_questions"
  add_foreign_key "quiz_questions", "quizzes"
  add_foreign_key "sections", "courses"
  add_foreign_key "sub_sections", "sections"
  add_foreign_key "ta_groups", "sections"
  add_foreign_key "user_badges", "badges"
  add_foreign_key "user_badges", "users"
end
