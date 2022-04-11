import React from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';

const TeamChannelPreview = ({channel, type}) => {
  // from stream
    const { channel: activeChannel, client } = useChatContext();

    //channel for group chat
        const ChannelPreview = () => (
        <p className="channel-preview__item">
            Write channel name {channel?.data?.name || channel?.data?.id}
        </p>
    );

    //channel for direct chat
    //here I map over all users and keeping the ones where the id is not equal to client id which is basically just our id.
    const DirectPreview = () => {
        const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);
    
        console.log(members[0]);

        return (
            <div className="channel-preview__item single">
                <Avatar 
                    image={members[0]?.user?.image}
                    name={members[0]?.user?.fullName || members[0]?.user?.id}
                    size={24}
                />
                <p>{members[0]?.user?.fullName || members[0]?.user?.id}</p>
            </div>
        )
    }
// diff classname depending on if current chat is selected or not
    return (
        <div className={
            channel?.id === activeChannel?.id
                ? 'channel-preview__wrapper__selected'
                : 'channel-preview__wrapper'
        }        
        onClick={() => {
            console.log(channel)
        }}>
        {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
        </div>
    );
}

export default TeamChannelPreview
