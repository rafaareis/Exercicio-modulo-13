const cardObj = [
    {
        id: 1,
        artist: 'Spiritbox',
        period: '(2017 -)',
        genre: 'Metalcore',
        country: 'country/canada.png',
        img1: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2023/04/spiritbox-divulgacao.jpg',
        img2: 'https://www.notch.one/wp-content/uploads/2023/05/Spiritbox-10.jpg',
        img3: 'https://photos.bandsintown.com/large/14680655.jpeg',
        spotifyLink:'https://open.spotify.com/intl-pt/artist/4MzJMcHQBl9SIYSjwWn8QW',
        spotifyMensalListeners: '1.723.982',
        instagramLink: 'https://www.instagram.com/spiritboxmusic/',
        instagramFollowers: '278.767'
    },
    {
        id: 2,
        artist: 'Royal Blood',
        period: '(2013 -)',
        country: 'country/united-kingdom.png',
        genre: 'Alternative',
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKdK3IsvYF_gWjdTs0EvAbBs8qT3F07aeMw&usqp=CAU',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqLpqNh8FLwgdnIOytoqJC2HjftGi1fQu_w&usqp=CAU',
        img3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Q8NL5DiLniTJNbyeeOfD1tws3LxNnJi_cA&usqp=CAU',
        spotifyLink:'https://open.spotify.com/intl-pt/artist/2S5hlvw4CMtMGswFtfdK15',
        spotifyMensalListeners: '3.736.356',
        instagramLink: 'https://www.instagram.com/royalblooduk/',
        instagramFollowers: '431.893'
    },
    {
        id: 3,
        artist: 'Jinjer',
        period: '(2009 -)',
        country: 'country/ukraine.png',
        genre: 'Progressive Metal',
        img1: 'https://lastfm.freetls.fastly.net/i/u/ar0/c4abea887a2347fbc25f35ab73cb1b00.jpg',
        img2: 'https://www.wikimetal.com.br/wp-content/uploads/2022/10/jinjer-@-carioca-club-by-leca-suzuki-01.10.2022-38.jpg',
        img3: 'https://pbs.twimg.com/media/FnzqaSbXoAIu4KS?format=jpg&name=large',
        spotifyLink:'https://open.spotify.com/intl-pt/artist/7o6cOczXTB8ioTAAJTbESf',
        spotifyMensalListeners: '534.833',
        instagramLink: 'https://www.instagram.com/jinjer_official/',
        instagramFollowers: '500.575'
    },
    {
        id: 4,
        artist: 'Tame Impala',
        period: '(2007 -)',
        country: 'country/australia.png',
        genre: 'Alternative',
        img1: 'https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2022/05/fbff11e-Tame-impala-1024x576.jpg',
        img2: 'https://cdn-r2-1.thebrag.com/rs/uploads/2022/10/tame-impala-review.jpg',
        img3: 'https://townsquare.media/site/838/files/2021/09/attachment-tameimpala-unitedcenter-01.jpg?w=980&q=75',
        spotifyLink:'https://open.spotify.com/intl-pt/artist/5INjqkS1o8h1imAzPqGZBb',
        spotifyMensalListeners: '25.082.553',
        instagramLink: 'https://www.instagram.com/tameimpala/',
        instagramFollowers: '2.832.308'
    },
    {
        id: 5,
        artist: 'Larkin Poe',
        period: '(2010 -)',
        country: 'country/united-states-of-america.png',
        genre: 'Blues',
        img1: 'https://i.scdn.co/image/ab6761610000e5eb45b22863aa39767cdf7513bf',
        img2: 'https://www.leparisien.fr/resizer/MpUL1txc-a2yJdXrDuFfABN-730=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/DNKHHLGYURDU7KK6CYJ272BFLM.jpg',
        img3: 'https://jambands.com/wp-content/uploads/2023/02/thumbnail-700x467.jpg',
        spotifyLink:'https://open.spotify.com/intl-pt/artist/5INjqkS1o8h1imAzPqGZBb',
        spotifyMensalListeners: '479.304',
        instagramLink: 'https://www.instagram.com/larkinpoe/',
        instagramFollowers: '269.326'
    },
    {
        id: 6,
        artist: 'Blues Pills',
        period: '(2011 -)',
        country: 'country/sweden.png',
        genre: 'Blues Rock',
        img1: 'https://yt3.googleusercontent.com/53ZLqxz72FEmouCG2aU-OL9_EQ300TBLVbmHGulOanD2ieT8cemei6B3HKVt_2NXeKTf-Q8z=s900-c-k-c0x00ffffff-no-rj',
        img2: 'https://igormiranda.com.br/wp-content/uploads/2022/10/Blues-Pills-Sao-Paulo-2022-06-min-1024x683.jpg',
        img3: 'https://www.rutarock.com/wp-content/uploads/2022/10/Blues.Pills_-19.jpg',
        spotifyLink:'https://open.spotify.com/intl-pt/artist/2lmQ4CUnjmLIIfnwZdRmMY',
        spotifyMensalListeners: '131.813',
        instagramLink: 'https://www.instagram.com/bluespills/',
        instagramFollowers: '34.902'
    },
    {
        id: 7,
        artist: 'Metallica',
        period: '(1981 -)',
        country: 'country/united-states-of-america.png',
        genre: 'Metal',
        img1: 'https://www.radiorock.com.br/wp-content/uploads/2023/01/metallica.jpg',
        img2: 'https://www.rollingstone.com/wp-content/uploads/2023/04/metallica-RS-2023-1800.jpg',
        img3: 'https://www.nugs.net/dw/image/v2/BCHN_PRD/on/demandware.static/-/Sites-nugs-storefront-en/default/dwb8139732/category-images/ALP/metallica750.jpg?sw=600',
        spotifyLink:'https://open.spotify.com/intl-pt/artist/2ye2Wgw4gimLv2eAKyk1NB',
        spotifyMensalListeners: '25.834.491',
        instagramLink: 'https://www.instagram.com/metallica/',
        instagramFollowers: '9.888.073'
    },
    {
        id: 8,
        artist: 'The Warning',
        period: '(2013 -)',
        country: 'country/mexico.png',
        genre: 'Rock',
        img1: 'https://i.scdn.co/image/ab6761610000e5eb95ef29b3a56a701b8c9fd5c6',
        img2: 'https://i.ytimg.com/vi/k6BvVx3wvTs/maxresdefault.jpg',
        img3: 'https://www.mirp411.com/wp-content/uploads/2022/04/The-Warning-19-scaled.jpg',
        spotifyLink:'https://open.spotify.com/intl-pt/artist/2SmW1lFlBJn4IfBzBZDlSh',
        spotifyMensalListeners: '562.808',
        instagramLink: 'https://www.instagram.com/thewarningrockband/',
        instagramFollowers: '450.210'
    },
    {
        id: 9,
        artist: 'Queens Of the Stone Age',
        period: '(1996 -)',
        country: 'country/united-states-of-america.png',
        genre: 'Rock',
        img1: 'https://www.radiorock.com.br/wp-content/uploads/2023/05/queens-of-the-stone-age.jpg',
        img2: 'https://almalondrina.com.br/wp-content/uploads/2020/12/Queens-Of-The-Stone-Age-Azylo-Hotel.jpeg',
        img3: 'https://i0.wp.com/www.ambientlightblog.com/wp-content/uploads/2018/08/QOTSA_Feature.jpg?fit=2048%2C1076&ssl=1',
        spotifyLink:'https://open.spotify.com/intl-pt/artist/4pejUc4iciQfgdX6OKulQn',
        spotifyMensalListeners: '7.748.699',
        instagramLink: 'https://www.instagram.com/queensofthestoneage/',
        instagramFollowers: '697.362'
    },
    {
        id: 10,
        artist: 'Joe Bonamassa',
        period: '(1989 -)',
        country: 'country/united-states-of-america.png',
        genre: 'Blues Rock',
        img1: 'https://i.scdn.co/image/ab6761610000e5ebec33bd8fc7f83b842c5d08a8',
        img2: 'https://guitar.com/wp-content/uploads/2023/02/joe-bonamassa-tales-of-time@2000x1500.jpg',
        img3: 'https://www.visitevansville.com/sites/default/files/styles/primary_image/public/content/event/11683762130978118335885269119525506271517823n.png?itok=UbyCES6l',
        spotifyLink:'https://open.spotify.com/intl-pt/artist/2SNzxY1OsSCHBLVi77mpPQ',
        spotifyMensalListeners: '906.806',
        instagramLink: 'https://www.instagram.com/joebonamassa/',
        instagramFollowers: '862.178'
    },
    {
        id: 11,
        artist: 'Red Hot Chili Peppers',
        period: '(1983 -)',
        country: 'country/united-states-of-america.png',
        genre: 'Punk Rock',
        img1: 'https://relix.com/wp-content/uploads/2022/09/Screen-Shot-2022-04-08-at-4.15.27-PM.jpg.webp',
        img2: 'https://i.ds.at/y1WqSQ/rs:fill:493:0/plain/2022/12/06/DD343521-A0A1-4B84-AFA9-8E191EAE617D.jpg',
        img3: 'https://s.hdnux.com/photos/01/26/20/14/22610701/6/rawImage.jpg',
        spotifyLink:'https://open.spotify.com/intl-pt/artist/0L8ExT028jH3ddEcZwqJJ5',
        spotifyMensalListeners: '29.905.718',
        instagramLink: 'https://www.instagram.com/chilipeppers/',
        instagramFollowers: '5.353.071'
    },
    {
        id: 12,
        artist: 'Baroness',
        period: '(2003 -)',
        country: 'country/united-states-of-america.png',
        genre: 'Progressive',
        img1: 'https://i.scdn.co/image/ab6761610000e5ebc90690b1e0ab1f4b0ff873cb',
        img2: 'https://i0.wp.com/www.popsfera.com.br/wp-content/uploads/2020/12/baroness-band.jpg?resize=800%2C450&ssl=1',
        img3: 'https://highwiredaze.com/wp-content/uploads/2022/04/9G8A7672-1280x640.jpg',
        spotifyLink:'https://open.spotify.com/intl-pt/artist/3KdXhEwbqFHfNfSk7L9E87',
        spotifyMensalListeners: '157.137',
        instagramLink: 'https://www.instagram.com/yourbaroness/',
        instagramFollowers: '121.352'
    },
]

let cards = cardObj.map(function(card) {
        return `
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <article class="card">
                        <div class="card-header">
                            <header>
                                <div class="band-header">
                                    <a class="spotify-link" href="${card.spotifyLink}" id="spotify">
                                        <div class="spotify-div">
                                            <i class="fa-brands fa-spotify fa-2xl" alt="Ícone do Spotify"></i>
                                            <h4>${card.spotifyMensalListeners}</h4>
                                        </div>
                                    </a>
                                    <a class="instagram-link" href="${card.instagramLink}" id="instagram">
                                        <div class="instagram-div">
                                            <i class="fa-brands fa-instagram fa-2xl" alt="Ícone do Instagram"></i>
                                            <h4>${card.instagramFollowers}</h4>
                                        </div>
                                    </a>  
                                </div>
                            </header>
                        </div>
                        <div class="card">
                            <div id="carousel-exemplo-${card.id}" class="carousel carousel-fade slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div data-bs-interval="5000" class="carousel-item active">
                                        <img class="d-block" id="img1" src="${card.img1}" alt="Foto de ${card.artist}" />
                                        <div class="carousel-caption">
                                            <div class="title-card-1">
                                                <h2>${card.artist}</h2>
                                             <img id="countryIcon" src="${card.country}" alt="Foto de ${card.artist}" />
                                            </div>   
                                        </div>
                                    </div>
                                    <div data-bs-interval="5000" class="carousel-item">
                                        <img class="d-block" id="img2" src="${card.img2}" alt="Foto de ${card.artist}" />
                                        <div class="carousel-caption">
                                            <div class="title-card-2">
                                                <h2>${card.artist}</h2>
                                                <img id="countryIcon" src="${card.country}" alt="Foto de ${card.artist}" />
                                            </div>   
                                        </div>
                                    </div>
                                    <div data-bs-interval="5000" class="carousel-item">
                                        <img class="d-block" id="img3" src="${card.img3}" alt="Foto de ${card.artist}" />
                                        <div class="carousel-caption">
                                            <div class="title-card-3">
                                                <h2>${card.artist}</h2>
                                                <img id="countryIcon" src="${card.country}" alt="Foto de ${card.artist}" />
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                                <button data-bs-target="#carousel-exemplo-${card.id}" data-bs-slide="prev"  class="carousel-control-prev" type="button">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button data-bs-target="#carousel-exemplo-${card.id}" data-bs-slide="next"  class="carousel-control-next" type="button">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carousel-exemplo-${card.id}" data-bs-slide-to="0" class="active"></button>
                                    <button type="button" data-bs-target="#carousel-exemplo-${card.id}" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#carousel-exemplo-${card.id}" data-bs-slide-to="2"></button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                `;
});

document.querySelector('.row').innerHTML = cards.join("");

