<template>
    <div class="app" >
        <div class="left-block" >
            <div class="left-block__images" >
                <div class="images image__1" ></div>
                <div class="images image__2" ></div>
                <div class="images image__3" ></div>
                <div class="images image__4"></div>
                <div class="images image__5"></div>
                <div class="images image__6"></div>
                <div class="images image__7"></div>
                <div class="images image__8"></div>
                <div class="images image__9"></div>
            </div>
        </div>
        <div class="right-block" >
            <div>
                <button type="button"><p>стрелка влево</p></button>
                <p>Already have an account? <a href="">Sign In</a> </p>
            </div>
            <h1>Free access <span>14 days trial</span> </h1>
            <div>
                <input type="text" name="fullName" placeholder="Your Full Name" v-model="fullName">
                <input type="text" name="userEmail" placeholder="Your Email Address" v-model="userEmail">
                <input type="password" name="userPassword" placeholder="Your Password" v-model="userPassword">
            </div>
            <p>At least 8 characters</p>
            <p v-for="error in errors">{{error}}</p>
            <button type="button" @click="createAccount">Create Account</button>
        </div>
        
    </div>
</template>

<script>


export default {
    name: 'App',
    components: {
    },
    data(){
        return{
            fullName: '',
            userEmail: '',
            userPassword: '',
            errors: '',

        }
    },
    methods: {
        async createAccount(){
            const completedForm = {
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
            .then(result => { 
                if (result.errors != null){
                    console.log('errors:', result.errors),
                    this.errors = result.errors
                }
            } )
        }
    }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #FFFFFF;
}
.app{
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
}
.left-block{
    display: flex;
    height: 100%;
    width: 50%;
    align-items: center;
    justify-content: center;
}
.left-block__images{
    display: flex;
    width: 540px;
    height: 556px;
    left: 83px;
    top: 213px;
    margin-top: 213px;
    margin-right: 83px;
    flex-direction: initial;
    flex-wrap: wrap;
}
.images{
    width: 180px;
    height: 180px;
    
}
.image__1{
    border-radius: 0px 60px;
    background-image: url("./images/1.jpg");
    background-size: 180px;
    background-position: center;
    background-color: #D9D9D9;
}
.image__3{
    background: #23222D;
    opacity: 0.2;
    border-radius: 60px 60px 0px 0px;
}
.image__4{
    background: #04A777;
    opacity: 0.2;
    border-radius: 100px 0px 0px 0px;
}
.image__5{
    background: url("./images/2.jpg"), #D9D9D9;
    background-size: 180px;
    background-position: center;
}
.image__6{
    background: #009DDC;
    opacity: 0.2;
    border-radius: 0px 0px 100px 0px;
}
.image__7{
    background: #FF6663;
    opacity: 0.2;
    border-radius: 0px 60px 60px 0px;
    transform: rotate(90deg);
}
.image__9{
    background: #D9D9D9;
    border-radius: 0px 60px;
}
</style>
