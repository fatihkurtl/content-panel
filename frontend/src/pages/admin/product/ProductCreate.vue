<script setup lang="ts">
import { ref, reactive } from 'vue'
import MainLayout from '@/layouts/admin/MainLayout.vue'
import type { ProductCreate, ImagePreview } from '@/interfaces/product'

const productData = reactive<ProductCreate>({
    name: null,
    brand: null,
    price: null,
    category: '',
    weight: null,
    stock: 0,
    color: '',
    images: [],
    description: null,
})

const imagesPreviewList = ref<ImagePreview[]>([])

// TODO: kategoriler simdilik static ancak backend'den gelmeli
const selectCategory = (event: Event): void => {
    const target = event.target as HTMLSelectElement
    productData.category = target.value
}

// TODO: renkler simdilik static ancak backend'den gelmeli
const selectColor = (event: Event): void => {
    const target = event.target as HTMLSelectElement
    productData.color = target.value
}

const increaseStock = (): void => {
    productData.stock++
}

const decreaseStock = (): void => {
    // TODO: alert yerine tailwind ile bir uyari eklenecek
    productData.stock === 0 ? alert("Stok miktarı 0'dan küçük olamaz!") : productData.stock--
}

const handleProductFiles = (event: Event): void => {
    event.preventDefault()
    const files = (event.target as HTMLInputElement)?.files || (event as any).dataTransfer?.files
    if (files && productData.images.length < 5) {
        const fileList = Array.from(files) as File[]
        productData.images.push(...fileList)
        for (const file of fileList) {
            const reader = new FileReader()
            reader.onload = (e) => {
                imagesPreviewList.value.push({ url: e.target?.result as string, name: file.name })
            };
            reader.readAsDataURL(file)
        }
    } else {
        alert("En fazla 5 ürün fotoğrafı yüklenebilir!");
    }
    // console.log(productData.images)
    // console.log(imagesPreviewList.value)
};


const removeImage = (index: number): void => {
    productData.images.splice(index, 1)
    imagesPreviewList.value.splice(index, 1)
}


</script>

<template>
    <MainLayout>
        <section
            class="bg-mainBgColor dark:bg-gray-900 rounded-lg border md:pl-70 mx-4 shadow-md sm:rounded-lg overflow-hidden">
            <div class="bg-white rounded-lg dark:bg-gray-800 md:pl-70 shadow-md sm:rounded-lg overflow-hidden">
                <div class="py-8 px-4 mx-auto lg:py-6"> <!-- max-w-2xl lg:py-16 -->
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Yeni bir ürün ekle</h2>
                    <form>
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div class="sm:col-span-1"> <!-- sm:col-span-2 -->
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ürün
                                    Adı</label>
                                <input v-model="productData.name" type="text" name="name" id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Ürün adını yazın" required>
                            </div>
                            <div class="w-full">
                                <label for="brand"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marka</label>
                                <input v-model="productData.brand" type="text" name="brand" id="brand"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Ürün markası" required>
                            </div>
                            <div class="w-full">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fiyat</label>
                                <input v-model="productData.price" type="number" name="price" id="price"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="₺2999" required>
                            </div>
                            <div>
                                <label for="category"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori</label>
                                <select @change="selectCategory" id="category"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected value="">Kategori seçiniz</option>
                                    <option value="TV">TV/Monitörler</option>
                                    <option value="PC">PC</option>
                                    <option value="GA">Oyun/Konsol</option>
                                    <option value="PH">Telefonlar</option>
                                </select>
                            </div>
                            <div>
                                <label for="item-weight"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ürün Ağırlığı
                                    (kg)</label>
                                <input v-model="productData.weight" type="number" name="item-weight" id="item-weight"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="12" required>
                            </div>
                            <!-- TODO: Konumu Duzeltilecek Stock -->
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 items-center">
                                <div>
                                    <label for="color"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Renk</label>
                                    <select @change="selectColor" id="category"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected value="">Renk seçiniz</option>
                                        <option value="black">Siyah</option>
                                        <option value="white">Beyaz</option>
                                        <option value="blue">Mavi</option>
                                        <option value="red">Kırmızı</option>
                                    </select>
                                </div>
                                <div class="lg:ml-6 md:ml-6 sm:ml-0">
                                    <label for="quantity-input"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stok</label>
                                    <div class="relative flex items-center max-w-[10rem]">
                                        <button @click="decreaseStock" type="button" id="decrement-button"
                                            data-input-counter-decrement="quantity-input"
                                            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <input v-model="productData.stock" type="text" id="quantity-input"
                                            data-input-counter aria-describedby="helper-text-explanation"
                                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="999" required>
                                        <button @click="increaseStock" type="button" id="increment-button"
                                            data-input-counter-increment="quantity-input"
                                            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                            <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>                                
                            </div>
                            <!-- Color -->
                            <!-- TODO: Konumu Duzeltilecek Stock -->
                            <!-- <div>
                                <label for="quantity-input"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stok</label>
                                <div class="relative flex items-center max-w-[10rem]">
                                    <button @click="decreaseStock" type="button" id="decrement-button"
                                        data-input-counter-decrement="quantity-input"
                                        class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <input v-model="productData.stock" type="text" id="quantity-input" data-input-counter
                                        aria-describedby="helper-text-explanation"
                                        class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="999" required>
                                    <button @click="increaseStock" type="button" id="increment-button"
                                        data-input-counter-increment="quantity-input"
                                        class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div> -->
                            <!-- Stock -->
                            <!-- TODO: Color konumu duzeltilecek ve renkler dinamiklestirilecek -->
                            <!-- <div>
                                <label for="color"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Renk</label>
                                <select @change="selectColor" id="category"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected value="">Renk seçiniz</option>
                                    <option value="black">Siyah</option>
                                    <option value="white">Beyaz</option>
                                    <option value="blue">Mavi</option>
                                    <option value="red">Kırmızı</option>
                                </select>
                            </div> -->
                            <!-- Color -->
                            <div class="sm:col-span-2">
                                <label for="description"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Açıklama</label>
                                <textarea v-model="productData.description" id="description" rows="8"
                                    class="block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Ürün açıklaması burada"></textarea>
                            </div>
                            <!-- Product File/Images -->
                            <div class="sm:col-span-2" @dragover.prevent @dragenter.prevent
                                @drop="handleProductFiles($event)">
                                <label for="description"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Ürün Görselleri
                                </label>
                                <label for="dropzone-file"
                                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                class="font-semibold">Yüklemek için tıklayın</span> veya sürükleyip bırakın
                                        </p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG (MAX. 800x400px)
                                        </p>
                                    </div>
                                    <input @change="handleProductFiles($event)" multiple accept="image/*" id="dropzone-file"
                                        type="file" class="hidden" />
                                </label>
                            </div>
                            <!-- Product File/Images -->
                            <!-- Images Preview -->
                            <!-- TODO: burasi carousel seklinde yapilabilir fotograf yuklendikce carousel'e eklenecek sekilde -->
                            <section v-if="productData.images.length" class="bg-white dark:bg-gray-900">
                                <div class="text-center">
                                    <div class="grid gap-12 lg:gap-28 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                        <div v-for="(image, index) in imagesPreviewList" :key="index"
                                            class="text-center text-gray-500 dark:text-gray-400 items-center relative">
                                            <div class="relative w-24 h-24 mx-auto">
                                                <img class="max-w-xs w-full h-full" :src="image?.url" alt="product images">
                                                <button @click.stop="removeImage(index)"
                                                    class="z-10 absolute top-0 right-0 transform translate-x-2/4 -translate-y-2/4 bg-red-200 text-red-800 text-xs font-medium px-1 py-0.5 rounded-full hover:bg-red-300 dark:bg-red-900 dark:text-red-300">
                                                    <span class="material-symbols-outlined text-xs">
                                                        close
                                                    </span>
                                                </button>
                                            </div>
                                            <p class="text-xs">{{ image.name }}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <!-- Images Preview -->
                        </div>
                        <button type="submit"
                            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Ürün ekle
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </MainLayout>
</template>

<style scoped></style>