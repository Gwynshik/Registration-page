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
            <button type="button" @click="createAccount" >Create Account</button>
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
    },
    methods: {
        createAccount(){
            const completedForm = 
                {
                    email: this.userEmail,
                    password: this.userPassword,
                    firstName: "string",
                    lastName: "string"
                }

            console.log('completedForm:', completedForm)

            fetch('https://writy-app-api.herokuapp.com/api/Account/register', {
                method: 'POST',
                body: JSON.stringify(completedForm),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
        }
    }
}
</script>

<style>

</style>
