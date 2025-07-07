const price = 10000
const payment = 20000

// kalau uangnya pas
if (payment === price) {
    console.log("Makasih sudah bayar pakai uang pas")
} else if (payment > price) { // ketika uangnya lebih
    const change = payment - price
    console.log (`Terimakasih, Kembalian anda sebesar ${change}` )
} else { // ketika uangnya kurang
    const moneyDeficit = price - payment
    console.log(`Maaf, Uang anda kurang ${moneyDeficit}`)
}
