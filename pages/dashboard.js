import React from 'react'
import Router from 'next/router'
import { GlobalStateContext, GlobalDispatchContext } from '../context/global'
import { Machine, assign } from 'xstate'
import { useMachine } from '@xstate/react'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const modeMachine = Machine({
  id: 'mode',
  initial: 'editing',
  context: {
    error: null,
  },
  states: {
    editing: {
      on: {
        CHANGE_MODE: {
          actions: 'changeMode',
        },
        SUBMIT: 'submitting',
      },
    },
    submitting: {
      invoke: {
        src: 'submit',
        onDone: {
          target: 'success',
          actions: 'setUserMode',
        },
        onError: {
          target: 'failure',
          actions: 'setError',
        },
      },
    },
    success: {
      meta: {
        message: 'The theme change succeeded!',
      },
    },
    failure: {
      on: {
        CHANGE_MODE: {
          target: 'editing',
          actions: ['changeMode', 'clearError'],
        },
      },
    },
  },
})

const DashboardPage = () => {
  const globalState = React.useContext(GlobalStateContext)
  const globalDispatch = React.useContext(GlobalDispatchContext)

  const [current, send] = useMachine(modeMachine, {
    actions: {
      changeMode: assign({
        type: (_ctx, evt) => evt.value,
      }),
      setUserMode: (_ctx, evt) => {
        globalDispatch({
          type: 'MODE',
          value: globalState.context.themeMode === 'dark' ? 'light' : 'dark',
        })
        Router.push('/dashboard')
      },
      setError: assign({
        error: (_ctx, evt) => evt.data,
      }),
      clearError: assign({
        error: (_ctx, _evt) => null,
      }),
    },
    services: {
      submit: (_ctx, _evt) =>
        new Promise(async (resolve, reject) => {
          await sleep(2000)

          if (globalState.context.themeMode === 'light') {
            resolve('dark')
          } else {
            resolve('light')
          }
          console.log('DASHBOARD themeMode: ', globalState.context.themeMode)
        }),
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    send({ type: 'SUBMIT' })
  }

  //   console.log('DASHBOARD DATA: ', globalState)
  //   console.log('DASHBOARD DATA: ', globalDispatch)
  return (
    <div>
      Signin:
      <form onSubmit={handleSubmit}>
        <div>{globalState.context.themeMode}</div>
        <button type="submit">Submit</button>
      </form>
      <br />
      {globalState.context.userData} <br />
      {globalState.context.themeMode}
    </div>
  )
}
export default DashboardPage
