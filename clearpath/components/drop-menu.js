import styles from '../styles/Home.module.css'

function generateoptions(option){
    return (
        <option value = {option} key = {option}>{option}</option>
    )
} 
export default function menu(props) {
    return (
        <div className="menu" key = {props.id}>
            <label>{props.label} : </label>
            <select name = {props.label} id = {props.label}>
                {props.options.map(generateoptions)}
            </select>
            <br></br>
        </div>
    );
  }
  