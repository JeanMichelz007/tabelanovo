const produtos = [
    {
        nome: "Fortnite",
      gênero: "Battle Royale",
      plataforma: "Multiplataforma",
      desenvolvedora: "epic games",
      ano: 2017
    },
    {
        nome: "Minecraft",
      gênero: "Sandbox",
      plataforma: "Multiplataforma",
      desenvolvedora: "Mojang Studios",
      ano: 2011
    },
    {
        nome: "GTA VI",
      gênero: "Ação, Mundo Aberto",
      plataforma: "PS5, Xbox Series X/S",
      desenvolvedora: "Rockstar Games",
      ano: 2026
    },
    {
        nome: "EA SPORTS FC 26",
      gênero: "Esportes",
      plataforma: "PC, Consoles",
      desenvolvedora: "EA Sports",
      ano: 2025
    },
    {
        nome: "Valorant",
      gênero: "FPS Tático",
      plataforma: "PC, PS5, Xbox",
      desenvolvedora: "Riot Games",
      ano: 2020
    },
    {
        nome: "Roblox",
      gênero: "Sandbox / MMO",
      plataforma: "Multiplataforma",
      desenvolvedora: "Roblox Corporation",
      ano: 2006
    },
    {
        nome: "League of Legends",
      gênero: "MOBA",
      plataforma: "PC, Mac",
      desenvolvedora: "Riot Games",
      ano: 2009
    },
    {
        nome: "Cyberpunk 2077",
      gênero: "RPG / Sci-Fi",
      plataforma: "PC, PS5, Xbox",
      desenvolvedora: "CD Projekt Red",
      ano: 2020
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.gênero}</td>
        <td>${produto.plataforma}</td>
        <td>${produto.desenvolvedora}</td>
        <td>${produto.ano}</td>
    `;

    corpoTabela.appendChild(linha)
  }