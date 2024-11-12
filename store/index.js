import { defineStore } from 'pinia'
 
export const useStore = defineStore('main', {
  state: () => {
    return {
      screenTopNavHeight: '54'
    }
  },
 
  getters: {},
  actions: {
    // 切换语言
   setScreenTopNavHeight(data){
	   this.screenTopNavHeight = data
   }
  },
  // 开启数据持久化
  persist: {
    enabled: true,
  },
})