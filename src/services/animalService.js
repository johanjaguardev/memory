import axios from "axios";
const BASE_URL =
  "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20";

export const getAnimals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
