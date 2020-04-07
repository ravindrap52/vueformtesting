<template>
  <div class="login--container">
    <form @submit.prevent="doLogin" novalidate class="form--container">
      <div class="form--group">
        <label class="form--label" for="email">Email</label>
        <input
          type="email"
          class="form--input"
          v-model="loginForm.email"
          @blur="$v.loginForm.email.$touch()"
        />
        <template v-if="$v.loginForm.email.$error">
          <p v-if="!$v.loginForm.email.required">Email is required</p>
          <p v-if="!$v.loginForm.email.email">Enter valid Email</p>
        </template>
      </div>
      <div class="form--group">
        <label class="form--label" for="password">Password</label>
        <input
          type="password"
          class="form--input"
          v-model="loginForm.password"
          @blur="$v.loginForm.email.$touch()"
        />
        <template v-if="$v.loginForm.password.$error">
          <p v-if="!$v.loginForm.password.required">password is required</p>
        </template>
      </div>
      <div class="form--group">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  validations: {
    loginForm: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    doLogin() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("form submitted", this.loginForm);
      }
    }
  }
};
</script>

<style></style>
