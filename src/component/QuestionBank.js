import React from 'react';

// const Button = ({ answer }) => (
//     <button className='by-white p-4 font-semibold rounded shadow'>
//         {answer}
//     </button>
// );

const QuestionBank = ({
    handleAnswer,
    data: { question, correct_answer, incorrect_answers },
}) => {
    const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
    return (
        <div>
            <div className='bg-white p-10 rounded-lg shadow-md'>
                <h2 className='text-2xl'
                    dangerouslySetInnerHTML={{ __html: question }} />
            </div>
            <div className='grid grid-cols-2 gap-6 mt-6'>
                {shuffledAnswer.map((answer) => (
                    <button
                        className= 'p-4 font-semibold rounded shadow '
                        onClick={() => handleAnswer(answer)}>
                        {answer}
                    </button>
                ))}
            </div>
        </div>


    );



};

export default QuestionBank;