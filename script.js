// 1. BANCO DE DADOS DAS ESTAÇÕES POR LINHA
const estacoesPorLinha = {
    linha1: ["Jabaquara", "Conceição", "São Judas", "Saúde", "Praça da Árvore", "Santa Cruz", "Vila Mariana", "Ana Rosa", "Paraíso", "Vergueiro", "São Joaquim" "Sé", "Luz", "Tucuruvi"],
    linha2: ["Vila Madalena", "Consolação", "Brigadeiro", "Ana Rosa", "Tamanduateí", "Vila Prudente"],
    linha3: ["Corinthians-Itaquera", "Tatuapé", "Brás", "Sé", "República", "Palmeiras-Barra Funda"],
    linha4: ["Luz", "República", "Paulista", "Fradique Coutinho", "Pinheiros", "São Paulo - Morumbi", "Vila Sônia"],
    linha5: ["Capão Redondo", "Santo Amaro", "Largo Treze", "Eucaliptos", "Moema", "Chácara Klabin"],
    linha6: ["Brasilândia", "Freguesia do Ó", "Perdizes", "PUC-Cardoso de Almeida", "São Joaquim"],
    linha7: ["Jundiaí", "Francisco Morato", "Franco da Rocha", "Caieiras", "Perus", "Palmeiras-Barra Funda"],
    linha8: ["Jandira", "Barueri", "Carapicuíba", "Osasco", "Domingos de Moraes", "Júlio Prestes"],
    linha9: ["Osasco", "Pinheiros", "Vila Olímpia", "Santo Amaro", "Grajaú", "Bruno Covas/Mendes-Vila Natal"],
    linha10: ["Rio Grande da Serra", "Ribeirão Pires", "Santo André", "São Caetano do Sul", "Tamanduateí", "Brás"],
    linha11: ["Estudantes", "Mogi das Cruzes", "Suzano", "Guaianases", "Tatuapé", "Luz"],
    linha12: ["Calmon Viana", "Itaquaquecetuba", "Engenheiro Goulart", "Tatuapé", "Brás"],
    linha13: ["Aeroporto-Guarulhos", "Guarulhos-CECAP", "Engenheiro Goulart"],
    linha17: ["Washington Luís", "Aeroporto de Congonhas", "Brooklin Paulista", "Morumbi"]
};

// 2. MAPEAMENTO DAS CORES DAS LINHAS
const coresPorLinha = {
    linha1: "var(--linha-1-azul)",
    linha2: "var(--linha-2-verde)",
    linha3: "var(--linha-3-vermelha)",
    linha4: "var(--linha-4-amarela)",
    linha5: "var(--linha-5-lilas)",
    linha6: "#ff6a00", // Laranja
    linha7: "var(--linha-7-rubi)",
    linha8: "#808080", // Diamante/Cinza
    linha9: "#00a88f", // Esmeralda
    linha10: "#00a3e0", // Turquesa
    linha11: "var(--linha-11-coral)",
    linha12: "#002f6c", // Safira
    linha13: "#00b140", // Jade
    linha17: "#c89d28"  // Ouro
};

// 3. CAPTURA DOS ELEMENTOS DO HTML
const selectLinha = document.getElementById("linha");
const selectEstacao = document.getElementById("estacao");
const header = document.querySelector("header");

// 4. EVENTO: QUANDO O USUÁRIO MUDA A LINHA
selectLinha.addEventListener("change", function () {
    const linhaSelecionada = selectLinha.value;

    // A. Limpa as opções anteriores da lista de estações
    selectEstacao.innerHTML = "";

    if (linhaSelecionada && estacoesPorLinha[linhaSelecionada]) {
        // Habilita a lista de estações
        selectEstacao.disabled = false;

        // Opção padrão
        const opcaoPadrao = document.createElement("option");
        opcaoPadrao.text = "Selecione a estação...";
        opcaoPadrao.value = "";
        selectEstacao.appendChild(opcaoPadrao);

        // Preenche com as estações da linha escolhida
        estacoesPorLinha[linhaSelecionada].forEach(function (estacao) {
            const opcao = document.createElement("option");
            opcao.value = estacao;
            opcao.text = estacao;
            selectEstacao.appendChild(opcao);
        });

        // B. Altera a cor do fundo do Cabeçalho para a cor da linha!
        if (coresPorLinha[linhaSelecionada]) {
            header.style.backgroundColor = coresPorLinha[linhaSelecionada];
            
            // Ajusta a cor do texto para linhas claras como a Amarela
            if (linhaSelecionada === "linha4" || linhaSelecionada === "linha6") {
                header.style.color = "#1e293b";
            } else {
                header.style.color = "#ffffff";
            }
        }

    } else {
        // Se nenhuma linha estiver selecionada
        const opcaoVazia = document.createElement("option");
        opcaoVazia.text = "Selecione uma linha primeiro...";
        opcaoVazia.value = "";
        selectEstacao.appendChild(opcaoVazia);
        selectEstacao.disabled = true;

        // Volta a cor padrão do cabeçalho (Azul)
        header.style.backgroundColor = "var(--linha-1-azul)";
        header.style.color = "#ffffff";
    }
});