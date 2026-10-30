import axios from "axios";

const token = localStorage.getItem("token");

// const GetRequest = (url) => {
//   const res = axios.get(`http://localhost:8000/${url}`, {
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   });
//   return res;
// };
export default function GetRequest(url) {
  const res = axios.get(`http://localhost:8000/${url}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res;
}

export function PostRequest(url, body) {
  const res = axios.post(`http://localhost:8000/${url}`, body, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res;
}

// export default GetRequest;
