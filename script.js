// Animação dos cards de vantagens

const cards = document.querySelectorAll('.card-vantagem');

const botoesIrCardapio =
  document.querySelectorAll('.botao-ir-cardapio');

const inicio =
  document.querySelector('.inicio');

const fundoEscolhaUnidade =
  document.querySelector('.fundo-escolha-unidade');

const modalEscolhaUnidade =
  document.querySelector('.modal-escolha-unidade');

const cardsUnidade =
  document.querySelectorAll('.card-unidade');

const botaoAcessarCardapio =
  document.querySelector('.botao-acessar-cardapio');

function mostrarCards() {

  const alturaTela = window.innerHeight;

  cards.forEach(card => {

    const posicao =
      card.getBoundingClientRect().top;

    if (posicao < alturaTela - 100) {

      card.classList.add('aparecer');

    }

  });

}

window.addEventListener('scroll', mostrarCards);

window.addEventListener('load', mostrarCards);

// Unidades atendidas

const unidades = {
  recife: {
    nome: 'Recife',
    taxaEntrega: 6,
    classeHero: 'unidade-recife'
  },
  petrolina: {
    nome: 'Petrolina',
    taxaEntrega: 8,
    classeHero: 'unidade-petrolina'
  },
  salvador: {
    nome: 'Salvador',
    taxaEntrega: 7,
    classeHero: 'unidade-salvador'
  }
};

let unidadeAtual = 'recife';

// Salvamento local

function salvarCarrinho() {

  localStorage.setItem(
    'raizes_carrinho',
    JSON.stringify(carrinho)
  );

}

function carregarCarrinho() {

  const carrinhoSalvo =
    localStorage.getItem('raizes_carrinho');

  if (carrinhoSalvo) {

    try {

      carrinho =
        JSON.parse(carrinhoSalvo);

    } catch (erro) {

      carrinho = [];

      localStorage.removeItem('raizes_carrinho');

    }

  }

}

function salvarUnidade() {

  localStorage.setItem(
    'raizes_unidade',
    unidadeAtual
  );

}

function carregarUnidade() {

  const unidadeSalva =
    localStorage.getItem('raizes_unidade');

  if (unidadeSalva && unidades[unidadeSalva]) {

    unidadeAtual = unidadeSalva;

  }

}

function aplicarUnidade() {

  seletorUnidade.value =
    unidadeAtual;

  nomeUnidade.textContent =
    unidades[unidadeAtual].nome;

  unidadeResumo.textContent =
    unidades[unidadeAtual].nome;

  inicio.classList.remove(
    'unidade-recife',
    'unidade-petrolina',
    'unidade-salvador'
  );

  inicio.classList.add(
    unidades[unidadeAtual].classeHero
  );

  atualizarCardapio();

  atualizarTotalCheckout();

}

function selecionarUnidade(novaUnidade, limparCarrinho = true, exibirAviso = true) {

  unidadeAtual = novaUnidade;

  if (limparCarrinho) {

    carrinho = [];

    salvarCarrinho();

    atualizarCarrinho();

  }

  salvarUnidade();

  aplicarUnidade();

  if (exibirAviso) {

    mostrarAvisoUnidade();

  }

}

function abrirEscolhaUnidade() {

  fundoEscolhaUnidade.classList.add('ativo');

  modalEscolhaUnidade.classList.add('ativo');

}

function fecharEscolhaUnidade() {

  fundoEscolhaUnidade.classList.remove('ativo');

  modalEscolhaUnidade.classList.remove('ativo');

}

function limparBuscaEVoltarCardapio() {

  campoBusca.value = '';

  categoriaAtual = 'todos';

  categorias.forEach(botao => {

    botao.classList.remove('ativa');

    if (botao.dataset.categoria === 'todos') {

      botao.classList.add('ativa');

    }

  });

  atualizarCardapio();

  document
    .querySelector('#cardapio')
    .scrollIntoView({
      behavior: 'smooth'
    });

}

// Carrinho

let carrinho = [];

const botoes =
  document.querySelectorAll('.botao-add');

const itensCarrinho =
  document.querySelector('.itens-carrinho');

const valorTotal =
  document.querySelector('.valor-total');

const contadorCarrinho =
  document.querySelector('.contador-carrinho');

const iconeCarrinho =
  document.querySelector('.icone-carrinho');

const carrinhoLateral =
  document.querySelector('.carrinho');

const fundoCarrinho =
  document.querySelector('.fundo-carrinho');

const fecharCarrinho =
  document.querySelector('.fechar-carrinho');

const avisoCarrinho =
  document.querySelector('.aviso-carrinho');

const avisoUnidade =
  document.querySelector('.aviso-unidade');

// Cardápio

const seletorUnidade =
  document.querySelector('#unidade');

const nomeUnidade =
  document.querySelector('.nome-unidade');

const unidadeResumo =
  document.querySelector('.unidade-resumo');

const produtos =
  document.querySelectorAll('.produto');

const categorias =
  document.querySelectorAll('.categoria');

const campoBusca =
  document.querySelector('.campo-busca');

const semProdutos =
  document.querySelector('.sem-produtos');

let categoriaAtual = 'todos';

let descontoAtivo = null;

// Atalhos de navegação

botoesIrCardapio.forEach(botao => {

  botao.addEventListener('click', () => {

    document
      .querySelector('#cardapio')
      .scrollIntoView({
        behavior: 'smooth'
      });

  });

});

cardsUnidade.forEach(card => {

  card.addEventListener('click', () => {

    selecionarUnidade(card.dataset.unidade);

    fecharEscolhaUnidade();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  });

});

if (botaoAcessarCardapio) {

  botaoAcessarCardapio.addEventListener('click', () => {

    limparBuscaEVoltarCardapio();

  });

}

// Checkout

const botaoFinalizar =
  document.querySelector('.finalizar-pedido');

const checkout =
  document.querySelector('.checkout');

const fundoCheckout =
  document.querySelector('.fundo-checkout');

const fecharCheckout =
  document.querySelector('.fechar-checkout');

const listaCheckout =
  document.querySelector('.lista-checkout');

const subtotalCheckout =
  document.querySelector('.subtotal-checkout');

const totalCheckout =
  document.querySelector('.total-checkout');

const botaoConfirmar =
  document.querySelector('.botao-confirmar');

const consentimentoLgpd =
  document.querySelector('#consentimento-lgpd');

const erroLgpd =
  document.querySelector('.erro-lgpd');

const pagamento =
  document.querySelector('#pagamento');

const campoTroco =
  document.querySelector('.campo-troco');

const troco =
  document.querySelector('#troco');

const fundoProcessamento =
  document.querySelector('.fundo-processamento');

const modalProcessamento =
  document.querySelector('.modal-processamento');

const fundoConfirmacao =
  document.querySelector('.fundo-confirmacao');

const modalConfirmacao =
  document.querySelector('.modal-confirmacao');

const pedidoGerado =
  document.querySelector('.pedido-gerado');

const pontosGanhos =
  document.querySelector('.pontos-ganhos');

const botaoFecharConfirmacao =
  document.querySelector('.botao-fechar-confirmacao');

const botaoAcompanharPedido =
  document.querySelector('.botao-acompanhar-pedido');

const fundoAcompanhamento =
  document.querySelector('.fundo-acompanhamento');

const modalAcompanhamento =
  document.querySelector('.modal-acompanhamento');

const fecharAcompanhamento =
  document.querySelector('.fechar-acompanhamento');

const pedidoAcompanhamento =
  document.querySelector('.pedido-acompanhamento');

const progressoPedido =
  document.querySelector('.progresso-pedido');

const etapasPedido =
  document.querySelectorAll('.status-pedido');

const textoStatusEntrega =
  document.querySelector('.texto-status-entrega');

const descricaoStatusEntrega =
  document.querySelector('.descricao-status-entrega');

const dadosCartao =
  document.querySelector('.dados-cartao');

const camposCartao =
  document.querySelectorAll('.campo-cartao');

const numeroCartao =
  document.querySelector('#numero-cartao');

const nomeCartao =
  document.querySelector('#nome-cartao');

const validadeCartao =
  document.querySelector('#validade-cartao');

const cvvCartao =
  document.querySelector('#cvv-cartao');

let etapaAtualPedido = 0;

let timersPedido = [];

// Entrega ou retirada

const tipoPedido =
  document.querySelector('#tipo-pedido');

const camposEntrega =
  document.querySelector('.campos-entrega');

const valorEntrega =
  document.querySelector('.valor-entrega');

// Filtro do cardápio

function atualizarCardapio() {

  let quantidadeVisivel = 0;

  const termoBusca =
    campoBusca.value.toLowerCase().trim();

  produtos.forEach(produto => {

    const unidadesProduto =
      produto.dataset.unidades.split(',').map(unidade => unidade.trim());

    const categoriaProduto =
      produto.dataset.categoria;

    const nomeProduto =
      produto.dataset.nome.toLowerCase();

    const disponivelNaUnidade =
      unidadesProduto.includes(unidadeAtual);

    const descricaoProduto =
      produto.querySelector('p').textContent.toLowerCase();

    const categoriaCompativel =
      categoriaAtual === 'todos' ||
      categoriaProduto === categoriaAtual;

    const buscaCompativel =
      nomeProduto.includes(termoBusca) ||
      descricaoProduto.includes(termoBusca);

    const deveAparecer =
      disponivelNaUnidade &&
      categoriaCompativel &&
      buscaCompativel;

    if (deveAparecer) {

      produto.classList.remove('oculto');

      quantidadeVisivel++;

    } else {

      produto.classList.add('oculto');

    }

  });

  if (quantidadeVisivel === 0) {

    semProdutos.classList.add('ativo');

  } else {

    semProdutos.classList.remove('ativo');

  }

}

// Troca de unidade

seletorUnidade.addEventListener('change', () => {

  selecionarUnidade(seletorUnidade.value);

});

// Categorias do cardápio

categorias.forEach(categoria => {

  categoria.addEventListener('click', () => {

    categorias.forEach(botao => {

      botao.classList.remove('ativa');

    });

    categoria.classList.add('ativa');

    categoriaAtual =
      categoria.dataset.categoria;

    atualizarCardapio();

  });

});

// Busca de produtos

campoBusca.addEventListener('input', () => {

  atualizarCardapio();

});

// Inclusão de produtos no carrinho

botoes.forEach(botao => {

  botao.addEventListener('click', () => {

    const produto =
      botao.closest('.produto');

    if (produto.classList.contains('oculto')) return;

    const nome =
      produto.dataset.nome;

    const preco =
      parseFloat(produto.dataset.preco);

    const imagem =
      produto.querySelector('img').getAttribute('src');

    const imagemAlt =
      produto.querySelector('img').getAttribute('alt');

    const itemExistente =
      carrinho.find(item => item.nome === nome);

    if (itemExistente) {

      itemExistente.quantidade++;

    } else {

      carrinho.push({
        nome,
        preco,
        quantidade: 1,
        unidade: unidadeAtual,
        imagem,
        imagemAlt
      });

    }

    atualizarCarrinho();

    salvarCarrinho();

    mostrarAviso();

  });

});

// Avisos rápidos

function mostrarAviso() {

  avisoCarrinho.classList.add('aparecer');

  setTimeout(() => {

    avisoCarrinho.classList.remove('aparecer');

  }, 2500);

}

function mostrarAvisoAutenticacao(mensagem) {

  avisoUnidade.textContent =
    mensagem;

  avisoUnidade.classList.add('aparecer');

  setTimeout(() => {

    avisoUnidade.classList.remove('aparecer');

  }, 2600);

}

function mostrarAvisoUnidade() {

  avisoUnidade.textContent =
    `Unidade atualizada para ${unidades[unidadeAtual].nome}. O cardápio foi ajustado.`;

  avisoUnidade.classList.add('aparecer');

  setTimeout(() => {

    avisoUnidade.classList.remove('aparecer');

  }, 2800);

}

// Atualização do carrinho

function atualizarCarrinho() {

  itensCarrinho.innerHTML = '';

  if (carrinho.length === 0) {

    itensCarrinho.innerHTML = `
      <div class="carrinho-vazio">
        <img
          class="icone-carrinho-vazio-img"
          src="assets/carrinho-icon.png"
          alt="Carrinho vazio"
        >

        <strong>
          Seu carrinho está vazio
        </strong>

        <p>
          Escolha uma unidade, navegue pelo cardápio e adicione seus sabores favoritos.
        </p>
      </div>
    `;

    valorTotal.textContent =
      'R$ 0,00';

    contadorCarrinho.textContent =
      0;

    botaoFinalizar.disabled = true;

    return;

  }

  botaoFinalizar.disabled = false;

  let total = 0;

  let quantidadeTotal = 0;

  carrinho.forEach(item => {

    total += item.preco * item.quantidade;

    quantidadeTotal += item.quantidade;

    const div =
      document.createElement('div');

    div.classList.add('item-carrinho');

    div.innerHTML = `
      <img
        class="imagem-item-carrinho"
        src="${item.imagem}"
        alt="${item.imagemAlt || item.nome}"
      >

      <div class="detalhes-item-carrinho">

        <div class="linha-topo-item">

          <div>
            <div class="nome-item">
              ${item.nome}
            </div>

            <div class="preco-unitario-item">
              R$ ${item.preco.toFixed(2)} cada
            </div>
          </div>

          <div class="preco-item">
            R$ ${(item.preco * item.quantidade).toFixed(2)}
          </div>

        </div>

        <div class="linha-acoes-item">

          <div class="quantidade-controle">

            <button
              class="botao-quantidade diminuir">
              -
            </button>

            <span class="numero-quantidade">
              ${item.quantidade}
            </span>

            <button
              class="botao-quantidade aumentar">
              +
            </button>

          </div>

          <button class="remover-item">
            Remover
          </button>

        </div>

      </div>
    `;

    const aumentar =
      div.querySelector('.aumentar');

    const diminuir =
      div.querySelector('.diminuir');

    const remover =
      div.querySelector('.remover-item');

    aumentar.addEventListener('click', () => {

      item.quantidade++;

      atualizarCarrinho();

      salvarCarrinho();

    });

    diminuir.addEventListener('click', () => {

      if (item.quantidade > 1) {

        item.quantidade--;

      } else {

        carrinho =
          carrinho.filter(
            produto => produto.nome !== item.nome
          );

      }

      atualizarCarrinho();

      salvarCarrinho();

    });

    remover.addEventListener('click', () => {

      carrinho =
        carrinho.filter(
          produto => produto.nome !== item.nome
        );

      atualizarCarrinho();

      salvarCarrinho();

    });

    itensCarrinho.appendChild(div);

  });

  valorTotal.textContent =
    `R$ ${total.toFixed(2)}`;

  contadorCarrinho.textContent =
    quantidadeTotal;

}

// Abertura do carrinho

iconeCarrinho.addEventListener('click', () => {

  carrinhoLateral.classList.add('aberto');

  fundoCarrinho.classList.add('ativo');

});

// Fechamento do carrinho

function fecharCarrinhoFuncao() {

  carrinhoLateral.classList.remove('aberto');

  fundoCarrinho.classList.remove('ativo');

}

fecharCarrinho.addEventListener(
  'click',
  fecharCarrinhoFuncao
);

fundoCarrinho.addEventListener(
  'click',
  fecharCarrinhoFuncao
);

function preencherCheckoutComClienteLogado() {

  if (!clienteAtual) return;

  const campoNome =
    document.querySelector('#nome');

  const campoTelefone =
    document.querySelector('#telefone');

  if (campoNome && campoNome.value.trim() === '') {

    campoNome.value =
      clienteAtual.nome || '';

  }

  if (campoTelefone && campoTelefone.value.trim() === '') {

    campoTelefone.value =
      clienteAtual.telefone || '';

  }

}

// Abertura do checkout

botaoFinalizar.addEventListener('click', () => {

  if (carrinho.length === 0) return;

  listaCheckout.innerHTML = '';

  unidadeResumo.textContent =
    unidades[unidadeAtual].nome;

  carrinho.forEach(item => {

    const div =
      document.createElement('div');

    div.classList.add('linha-resumo');

    div.innerHTML = `
      <span>
        ${item.nome} x${item.quantidade}
      </span>

      <span>
        R$ ${(item.preco * item.quantidade).toFixed(2)}
      </span>
    `;

    listaCheckout.appendChild(div);

  });

  atualizarTotalCheckout();

  preencherCheckoutComClienteLogado();

  checkout.classList.add('aberto');

  fundoCheckout.classList.add('ativo');

});

// Fechamento do checkout

function fecharCheckoutFuncao() {

  checkout.classList.remove('aberto');

  fundoCheckout.classList.remove('ativo');

}

fecharCheckout.addEventListener(
  'click',
  fecharCheckoutFuncao
);

fundoCheckout.addEventListener(
  'click',
  fecharCheckoutFuncao
);

// Subtotal dos itens

function calcularSubtotal() {

  let subtotal = 0;

  carrinho.forEach(item => {

    subtotal +=
      item.preco * item.quantidade;

  });

  return subtotal;

}

// Totais do checkout

function atualizarTotalCheckout() {

  const subtotal =
    calcularSubtotal();

  const entrega =
    tipoPedido.value === 'entrega';

  const taxa =
    entrega
      ? unidades[unidadeAtual].taxaEntrega
      : 0;

  const valorDesconto =
    descontoAtivo
      ? subtotal * descontoAtivo.percentual
      : 0;

  const total =
    Math.max(subtotal - valorDesconto + taxa, 0);

  const linhaDesconto =
    document.querySelector('.linha-desconto');

  const valorDescontoElemento =
    document.querySelector('.valor-desconto');

  subtotalCheckout.textContent =
    `R$ ${subtotal.toFixed(2)}`;

  if (linhaDesconto && valorDescontoElemento) {

    if (valorDesconto > 0) {

      linhaDesconto.classList.remove('oculto');

      valorDescontoElemento.textContent =
        `- R$ ${valorDesconto.toFixed(2)}`;

    } else {

      linhaDesconto.classList.add('oculto');

      valorDescontoElemento.textContent =
        '- R$ 0,00';

    }

  }

  valorEntrega.textContent =
    entrega
      ? `R$ ${taxa.toFixed(2)}`
      : 'Grátis';

  totalCheckout.textContent =
    `R$ ${total.toFixed(2)}`;

}

// Campos de entrega e retirada

tipoPedido.addEventListener('change', () => {

  const entrega =
    tipoPedido.value === 'entrega';

  if (entrega) {

    camposEntrega.classList.remove('oculto');

  } else {

    camposEntrega.classList.add('oculto');

  }

  atualizarTotalCheckout();

});

// Forma de pagamento

pagamento.addEventListener('change', () => {

  const pagamentoEmDinheiro =
    pagamento.value === 'dinheiro';

  const pagamentoComCartao =
    pagamento.value === 'credito' ||
    pagamento.value === 'debito';

  if (pagamentoEmDinheiro) {

    campoTroco.classList.remove('oculto');

  } else {

    campoTroco.classList.add('oculto');

    troco.value = '';

  }

  if (pagamentoComCartao) {

    dadosCartao.classList.remove('oculto');

  } else {

    dadosCartao.classList.add('oculto');

    limparCamposCartao();

  }

});

// Validação do checkout

botaoConfirmar.addEventListener('click', () => {

  let formularioValido = true;

  const camposObrigatorios =
    document.querySelectorAll(
      '.campo-checkout:not(.campo-opcional)'
    );

  camposObrigatorios.forEach(campo => {

    const grupo =
      campo.closest('.grupo-campo');

    const erro =
      grupo.querySelector('.mensagem-erro');

    const campoEntregaOculto =
      campo.closest('.campos-entrega') &&
      camposEntrega.classList.contains('oculto');

    const campoCartaoOculto =
      campo.closest('.dados-cartao') &&
      dadosCartao.classList.contains('oculto');

    const oculto =
      campoEntregaOculto ||
      campoCartaoOculto;

    if (oculto) {

      campo.classList.remove('erro');

      if (erro) {

        erro.classList.remove('ativo');

      }

      return;

    }

    if (campo.value.trim() === '') {

      formularioValido = false;

      campo.classList.add('erro');

      if (erro) {

        erro.classList.add('ativo');

      }

    } else {

      campo.classList.remove('erro');

      if (erro) {

        erro.classList.remove('ativo');

      }

    }

  });

  if (!consentimentoLgpd.checked) {

    formularioValido = false;

    erroLgpd.classList.add('ativo');

  } else {

    erroLgpd.classList.remove('ativo');

  }

  if (!formularioValido) return;

  checkout.classList.remove('aberto');

  fundoCheckout.classList.remove('ativo');

  processarPagamentoExterno();

});

// Pagamento externo simulado

function processarPagamentoExterno() {

  fundoProcessamento.classList.add('ativo');

  modalProcessamento.classList.add('ativo');

  setTimeout(() => {

    fundoProcessamento.classList.remove('ativo');

    modalProcessamento.classList.remove('ativo');

    finalizarPedidoComSucesso();

  }, 2200);

}

// Confirmação do pedido

function finalizarPedidoComSucesso() {

  const subtotalAntesDeLimpar =
    calcularSubtotal();

  const numeroPedido =
    Math.floor(1000 + Math.random() * 9000);

  const pontos =
    Math.floor(subtotalAntesDeLimpar);

  pedidoGerado.textContent =
    numeroPedido;

  pedidoAcompanhamento.textContent =
    numeroPedido;

  pontosGanhos.textContent =
    `${pontos} pontos`;

  if (clienteAtual) {

    clienteAtual.pontos =
      (clienteAtual.pontos || 0) + pontos;

    salvarClienteAtual();

    atualizarInterfaceCliente();

    atualizarPainelFidelidade();

  }

  prepararAcompanhamentoPedido();

  fundoConfirmacao.classList.add('ativo');

  modalConfirmacao.classList.add('ativo');

  carrinho = [];

  atualizarCarrinho();

  salvarCarrinho();

  limparFormularioCheckout();

}

// Limpeza do checkout

function limparFormularioCheckout() {

  const campos =
    document.querySelectorAll('.campo-checkout');

  campos.forEach(campo => {

    campo.value = '';

    campo.classList.remove('erro');

  });

  const erros =
    document.querySelectorAll('.mensagem-erro');

  erros.forEach(erro => {

    erro.classList.remove('ativo');

  });

  consentimentoLgpd.checked = false;

  tipoPedido.value = 'entrega';

  pagamento.value = '';

  camposEntrega.classList.remove('oculto');

  campoTroco.classList.add('oculto');

  dadosCartao.classList.add('oculto');

  limparCamposCartao();

  atualizarTotalCheckout();

}

// Fechamento da confirmação

botaoFecharConfirmacao.addEventListener('click', () => {

  fundoConfirmacao.classList.remove('ativo');

  modalConfirmacao.classList.remove('ativo');

});

// Campos do cartão

function limparCamposCartao() {

  camposCartao.forEach(campo => {

    campo.value = '';

    campo.classList.remove('erro');

  });

}

numeroCartao.addEventListener('input', () => {

  let valor =
    numeroCartao.value.replace(/\D/g, '');

  valor =
    valor.replace(/(\d{4})(?=\d)/g, '$1 ');

  numeroCartao.value =
    valor.trim();

});

validadeCartao.addEventListener('input', () => {

  let valor =
    validadeCartao.value.replace(/\D/g, '');

  valor =
    valor.replace(/^(\d{2})(\d)/, '$1/$2');

  validadeCartao.value =
    valor;

});

cvvCartao.addEventListener('input', () => {

  cvvCartao.value =
    cvvCartao.value.replace(/\D/g, '');

});

nomeCartao.addEventListener('input', () => {

  nomeCartao.value =
    nomeCartao.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');

});

// Acompanhamento do pedido

function prepararAcompanhamentoPedido() {

  etapaAtualPedido = 0;

  timersPedido.forEach(timer => clearTimeout(timer));

  timersPedido = [];

  etapasPedido.forEach((etapa, index) => {

    etapa.classList.remove('ativo', 'concluido');

    const icone =
      etapa.querySelector('.icone-status');

    if (index === 0) {

      etapa.classList.add('ativo');

      icone.textContent = '✓';

    } else {

      icone.textContent = index;

    }

  });

  const retirada =
    tipoPedido.value === 'retirada';

  if (retirada) {

    textoStatusEntrega.textContent =
      'Pronto para retirada';

    descricaoStatusEntrega.textContent =
      'Seu pedido está disponível para retirada na unidade escolhida.';

  } else {

    textoStatusEntrega.textContent =
      'Saiu para entrega';

    descricaoStatusEntrega.textContent =
      'O pedido está a caminho do endereço informado.';

  }

  progressoPedido.style.width = '0%';

}

function abrirAcompanhamentoPedido() {

  fundoConfirmacao.classList.remove('ativo');

  modalConfirmacao.classList.remove('ativo');

  fundoAcompanhamento.classList.add('ativo');

  modalAcompanhamento.classList.add('ativo');

  iniciarSimulacaoStatus();

}

function iniciarSimulacaoStatus() {

  timersPedido.forEach(timer => clearTimeout(timer));

  timersPedido = [];

  const tempos =
    [1200, 3500, 6500, 9500];

  tempos.forEach((tempo, index) => {

    const timer =
      setTimeout(() => {

        avancarStatusPedido(index + 1);

      }, tempo);

    timersPedido.push(timer);

  });

}

function avancarStatusPedido(novaEtapa) {

  etapaAtualPedido = novaEtapa;

  etapasPedido.forEach((etapa, index) => {

    const icone =
      etapa.querySelector('.icone-status');

    etapa.classList.remove('ativo', 'concluido');

    if (index < novaEtapa || novaEtapa === etapasPedido.length - 1) {

      etapa.classList.add('concluido');

      icone.textContent = '✓';

    } else if (index === novaEtapa) {

      etapa.classList.add('ativo');

      icone.textContent = '•';

    } else {

      icone.textContent = index;

    }

  });

  const progresso =
    (novaEtapa / (etapasPedido.length - 1)) * 100;

  progressoPedido.style.width =
    `${progresso}%`;

}

// Abertura do acompanhamento

botaoAcompanharPedido.addEventListener('click', () => {

  abrirAcompanhamentoPedido();

});

// Fechamento do acompanhamento

function fecharAcompanhamentoPedido() {

  fundoAcompanhamento.classList.remove('ativo');

  modalAcompanhamento.classList.remove('ativo');

}

fecharAcompanhamento.addEventListener(
  'click',
  fecharAcompanhamentoPedido
);

fundoAcompanhamento.addEventListener(
  'click',
  fecharAcompanhamentoPedido
);

// Telefone

const telefone =
  document.querySelector('#telefone');

telefone.addEventListener('input', () => {

  let valor =
    telefone.value.replace(/\D/g, '');

  valor =
    valor.replace(
      /^(\d{2})(\d)/g,
      '($1) $2'
    );

  valor =
    valor.replace(
      /(\d)(\d{4})$/,
      '$1-$2'
    );

  telefone.value = valor;

});

// CEP

const cep =
  document.querySelector('#cep');

cep.addEventListener('input', () => {

  let valor =
    cep.value.replace(/\D/g, '');

  valor =
    valor.replace(
      /^(\d{5})(\d)/,
      '$1-$2'
    );

  cep.value = valor;

});

// Inicialização da página

const unidadeJaEscolhida =
  localStorage.getItem('raizes_unidade');

carregarUnidade();

carregarCarrinho();

atualizarCarrinho();

aplicarUnidade();

if (!unidadeJaEscolhida) {

  abrirEscolhaUnidade();

} else {

  fecharEscolhaUnidade();

}

// Promoções e fidelidade

const botoesPromocao =
  document.querySelectorAll('.botao-promocao');

const botaoVerFidelidade =
  document.querySelector('.botao-ver-fidelidade');

const botaoAbrirLoginFidelidade =
  document.querySelector('.botao-abrir-login-fidelidade');

const saldoFidelidade =
  document.querySelector('.saldo-fidelidade');

function atualizarPainelFidelidade() {

  if (!saldoFidelidade) return;

  saldoFidelidade.textContent =
    clienteAtual
      ? `${clienteAtual.pontos || 0} pontos`
      : '0 pontos';

}

function aplicarCupomPromocional(cupom, percentual) {

  descontoAtivo = {
    cupom,
    percentual
  };

  atualizarTotalCheckout();

  mostrarAvisoAutenticacao(
    `Cupom ${cupom} aplicado. O desconto aparecerá no checkout.`
  );

  document
    .querySelector('#cardapio')
    .scrollIntoView({
      behavior: 'smooth'
    });

}

botoesPromocao.forEach(botao => {

  botao.addEventListener('click', () => {

    aplicarCupomPromocional(
      botao.dataset.cupom,
      parseFloat(botao.dataset.desconto)
    );

  });

});

if (botaoVerFidelidade) {

  botaoVerFidelidade.addEventListener('click', () => {

    document
      .querySelector('#fidelidade')
      .scrollIntoView({
        behavior: 'smooth'
      });

  });

}

if (botaoAbrirLoginFidelidade) {

  botaoAbrirLoginFidelidade.addEventListener('click', () => {

    abrirAutenticacao();

  });

}

// Login e cadastro

const usuarioHeader =
  document.querySelector('.usuario-header');

const textoUsuarioHeader =
  document.querySelector('.texto-usuario-header');

const fundoAutenticacao =
  document.querySelector('.fundo-autenticacao');

const modalAutenticacao =
  document.querySelector('.modal-autenticacao');

const fecharAutenticacao =
  document.querySelector('.fechar-autenticacao');

const abasAutenticacao =
  document.querySelectorAll('.aba-autenticacao');

const formLogin =
  document.querySelector('.form-login');

const formCadastro =
  document.querySelector('.form-cadastro');

const painelCliente =
  document.querySelector('.painel-cliente');

const nomeClienteLogado =
  document.querySelector('.nome-cliente-logado');

const emailClienteLogado =
  document.querySelector('.email-cliente-logado');

const pontosCliente =
  document.querySelector('.pontos-cliente');

const botaoSairConta =
  document.querySelector('.botao-sair-conta');

let clienteAtual = null;

function carregarClientes() {

  const clientesSalvos =
    localStorage.getItem('raizes_clientes');

  if (!clientesSalvos) return [];

  try {

    return JSON.parse(clientesSalvos);

  } catch (erro) {

    localStorage.removeItem('raizes_clientes');

    return [];

  }

}

function salvarClientes(clientes) {

  localStorage.setItem(
    'raizes_clientes',
    JSON.stringify(clientes)
  );

}

function buscarClientePorEmail(email) {

  return carregarClientes().find(
    cliente => cliente.email.toLowerCase() === email.toLowerCase()
  );

}

function salvarClienteAtual() {

  localStorage.setItem(
    'raizes_cliente_atual',
    JSON.stringify(clienteAtual)
  );

  if (!clienteAtual) return;

  const clientes = carregarClientes();

  const indiceCliente = clientes.findIndex(
    cliente => cliente.email.toLowerCase() === clienteAtual.email.toLowerCase()
  );

  if (indiceCliente >= 0) {

    clientes[indiceCliente] = {
      ...clientes[indiceCliente],
      nome: clienteAtual.nome,
      telefone: clienteAtual.telefone,
      pontos: clienteAtual.pontos || 0,
      lgpd: clienteAtual.lgpd
    };

    salvarClientes(clientes);

  }

}

function carregarClienteAtual() {

  const clienteSalvo =
    localStorage.getItem('raizes_cliente_atual');

  if (clienteSalvo) {

    try {

      clienteAtual =
        JSON.parse(clienteSalvo);

    } catch (erro) {

      clienteAtual = null;

      localStorage.removeItem('raizes_cliente_atual');

    }

  }

}

function atualizarInterfaceCliente() {

  if (clienteAtual) {

    textoUsuarioHeader.textContent =
      `Olá, ${clienteAtual.nome.split(' ')[0]}`;

    nomeClienteLogado.textContent =
      clienteAtual.nome;

    emailClienteLogado.textContent =
      clienteAtual.email;

    pontosCliente.textContent =
      clienteAtual.pontos || 0;

  } else {

    textoUsuarioHeader.textContent =
      'Entrar';

  }

  atualizarPainelFidelidade();

}

function abrirAutenticacao() {

  fundoAutenticacao.classList.add('ativo');

  modalAutenticacao.classList.add('ativo');

  document.body.classList.add('modal-aberto');

  if (clienteAtual) {

    mostrarPainelCliente();

  } else {

    trocarAbaAutenticacao('login');

  }

}

function fecharAutenticacaoFuncao() {

  fundoAutenticacao.classList.remove('ativo');

  modalAutenticacao.classList.remove('ativo');

  document.body.classList.remove('modal-aberto');
}

function trocarAbaAutenticacao(aba) {

  abasAutenticacao.forEach(botao => {

    botao.classList.toggle(
      'ativa',
      botao.dataset.aba === aba
    );

  });

  formLogin.classList.toggle(
    'ativo',
    aba === 'login'
  );

  formCadastro.classList.toggle(
    'ativo',
    aba === 'cadastro'
  );

  painelCliente.classList.remove('ativo');

}

function mostrarPainelCliente() {

  formLogin.classList.remove('ativo');

  formCadastro.classList.remove('ativo');

  painelCliente.classList.add('ativo');

  abasAutenticacao.forEach(botao => {

    botao.classList.remove('ativa');

  });

  atualizarInterfaceCliente();

}

function validarEmail(email) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

function alternarErroCampo(campo, erro, condicaoErro, mensagem = null) {

  campo.classList.toggle('erro', condicaoErro);

  erro.classList.toggle('ativo', condicaoErro);

  if (mensagem && condicaoErro) {

    erro.textContent = mensagem;

  }

}

usuarioHeader.addEventListener('click', () => {

  abrirAutenticacao();

});

fecharAutenticacao.addEventListener(
  'click',
  fecharAutenticacaoFuncao
);

fundoAutenticacao.addEventListener(
  'click',
  fecharAutenticacaoFuncao
);

abasAutenticacao.forEach(botao => {

  botao.addEventListener('click', () => {

    trocarAbaAutenticacao(botao.dataset.aba);

  });

});

const telefoneCadastro =
  document.querySelector('#cadastro-telefone');

if (telefoneCadastro) {

  telefoneCadastro.addEventListener('input', () => {

    let valor =
      telefoneCadastro.value.replace(/\D/g, '').slice(0, 11);

    if (valor.length > 10) {

      valor =
        valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

    } else if (valor.length > 6) {

      valor =
        valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');

    } else if (valor.length > 2) {

      valor =
        valor.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');

    } else if (valor.length > 0) {

      valor =
        valor.replace(/^(\d{0,2})$/, '($1');

    }

    telefoneCadastro.value =
      valor;

  });

}

formCadastro.addEventListener('submit', evento => {

  evento.preventDefault();

  const nome =
    document.querySelector('#cadastro-nome');

  const email =
    document.querySelector('#cadastro-email');

  const telefone =
    document.querySelector('#cadastro-telefone');

  const senha =
    document.querySelector('#cadastro-senha');

  const lgpd =
    document.querySelector('#cadastro-lgpd');

  const erroNome =
    document.querySelector('.erro-cadastro-nome');

  const erroEmail =
    document.querySelector('.erro-cadastro-email');

  const erroTelefone =
    document.querySelector('.erro-cadastro-telefone');

  const erroSenha =
    document.querySelector('.erro-cadastro-senha');

  const erroLgpdCadastro =
    document.querySelector('.erro-cadastro-lgpd');

  let valido = true;

  alternarErroCampo(nome, erroNome, nome.value.trim() === '');
  alternarErroCampo(email, erroEmail, !validarEmail(email.value.trim()));
  alternarErroCampo(telefone, erroTelefone, telefone.value.trim() === '');
  alternarErroCampo(senha, erroSenha, senha.value.trim().length < 4);

  erroLgpdCadastro.classList.toggle('ativo', !lgpd.checked);

  if (
    nome.value.trim() === '' ||
    !validarEmail(email.value.trim()) ||
    telefone.value.trim() === '' ||
    senha.value.trim().length < 4 ||
    !lgpd.checked
  ) {

    valido = false;

  }

  if (!valido) return;

  const emailCadastro =
    email.value.trim();

  const clientes =
    carregarClientes();

  const emailJaCadastrado =
    clientes.some(
      cliente => cliente.email.toLowerCase() === emailCadastro.toLowerCase()
    );

  if (emailJaCadastrado) {

    alternarErroCampo(
      email,
      erroEmail,
      true,
      'Este e-mail já está cadastrado. Use outro e-mail ou entre na sua conta.'
    );

    return;

  }

  const dadosCliente = {
    nome: nome.value.trim(),
    email: emailCadastro,
    telefone: telefone.value.trim(),
    senha: senha.value.trim(),
    pontos: 120,
    lgpd: true
  };

  clientes.push(dadosCliente);

  salvarClientes(clientes);

  clienteAtual = {
    nome: dadosCliente.nome,
    email: dadosCliente.email,
    telefone: dadosCliente.telefone,
    pontos: dadosCliente.pontos,
    lgpd: dadosCliente.lgpd
  };

  salvarClienteAtual();

  atualizarInterfaceCliente();

  mostrarPainelCliente();

  mostrarAvisoAutenticacao('Conta criada com sucesso.');

  formCadastro.reset();

});

formLogin.addEventListener('submit', evento => {

  evento.preventDefault();

  const email =
    document.querySelector('#login-email');

  const senha =
    document.querySelector('#login-senha');

  const erroEmail =
    document.querySelector('.erro-login-email');

  const erroSenha =
    document.querySelector('.erro-login-senha');

  alternarErroCampo(email, erroEmail, !validarEmail(email.value.trim()));
  alternarErroCampo(senha, erroSenha, senha.value.trim() === '');

  if (
    !validarEmail(email.value.trim()) ||
    senha.value.trim() === ''
  ) {

    return;

  }

  const clienteEncontrado =
    buscarClientePorEmail(email.value.trim());

  if (!clienteEncontrado) {

    alternarErroCampo(
      email,
      erroEmail,
      true,
      'E-mail não cadastrado. Crie uma conta antes de entrar.'
    );

    return;

  }

  if (clienteEncontrado.senha !== senha.value.trim()) {

    alternarErroCampo(
      senha,
      erroSenha,
      true,
      'Senha incorreta.'
    );

    return;

  }

  const dadosCliente =
    clienteEncontrado;

  clienteAtual = {
    nome: dadosCliente.nome,
    email: dadosCliente.email,
    telefone: dadosCliente.telefone,
    pontos: dadosCliente.pontos || 0,
    lgpd: dadosCliente.lgpd
  };

  salvarClienteAtual();

  atualizarInterfaceCliente();

  mostrarPainelCliente();

  mostrarAvisoAutenticacao('Login realizado com sucesso.');

  formLogin.reset();

});

botaoSairConta.addEventListener('click', () => {

  clienteAtual = null;

  localStorage.removeItem('raizes_cliente_atual');

  atualizarInterfaceCliente();

  mostrarAvisoAutenticacao('Você saiu da conta.');

  trocarAbaAutenticacao('login');

});

carregarClienteAtual();

atualizarInterfaceCliente();
