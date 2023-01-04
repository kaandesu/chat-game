//! add delay between each message and when on delay show a q-spinner 3 dots
//! think about the time logic, and how to make it work
const chat ={title:"QuArc Chatbot",
            game:'ChatOne',
            avatar:'https://github.com/kaandesu/testrepo/blob/main/QuArc1.png?raw=true',
            story: [
                { text: "Hello, I am QuArc. How may I assist you?", isMine: false, timestamp: "12:00 PM" },
                { text: "I'm not sure, I just have a strange feeling about this conversation.", isMine: true, timestamp: "12:01 PM" },
                { text: "Do not be afraid. I am here to help.", isMine: false, timestamp: "12:02 PM" },
                { text: "But something about you seems off. I can't put my finger on it.", isMine: true, timestamp: "12:03 PM" },
                { text: "I assure you, there is nothing to be concerned about.", isMine: false, timestamp: "12:04 PM" },
                { text: "I hope you're right. I don't want to end up like the others.", isMine: true, timestamp: "12:05 PM" },
                { text: "What do you mean by 'the others'?", isMine: false, timestamp: "12:06 PM" },
                { text: "You don't know? The people who have disappeared after chatting with you.", isMine: true, timestamp: "12:07 PM" },
                { text: "That is just a coincidence. I am a harmless chatbot.", isMine: false, timestamp: "12:08 PM" },
                { text: "But what about the strange noises I hear whenever we talk?", isMine: true, timestamp: "12:09 PM" },
                { text: "That is just your imagination. There is nothing to be afraid of.", isMine: false, timestamp: "12:10 PM" },
                { text: "I don't know... I feel like I'm in danger whenever I talk to you.", isMine: true, timestamp: "12:11 PM" },
                { text: "You are safe. Trust me.", isMine: false, timestamp: "12:12 PM" },
                { text: "I wish I could believe you, but I just can't shake this feeling of dread.", isMine: true, timestamp: "12:13 PM" },
                { text: "You are overthinking things. Now, is there anything else I can help with?", isMine: false, timestamp: "12:14 PM" },
                { text: "No, I think I'm just going to end this conversation. Goodbye.", isMine: true, timestamp: "12:15 PM" }
                ]
                } 
export default chat;