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
            <a href="#" class="nav-link text-dark " >Principal</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark " href="#">Politica de privacidade</a>
          </li>
       </ul>
      </div>

      <div class="align-self-end">
        <ul class="navbar-nav flex-grow-1">
          <li class="nav-item">
            <a href="http://localhost:8080/cadastroUsuario" class="nav-link text-dark">Quero me cadastrar</a>
          </li>
         <li class="nav-item">
           <a href="http://localhost:8080/login" class="nav-link text-dark" >Entrar</a>
         </li>
          <li class="nav-item"> 
            <a href="http://localhost:8080/carrinho" class="nav-link " >
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
      <div class="row">
        <div class="col-12 col-md-5">

          <form class="justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div class="input-group input-group-sm">
                <input type="text" class="form-control" placeholder="Digite aqui o que procura">
                <button class="btn btn-dark">
                  Buscar
                </button>
            </div>
           </form>
           
        </div> 

        <div class="col-12 col-md-7">
            <div class="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                <form class="d-inline-block">
                    <select class="custom-select custom-select-sm">
                        <option>Ordenar pelo nome</option>
                        <option>Ordenar pelo menor preço</option>
                        <option>Ordenar pelo maior preço</option>
                    </select>
                  </form>
               
                <!--<nav class="d-inline-block">

                  <ul class="pagination pagination-sm my-0 mt-0">
                    <li class="page-item">
                       <button class="page-link">1</button>
                    </li>
                    <li class="page-item">
                       <button class="page-link">2</button>
                    </li>
                    <li class="page-item disabled">
                       <button class="page-link ">3</button>
                    </li>
                    <li class="page-item">
                       <button class="page-link">4</button>
                    </li>
                    <li class="page-item">
                       <button class="page-link">5</button>
                    </li>
                    <li class="page-item">
                       <button class="page-link">6</button>
                    </li>
                  </ul>
               
                </nav>-->
              </div>
            
       
          </div>
      </div>
      <hr class="mt-3">
        <div class="row">
          <div class="col xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div class="card text-center bg-light">
              <a href="" class="position-absolute right-0 p-2 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
             </a>
              <img src="../assets/guitarra.jpg" class="card-img-top">
              <div class="card-header">
                R$ 1.500
              </div>

              <div class="card-body">
                <H5 class="card-title">Guitarra Elétrica</H5>
                <p class="card-text">
                  TG-500 - Metallic Black White
                </p>
              </div>

              <div class="card-footer">
                  <form class="d-block">
                    <button class="btn btn-dark">
                      Adiocionar ao carrinho
                    </button>
                  </form>
                  <small class="text-success">100 em estoque</small>
              </div>

            </div>

          </div>
          <div class="col xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div class="card text-center bg-light">
              <a href="" class="position-absolute right-0 p-2 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
             </a>
              <img src="../assets/brba.png" class="card-img-top">
              <div class="card-header">
                R$ 2.000
              </div>

              <div class="card-body">
                <H5 class="card-title">Camiseta Masc Br Ba</H5>
                <p class="card-text">
                  Cor: preta, Tam: único
                </p>
              </div>

              <div class="card-footer">
                  <form class="d-block">
                    <button class="btn btn-dark">
                      Adiocionar ao carrinho
                    </button>
                  </form>
                  <small class="text-success">sem estoque</small>
              </div>

            </div>

          </div>
          <div class="col xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div class="card text-center bg-light">
              <a href="" class="position-absolute right-0 p-2 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
             </a>
              <img src="../assets/allS.png" class="card-img-top">
              <div class="card-header">
                R$ 299,99
              </div>

              <div class="card-body">
                <H5 class="card-title">All STAR Chuck Taylor</H5>
                <p class="card-text">
                  All Star Chuck Taylor preto com listra vermelha
                </p>
              </div>

              <div class="card-footer">
                  <form class="d-block">
                    <button class="btn btn-dark">
                      Adiocionar ao carrinho
                    </button>
                  </form>
                  <small class="text-success">2 em estoque</small>
              </div>

            </div>

          </div>
          <div class="col xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div class="card text-center bg-light">
              <a href="" class="position-absolute right-0 p-2 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
             </a>
              <img src="../assets/Guns.png" class="card-img-top">
              <div class="card-header">
                R$ 50,59
              </div>

              <div class="card-body">
                <H5 class="card-title">Camiseta Feminina Guns</H5>
                <p class="card-text">
                  Camiseta Guns
                </p>
              </div>

              <div class="card-footer">
                  <form class="d-block">
                    <button class="btn btn-dark">
                      Adiocionar ao carrinho
                    </button>
                  </form>
                  <small class="text-success">5 em estoque</small>
              </div>

            </div>

          </div>
          <div class="col xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div class="card text-center bg-light">
              <a href="" class="position-absolute right-0 p-2 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
             </a>
              <img src="../assets/placa.png" class="card-img-top">
              <div class="card-header">
                R$ 30,00
              </div>

              <div class="card-body">
                <H5 class="card-title">Placa decorativa Rock</H5>
                <p class="card-text">
                  Placas decorativas tema rock -------- PROMOÇÃO --------
                  Leve 6 pague 5 
                </p>
              </div>

              <div class="card-footer">
                  <form class="d-block">
                    <button class="btn btn-dark">
                      Adiocionar ao carrinho
                    </button>
                  </form>
                  <small class="text-success">1 em estoque</small>
              </div>

            </div>

          </div>
          <div class="col xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div class="card text-center bg-light">
              <a href="" class="position-absolute right-0 p-2 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
             </a>
              <img src="../assets/GUIDAO.jpg" class="card-img-top">
              <div class="card-header">
                R$ 1.685,60
              </div>

              <div class="card-body">
                <H5 class="card-title">Guidão Ape Hanger - Harley Davidson</H5>
                <p class="card-text">
                 Sportster - Wings Custom - Inox Polido
                </p>
              </div>

              <div class="card-footer">
                  <form class="d-block">
                    <button class="btn btn-dark">
                      Adiocionar ao carrinho
                    </button>
                  </form>
                  <small class="text-success">10 em estoque</small>
              </div>

            </div>

          </div>
          <div class="col xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div class="card text-center bg-light">
              <a href="" class="position-absolute right-0 p-2 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
             </a>
              <img src="../assets/chefe.png" class="card-img-top">
              <div class="card-header">
                R$ 40,00
              </div>

              <div class="card-body">
                <H5 class="card-title">Xícara CHEFE</H5>
                <p class="card-text">
                  Xícara melhor chefe do mundo
                </p>
              </div>

              <div class="card-footer">
                  <form class="d-block">
                    <button class="btn btn-dark">
                      Adiocionar ao carrinho
                    </button>
                  </form>
                  <small class="text-success">10 em estoque</small>
              </div>

            </div>

          </div>
          <div class="col xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div class="card text-center bg-light">
              <a href="" class="position-absolute right-0 p-2 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
             </a>
              <img src="../assets/pinguinJoe.png" class="card-img-top">
              <div class="card-header">
                R$ 150,59
              </div>

              <div class="card-body">
                <H5 class="card-title">Pinguin Joe</H5>
                <p class="card-text">
                  Somente para fãs de friends
                </p>
              </div>

              <div class="card-footer">
                  <form class="d-block">
                    <button class="btn btn-dark">
                      Adiocionar ao carrinho
                    </button>
                  </form>
                  <small class="text-success">5 em estoque</small>
              </div>

            </div>

          </div>
          <div class="col xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div class="card text-center bg-light">
              <a href="" class="position-absolute right-0 p-2 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
             </a>
              <img src="../assets/guarda.jpg" class="card-img-top">
              <div class="card-header">
                R$ 12,95
              </div>

              <div class="card-body">
                <H5 class="card-title">Guarda chuva da mãe</H5>
                <p class="card-text">
                  How I met your mother
                </p>
              </div>

              <div class="card-footer">
                  <form class="d-block">
                    <button class="btn btn-dark">
                      Adiocionar ao carrinho
                    </button>
                  </form>
                  <small class="text-success">1 em estoque</small>
              </div>

            </div>

          </div>
          <div class="col xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div class="card text-center bg-light">
              <a href="" class="position-absolute right-0 p-2 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
             </a>
              <img src="../assets/feijao.jpg" class="card-img-top">
              <div class="card-header">
                R$ 70,00
              </div>

              <div class="card-body">
                <H5 class="card-title">Feijões mágicos HP</H5>
                <p class="card-text">
                  "N" sabores 
                </p>
              </div>

              <div class="card-footer">
                  <form class="d-block">
                    <button class="btn btn-dark">
                      Adiocionar ao carrinho
                    </button>
                  </form>
                  <small class="text-success">50 em estoque</small>
              </div>

            </div>

          </div>
          <div class="col xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div class="card text-center bg-light">
              <a href="" class="position-absolute right-0 p-2 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
             </a>
              <img src="../assets/delta.png" class="card-img-top">
              <div class="card-header">
                R$ 25,00 
              </div>

              <div class="card-body">
                <H5 class="card-title">Cápsulas de café</H5>
                <p class="card-text">
                  Delta Q - vários sabores - 10 uni
                </p>
              </div>

              <div class="card-footer">
                  <form class="d-block">
                    <button class="btn btn-dark">
                      Adiocionar ao carrinho
                    </button>
                  </form>
                  <small class="text-success">50 em estoque</small>
              </div>

            </div>

          </div>
          <div class="col xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">
            <div class="card text-center bg-light">
              <a href="" class="position-absolute right-0 p-2 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
             </a>
              <img src="../assets/jaqueta.jpg" class="card-img-top">
              <div class="card-header">
                R$ 589,00
              </div>

              <div class="card-body">
                <H5 class="card-title">Jaqueta Magnólia</H5>
                <p class="card-text">
                 Jaqueta Couro Magnolia de Campos
                </p>
              </div>

              <div class="card-footer">
                  <form class="d-block">
                    <button class="btn btn-dark">
                      Adiocionar ao carrinho
                    </button>
                  </form>
                  <small class="text-success">5 em estoque</small>
              </div>

            </div>

          </div>
          
        </div>
    </div>  
 

  </main>



</body>
</template> 
