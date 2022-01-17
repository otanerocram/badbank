import ApiHandler from "../Helpers/ApiHandler";

export default {
    getUsers: (params) => {
        return ApiHandler.get("b/61e391d9ba87c130e3e909b3/", { params });
    }
}