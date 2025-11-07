import { useParams } from 'react-router-dom';

/**
 * @page ProductDetailPage
 * @summary Product detail page with images, description, reviews, and add to cart
 * @domain catalog
 * @type detail-page
 * @category product-management
 */
export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Detalhes do Produto</h1>
      <div className="text-center py-20">
        <p className="text-xl text-muted-foreground">
          Página de detalhes do produto {id} será implementada em breve
        </p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
