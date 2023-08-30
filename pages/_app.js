import '@/styles/globals.css'
import {ProductProvider} from '../Context/ProductContext';
import { CartProvider } from '../Context/CartContext';
// import {Filter} from './Components/Filter';
// import { wrapper } from './Store'

const App = ({ Component, pageProps }) => {
  return (
    // <Provider Store={Store}>
        <ProductProvider>
          <CartProvider>
            {/* <Filter> */}
              <Component {...pageProps} />
            {/* </Filter> */}
          </CartProvider>
        </ ProductProvider>
    // </Provider>
  )
}

// export default wrapper.withRedux(App);
export default App;