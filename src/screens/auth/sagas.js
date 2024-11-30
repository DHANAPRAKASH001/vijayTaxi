import { takeLatest, call, put } from "redux-saga/effects";
import { startLogin, loginSuccess, loginFailure } from "./reducers";
import { loginApi } from "./services";
import { Logger } from "../../utils/logger";

function* login(action) {
    try {
        // Show loader screen and log the start of the login process
        // yield put(showLoaderScreen());
        Logger.info("Login saga started", { email: action.payload.email });

        // Call the login API with provided credentials
        const response = yield call(loginApi, action.payload);
        Logger.info("Login API call success", { response: response.data });

        // Dispatch login success if API call is successful
        yield put(loginSuccess(response.data)); // Assuming response.data contains user info
        Logger.info("Login successful, user data stored", { user: response.data });

    } catch (error) {
        // Dispatch login failure in case of an error
        // yield put(loginFailure(error.message || "Login failed"));
        Logger.error("Login API call failed");
    } finally {
        // Hide loader screen and log the completion of the login saga
        // yield put(hideLoaderScreen());
        Logger.info("Login saga completed");
    }
}

export const authSagas = [takeLatest(startLogin.type, login)];
