import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization =
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWY2NjAyN2E1MTg4M2Q5NmQwOTZiMGMxNzZlODI5MCIsIm5iZiI6MTc4NTI4Njk5MC4yODE5OTk4LCJzdWIiOiI2YTY5NTE0ZWZlMmEyMWM1Y2Q1NGMxYTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NVFmDspMo59YQQVocWzGe9SNHGMlVeH1Km7xVwW5ACM";

    return config;
});

export default axiosInstance;
