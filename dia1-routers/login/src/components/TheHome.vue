<template>
  <div class="hello">
    <nav class="d-flex flex-row justify-content-between navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <a class="navbar-brand" href="#"><i class="fas fa-laptop-code font_icon"></i></a>
      </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div class="mr-2 d-flex flex-row">
              <i class="fas fa-user-tie font_icon2 mr-2"></i><p class="m-auto"> {{user.name}}</p>
          </div>
          <form>
            <button class="btn btn-outline-success" type="submit" @click.prevent="logOut()">Salir</button>
          </form>      
        </div>      
    </nav>  
  </div>
</template>

<script>
export default {  
  data(){
      return{
          user: {}
      } 
  },
  methods:{
      getUserDetails(){
          let user = localStorage.getItem('user');
          let token = localStorage.getItem('jwt');
              
          if(token){
              this.user = JSON.parse(user);                            
          }
      },
      logOut(){
          localStorage.removeItem('jwt');
          localStorage.removeItem('user');
          this.$router.push('/');
      }
  },
  created(){
      this.getUserDetails()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font_icon{
  font-size: 60px;
}
.font_icon2{
  font-size: 30px;
}
</style>
