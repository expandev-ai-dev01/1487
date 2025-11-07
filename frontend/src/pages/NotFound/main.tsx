import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

/**
 * @page NotFoundPage
 * @summary 404 error page for non-existent routes
 * @domain core
 * @type error-page
 * @category public
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Página não encontrada</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Desculpe, a página que você está procurando não existe.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          <Home className="h-5 w-5" />
          Voltar para Início
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
