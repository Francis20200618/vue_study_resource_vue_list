export default {
    namespaced:true,
    //准备actions——用于响应组件中的动作
    actions: {
        jia(context, value) {
            context.commit('JIA', value)
        },
        jian(context, value) {
            context.commit('JIAN', value)
        },
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        }
    },
    mutations:{
		JIA(state,value){
			// console.log('mutations中的JIA被调用了')
			state.sum += value
		},
		JIAN(state,value){
			// console.log('mutations中的JIAN被调用了')
			state.sum -= value
		},
	},
    //准备state——用于存储数据
    state: {
        sum: 0, //当前的和
        school: '尚硅谷',
        subject: '前端'
    },

    //z准备getters——用于计算state数据
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}