json.array! @user_badges do |user_badge|
  json.user_badge_id user_badge.id
  json.badge user_badge.badge
end
