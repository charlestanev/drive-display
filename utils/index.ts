export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': 'b3119ead5cmsh6bd45153c8ca20cp1a2514jsnbb23656025fb',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        { headers: headers }
    );

    const result = await response.json();

    return result;

}