const questions = [
    {
      question: "1. LeBron James comes off the ball screen and forces Jae Crowder to help from one pass away on his drive. What is the contributing factor leading to Anthony Davis taking (and missing) this 3-pointer?",
      choices: [
      "Crowder's ability to disrupt plays acting as a free safety for the Heat defense.", 
      "Duncan Robinson's indecisiveness, mistakenly leaving Davis open.", 
      "Duncan Robinson bluffing at Davis, making him hesitate and giving Crowder more time to recover", 
      "Dwight Howard mistakenly wrestling with Meyers Leonard in front of the basket, leaving nowhere for Davis to drive it."],
      answer: 2,
      link: "https://videos.nba.com/nba/pbp/media/2020/10/04/0041900403/373/8a7236c2-f60e-9cfe-7b52-1e20c808f9e1_960x540.mp4",
      concept: "Duncan Robinson executes a textbook “stunt”, or bluff, at Anthony Davis. When Crowder helps, Robinson is left to momentarily guard two players: Davis and Kentavious Caldwell-Pope. Because KCP is a better shooter than Davis and also in an easier location to make a 3, he chooses to stunt instead of selling out on Davis. His movement towards Davis disrupts the natural momentum of a catch-and-shoot or an extra pass to the corner. Crowder gets back and has a decent contest on the shot"
    },
    {
      question: "2. What gives Tyler Herro time to recover to Kentavious Caldwell-Pope on the pick & pop?",
      choices: [
      "Jae Crowder lunging at KCP before returning to the corner",
      "Herro cleanly getting back from Adebayo",
      "A random, nonsensical pass fake from KCP",
      "LeBron’s pass is one dribble too late coming off the screen"],
      answer: 0,
      link: "https://videos.nba.com/nba/pbp/media/2020/10/06/0041900404/530/b8fb1e24-ed51-c723-ad0f-2086e0096440_960x540.mp4",
      concept: "The same concept as in the previous clip, Crowder is temporarily splitting two players while Herro hedges the ball screen: his man in the corner and KCP on the pop. His timely stunt is what causes KCP to hesitate and give a pass fake to Crowder’s man."
    },
    {
      question: "3. Marcus Smart closes out to DJ Augustin on the skip pass from Vucevic. When he does, why is he so dramatically on top of Augustin’s right shoulder?",
      choices: [
        "He’s buying Kemba Walker time to recover from helping on the post-up. Preventing a clean pass to Fultz up top give Kemba time to read where to go",
        "He’s hoping to force Augustin to drive into help, where Tatum is standing",
        "He came from the top and guarding Fultz, so because he and Tatum miscommunicated he didn’t have time to get in front of the ball",
        "Both he and Tatum originally played passing lanes to prevent Augustin from moving the ball, which caused Augustin to hesitate. Then Smart would claim ball and be on the top-side."],
      answer: 0,
      answer2: 3,
      link: "https://videos.nba.com/nba/pbp/media/2020/08/09/0021901288/297/c0d6763c-ffa7-8ae1-d519-fb049c97b0e3_960x540.mp4",
      concept: "Tatum and Smart are playing angles, both stunting in the passing lane, to give Walker time to read where he should go. One of Smart or Tatum then need to claim Augustin, which Smart does. This is less of a miscommunication and more of the cat-and-mouse game that help defenders need to play to buy their teammate time to recover.",
      // conceptLink: "https://youtu.be/TTbz-FI-ZhQ?t=87"
    },
    {
      question: "4. Why does Towns hesitate to take his 3-point attempt on the pick & pop?",
      choices: [
        "Covington (no. 33) floats behind Towns, bringing his man into the play",
        "Torrey Craig (no. 3) bluffs at Towns from the next pass away, which discourages a clean shot",
        "He was expecting to roll, but because Denver trapped the ball screen, he had to pop and take a shot he wasn’t ready for",
        "He doesn’t realize it’s late in the shot clock"],
      answer: 0,
      answer2: 1,
      link: "https://videos.nba.com/nba/pbp/media/2020/01/20/0021900649/74/200ac437-28f4-a4e9-7d2b-05281caeff7b_960x540.mp4",
      concept: "While Covington has awful spacing, Torrey Craig likely would have stunted anyway. His responsibility as the next-closest defender to Towns is to bluff at him hard enough to take away the pick & pop 3-pointer. You can see that he’s not trying to switch onto Towns, just to lower the percentage of his shot and buy Jokic time to recover. This was a great defensive possession from Denver.",
    },
    {  
      question: "5. Why does Jaylen Brown find himself so open on his cut?",
      choices: [
        "Brook Lopez and Khris Middleton botch the ball screen coverage",
        "Lopez is in Drop Coverage and should be protecting the rim, not standing where he is",
        "Sterling Brown (no. 23) is anticipating the pick & pop to Horford, so he cheats towards his stunt responsibility, which allows Jaylen to cut behind him",
        "Giannis Antetokounmpo is late to rotate to help"],
      answer: 2,
      answer2: 3,
      link: "https://videos.nba.com/nba/pbp/media/2019/04/28/0041800201/490/ba8b6d3b-fe45-a902-aa25-3be9bfbbc4be_960x540.mp4",
      concept: "There’s no doubt Giannis is late, but Sterling Brown is the guy to watch here. Horford pops to the top of the key after screening, which means the next-closest man (Brown) has to be ready to stunt. But Sterling Brown loses sight of his man while doing so, and an alert Jaylen cuts backdoor before the ball can be thrown to Horford. Lopez has no responsibility other than to defend the ball screen and recover to Horford atop the key."
    },
    {
      //start here
      question: "6. When Danny Green goes to help on Jrue Holiday’s middle drive, why does LeBron James end up with the steal?",
      link: "https://videos.nba.com/nba/pbp/media/2020/01/03/0021900522/305/79f42c0d-41fe-abc4-2ede-a256e5d1a70e_960x540.mp4",
      choices: [
        "He’s trying to stunt and recover, but Redick throws an errant pass",
        "There’s not enough spacing between Redick and E’Twaun Moore (#55) so LeBron can guard both",
        "LeBron closes out purposefully into the passing lane to prevent an extra pass to the corner",
        "Bad pass by Holiday. He should have directly passed to E’Twaun Moore in the corner"],
      answer: 2,
      concept: "Savvy NBA players will close out in-between the two men they’re splitting to prevent ball movement and take away extra passes. Redick expects to be fully guarded by LeBron, so he immediately goes to throw the corner pass. LeBron’s angle is perfect to split both and anticipate the play."
    },
    {
      question: "7. This possession is an example of which defensive concept?",
      link: "https://videos.nba.com/nba/pbp/media/2019/11/27/0021900256/419/9f1627b8-9a47-dec8-8d58-22bd76086606_960x540.mp4",
      choices: [
        "Tagging the roller",
        "X-Out on the weak side",
        "Stunt & Recover",
        "Flood"
      ],
      answer: 1,
      concept: "When Brogdon passes the ball to the corner, two defenders (Mudiay, no. 8, and Bogdanovic, no. 44) wind up switching men. Mudiay takes the corner shooter, and Bogdanovic switches onto Mudiay’s man late. This is known as an \"X-Out.\""
    },
    {
      question: "8. Victor Oladipo is guarding Damyean Dotson (no. 21) in the corner and fulfills his help responsibilities at the rim. Why does he end up contesting the shot from Julius Randle (no. 30) at the end of the play?",
      link: "https://videos.nba.com/nba/pbp/media/2020/02/01/0021900728/111/67cd0b5f-ffdc-1f88-4eca-762c0958e787_960x540.mp4",
      choices: ["Oladipo couldn’t recover to his man in time, so Justin Holiday (#8) purposefully takes Dotson in the corner for him. The two then switch assignments.",
      "Oladipo couldn’t recover to his man in time, but Holiday accidentally over-helps off Randle and Oladipo has to go wherever there’s an open man.",
      "TJ Warren (#1) is supposed to take Randle, but doesn’t, so Oladipo has to.",
      "When Oladipo helps, Malcolm Brogdon is supposed to switch off the ball; he should be the one who takes Randle. Because he doesn’t, Oladipo has to."],
      answer: 0,
      concept: "Oladipo is the low man, so he helps at the rim. The next-lowest defender on the weak-side, Holiday, is in what’s called “help the helper” position. His job is to split the difference between his man (Randle) and Oladipo’s man (Dotson). On any pass out to one of these two players, Holiday will take the ball and Oladipo will recover to the other Knick. Because the ball goes to Dotson first, they wind up switching defensive assignments, which is known as an \"X-Out.\""
    },
    {
      question: "9. Watch Jerami Grant (no. 9) and Torrey Craig (no. 3). They execute which help defensive coverage?",
      link: "https://videos.nba.com/nba/pbp/media/2020/01/19/0021900638/12/8bda6373-cfd5-0fa4-8589-c16dff41c42f_960x540.mp4",
      choices: ["X-Out on the weak side",
        "Passing lane stunt",
        "Help & recover",
        "None of the above"],
      answer: 2,
      concept: "Because Grant and Craig never wind up switching men, this is not an X-Out. What happens, though, is that Craig tags the rolling Sabonis at the front of the rim, where he’s going to “trap the box”, a fancy term for preventing an easy dunk or layup. As Craig does that, Grant sinks to temporarily guard both his man and Craig’s. But when Sabonis throws the ball to Grant’s man first, Craig is able to recover back to his assignment without any switches."
    },
    {
      question: "10. Why was Dorian Finney-Smith (no. 10, Dallas) so open in the corner?",
      link: "https://videos.nba.com/nba/pbp/media/2020/03/04/0021900923/54/c167109c-7133-cd53-4b87-968740fa61f2_960x540.mp4",
      choices: [
        "Derrick Favors (#22) is supposed to X-Out and take Finney-Smith in the corner",
        "Brandon Ingram (#14) is supposed to stunt and recover to Porzingis, but over-commits",
        "Ingram doesn’t to an effective enough job at taking the passing lane away with his angle when rushing towards Porzingis",
        "Jrue Holiday (#11) never finished the rotation to the corner"],
      answer: 0,
      answer2: 1,
      concept: "It is impossible to tell who of Favors or Ingram blows the coverage without hearing what the Pelicans gameplan was for these situations. Regardless, the coverage is botched: both Ingram and Favors should never both charge at Porzingis and commit to the ball. No matter what the desired defensive scheme is, execution relies on communication to know whether a player recover to his man or needs a teammate to X-Out on his behalf.",
      // conceptLink: "https://youtu.be/TTbz-FI-ZhQ?t=437"
    }
    ]
    
    let correctAnswers = 0
    
    const startButton = document.getElementById('start-btn')
    const otherButton = document.getElementById('other-btn')
    const tweetButton = document.getElementById('tweet')
    const nextButton = document.getElementById('next-btn')
    const questionContainerElement = document.getElementById('question-container')
    const questionElement = document.getElementById('question')
    const answerButtonsElement = document.getElementById('answer-buttons')
    const videoElement = document.getElementById('video')
    const finalScore = document.getElementById("final-score")
    const intro = document.querySelector(".intro")
    // const spinsButton = document.getElementById('spins-btn')
    
    let currentQuestionIndex
    tweetButton.addEventListener('click', tweetLink)
    startButton.addEventListener('click', startGame)
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++
        setNextQuestion()
    })
    
    function tweetLink() {
      window.open(`https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.basketballquizzes.com&text=I%20scored%20a%20${correctAnswers}%20out%20of%20${questions.length}%20on%20the%20NBA%20Offense%20Quiz%20no.%202.%20See%20if%20you%20can%20beat%20my%20score%21`, "_blank")
    }
    
    function startGame() {
        correctAnswers = 0
        startButton.classList.add('hide')
        otherButton.classList.add('hide')
        tweetButton.classList.add('hide')
        // spinsButton.classList.add('hide')
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
        if (question.hasOwnProperty("link")) {
          document.getElementById("youtube").classList.add('hide')
          videoElement.classList.remove("hide")
          videoElement.innerHTML = `<video controls>
        <source src="${question.link}" type="video/mp4">
        Your browser does not support the video tag.
        </video>`
      }
        else {
          videoElement.classList.add("hide")
          document.getElementById("youtube").classList.remove('hide')
          document.getElementById("youtube").innerHTML = question.youtube
      }
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
        tweetButton.classList.remove('hide')
        // spinsButton.classList.remove('hide')
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