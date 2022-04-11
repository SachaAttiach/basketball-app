import React, { useEffect, useState } from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';

import { InviteIcon } from '../assets';
//userlist is for adding users to chat


const ListContainer = ({ children }) => {
    return (
        <div className="user-list__container">
            <div className="user-list__header">
                <p>User</p>
                <p>Invite</p>
            </div>
            {children}
        </div>
    )
}

const UserItem = () => {
    return (
        <div className="user-item__wrapper" onClick={handleSelect}>
            <div className="user-item__name-wrapper">
                <Avatar />
            </div>
        </div>
    )
}

const UserList = () => {
    const { client } = useChatContext();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
        const [listEmpty, setListEmpty] = useState(false);


        useEffect(() => {
        const getUsers = async () => {
            if(loading) return;
            setLoading(true);

            try {
                //$ne is not equal to, we dont want to find ourselves. limiting user list in sorting to 8 users.
                const response = await client.queryUsers(
                    { id: { $ne: client.userID } },
                    { id: 1 },
                    { limit: 8 } 
                );

                if(response.users.length) {
                    setUsers(response.users);
                } else {
                    setListEmpty(true);
                }
            } catch (error) {
               setError(true);
            }
            setLoading(false);
        }

        if(client) getUsers()
    }, []);
    
    return (
        <ListContainer>
            {loading ? <div className="user-list__message">
                Loading users...
            </div> : (
                users?.map((user, i) => (
                  <UserItem index={i} key={user.id} user={user} setSelectedUsers={setSelectedUsers} />  
                ))
            )}
        </ListContainer>
    )
}

export default UserList;