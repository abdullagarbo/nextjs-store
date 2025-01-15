import ProductsContainer from '@/components/products/ProductsContainer';

async function Products({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const { layout, search } = await searchParams;
  const paramsLayout = layout || 'grid';
  const paramsSearch = search || '';

  return <ProductsContainer layout={paramsLayout} search={paramsSearch} />;
}

export default Products;
