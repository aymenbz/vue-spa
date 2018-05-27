<template>
  <div class="login row justify-content-center">
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">Register</div>
        <div class="card-body">
          <form @submit.prevent="register">
            <div class="form-group row">
              <label for="email">Name</label>
              <input type="text" class="form-control" v-model="form.name" placeholder="Enter Name">
            </div>
            <div class="form-group row">
              <label for="email">Email</label>
              <input type="email" class="form-control" v-model="form.email" placeholder="Enter Email">
            </div>
            <div class="form-group row">
              <label for="password">Password</label>
              <input type="password" class="form-control" v-model="form.password" placeholder="Enter Password">
            </div>
            <div class="form-group row">
              <label for="password">Password</label>
              <input type="password" class="form-control" v-model="form.password_confirmation" placeholder="Confirm Password">
            </div>
            <div class="form-group row">
              <input type="submit" class="btn btn-info" value="Register" >
            </div>
            <div class="form-group row" v-if="authError">
              <p class="error"> {{authError}} </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { signup } from '../../helpers/auth';

export default {

  name: 'register',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      error: null
    }
  },
  methods: {
    register() {
      this.$store.dispatch('signup');

      signup(this.$data.form)
       .then((res) => {
         this.$store.commit('loginSuccess', res);
         this.$router.push('/');
       })
       .catch((error) => {
         this.$store.commit('loginFailed', {error});
       })
    }
  },
  computed: {
    authError() {
      return this.$store.getters.authError
    }
  }
}
</script>

<style scoped>
.error {
  text-align: center;
  color: red
}
</style>
