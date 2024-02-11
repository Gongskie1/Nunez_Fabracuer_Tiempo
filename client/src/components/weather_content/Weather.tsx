import { useEffect, useState } from 'react'
import {utils} from "../../utils/index";

interface WeatherData {
    current:{
        wind_kph:string;
        temp_c:string;
        condition:{
            text:string;
            icon:string;
        }
    };

    location:{
        name:string;
        region:string;
        country:string;
    };

}


const Weather = () => {
    const today = new Date();
    const day = today.getUTCDay();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = month + "/" + date + "/" + year;
    const [weatherData, setWeatherData] = useState<WeatherData>({
        current:{
            wind_kph:"",
            temp_c:"",
            condition:{
                text:"",
                icon:""
            }
        },

        location:{
            name:"",
            region:"",
            country:"",
        }
    });

    useEffect(()=>{
        fetch('http://localhost:8080/weather')
            .then( response => {
                return response.json();
            })
            .then( data => {
                console.log(data)
                setWeatherData(data)
            });
    },[])
    console.log("THis is a motherfucker bitch!",weatherData.current.condition.icon)

  return (
    <div
    className='p-3 flex flex-col bg-[#1F2937] rounded-md'
    >

        <div>
            <h1 
            className='text-3xl'
            >
                {weatherData.location.name}
            </h1>
        </div>

        <div
        className='flex flex-row flex-1'
        >

            <div
            className='flex-1 text-sm'
            >

                <h3>{utils.converter(day)}</h3>
                <h3>{currentDate}</h3>
                <h3>Wind {weatherData.current.wind_kph} km/h</h3>

            </div>

            <div
            className=' flex flex-col flex-1'
            >
                <div
                className='flex flex-row flex-1'
                >
                    <div
                    className={`flex-1 flex h-[60px] w-[60px]`}
                    >
                        <img 
                        className='w-[75px] h-[75px]'
                        src={weatherData.current.condition.icon} 
                        alt="weather icon"

                        />
                    </div>

                    <div
                    className='
                    flex
                    text-3xl
                    justify-center
                    '
                    >
                        <p
                        className='text-center flex flex-row'
                        >
                            {weatherData.current.temp_c}
                            <p>°</p>
                        </p>
                    </div>

                </div>

                <div
                className='text-nowrap'
                >
                    {weatherData.current.condition.text}
                </div>
            </div>

        </div>

    </div>
  )
}

export default Weather