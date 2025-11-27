import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductsQuery } from "../hooks/useProductsQuery";
import ProductGrid from "./ProductGrid";
import ProductPagination from "./ProductPagination";

const PRODUCTS_PER_PAGE = 16;

const ProductsContainer = () => {
  const { data } = useProductsQuery();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchParams.toString()]);

  const totalPages = Math.ceil(data.total / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = data.products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (data.total === 0) {
    return (
      <div className="p-4">
        <p className="text-center text-slate-500">No products found</p>
      </div>
    );
  }

  return (
    <div className="mt-2 mb-20 space-y-10">
      <ProductGrid products={paginatedProducts} />
      <ProductPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsContainer;
