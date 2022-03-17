const { protocol, hostname, port } = window.location;
export const config = {
  host: `${protocol}//${hostname}${port ? ":" + port : ""}`,
  apiHost:
    process.env.NODE_ENV === "development"
      ? `https://recode-api.azurewebsites.net`
      : "https://reecallapp.com",
};
