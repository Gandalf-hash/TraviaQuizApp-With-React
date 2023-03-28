import "./trivia-item.css";

/**
 * @param {object} props 
 * @param {string} props.correctAnswer 
 * @param {string[]} props.incorrectAnswer 
 * @param {string} props.question 
 * @param {() => void} props.onNextClick 
 */

//  Renders an Individual trivia question and waits for a user's answer.
function TriviaItem({ correctAnswer, incorrectAnswer, question, onNextClick }) {
    return (
       <div>
        <p className="trivia-item__question">{question}</p>
        <ul className="trivia-item__answers">
            <li>
                <button className="trivia-item__button">{correctAnswer}</button>
            </li>
            <li>
                <button className="trivia-item__button">{incorrectAnswer[0]}</button>
            </li>
            <li>
                <button className="trivia-item__button">{incorrectAnswer[1]}</button>
            </li>
            <li>
                <button className="trivia-item__button">{incorrectAnswer[2]}</button>
            </li>
        </ul>
        <button className="trivia-item__button trivia-item__next-button" onClick={onNextClick}>Next⏭</button>
       </div>
    );
}
export default TriviaItem;