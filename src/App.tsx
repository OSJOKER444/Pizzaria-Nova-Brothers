import { MapPin, Phone, Clock, Star, Pizza, ShoppingBag, Utensils, Instagram, Facebook } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 pb-12">
      {/* Navigation */}
      <nav className="fixed w-full bg-stone-950 text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <Pizza className="h-8 w-8 text-red-600" />
              <span className="font-bold text-2xl tracking-tighter uppercase">Nova Brothers</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#menu" className="hover:text-red-500 transition-colors font-medium">Cardápio</a>
              <a href="#sobre" className="hover:text-red-500 transition-colors font-medium">Sobre Nós</a>
              <a href="#avaliacoes" className="hover:text-red-500 transition-colors font-medium">Avaliações</a>
              <a href="#contato" className="hover:text-red-500 transition-colors font-medium">Contato</a>
            </div>
            <a 
              href="https://wa.me/5511976924585" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-md flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Pedir Agora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 flex items-center min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop" 
            alt="Pizza deliciosa saindo do forno" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left pt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            A verdadeira <span className="text-red-600">Pizza</span> <br className="hidden md:block"/> de Osasco.
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-10 max-w-2xl font-light">
            Massa artesanal, ingredientes frescos e assada com perfeição. Experimente a melhor da região, no conforto da sua casa ou no nosso espaço.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
            <a href="#menu" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl flex justify-center items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Ver Cardápio Online
            </a>
            <a href="#contato" className="bg-stone-100 hover:bg-stone-200 text-stone-900 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl flex justify-center items-center gap-2">
              <MapPin className="h-5 w-5" />
              Como Chegar
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-white -mt-10 relative z-20 mx-4 md:mx-auto max-w-5xl rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="bg-red-100 p-4 rounded-full mb-4 text-red-600">
              <Utensils className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-xl mb-2">Comer no Local</h3>
            <p className="text-stone-600">Ambiente agradável para você e sua família.</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="bg-red-100 p-4 rounded-full mb-4 text-red-600">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-xl mb-2">Take Away</h3>
            <p className="text-stone-600">Peça com antecedência e retire rapidinho.</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <div className="bg-red-100 p-4 rounded-full mb-4 text-red-600">
              <Pizza className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-xl mb-2">Entrega s/ Contato</h3>
            <p className="text-stone-600">Receba quentinha e com segurança em casa.</p>
          </div>
        </div>
      </section>

      {/* Menu Highlights (Addressing the review) */}
      <section id="menu" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Cardápio Digital</h2>
          <p className="text-stone-600 text-lg">Você pediu, nós atendemos! Conheça nossas mais pedidas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Marguerita Especial", desc: "Massa fina, molho de tomate fresco, mussarela, manjericão e azeite extra virgem.", price: "R$ 45,00", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop" },
            { name: "Calabresa com Cebola", desc: "Clássica! Calabresa fatiada, cebola roxa, azeitonas pretas e aquele toque de orégano.", price: "R$ 42,00", img: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=2670&auto=format&fit=crop" },
            { name: "Frango com Catupiry", desc: "Frango desfiado temperado, coberto com o verdadeiro Catupiry original.", price: "R$ 52,00", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop" },
            { name: "Portuguesa", desc: "Presunto, mussarela, ovos, cebola, ervilha e azeitonas.", price: "R$ 48,00", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2581&auto=format&fit=crop" },
            { name: "Quatro Queijos", desc: "Mussarela, provolone, gorgonzola e parmesão derretidos.", price: "R$ 55,00", img: "https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=2574&auto=format&fit=crop" },
            { name: "Nutella com Morango", desc: "Para adoçar! Generosa camada de Nutella com morangos frescos picados.", price: "R$ 58,00", img: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=2574&auto=format&fit=crop" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-stone-100 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-xl">{item.name}</h4>
                    <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded">{item.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <a href="https://wa.me/5511976924585" target="_blank" rel="noopener noreferrer" className="mt-6 w-full text-center border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-2 rounded-lg transition-colors">
                  Pedir esta
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-stone-500 mb-4">Veja dezenas de outras opções no nosso WhatsApp automático.</p>
          <a href="https://wa.me/5511976924585" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105">
            Pedir pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section id="avaliacoes" className="py-24 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">O que dizem sobre nós</h2>
            <div className="flex justify-center items-center gap-2 mb-2">
              <span className="text-5xl font-bold">4.2</span>
              <div className="flex text-yellow-400">
                <Star className="fill-current" /><Star className="fill-current" /><Star className="fill-current" /><Star className="fill-current" /><Star className="text-stone-600" />
              </div>
            </div>
            <p className="text-stone-400">Baseado nas avaliações do Google</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-stone-900 p-8 rounded-2xl border border-stone-800 relative">
              <QuoteIcon className="absolute top-6 right-8 text-stone-800 w-16 h-16" />
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg italic mb-6 relative z-10 text-stone-200">
                "O atendimento super top a pizza deliciosa e perto da minha casa super indico"
              </p>
              <div className="font-bold text-stone-400">- Aloilt Pereira</div>
            </div>

            <div className="bg-stone-900 p-8 rounded-2xl border border-stone-800 relative">
              <QuoteIcon className="absolute top-6 right-8 text-stone-800 w-16 h-16" />
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg italic mb-6 relative z-10 text-stone-200">
                "Top essa pizzaria melhor do brasil nota 10000000"
              </p>
              <div className="font-bold text-stone-400">- Cliente Local</div>
            </div>

            <div className="md:col-span-2 bg-gradient-to-r from-red-900/20 to-stone-900 p-8 rounded-2xl border border-red-900/30 text-center">
              <p className="text-lg font-medium text-stone-200 mb-4">
                Lemos nossos clientes!
              </p>
              <p className="text-stone-400 italic mb-6">
                "Não atende on LINE ,não tem cardápio on LINE..."
              </p>
              <p className="text-green-400 font-bold">
                Problema resolvido! Lançamos este site exclusivo com nosso cardápio e agora temos atendimento digital inteligente no WhatsApp!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Footer / Contact */}
      <section id="contato" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-4xl font-extrabold mb-8">Venha nos visitar</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-red-600 shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Endereço</h4>
                    <p className="text-stone-600 leading-relaxed">
                      Rua Profeta Jeremias, 46 - Conceicao<br />
                      Osasco - SP<br />
                      CEP: 06145-137
                    </p>
                    <a href="https://maps.google.com/?q=Pizzaria+Nova+brothers+Rua+Profeta+Jeremias,+46" target="_blank" rel="noopener noreferrer" className="text-red-600 font-medium hover:underline mt-2 inline-block">
                      Traçar Rota no Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-red-600 shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horário de Funcionamento</h4>
                    <p className="text-stone-600">
                      Aberto todos os dias<br />
                      Das 18:00 às 00:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-red-600 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Contato e Delivery</h4>
                    <p className="text-stone-600 text-xl font-medium mb-2">
                       (11) 97692-4585
                    </p>
                    <a href="https://wa.me/5511976924585" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-bold transition-colors inline-flex items-center gap-2">
                      Chamar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <a href="https://www.instagram.com/_novabroothers/" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-stone-600 hover:text-red-600 hover:shadow-md transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full text-stone-600 hover:text-red-600 hover:shadow-md transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Map Link Card */}
            <div className="bg-stone-200 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8 text-center border border-stone-300">
              <div className="bg-white p-4 rounded-full shadow-sm text-red-600 mb-4">
                <MapPin className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Venha nos conhecer!</h3>
              <p className="text-stone-600 mb-6 max-w-sm">
                Estamos localizados na Rua Profeta Jeremias, 46 em Osasco. Clique no botão abaixo para abrir a rota diretamente no aplicativo.
              </p>
              <a 
                href="https://maps.google.com/?q=Pizzaria+Nova+brothers+Rua+Profeta+Jeremias,+46" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
              >
                <MapPin className="h-5 w-5" />
                Abrir no Google Maps
              </a>
            </div>

          </div>
        </div>
      </section>
      
      <footer className="bg-stone-950 text-stone-500 py-8 border-t border-stone-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Pizzaria Nova Brothers. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

// Helper icon
function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.153-1.956.94-3.02C9.363 8.622 10.33 7.85 11.474 7.36L9.81 4.542C8.38 5.27 7.234 6.2 6.37 7.334c-1.39 1.83-2.015 3.73-1.875 5.703.116 1.638.746 2.946 1.89 3.924 1.107.94 2.456 1.41 4.048 1.41 1.05 0 2.01-.226 2.88-.678.87-.453 1.545-1.127 2.025-2.023l-4.146-2.5zm10.28 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.153-1.956.94-3.02 1.41-1.745 2.503-2.583 3.282-2.513l-1.664-2.818c-1.43.727-2.576 1.657-3.44 2.79-1.39 1.83-2.015 3.73-1.875 5.703.116 1.638.746 2.946 1.89 3.924 1.107.94 2.456 1.41 4.048 1.41 1.05 0 2.01-.226 2.88-.678.87-.453 1.545-1.127 2.025-2.023l-4.146-2.5z" />
    </svg>
  );
}

export default App;

