type user = {id: number; username: String; isActive: boolean}

const vaishali : user = {
    id: 1,
    username: 'vaishali',
    isActive: true
}

const shimni : user = {
    id: 2,
    username: 'shimni',
    isActive: true
}

const sanjana : user = {
    id: 2,
    username: 'sanjana',
    isActive: false
}

const yazhini : user = {
    id: 2,
    username: 'yazhini',
    isActive: true
}

const details = (user: user): void => {
    console.log(user);
};

details(shimni);
details(yazhini);
details(sanjana);