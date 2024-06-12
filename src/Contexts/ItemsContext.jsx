import { createContext, useState } from "react"


export const Itemcontext=createContext()

export const ItemsProvider = (props) => {

   const [items,setitems]= useState([

            {
                id: 1,
                title: "iPhone 9",
                description: "An apple mobile which is nothing like apple",
                price: 549,
                oprice: 549,
                discountPercentage: 12.96,
                rating: 4.69,
                stock: 94,
                brand: "Apple",
                category: "smartphones",
                thumbnail: "https://images.macrumors.com/t/e0o2RzHJ5cPlD4FgyKQ5jCdSGko=/1600x/article-new/2016/05/iphone8gold.jpg",
                images: [
                    "https://i.dummyjson.com/data/products/1/1.jpg",
                    "https://i.dummyjson.com/data/products/1/2.jpg",
                    "https://i.dummyjson.com/data/products/1/3.jpg",
                    "https://i.dummyjson.com/data/products/1/4.jpg",
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
            },
            {
                id: 2,
                title: "iPhone X",
                description: "An apple mobile which is nothing like apple",
                price: 899,
                oprice: 899,
                discountPercentage: 17.94,
                rating: 4.44,
                stock: 34,
                brand: "Apple",
                category: "smartphones",
                thumbnail: "https://blisk.io/img/devicesInBlisk/preview/phones/iphone-x.png",
                images: [
                    "https://i.dummyjson.com/data/products/2/1.jpg",
                    "https://i.dummyjson.com/data/products/2/2.jpg",
                    "https://i.dummyjson.com/data/products/2/3.jpg",
                    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                ]
            },
            {
                id: 3,
                title: "Samsung Universe 9",
                description: "Samsung's new variant which goes beyond Galaxy to the Universe",
                price: 1249,
                oprice: 1249,
                discountPercentage: 15.46,
                rating: 4.09,
                stock: 36,
                brand: "Samsung",
                category: "smartphones",
                thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgGGgn8eugptPl1dOcXDMrYoJ4CkAnC6YDw&s",
                images: [
                    "https://i.dummyjson.com/data/products/3/1.jpg"
                ]
            },
            {
                id: 4,
                title: "OPPOF19",
                description: "OPPO F19 is officially announced on April 2021.",
                price: 280,
                oprice: 280,
                discountPercentage: 17.91,
                rating: 4.3,
                stock: 123,
                brand: "OPPO",
                category: "smartphones",
                thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNO9ZbEBr_IaqgoelFK7lGDBpjelFPy2VuQ&s",
                images: [
                    "https://i.dummyjson.com/data/products/4/1.jpg",
                    "https://i.dummyjson.com/data/products/4/2.jpg",
                    "https://i.dummyjson.com/data/products/4/3.jpg",
                    "https://i.dummyjson.com/data/products/4/4.jpg",
                    "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
                ]
            },
            {
                id: 5,
                title: "Huawei P30",
                description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                price: 499,
                oprice: 499,
                discountPercentage: 10.58,
                rating: 4.09,
                stock: 32,
                brand: "Huawei",
                category: "smartphones",
                thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5WrrWVppkca4TUe6OG8ED6-ueux_-qvQ_A&s",
                images: [
                    "https://i.dummyjson.com/data/products/5/1.jpg",
                    "https://i.dummyjson.com/data/products/5/2.jpg",
                    "https://i.dummyjson.com/data/products/5/3.jpg"
                ]
            }
        
   ])
  return (
    <Itemcontext.Provider value={[items,setitems]}>
        {props.children}
    </Itemcontext.Provider>
  )
}

