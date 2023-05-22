import './PersonalInfo.css';
import { useState } from "react";
// import iconButton from "@material-ui/core/IconButton";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/Visibility";




function PersonalInfo(props) {
  const [focused, setFocused] = useState(false);
  // const [passed, setPassed]= useState(
  //   {showPassword:false
  //   });
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  

  const handleFocus = (e) => {
    setFocused(true);
  } 
  // const handleClickShowPassword = (e)=>{
  //   setPassed({...passed, showPassword:!passed.showPassword});
  // };
  // const handleMouseDownPassword = (e)=>{
    // e.preventDefault();
  // };


  return (
    <div className='personalInfo'>
      <form>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} 
        //  end Adornment={<iconButton onClick={handleClickShowPassword}>
          // {passed.showPassword?<Visibility/>: <VisibilityOff/>}
        //  </iconButton>}
        ></input>
        <span>{errorMessage}</span>
      </form >
    </div >
  )
}

export default PersonalInfo

