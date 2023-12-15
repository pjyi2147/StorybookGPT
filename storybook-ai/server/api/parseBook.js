import { existsSync, mkdirSync, writeFileSync } from "fs";

function parseText(text, charactersPerPage=1500) {
    const paragraphs = text.split(/\n/);
    const pages = [];

    console.log(paragraphs)
    let currentPage = '';

    for (let i = 0; i < paragraphs.length; i++) {
        // Create a new page for a new chapter
        if (/^CHAPTER [A-Z\s]+$/.test(paragraphs[i].trim())) {
            pages.push(currentPage)
            currentPage = paragraphs[i] + '\n'
        } else {
            currentPage += paragraphs[i] + '\n';
            if (currentPage.length > charactersPerPage) {
                pages.push(currentPage);
                currentPage = ''
            }
        }
    }

    pages.push(currentPage);

    return pages;
}


function storePages(pages, bookId) {
    pages.forEach((page, index) => {
        const pageId = String(index + 1);
        const pageDirectory = `../books/${bookId}/${pageId}/`
        if (!existsSync(pageDirectory)) {
            mkdirSync(pageDirectory, {recursive: true})
        } else {

        }
        const pageFilePath = `${pageDirectory}/text.json`;
        writeFileSync(pageFilePath, JSON.stringify({ page: index + 1, content: page }), 'utf-8');
        console.log(`Written to ${pageFilePath}`)
    })
}



export function splitStoryIntoPages(storyText, bookId) {
    let pages = parseText(storyText)
    console.log(pages.length)
    storePages(pages, bookId)
}
