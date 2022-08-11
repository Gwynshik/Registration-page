<template>
    <div>
        <div>фото</div>
        <div>
            <div>
                <button type="button"><p>стрелка влево</p></button>
                <div>
                    <p>Already have an account?</p>
                    <a href="">Sign In</a>
                </div>
                <p></p>
            </div>
            <h1>Free access 14 days trial</h1>
            <div>
                <input type="text" name="fullName" placeholder="Your Full Name" v-model="fullName">
                <input type="text" name="userEmail" placeholder="Your Email Address" v-model="userEmail">
                <input type="password" name="userPassword" placeholder="Your Password" v-model="userPassword">
            </div>
            <div>
                <p>At least 8 characters</p>
            </div>
            <button type="button" @click="btnCreateAccount" >Create Account</button>
        </div>
        
    </div>
</template>

<script>


export default {
    name: 'App',
    components: {},
    data(){
        return{
            fullName: '',
            userEmail: '',
            userPassword: ''

        }
        

    }
}
</script>

<style>

</style>
