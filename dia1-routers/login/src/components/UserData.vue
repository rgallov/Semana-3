<template>
<div class="container mt-2 b">
    <form class="d-flex text-md-right">        
  <div class="row">
    <div class="col">
      <i class="fas fa-user-tie" style="font-size: 50px;"></i>
    </div>
    <div class="col">
      <div>
    Nombre :
    <input type="text" ref="name" :value="user.name" :disabled="!isEditing"
           :class="{view: !isEditing}">
  </div>
    <div>
    Email:
    <input type="text" ref="email" :value="user.email" :disabled="!isEditing"
           :class="{view: !isEditing}">  
  </div>
    </div>
      <div class="col">
        <button @click.prevent="isEditing = !isEditing" v-if="!isEditing">
    Edit
  </button>
  <button @click.prevent="save" v-else-if="isEditing">
  Save
  </button>
  
  <button v-if="isEditing" @click="isEditing = false">Cancel</button>
        <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
        <!-- <button class="btn btn-outline-success" type="submit" @click.prevent="changePass()">Cambiar password</button>
        <button class="btn btn-outline-success" type="submit" @click.prevent="editarForm()">Editar</button>
        <button class="btn btn-outline-success" type="submit" @click.prevent="editar()">Aceptar Cambios</button>
        <button class="btn btn-outline-success" type="submit" @click.prevent="buscarCodigo()">Buscar por código</button> -->
  
      </div>
  </div>
    
      </form>
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
</style>

