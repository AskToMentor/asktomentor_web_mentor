import ShowErrorMessages from "../alert-messages/ShowErrorMessages";
import axiosInstance from "../api-config/axiosinstance";

const MentorPersonalInfo = async (payload) => {
  try {
    const resp = await axiosInstance.post("/addUserDetail", payload);
    console.log("response is", resp);
    const dataObject = resp?.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);
      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage);
      return error.response.data;
    } else {
      // Handle other types of errors
      ShowErrorMessages("Something went wrong");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};
const saveMentorQuestion = async (payload) => {
  try {
    const resp = await axiosInstance.post("/saveSettings", payload);
    console.log("response is", resp);
    const dataObject = resp?.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);
      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage);
      return error.response.data;
    } else {
      // Handle other types of errors
      ShowErrorMessages("Something went wrong");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};
const saveMentorQuestionArray = async (payload) => {
  try {
    const resp = await axiosInstance.post("/saveQuestionaries", payload);
    console.log("response is", resp);
    const dataObject = resp?.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);
      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage);
      return error.response.data;
    } else {
      // Handle other types of errors
      ShowErrorMessages("Something went wrong");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};
const getMentorSkillsData = async () => {
  try {
    const resp = await axiosInstance.get(`/getSkills`);
    console.log("response is", resp);
    const dataObject = resp?.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);
      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage);
      return error.response.data;
    } else {
      // Handle other types of errors
      ShowErrorMessages("Something went wrong");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};
const getMentorOfferingData = async () => {
  try {
    const resp = await axiosInstance.get(`/getCoachingOfferings`);
    console.log("response is", resp);
    const dataObject = resp?.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);
      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage);
      return error.response.data;
    } else {
      // Handle other types of errors
      ShowErrorMessages("Something went wrong");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};
const getMentorCategoryData = async (categoryName) => {
  try {
    let resp;
    if (categoryName) {
      resp = await axiosInstance.get(`/getCategories?name=${categoryName}`);
    } else {
      resp = await axiosInstance.get(`/getCategories`);
    }
    console.log("response is", resp);
    const dataObject = resp?.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);
      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage);
      return error.response.data;
    } else {
      // Handle other types of errors
      ShowErrorMessages("Something went wrong");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};
const saveProfileImage = async (payload) => {
  try {
    const resp = await axiosInstance.post("/uploadProfilePicture", payload, {
      headers: {
        "Content-Type": "multipart/form-data", // Set the Content-Type header to multipart/form-data
      },
    });
    console.log("response is", resp);
    const dataObject = resp?.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);
      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage);
      return error.response.data;
    } else {
      // Handle other types of errors
      ShowErrorMessages("Something went wrong");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};
const getCurrentUserInfo = async () => {
  try {
    const resp = await axiosInstance.get(`/getCurrentUser`);
    console.log("response is", resp);
    const dataObject = resp?.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);
      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage);
      return error.response.data;
    } else {
      // Handle other types of errors
      ShowErrorMessages("Something went wrong");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};
const getMentorProfileData = async (payload) => {
  try {
    const resp = await axiosInstance.get(`/getProfile?userId=${payload}`);
    console.log("response is", resp);
    const dataObject = resp?.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);
      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage);
      return error.response.data;
    } else {
      // Handle other types of errors
      ShowErrorMessages("Something went wrong");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};
const getMentorUserDetails = async (payload) => {
  try {
    const resp = await axiosInstance.get(`/getUserDetail`);
    console.log("response is", resp);
    const dataObject = resp?.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);
      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage);
      return error.response.data;
    } else {
      // Handle other types of errors
      ShowErrorMessages("Something went wrong");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};
const editProfileData = async (payload) => {
  try {
    const resp = await axiosInstance.post("/updateBasicDetail", payload);
    console.log("response is", resp);
    const dataObject = resp?.data;
    return dataObject;
  } catch (error) {
    if (error.response) {
      // Handle specific server response errors
      console.log("error is", error.response.data);
      const errorMessage = !error.response.data.error.message
        ? error.response.data.error?._message
        : error.response.data.error.message;
      //   showSuccessMessage(errorMessage, "error");
      ShowErrorMessages(errorMessage);
      return error.response.data;
    } else {
      // Handle other types of errors
      ShowErrorMessages("Something went wrong");
    }
    throw error; // Rethrow the error to propagate it to the calling code
  }
};

export {
  MentorPersonalInfo,
  getMentorSkillsData,
  saveMentorQuestion,
  getMentorOfferingData,
  getMentorCategoryData,
  saveMentorQuestionArray,
  saveProfileImage,
  getCurrentUserInfo,
  getMentorProfileData,
  getMentorUserDetails,
  editProfileData,
};
