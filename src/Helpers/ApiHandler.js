import axios from "axios";

const BadBankSettings = {
    timeout: 10000,
    baseUrl: "https://api.jsonbin.io/v3/",
};

const defaultConfig = {
    timeout: BadBankSettings.timeout,
    baseURL: BadBankSettings.baseUrl,
    fullPath: false,
    crossdomain: true,
    method: "HEAD",
    headers: {
        "X-Master-Key": "$2b$10$eaQFEAjvKWSWDsIj3PrsuubbcgouqzYiBDL33drA5xOmyH938kIPC",
    },
};

export default { 
    get: async (url, params) => {
        const { data } = await axios.get(url, { ...defaultConfig, ...params });
        return data;
    }
};
