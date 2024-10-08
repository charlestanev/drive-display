import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': 'b3119ead5cmsh6bd45153c8ca20cp1a2514jsnbb23656025fb',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
        { headers: headers }
    );

    const result = await response.json();

    return result;

}

// ChatGpt Data for rent car calculation
export const calculateUSCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base price for a standard rental
    const mileageFactor = 0.12; // Adjusted factor for mileage impact
    const ageFactor = 0.07; // Adjusted factor for vehicle age

    // Calculate the additional costs based on mileage and vehicle age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate the total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0); // Return the rate rounded to the nearest whole number
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
} 