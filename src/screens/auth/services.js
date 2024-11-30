import { mainAxios } from "../../api";
import { Logger } from "../../utils/logger";

export const loginApi = async (payload) => {
    try {
        // Log the start of the API call
        Logger.info("Initiating login API request", { endpoint: "login", payload });

        const { data } = await mainAxios.post("login", payload);
        // Log successful response
        Logger.info("Login API request successful", { response: data });
        return data;
    } catch (error) {
        // Log the error and rethrow for further handling
        Logger.error("Login API request failed");
        throw error;
    }
};
