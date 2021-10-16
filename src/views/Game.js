import { useState, useEffect } from "react";

const Game = () => {

    const [questions, setQuestions] = useState([])

    async function fetchQuestions() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const preguntas = await fetch('https://6141ec414d16670017ba2a7b.mockapi.io/api/v1/questions', 
        requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result 
        })
        .catch((error) => {
            return error 
        })
        console.log('Preguntas:', preguntas)
        setQuestions(preguntas)
    }

    useEffect(() => {
        //aca va el fetch
        fetchQuestions()
    }, [])

    const RespuestasIncorrrectas = (props) => {
        const { respuestas } = props;
        console.log('Respuestas:', respuestas[0])
            return (
                <>
                <h5>{respuestas[0].answerA}</h5>
                <h5>{respuestas[0].answerB}</h5>
                <h5>{respuestas[0].answerC}</h5>

                </>
            ) 
    };

    return (
        <div>
        <h1>Mi juego de preguntas y respuestas</h1>

        {questions.map((item, key) => {
            return (
                <>
                <h4 key={key}>{item.question}</h4>
                <h5>{item.rightAnswer}</h5>
                <RespuestasIncorrrectas respuestas = {item.wrongAnswers} />
                </>
            );
            })
        }
        
        </div>
    )
}
export default Game 