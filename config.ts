// config.js
const config = {
    API_BASE_URL: 'http://127.0.0.1:1800', // 替换为你的 API 基础路径
    login: '/user_management/login', // 登录验证
    weCallback: '/user_management/wechat/callback', // 登录验证
    weRegister: '/user_management/wechat/register/', // 登录验证
    getFish: '/fish/getFish', // 登录验证
    getFishList: '/fish/getFishList', // 分页
    getFishSingle: '/fish/getFishSingle', // 分页
    searchFish: '/fish/searchFish', // 登录验证
    addFishURL: '/fish/addFish/', // 登录验证
};
export default config;