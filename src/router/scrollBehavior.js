import { useViewTagsStore } from '@/stores/viewTags'
import { nextTick } from 'vue'

export function beforeEach(to, from){
	var adminMain = document.querySelector('#adminui-main')
	if(!adminMain){return false}
	
	const viewTagsStore = useViewTagsStore()
	viewTagsStore.updateViewTags({
		fullPath: from.fullPath,
		scrollTop: adminMain.scrollTop
	})
}

export function afterEach(to){
	var adminMain = document.querySelector('#adminui-main')
	if(!adminMain){return false}

	const viewTagsStore = useViewTagsStore()
	nextTick(()=>{
		var beforeRoute = viewTagsStore.viewTags.filter(v => v.fullPath == to.fullPath)[0]
		if(beforeRoute){
			adminMain.scrollTop = beforeRoute.scrollTop || 0
		}
	})
}