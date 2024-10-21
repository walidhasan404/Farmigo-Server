import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface WeatherData {
    city: {
        name: string;
    };
    list: {
        dt_txt: string;
        main: {
            temp: number;
            feels_like: number;
            temp_min: number;
            temp_max: number;
            sea_level: number;
        };
        wind: {
            speed: number;
            deg: number;
            gust?: number;
        };
        clouds: {
            all: number;
        };
        weather: {
            main: string;
        }[];
    }[];
}

const Weather = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [city, setCity] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [isCelsius, setIsCelsius] = useState<boolean>(true);

    const location = useLocation();
    console.log(location.pathname);

    const apiKey = `69de6e28403ed4c9840112fc52e94e2b`;

    const fetchWeather = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!city) return;

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
            );

            if (!response.ok) {
                throw new Error("City not found");
            }

            const data = await response.json();
            setWeatherData(data);
            setError(null); // Clear previous errors if any
        } catch (err: any) {
            setError(err.message);
            setWeatherData(null); // Clear previous weather data
        }
    };

    const convertToFahrenheit = (tempCelsius: number) => Math.floor(tempCelsius * 1.8 + 32);

    const filteredWeatherData = weatherData ? weatherData.list.slice(0, 12) : [];

    const chartData = filteredWeatherData.map((entry) => ({
        time: new Date(entry.dt_txt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        }),
        minTemp: isCelsius
            ? Math.floor(entry.main.temp_min)
            : convertToFahrenheit(entry.main.temp_min),
        maxTemp: isCelsius
            ? Math.floor(entry.main.temp_max)
            : convertToFahrenheit(entry.main.temp_max),
    }));

    console.log(setIsCelsius);
    

    return (
        <>
            <div className="relative border border-transparent min-h-screen bg-[url('https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black opacity-40 rounded-xl z-20"></div>
                <div className="relative z-30">
                    <form
                        onSubmit={fetchWeather}
                        className="mt-10 md:mx-auto max-w-xl mx-3 py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
                        <input
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            placeholder="Search city"
                            className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
                            name="city" />
                        <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3">
                            Search
                        </button>
                    </form>

                    {weatherData && (
                        <div className="max-w-screen-sm md:mx-auto my-10 mx-4">
                            <div className="border-white md:grid grid-cols-2 gap-2">
                                <div className="border-white rounded-xl">
                                    <div className="text-white bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-3 md:p-8 shadow-2xl">
                                        <h2 className="text-xl font-semibold flex items-center">
                                            <span className="text-lg pr-2 text-red-500"><FaLocationDot /></span>
                                            {weatherData.city.name}
                                        </h2>
                                        <h2>{weatherData.list[0].dt_txt}</h2>
                                        <div className="mt-20 w-full capitalize justify-between">
                                            <div className="w-fit">
                                                <p className="text-4xl font-semibold">{Math.floor(weatherData.list[0].main.temp)}°C</p>
                                                <p className="text-xs flex-none">feels like {Math.floor(weatherData.list[0].main.feels_like)}°C</p>
                                            </div>
                                            <div className="w-full">
                                                <p className="text-3xl font-semibold text-right">{weatherData.list[0].weather[0].main}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-white my-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-3 md:p-8 shadow-2xl">
                                    <h2 className="text-2xl font-semibold">Weather Details</h2>
                                    <table className="text-white w-full border-separate border-spacing-2 mt-5">
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-400 whitespace-nowrap">Min Temp</td>
                                                <td className="border border-gray-400 whitespace-nowrap">{Math.floor(weatherData.list[0].main.temp_min)}°C</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-400 whitespace-nowrap">Max Temp</td>
                                                <td className="border border-gray-400 whitespace-nowrap">{Math.floor(weatherData.list[0].main.temp_max)}°C</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-400 whitespace-nowrap">Humidity</td>
                                                <td className="border border-gray-400 whitespace-nowrap">{weatherData.list[0].main.sea_level} %</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-400 whitespace-nowrap">Wind Speed</td>
                                                <td className="border border-gray-400 whitespace-nowrap">{weatherData.list[0].wind.speed} m/s</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-400 whitespace-nowrap">Cloudiness</td>
                                                <td className="border border-gray-400 whitespace-nowrap">{weatherData.list[0].clouds.all}%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <div className="md:mx-auto mt-10">
                        {chartData.length > 0 && (
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="time" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="minTemp" stroke="#3498db" />
                                    <Line type="monotone" dataKey="maxTemp" stroke="#e74c3c" />
                                </LineChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Weather;