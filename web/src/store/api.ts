import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080",
});

export async function createMeeting() {
  const result = await http.post("/meetings");
  return result.data;
}
