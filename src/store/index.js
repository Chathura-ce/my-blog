import {createStore} from "vuex";
//firebase imports
import {auth} from '../firebase/config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged} from 'firebase/auth'

const store = createStore({
    state: {
        user: null,
        authIsReady: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            console.log('user-->', state.user)
        },
        setAuthIsReady(state,payload){
            state.authIsReady = payload
        }
    },
    actions: {
        async signup(context, {email, password}) {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            if (res) {
                context.commit('setUser', res.user)
            } else {
                throw new Error('Could not complete signup')
            }
        },
        async login(context, {email, password}) {
            console.log('Login action')
            const res = await signInWithEmailAndPassword(auth, email, password)
            if (res) {
                context.commit('setUser', res.user)
            } else {
                throw new Error('Could not complete login')
            }
        },
        async logout(context) {
            console.log('Logout actions')
            await signOut(auth)
            context.commit('setUser', null)
        }

    }
})

const unsub = onAuthStateChanged(auth,(user)=>{
    store.commit('setAuthIsReady',true)
    store.commit('setUser',user)
    unsub()
})

export default store