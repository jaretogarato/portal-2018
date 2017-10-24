class Attendance < ApplicationRecord
  belongs_to :user
  belongs_to :course

  def self.get_records(params)
    records = []
    params.each do |param|
      record = { 
        record_date: params["date"], 
        course_id: params["course_id"],
        user_id: params[param]["id"],
        status: params[param]["status"]
      }
      if param != "date" && param != "course_id" && param != "controller" && param != "action" && param != "attendance"
        records << record
      end
    end

    records.each do |record| 
      attendance = Attendance.create(record)
    end
  end
end
