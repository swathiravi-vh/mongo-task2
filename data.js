// Design database for Zen class programme
// The date is entered here is in "YYYY/MM/DD" format as the `new Date` operator will display it correctly only when the date is inserted in mentioned format.

// users
db.users.insertMany([
    {
      user_id: 1,
      name: "Swathi Ravi",
      email: "swathiit01@gmail.com",
      mentor_id: 1,
    },
    {
      user_id: 2,
      name: "Samyuktha S",
      email: "samyuks@gmail.com",
      mentor_id: 2,
    },
    {
      user_id: 3,
      name: "Ashok Kumar P",
      email: "kumararashok@gmail.com",
      mentor_id: 3,
    },
    {
      user_id: 4,
      name: "Sanjay Urs",
      email: "ursanjay@gmail.com",
      mentor_id: 4,
    },
    {
      user_id: 5,
      name: "Akshitha S",
      email: "akshitha@gmail.com",
      mentor_id: 5,
    },
  ]);
  
  
  // codekata
  db.codekata.insertMany([
    {
      user_id: 1,
      no_of_problems_solved: 105,
    },
    {
      user_id: 2,
      no_of_problems_solved: 120,
    },
    {
      user_id: 3,
      no_of_problems_solved: 95,
    },
    {
      user_id: 4,
      no_of_problems_solved: 70,
    },
    {
      user_id: 5,
      no_of_problems_solved: 90,
    },
  ]);
  
  
  // attendance
  db.attendance.insertMany([
    {
      user_id: 1,
      topic_id: 1,
      present: true,
    },
    {
      user_id: 2,
      topic_id: 2,
      present: true,
    },
    {
      user_id: 3,
      topic_id: 3,
      present: false,
    },
    {
      user_id: 4,
      topic_id: 4,
      present: false,
    },
    {
      user_id: 5,
      topic_id: 5,
      present: true,
    },
  ]);
  
  
  // topics
  db.topics.insertMany([
    {
      topic_id: 1,
      topic: "HTML",
      topic_date: new Date("2020-10-01"),
    },
    {
      topic_id: 2,
      topic: "CSS",
      topic_date: new Date("2020-10-10"),
    },
    {
      topic_id: 3,
      topic: "Javascript",
      topic_date: new Date("2020-10-15"),
    },
    {
      topic_id: 4,
      topic: "ReactJS",
      topic_date: new Date("2020-10-20"),
    },
    {
      topic_id: 5,
      topic: "NodeJS",
      topic_date: new Date("2020-10-25"),
    },
  ]);
  
  
  // tasks
  db.tasks.insertMany([
    {
      task_id: 1,
      topic_id: 1,
      user_id: 1,
      task: "HTML task",
      due_date: new Date("2020-10-05"),
      submitted: true,
    },
    {
      task_id: 2,
      topic_id: 2,
      user_id: 2,
      task: "CSS task",
      due_date: new Date("2020-10-15"),
      submitted: true,
    },
    {
      task_id: 3,
      topic_id: 3,
      user_id: 3,
      task: "Javascript task",
      due_date: new Date("2020-10-20"),
      submitted: true,
    },
    {
      task_id: 4,
      topic_id: 4,
      user_id: 4,
      task: "ReactJS task",
      due_date: new Date("2020-10-25"),
      submitted: false,
    },
    {
      task_id: 5,
      topic_id: 5,
      user_id: 5,
      task: "NodeJS task",
      due_date: new Date("2020-10-30"),
      submitted: false,
    },
  ]);
  
  
  // company_drives
  db.company_drives.insertMany([
    {
      user_id: 1,
      drive_date: new Date("2020-10-05"),
      company_name: "Google",
    },
    {
      user_id: 1,
      drive_date: new Date("2020-10-10"),
      company_name: "Amazon",
    },
    {
      user_id: 2,
      drive_date: new Date("2020-10-20"),
      company_name: "Microsoft",
    },
    {
      user_id: 3,
      drive_date: new Date("2020-10-15"),
      company_name: "Zoho",
    },
    {
      user_id: 5,
      drive_date: new Date("2020-10-30"),
      company_name: "Facebook",
    },
  ]);
  
  
  // mentors
  db.mentors.insertMany([
    {
      mentor_id: 1,
      mentor_name: "Rajavasanthan V",
      mentor_email: "rajav@gmail.com",
      mentee_count: 30,
    },
    {
      mentor_id: 2,
      mentor_name: "Ragav Kumar",
      mentor_email: "ragavk@gmail.com",
      mentee_count: 25,
    },
    {
      mentor_id: 3,
      mentor_name: "Lavish Jain",
      mentor_email: "lavish@gmail.com",
      mentee_count: 20,
    },
    {
      mentor_id: 4,
      mentor_name: "Sivaranjini",
      mentor_email: "sivaranjini@gmail.com",
      mentee_count: 12,
    },
    {
      mentor_id: 5,
      mentor_name: "Suman G",
      mentor_email: "gsuman@gmail.com",
      mentee_count: 15,
    },
  ]);
  