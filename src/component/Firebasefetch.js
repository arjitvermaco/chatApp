import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import auth, { db } from '../utils/Firebase';

export default function Firebasefetch() {
    const [chatMessages, setChatMessages] = useState([]);
    const myUserId = auth.currentUser.uid;
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                // Corrected query: removed the space in "createdAt "
                const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));

                // Use the query in onSnapshot to fetch ordered documents
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const chatArray = [];
                    querySnapshot.forEach((doc) => {
                        // Also consider including the document ID if needed
                        chatArray.push({ id: doc.id, ...doc.data() });
                    });
                    setChatMessages(chatArray);
                });

                // Clean up this effect by unsubscribing from the listener when the component unmounts
                return () => unsubscribe();
            } catch (error) {
                console.error("Error fetching messages: ", error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div className=''>
            {chatMessages.map((message) => (
                <div key={message.id} className={` text-center w-1/4 mx-auto mt-3 ${myUserId === message.userId ? "bg-teal-500":"bg-red-400"}` }>
                    {message.chat}
                </div>
            ))}
        </div>
    );
}
