import styles from '../styles/Home.module.css'

function generateoptions(option){
    return (
        <option value = {option}>{option}</option>
    )
} 
export default function menu(props) {
    return (
        <div className="menu">
            <label>{props.label} : </label>
            <select name = {props.label} id = {props.label}>
                {props.options.map(generateoptions)}
            </select>
            <br></br>
            <hr></hr>
        </div>
    );
  }
  