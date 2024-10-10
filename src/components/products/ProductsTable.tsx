import { AnimatePresence, motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useCallback, useState } from "react";

import { PRODUCT_TABLE_DATA } from "@/data";
import { cn } from "@/lib/utils";

import toast from "react-hot-toast";

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_TABLE_DATA);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const term = event.target.value.toLowerCase();
      setSearchTerm(term);
      const filtered = PRODUCT_TABLE_DATA.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term),
      );

      setFilteredProducts(filtered);
    },
    [],
  );

  const deleteProduct = (id: number) => {
    const updatedProducts = filteredProducts.filter(
      (product) => product.id !== id,
    );
    setFilteredProducts(updatedProducts);

    toast.success("Product deleted successfully");
  };

  return (
    <motion.div
      className="p-6 mb-8 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg rounded-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className={cn(
              "w-full rounded-md bg-gray-700 py-2 pl-10 pr-4 text-white placeholder-gray-400 transition-all duration-300 focus:pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500",
            )}
            onChange={handleSearch}
            value={searchTerm}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {!isFocused && (
            <Search
              className="absolute left-3 top-2.5 text-gray-400 transition-opacity duration-300"
              size={18}
            />
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                Price
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                Stock
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                Sales
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <td className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                    <img
                      src={product.image}
                      alt="Product img"
                      className="rounded-full size-10"
                    />
                    {product.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                    {product.sales}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
                    <button className="mr-3 text-indigo-400 hover:text-indigo-300">
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-red-400 hover:text-red-300"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
export default ProductsTable;
