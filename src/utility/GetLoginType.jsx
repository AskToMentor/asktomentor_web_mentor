const GetLoginType = () => {
  return localStorage.getItem("loginType");
};
const getCurrentUserInformation = () => {
  const data = localStorage.getItem("currentUser");
  if (data) {
    return JSON.parse(data);
  } else {
    return "";
  }
};

export { GetLoginType, getCurrentUserInformation };
