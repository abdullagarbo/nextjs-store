import ProductsContainer from '@/components/products/ProductsContainer';

type ProductsProps = {
  layout?: string;
  search?: string;
};

async function Products({ searchParams }: { searchParams: ProductsProps }) {
  const { layout, search } = await searchParams;
  const paramsLayout = layout || 'grid';
  const paramsSearch = search || '';

  return <ProductsContainer layout={paramsLayout} search={paramsSearch} />;
}

export default Products;
