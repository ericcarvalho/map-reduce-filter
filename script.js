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

//companies.push({name: 'Google', marketValue: 1500, CEO: 'Sundar Pichai', foundedOn: 1988});
//delete companies[3]; // Remover a companhia com índice 3 (Facebook) do array
//delete companies[4]; // Remover a companhia com índice 4 (Spotify) do array

//companies.shift(); // Remover a última companhia do array (Apple)

//companies.fill({name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }, 1, 4); // Preencher os índices 2 e 3 com a companhia Apple

const updatedCompanies = companies.map(company => {
    return {
        ...company,
        marketValue: company.marketValue * 0.9 // Subtrair 10% do valor de mercado
    };
}).filter(company => company.foundedOn < 1990) // Filtrar companhias fundadas antes de 1990
.reduce((total, company) => total + company.marketValue, 0); // Somar o valor de mercado das companhias restantes



console.log(companies.length); // Exibir o tamanho do array atualizado com a nova companhia

//console.log(companies); // Exibir o array atualizado com a nova companhia


console.log(updatedCompanies); // Exibir o valor total de mercado das companhias restantes

//console.log(companies); // Exibir o array atualizado com a nova companhia

//companies.sort((a, b) => b.marketValue - a.marketValue); // Ordenar as companhias por valor de mercado em ordem decrescente

//console.log(companies); // Exibir o array atualizado com a nova companhia

console.log(companies); // Exibir o array atualizado com a nova companhia

//const isTrue = companies.every(company => company.foundedOn > 2005 ); // Verificar se todas as companhias foram fundadas após 1990
//console.log(isTrue); // Exibir o resultado da verificação
//console.log(companies); // Exibir o array atualizado com a nova companhia


const finduser = companies.findIndex(company => company.marketValue > 200); // Encontrar a companhia cujo valor de mercado é maior que 200
console.log(companies[finduser].name); // Exibir a companhia encontrada
