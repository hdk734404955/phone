// 主播相关接口
import request from '@/utils/request'
// 添加主播信息
export function addAnchor (data) {
  return request({
    url: '/anchor/add',
    method: 'post',
    data
  })
}
