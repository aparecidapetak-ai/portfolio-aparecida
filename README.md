# Portfólio pessoal — Aparecida Petak

**Aluna:** Aparecida Petak

## Descrição
Portfólio acadêmico com apresentação pessoal, projetos disponíveis no GitHub, habilidades e contato pelo perfil do GitHub. Criado para apresentar minha formação e meus estudos em Desenvolvimento de Sistemas.

## Site publicado
**Pendente de publicação no GitHub Pages.** Depois de publicar, substitua esta frase pelo endereço real exibido em Settings → Pages. Não entregue a atividade com este campo pendente.

## Tecnologias utilizadas
- HTML5: estrutura e conteúdo.
- CSS3: personalização, cores, responsividade e animação dos cartões.
- Bootstrap 5.3.3: grade responsiva, cartões, botões e menu recolhível no celular.
- JavaScript: filtro dos projetos e atualização da contagem.
- GitHub e GitHub Pages: repositório e publicação, após o envio dos arquivos.

## Funcionamento
O menu leva às seções Perfil, Projetos, Habilidades e Contato. Cada cartão possui um link para o repositório correspondente, aberto em outra aba. Os botões acima dos cartões permitem filtrar os projetos por categoria. Em telas pequenas, o Bootstrap transforma o menu em um botão expansível. O contato leva ao perfil real do GitHub; não há formulário de envio de mensagens.

## Recursos novos e implementação
1. **Filtro interativo de projetos:** cada cartão tem um atributo `data-category`. Os botões têm `data-filter`. O arquivo `script.js` escuta cliques e usa `hidden` para ocultar os cartões que não correspondem à seleção. Também atualiza `aria-pressed` e a contagem de resultados, permitindo que leitores de tela anunciem a mudança.
2. **Efeito nos cartões:** o arquivo `style.css` utiliza `transition`, `transform: translateY(-6px)` e `box-shadow` nos estados `:hover` e `:focus-within`. A regra `prefers-reduced-motion` desativa o movimento quando solicitado pelo dispositivo.
3. **Seção Habilidades:** nova seção HTML com formação e conhecimentos em desenvolvimento.

Como a base da aula não foi fornecida, confirme quais destes recursos são novos em relação ao conteúdo apresentado pelo professor.

## Arquivos
- `index.html`: página principal.
- `style.css`: aparência personalizada.
- `script.js`: filtro dos cartões.
- `COMO-PUBLICAR.txt`: instruções de publicação para a aluna.

## Projetos e links
Os endereços foram copiados do documento “Meu Portifolio”. A consulta externa aos repositórios não ficou disponível durante a criação; confira cada botão antes da entrega. As descrições dos projetos já conhecidos seguem os exercícios realizados. Os demais usam descrições gerais, sem presumir a tecnologia utilizada.

| Projeto | Repositório |
| --- | --- |
| Desconto progressivo | https://github.com/aparecidapetak-ai/cdesconto-progressivo |
| Consumo de água | https://github.com/aparecidapetak-ai/consumo-agua |
| Pesquisa TudoWeb | https://github.com/aparecidapetak-ai/pesquisa-tudoweb |
| Portal de Entretenimento | https://github.com/aparecidapetak-ai/Meu-Portal-de-Entretenimento-Digital |
| Primeiro projeto | https://github.com/aparecidapetak-ai/primeiro-projeto |
| Monitoramento de reservatório | https://github.com/aparecidapetak-ai/monitoramento-reservatorio |
| Meus sites favoritos | https://github.com/aparecidapetak-ai/meus-sites-favoritos |

O oitavo endereço do documento, `aparecidapetak-ai/aparecidapetak-ai`, é usado como referência de perfil na seção Contato, sem ser apresentado como um projeto adicional.

## Executar no computador
Extraia o ZIP e abra `index.html` no navegador. Mantenha os arquivos na mesma pasta. É necessária conexão com a internet para carregar o Bootstrap pela CDN. Os programas Python são apresentados por links; não são executados dentro do portfólio.

## Publicação e entrega
Siga `COMO-PUBLICAR.txt`. Depois, registre acima o link real do site publicado e envie à atividade os dois endereços: repositório e site.
