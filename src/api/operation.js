// 运营相关接口
import request from '@/utils/request'
// 添加运营信息
export function addOperation (data) {
  return request({
    url: '/operation/add',
    method: 'post',
    data
  })
}
