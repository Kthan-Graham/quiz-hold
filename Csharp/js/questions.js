// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Which of the following is a contextual keyword in C#?",
    answer: "all of the above",
    options: [
      "get",
      "set",
      "add",
      "all of the above"
    ],
    help: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/#:~:text=A%20contextual%20keyword%20is%20used,in%20two%20or%20more%20contexts."
  },
  {
    numb: 2,
    question: "Which of the following converts a type to a Boolean value, where possible in C#?",
    answer: "ToBoolean",
    options: [
      "ToBoolean",
      "ToSingle",
      "ToChar",
      "ToDateTime"
    ],
    help: "https://docs.microsoft.com/en-us/dotnet/api/system.convert.toboolean?view=net-6.0"
  },
  {
    numb: 3,
    question: "Which of the following converts a floating point or integer type to a decimal type in C#?",
    answer: "ToDecimal",
    options: [
      "ToDecimal",
      "ToDouble",
      "ToInt16",
      "ToInt32"
    ],
    help: "https://docs.microsoft.com/en-us/dotnet/api/system.convert.todecimal"
  },
  {
    numb: 4,
    question: "Which of the following operator creates a pointer to a variable in C#?",
    answer: "*",
    options: [
      "sizeof",
      "typeof",
      "&",
      "*"
    ],
    help: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/pointer-related-operators"
  },
  {
    numb: 5,
    question: "Which of the following access specifier in C# allows a class to expose its member variables and member functions to other functions and objects?",
    answer: "Public",
    options: [
      "Public",
      "Private",
      "Protected",
      "Internal"
    ],
    help: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers"
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