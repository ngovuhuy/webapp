class CurrencyUtils{
    static formatToINR(amout: number){
     return new Intl.NumberFormat('en-IN',{
        style: 'currency',
        currency: 'INR'
     }).format(amout);
    }
}
export default CurrencyUtils;