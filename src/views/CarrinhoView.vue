<template>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
 
      <body style="min-width: 372px;">
      <nav class="navbar navbar-expand-lg navbar-dark border-bottom shadow-sm mb-3" style="background-color: #1f94b7;">
        <div class="container">
          <a class="navbar-brand text-dark" href="#"><strong>Light Commerce</strong></a>
  
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="navbar-collapse collapse">
          <ul class="navbar-nav  flex-grow-1">
            <li class="nav-item">
              <a href="#" class="nav-link text-dark ">Principal</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark " href="#">Ofertas do dia</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark " href="#">Contato</a>
            </li>
         </ul>
        </div>

        <div class="align-self-end">
          <ul class="navbar-nav flex-grow-1">
            <li class="nav-item">
              <a href="#" class="nav-link text-dark">Crie sua conta</a>
            </li>
           <li class="nav-item">
             <a href="#" class="nav-link text-dark" >Entrar</a>
           </li>
            <li class="nav-item"> 
              <a href="#" class="nav-link " >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="text-dark" class="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              </a>
           </li>
          </ul>
  
        </div>
        </div>
     </nav>

      <main>
          <div class="container">
            <h1>Carrinho de compras</h1>
            <hr>
            <ul class="list-group mb-3">
               <li class="list-group-item py-3">
                  <div class="row g-3">
                    <div class="col-4 col-md-3 col-lg-2">
                      <a href="#">
                        <img src="../assets/guitarra.jpg" class="img-thumbnail">
                      </a>
                    </div>

                    <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                    <h4><b><a href="#" class="text-decoration-none text-dark">Guitarra Elétrica</a></b></h4>
                    <h4>
                      <small>
                        TG-500 - Metallic Black White
                      </small>
                    </h4>
                  </div>

                  <div class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3
                      offset-lg-0 col-xl-2 align-self-center mt-3">
                      <div class="input-group">
                        <button type="button" class="btn btn-outline-dark btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                        </button>
                         <input type="text" class="form-control text-center border-dark"
                           value="4"
                         >
                         <button type="button" class="btn btn-outline-dark btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
                        </button>
                        <button type="button" class="btn btn-outline-danger border-dark btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
                        </button>

                      </div>
                     
                      <div class="text-right mt-2">
                        <small class="text-secondary">À vista: R$ 1.500,00</small><br>
                        <span class="text-dark">Em até 24x: 66,66 </span>


                      </div>



                  </div>
                  </div>

                 

               </li>

               <li class="list-group-item py-3">
                  <div class="row g-3">
                    <div class="col-4 col-md-3 col-lg-2">
                      <a href="#">
                        <img src="../assets/jaqueta.jpg" class="img-thumbnail">
                      </a>
                    </div>

                    <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                    <h4><b><a href="#" class="text-decoration-none text-dark">Jaqueta Custom Masc</a></b></h4>
                    <h4>
                      <small>
                        Couro Tutto - M
                      </small>
                    </h4>
                  </div>

                  <div class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3
                      offset-lg-0 col-xl-2 align-self-center mt-3">
                      <div class="input-group">
                        <button type="button" class="btn btn-outline-dark btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                        </button>
                         <input type="text" class="form-control text-center border-dark"
                           value="1"
                         >
                         <button type="button" class="btn btn-outline-dark btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
                        </button>
                        <button type="button" class="btn btn-outline-danger border-dark btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
                        </button>

                      </div>
                     
                      <div class="text-right mt-2">
                        <small class="text-secondary">À vista: 2.890,00 R$ </small><br>
                        <span class="text-dark">Em até 24x: 125,00 </span>


                      </div>



                  </div>
                  </div>

                 

               </li>

               <li class="list-group-item py-3">
                  <div class="row g-3">
                    <div class="col-4 col-md-3 col-lg-2">
                      <a href="#">
                        <img src="../assets/allS.png" class="img-thumbnail">
                      </a>
                    </div>

                    <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                    <h4><b><a href="#" class="text-decoration-none text-dark">Chuck Taylor </a></b></h4>
                    <h4>
                      <small>
                        All Star Juvenil Canvas Preto
                      </small>
                    </h4>
                  </div>

                  <div class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3
                      offset-lg-0 col-xl-2 align-self-center mt-3">
                      <div class="input-group">
                        <button type="button" class="btn btn-outline-dark btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                        </button>
                         <input type="text" class="form-control text-center border-dark"
                           value="4"
                         >
                         <button type="button" class="btn btn-outline-dark btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
                        </button>
                        <button type="button" class="btn btn-outline-danger border-dark btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
                        </button>

                      </div>
                     
                      <div class="text-right mt-2">
                        <small class="text-secondary">À vista: R$ 189,00</small><br>
                        <span class="text-dark">Em até 4x: 50,77 </span>


                      </div>



                  </div>
                  </div>

                 

               </li>

               <li class="list-group-item py-3">
                <div class="text-right">
                <h4 class="text-dark mb-3">Valor Total: R$ 4.579,00  </h4>
                <a href="/index.html" class="btn btn-success btn-lg">Continuar Comprando</a>
                <button class="btn btn-danger btn-lg">Fechar Compra</button>
              </div>
               </li>

            </ul>
          </div>

      </main>
    
    </body>

    </template>

<scripts>

</scripts>

<style scoped>

</style>