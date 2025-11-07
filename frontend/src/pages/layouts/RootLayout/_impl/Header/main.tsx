import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

/**
 * @component Header
 * @summary Application header with navigation and cart icon
 * @domain core
 * @type layout-component
 * @category navigation
 */
export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">🍰</span>
          <span className="text-xl font-semibold">Catálogo de Bolos</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Início
          </Link>
          <Link to="/catalogo" className="text-sm font-medium transition-colors hover:text-primary">
            Catálogo
          </Link>
        </nav>

        <button
          onClick={() => navigate('/carrinho')}
          className="relative p-2 hover:bg-accent rounded-md transition-colors"
          aria-label="Carrinho de compras"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
            0
          </span>
        </button>
      </div>
    </header>
  );
};
