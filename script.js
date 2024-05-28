let celcius = document.getElementById('celcius');
let kelvin = document.getElementById('kelvin');
let fahrenheit = document.getElementById('fahrenheit');


// Celcius to fahrenheit = (0 C x 9/5) + 32 = 32 F
// Celcius to Kelvin = 0 C + 273.15 = 273.15 K

celcius.addEventListener('input', () => {
    let c = parseFloat(celcius.value);
    let k = c + 273.15;
    let f = (c * 9/5) + 32;

    kelvin.value = k;
    fahrenheit.value = f;
});

// fahrenheit to celcius = (32 F - 32) x 5/9 = 0 C
// fahrenheit to kelvin = (32 F - 32) x 5/9 + 273.15 = 273.15 K

fahrenheit.addEventListener('input', () => {
    let f = parseFloat(fahrenheit.value);
    let c = (f - 32) * 5/9;
    let k = (f - 32) * 5/9 + 273.15;

    kelvin.value = k;
    celcius.value = c;
});

// kelvin to celcius = 0 K - 273.15 = -273.15 C

// kelvin to fahrenheit = (0 K - 273.15) x 9/5 + 32 = -459.7 F


kelvin.addEventListener('input', () => {
    let k = parseFloat(kelvin.value);
    let c = k - 273.15;
    let f = (k - 273.15) * 9/5 + 32;

    fahrenheit.value = f;
    celcius.value = c;
});