import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        items: []
    },
    mutations: {
        pushAllItems(state, items) {
            state.items = items
        },
        addItem(state, item) {
            state.items.push(item)
        },
        selectItem(state, uuid) {
            let select = (i) => {
                i.children.map(select)
                i.selected = i.id === uuid
                return i
            }

            state.items = state.items.map(select)
        },
        rename(state, { uuid, name }) {
            let select = (i) => {
                i.children.map(select)
                if (i.id === uuid) {
                    i.name = name
                }
                return i
            }

            state.items = state.items.map(select)
        }
    }
});
export default store;