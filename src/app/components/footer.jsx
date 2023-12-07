import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <>
    
<footer className="bg-stone-800">
    <div className="max-w-screen-xl mx-auto px-2 sm:py-8 py-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 sm:mr-24">
              <Link href="/">
              <Image
              className="w-32 md:w-full"
              src="/logo-light.png"
              height={50}
              width={170}
            />
              </Link>
          </div>
          <div className="grid grid-cols-3 grow">
              <div>
                  <h2 className="mb-6 text-xs font-semibold text-gray-300 uppercase">ABOUT</h2>
                  <ul className="text-gray-300 text-xs">
                      <li className="mb-4">
                          <Link href="https://flowbite.com/" className="hover:underline hover:text-gray-200">Contact Us</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="https://flowbite.com/" className="hover:underline hover:text-gray-200">About Us</Link>
                      </li>
                      <li>
                          <Link href="https://tailwindcss.com/" className="hover:underline hover:text-gray-200">Careers</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-xs font-semibold text-gray-300 uppercase">HELP</h2>
                  <ul className="text-gray-300 text-xs">
                      <li className="mb-4">
                          <Link href="https://github.com/themesberg/flowbite" className="hover:underline  hover:text-gray-200">Payments</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="https://github.com/themesberg/flowbite" className="hover:underline  hover:text-gray-200">FAQ</Link>
                      </li>
                      <li>
                          <Link href="https://discord.gg/4eeurUVvTy" className="hover:underline hover:text-gray-200">Shipping</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-xs font-semibold text-gray-300 uppercase ">CONSUMER POLICY</h2>
                  <ul className="text-gray-300 text-xs">
                      <li className="mb-4">
                          <Link href="/privacy-policy" className="hover:underline hover:text-gray-200">Privacy Policy</Link>
                      </li>
                      <li className="mb-4">
                          <Link href="/terms" className="hover:underline hover:text-gray-200">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                          <Link href="/cancellation-and-return" className="hover:underline hover:text-gray-200">Cancellation &amp; Return</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-4 border-gray-200" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs text-gray-300 sm:text-center">© 2024 <span className="hover:underline">Cementdukaan™</span>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-300 hover:text-gray-200">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-200">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                    </svg>
                  <span className="sr-only">Twitter community</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-200">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948.591.621.928 1.509 1.005 2.644.328.138.63.299.905.484 1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.217 6.217 0 0 0-1.528-.161Z"/>
                    </svg>
                  <span className="sr-only">Threads community</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-200">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
                  <span className="sr-only">Linkedin page</span>
              </a>
             
          </div>
      </div>
    </div>
</footer>

    </>
  )
}
