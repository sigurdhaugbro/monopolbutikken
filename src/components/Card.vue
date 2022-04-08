<template>
   <div class="card">
      <div class="card__border">
         <h1 class="card__header">Kirkeveien</h1>
         <h2 class="card__rent">leie 32kr</h2>
         <ul class="card__list">
            <li class="list__element">Med 1 hus</li>
            <li class="list__element">Med 2 hus 145kr</li>
            <li class="list__element">Med 3 hus 1450kr</li>
            <li class="list__element">Med 4 hus 1905kr</li>
            <li class="list__element">Med Hotel 245kr</li>
         </ul>
         <div>Innkjøpspris 145kr</div>
         <div class="card__amount">
            <input class="amount__input" type="number" placeholder="Amount">
         </div>
         <button>Kjøp</button>
      </div>
   </div>

</template>

<style> 

   .card {
      border: solid 2px;
      width: 306px;
      height: 459px;
      padding: 13px;
      display: grid;
      justify-content: center;
   }

   .card__border {
      border: solid 2px;
      width: 272px;
      height: 425px;
      display: grid;
      justify-content: center;
   }

   .card__header, .card__rent {
      font-weight: 100;
   } 

   .card__header {
      border: solid 2px;
      text-align: center;
      padding-top: 15px;
      width: 210px;
      height: 80px;
      margin-top: 13px;
      background: #E39F38;
   }

   .card__rent {
      font-size: 1.3em;
      text-align: center;
   }

   .list__element {
      list-style: none;
   }

   .card__amount {
      width: 100px;
      height: 25px;
      text-align: center;
   }

</style>