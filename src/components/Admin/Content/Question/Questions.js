import Select from 'react-select';
import { useState } from 'react';
import './Questions.scss';
import { FaPlus, FaMinus, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { RiImageAddFill } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';


const Questions = (props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedQuiz, setSelectedQuiz] = useState({});

    const [questions] = useState([
        {
            id: uuidv4(),
            description: 'Question 1',
            imageFile: '',
            imageName: '',
            answers: [
                { id: uuidv4(), description: 'Answer 1', isCorrect: false },
                { id: uuidv4(), description: 'Answer 2', isCorrect: false }
            ]
        },
        {
            id: uuidv4(),
            description: 'Question 2',
            imageFile: '',
            imageName: '',
            answers: [
                { id: uuidv4(), description: 'Answer 1', isCorrect: false },
                { id: uuidv4(), description: 'Answer 2', isCorrect: false }
            ]
        },
        {
            id: uuidv4(),
            description: 'Question 3',
            imageFile: '',
            imageName: '',
            answers: [
                { id: uuidv4(), description: 'Answer 1', isCorrect: false },
                { id: uuidv4(), description: 'Answer 2', isCorrect: false }
            ]
        }
    ])

    return (
        <div className="questions-container">
            <div className="title">
                Manage Questions
            </div>
            <hr />
            <div className="add-new-questions">
                <div className='col-6 form-group'>
                    <label className='mb-2'>Select Quiz: </label>
                    <Select
                        value={selectedQuiz}
                        onChange={setSelectedQuiz}
                        options={options}
                    />
                </div>
                <div className='mt-3 mb-2'>
                    Add Questions:
                </div>
                {
                    questions && questions.length > 0

                    && questions.map((questions, index) => {
                        return (
                            <div key={questions.id} className='q-main mb-4'>
                                <div className='questions-content'>
                                    <div className="form-floating description">
                                        <input type="text" className="form-control" placeholder="name@example.com" value={questions.description} />
                                        <label>Question {index + 1} 's Description</label>
                                    </div>
                                    <div className='group-upload'>
                                        <label><RiImageAddFill className='label-up' />Upload Image</label>
                                        <input type={'file'} hidden />
                                        <span>0 file is uploaded</span>
                                    </div>
                                    <div className='btn-add'>
                                        <span><FaPlus className='icon-add' /></span>
                                        <span><FaMinus className='icon-remove' /></span>
                                    </div>
                                </div>

                                {questions.answer && questions.answer.length > 0
                                    && questions.answer.map((answer, index) => {
                                        return (
                                            <div key={answer.id} className='answers-content'>
                                                <input className="form-check-input iscorrect" type="checkbox" />
                                                <div className="form-floating answer-name">
                                                    <input type="text" className="form-control" placeholder="name@example.com" />
                                                    <label>Answer 1</label>
                                                </div>
                                                <div className='btn-group'>
                                                    <span><FaPlusCircle className='icon-add' /></span>
                                                    <span><FaMinusCircle className='icon-remove' /></span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Questions;