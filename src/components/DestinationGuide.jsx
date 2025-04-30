import { motion, AnimatePresence } from "framer-motion";
import destinations from "../../utils/guides";
import Image from "next/image";
import { useState } from "react";

function DestinationGuide() {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  
  const handleAddToCart = (destination) => {
    setCartItems([...cartItems, destination]);
    setShowAddedToCart(true);
    setTimeout(() => {
      setShowAddedToCart(false);
      setSelectedGuide(null);
    }, 1500);
  };

  return (
    <motion.div
      className="w-full bg-black text-white py-8 px-4 md:px-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl md:text-2xl font-serif mb-6 text-center">
        Find your complete guide to everywhere you need to visit
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {destinations.map((destination, index) => (
          <motion.div
            key={index}
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div 
              className="relative h-32 sm:h-36 md:h-44 w-full mb-2 bg-gradient-to-b from-transparent to-black/70 opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedGuide(destination)}
            >
              <div className="absolute top-0 right-0 bg-white text-black px-2 py-1 text-xs md:text-sm z-10">
                {destination.price}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={destination.image}
                  alt={destination.region}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-2 md:bottom-4 left-0 right-0 text-center text-white font-serif">
                <p className="text-base md:text-lg">Mystery</p>
                <p className="text-base md:text-lg">of {destination.region}</p>
              </div>
            </div>
            <motion.button
              className="bg-white cursor-pointer text-black py-1 md:py-2 text-sm md:text-base font-medium hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedGuide(destination)}
            >
              Buy
            </motion.button>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedGuide && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white text-black rounded-lg max-w-md w-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={selectedGuide.image}
                  alt={selectedGuide.region}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 bg-white text-black m-2 px-3 py-1 text-sm font-bold rounded-full">
                  {selectedGuide.price}
                </div>
                <button 
                  className="absolute top-2 left-2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center"
                  onClick={() => setSelectedGuide(null)}
                >
                  ✕
                </button>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-serif font-bold mb-2">
                  Mystery of {selectedGuide.region}
                </h3>
                <p className="text-gray-700 mb-4">
                  {selectedGuide.brief}
                </p>
                
                <div className="flex space-x-3">
                  {showAddedToCart ? (
                    <motion.div 
                      className="bg-green-500 text-white py-2 px-4 rounded-md flex-1 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Added to Cart ✓
                    </motion.div>
                  ) : (
                    <>
                      <motion.button
                        className="bg-gray-200 cursor-pointer text-black py-2 px-4 rounded-md flex-1"
                        whileHover={{ backgroundColor: "#e5e5e5" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedGuide(null)}
                      >
                        Cancel
                      </motion.button>
                      <motion.button
                        className="bg-black cursor-pointer text-white py-2 px-4 rounded-md flex-1"
                        whileHover={{ backgroundColor: "#333" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAddToCart(selectedGuide)}
                      >
                        Add to Cart
                      </motion.button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {cartItems.length > 0 && (
        <motion.div 
          className="fixed top-4 right-4 bg-white text-black rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 20 }}
        >
          {cartItems.length}
        </motion.div>
      )}
    </motion.div>
  );
}

export default DestinationGuide;