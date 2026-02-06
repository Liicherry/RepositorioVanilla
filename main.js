document.addEventListener('DOMContentLoaded', ()=> {
    const titulo = document.querySelector('.titulo');
    const subtitulo = document.querySelector('.subtitulo');
    const bio = document.querySelector('#bio');

    const fechData = async () =>{
        const responseUser = await fetch('https://api.github.com/users/Liicherry');
        const dataUser = responseUser.json();
       
        const fectRepos = await fetch('https://api.github.com/users/Liicherry/repos');
        const dataRepos = await fectRepos.json();
        console.log(dataRepos);
    }

    fechData();
})
