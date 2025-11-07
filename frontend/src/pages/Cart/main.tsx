/**
 * @page CartPage
 * @summary Shopping cart page with items list and checkout
 * @domain cart
 * @type management-page
 * @category cart-management
 */
export const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Carrinho de Compras</h1>
      <div className="text-center py-20">
        <p className="text-xl text-muted-foreground">Seu carrinho está vazio</p>
      </div>
    </div>
  );
};

export default CartPage;
