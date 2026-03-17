import React, { useState, useEffect } from 'react'
import StatusBar from './StatusBar.jsx'
import './FetchData.css'
import ResultPage from './ResultPage.jsx'
import { useNavigate } from 'react-router-dom';

function FetchData({number, category, level, type}) {

    const [data, setData] = useState([])
    const [questionIndex, setQuestionIndex] = useState(0)
    const [userChoices, setUserChoices] = useState([])
    const [allChoices, setAllChoices] = useState([])

    const navigate = useNavigate()
    const totalQuestions = number
    const currentQuestion = questionIndex + 1

    useEffect(() => {
        async function getData() {
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${level}&type=${type}`)
        const result = await response.json()
        setData(result.results)
        console.log(result)
    } 
    catch (error) {
        console.error("Error fetching data:", error)
    }
    } getData()}, [])
    const question = data[questionIndex]?.question
    const answer = data[questionIndex]?.correct_answer
    const currentCategory = data[questionIndex]?.category
    const choices = data[questionIndex]?.incorrect_answers || []
    useEffect(()=>{
    if(answer){
    const shuffled = [...choices, answer].sort(() => Math.random() - 0.5)
    setAllChoices(shuffled)}}, [questionIndex, answer, choices])
    function previousQuiz(){
        if (questionIndex > 0) {setQuestionIndex(q => q - 1)}
    }
    function nextQuiz(){
        questionIndex < number-1 ? setQuestionIndex(q => q + 1) : setQuestionIndex(data.length)
    }
    function newChoice(event, index){
        const userCurrentChoice = event.target.value
        console.log(userCurrentChoice)
        updatedChoices(userCurrentChoice, index)
    }
    function updatedChoices(current, index){
        setUserChoices((c)=> {
        const newChoices = [...c]
        newChoices[index] = current
        return newChoices
    })}
    if (data.length === 0) {
        return <h2>Loading...</h2>
    }
    const score = data.reduce((acc, q, i)=>{
        if(userChoices[i] === q.correct_answer) 
            acc++
            return acc
        },0)
        // if (numberOfQuestions && category && level && type) {
        //     navigate('/quiz', { state: { number: numberOfQuestions, category, level, type } })

    if (questionIndex >= data.length) {
    return (
        <ResultPage data={data} userChoices={userChoices} onRestart={() => {navigate('/');
        }} 
    />
  );
    }
    return (
    <div>
        <StatusBar currentQuestion={currentQuestion} totalQuestions={totalQuestions} />
        <h3 className='question' dangerouslySetInnerHTML={{ __html: question }} />
        {allChoices.map((element, index) => (
            <label key={index} className='choices'>
                <input type="radio" name={`quiz-${questionIndex}`} value={element} onChange={(event) => newChoice(event, questionIndex)} checked={userChoices[questionIndex] === element} />
                <span dangerouslySetInnerHTML={{ __html: element }} />
            </label>))}
        <div className='Display'>
            <div className='category-display'>CATEGORY: {currentCategory.replaceAll('&amp;','and')}</div>
            <div className='level-display'>Level: {data[questionIndex]?.difficulty} </div>
        </div>
        <button className='prev' onClick={previousQuiz}>Previous</button>
        <button className='next' onClick={nextQuiz}>Next</button>

    </div>)}
export default FetchData
