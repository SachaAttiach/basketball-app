import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer } from './components';

const apiKey = process.env.API_KEY
const client = StreamChat.getInstance(apiKey);

const App = () => {

    return (
        <div className="app__wrapper">
            <Chat>
                <ChannelListContainer 

                />
                <ChannelContainer 

                />
            </Chat>
        </div>
    );
}

export default App