<template>
  <Header></Header>
  <div
    class="container flex justify-center items-center flex-col min-w-[100%] bg-[#F5F5F5] dark:bg-[#1e1e20]"
  >
    <div class="grid grid-cols-3 sm:grid-cols-6 bg-[#F5F5F5] dark:bg-[#1e1e20]">
      <NuxtLink
        class="flex w-[80px] h-[40px] bg-indigo-300 m-4 rounded-full p-2 justify-center"
        to="/"
        >頭條</NuxtLink
      >
      <NuxtLink
        class="flex w-[80px] h-[40px] bg-indigo-300 m-4 rounded-full p-2 justify-center"
        to="/ContentA"
        >政治</NuxtLink
      >
      <NuxtLink
        class="flex w-[80px] h-[40px] bg-indigo-300 m-4 rounded-full p-2 justify-center"
        to="/ContentB"
        >科技</NuxtLink
      >
      <NuxtLink
        class="flex w-[80px] h-[40px] bg-indigo-300 m-4 rounded-full p-2 justify-center"
        to="/ContentC"
        >商業</NuxtLink
      >
      <NuxtLink
        class="flex w-[80px] h-[40px] bg-indigo-300 m-4 rounded-full p-2 justify-center"
        to="/ContentD"
        >娛樂</NuxtLink
      >
      <NuxtLink
        class="flex w-[80px] h-[40px] bg-indigo-300 m-4 rounded-full p-2 justify-center"
        to="/ContentE"
        >運動</NuxtLink
      >
    </div>
    <NuxtPage class="bg-[#F5F5F5] dark:bg-[#1e1e20]" />
  </div>
</template>

<script setup></script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1px);
}

* {
  color: #1e1e20;
}
</style>
