<script setup>
let router = useRouter();
let route = useRoute();
let slug = route.params.slug;
const { data: post } = await useFetch("https://heytripster.com/wp-json/wp/v2/posts?slug=" + slug + "&_fields=id,title,yoast_head_json.og_image,content,slug", {
  headers: {
    "Content-Type": "application/json"
  }
});
</script>

<template>
  <!-- <p>{{ $route.params.slug }}</p> -->
  <div class="sticky top-0"><button @click="router.back()">← Home page</button></div>

  <div class="max-w-screen-xl mx-auto">
    <main class="mt-10">

      <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style="height: 24em;">
        <div class="absolute left-0 bottom-0 w-full h-full z-10"
          style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
        <img :src="post[0]?.yoast_head_json.og_image[0].url"
          class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <!-- <a href="#"
            class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Nutrition</a> -->
          <h1 class="text-4xl font-semibold text-gray-100 leading-tight">
            {{ post[0]?.title.rendered }}
          </h1>
          <!-- <div class="flex mt-3">
            <img src="https://randomuser.me/api/portraits/men/97.jpg"
              class="h-10 w-10 rounded-full mr-2 object-cover" />
            <div>
              <p class="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
              <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
            </div>
          </div> -->
        </div>
      </div>

      <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p class="pb-6">
          <p><span v-html="post[0]?.content.rendered"></span></p>
        </p>

      </div>
    </main>

  </div>

</template>

<style>
h1, h2, h3, h4, h5, h6, h2 span, h3 span, h4 span, h5 span, h6 span, h2 span span, h3 span span, h4 span span, h5 span span, h6 span span {
  font-weight: bold !important;
}
h2, h3, h4, h5, h6, h2 span, h3 span, h4 span, h5 span, h6 span, h2 span span, h3 span span, h4 span span, h5 span span, h6 span span {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
a {
  color: red;
}
#toc_container {
  padding: 15px;
  margin-top: 20px;
  max-width: 380px;
  border: 1px solid black;
}
p img {
  padding-top: 15px;
}
</style>