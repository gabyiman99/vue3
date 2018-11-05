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
    <b-form-input id="message"
                  type="text"
                  placeholder="Enter your message"
                  :rows="3"></b-form-input>
    </div>
    
</template>
<style>
.contactus{
  margin: 0 150px;
}
label{
  float: left;
  margin-bottom: 0;
  margin-top: 5px;
}
</style>
