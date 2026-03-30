const numeroWhatsApp = "5516996540954";

        const produtos = [
            {
                titulo: "Honda Biz 110i 2022",
                lote: "Lote #1001",
                lanceInicial: 800,
                lanceAtual: 800,
                lanceMinimo: 100,
                usuario: "José Silva",
                local: "São Paulo, SP",
                descricao: `
<p><strong>Honda Biz 110i 2022/2022</strong></p>
<p>Moto em bom estado, liga e dá partida normalmente.</p>
<p><strong>Informações:</strong></p>
<ul>
    <li>Combustível: Gasolina</li>
    <li>Quilometragem: 73.272 km</li>
    <li>IPVA: Pago</li>
    <li>Chaves: Com chave</li>
    <li>Placa: J*****7</li>
</ul>
`,
                fotos: ["biz1.png", "biz2.png", "biz3.png", "biz4.png", "biz5.png"],
                opcoesLance: [800, 900, 1000, 1200, 1500, 2000]
            },
            {
                titulo: "Fiat Palio 2005",
                lote: "Lote #1002",
                lanceInicial: 3000,
                lanceAtual: 3000,
                lanceMinimo: 100,
                usuario: "Maria Santos",
                local: "Valinhos, SP",
                descricao: `
<p><strong>Fiat Palio 2005</strong></p>
<p>Veículo em bom estado de funcionamento, bom de andar.</p>
<p><strong>Informações:</strong></p>
<ul>
    <li>Parte mecânica revisada (óleo, batentes, homocinética, entre outros)</li>
    <li>IPVA: Pago</li>
    <li>Chave canivete</li>
    <li>Direção</li>
    <li>Trava elétrica</li>
</ul>
`,
                fotos: ["palio2019.png"],
                opcoesLance: [3000, 3500, 4000, 4500, 5000, 6000]
            },
            {
                titulo: "Fiat Palio",
                lote: "Lote #1003",
                lanceInicial: 5500,
                lanceAtual: 5500,
                lanceMinimo: 100,
                usuario: "Pedro Costa",
                local: "Curitiba, PR",
                descricao: `
<p><strong>Fiat Palio</strong></p>
<p>Veículo vendido no estado em que se encontra, destinado a circulação.</p>
<p><strong>Informações:</strong></p>
<ul>
    <li>Documento (DUT): Em mãos</li>
    <li>Documentação: Aproximadamente R$ 3.000</li>
    <li>IPVA: Pago</li>
    <li>Mecânica em bom funcionamento</li>
    <li>Motor em bom estado</li>
    <li>Suspensão em boas condições</li>
    <li>Pneus em bom estado</li>
    <li>Parte elétrica funcionando</li>
    <li>Marcador de combustível funcionando</li>
    <li>Veículo bateu e pegou</li>
    <li>Detalhe: Necessita reposição do vidro traseiro</li>
</ul>
`,
                fotos: ["palio4300.png", "IMG-20260208-WA0009.png", "IMG-20260208-WA0010.jpg", "IMG-20260208-WA0011.jpg"],
                opcoesLance: [5500, 6000, 6500, 7000, 8000, 9000]
            },
            {
                titulo: "Chevrolet Corsa",
                lote: "Lote #1004",
                lanceInicial: 4000,
                lanceAtual: 4000,
                lanceMinimo: 100,
                usuario: "Ana Paula",
                local: "Porto Alegre, RS",
                descricao: `
<p><strong>Chevrolet Corsa Sedan Classic Life 1.0 Flexpower</strong></p>
<p><strong>Dados do veículo:</strong></p>
<ul>
    <li>Marca: Chevrolet</li>
    <li>Modelo: Corsa Sedan Classic Life 1.0 Flexpower</li>
    <li>Ano: 2009</li>
    <li>Quilometragem: 120.000 km</li>
    <li>Motor: 1.0</li>
    <li>Combustível: Álcool</li>
    <li>Câmbio: Manual</li>
    <li>IPVA: Pago</li>
</ul>
`,
                fotos: ["chovelet1.png", "chovelet2.png", "chevelet3.png"],
                opcoesLance: [4000, 4500, 5000, 5500, 6000, 7000]
            },
            {
                titulo: "Caminhonete F350",
                lote: "Lote #1005",
                lanceInicial: 15000,
                lanceAtual: 15000,
                lanceMinimo: 100,
                usuario: "Carlos Alberto",
                local: "Florianópolis, SC",
                descricao: `
<p><strong>Caminhonete F350</strong></p>
<p>Veículo vendido no estado em que se encontra.</p>
<p><strong>Informações:</strong></p>
<ul>
    <li>Ano: 2001</li>
    <li>Combustível: Diesel</li>
    <li>Câmbio: Manual</li>
    <li>Direção: Hidráulica</li>
    <li>Quilometragem: Não informada</li>
    <li>Documentação e regularização: Não informada</li>
</ul>
`,
                fotos: ["camionet.png", "camionet3.png", "camionet4.png", "camionet5.png", "camionet6.png", "camionet7.png"],
                opcoesLance: [15000, 16000, 17000, 18000, 19000, 20000]
            },
            {
                titulo: "Fiat Uno Vivace",
                lote: "Lote #1006",
                lanceInicial: 6000,
                lanceAtual: 6000,
                lanceMinimo: 100,
                usuario: "Roberto Lima",
                local: "São Paulo, SP",
                descricao: `
<p><strong>Fiat Uno Vivace/Rua 1.0 Evo Fire Flex 8V 5P</strong></p>
<p>Veículo vendido no estado em que se encontra.</p>
<p><strong>Informações:</strong></p>
<ul>
    <li>Marca: Fiat</li>
    <li>Tipo de veículo: Hatch</li>
    <li>Ano: 2014</li>
    <li>Quilometragem: 137.000 km</li>
    <li>Motor: 1.0</li>
    <li>Combustível: Flex</li>
</ul>
`,
                fotos: ["fiat.png", "fiat2.png", "fiat3.png", "fiat4.png", "fiat5.png", "fiat6.png", "fiat7.png"],
                opcoesLance: [6000, 6500, 7000, 7500, 8000, 9000]
            },
            {
                titulo: "Toyota Hilux CD SRV",
                lote: "Lote #1007",
                lanceInicial: 15000,
                lanceAtual: 15000,
                lanceMinimo: 100,
                usuario: "Fernando Souza",
                local: "Campinas, SP",
                descricao: `
<p><strong>Toyota Hilux CD SRV 4x4 2.8 TDI Diesel Automática</strong></p>
<p>Veículo leiloado no estado em que se encontra.</p>
<p><strong>Informações:</strong></p>
<ul>
    <li>Marca: Toyota</li>
    <li>Tipo de veículo: Pick-up</li>
    <li>Ano: 2020</li>
    <li>Quilometragem: 73.000 km</li>
    <li>Potência do motor: 2.8</li>
    <li>Combustível: Diesel</li>
</ul>
`,
                fotos: ["toyota.png", "toyota2.png", "toyota3.png", "toyota4.png", "toyota5.png", "toyota6.png", "toyota7.png", "toyota8.png", "toyota9.png", "toyota10.png"],
                opcoesLance: [15000, 16000, 17000, 18000, 19000, 20000]
            },
            {
                titulo: "Trator John Deere 6300",
                lote: "Lote #1008",
                lanceInicial: 20000,
                lanceAtual: 20000,
                lanceMinimo: 100,
                usuario: "Juliana Martins",
                local: "Brasília, DF",
                descricao: `
<p><strong>Trator John Deere 6300</strong></p>
<p>Veículo leiloado no estado em que se encontra.</p>
<p><strong>Informações:</strong></p>
<ul>
    <li>Marca: John Deere</li>
    <li>Modelo: 6300</li>
    <li>Ano: 2004</li>
    <li>Categoria: Trator agrícola</li>
</ul>
`,
                fotos: ["trator.png", "trator2.png", "trator3.png", "trator4.png", "trator5.png"],
                opcoesLance: [20000, 21000, 22000, 23000, 25000, 28000]
            },
            {
                titulo: "Volkswagen Gol 1.0",
                lote: "Lote #1009",
                lanceInicial: 2500,
                lanceAtual: 2500,
                lanceMinimo: 100,
                usuario: "Lucas Oliveira",
                local: "Rio de Janeiro, RJ",
                descricao: `
<p><strong>Volkswagen Gol Geração IV Trend 1.0 8V MI Total Flex Mec. 2P</strong></p>
<p>Veículo leiloado no estado em que se encontra.</p>
<p><strong>Informações:</strong></p>
<ul>
    <li>Marca: Volkswagen</li>
    <li>Tipo de veículo: Hatch</li>
    <li>Ano: 2011</li>
    <li>Quilometragem: 161.000 km</li>
    <li>Motor: 1.0</li>
    <li>Combustível: Flex</li>
</ul>
`,
                fotos: ["gol.png", "gol2.png", "gol3.png", "gol4.png", "gol5.png", "gol6.png", "gol7.png", "gol8.png", "gol9.png", "gol10.png", "gol11.png"],
                opcoesLance: [2500, 3000, 3500, 4000, 4500, 5000]
            },
            {
                titulo: "Fiat Strada Working 1.4",
                lote: "Lote #1010",
                lanceInicial: 7000,
                lanceAtual: 7000,
                lanceMinimo: 100,
                usuario: "Patricia Alves",
                local: "São Paulo, SP",
                descricao: `
<p><strong>Fiat Strada Working 1.4 MPI Fire Flex 8V CS</strong></p>
<p>Veículo leiloado no estado em que se encontra.</p>
<p><strong>Informações:</strong></p>
<ul>
    <li>Marca: Fiat</li>
    <li>Tipo de veículo: Pick-up</li>
    <li>Ano: 2016</li>
    <li>Quilometragem: 128.000 km</li>
    <li>Motor: 1.4</li>
    <li>Combustível: Flex</li>
</ul>
`,
                fotos: ["std.png", "std2.png", "std3.png", "std4.png", "std5.png", "std6.png", "std7.png", "std8.png", "std10.png"],
                opcoesLance: [7000, 7500, 8000, 8500, 9000, 10000]
            },
            {
                titulo: "Hyundai GLS 1.8",
                lote: "Lote #1011",
                lanceInicial: 4500,
                lanceAtual: 4500,
                lanceMinimo: 100,
                usuario: "Ricardo Nunes",
                local: "Belo Horizonte, MG",
                descricao: `
<p><strong>Hyundai GLS 1.8 16V Automático</strong></p>
<p>Veículo leiloado no estado em que se encontra.</p>
<p><strong>Informações:</strong></p>
<ul>
    <li>Marca: Hyundai</li>
    <li>Tipo de veículo: Sedã</li>
    <li>Ano: 2013</li>
    <li>Quilometragem: 210.000 km</li>
    <li>Motor: 1.8</li>
    <li>Combustível: Gasolina</li>
</ul>
`,
                fotos: ["hudai.png", "hudai2.png", "hudai3.png", "hudai4.png", "hudai5.png"],
                opcoesLance: [4500, 5000, 5500, 6000, 6500, 7000]
            },
            {
                titulo: "Yamaha Factor 125i 2017",
                lote: "Lote #1012",
                lanceInicial: 2000,
                lanceAtual: 2000,
                lanceMinimo: 100,
                usuario: "Marcelo Santos",
                local: "Guarujá, SP",
                descricao: `
<p><strong>Yamaha 125i ED</strong></p>
<p>Veículo leiloado no estado em que se encontra.</p>
<p><strong>Informações:</strong></p>
<ul>
    <li>Marca: Yamaha</li>
    <li>Modelo: 125i ED</li>
    <li>Ano: 2017</li>
    <li>Quilometragem: 50.000 km</li>
    <li>Localização: Parque Fleixal – Guapimirim/RJ</li>
</ul>
`,
                fotos: ["factor.png", "factor2.png", "factor3.png", "factor4.png", "factor5.png"],
                opcoesLance: [2000, 2200, 2500, 2800, 3000, 3500]
            },
            {
                titulo: "Honda CG Titan",
                lote: "Lote #1013",
                lanceInicial: 1500,
                lanceAtual: 1500,
                lanceMinimo: 100,
                usuario: "Gabriel Ferreira",
                local: "Goiânia, GO",
                descricao: `
<p><strong>Honda CG 160 Titan FlexOne Edição Especial 40 Anos</strong></p>
<p>Veículo leiloado no estado em que se encontra.</p>
<p><strong>Informações:</strong></p>
<ul>
    <li>Marca: Honda</li>
    <li>Ano: 2025</li>
    <li>Quilometragem: 93 km</li>
</ul>
`,
                fotos: ["honda.png", "honda2.png", "honda3.png", "honda4.png", "honda5.png", "honda6.png", "honda7.png", "honda8.png"],
                opcoesLance: [1500, 1700, 2000, 2500, 3000, 3500]
            }
        ];

        let produtoAtual = null;

        function criarCards() {
            const grid = document.getElementById('grid-leiloes');
            grid.innerHTML = '';

            produtos.forEach((produto, index) => {
                const card = document.createElement('div');
                card.className = 'card-leilao';
                card.onclick = () => abrirProduto(index);
                
                card.innerHTML = `
                    <img src="${produto.fotos[0]}" alt="${produto.titulo}">
                    <div class="card-info">
                        <div class="lote">${produto.lote}</div>
                        <h3>${produto.titulo}</h3>
                        <div class="lance-inicial">R$ ${formatarMoeda(produto.lanceInicial)}</div>
                        <div class="lance-minimo">Lance mínimo: R$ ${produto.lanceMinimo}</div>
                        <div class="local">${produto.local}</div>
                        <button class="btn-ver-leilao">Ver Leilão</button>
                    </div>
                `;
                
                grid.appendChild(card);
            });
        }

        function abrirProduto(index) {
            produtoAtual = produtos[index];
            
            document.getElementById('titulo-produto').textContent = produtoAtual.titulo;
            document.getElementById('lote-produto').textContent = produtoAtual.lote;
            document.getElementById('descricao-produto').innerHTML = produtoAtual.descricao;
            document.getElementById('local-produto').textContent = 'Localização: ' + produtoAtual.local;
            document.getElementById('lance-atual-valor').textContent = 'R$ ' + formatarMoeda(produtoAtual.lanceAtual);
            document.getElementById('lance-inicial-valor').textContent = 'R$ ' + formatarMoeda(produtoAtual.lanceInicial);
            document.getElementById('usuario-atual').textContent = 'Maior lance: ' + produtoAtual.usuario;
            
            criarGaleria(produtoAtual.fotos);
            criarOpcoesLance(produtoAtual.opcoesLance);
            
            document.getElementById('pagina-produto').style.display = 'block';
            document.getElementById('pagina-principal').style.display = 'none';
            window.scrollTo(0, 0);
        }

        function criarGaleria(fotos) {
            const fotoPrincipal = document.getElementById('foto-principal');
            const miniaturas = document.getElementById('miniaturas');
            
            fotoPrincipal.src = fotos[0];
            miniaturas.innerHTML = '';
            
            fotos.forEach((foto, index) => {
                const miniatura = document.createElement('div');
                miniatura.className = 'miniatura' + (index === 0 ? ' ativa' : '');
                miniatura.innerHTML = `<img src="${foto}" alt="Foto ${index + 1}">`;
                miniatura.onclick = () => {
                    fotoPrincipal.src = foto;
                    document.querySelectorAll('.miniatura').forEach(m => m.classList.remove('ativa'));
                    miniatura.classList.add('ativa');
                };
                miniaturas.appendChild(miniatura);
            });
        }

        function criarOpcoesLance(opcoes) {
            const grid = document.getElementById('grid-opcoes-lance');
            grid.innerHTML = '';
            
            opcoes.forEach(valor => {
                const btn = document.createElement('button');
                btn.className = 'btn-opcao-lance';
                btn.textContent = `R$ ${formatarMoeda(valor)}`;
                btn.onclick = () => enviarLanceWhatsApp(valor);
                grid.appendChild(btn);
            });
        }

        function enviarLanceWhatsApp(valor) {
            const mensagem = `Eu quero dar esse lance: ${produtoAtual.titulo} - R$ ${formatarMoeda(valor)}`;
            const mensagemCodificada = encodeURIComponent(mensagem);
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
            window.open(urlWhatsApp, '_blank');
        }

        function voltarInicio() {
            document.getElementById('pagina-produto').style.display = 'none';
            document.getElementById('pagina-principal').style.display = 'block';
            window.scrollTo(0, 0);
        }

        function formatarMoeda(valor) {
            return valor.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }

        criarCards();
