import Interview from "../models/interview.model";

export const startInterview = async (req,res) => {

    const { role } = req.body
    
    const firstQuestion = "Tell me about yourself"

    const interview = await Interview.create({
        userId : req.userId,
        role,
        currentQuestion : firstQuestion,
        questions : []
    })

    res.json({
        intervewId : interview._id,
        question : firstQuestion
    })
       
}
    export const getQuestion = async (req,res) => {
          
        const {interviewId} = req.params
        
        const interview = await Interview.findById(interviewId)

        res.json({
            question  : interview.currentQuestion
        })
        
    }

    export const SubmitAnswer = async (req,res) => {

        const {intervewId , answer} = req.body

        const interview =  await Interview.findById(interviewId)

        const question = interview.currentQuestion

        interview.questions.push({
            question,
            answer
        })

        interview.currentQuestion = "Why do you want to work for our company?"

        await interview.save()

        res.json({
            nextQuestion: interview.currentQuestion
        })
    }
     

