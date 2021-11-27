// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Which of the following is not true about single row functions?",
    answer: "They cannot be nested.",
    options: [
      "They operate on single rows only and return one result per row.",
      "They accept arguments that could be a column or any expression.",
      "They cannot be nested.",
      "They may modify the data type."
    ],
    help: "https://docs.oracle.com/cd/E11882_01/olap.112/e23381/row_functions.htm"
  },
  {
    numb: 2,
    question: "Which of the following is true about SQL joins?",
    answer: "The join condition for natural join is basically an equijoin of all columns with same name.",
    options: [
      "The join condition is not separated from other search conditions in a query.",
      "The ON clause makes code difficult to understand.",
      "The join condition for natural join is basically an equijoin of all columns with same name.",
      "None."
    ],
    help: "https://www.w3schools.com/sql/sql_join.asp#:~:text=Different%20Types%20of%20SQL%20JOINs&text=(INNER)%20JOIN%20%3A%20Returns%20records,records%20from%20the%20left%20table"
  },
  {
    numb: 3,
    question: "In which of the following cases a DML statement is executed?",
    answer: "When new rows are added to a table.",
    options: [
      "When new rows are added to a table.",
      "When a table is created.",
      "When a transaction is committed.",
      "None."
    ],
    help: "https://docs.oracle.com/cd/B14117_01/server.101/b10759/statements_1001.htm"
  },
  {
    numb: 4,
    question: "Which of the following is not true about the ALTER TABLE statement?",
    answer: "It can add a new row.",
    options: [
      "It can add a new row.",
      "It can add a new column.",
      "It can modify existing columns.",
      "It can define a default value for the new column."
    ],
    help: "https://www.w3schools.com/sql/sql_alter.asp"
  },
  {
    numb: 5,
    question: "Which of the following is not true about a FOREIGN KEY constraint?",
    answer: "A foreign key value cannot be null.",
    options: [
      "It is a referential integrity constraint.",
      "It establishes a relationship between a primary key or a unique key in the same table or a different table.",
      "A foreign key value cannot be null.",
      "A foreign key value must match an existing value in the parent table."
    ],
    help: "https://www.w3schools.com/sql/sql_foreignkey.asp"
  },

  /* This is the template for me to add more questions.
  
    {
    numb: 6,
    question: "Question here",
    answer: "Answer here",
    options: [
      "Option 1",
      "option 2",
      "option 3",
      "option 4"
    ],
    help: "URL here"
  },
*/
];