<template>
    <div class="wrapper" >
        <div class="left-side-page" >
            <div class="image-container" >
                <div id="top-left-image" class="image-container__images image-container__top-image" ></div>
                <div class="image-container__images image-container__top-image" ></div>
                <div id="top-right-image" class="image-container__images image-container__top-image" ></div>
                <div id="left-middle-image" class="image-container__images"></div>
                <div id="central-image" class="image-container__images"></div>
                <div id="right-middle-image" class="image-container__images"></div>
                <div id="bottom-left-image" class="image-container__images image-container__bottom-image"></div>
                <div class="image-container__images image-container__bottom-image"></div>
                <div id="bottom-right-image" class="image-container__images image-container__bottom-image"></div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>




<script>
export default {
  name: 'App',
  components:{
}}
 </script>




<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

*{
    padding: 0;
    margin:  0;
    box-sizing: border-box;
}
.wrapper{
    display: flex;
    height: 100vh;
    width:  100vw;
    background-color: #FFFFFF;
}
.left-side-page{
    display: flex;
    height: 100%;
    width:  100%;
    align-items: center;
    justify-content: center;
}
.image-container{
    display: flex;
    width:  540px;
    height: 556px;
    flex-direction: initial;
    flex-wrap: wrap;
}
.image-container__images{
    width:  calc(100%/3);
    height: 180px;
    
}
#top-left-image{
    border-radius: 0px 60px;
    background-image: url("./images/1.jpg");
    background-size: 180px;
    background-position: center;
    background-color: #D9D9D9;
}
#top-right-image{
    background: #23222D;
    opacity: 0.2;
    border-radius: 60px 60px 0px 0px;
}
#left-middle-image{
    background: #04A777;
    opacity: 0.2;
    border-radius: 100px 0px 0px 0px;
}
#central-image{
    background: url("./images/2.jpg"), #D9D9D9;
    background-size: 180px;
    background-position: center;
}
#right-middle-image{
    background: #009DDC;
    opacity: 0.2;
    border-radius: 0px 0px 100px 0px;
}
#bottom-left-image{
    background: #FF6663;
    opacity: 0.2;
    border-radius: 0px 60px 60px 0px;
    transform: rotate(90deg);
}
#bottom-right-image{
    background: #D9D9D9;
    border-radius: 0px 60px;
}




@media screen and (max-width: 980px) {
    .wrapper{
        flex-direction: column;
    }
    .left-side-page{
        height: 120px;
        width:  100%;
        padding: 0px;
        align-items: center;
        justify-content: center;
    }
    .image-container{
        width:  100%;
        height: 100%;
        flex-direction: initial;
        flex-wrap: wrap;
    }
    .image-container__images{
        height: 120px;
    }
    .image-container__top-image{
        display: none;
    }
    .central-image{
        background: url("./images/2.jpg"), #D9D9D9;
        background-size: 120px;
        background-position: center;
    }
    .image-container__bottom-image{
        display: none;
    }
}
</style>
