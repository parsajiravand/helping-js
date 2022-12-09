<template>
  <div class="sample-captcha">
    <section class="data-box">
      <input
        v-model="inputValue"
        placeholder="submit your captcha"
        class="input"
        type="text"
      />

      <pre class="data">{{ data }}</pre>
    </section>

    <section class="captcha-box">
      <!-- create list for carachters and select random color for each item -->
      <VueClientRecaptcha
        :value="inputValue"
        :textColors="[
          'blue',
          'red',
          'purple',
          'green',
          '#e83e8c',
          '#ff5578',
          '#53b29f',
          '#d64a37',
          '#094899',
          '#f64141',
          'rgb(77,190,255)',
        ]"
        @getCode="getCaptchaCode"
        @isValid="checkValidCaptcha"
      />
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import VueClientRecaptcha from "vue-client-recaptcha";
export default defineComponent({
  components: {
    VueClientRecaptcha,
  },

  data() {
    return {
      inputValue: null,
      data: {
        captchaCode: null,
        isValid: false,
      },
    };
  },
  methods: {
    getCaptchaCode(value: string) {
      /* you can access captcha code */
      this.data.captchaCode = value;
    },
    checkValidCaptcha(value: string) {
      /* expected return boolean if your value and captcha code are same return True otherwise return False */
      this.data.isValid = value;
      if (value) {
        alert("Your Captcha is valid now you can submit");
      }
    },
  },
});
</script>
<style>
@import url("https://unpkg.com/vue-client-recaptcha/dist/style.css");
.sample-captcha {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.sample-captcha .data-box .input {
  padding: 10px;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  width: 100%;
}
.sample-captcha .data-box .input:focus {
  background: #f0f0f00d;
  outline: none;
  box-shadow: inset 0 -2px 0 #0077ff;
}
.sample-captcha .data-box .data {
  width: 100%;
  margin-top: 10px;
  padding: 20px 0 20px 20px;
  background-color: #ebebeb;
  border-radius: 4px;
}
.sample-captcha .captcha-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
}
</style>
