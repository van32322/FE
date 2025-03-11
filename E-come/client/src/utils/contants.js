import icons from "./icons";
import path from "./path";

export const navigation = [
  {
    id: 1,
    value: 'HOME',
    path: `/${path.HOME}`
  },
  {
    id: 2,
    value: 'PRODUCTS',
    path: `/${path.PRODUCTS}`
  },
  {
    id: 3,
    value: 'BLOGS',
    path: `/${path.BLOGS}`
  },
  {
    id: 4,
    value: 'OUR SERVICES',
    path: `/${path.OUR_SERVICES}`
  },
  {
    id: 5,
    value: 'FAQ',
    path: `/${path.FAQ}`
  },
  {
    id: 6,
    value: 'CHAT BOT',
    path: `/${path.CHATBOX}`
  },
]
const { RiTruckFill, BsShieldShaded, BsReplyFill, FaTty, AiFillGift } = icons
export const productExtraInfomation = [
  {
    id: '1',
    title: 'Guarantee',
    sub: 'Quality Checked',
    icon: <BsShieldShaded />
  },
  {
    id: '2',
    title: 'Free Shopping',
    sub: 'Free On All Product',
    icon: <RiTruckFill />
  },
  {
    id: '3',
    title: 'Special Gift Cards',
    sub: 'Special Gift Cards',
    icon: <AiFillGift />
  },
  {
    id: '4',
    title: 'Free Return',
    sub: 'Within 7 Days',
    icon: <BsReplyFill />
  },
  {
    id: '5',
    title: 'Consultancy',
    sub: 'Lifetime 24/7/356',
    icon: <FaTty />
  }
]
export const productInfoTabs = [
  {
    id: 1,
    name: 'DESCRIPTION',
    content: ''
  },
  {
    id: 2,
    name: 'WARRANTY',
    content: ''
  },
  {
    id: 3,
    name: 'DELIVERY',
    content: ''
  },
  {
    id: 4,
    name: 'PAYMENT',
    content: ''
  },

];
export const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple",
  "Black",
  "White",
  "Gray",
  "Orange",
  "Pink",
  "Brown",
  "Cyan"
];
export const sorts = [
  {
    id: 1,
    value: '-sold',
    text: 'Best selling'
  },
  {
    id: 2,
    value: "-title",
    text: "Alphabetically, A-Z"
  },
  {
    id: 3,
    value: "title",
    text: "Alphabetically, Z-A"
  },
  {
    id: 4,
    value: "-price",
    text: "Price, high to low"
  },
  {
    id: 5,
    value: "price",
    text: "Price, low to high"
  },
  {
    id: 6,
    value: "-createAt",
    text: "Date, new to old"
  },
  {
    id: 7,
    value: "-createAt",
    text: "Date, old to new"
  }
]
export const voteOptions = [
  {
    id: 1,
    text: 'Terrible'
  },
  {
    id: 2,
    text: 'Bad'
  },
  {
    id: 3,
    text: 'Neutral'
  },
  {
    id: 4,
    text: 'Good'
  },


  {
    id: 5,
    text: 'Perfect'
  },

];
const { AiOutlineDashboard, MdGroups,TbBrandProducthunt,RiBillLine } = icons
export const adminSidebar = [
  {
    id: 1,
    type: 'SINGLE',
    text: 'Dashboard',
    path: `/${path.ADMIN}/${path.DASHBOARD}`,
    icon: <AiOutlineDashboard />
  },
  {
    id: 2,
    type: 'SINGLE',
    text: 'Manage users',
    path: `/${path.ADMIN}/${path.MANAGE_USER}`,
    icon: <MdGroups />
  },
  {
    id: 3,
    type: 'PARENT',
    text: 'Manage users',
    submenu: [{
      text: 'Create product',
      path: `/${path.ADMIN}/${path.CREATE_PRODUCTS}`
    },
    {
      text: 'Manage products',
      path: `/${path.ADMIN}/${path.MANAGE_PRODUCTS}`
    },
    ],
    icon: <TbBrandProducthunt />
  },
  {
    id: 4,
    type: 'SINGLE',
    text: 'Manage orders',
    path: `/${path.ADMIN}/${path.MANAGE_ORDER}`,
    icon: <RiBillLine />
  },
]




