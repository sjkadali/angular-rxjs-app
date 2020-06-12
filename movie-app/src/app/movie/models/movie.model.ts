export interface Movie {
    id : number;
    name: string;
    genre: string;
    image: string;
    releaseYr: string;
}

export const movies: Movie[] = [
    {
        id: 1,
        name: 'Joseph',
        genre: 'Thriller',
        image: 'https://en.wikipedia.org/wiki/Joseph_(2018_film)#/media/File:Joseph_film_poster.jpg',
        releaseYr: '2019'
    },
    {
        id: 2,
        name: 'Lucifer',
        genre: 'Thriller',
        image: 'https://en.wikipedia.org/wiki/Lucifer_(film)#/media/File:Lucifer_film_poster.jpg',
        releaseYr: '2019'
    
    },
    {
        id: 3,
        name: 'Uyare',
        genre: 'Inspirational',
        image: 'https://en.wikipedia.org/wiki/Uyare#/media/File:Uyare_Movie.jpg',
        releaseYr: '2019'
    
    },
    {
        id: 4,
        name: 'Virus',
        genre: 'Thriller',
        image: 'https://www.imdb.com/title/tt8941440/mediaviewer/rm2527764225',
        releaseYr: '2019'
    
    },
]