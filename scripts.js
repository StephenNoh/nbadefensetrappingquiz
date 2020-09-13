const questions = [
{
  question: "Instructions: Choose the option that best describes why the defense failed. There may be more than one breakdown. Choose the BIGGEST mistake. \n\n1. Assume the Rockets' game plan is to double Anthony Davis in the post. Who screwed up?",
  choices: ["Eric Gordon (no. 10). He was supposed to rotate to Javale McGee, and he was late.", 
  "PJ Tucker (no. 17). He had poor execution on the double-team.", 
  "Danuel House (no. 4). He did not front the post up adequately.", 
  "James Harden (no. 13). He was too attached to his man on the perimeter."],
  answer: 0,
  link: "https://videos.nba.com/nba/pbp/media/2020/02/06/0021900768/347/4a0b8124-03e5-0fcb-2631-290e79e5e68d_1280x720.mp4",
  concept: "Rotations on post double teams.",
  conceptLink: "https://youtu.be/TTbz-FI-ZhQ?t=9"
},
// {
//     question: "2. Assume the game plan is to double Giannis in the post. Who screwed up?",
//     choices: [
//     "Hamidou Diallo (no. 6). He wasn't aggressive enough with his trap.",
//     "Nerlens Noel (no. 9). He was not impactful in his defense at the elbow.",
//     "Abdel Nader (no. 11). He was late on the play.",
//     "Shai Gilgeous-Alexander (no. 2) He was late on his rotation."],
//     answer: 3,
//     link: "https://videos.nba.com/nba/pbp/media/2020/02/28/0021900882/489/6a8264ea-5598-4b8e-afa4-1789456be56a_1280x720.mp4",
//     concept: "Rotations on post double teams.",
    
// },
{
    question: "2. Assume the game plan is to double Siakam in the post. Who screwed up?",
    choices: [
    "Tristan Thompson (no. 13). As the big man, his responsibility was to slide down and protect against cutters.",
    "Larry Nance Jr. (no. 22). He was way too late in his trap, allowing Siakam to get low enough to get a good passing angle.",
    "Dante Exum (no. 1). He lost sight of his man and didn't sink fully to the lowest spot.",
    "Collin Sexton (no. 2). Once Nance got there with the double, Sexton should have scram switched onto the perimeter."],
    answer: 2,
    link: "https://videos.nba.com/nba/pbp/media/2020/01/30/0021900714/243/3ddec5e1-e9ed-a903-f9f8-8f3b972ad2ed_1280x720.mp4",
    concept: "Rotations on post double teams.",
    conceptLink: "https://youtu.be/TTbz-FI-ZhQ?t=55"
},
{
  question: "3. Assume the gameplan is to double the post. Who screwed up?",
  choices: [
    "Ben Simmons (no. 25). He was late in his rotation and his duty is to watch for cutters.",
    "Furkan Korkmaz (no. 30). He was very late on his rotation and allowed a cut in front of him.",
    "Al Horford (no. 42). He is the rim protector, and he should have rotated over when the pass was in the air to contest any layups from cutters.",
    "James Ennis (no. 11). His positioning on the double was wrong, and he should have turned his body to prevent passes into the paint."],
  answer: 1,
  link: "https://videos.nba.com/nba/pbp/media/2019/12/27/0021900468/71/58578926-64f1-8ce8-339f-1b6627f20239_960x540.mp4",
  concept: "Rotations on post double teams.",
  conceptLink: "https://youtu.be/TTbz-FI-ZhQ?t=87"
},
{
  question: "4. Assume the gameplan is to double the post. Who screwed up?",
  choices: [
    "Bam Adebayo (no. 15). He did not pass off his cutter.",
    "Duncan Robinson(no. 55) and Kendrick Nunn (no. 25). One of them should have sprinted to the corner.",
    "Jimmy Butler (no. 22). He should have positioned to take away the corner pass.",
    "Meyers Leonard (no. 0). He should have left his man Gasol to a teammate and rotated to the corner."],
  answer: 3,
  answer2: 1,
  link: "https://videos.nba.com/nba/pbp/media/2019/12/03/0021900301/398/f734ea9f-6509-3604-9a79-0d6ba4400381_960x540.mp4",
  concept: "Rotations on post double teams. (note: Leonard is most responsible, but Robinson and Nunn are also acceptable answers)",
  conceptLink: "https://youtu.be/TTbz-FI-ZhQ?t=128"
},
{  
  question: "5. Assume the plan is to double-team the ballhandler on the pick-and-roll. Who messed up?",
  choices: [
    "Buddy Hield (no. 24). The low man opposite is supposed to slide to the basket on a side trap.",
    "De'Aaron Fox (no. 5). He should have chipped Porzingis on his cut.",
    "Harry Giles (no. 20). He was supposed to bring help from the corner and slide into the middle to protect the paint.",
    "No one. This play was guarded well, but Doncic found an opening for a pass anyway."],
  answer: 0,
  link: "https://videos.nba.com/nba/pbp/media/2020/02/12/0021900814/100/a8517643-55e5-fe9e-36ec-b5a03f7a77f0_1280x720.mp4",
  concept: "PNR Double",
  conceptLink: "https://youtu.be/TTbz-FI-ZhQ?t=203"
},
{
  question: "6. Assume the plan is to double-team the ballhandler on the pick-and-roll. Who messed up??",
  link: "https://videos.nba.com/nba/pbp/media/2019/11/25/0021900245/367/92856660-c01c-c20d-9ebc-b49294a2a1a1_1280x720.mp4",
  choices: [
    "Meyers Leonard (no. 0). He took a horrendous route on his recovery and was way out of position to contest the shot as a result.",
    "Bam Adebayo (no. 13). He was supposed to slide over to trap the box.",
    "Duncan Robinson (no. 55). He was helping in the lane when his man was one pass away, and he got blown by on his recovery as a result.",
    "Kendrick Nunn (no. 25). He was the low man and was supposed to trap the box to contest on any drive."],
  answer: 2,
  concept: "PNR Double",
  conceptLink: "https://youtu.be/TTbz-FI-ZhQ?t=256"
},
{
  question: "7. Assume the plan is to double-team the ballhandler on the pick-and-roll. Who messed up?",
  link: "https://videos.nba.com/nba/pbp/media/2020/01/11/0021900581/404/a60d90a6-8caf-7507-ccb5-dc8560b67a75_1280x720.mp4",
  choices: ["Tobias Harris (no. 12). He came in to protect the paint, but his man was one pass away and he should have stayed at home.",
    "Matisse Thybulle (no. 22). He got confused on his rotation and was way late to the contest as a result.",
    "Al Horford (no. 42). As the trap man closest to the sideline, his job is to close off the nearest passing lane and force a cross-court pass.",
    "Ben Simmons (no. 25). He missed his rotation into the paint and as a result, everyone else on the team became discombobulated trying to cover for him."
  ],
  answer: 0,
  concept: "PNR Double",
  conceptLink: "https://youtu.be/TTbz-FI-ZhQ?t=295"
},
{
  question: "8. Assume the plan is to double-team the ballhandler on the pick-and-roll. Who messed up?",
  link: "https://videos.nba.com/nba/pbp/media/2020/02/29/0021900888/317/0b767305-451e-67bb-6192-f21af4ef3bf3_1280x720.mp4",
  choices: ["Hassan Whiteside (no. 21). On an empty side pick and roll, the low man MUST take the pop man in a pick-and-pop. That was Whiteside's job.",
  "Carmelo Anthony (no. 00). The Blazers need to keep Whiteside near the rim to block shots, so it's Anthony's job to take the shooter.",
  "Trevor Ariza (no. 8). He took a poor angle on the trap.",
  "CJ McCollum (no. 3). He took a poor angle on the trap."],
  answer: 0,
  answer2: 1,
  concept: "Rotations off a pick-and-roll double team (two potential answers depending on Portland's scheme, but it's probably Whiteside's responsibility.",
  conceptLink: "https://youtu.be/TTbz-FI-ZhQ?t=338"
},
{
  question: "9: Assume the plan is to double-team the ballhandler on the pick-and-roll. Who messed up?",
  link: "https://videos.nba.com/nba/pbp/media/2019/12/15/0021900390/496/c583f7cf-16d5-3c73-5d16-7bd0eed75a5d_1280x720.mp4",
  choices: ["Both Alex Caruso (no. 4) and JaVale McGee (no. 7). They didn't put adequate pressure on the ball and forced their teammates into rotation too quickly.",
    "LeBron James (no. 23). He is supposed to keep an arm-length away from Alex Len to prevent the pass and shrink the floor.",
    "Kentavious Caldwell-Pope (no. 1). As the ball swings back out to the perimeter, the weak-side corner (Pope) should cover the rim.",
    "Anthony Davis (no. 3). He's supposed to zone up to take away the passing lane. He was up too close on Carter, making the pass too easy."],
  answer: 2,
  concept: "Rotations off a pick-and-roll double team.",
  conceptLink: "https://youtu.be/TTbz-FI-ZhQ?t=381"
},
// {
//   question: "11: Assume the plan is to double-team the ballhandler on the pick-and-roll. Who messed up?",
//   link: "https://videos.nba.com/nba/pbp/media/2020/02/28/0021900882/339/6c2bb9b1-9600-8161-685f-0958dff20d9c_960x540.mp4",
//   choices: ["under construction"],
//   answer: "all",
//   concept: "Rotations off a pick-and-roll double team."
// },
{
  question: "10: Assume the plan is to double-team the ballhandler on the pick-and-roll. Who messed up?",
  link: "https://videos.nba.com/nba/pbp/media/2019/12/16/0021900397/171/a8434c08-cd98-2b5b-a4b8-10a1b1adf7f8_960x540.mp4",
  choices: ["Olynyk (no. 9). He has to slide down to cut off Morant's Nash dribble.",
    "Nunn (no. 25). He's supposed to zone up and take that first pass to Dillon Brooks for the 3.",
    "Herro (no. 14). He knows Nunn must protect the corner, so he should have pre-switched onto Brooks.",
    "Silva (no. 30). When trapping on the sideline, you can't allow a player to drive around you. He made the rotations too difficult on that initial error."],
  answer: 3,
  concept: "Rotations off a pick-and-roll double team.",
  conceptLink: "https://youtu.be/TTbz-FI-ZhQ?t=437"
}
]

let correctAnswers = 0

const startButton = document.getElementById('start-btn')
const otherButton = document.getElementById('other-btn')
const spinsButton = document.getElementById('spins-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const videoElement = document.getElementById('video')
const finalScore = document.getElementById("final-score")
const intro = document.querySelector(".intro")

let currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    correctAnswers = 0
    startButton.classList.add('hide')
    otherButton.classList.add('hide')
    spinsButton.classList.add('hide')
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    finalScore.classList.add("hide")
    intro.classList.add("hide")
    setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    videoElement.innerHTML = `<video controls>
    <source src="${question.link}" type="video/mp4">
    Your browser does not support the video tag.
    </video>`
    answerButtonsElement.classList.remove('disable')
    let i = 0
    if (question.hasOwnProperty("conceptLink")) {
        document.getElementById("missed-concepts").innerHTML = `<a href="${question.conceptLink}" target="_blank">${question.concept}</a>`
    }
    else {
        document.getElementById("missed-concepts").innerText = question.concept
    }
    question.choices.forEach(answer => {
    const button = document.createElement('button')
    // if (document.getElementById("difficulty_normal").checked) {
    //   button.innerText = answer.player + answer.description
    // }
    // else {
    //   button.innerText = answer.player 
    // } FIX THIS

    button.innerHTML = answer 
    button.classList.add('btn')
    if (i == question.answer || question.answer == "all" || i == question.answer2) {
        button.dataset.correct = answer.correct
        }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    i++
    })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  document.getElementById('missed-concepts-id').classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  
  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    document.getElementById('missed-concepts-id').classList.remove('hide')
    answerButtonsElement.classList.add('disable')
  } else {
    startButton.innerText = 'Restart Quiz'
    startButton.classList.remove('hide')
    document.getElementById('missed-concepts-id').classList.remove('hide')
    finalScore.classList.remove('hide')
    otherButton.classList.remove('hide')
    spinsButton.classList.remove('hide')
    if (selectedButton.dataset = correct) {
        correctAnswers++;}
    finalScore.innerHTML=
    `
    <div style="font-weight:bold;">Final Score: ${correctAnswers} correct out of ${questions.length}. <a href="http://www.twitter.com/spinella14" target="_blank">Follow Coach Spins</a> | <a href="http://www.twitter.com/stephnoh" target="_blank">Follow Stephen Noh</a></div>
    <hr>
    <div>0-3 correct: Average NBA fan. Retake the quiz and click on the links to learn the concepts you're missing.</div>
    <div>4-7 correct: You're a student of the game!</div>
    <div>8+ correct: Congrats, you're an expert!</div>`
  }
  if (selectedButton.dataset = correct) {
    correctAnswers++;
 }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}