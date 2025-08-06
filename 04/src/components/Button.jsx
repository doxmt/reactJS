const Button =({children,text,color = "black"})=>{
  const onClickButton =()=>{
    console.log(color)
  }
  return ( 
  <button
    onClick={onClickButton}
    // onClick={()=>{
    //   console.log(text)
    // }}   
      style={{color: color}}>
      {text} - {color.toUpperCase()}
    {children} </button>
  )
};


export default Button;