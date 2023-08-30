import Navbar from "../Components/Navbar";
import Styles from '../styles/Error.module.css'
import Footer from "../Components/Footer";
import ErrorContainer from "../Components/ErrorContainer";

const Error = () => {
  return (
    <div className={Styles.Error}>
        <Navbar />
        <ErrorContainer />
        <Footer />
    </div>
  )
}

export default Error;