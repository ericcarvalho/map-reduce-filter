const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel EK', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

// Subtrair 10% de valor de mercado a todas as companhias - MAP
// Filtrar somente companhias fundadas antes de 1990 - FILTER
// Somar o valor de mercado das companhias restantes - REDUCE



const updatedCompanies = companies.map(company => {
    return {
        ...company,
        marketValue: company.marketValue * 0.9 // Subtrair 10% do valor de mercado
    };
}).filter(company => company.foundedOn < 1990) // Filtrar companhias fundadas antes de 1990
.reduce((total, company) => total + company.marketValue, 0); // Somar o valor de mercado das companhias restantes

console.log(updatedCompanies); // Exibir o valor total de mercado das companhias restantes