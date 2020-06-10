import axios from 'axios';

let user = [];

axios.get('/get_user')
.then(response => {
    user = response.data
});

export {user};