import { Locales } from "../Languages";

const LEVEL_DESCRIPTIONS = [
  <>
    <p>The <i>font-family</i> property specifies the font for an element.</p>
    <p>It can be a real font, such as 'Times' or 'Arial', or a generic font, such as 'serif', 'sans-serif', or 'cursive'.</p>
  </>,
  <p>The <i>color</i> property is pretty straight forward: it allows you to change the font color.</p>,
  <p>The <i>font-size</i> property is also one of the most common ones, it is used to change the size of the letters in your text.</p>,
  <>
    <p>The <i>text-transform</i> property allows you to change the case of the text, without changing the text itself.</p>
    <p>This removes the necessity to use a <i>.toUpperCase()</i> on JavaScript for example.</p>
  </>,
  <>
    <p>The <i>font-kerning</i> property is not very famous but can fix a very annoying bug that we find sometimes.</p>
    <p>It controls the usage of the kerning information stored in a font, which is the space some letters overlap one another in some fonts.</p>
  </>,
  <p>The <i>font-variant-caps</i> property is how you can use the <i>small caps</i> from the font you are using, which is tipically a form of the uppercase letters, but reduced in size.</p>,
  <p>The <i>font-weight</i> property allows you to change the weight of a text, making it bolder or lighter.</p>,
  <p>The <i>font-style</i> property is a way to changing the style, allowing you to set it to italic, for example.</p>,
  <p>The <i>text-decoration</i> property may have a broad naming, but it can be mostly used to add a line under/over/through the text.</p>,
  <p>The <i>letter-spacing</i> property allows you to change the spacing between each character of your text.</p>,
  <p>The <i>word-spacing</i> property, on the other hand, allows you to change the space between each word of the text, and not each character.</p>,
  <p>The <i>line-height</i> property lets you define the height of each line of the text.</p>,
  <p>The <i>text-indent</i> property is how you can add an identation to your text only on the first line.</p>,
  <>
    <p>The <i>text-align</i> property is how you can change the alignment of your text.</p>
    <p>This property allows you to align on the <i>left</i>, <i>right</i>, <i>center</i> or <i>justify</i> your text.</p>
  </>,
  <p>The <i>text-shadow</i> property is the way of adding a shadow to your text. It works similarly to the <i>box-shaddow</i> property.</p>,
  <>
    <p>The <i>text-overflow</i> property is how you add the a proper content for the overflowing text.</p>
    <p>This must be used with the <i>overflow: hidden</i> and <i>white-space: nowrap</i> to have any effect, but will allow you to use a proper ellipsis on the overflow text without the necessity of any JavaScript parsing.</p>
  </>,
  <p>The <i>direction</i> property will define in which direction the text goes, being it <i>ltr</i> (left to right) or <i>rtl</i> (right to left).</p>,
  <>
    <p>The <i>text-emphasis</i> property allows you to add emphasis on each character of the text.</p>
    <p>This property enables using <i>circle</i>, <i>triangle</i>, a character, and even define it's color.</p>
  </>,
  <p>The <i>writing-mode</i> property will give you the chance to change the flow of the text from horizontal to vertical.</p>,
  <>
    <p>The <i>text-orientation</i> property only affects vertical texts, and it's the way of deciding the direction of each character.</p>
    <p>With this, you'll be able to have the text of vertical without rotating the characters.</p>
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
