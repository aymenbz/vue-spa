<template>
  <div class="login row justify-content-center">
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <form @submit.prevent="authanticate">
            <div class="form-group row">
              <label for="email">Email</label>
              <input type="email" class="form-control" v-model="form.email" placeholder="Enter Email">
            </div>
            <div class="form-group row">
              <label for="password">Password</label>
              <input type="password" class="form-control" v-model="form.password" placeholder="Enter Password">
            </div>
            <div class="form-group row">
              <input type="submit" class="btn btn-info" value="Login" >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '../../helpers/auth';

export default {

  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    authanticate() {
      this.$store.dispatch('login');

      login(this.$data.form)
       .then((res) => {
         this.$store.commit('loginSuccess', res);
         this.$router.push('/');
       })
       .catch((error) => {
         this.$store.commit('loginFailed', {error});
       })
    }
  }
}
</script>

<style lang="css">
</style>
