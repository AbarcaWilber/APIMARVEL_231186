import { ListCharacter } from "../Model/ListCharacter.js";
import { MarvelCharacter } from "../Model/MarvelCharacter.js";
import { MarvelComic } from "../Model/MarvelComic.js";
import { MarvelSeries } from "../Model/MarvelSeries.js";

const publicApiKey = '641f333beb32e17083700c8e1ccc4938';
const privateApiKey = 'bbd61e396a861f9e973b69b778ef0bca587343ed';

function generateHash(ts) {
    const hashInput = ts + privateApiKey + publicApiKey;
    return md5(hashInput);
}

async function fetchData(endpoint) {
    const ts = new Date().getTime().toString();
    const hash = generateHash(ts);
    const url = `https://gateway.marvel.com/v1/public/${endpoint}?apikey=${publicApiKey}&ts=${ts}&hash=${hash}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.results;
}

document.getElementById('btnCharacters').addEventListener('click', async () => {
    const charactersData = await fetchData('characters');
    const charactersContainer = document.getElementById('characters-container');
    const comicsContainer = document.getElementById('comics-container');
    const seriesContainer = document.getElementById('series-container');

    comicsContainer.innerHTML = '';
    seriesContainer.innerHTML = '';

    charactersContainer.innerHTML = '';
    charactersData.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('card', 'character-card');

        const imageElement = document.createElement('img');
        imageElement.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
        imageElement.alt = character.name;

        const nameElement = document.createElement('div');
        nameElement.classList.add('title');
        nameElement.textContent = character.name;

        characterElement.appendChild(imageElement);
        characterElement.appendChild(nameElement);
        charactersContainer.appendChild(characterElement);
    });
});

document.getElementById('btnComics').addEventListener('click', async () => {
    const comicsData = await fetchData('comics');
    const charactersContainer = document.getElementById('characters-container');
    const comicsContainer = document.getElementById('comics-container');
    const seriesContainer = document.getElementById('series-container');

    charactersContainer.innerHTML = '';
    seriesContainer.innerHTML = '';

    comicsContainer.innerHTML = '';
    comicsData.forEach(comic => {
        const comicElement = document.createElement('div');
        comicElement.classList.add('card', 'comic-card');

        const imageElement = document.createElement('img');
        imageElement.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
        imageElement.alt = comic.title;

        const titleElement = document.createElement('div');
        titleElement.classList.add('title');
        titleElement.textContent = comic.title;

        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('description');
        descriptionElement.textContent = comic.description || 'No hay descripción disponible';

        comicElement.appendChild(imageElement);
        comicElement.appendChild(titleElement);
        comicElement.appendChild(descriptionElement);
        comicsContainer.appendChild(comicElement);
    });
});

document.getElementById('btnSeries').addEventListener('click', async () => {
    const seriesData = await fetchData('series');
    const charactersContainer = document.getElementById('characters-container');
    const comicsContainer = document.getElementById('comics-container');
    const seriesContainer = document.getElementById('series-container');

    charactersContainer.innerHTML = '';
    comicsContainer.innerHTML = '';

    seriesContainer.innerHTML = '';
    seriesData.forEach(serie => {
        const serieElement = document.createElement('div');
        serieElement.classList.add('card', 'series-card');

        const imageElement = document.createElement('img');
        imageElement.src = `${serie.thumbnail.path}.${serie.thumbnail.extension}`;
        imageElement.alt = serie.title;

        const titleElement = document.createElement('div');
        titleElement.classList.add('title');
        titleElement.textContent = serie.title;

        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('description');
        descriptionElement.textContent = serie.description || 'No hay descripción disponible';

        serieElement.appendChild(imageElement);
        serieElement.appendChild(titleElement);
        serieElement.appendChild(descriptionElement);
        seriesContainer.appendChild(serieElement);
    });
});
