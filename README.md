# Calculadora de Ganhos: Conversor de Salário e Simulador Financeiro

## Introdução

Este projeto nasceu da necessidade de simplificar a complexa tarefa de calcular ganhos líquidos e planejar finanças para profissionais que recebem em moedas estrangeiras. A **Calculadora de Ganhos** é uma ferramenta web interativa, construída com HTML, CSS e JavaScript, que oferece uma visão clara e completa da sua saúde financeira, convertendo salários em Dólar (USD) e Euro (€) para Real (BRL) e simulando descontos de impostos e despesas essenciais.

## Objetivo do Projeto

O principal objetivo é capacitar o usuário com uma ferramenta flexível e precisa, que vai além de uma simples conversão de moedas. O projeto se propõe a resolver a dor de cabeça de profissionais que precisam entender seus ganhos líquidos reais, considerando impostos complexos e despesas fixas, e a oferecer uma base sólida para um planejamento financeiro mais eficaz.

## Dores que o Projeto Resolve

* **Falta de Clareza sobre Ganhos Líquidos:** Muitos profissionais que recebem em moedas estrangeiras têm dificuldade em saber exatamente quanto do seu salário bruto se transforma em líquido, após impostos e outras despesas.
* **Cálculos Manuais Complexos:** A tributação para Microempresas (ME) e Empresas de Pequeno Porte (EPP) no Brasil é progressiva e depende do faturamento anual acumulado, tornando os cálculos manuais propensos a erros.
* **Taxas de Câmbio Desatualizadas:** Utilizar taxas de câmbio estáticas leva a simulações imprecisas. A ferramenta resolve isso com atualizações automáticas via API.
* **Planejamento Financeiro Deficiente:** Ao consolidar ganhos, impostos e despesas fixas (como plano de saúde e INSS) em um só lugar, o projeto oferece uma visão holística que facilita o planejamento de longo prazo.

## Funcionalidades Principais

* **Conversão de Moedas em Tempo Real:** As cotações de Dólar (USD) e Euro (€) são atualizadas a cada 5 minutos através de uma API (`economia.awesomeapi.com.br`), garantindo precisão nos resultados.
* **Cálculos Flexíveis:** O usuário pode inserir o valor do salário por hora ou o ganho anual em USD. O sistema preenche automaticamente o campo complementar e recalcula todos os valores.
* **Simulação de Tributação:** Baseado no tipo de empresa (MEI, ME, EPP) e na atividade (Comércio, Serviços), a calculadora simula o valor de impostos anuais e a porcentagem efetiva, fornecendo uma base para o cálculo do Simples Nacional.
* **Projeção de Ganhos Líquidos:** Uma seção dedicada permite incluir despesas mensais essenciais, como o **plano de saúde** e a contribuição para o **INSS**, apresentando os ganhos finais em valores anuais, mensais, semanais e diários.
* **Otimização para Web:** O código é responsivo, garantindo uma ótima experiência de uso em dispositivos móveis e desktops. Metadados para **SEO e compartilhamento em redes sociais** foram adicionados para aumentar a visibilidade do projeto.
* **Avisos Legais:** Disclaimers são exibidos para alertar o usuário que as simulações não substituem a consultoria de um contador, garantindo a transparência e a responsabilidade da ferramenta.

## Pesquisas e Dados Utilizados

Para a construção desta ferramenta, foram realizadas pesquisas aprofundadas sobre as tabelas e regras vigentes para o ano de **2025** no Brasil, incluindo:

* **Regimes Tributários:** Simples Nacional, alíquotas e faixas para ME, EPP e MEI.
    * [Cálculo MEI 2025: Como fazer, descontos, impostos e alíquotas no Simples Nacional](https://www.contabilizei.com.br/contabilidade-online/calculo-mei-simples-nacional/)
    * [Simples Nacional 2025: tabela, alíquotas e cálculo - MEI - Neon](https://neon.com.br/aprenda/mei/simples-nacional/)
    * [Tabela Simples Nacional 2025 atualizada e principais mudanças - Cora](https://www.cora.com.br/blog/tabela-simples-nacional-2025/)

* **Contribuição INSS:** Alíquotas progressivas e teto de contribuição para salários de empregados e autônomos.
    * [Tabela INSS 2025: contribuição, alíquotas, parcela a deduzir - Contabilizei](https://www.contabilizei.com.br/contabilidade-online/tabela-inss/)
    * [Teto do INSS sobe para R$ 8.157,40 em 2025 | Agência Brasil](https://agenciabrasil.ebc.com.br/economia/noticia/2025-01/teto-do-inss-sobe-para-r-815740-em-2025)

* **Custos de Plano de Saúde:** Pesquisa de valores médios por faixa etária (para adultos de 33 e 34 anos e bebês) em diferentes planos.
    * [Tabela de Preços NotreDame Intermédica em 2025](https://notredameintermedicaplanos.com.br/)
    * [Tabela de Preço Bradesco Saúde com 50% Desconto](https://saudebradescobr.com.br/tabela-de-preco-bradesco-saude/)

* **API de Cotação de Moedas:** Integração com a API do Awesome API para garantir dados de câmbio atualizados.
    * [API de Cotações de Moedas - Awesome API](https://docs.awesomeapi.com.br/api-de-moedas)

Este projeto é uma prova da capacidade de combinar programação, pesquisa e design para criar soluções práticas que atendem a necessidades reais.
