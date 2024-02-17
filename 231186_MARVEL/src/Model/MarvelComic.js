export class MarvelComic {
    #id;
    #title;
    #issueNumber;
    #description;

    setId(id) { this.#id = id; }
    getId() { return this.#id; }

    setTitle(title) { this.#title = title; }
    getTitle() { return this.#title; }

    setIssueNumber(issueNumber) { this.#issueNumber = issueNumber; }
    getIssueNumber() { return this.#issueNumber; }

    setDescription(description) { this.#description = description; }
    getDescription() { return this.#description; }
}


