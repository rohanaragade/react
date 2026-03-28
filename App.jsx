import React from 'react'
import './App.css'
import Jsx from './ComponentS/Jsx'
import ConditionalRendering from './ComponentS/ConditionalRendering'
import NetFlixSeries from './ComponentS/NetFlixSeries'
import Props from './ComponentS/Props'
import ConditionalCss from './ComponentS/ConditionalCss'
import EventHandling from './ComponentS/EventHandling'
import EventHandleProps from './ComponentS/EventHandleProps'
import UseState from './UseStateReact/UseState'
import UseStatemap from './UseStateReact/UseStatemap'
import UseStateLifting from './UseStateReact/UseStateLifting'
import Toggle from './UseStateReact/Toggle'
import Todo from './Project/Todo'


function App() {
  return (
    <>
      <h1>This Is Ultimate React Series</h1>
      <Jsx />
      <br />
      <ConditionalRendering />
      <br />
      <NetFlixSeries />
      <br />
      <Props name="CSK" total={5} captain={<i><b>M.S.DHONI</b></i>}>
        <p>
          6 Ipl trophy Comming Soon
        </p>
      </Props>
      <br />
      <ConditionalCss />
      <br />
      <EventHandling />
      <br/>
      <EventHandleProps />
      <br />
      <UseState />
      <UseStatemap />
      <br />
      <UseStateLifting />
      <br />
      <Toggle />
      <br /><br/>
      <Todo />
    </>
  )
}

export default App
