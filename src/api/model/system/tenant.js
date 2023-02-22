import config from '@/config'
import http from '@/utils/request'

export default{
	tenant:{
		pages:{
			url: `${config.SYSTEM_API_URL}/api/v1/tenants`,
			name: '获取租户管理列表',
			get: async function(params){
				return await http.get(this.url, params)
			}
		},
		add:{
			url: `${config.SYSTEM_API_URL}/api/v1/tenants`,
			name: '新增，保存租户信息',
			post: async function(data){
				return await http.post(this.url, data)
			}
		},
		edit:{
			url: `${config.SYSTEM_API_URL}/api/v1/tenants`,
			name: '更新租户信息',
			put: async function(id, data){
				return await http.put(`${this.url}/${id}`, data)
			}
		},
		del:{
			url: `${config.SYSTEM_API_URL}/api/v1/tenants`,
			name: '根据id删除租户信息',
			delete: async function(id){
				return await http.delete(`${this.url}/${id}`)
			}
		},
		tenantMenu:{
			url: `${config.SYSTEM_API_URL}/api/v1/tenants/menu`,
			name: '获取租户的菜单列表',
			get: async function(id){
				return await http.get(`${this.url}/${id}`)
			}
		},
		putTenantMenu:{
			url: `${config.SYSTEM_API_URL}/api/v1/tenants/menu`,
			name: '更新租户菜单信息',
			put: async function(id, data){
				return await http.put(`${this.url}/${id}`, data)
			}
		}
	}
}