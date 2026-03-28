export const categories = [
    {
        title: "Mais assistidos",
        items: [
            {
                img: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 30,
                youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg"
            },
            {
                img: "https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs"
            },
            {
                img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
            },
            {
                img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs"
            },
            {
                img: "https://ofuxico.com.br/wp-content/uploads/2022/12/jack-leonardo-di-caprio-rose-kate-winslet-titanic.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=IH6_CA_ocqY"
            },
        ]
    },
    {
        title: "Séries",
        items: [
            { img: "https://static.wikia.nocookie.net/assista-series/images/5/56/Breaking-Bad.jpg/revision/latest/scale-to-width-down/1000?cb=20150528205254&path-prefix=pt-br", top10: true, badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=HhesaQXLuRY" },
            { img: "https://rollingstone.com.br/wp-content/uploads/kit_harington_and_emilia_clarke_in_game_of_thrones_2011.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=KPLWWIOCOOQ" },
            { img: "https://sm.ign.com/t/ign_br/news/i/invincible/invincible-finally-reveals-premiere-date-for-part-2-of-seaso_h5re.1200.jpg", badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=XH3LVr617hI" },
            { img: "https://www.planocritico.com/wp-content/uploads/2012/11/The_Walking_Dead_1_Temporada.jpg", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=sfAc2U20uyg" },
            { img: "https://rollingstone.com.br/wp-content/uploads/you_divulgacao_netflix_3a_tempiorada.jpg", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=a73HloLLDlo" },
        ]
    },
    {
        title: "Comédias",
        items: [
            { img: "https://rollingstone.com.br/wp-content/uploads/cena-de-gente-grande_reproducao_twitter.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=HKVve_VSz58" },
            { img: "https://m.media-amazon.com/images/S/pv-target-images/7c3f107e9c426c076f219d521f1658c695d874846029fbb91f7b0929d5850734.png", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=4qDysqSxG64" },
            { img: "https://cinepop.com.br/wp-content/uploads/2024/08/the-hangover-4.jpg", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=jOQMBfWMMsU" },
            { img: "https://poltronanerd.com.br/wp-content/uploads/2017/09/poltrona-the-nice-guys-.jpg", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=GQR5zsLHbYw" },
            { img: "https://www.planoaberto.com.br/wp-content/uploads/2020/10/borat-capa.jpg", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=ZN-dGVbCjLI" },
        ]
    }
];

// Função para alternar entre dark e light mode
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    body.classList.toggle('light-mode');
    // Salva preferência no localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        btn.innerHTML = '🌙'; // Lua para modo claro
    } else {
        localStorage.setItem('theme', 'dark');
        btn.innerHTML = '☀️'; // Sol para modo escuro
    }
}

// Aplica o tema salvo ao carregar a página
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('theme-toggle');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        btn.innerHTML = '🌙';
    } else {
        btn.innerHTML = '☀️';
    }
};
