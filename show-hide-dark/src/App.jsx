import { useState } from "react"


export default function App () {
  const [isVisible, setIsVisible ] = useState(true)
  const [isdark , setIsDark] = useState(true)

   let text = "Hello! You found the secret message 🎉"
   let hideShowButtonText = 'Hide text'
   let darkLiteModeButton = 'Click for lite mode'
   let backgroundColor = 'white'

  function hideText () {
    setIsVisible((isOn)=> !isOn)
  }
  
  function darkLiteMode (){
     setIsDark((isDarkLite)=> !isDarkLite)
  }
  
  if (!isdark) {
    backgroundColor = 'black'
      } else {
        darkLiteModeButton = 'Click for dark mode'
      }
  
  if (!isVisible) {
    text 
  }else {
    text = ''
    hideShowButtonText = 'Show text'
  }

  

  return (
<div style={{background : backgroundColor}} >
<h1 style={!isdark ? {color : "white"} : {color : "black"}}>{text}</h1>
<button onClick={hideText} >{hideShowButtonText}</button>
<button onClick={darkLiteMode}>{darkLiteModeButton}</button>
</div>
  )
}