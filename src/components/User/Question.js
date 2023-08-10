/* eslint-disable jsx-a11y/alt-text */
import _ from "lodash";

const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return null;
    }

    const handleCheckbox = (event, aId, qId) => {
        // console.log('check:', event.target.checked)
        props.handleCheckbox(aId, qId);
    };

    return (

        <>
            {data.image ?
                <div className="q-image"><img src={`data:image/jpeg;base64,${data.image}`} /></div> : <div className="q-image"></div>}
            <div className="question">Question {index + 1}: {data.questionDescription} ?</div>
            <div className="answer">
                {data.answers && data.answers.length > 0 &&
                    data.answers.map((a, idx) => {
                        return (
                            <div key={`answer-${idx}`} className="a-child">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" checked={a.isSelected} onChange={(event) => handleCheckbox(event, a.id, data.questionId)} />
                                    <label className="form-check-label">
                                        {a.description}
                                    </label>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default Question;