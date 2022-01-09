<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <label for="email">Email:</label>
    <input v-model="email" name="email" required type="email">

    <label for="password">Password:</label>
    <input v-model="password" name="password" required type="password">
    <div v-if="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import {ref} from 'vue'
import {useStore} from "vuex";
import {useRouter} from 'vue-router'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch('signup', {
          email: email.value,
          password: password.value,
        })
        router.push('/')
      } catch (err) {
        error.value = err.message
      }
    }

    return {handleSubmit, email, password, error}
  }
}
</script>