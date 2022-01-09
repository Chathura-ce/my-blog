import {initializeApp} from 'firebase/app'

import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC1cQOIr_pPp71PfddxVPNOEhTPW73-Aig",
    authDomain: "vuex-4-firebaase-auth.firebaseapp.com",
    projectId: "vuex-4-firebaase-auth",
    storageBucket: "vuex-4-firebaase-auth.appspot.com",
    messagingSenderId: "678328971107",
    appId: "1:678328971107:web:312a4e7e1808e5772d6d56"
};

//init firebase
initializeApp(firebaseConfig)

//init firebase auth
const auth = getAuth()

export {auth}