import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";

const DetailQuiz = (props) => {
    const params = useParams();
    const quizID = params.id;

    useEffect(() => {
        fetchQuestions();
    }, [quizID])
    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizID);
    }
    return (
        <div className="detail-quiz-container">
            DetailQuiz
        </div>
    )
}

export default DetailQuiz;