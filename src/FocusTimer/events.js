import { controls } from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'
import state from './state.js'

export function registerControls() {
    controls.addEventListener('click', (event) => {
       const action = event.target.dataset.action
       if(typeof actions[action] != "function") {
        return
       }

       actions[action]()
    })
}

export function setMinutes () {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time 

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
} 
/*
el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
        
Para dar foco quando clicar para alterar o cronômetro,
mas deixando o campo vazio 


el.minutes.onkeypress = (event) => /\d/.test(event.key)

Para não aceitar escrever letras, para que escreva 
somente números
*/