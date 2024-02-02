import axois from "axios";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getWeather = async (req, res) => {
  try {
    const { cities } = req.body;

    const weatherData = {};
    if (!cities) {
      throw new ApiError(400, "Cities name is required");
    }

    for (const city of cities) {
      const response = await axois.get(
        `${process.env.API_URL}?q=${city}&appid=${process.env.API_KEY}`
      );
      // console.log(response.data);

      const temperature = response.data.main.temp + "C";
      weatherData[city] = temperature;
    }

    res.json(new ApiResponse(200, weatherData, 'Weather fetched successfully'));
  } catch (error) {
    throw new ApiError(500, 'Something went wrong, try again later');
  }
};

export { getWeather };
