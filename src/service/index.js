// import axios from 'axios'
import request from "@/utils/request"
import { co } from '@/utils/index'

/**
 * 
 * @description 获取歌手分类列表
 * @param {Object} data 请求参数
 * @param {Number} data.limit 返回数量 默认30
 * @param {Number} data.offset 偏移数量用于分页
 * @param {Number} data.type 类别 (-1:全部1:男歌手2:女歌手3:乐队)
 * @param {Number} data.area 地区 (-1:全部7华语96欧美8:日本16韩国0:其他)
 * @returns {promise}
 * 
 */

export const getArtistList = (data) =>
    co(request.post(`/artistst`, data))

//搜索
/**
 * @description 获取搜索接口 用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 
 * @param {Object} data 请求参数
 * @param {String} data.keywords 搜索关键词
 * @param {Number} data.offset  偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param {Number} data.limit 返回数量 默认30
 * @param {Number} data.type 搜索类型 默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
 * @returns 
 */
export const cloudsearch = (params) =>
    co(request.get('/cloudsearch', { params }))

//轮播图
/**
 * 
 * @param {Object} data 请求参数 可获取 banner( 轮播图 ) 数据
 * @param {Object} data.type 资源类型,对应以下类型,默认为 0 即 PC 0: pc 1: android 2: iphone 3: ipad
 * @returns 
 */
export const getBanners = (params) =>
    co(request.get('/banner', { params }))

/**
 * 
 * @param {Object} data  调用此接口 , 可获取 APP 首页信息
 * @returns 
 */
export const getBlockPage = (params) =>
    co(request.post('/homepageock/page', { params }))

// /homepage/dragon/ball  图标接口

export const getDragonBall = (params) =>
    co(request.get('/homepage/dragon/ball', { params }))

// 推荐歌单接口
export const getRecommendPlaylist = (params) =>
    co(request.get('/personalized', { params }))

// 数字专辑
export const getDigitalAlbum = (params) =>
    co(request.get('/album/list', { params }))

//函数必须使用async关键字修饰
// await关键字后面必须跟Promise实例或返回promise实例的函数(执行)
// const fn1 = async () => {
//     try{
//         const res = await cloudsearch(params)
//         return res
//     } catch(err){
//         console.log(err)
//     }
// }

export const getHomepageDragonBall = (params) =>
    co(request.get('/homepage/dragon/ball', { params }))
    // const fn2 = async () => {
    //     const res = await cloudsearch(params).catch((err) => console.log(err))
    //     console.log(res);
    // }

// const fn3 = async () => {
//     const [error,res] = await cloudsearch();
//     if(!error) {
//         return console.log(res);
//     }
// }
export const getHomePageData = () => co(request.post("/homepage/block/page"));

/**
 * 
 * @param {*} params 
 * @param {String} params.phone 获取验证码
 * @returns 
 */
export const getCaptcha = (params) => co(request.get("/captcha/sent", { params }));

/**
 * @description 手机号+验证码
 * @param {*} data
 * @param {String} params.phone 手机号
 * @param {String} params.captcha 获取验证码
 * 
 */
export const loginCellphone = (data) => co(request.post("/login/cellphone", data));

/**
 * @description 国家编码列表
 * @param {String} params.code 
 * @returns 
 */
// /countries/code/list
export const getCountries = (params) => co(request.get("/countries/code/list", params));

/**
 * @description 歌曲详情列表
 * 
 */
// /user/playlist
export const personaLized = (data) =>
    co(request.post(`/playlist/detail?timestamp=${Date.now()}`, data));

export const myuser = (data) =>
    co(request.get(`/user/account?timestamp=${Date.now()}`, data));

// 收藏歌单
export const mymusiclist = (data) =>
    co(request.post(`/user/subcount?timestamp=${Date.now()}`, data));

// 获取用户歌单 /user/playlist
export const getUserPlaylist = (data) =>
    co(request.post(`/user/playlist?timestamp=${Date.now()}`, data));

// 退出登录
// axios.post( '/logout ' )
//         .then(response =>{//清除session数据
//           this.clearSession();
//         })
//         .catch( error => {
//         console.error(error);
//       });
/**
 * @description 退出登录
 * @param {*} data 
 * @returns 
 */


export const mylogout = (data) =>
    co(request.post("/logout", data));


export const mvAll = (params) =>
    co(request.get(`/top/mv?timestamp=${ Date.now()}`, { params }));

// 这个是传id

export const mvDetail = (data) =>
    co(request.post(`/mv/url?timestamp=${Date.now()}`, data));


export const getTrackUrl = (track) => {
    return co(request.post(`/song/url/v1?timestamp=${Date.now()}`, { id: track, level: "standard" }));
};

// export const getSongDetail = (ids) => {
//     console.log(ids);
//     return co(request.get(`/song/detail?timestamp=${Date.now()}`, { params: { ids } }));
// }
export const getTrackDetail = (ids) =>
    co(request.get(`/song/detail?timestamp=${Date.now()}`, { params: { ids } }));