import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Counter App</h1>
    <div class="card">
      <button id="counter"></button>
    </div>
    <p>
      Click on the above button to increate its counter by 1
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
