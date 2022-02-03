import styles from '../styles/Home.module.css'

//the code here is the template for 1 drop down menu
function generateoptions(option){
    //iterates through every option and outputs an option
    return (
        <option value = {option} key = {option}>{option}</option>
    )
} 
export default function menu(props) {
    //returns an drop down menu component
    return (
        <div className="menu" key = {props.id}>
            <label>{props.label} : </label>

            <select name = {props.label} id = {props.label}>
                {props.options.map(generateoptions)}
            </select>
            <hr/>
            <br/>
        </div>
    );
  }
  