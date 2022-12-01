// The date is entered here is in "YYYY/MM/DD" format as the `new Date` operator will display it correctly only when the date is inserted in mentioned format.

// 1. Find all the topics and tasks which are thought in the month of October.
db.topics.aggregate([
    {
        $lookup: {
               from: "tasks",
               localField: "topic_id",
               foreignField: "topic_id",
               as: "task_info"
             }
    },
    {
        $match:{$and:[{$or:[{topic_date:{$gt:new Date("2020-10-01")}},{topic_date:{$lt:new Date("2020-10-30")}}]},
        
          {$or:[{"task_info.due_date":{$gt:new Date("2020-10-01")}},{"task_info.due_date":{$lt:new Date("2020-10-30")}}]}
        ]}
    }
 ]).pretty();


// 2. Find all the company drives which appeared between 15-oct-2020 and 31-oct-2020.
db.company_drives.find({
  $and: [
    { drive_date: { $lte: new Date("2020-10-31") } },
    { drive_date: { $gte: new Date("2020-10-15") } },
  ],
}).pretty();


// 3. Find all the company drives and students who are appeared for the placement.
db.company_drives.aggregate([
    {
        $lookup: {
              from:"users",
              localField:"user_id",
              foreignField:"user_id",
              as :"user_info"
             }
    },
    {
        $project:{
            _id:0,
            "user_info.name":1,
            company_name:1,
            drive_date:1,
            "user_info.email":1,
            "user_info.user_id":1
        }
    }
]).pretty();


// 4. Find the number of problems solved by the user in codekata.
db.codekata.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "user_id",
        as: "user_info",
      },
    },
    {
      $project: {
        _id: 0,
        user_id: 1,
        "user_info.name": 1,
        "user_info.email": 1,
        no_of_problems_solved: 1,
      },
    },
]).pretty();


// 5. Find all the mentors with who has the mentee's count more than 15.
db.mentors.find({
    mentee_count:{ $gt:15 }
}).pretty();


// 6. Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020
db.tasks.aggregate([
    {
      $lookup: {
        from: "attendance",
        localField: "user_id",
        foreignField: "user_id",
        as: "attendance",
      },
    },
    {
      $match: {
        $and: [{ submitted: false }, { "attendance.present": false }],
      },
    },
]).pretty();
