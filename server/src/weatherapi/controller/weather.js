const axios = require('axios');


module.exports = {
    weather : async (req,res)=> {
        const { location } = req.body;
        console.log("Received location:", location);

        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${'davao'}&aqi=no`;

        try {
            const response = await axios.get(apiUrl);
            const data = response.data; 

            
            return res.json(data);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    },

    getWeather: (req,res) => {

        return res.json({data: ["number 1", "number 2", "number 3"]})
    }
}