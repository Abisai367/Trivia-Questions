import React, { useState } from 'react'
import FetchData from './FetchData'
import './Preference.css'
import { useNavigate } from 'react-router-dom';
export default function Preference() {
    const [numberOfQuestions, setNumberOfQuestions] = useState();
    const [category, setCategory] = useState();
    const [level, setLevel] = useState();
    const [type, setType] = useState();
    const navigate = useNavigate();

    function numberOfQuiz(event) {
        setNumberOfQuestions(event.target.value).toString()
    }

    function categoryOfQuiz(event) {
        setCategory(event.target.value)
    }

    function levelOfQuiz(event) {
        setLevel(event.target.value)
    }

    function typeOfQuiz(event) {
        setType(event.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (numberOfQuestions && category && level && type) {
            navigate('/quiz', { state: { number: numberOfQuestions, category, level, type } })
        }
        else {
            alert('Please fill in all fields!');
        }
    }
    return (
        <form>
            <h1>WELCOME TO TRIVIA QUESTIONS BY DEVELOPER ABISAI<br></br> <span>🤓</span></h1>
            <p className='introText'>To Proceed Please Answer the Following Questionaire:</p>
            <label className='section-header'>
                <p>Select the Number Of Questions</p>
                <label>
                    <input type='radio' name='number' value='5' onChange={numberOfQuiz} />
                    5
                </label><br />

                <label>
                    <input type='radio' name='number' value='10' onChange={numberOfQuiz} />
                    10
                </label><br />

                <label>
                    <input type='radio' name='number' value='15' onChange={numberOfQuiz} />
                    15
                </label><br />

                <label>
                    <input type='radio' name='number' id='other-specifity' value='20' onChange={numberOfQuiz}/>
                    20
                </label><br />
            </label>

            <label className='section-header'>
                <p>Select a Category Of Questions</p>
                <select id='my-category' value={category} onChange={categoryOfQuiz}>
                    <option>Select a Category</option>
                    <option value='9' >General Knowledge</option>
                    <option value='10'>Entertainment: Books</option>
                    <option value='11'>Entertainment: Film</option>
                    <option value='12' >Entertainment: Music</option>
                    <option value='13' >Entertainment: Musical & Theatres</option>
                    <option value='14' >Entertainment: Television</option>
                    <option value='15' >Entertainment: Video Games</option>
                    <option value='16' >Entertainment: Board Games</option>
                    <option value='17' >Science & Nature</option>
                    <option value='18' >Science: Computers</option>
                    <option value='19' >Science: Mathematics</option>
                    <option value='20' >Mythology</option>
                    <option value='21' >Sports</option>
                    <option value='22' >Geography</option>
                    <option value='23' >History</option>
                    <option value='24' >Politics</option>
                    <option value='25' >Art</option>
                    <option value='26' >Celebrities</option>
                    <option value='27' >Animals</option>
                    <option value='28' >Vehicles</option>
                    <option value='29' >Entertainment: Comics</option>
                    <option value='30' >Science: Gadgets</option>
                    <option value='31' >Entertainment: Japanese Anime & Manga</option>
                    <option value='32' >Entertainment: Cartoon & Animations</option>
                </select>

            </label>

            <label className='section-header'>
                <p>Select the level of Difficulty</p>
                <label>
                    <input type='radio' name='difficulty' value='easy' onChange={levelOfQuiz} />
                    Easy
                </label><br />
                <label>
                    <input type='radio' name='difficulty' value='medium' onChange={levelOfQuiz} />
                    Medium
                </label><br />
                <label>
                    <input type='radio' name='difficulty' value='hard' onChange={levelOfQuiz} />
                    Hard
                </label><br />
            </label>

            <label className='section-header'>
                <p>Select type of Questions</p>
                <label>
                    <input type='radio' name='type' value='boolean' onChange={typeOfQuiz} />
                    True/False
                </label><br />
                <label>
                    <input type='radio' name='type' value='multiple' onChange={typeOfQuiz} />
                    Multiple Choice
                </label><br />
            </label>
            <button type='submit' id='submit-btn'onClick={handleSubmit}>Fetch Questions</button>
        </form>
    )
}
