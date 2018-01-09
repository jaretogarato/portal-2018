namespace :fix do
  desc "Single use normalize roles"
  task roles: :environment do
    Enrollment.all.each do |e|
      e.role = e.role.downcase
      e.save
    end
  end

end
