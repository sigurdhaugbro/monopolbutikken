<template>
   <header class="header">
      <RouterLink class="header__logo" :to="{ name: 'home' }"></RouterLink>
      <section class="header__links">
         <RouterLink class="header__link" :to="{ name: 'home' }">Home</RouterLink>
         <RouterLink class="header__link" :to="{ name: 'store' }">Store</RouterLink>
         <RouterLink class="header__link" :to="{ name: 'about' }">About</RouterLink>
         <!-- <button class="header__link" @click="visible ^= true">cart</button> -->
      </section>
   </header>
</template>

<style scoped>
   .header {
      position: relative;
      background: var(--primary-color);
      height: 70px;
      display: flex;
      padding: 2%
   }

   .header__links {
      display: flex;
      justify-content: space-between;
      padding: 5%;
      width: 100%;
   }

   .header__link {
      color: black;
      text-decoration: none;
   }

   .header__cart-button {
      height: fit-content;
   }

   .header__logo {
      border: solid black;
      width: 50px;
      height: 50px;
   }

   @media screen and (min-width: 1000px) {
      .header {
         position: relative;
         height: 90px;
         display: flex;
         justify-content: space-between;

      }
      .header__links {
         display: flex;
         justify-content: space-between;
         padding: 20px;
         width: 80%;
         height: 10%;
         font-size: 30px;
      }
   }
</style>