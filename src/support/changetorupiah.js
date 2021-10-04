import Numeral from 'numeral'

export const changetoRupiah=(a)=>{
    return 'IDR '+Numeral(a).format('0,0')
}