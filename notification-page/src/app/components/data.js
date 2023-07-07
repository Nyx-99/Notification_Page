import { 
    avatar1, 
    avatar2, 
    avatar3, 
    avatar4, 
    avatar5, 
    picture5, 
    avatar6, 
    avatar7 
} from "../assets/images";

var notiList = [
    {
        id: 1,
        name: 'Mark Webber',
        img: avatar1.src,
        content: 'reacted to your recent post',
        post: 'My first tournament today!',
        time: '1m ago',
        active: true
    },
    {
        id: 2,
        name: 'Angela Gray',
        img: avatar2.src,
        content: 'followed you',
        time: '5m ago',
        active: true
    },
    {
        id: 3,
        name: 'Jacob Thompson',
        img: avatar3.src,
        content: 'has joined your group',
        group: 'Chess Club',
        time: '1 day ago',
        active: true
    },
    {
        id: 4,
        name: 'Rizky Hasanuddin',
        img: avatar4.src,
        content: 'sent you a private message',
        message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.',
        time: '5 days ago',
        active: false
    },
    {
        id: 5,
        name: 'Kimberly Smith',
        img: avatar5.src,
        content: 'commented on your picture',
        picture: picture5.src,
        time: '1 week ago',
        active: false
    },
    {
        id: 6,
        name: 'Nathan Peterson',
        img: avatar6.src,
        content: 'reacted to your recent post',
        post: '5 end-game strategies to increase your win rate',
        time: '2 weeks ago',
        active: false
    },
    {
        id: 7,
        name: 'Anna Kim',
        img: avatar7.src,
        content: 'left the group',
        group: 'Chess Club',
        time: '2 weeks ago',
        active: false
    },
];
export default notiList 
