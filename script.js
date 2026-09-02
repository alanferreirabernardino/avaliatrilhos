// ==========================================
// 1. BANCO DE DADOS DE ESTAÇÕES POR LINHA
// ==========================================
const estacoesPorLinha = {
    linha1: [
        "Tucuruvi", "Parada Inglesa", "Jardim São Paulo-Ayrton Senna", "Santana", "Carandiru", 
        "Portuguesa-Tietê", "Armênia", "Tiradentes", "Luz", "São Bento", "Sé", "Japão-Liberdade", 
        "São Joaquim", "Vergueiro", "Paraíso", "Ana Rosa", "Vila Mariana", "Santa Cruz", 
        "Praça da Árvore", "Saúde", "São Judas", "Conceição", "Jabaquara"
    ],
    linha2: [
        "Vila Madalena", "Sumaré", "Clínicas", "Paulista", "Consolação", "Trianon-Masp", 
        "Brigadeiro", "Paraíso", "Ana Rosa", "Chácara Klabin", "Santos-Imigrantes", "Alto do Ipiranga", 
        "Sacomã", "Tamanduateí", "Vila Prudente"
    ],
    linha3: [
        "Palmeiras-Barra Funda", "Marechal Deodoro", "Santa Cecília", "República", "Anhangabaú", 
        "Sé", "Pedro II", "Brás", "Bresser-Mooca", "Belém", "Tatuapé", "Carrão-Assaí Atacadista", 
        "Penha-Besni", "Vila Matilde", "Guilhermina-Esperança", "Patriarca-Vila Ré", 
        "Artur Alvim", "Corinthians-Itaquera"
    ],
    linha4: [
        "Luz", "República", "Higienópolis-Mackenzie", "Paulista", "Oscar Freire", 
        "Fradique Coutinho", "Faria Lima", "Pinheiros", "São Paulo-Morumbi", "Vila Sônia"
    ],
    linha5: [
        "Capão Redondo", "Campo Limpo", "Vila das Belezas", "Giovanni Gronchi", "Santo Amaro", 
        "Largo Treze", "Adolfo Pinheiro", "Alto da Boa Vista", "Borba Gato", "Brooklin", 
        "Campo Belo", "Eucaliptos", "Moema", "AACD-Servidor", "Hospital São Paulo", 
        "Santa Cruz", "Chácara Klabin"
    ],
    linha6: [
        "Brasilândia", "Vila Cardoso", "Itaberaba-Hospital Vila Penteado", "João Paulo I", 
        "Freguesia do Ó", "Santa Marina", "Água Branca", "SESC-Pompéia", "Perdizes", 
        "PUC-Cardoso de Almeida", "FAAP-Pacaembu", "Higienópolis-Mackenzie", "14 de Bis", 
        "Bela Vista", "São Joaquim"
    ],
    linha7: [
        "Jundiaí", "Várzea Paulista", "Campo Limpo Paulista", "Botujuru", "Francisco Morato", 
        "Baltazar Fidélis", "Franco da Rocha", "Caieiras", "Perus", "Vila Aurora", "Jaraguá", 
        "Vila Clarice", "Pirituba", "Piqueri", "Lapa", "Água Branca", "Palmeiras-Barra Funda"
    ],
    linha8: [
        "Júlio Prestes", "Palmeiras-Barra Funda", "Lapa", "Domingos de Moraes", "Imperatriz Leopoldina", 
        "Presidente Altino", "Osasco", "Comandante Sampaio", "Quitaúna", "General Miguel Costa", 
        "Carapicuíba", "Santa Terezinha", "Antonio João", "Barueri", "Jardim Belval", "Jardim Silveira", 
        "Jandira", "Sagrado Coração", "Engenheiro Cardoso", "Itapevi"
    ],
    linha9: [
        "Osasco", "Presidente Altino", "Ceasa", "Vila Lobos-Jaguaré", "Cidade Universitária", 
        "Pinheiros", "Hebraica-Jubran", "Cidade Jardim", "Vila Olímpia", "Berrini", 
        "Morumbi", "Granja Julieta", "Santo Amaro", "Socorro", "Jurubatuba", "Autódromo", 
        "Primavera-Interlagos", "Grajaú", "Mendes-Vila Natal"
    ],
    linha10: [
        "Brás", "Juventus-Mooca", "Ipiranga", "Tamanduateí", "São Caetano do Sul-Prefeito Walter Braido", 
        "Utinga", "Prefeito Saladino", "Santo André-Prefeito Celso Daniel", "Capuava", 
        "Mauá", "Guapituba", "Ribeirão Pires-Vicente Matheus", "Rio Grande da Serra"
    ],
    linha11: [
        "Luz", "Brás", "Tatuapé", "Corinthians-Itaquera", "Dom Bosco", "José Bonifácio", 
        "Guaianases", "Antonio Gianetti Neto", "Ferraz de Vasconcelos", "Poá", "Calmon Viana", 
        "Suzano", "Jundiapeba", "Braz Cubas", "Mogi das Cruzes", "Estudantes"
    ],
    linha12: [
        "Brás", "Tatuapé", "Engenheiro Goulart", "USP Leste", "Comendador Ermelino", 
        "São Miguel Paulista", "Jardim Helena-Vila Mara", "Itaquaquecetuba", "Aracaré", 
        "Calmon Viana"
    ],
    linha13: [
        "Engenheiro Goulart", "Guarulhos-CECAP", "Aeroporto-Guarulhos"
    ],
    linha15: [
        "Vila Prudente", "Oratório", "São Lucas", "Camilo Haddad", "Vila Tolstói", 
        "Vila União", "Jardim Planalto", "Sapopemba", "Fazenda da Juta", "São Mateus", 
        "Jardim Colonial"
    ],
    linha17: [
        "Washington Luís", "Aeroporto de Congonhas", "Brooklin Paulista", "Vereador José Diniz", 
        "Campo Belo", "Vila Cordeiro", "Chucri Zaidan", "Morumbi"
    ]
};

// ==========================================
// 2. CORES OFICIAIS (PARA HEADER E BOTÃO)
// ==========================================
const coresPorLinha = {
    linha1: "#0033a0",  // Azul
    linha2: "#007a33",  // Verde
    linha3: "#ee3124",  // Vermelha
    linha4: "#ffbf00",  // Amarela
    linha5: "#9b26b6",  // Lilás
    linha6: "#ff6a00",  // Laranja
    linha7: "#a6192e",  // Rubi
    linha8: "#808080",  // Diamante
    linha9: "#00a88f",  // Esmeralda
    linha10: "#00a3e0", // Turquesa
    linha11: "#f37021", // Coral
    linha12: "#002f6c", // Safira
    linha13: "#00b140", // Jade
    linha15: "#848484", // Prata
    linha17: "#c89d28"  // Ouro
};

// ==========================================
// 3. CORES DE FUNDO PASTÉIS/SUAVES (PARA O BODY)
// ==========================================
const coresFundoSuave = {
    linha1: "#e8effd",  // Azul pastel
    linha2: "#e6f4ea",  // Verde pastel
    linha3: "#fce8e6",  // Vermelho pastel
    linha4: "#fef8e7",  // Amarelo pastel
    linha5: "#f3e8f8",  // Lilás pastel
    linha6: "#fff0e6",  // Laranja pastel
    linha7: "#f8e6e8",  // Rubi pastel
    linha8: "#f0f0f0",  // Cinza/Diamante
    linha9: "#e6f7f5",  // Esmeralda pastel
    linha10: "#e6f5fc", // Turquesa pastel
    linha11: "#fceee6", // Coral pastel
    linha12: "#e6ecf5", // Safira pastel
    linha13: "#e6f8ec", // Jade pastel
    linha15: "#f1f1f1", // Prata pastel
    linha17: "#f8f3e6"  // Ouro pastel
};

// ==========================================
// 4. LÓGICA DE INTERAÇÃO COM O DOM
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const selectLinha = document.getElementById("linha");
    const selectEstacao = document.getElementById("estacao");
    const header = document.querySelector("header");
    const btnSubmit = document.querySelector('button[type="submit"]');

    if (!selectLinha || !selectEstacao) {
        console.error("Elementos do formulário não foram encontrados!");
        return;
    }

    selectLinha.addEventListener("change", function () {
        const linhaSelecionada = selectLinha.value;

        // Limpa as opções do menu de estações
        selectEstacao.innerHTML = "";

        if (linhaSelecionada && estacoesPorLinha[linhaSelecionada]) {
            // Cria a opção neutra inicial
            const opcaoPadrao = document.createElement("option");
            opcaoPadrao.text = "Selecione a estação...";
            opcaoPadrao.value = "";
            selectEstacao.appendChild(opcaoPadrao);

            // Preenche o menu com as estações da linha
            estacoesPorLinha[linhaSelecionada].forEach(function (estacao) {
                const opcao = document.createElement("option");
                opcao.value = estacao;
                opcao.text = estacao;
                selectEstacao.appendChild(opcao);
            });

            // 1. Aplica a cor marcante no Header e no Botão
            if (coresPorLinha[linhaSelecionada]) {
                const corLinha = coresPorLinha[linhaSelecionada];
                
                header.style.backgroundColor = corLinha;
                if (btnSubmit) btnSubmit.style.backgroundColor = corLinha;

                // Contraste para linhas com fundo claro
                if (linhaSelecionada === "linha4" || linhaSelecionada === "linha6" || linhaSelecionada === "linha15") {
                    header.style.color = "#1e293b";
                    if (btnSubmit) btnSubmit.style.color = "#1e293b";
                } else {
                    header.style.color = "#ffffff";
                    if (btnSubmit) btnSubmit.style.color = "#ffffff";
                }
            }

            // 2. Aplica a cor pastel/suave no fundo da página (body)
            if (coresFundoSuave[linhaSelecionada]) {
                document.body.style.backgroundColor = coresFundoSuave[linhaSelecionada];
            }

        } else {
            // Se voltar para "Selecione uma linha..."
            const opcaoVazia = document.createElement("option");
            opcaoVazia.text = "Selecione uma linha primeiro...";
            opcaoVazia.value = "";
            selectEstacao.appendChild(opcaoVazia);

            // Restaura as cores padrão do sistema
            header.style.backgroundColor = "#0033a0";
            header.style.color = "#ffffff";
            document.body.style.backgroundColor = "#f4f6f8"; // Fundo cinza claro padrão
            
            if (btnSubmit) {
                btnSubmit.style.backgroundColor = "#0033a0";
                btnSubmit.style.color = "#ffffff";
            }
        }
    });
});