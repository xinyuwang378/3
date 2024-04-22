function convertCurrency() {
            var amount = parseFloat(document.getElementById('amount').value);
            var from = document.getElementById('from').value;
            var to = document.getElementById('to').value;
            var rate = getExchangeRate(from, to);
            var result = (amount * rate).toFixed(2);
            document.getElementById('result').innerText = amount + ' ' + from.toUpperCase() + ' = ' + result + ' ' + to.toUpperCase();
        }

        // Function to get exchange rate (this is just a placeholder, you would need a real API)
        function getExchangeRate(from, to) {
            // This is just a placeholder. In real application, you would fetch exchange rates from an API.
            // For example, you can use free services like https://exchangeratesapi.io/
            // For simplicity, I'll just return some random rates here.
            var rates = {
                usd: { eur: 0.88, gbp: 0.78, jpy: 109.24, aud: 1.31, cad: 1.25, chf: 0.91, cny: 6.48, hkd: 7.76, twd: 28.14 },
                eur: { usd: 1.14, gbp: 0.89, jpy: 128.53, aud: 1.53, cad: 1.46, chf: 1.07, cny: 7.61, hkd: 9.12, twd: 33.05 },
                gbp: { usd: 1.28, eur: 1.12, jpy: 150.40, aud: 1.80, cad: 1.72, chf: 1.26, cny: 8.97, hkd: 10.74, twd: 38.93 },
                jpy: { usd: 0.0091, eur: 0.0078, gbp: 0.0067, aud: 0.012, cad: 0.011, chf: 0.0081, cny: 0.058, hkd: 0.069, twd: 0.25 },
                aud: { usd: 0.76, eur: 0.65, gbp: 0.56, jpy: 83.55, cad: 0.95, chf: 0.69, cny: 4.91, hkd: 5.87, twd: 21.29 },
                cad: { usd: 0.80, eur: 0.68, gbp: 0.58, jpy: 89.41, aud: 1.05, chf: 0.73, cny: 5.19, hkd: 6.22, twd: 22.54 },
                chf: { usd: 1.10, eur: 0.94, gbp: 0.79, jpy: 123.44, aud: 1.45, cad: 1.37, cny: 7.11, hkd: 8.52, twd: 30.87 },
                cny: { usd: 0.15, eur: 0.13, gbp: 0.11, jpy: 17.27, aud: 0.20, cad: 0.19, chf: 0.14, hkd: 1.20, twd: 4.35 },
                hkd: { usd: 0.13, eur: 0.11, gbp: 0.093, jpy: 14.42, aud: 0.17, cad: 0.16, chf: 0.12, cny: 0.83, twd: 3.63 },
                twd: { usd: 0.036, eur: 0.030, gbp: 0.026, jpy: 3.95, aud: 0.047, cad: 0.044, chf: 0.032, cny: 0.23, hkd: 0.28 }
            };
            return rates[from][to];
        }