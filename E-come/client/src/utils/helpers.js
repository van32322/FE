import icons from './icons';
const { AiOutlineStar, AiFillStar } = icons
export const createSlug = string => string.toLowerCase().normalize("NFD").replace(/[\u300-\u306f]/g, "").split('').join('-')

export const formatMoney = number => Number(number.toFixed(1)).toLocaleString()
export const renderStarFromNumber = (number) => {
    if (!Number(number)) return
    const stars = []
    for (let i = 0; i < +number; i++) stars.push(<AiFillStar color='orange'/>)
    for (let i = 5; i > +number; i--) stars.push(<AiOutlineStar color='orange'/>)
    return
} 