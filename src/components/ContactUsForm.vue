<template>
  <div role="group" class="contactus">
    <label for="name">Name:</label>
    <b-form-input id="name"
                  type="text"
                  placeholder="Enter your name"></b-form-input>
    <label for="email">Email:</label>
    <b-form-input id="email"
                  type="text"
                  placeholder="Enter your email"></b-form-input>
    <label for="message">Message:</label>
    <b-form-textarea id="message"
                  type="text"
                  placeholder="Enter your message"
                  :rows="3"></b-form-textarea>
    <b-button class="submit" variant="primary">Submit</b-button>
    </div>
</template>
<style>

.contactus{
  margin: 40px 150px;
}

label{
  float: left;
  margin-top: 5px;
}

.submit{
  margin-top: 30px;
  float: left;
}
</style>
