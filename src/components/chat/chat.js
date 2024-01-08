import { MessageOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getChatUsersApi, sendMessageApi } from '../../Http/api';
import styles from './chat.module.css';

import avatarImage from '../../assets/avatar.png';

const ChatComponent = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatUsers, setChatUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const openChatWithUser = (user) => {
    setSelectedUser(user);
  };

  const fetchChats = async () => {
    const userInfo = JSON.parse(localStorage.getItem('user'));

    if (userInfo && userInfo.userId) {
      setCurrentUserId(userInfo.userId);
      getChatUsersApi(userInfo.userId)
        .then((res) => {
          const groupedChats = groupChatsByUsers(
            res.data.chats,
            userInfo.userId
          );
          setChatUsers(groupedChats);
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            title: 'Error',
            text: 'Error',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        });
    }
  };
  useEffect(() => {
    fetchChats();
  }, [isChatOpen]);

  useEffect(() => {
    const chatOpen = JSON.parse(localStorage.getItem('chatOpen'));
    if (chatOpen) {
      setChatOpen(true);
      localStorage.removeItem('chatOpen');
    }
  }, [localStorage]);

  function groupChatsByUsers(chats, currentUserId) {
    const groupedChats = {};

    chats.forEach((chat) => {
      const otherUserId =
        chat.sender_id === currentUserId ? chat.receiver_id : chat.sender_id;

      if (!groupedChats[otherUserId]) {
        groupedChats[otherUserId] = {
          user:
            chat.sender_id === currentUserId
              ? chat.receiver_username
              : chat.sender_username,
          id: otherUserId,
          messages: [],
        };
      }

      groupedChats[otherUserId].messages.push({
        message: chat.message,
        sender_id: chat.sender_id,
        receiver_id: chat.receiver_id,
        sender_username: chat.sender_username,
        receiver_username: chat.receiver_username,
        lastMessage: chats[chats.length - 1].message,
      });
    });

    return Object.values(groupedChats);
  }

  const sendMessage = () => {
    const payload = {
      sender_id: currentUserId,
      reciever_id: selectedUser.id,
      message: newMessage,
    };

    sendMessageApi(payload).then((res) => {
      fetchChats();
      setNewMessage('');
    });
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatIcon} onClick={toggleChat}>
        <MessageOutlined style={{ fontSize: '50px', color: 'white' }} />
      </div>
      {isChatOpen && (
        <div className={styles.chatWindow}>
          {selectedUser ? (
            <div className={styles.messagesList}>
              <div className={styles.userNameRow}>
                <div className={styles.userNameContainer}>
                  <img
                    src={avatarImage}
                    alt={selectedUser.name}
                    className={styles.avatar}
                  />
                  <div className={styles.userRow}>
                    <strong>{selectedUser.user}</strong>
                  </div>
                </div>
                <div
                  className={styles.closeIcon}
                  onClick={() => setSelectedUser(null)}
                >
                  x
                </div>
              </div>
              <div className={styles.chatMessages}>
                {selectedUser.messages.map((message) => (
                  <div
                    key={message.id}
                    className={
                      message.sender_id === currentUserId
                        ? styles.sentMessage
                        : styles.receivedMessage
                    }
                  >
                    <div className={styles.senderName}>
                      {message.sender_id === currentUserId
                        ? 'You'
                        : message.sender_username}
                    </div>
                    <div className={styles.messageText}>{message.message}</div>
                  </div>
                ))}
              </div>
              <div className={styles.messageInputContainer}>
                <input
                  type="text"
                  className={styles.messageInput}
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className={styles.sendButton} onClick={sendMessage}>
                  Send
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.userList}>
              {chatUsers.map((user) => (
                <div
                  key={user.id}
                  className={styles.user}
                  onClick={() => openChatWithUser(user)}
                >
                  <img
                    src={avatarImage}
                    alt={user.user}
                    className={styles.avatar}
                  />
                  <div className={styles.userRow}>
                    <strong>{user.user}</strong>
                    <p>{user.messages[user.messages.length - 1].lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
