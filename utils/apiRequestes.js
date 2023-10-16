import axios from "axios";

// axios.defaults.withCredentials = true;

/**
 * Axios request wrapper
 * @method POST
 * @typedef axiosApiRequests
 * @param {string} url
 * @param {object} payload
 * @param {string} token
 * @returns {Promise}
 */

export const postRequest = async (url, payload = {}) => {
  // get token from localstorage
  const token =
    typeof window !== "undefined"
      ? localStorage?.getItem("x_auth_token")
        ? localStorage?.getItem("x_auth_token")
        : ""
      : "";

  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": `${token}`,
    // credentials: 'include'
  };
  const data = await axios
    .post(url, payload, { headers })
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err?.response?.data?.message || "Something went wrong");
      if (
        err?.response?.data?.code === "unauthorized" ||
        err?.response?.data?.message === "Invalid token"
      ) {
        localStorage.removeItem("x_auth_token");
        localStorage.removeItem("x_admin");
        localStorage.removeItem("x_store");
      }
      return { ...err?.response?.data };
    });
  return data;
};
/**
 * @method PUT
 * @param {@see axiosApiRequests}
 */
export const putRequest = async (url, payload = {}) => {
  const token =
    typeof window !== "undefined"
      ? localStorage?.getItem("x_auth_token")
        ? localStorage?.getItem("x_auth_token")
        : ""
      : "";

  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": `${token}`,
    // credentials: 'include'
  };
  const data = await axios
    .put(url, payload, { headers })
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err?.response?.data?.message || "Something went wrong");
      if (
        err?.response?.data?.code === "unauthorized" ||
        err?.response?.data?.message === "Invalid token"
      ) {
        localStorage.removeItem("x_auth_token");
        localStorage.removeItem("x_admin");
        localStorage.removeItem("x_store");
      }
      return { ...err?.response?.data };
    });
  return data;
};
/**
 * @method GET
 * @param {@see axiosApiRequests}
 */
export const getRequest = async (url) => {
  const token =
    typeof window !== "undefined"
      ? localStorage?.getItem("x_auth_token")
        ? localStorage?.getItem("x_auth_token")
        : ""
      : "";

  const headers = {
    "x-auth-token": `${token}`,
    // credentials: 'include'
  };
  const data = await axios
    .get(url, { headers })
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err?.response?.data?.message || "Something went wrong");
      if (
        err?.response?.data?.code === "unauthorized" ||
        err?.response?.data?.message === "Invalid token"
      ) {
        localStorage.removeItem("x_auth_token");
        localStorage.removeItem("x_admin");
        localStorage.removeItem("x_store");
      }
      return { ...err?.response?.data };
    });
  return data;
};

/**
 * @method DELETE
 * @param {@see axiosApiRequests}
 */
export const deleteRequest = async (url) => {
  const token =
    typeof window !== "undefined"
      ? localStorage?.getItem("x_auth_token")
        ? localStorage?.getItem("x_auth_token")
        : ""
      : "";

  const headers = {
    "x-auth-token": `${token}`,
    // credentials: 'include'
  };
  const data = await axios
    .delete(url, { headers })
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err?.response?.data?.message || "Something went wrong");
      if (
        err?.response?.data?.code === "unauthorized" ||
        err?.response?.data?.message === "Invalid token"
      ) {
        localStorage.removeItem("x_auth_token");
        localStorage.removeItem("x_admin");
        localStorage.removeItem("x_store");
      }
      return { ...err?.response?.data };
    });
  return data;
};
