<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
   
   <body>
      <div class="container">
 
       <div class="form-image">
         <img src="../assets/palmas.jpg" alt="Imagem usada para representar a ideia de se cadastrar" width="200" height="190" >
        <br><br>
         <h1>Bem vindo!</h1>
        
         <h3>Acesse sua conta agora mesmo</h3><br><br>
         <button type="button" class="bt">Entrar</button>

       </div>
     
       <div class="form">
         <form>
            <div class="form-header">
               <h1>Crie sua conta</h1>
            </div>
 
          <div class="input-group">
            <div class="input-box">
              <label for="InputNome">Nome:</label>
              <input type="name" class="form-control " id="InputNomeCad"  >
              <label for="InputCPFCad">CPF:</label>
              <input type="password" class="form-control" id="InputCPFCad">
              <label for="InputEmailCad">E-mail:</label>
              <input type="email" class="form-control " id="InputEmailCad" aria-describedby="emailHelp" >
              <label for="exampleInputPasswordCad">Senha:</label>
              <input type="password" class="form-control" id="exampleInputPasswordCad">
              <label for="InputPasswordConfirmCad">Confirmar senha:</label>
              <input type="password" class="form-control" id="exampleInputPasswordConfirmCad">
              
              <button type="button" class="button">Salvar</button>
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
   background: white;
 }
 
 .container{
    width:80%;
    height:80vh;
    display:flex;
    margin-top: 5%;
    box-shadow: 5px 5px 10px rgba(0,0,0, .212);
 }
 
 .form-image{
    width:50%;
  
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
    margin-top: 5%;
    border:none;
    text-transform: uppercase;
    border-radius:10px 10px;
    cursor:pointer;
    font-size: small;
 }
 
img{
    border-radius: 70%;
    margin-top:15% ;
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
    font-size: small;
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
 

h3{
   font-size:medium;
   margin-top: 0%;
   font-weight:bolder;
}
 
 .bt{
   background: white;
   border:none;
   width:30%;
   font-weight: bolder;
   font-size: 15px;
   border-color:transparent;
   border-width: 0px;
   cursor:pointer;
   text-transform: uppercase;
   font-size: small;
 }

 
 </style> 