// let questions = [];
// fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium")
// .then((res) => {
//     return res.json();
// })
// .then((loadedQuestions) => {
//     questions = loadedQuestions.result.map((loadedQuestion)=>{
//         const formattedQuestion = {
//             question: loadedQuestion.question,
//         };

//         const answerChoices = [...loadedQuestion.incorrect_answers];
//         formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
//         answerChoices.splice(
//             formattedQuestion.answer - 1,
//             0,
//             loadedQuestion.correct_answer
//         );

//         answerChoices.forEach((choice, index) => {
//             formattedQuestion['choice' + (index + 1)] = choice;
//         });

//         return formattedQuestion;
//     });
// })
// .catch((err) => {
//     console.error(err);
// });


let questions = [
    {
        numb: 1,
        question: "Which iconic Disneyland attraction was closed in 2017 to be remodeled as a Guardians of the Galaxy themed ride?",
        answer: "C.Twilight Zone Tower of Terror ",
        Options: [
           "A.The Haunted Mansion",
           "B.Pirates of the Caribbean",
           "c.Twilight Zone Tower of Terror ",
           "D.Peter Pans Flight"
           
        ]    
    },    
    {
        numb: 2,
        question: "Rolex is a company that specializes in what type of product?",
        answer: "A.Watches",
        Options:[
            "A.Watches",
            "B.Cars",
            "C.Computers",
            "D.Sports equipment"
            
        ]
    },
    {
        numb: 3,
        question: "What year was Apple Inc. founded?",
        answer: "D.1976",
        Options:[
            "A.1978",
            "B.1980",
            "C.1974",
            "D.1976"
            
        ]
    },
    {
        numb: 4,
        question: "What is the full title of the Prime Minister of the UK?",
        answer: "B.First Lord of the Treasury",
        Options:[
            "A.Duke of Cambridge",
            "B.First Lord of the Treasury",
            "C.Her Majesty&#039;s Loyal Opposition",
            "D.Manager of the Crown Estate"
            
        ]
    },
    {
        numb: 5,
        question: "What does a milliner make and sell?",
        answer: "D.Hats",
        Options:[
            "A.Shoes",
            "B.Belts",
            "C.Shirts",
            "D.Hats"
        ]
    },
    {
        numb: 6,
        question: "What is the name given to Indian food cooked over charcoal in a clay oven?",
        answer:"B.Tandoori",
        Options:[
            "A.Tiki masala",
            "B.Tandoori",
            "C.Biryani",
            "D.Pani puri"
            
        ]
    },
    {
        numb: 7,
        question: "The term scientist was coined in which year?",
        answer: "D.1833",
        Options:[
            "A.1933",
            "B.1942",
            "C.1796",
            "D.1833"
            
        ]
    },
    {
        numb: 8,
        question: "What was the original name of the search engine Google;?",
        answer: "C.BackRub",
        Options:[
            "A.CatMassage",
            "B.SearchPro",
            "C.BackRub",
            "D.Netscape Navigator"
            
        ]
    },
    {
        numb: 9,
        question: "What country saw a world record 315 million voters turn out for elections on May 20, 1991?",
        answer: "C.India",
        Options:[
            "A.United States of America",
            "B.Soviet Union",
            "C.India",
            "D.Poland"
            
        ]
    },
    {
        numb: 10,
        question: "An eggplant is a vegetable.",
        answer: "A.False",
        Options:[
            "A.False",
            "B.True"
            
        ]
    }
]

