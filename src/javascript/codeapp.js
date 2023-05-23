const link = "http://api.weatherstack.com/current?access_key=f7144aecd274d3b6fa12e291a124f6a3";
// Work in fon
const fetchData = async ()=> {
	const result  = await fetch(`${link}&query=Erevan`);
	const data    = await result.json();

	console.log(data);
}

fetchData();