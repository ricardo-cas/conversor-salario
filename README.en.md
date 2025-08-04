# Earnings Calculator: Salary Converter and Financial Simulator

## Introduction

This project was born from the need to simplify the complex task of calculating net earnings and planning finances for professionals who receive income in foreign currencies. The **Earnings Calculator** is an interactive web tool, built with HTML, CSS, and JavaScript, that offers a clear and complete view of your financial health, converting salaries in US Dollars (USD) and Euros (€) to Brazilian Reals (BRL) and simulating tax deductions and essential expenses.

## Project Goal

The main objective is to empower the user with a flexible and accurate tool that goes beyond simple currency conversion. The project aims to solve the headache for professionals who need to understand their real net earnings, considering complex taxes and fixed expenses, and to provide a solid foundation for more effective financial planning.

## Pains the Project Solves

*   **Lack of Clarity on Net Earnings:** Many professionals who receive income in foreign currencies struggle to know exactly how much of their gross salary becomes net income after taxes and other expenses.
*   **Complex Manual Calculations:** Taxation for Microenterprises (ME) and Small Businesses (EPP) in Brazil is progressive and depends on accumulated annual revenue, making manual calculations prone to errors.
*   **Outdated Exchange Rates:** Using static exchange rates leads to inaccurate simulations. The tool solves this with automatic updates via an API.
*   **Poor Financial Planning:** By consolidating earnings, taxes, and fixed expenses (like health insurance and INSS) in one place, the project offers a holistic view that facilitates long-term planning.

## Main Features

*   **Real-Time Currency Conversion:** US Dollar (USD) and Euro (€) quotes are updated every 5 minutes through an API (`economia.awesomeapi.com.br`), ensuring accuracy in the results.
*   **Flexible Calculations:** The user can enter the hourly wage or the annual income in USD. The system automatically fills in the complementary field and recalculates all values.
*   **Tax Simulation:** Based on the company type (MEI, ME, EPP) and activity (Commerce, Services), the calculator simulates the annual tax amount and the effective percentage, providing a basis for the Simples Nacional calculation.
*   **Net Earnings Projection:** A dedicated section allows for the inclusion of essential monthly expenses, such as **health insurance** and **INSS** contributions, presenting the final earnings in annual, monthly, weekly, and daily values.
*   **Web Optimization:** The code is responsive, ensuring a great user experience on mobile devices and desktops. Metadata for **SEO and social media sharing** has been added to increase the project's visibility.
*   **Legal Disclaimers:** Disclaimers are displayed to warn the user that the simulations do not replace the advice of an accountant, ensuring the tool's transparency and responsibility.

## Research and Data Used

For the development of this tool, in-depth research was conducted on the tables and rules in effect for the year **2025** in Brazil, including:

*   **Tax Regimes:** Simples Nacional, rates, and brackets for ME, EPP, and MEI.
    *   [Cálculo MEI 2025: Como fazer, descontos, impostos e alíquotas no Simples Nacional](https://www.contabilizei.com.br/contabilidade-online/calculo-mei-simples-nacional/)
    *   [Simples Nacional 2025: tabela, alíquotas e cálculo - MEI - Neon](https://neon.com.br/aprenda/mei/simples-nacional/)
    *   [Tabela Simples Nacional 2025 atualizada e principais mudanças - Cora](https://www.cora.com.br/blog/tabela-simples-nacional-2025/)

*   **INSS Contribution:** Progressive rates and contribution ceiling for employee and self-employed salaries.
    *   [Tabela INSS 2025: contribuição, alíquotas, parcela a deduzir - Contabilizei](https://www.contabilizei.com.br/contabilidade-online/tabela-inss/)
    *   [Teto do INSS sobe para R$ 8.157,40 em 2025 | Agência Brasil](https://agenciabrasil.ebc.com.br/economia/noticia/2025-01/teto-do-inss-sobe-para-r-815740-em-2025)

*   **Health Insurance Costs:** Research on average values by age group (for adults aged 33 and 34 and babies) in different plans.
    *   [Tabela de Preços NotreDame Intermédica em 2025](https://notredameintermedicaplanos.com.br/)
    *   [Tabela de Preço Bradesco Saúde com 50% Desconto](https://saudebradescobr.com.br/tabela-de-preco-bradesco-saude/)

*   **Currency Quote API:** Integration with the Awesome API to ensure updated exchange rate data.
    *   [API de Cotações de Moedas - Awesome API](https://docs.awesomeapi.com.br/api-de-moedas)

This project is proof of the ability to combine programming, research, and design to create practical solutions that meet real needs.
