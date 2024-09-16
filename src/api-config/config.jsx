const NODE_ENV = "development";
export const serverUrl =
  NODE_ENV.toLowerCase() === "development"
    ? "https://preproduser.asktomentor.com/api/v1/user"
    : NODE_ENV.toLowerCase() === "prod"
    ? ""
    : "";
