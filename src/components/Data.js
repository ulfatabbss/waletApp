const Data = [
  {
    id: 1,
    text: 'All',
    picture: require('../aseets/Vector1.png'),
    screen: 'Expense',
  },
  {
    id: 2,
    text: 'Shopping',
    picture: require('../aseets/Vector2.png'),
    screen: 'Expense',
  },
  {
    id: 3,
    text: 'Traveling',
    picture: require('../aseets/Vector3.png'),
    screen: 'Expense',
  },
  {
    id: 4,
    text: 'Utility Bills',
    picture: require('../aseets/Vector4.png'),
    screen: 'Expense',
  },

  {
    id: 5,
    text: 'Health',
    picture: require('../aseets/Vector5.png'),
    screen: 'Expense',
  },
  {
    id: 6,
    text: 'Add More',
    picture: require('../aseets/Vector6.png'),
    screen: 'Expense',
  },
];
const income = [
  {
    id: 1,
    text: 'All',
    picture: require('../aseets/Vector1.png'),
    screen: 'Expense',
  },

  {
    id: 2,
    text: 'Shopping',
    picture: require('../aseets/Vector2.png'),
    screen: 'Expense',
  },
  {
    id: 3,
    text: 'Add More',
    picture: require('../aseets/Vector6.png'),
    screen: 'Expense',
  },
];
const history = [
  {
    id: 0,
    icon: require('../aseets/arrowdown.png'),
    color: 'green',
    cat: 'Income',
    amount: 'Rs.200',
    subcat: 'Salary',
    date: '24/10/1950',
  },
  {
    id: 1,
    icon: require('../aseets/uparrow.png'),
    color: 'red',
    cat: 'Expense',
    amount: 'Rs.200',
    subcat: 'Buy Shoes',
    date: '24/10/2022',
  },
  {
    id: 2,
    icon: require('../aseets/arrowdown.png'),
    color: 'green',
    cat: 'Income',
    amount: 'Rs.200',
    subcat: 'Salary',
    date: '24/10/2022',
  },
  {
    id: 3,
    icon: require('../aseets/uparrow.png'),
    color: 'red',
    cat: 'Expense',
    amount: 'Rs.200',
    subcat: 'Buy Shoes',
    date: '24/10/2022',
  },
  {
    id: 4,
    icon: require('../aseets/arrowdown.png'),
    color: 'green',
    cat: 'Income',
    amount: 'Rs.200',
    subcat: 'Salary',
    date: '24/10/2022',
  },
  {
    id: 5,
    icon: require('../aseets/uparrow.png'),
    cat: 'Expense',
    amount: 'Rs.200',
    subcat: 'Buy Shoes',
    date: '24/10/2022',
  },
];

export {Data, income, history};
