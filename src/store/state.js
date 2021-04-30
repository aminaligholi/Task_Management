const state = {
    headerType: '',
    Authentication: false,
    userInformationEntered: {},
    users: [
        {
            id: 1,
            fullname: 'Amin Aligholi',
            username: "Amin",
            password: "123456",
            rol: 'Admin',
            works: [],
            avatar: '../assets/logo.png'
        },
        {
            id: 2,
            fullname: 'Mohammad Rezai',
            username: "Mohammad",
            password: "15963",
            rol: 'Admin',
            works: [],
            avatar: '../assets/logo.png'
        },
        {
            id: 3,
            fullname: 'N.ashrafi',
            username: "Naser",
            password: "125996",
            rol: 'Management',
            works: [],
            avatar: '../assets/logo.png'
        },
        {
            id: 4,
            fullname: 'P.Pordeli',
            username: "Payman",
            password: "asdd152",
            rol: 'User',
            works: [],
            avatar: '../assets/logo.png'
        },
        {
            id: 5,
            fullname: 'Ahmad Hoseni',
            username: "Ahmad",
            password: "wdc152",
            rol: 'User',
            works: [],
            avatar: '../assets/logo.png'
        },
        {
            id: 6,
            fullname: 'S.afshari',
            username: "Saman",
            password: "1",
            rol: 'User',
            works: [
                {
                    id: 1,
                    createBy: 'Amin aligholi',
                    lastChengeBy: 'N.ashrafi',
                    status: 'DONE',
                    dudTime: '3day',
                    description: 'no info '
                }
            ],
            avatar: '../assets/logo.png'
        },

    ]
}
export default state