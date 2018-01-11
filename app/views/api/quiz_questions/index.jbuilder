json.array @quiz_questions do |quiz_question|
  json.question quiz_question.question
  json.multiple_choice quiz_question.multiple_choice
  json.true_false quiz_question.true_false
  json.multiple_correct quiz_question.multiple_correct
  json.options quiz_question.question_options
end
