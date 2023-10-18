import './myButton.css'
const MyButton = ({
    children,
    clickHandle,
    disabled
}:{
    children:string,
    clickHandle:()=>void,
    disabled:boolean
}) => {
    return ( 
        <button onClick={clickHandle} className="my-btn" disabled={disabled}>
            {children}
        </button>
     );
}
 
export default MyButton;