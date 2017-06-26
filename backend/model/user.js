exports.mockUsers = (page = 2) => {
    var users = [];
    for (let i = 0; i <= 500; i++) {
        let tempU = {
            key: i,
            name: getDifferentText(),
            age: parseInt(page * Math.random() * 100),
            address: getDifferentText()
        }
        users.push(tempU);
    }
    return users;
}

function getDifferentText() {
    return Math.random().toString(36).substr(2);
}


