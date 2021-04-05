
/**
 * 请求接口仓库
 */
import Axios from 'axios';

const JavaServiceUrl = document.getElementById("root").getAttribute('JavaServiceUrl');

//函数的出口
var globaData={
    JavaServiceUrl:JavaServiceUrl,
    findUserPwdByAccounr:findUserPwdByAccounr,
}

/**
 * 获取用户密码
 * @param {回调函数} callback 
 * @param {用户账号} account 
 */
function findUserPwdByAccounr(callback,account){
    let JavaServiceUrl = globaData.JavaServiceUrl;
    let url = JavaServiceUrl+'/user/findPwdByAccound/'+account;
    Axios.get(JavaServiceUrl+'/user/findPwdByAccound/'+account).then(
        res=>{
            let data = res.data;
            callback(data);
        }
    ).catch(error=>{
        console.error(error);
    })
}

export default globaData;