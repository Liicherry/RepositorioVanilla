document.addEventListener('DOMContentLoaded', ()=> {
    const titulo = document.querySelector('.titulo');
    const subtitulo = document.querySelector('.subtitulo');
    const bio = document.querySelector('#bio');
    const imagem = document.querySelector('.imagem');
    // a partir daqui
    const blog = document.querySelector('.blog');
    const seguidores = document.querySelector('.seguidores');
    const seguindo = document.querySelector('.seguindo');
    const local = document.querySelector('.local');
    const publicRepos = document.querySelector('.publicRepos');
    const criadoEm = document.querySelector('.criadoEm');
    // Até aqui


    const fechData = async () =>{
        const responseUser = await fetch('https://api.github.com/users/Liicherry');
        const dataUser = await responseUser.json();

        imagem.src = dataUser.avatar_url;
        imagem.alt= `Imagem de ${dataUser.login}`;
        titulo.innerHTML = dataUser.name;
        subtitulo.innerHTML = dataUser.login;
        bio.innerHTML = dataUser.bio;
        if(dataUser.blog !== "") blog.innerHTML = `Blog: ${dataUser.blog}`;
        seguidores.innerHTML = `Seguidores ${dataUser.followers}`
        seguindo.innerHTML = `Seguindo: ${dataUser.following}`
        if(dataUser.location !== null) local.innerHTML = `Cidade: ${dataUser.location}`
        publicRepos.innerHTML = `Repositorios publicos ${dataUser.public_repos}`
        criadoEm.innerHTML = `Criado em: ${new Date(dataUser.created_at).toLocaleDateString('pt-BR', {day:'2-digit', 
            month:'long',
            year:'numeric'})}`
            
            //Dados dos repositorios

        const fetchRepos = await fetch ('https://api.github.com/users/Liicherry/repos');
        const dataRepos = await fetchRepos.json();

    }

    fechData()
})
