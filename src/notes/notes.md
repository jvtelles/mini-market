#### Componentes:

ScrollView - Renderiza todos os componentes tudo de uma ve, mesmo que nao apareca na tela. Má desempenho.

Flatlist - Renderiza os itens lentamente, quando eles estao prestes a aparecer, e remove os itens que rolam para fora da tela para economizar memória e tempo de processamento. Mais leve se a lista for grande. Poupa memória e processamento.


### Ferramentas :

NPM - Node packages manager - Instala e gerencia pacotes no projeto

Npx - Executa um pacote que está instalado, baixa temporariamente para rodar, sem instalar de verdade. Executa sem instalar.


### Variável
- Armazena um valor que pode ser utilizado e manipulado durante a execução do código.
- Alterar seu valor não provoca, por si só, uma nova renderização no React.

### Estado (State)
- Armazena um valor que o componente precisa acompanhar.
- É reativo: quando atualizado corretamente, provoca uma nova renderização da interface.
- Permite que a interface reflita os valores atualizados.
- Pode ser utilizado em diferentes funções e partes do componente.

uma variável armazena um valor e um State armazena um valor que o React acompanha para atualizar a interface quando necessário.


### DOM (Document Object Model)
- Representação estruturada de um documento HTML em forma de árvore.
- Permite que o JavaScript acesse e manipule elementos da página.
- É utilizado pelo navegador.

### Virtual DOM
- Representação da interface mantida em memória pelo React.
- Permite identificar diferenças entre versões da interface.
- O React utiliza essas diferenças para determinar quais atualizações são necessárias.
- Não é o DOM real do navegador.

**Resumo:** 
-DOM é a estrutura da página no navegador.
- Virtual DOM é a representação usada pelo React para identificar mudanças na interface.


