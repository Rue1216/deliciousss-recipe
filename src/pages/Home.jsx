import React from 'react';
import Popular from '../components/Popular';
import Veggie from '../components/Veggie';
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

function Home() {
    return ( 
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <Veggie/>
            <Popular/>
            <Footer/>
        </motion.div>
     );
}

export default Home;