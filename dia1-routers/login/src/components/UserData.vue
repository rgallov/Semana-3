<template>
<div class="container mt-2 b">
    <h1>Bienvenido</h1>
    <form class="text-md-right">        
      <div class="d-flex row row_person pt-2 pb-2 justify-content-between">
        <div class="col col_person">
          <i class="fas fa-user-tie font-person"></i>
        </div>
        <div class="d-flex flex-col col col_left">
          <div class="d-flex flex-row align-items-center">
            <h5 class="mr-2">Nombre:</h5>
            <input type="text" ref="name" :value="user.name" :disabled="!isEditing"
                :class="{view: !isEditing}" class="mr-2">
          </div>          
          <div class="d-flex flex-row align-items-center">
            <h5>Email:</h5>
            <input type="text" ref="email" :value="user.email" :disabled="!isEditing"
                :class="{view: !isEditing}">  
          </div>
        </div>
        <div class="d-flex flex-row col col_person justify-content-center">
          <button @click.prevent="isEditing = !isEditing" v-if="!isEditing" class="btn btn-outline-primary form-control">Edit</button>
          <button @click.prevent="save" v-else-if="isEditing" class="btn btn-outline-primary form-control mr-2">Save</button>
          <button v-if="isEditing" @click="isEditing = false" class="btn btn-outline-primary form-control">Cancel</button>
        </div>        
      </div>
    </form>
    <footer class="bg-light text-white">
        <!-- Copyright -->
        <div class="footer-copyright text-center py-1 bg-secondary mt-2">
          <span>© 2020 Copyright</span>
        </div>
      </footer>
</div>
</template>

<script>
export default {  
  data(){
      return{
          isEditing: false,
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
      save() {
      this.user.firstName = this.$refs['first_name'].value;
      this.user.lastName = this.$refs['last_name'].value;
      this.isEditing = !this.isEditing;
    }
  },
  created(){
      this.getUserDetails()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}
.col_person {
    vertical-align: middle;
    margin: auto;
    text-align: center;
}
.row_person{
    border: solid;
}

.col_left{
  text-align: left;
}

.font-person{
  font-size: 60px;
}
</style>

