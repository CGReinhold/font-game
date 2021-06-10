import { Locales } from "../Languages";

const LEVEL_DESCRIPTIONS = [
  <>
    <p>A propriedade <i>font-family</i> é utilizada para especificar a fonte de um elemento.</p>
    <p>Pode-se usar o nome de uma fonte, como 'Times' ou 'Arial', ou uma fonte genérica, como 'serif', 'sans-serif' ou 'cursive'.</p>
  </>,
  <p>A propriedade <i>color</i> é bastante intuitiva: permite alterar a cor do texto.</p>,
  <p>A propriedade <i>font-size</i> também é uma das mais comuns, é utilizada para alterar o tamanho das letras no seu texto.</p>,
  <>
    <p>A propriedade <i>text-transform</i> permite que você altere a "caixa" do texto, entre maiúsculas ou minúsculas, por exemplo, sem mudar o texto em si.</p>
    <p>Essa propriedade remove a necessidade de utilizar a função <i>.toUpperCase()</i> no JavaScript por exemplo.</p>
  </>,
  <>
    <p>A propriedade <i>font-kerning</i> não é tão famosa, mas pode resolver um problema chato que encontramos as vezes.</p>
    <p>Ela controla o uso da informação de kerning contida nas fontes, que é por sua vez o expaço em que uma letra sobrepões a outra.</p>
  </>,
  <p>A propriedade <i>font-variant-caps</i> é como você pode usar o <i>small caps</i> da fonte que está utilizando, na qual é tipicamente uma forma das letras em maiúsculo, mas reduzidas em tamanho.</p>,
  <p>A propriedade <i>font-weight</i> permite mudar a largura das letras, deixando-as mais ou menos negrito.</p>,
  <p>A propriedade <i>font-style</i> é uma forma de alterar o estilo da fonte, permitindo deixá-la em itálico ou mais obliqua, por exemplo.</p>,
  <p>A propriedade <i>text-decoration</i> pode ter um nome genérico, mas é utilizado principalmente para adicionar sublinhado, ou texto sobre o texto.</p>,
  <p>A propriedade <i>letter-spacing</i> permite alterar o espaçamento entre cada caractere do seu texto.</p>,
  <p>A propriedade <i>word-spacing</i>, por outro lado, permite você alterar o espaço entre cada palavra do texto, e não cada caractere.</p>,
  <p>A propriedade <i>line-height</i> permite você alterar a altura de cada linha do texto.</p>,
  <p>A propriedade <i>text-indent</i> é como você pode adicionar uma identação ao seu texto na primeira linha.</p>,
  <>
    <p>A propriedade <i>text-align</i> é como você pode alterar o alinhamento de seu texto.</p>
    <p>Esta propriedade permite você alinhar seu texto na esquerda (<i>left</i>), direita (<i>right</i>), centro (<i>center</i>) ou justificado (<i>justify</i>).</p>
  </>,
  <p>A propriedade <i>text-shadow</i> é uma forma de adicionar sombra no seu texto. Funciona de forma similar a propriedade <i>box-shaddow</i>.</p>,
  <>
    <p>A propriedade <i>text-overflow</i> é como você consegue ajustar o conteúdo corretamente em textos que excedem o tamanho permitido.</p>
    <p>Esta propriedade deve ser utilizada juntamente com <i>overflow: hidden</i> and <i>white-space: nowrap</i> para ter efeito, e permitirá você utilizar reticências no texto excedido sem a necessidade de utilizar JavaScript.</p>
  </>,
  <p>A propriedade <i>direction</i> irá definir qual a direção o texto segue, sendo <i>ltr</i> (esquerda para direita) ou <i>rtl</i> (direita para esquerda).</p>,
  <>
    <p>A propriedade <i>text-emphasis</i> permite você adicionar ênfase em cada caractere do texto.</p>
    <p>Ela habilita você a usar <i>círculos</i>, <i>triangulos</i>, ou qualquer caractere, e até definir sua cor.</p>
  </>,
  <p>A propriedade <i>writing-mode</i> te dará a chance de alterar como o fluxo de texto é disposto, alterando entre horizontal e vertical.</p>,
  <>
    <p>A propriedade <i>text-orientation</i> irá afetar apenas textos na vertical e é uma forma de decidir a direção de cada caractere.</p>
    <p>Com isso você poderá ter seu texto na vertical sem ter os caracteres rotacionados.</p>
  </>,
];

const MOBILE_WARNING = 'Este jogo pode não funcionar muito bem em dispositivos móveis. Tente jogá-lo em um desktop.';

const NO_LEVEL_DESCRIPTION = 'Este é um jogo sobre atributos de fontes no CSS. Você consegue adivinhar os atributos corretos para atualizar o estado do texto ao lado?';

const PHRASE = `Será que fui eu que mudei à noite? Deixe-me pensar: eu era a mesma quando me levantei hoje de manhã? Estou quase achando que posso me lembrar de me sentir um pouco diferente. Mas se eu não sou a mesma, a próxima pergunta é: "Quem é que eu sou?". Ah, este é o grande enigma!`;

const pt: Locales = {
  LEVEL_DESCRIPTIONS,
  MOBILE_WARNING,
  NO_LEVEL_DESCRIPTION,
  START_BUTTON: 'Iniciar',
  NEXT_BUTTON: 'Próximo',
  CHECK_BUTTON: 'Verificar',
  GIVE_SOLUTION_BUTTON: 'Quero a resposta',
  YOU_WON: 'Você venceu!',
  WAS_WRONG: 'Você errou. Tente novamente.',
  CHANGE_STYLE: 'Tente mudar o estilo para que o texto fique assim',
  HOVER_TO_SEE: 'Passe o mouse por cima para ver a versão anterior',
  PHRASE,
};

export default pt;
