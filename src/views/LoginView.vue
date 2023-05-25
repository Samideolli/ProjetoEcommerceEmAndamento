
<template>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  
  <body>
     <div class="container">

      <div class="form-image">
        <img src="../assets/lampada.jpg" alt="Imagem usada para representar a ideia de se cadastrar" width="200" height="200" >
        
        <h2>Ainda não possui conta?<br>Cadastre-se.</h2>
        <button type="submit" class="b">Cadastrar</button>
      </div>
    
      <div class="form">
        <form>
           <div class="form-header">
              <h1>Faça seu login</h1>
           </div>

         <div class="input-group">
           <div class="input-box">
             <label for="exampleInputEmail1">E-mail:</label>
             <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" >
             <label for="exampleInputPassword1">Senha:</label>
             <input type="password" class="form-control" id="exampleInputPassword1">
             <button type="submit" class="button">Entrar</button><br>
             <button type="button" class="bt">Esqueci minha senha</button>
            </div>
         </div> 
      
         </form>

     </div>
     </div>

   </body>

</template>


<scripts>



</scripts>


<style scoped>

*{
   padding:0;
   margin:0;
   box-sizing:border-box;
}

body{
   width:100%;
   height:100vh;
   display:flex;
   justify-content: center;
   align-items: center;
   background:white;
}

.container{
   width:80%;
   height:80vh;
   display:flex;
   box-shadow: 5px 5px 10px rgba(0,0,0, .212);
   margin-top: 5%;
}

.form-image{
   width:50%;
   display:space-around;
   justify-content: center;
   align-items:center;
   background: #1f94b7;
   padding:1rem;
   color:black;
}

.b{
   background: white;
   color:black;
   width:40%;
   margin-top: 12%;
   border:none;
   text-transform: uppercase;
   border-radius:10px 10px;
   cursor:pointer;
}

h2{
   margin-top: 10%;
}

img{
   border-radius: 60%;
   margin-top: 10%;
}

.form{
   width: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   background: white;
   padding:3rem;
}

.form-header{
   margin-bottom: 3rem;
   display:flex;
   justify-content: center;
} 

button{
   background: #1f94b7;
   width:70%;
   height:3vh;
   margin-top: 40px;
   justify-content: center;
   align-items: center;
   font-weight: bolder;
   cursor:pointer;
   color:black;
   border-color:black;
   border-width: 0px;
   text-transform: uppercase;
   border-radius:10px 10px;
}


.input-group{
   justify-content: center;
   align-items: center;
   
}

label{
   margin-right: 80%;  
   font-size:x-small;
   font-weight: bolder;
   color:black;
   text-transform: uppercase;
}

input{
   border-color:black;
   color:#dcdcdc;
  
}

.bt{
  background: transparent;
  border:none;
  font-weight: lighter;
  font-size: 11px;
  border-color:transparent;
  border-width: 0px;
  cursor:pointer;
}



</style>