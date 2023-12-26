<script setup></script>

<template>
  <header class="relative">
    <!------------------------導覽列------------------------>
    <nav class="w-full fixed top-0 z-10 text-center bg-white shadow">
      <ul class="flex justify-center font-sans font-bold">
        <li class="target">
          <a href="#">top</a>
        </li>
        <li class="target">
          <a href="#about">about me</a>
        </li>
        <li class="target">
          <a href="#project">projects</a>
        </li>
      </ul>
    </nav>
    <!------------------------頭貼&職稱------------------------>
    <section class="bg-[#2B2D42] pt-24 pb-12">
      <div class="w-4/5 mx-auto flex justify-evenly items-center">
        <div class="w-1/6 aspect-[1/1] rounded-full overflow-hidden">
          <img class="object-center" src="./assets/me.jpg" alt="" />
        </div>
        <div>
          <h1 class="font-sans text-white text-center pb-3">
            Hi~我是<span class="text-4xl px-2">顏聖祐</span>👋
          </h1>
          <h2 class="font-caveat text-white text-4xl text-center pb-3">
            Front-end Engineer
          </h2>
          <p class="text-[#8D99AE] text-xl text-center">
            接觸前端技術後相當有興趣
          </p>
          <p class="text-[#8D99AE] text-xl text-center">朝著前端工程師邁進</p>
          <p class="text-[#8D99AE] text-xl text-center">
            透過各種資源學習新的技術，持續學習提升自己
          </p>
        </div>
      </div>
    </section>
    <!------------------------簡歷下載------------------------>
    <!-- <button
      class="absolute right-0 bottom-0 bg-red-600 rounded-sm p-1.5 text-white text-lg"
    >
      <a href="./assets/Resume.pdf" download="resume" target="_blank"
        >Download PDF</a
      >
    </button> -->
  </header>
  <main>
    <!------------------------關於我------------------------>
    <section id="about" class="bg-space bg-cover bg-fixed text-white">
      <div class="w-4/5 mx-auto grid py-8 grid-cols-[1.5fr_1fr]">
        <div>
          <h3 class="font-mono text-2xl font-bold py-4">
            About <span class="text-[rgb(6,237,251)]">Me</span>
          </h3>
          <p class="desc">
            原本在半導體IC測試廠擔任FT輪班工程師職務，廠區的測試機與分類機日以繼夜的測試已封裝的IC電性，工作內容為即時的產品良率處置，尋找線上測試的異常並更換異常的配件，由於IC是與RF射頻相關，每次生產前setup需要用樣品IC對測試機做校正，貨批低於客戶制定的良率需要對該機台run驗證IC，這份工作讓我了解半導體後段的測試流程，遵守生產制定的規則，確保交到客戶的貨批是有品質把關的。
          </p>
          <p class="desc">
            在平常瀏覽ACG的相關資料時，開始好奇這些精緻的官方網頁是如何製作出來的，搜尋得知是web開發的前端領域，在閒暇之時瀏覽該如何入門此領域，先從一些網路初心者教學看起，確定自己不排斥此領域的學習，最後毅然決然參加Tibame前端班培訓。
          </p>
          <p class="desc">
            參加課程後，從基本的前端技術學習手刻切版，並為網頁添加JS互動，學習前端領域node.js的npm會使用到的套件，以及Git版本控制的GUI操作，團體專題使用VueJS框架來與後端資料的串接溝通，在製作團專的過程與組員一起制定規格與需求分析，理解介面呈現時的使用動線是否合乎使用者的體驗，如同在業界由需求方提出想要什麼功能，PM去分析、收斂、歸納成事件流程圖以及使用者流程圖，使工程師知道整個需求大綱是為了解決什麼問題，為達到功能性需求的目標，檢視API與使用者流程後，思考如何解決問題的過程。
          </p>
          <hr class="my-8 bg-[#8D99AE]" />
          <h3 class="font-mono pb-2 text-2xl font-bold text-[rgb(6,237,251)]">
            KEY TECHNOLOGIES
          </h3>
          <strong class="font-mono text-xl text-white">
            HTML、CSS(SCSS)、JavaScript、VueJS、TailWindCSS
          </strong>
        </div>
        <div>
          <img class="animate-down" src="./assets/header-img.svg" alt="" />
        </div>
      </div>
    </section>
    <!------------------------作品集------------------------>
    <section id="project" class="bg-[rgb(32,35,47)]">
      <div class="w-4/5 mx-auto py-10">
        <h3 class="font-mono text-white text-center text-3xl font-bold pb-6">
          My <span class="text-[rgb(6,237,251)]">Project</span>
        </h3>
        <div class="flex justify-evenly">
          <div
            class="relative group/item w-1/3 bg-white flex rounded-lg border-[6px] border-transparent hover:border-[rgb(6,237,251)] duration-300 overflow-hidden"
          >
            <img
              class="m-auto py-8 group-hover/item:scale-[1.15] duration-300"
              src="./assets/roaming.png"
              alt=""
            />
            <div
              class="absolute w-full h-full text-white bg-black/70 translate-y-full opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100"
            >
              <div class="flex flex-col justify-center items-center">
                <h3 class="text-2xl bold mt-3">團體作品</h3>
                <h3 class="text-2xl bold m-1">Roaming Orbit</h3>
                <ul class="grid text-xl grid-cols-2 gap-1.5">
                  <li>👍 HTML</li>
                  <li>👍 SCSS</li>
                  <li>👍 VueJS</li>
                  <li>👍 CLI</li>
                  <li>👍 Axios</li>
                </ul>
                <a
                  href="https://tibamef2e.com/chd102/g1/online-booking"
                  class="flex w-9 aspect-[1/1] bg-white rounded-full mt-1"
                  target="_blank"
                  ><img
                    class="block m-auto"
                    src="./assets/external-link.png"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
          <div
            class="relative group/item w-1/3 bg-white flex rounded-lg border-[6px] border-transparent hover:border-[rgb(6,237,251)] duration-300 overflow-hidden"
          >
            <img
              class="m-auto py-8 group-hover/item:scale-[1.15] duration-300"
              src="./assets/toy.png"
              alt=""
            />
            <div
              class="absolute w-full h-full text-white bg-black/70 translate-y-full opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100"
            >
              <div class="flex flex-col justify-center items-center">
                <h3 class="text-2xl bold mt-3">個人作品</h3>
                <h3 class="text-2xl bold m-1">Fun Toy</h3>
                <ul class="text-xl mb-1">
                  <li>👍 HTML</li>
                  <li>👍 SCSS</li>
                  <li>👍 JavaScript</li>
                </ul>
                <a
                  href="https://calvindiaz.github.io/CHD_102_27/index.html"
                  class="flex w-9 aspect-[1/1] bg-white rounded-full mt-1"
                  target="_blank"
                  ><img
                    class="block m-auto"
                    src="./assets/external-link.png"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-[#2B2D42]">
    <div class="w-4/5 py-6 mx-auto flex justify-center">
      <h3 class="font-caveat text-center text-4xl text-[#8D99AE] mr-4">
        Let's keep in touch!
      </h3>
      <div class="flex w-10 aspect-[1/1] bg-white rounded-full">
        <a href="mailto:ga2023135619@gmail.com" class="block m-auto"
          ><img src="./assets/gmail.png" alt=""
        /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
