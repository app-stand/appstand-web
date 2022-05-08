<template>
  <div v-if="!isSent && !errorMessage">
    <form>
      <label>Name</label>
      <input
        type="text"
        v-model="formData.name"
        name="name"
        placeholder="Your Name"
      />
      <label>Email</label>
      <input
        type="email"
        v-model="formData.email"
        name="email"
        placeholder="Your Email"
      />
      <label>Message</label>
      <textarea
        name="message"
        v-model="formData.message"
        cols="30"
        rows="5"
        placeholder="Message"
      >
      </textarea>
    </form>
    <button type="button" @click="sendEmail">
      {{ isSending ? "Sending..." : "Send" }}
    </button>
  </div>
  <div v-if="isSent && !errorMessage">Message successfully sent.</div>
  <div v-if="errorMessage">
    <p>Something went wrong!</p>
    <p>Error Message: {{ errorMessage }}</p>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { ref } from "vue";

export default {
  name: "ContactUs",
  setup() {
    const isSending = ref(false);
    const isSent = ref(false);
    const errorMessage = ref(null);

    const formData = ref({
      name: "",
      email: "",
      message: "",
    });

    async function sendEmail() {
      isSending.value = true;
      try {
        await emailjs.send(
          "service_appstandCH",
          "template_appStand1",
          formData.value,
          "user_KDLytV8Y6OWkysjWTFE8l"
        );
        isSent.value = true;
      } catch (e) {
        console.error(e.text);
        errorMessage.value = e.text;
      }
      // Reset form field
      formData.value.name = "";
      formData.value.email = "";
      formData.value.message = "";
      isSending.value = false;
    }

    return { sendEmail, formData, isSending, isSent, errorMessage };
  },
};
</script>

<style scoped>
.wrapper {
  color: #2c3e50;
  font-family: Helvetica Neue, Georgia, sans-serif;
  font-size: 16px;
  margin: 60px auto 40px;
  max-width: 600px;
  width: 90%;
}

.outputBox {
  -ms-user-select: all;
  -webkit-user-select: all;
  user-select: all;
  background: #2d2b55;
  border-radius: 6px;
  box-sizing: border-box;
  color: #fad000;
  display: block;
  margin: 0 auto 20px;
  overflow-x: auto;
  padding: 20px;
  white-space: nowrap;
  width: 100%;
}

h1 {
  text-align: center;
}

a:hover {
  text-decoration: underline;
}

.btn {
  background: black;
  border-radius: 6px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-block;
  float: right;
  letter-spacing: 1px;
  margin: 10px 0;
  padding: 10px 20px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
}

@media (min-width: 720px) {
  .btn {
    margin: 10px 0 10px 10px;
    width: auto;
  }
}

.btn:hover {
  opacity: 0.9;
  text-decoration: none;
}

label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}
label::after {
  content: ":";
}

input,
textarea,
button {
  border-radius: 6px;
  border: 1px solid #a9a9a9;
  box-sizing: border-box;
  display: block;
  margin: 0 0 10px;
  padding: 10px;
  width: 100%;
}

textarea {
  min-height: 200px;
  resize: vertical;
}

button {
  cursor: pointer;
}
</style>
