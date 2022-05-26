export async function getAll()
{
	const request = await fetch("/api/fruit/all") 
	const data = await request.json()
	console.log(data)
}