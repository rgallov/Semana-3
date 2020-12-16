<template>
  <div class="text-center container" >
    <form class="form-signin col-6 col-md-4">      
        <img
          class="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <input
          v-model="login.email"
          type="email"
          class="form-control mb-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email address"
        />
        <input
          v-model="login.password"
          type="password"
          class="form-control mb-2"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      <button type="submit" class="btn btn-primary form-control" @click.prevent="loginUser">
        Sign in
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
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
