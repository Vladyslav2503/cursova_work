import React from 'react'
import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {

  return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId='ff18a925-410f-42ef-a95b-d524994eb470'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
        />
    </div>
  )
}

export default ChatsPage