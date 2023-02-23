import config from "@/config"
import http from "@/utils/request"

export default {
	dict: {
		typeListPages: {
			url: `${config.SYSTEM_API_URL}/api/v1/dict/types/pages`,
			name: "字典类型分页列表",
			get: async function(params){
				return await http.get(this.url, params);
			}
		},
		typeList: {
			url: `${config.SYSTEM_API_URL}/api/v1/dict/types/list`,
			name: "字典类型列表",
			get: async function(params){
				return await http.get(this.url, params);
			}
		},
		getItems: {
			url: `${config.SYSTEM_API_URL}/api/v1/dict/types`,
			name: "获取字典类型的数据项",
			get: async function(params){
				return await http.get(`${this.url}/${params.code}/items`);
			}
		},
		itemsListPages: {
			url: `${config.SYSTEM_API_URL}/api/v1/dict/items/pages`,
			name: "字典数据分页列表",
			get: async function(params){
				return await http.get(this.url, params);
			}
		},
		itemsList: {
			url: `${config.SYSTEM_API_URL}/api/v1/dict/items/list`,
			name: "字典数据列表",
			get: async function(params){
				return await http.get(this.url, params);
			}
		},
		addType: {
			url: `${config.SYSTEM_API_URL}/api/v1/dict/types`,
			name: "新增字典类型",
			post: async function(data={}){
				return await http.post(this.url, data);
			}
		},
		editType: {
			url: `${config.SYSTEM_API_URL}/api/v1/dict/types`,
			name: "修改字典类型",
			put: async function(id, data={}){
				return await http.put(`${this.url}/${id}`, data);
			}
		},
		delType: {
			url: `${config.SYSTEM_API_URL}/api/v1/dict/types`,
			name: "删除字典类型",
			delete: async function(id){
				return await http.delete(`${this.url}/${id}`);
			}
		},
		addItem: {
			url: `${config.SYSTEM_API_URL}/api/v1/dict/items`,
			name: "新增字典数据",
			post: async function(data={}){
				return await http.post(this.url, data);
			}
		},
		editItem: {
			url: `${config.SYSTEM_API_URL}/api/v1/dict/items`,
			name: "修改字典数据",
			put: async function(id, data={}){
				return await http.put(`${this.url}/${id}`, data);
			}
		},
		delItem: {
			url: `${config.SYSTEM_API_URL}/api/v1/dict/items`,
			name: "删除字典数据",
			delete: async function(id){
				return await http.delete(`${this.url}/${id}`);
			}
		},
	},
}
