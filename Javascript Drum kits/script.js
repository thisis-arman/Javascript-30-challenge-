console.log('from script file of drum kits')

window.addEventListener("keydown",function(e){
    const audio = document.querySelector(`audio[data-key="${e.key}"]`
    )
    console.log(audio)
    
})