// action-types
const GET_CURRENT_MODAL_CAT = 'GET_CURRENT_MODAL_CAT';

// actions
export const getCurrentModalCat = payload => ({
  type: GET_CURRENT_MODAL_CAT,
  payload
});

// categories
export const navCategories = [
  {
    key: '000',
    name: 'Television',
    subCategories: [
      {
        key: '000_1',
        name: '50" TVs & Larger',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '000_2',
        name: '41" - 49" TVs',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '000_3',
        name: '31" - 40" TVs',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '000_4',
        name: '31" - 40" TVs',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '000_5',
        name: 'View All',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/ALL%20TV'
      }
    ]
  },
  {
    key: '001',
    name: 'Refrigerator',
    subCategories: [
      {
        key: '001_1',
        name: 'Side by Side',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '001_2',
        name: 'French Bottom',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '001_3',
        name: 'Multi Door',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '001_4',
        name: 'Double Door',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '001_5',
        name: 'Single Door',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/ALL%20TV'
      },
      {
        key: '001_6',
        name: 'View All',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/ALL%20TV'
      }
    ]
  },
  {
    key: '002',
    name: 'Washing Machine',
    subCategories: [
      {
        key: '002_1',
        name: 'Full Auto Front Load',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '002_2',
        name: 'Full Auto Top Load',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '002_3',
        name: 'Semi Auto Top Load',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '002_4',
        name: 'Dryer',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '002_5',
        name: 'Accessories',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/ALL%20TV'
      },
      {
        key: '002_6',
        name: 'View All',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/ALL%20TV'
      }
    ]
  },
  {
    key: '003',
    name: 'Air Conditioner',
    subCategories: [
      {
        key: '003_1',
        name: 'Split',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '003_2',
        name: 'Window',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '003_3',
        name: 'View All',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/ALL%20TV'
      }
    ]
  },
  {
    key: '004',
    name: 'Kitchen Appliances',
    subCategories: [
      {
        key: '004_1',
        name: 'Microwave',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '004_2',
        name: 'Dish Washer',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '004_3',
        name: 'Mixer Grinder Juicer',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '004_4',
        name: 'Toaster',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/50%22%20TV%20&%20Larger'
      },
      {
        key: '004_5',
        name: 'View All',
        link: 'https://homeyantra.com/clp/TV%20&%20Home%20Entertainment/ALL%20TV'
      }
    ]
  },
];

// initalState
const navCategoryLinksInitialState = {
  categoryKey: ''
};

const navCategoryLinks = (state = navCategoryLinksInitialState, action) => {
  switch (action.type) {
    case GET_CURRENT_MODAL_CAT:
      return {...state, categoryKey: action.payload}
    default:
      return state;
  }
};

export default navCategoryLinks
