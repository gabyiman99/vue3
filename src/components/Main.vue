<template>
    <div class="content1">
        <b-card title="Simulasi"
                img-src="https://via.placeholder.com/500x300"
                img-alt="Image"
                img-top
                tag="article"
                style="width: 500px; height: 400px;"
                class="mb-2">
            <p class="card-text">
            Try it yourself
            </p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    
        <b-card title="Apply Now"
                img-src="https://via.placeholder.com/500x300"
                img-alt="Image"
                img-top
                tag="article"
                style="width: 500px; height: 400px;"
                class="mb-2">
            <p class="card-text">
            Try it yourself
            </p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<style>
.content1{
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    margin-left: 150px;
    margin-right: 150px;
    width: inherit;
    justify-content: center;
    column-gap: 50px;
}

.button{
    align-self: flex-end;
}
</style>
