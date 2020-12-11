<template>
<div class="container">
    
<p><span>Nombre: </span> {{user.name}}</p>
<p><span>Email: </span> {{user.email}}</p>
<p><span>Password: </span> {{user.password}}</p>
<p><span>Id: </span> {{user.id}}</p>
<p><span>Creado: </span> {{user.createdAt}}</p>
<p><span>Actualizado: </span> {{user.updatedAt}}</p>
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
      }
  },
  created(){
      this.getUserDetails()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
</style>
