<template>
    <div class="main" >
        <div class="main__head" >
            <span class="material-symbols-outlined main__btn-arrow" >arrow_back</span>
            <p>Already have an account? <a href="" class="main__link">Sign In</a> </p>
        </div>
        <h1>Free access <span>14 days trial</span> </h1>
        <div class="main__registration-form">
            <input type="text" name="fullName" placeholder="Your Full Name" v-model="fullName" class="main__input">
            <input type="text" name="userEmail" placeholder="Your Email Address" v-model="userEmail" class="main__input">
            <input type="password" name="userPassword" placeholder="Your Password" v-model="userPassword" class="main__input">
        </div>
        <p class="main__password-instruction">At least 8 characters</p>
        <p class="main__errors" v-for="error in errors">{{error}}</p>
        <button type="button" @click="createAccount" class="main__btn-create-account">Create Account</button>
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
                else{
                    // window.location.href = '#/account-registered'
                    this.$router.push('account-registered')
                }
            })
        }
    }
}
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');




.main{
    display: flex;
    height: 100%;
    width:  100%;
    align-items: center;
    flex-direction: column;
}
.main__head{
    display: flex;
    height: 28px;
    width:  100%;
    margin-top: 58px;
    justify-content: space-between;
    align-items: center;
}
.main__head .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48;
}
.main__btn-arrow{
    width:  24px;
    height: 15px;
    margin-left: 100px;
}
.main__head p{
    font-family: Lato;
    font-size:   20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #23222D;
    margin-right: 100px;
    width: 288px;
}
.main__link{
    color: #009DDC;
    text-decoration: none;
}
.main h1{
    width:  440px;
    height: 120px;
    font-family: Lato;
    font-size: 48px;
    color: #242331;
    margin-top: 58px
}
.main h1 span{
    color: #009DDC;
}
.main__registration-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    gap: 24px;
}
.main__input{
    width:  440px;
    border: 1px solid #C5C5C5;
    border-radius: 8px;
    padding: 12px 16px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size:   16px;
    line-height: 24px;
    color: #A6A0A0;
}
.main__input:hover {
    border: 2px solid #009DDC;
}
.main__input:hover::placeholder {
    color: black;
}
.main__input:focus {
    border: 2px solid #009DDC;
}
.main__input:focus::placeholder {
    color: transparent;
}
.main__password-instruction{
    margin-top: 8px;
    width:  440px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size:   14px;
}
.main__errors{
    margin-top: 8px;
    width:  440px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size:   16px;
    color: #FF6663;
}
.main__btn-create-account{
    cursor: pointer;
    margin-top: 48px;
    width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    background: #009DDC;
    border-radius: 8px;
    border: none;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size:   16px;
    line-height: 24px;
    color: #FEFFFE;;
}




@media screen and (max-width: 980px) {
.main__head{
    margin-top: 24px;
}
.main__btn-arrow{
    margin-left: 24px;
}
.main__head p{
    font-size:   16px;
    margin-right: 24px;
    width: 230px;
}
.main h1{
    width:  312px;
    height: 80px;
    font-size: 32px;
    margin-top: 30px
}
.main__registration-form{
    margin-top: 32px;
    gap: 28px;
}
.main__input{
    width:  312px;
    padding: 10px 16px;
    font-size: 16px;
}
.main__password-instruction{
    width:  312px;
}
.main__errors{
    width:  312px;
    font-size: 14px;
}
.main__btn-create-account{
    margin-top: 32px;
    width: 312px;
    padding: 10px 16px;
}
}
</style>
