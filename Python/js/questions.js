// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "What is the output for − 'you are doing well' [2:999]",
    answer: "'u are doing well'",
    options: [
      "'you are doing well'",
      "' '",
      "Index error.",
      "'u are doing well'"
    ],
    help: "https://www.w3schools.com/python/ref_func_slice.asp#:~:text=The%20slice()%20function%20returns,slice%20only%20every%20other%20item."
  },
  {
    numb: 2,
    question: "What is output for − b = [11,13,15,17,19,21] ptint(b[::2])",
    answer: "[11,15,19]",
    options: [
      "[19,21]",
      "[11,15]",
      "[11,15,19]",
      "[13,17,21]"
    ],
    help: "https://www.geeksforgeeks.org/iterate-over-a-list-in-python/"
  },
  {
    numb: 3,
    question: "What is output of following code − print('hijk'.partition('ab'))",
    answer: "('hijk', ' ', ' ')",
    options: [
      "('hijk', 'cd', ' ')",
      "('hijk')",
      "('hijk', ' ', ' ')",
      "Name error"
    ],
    help: "https://note.nkmk.me/en/python-split-rsplit-splitlines-re/"
  },
  {
    numb: 4,
    question: "Suppose we have two sets A & B, then A<B is:",
    answer: "True if A is a proper subset of B.",
    options: [
      "True if len(A) is less than len(B).",
      "True if A is a proper subset of B.",
      "True if the elements in A when compared are less than the elements in B.",
      "True if A is a proper superset of B."
    ],
    help: "https://datacarpentry.org/python-ecology-lesson/03-index-slice-subset/"
  },
  {
    numb: 5,
    question: "Suppose we are given with two sets(s1&s2) then what is the output of the code − S1 + S2",
    answer: "It is an illegal command.",
    options: [
      "Adds the elements of the both the sets.",
      "Removes the repeating elements and adds both the sets.",
      "It is an illegal command.",
      "Output will be stored in S1."
    ],
    help: "https://www.w3schools.com/python/python_operators.asp"
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