async function carregarMarkdown() {
  try {
    const resposta = await fetch("empresas/exemplo.md");
    const texto = await resposta.text();

    const html = marked.parse(texto);
    document.getElementById("conteudo").innerHTML = html;
  } catch (erro) {
    document.getElementById("conteudo").innerHTML =
      "Erro ao carregar relato 😢";
    console.error(erro);
  }
}

carregarMarkdown();
