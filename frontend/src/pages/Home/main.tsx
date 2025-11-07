import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * @page HomePage
 * @summary Landing page with hero section and call-to-action to catalog
 * @domain core
 * @type landing-page
 * @category public
 */
export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Bolos Artesanais
          <br />
          <span className="text-primary">Feitos com Amor</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Descubra nossa seleção exclusiva de bolos artesanais, preparados com ingredientes
          selecionados e muito carinho. Perfeitos para qualquer ocasião especial.
        </p>
        <button
          onClick={() => navigate('/catalogo')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Ver Catálogo
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="text-4xl mb-4">🍰</div>
          <h3 className="text-xl font-semibold mb-2">Variedade</h3>
          <p className="text-muted-foreground">Diversos sabores e tamanhos para todos os gostos</p>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
          <p className="text-muted-foreground">Ingredientes premium e receitas exclusivas</p>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl mb-4">💝</div>
          <h3 className="text-xl font-semibold mb-2">Feito com Amor</h3>
          <p className="text-muted-foreground">Cada bolo é preparado com dedicação e carinho</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
