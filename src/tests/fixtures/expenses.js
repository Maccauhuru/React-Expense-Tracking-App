import moment from 'moment';
export default [{
        id: 1,
        description: 'Turntable',
        notes: '',
        amount: 14500,
        createdAt: 0
    },
    {
        id: 2,
        description: 'Sandwich',
        notes: '',
        amount: 299,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: 3,
        description: 'Insurance',
        notes: '',
        amount: 12200,
        createdAt: moment(0).add(4, 'days').valueOf()
    },
];