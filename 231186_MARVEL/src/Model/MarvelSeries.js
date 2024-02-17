export class MarvelSeries {
    #id;
    #title;
    #description;
    #startYear;

    setId(id) { this.#id = id; }
    getId() { return this.#id; }

    setTitle(title) { this.#title = title; }
    getTitle() { return this.#title; }

    setDescription(description) { this.#description = description; }
    getDescription() { return this.#description; }

    setStartYear(startYear) { this.#startYear = startYear; }
    getStartYear() { return this.#startYear; }
}