<template>
        <b-navbar toggleable="md" type="dark">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="#">NavBar</b-navbar-brand>
            
            <b-collapse is-nav id="nav_collapse">
                 <b-navbar-nav class="ml-auto">
                    <b-nav-item>About Us</b-nav-item>
                    <b-nav-item>Contact Us</b-nav-item>
                    <b-nav-item>Sign In</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
</template>

<style scoped>
.navbar{
    background:#F6828D;
    padding-left: 0;
    padding-right: 0;
}
.navbar-brand{
    margin-left: 150px;
}
.navbar-nav{
    margin-right: 150px;
}
</style>