import ProductCard from "@/app/components/productCard"

export default function Products({params}) {

    const title = "Cement"

  return (
    <>
    <div className="max-w-screen-xl sm:px-4 px-2 py-6 mx-auto bg-white my-4 rounded">
        <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-semibold text-stone-800">Showing results for '{title}'</div>
                <select class="bg-orange-50 border border-gray-300 text-gray-900 text-sm rounded-lg h-8 block px-2.5">
                    <option disabled className="bg-white">Sort by:</option>
                    <option value="ft" className="bg-white">Featured</option>
                    <option value="plh" className="bg-white">Price: Low to High</option>
                    <option value="phl" className="bg-white">Price: High to Low</option>
                    <option value="na" className="bg-white">Newest Arrivals</option>
                </select>
        </div>
        <div className="grid lg:grid-cols-5 sm-gap-4 gap-2 sm:grid-cols-3 grid-cols-2">
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
        </div>
        <div className="flex justify-center pt-6">
        <button
              type="button"
              className="text-stone-800 border-2 border-stone-800 hover:bg-orange-50 hover:text-stone-950 font-semibold rounded-3xl text-sm sm:px-5 px-2.5 py-2.5 text-center md:block md:w-auto hidden w-0"
            >
              Load More
            </button>
        </div>
      </div>
    </>
  )
}
