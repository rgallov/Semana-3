<template>
  <div class="text-center">
    <form class="form-signin">
      
        <img
          class="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="login.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          v-model="login.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      <button type="submit" class="btn btn-primary" @click.prevent="loginUser">
        Submit
      </button>
    </form>
<!-- 
    <pre>
      {{ login }}
    </pre> -->
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: "LogIn",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        //  let response = await this.$http.post("/api/usuario/login", this.login);
        let response = await this.$http.post("/api/auth/signin", this.login);
        //  let token = response.data.tokenReturn;
        let token = response.data.accessToken;
        let user = response.data.user;
        console.log(user);
        if (token) {
          localStorage.setItem("jwt", token);
          localStorage.setItem("user", JSON.stringify(user));
          swal('Ingreso Exitoso!','','success');
          this.$router.push("/home");
        } else {
          console.log("Error Token");
        }
        
      } catch (err){
        let status = err.response.status;
        if(status === 404){
          swal('Ooopssss!','Usuario no encontrado', "error");  
        }else if(status === 401){
          swal('Ooopssss!','Contraseña inválida!', "error");
        }else{
          swal('Ooopssss!','Something went wrong!', "error");
        }
        // console.log(err.response);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
