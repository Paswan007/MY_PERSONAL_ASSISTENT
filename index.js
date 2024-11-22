 let btn = document.querySelector("#btn")
 let content = document.querySelector("#content")
 let gif = document.querySelector("#gif")


function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "Hi-GB"
    window.speechSynthesis.speak(text_speak)
   
}

// //  speak("Hllow sir, how can i help you")

let speechRecognition = window.SpeechRecognition|| window.webkitSpeechRecognition
let recognition =  new speechRecognition()
recognition.onresult = (event)=>{
        let currentIndex = event.resultIndex
        let transcript =   event.results[currentIndex][0].transcript
        content.innerText = transcript
         takeCommand(transcript.toLowerCase())
 }

 btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display = "none"
    gif.style.display = "block"
 })

  function takeCommand(message){
   btn.style.display = "flex"
   gif.style.display = "none"
         if(message.includes("hello")){
         speak("hello sir, what can i help you ?")
            }
         else if(message.includes("who creates you")){
           speak("I am virtual assistent, created by Kunal")
            }
         else if(message.includes("open youtube")){
                speak("opening youtube")
                window.open("https://www.youtube.com/")
            }
         else if(message.includes("open google")){
               speak("opening google..")
               window.open("https://www.google.com")
         }
         else if(message.includes("open whatsapp")){
            speak("opening whatsapp..")
            window.open("whatsapp://")
        }
        else if(message.includes("time")){
         let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
         speak(time)
     }

         else{
            speak("This is what i found on internet")
            window.open(`https://www.google.com/search?q=${message}`)
         }
}