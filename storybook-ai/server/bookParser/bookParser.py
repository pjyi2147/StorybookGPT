import re
import os
import sys

def splitIntoPages(rawText, wordsPerPage=300):
    # Split by paragraphs
    paragraphs = re.split(r'\n\n', rawText)

    pages = []
    currentPage = ""
    currentPageWordCount = 0

    for paragraph in paragraphs:
        # Check for new chapteres
        if re.match(r'^CHAPTER [A-Z\s]+$', paragraph.strip()):
            # Start a new page for each chapter
            if currentPage:
                pages.append(currentPage.strip())
                currentPage = ''
                currentPageWordCount = 0
        else:
            # Add the paragraph to the current page
            currentPage += paragraph + '\n\n'
            currentPageWordCount += len(paragraph.split())

            # Start a new page if the current one is too long
            if currentPageWordCount >= wordsPerPage:
                pages.append(currentPage.strip())
                currentPage = ''
                currentPageWordCount = 0

    # Edge case: add the last page if any remaining text exists
    if currentPage:
        pages.append(currentPage.strip())

    return pages

def main():

    # Read the raw book text
    with open("../books/Harry Potter and the Prisoner of Azkaban.txt", 'r', encoding='utf-8') as file:
        rawText = file.read()

    # Split the book into pages
    pages = splitIntoPages(rawText)

    # Save each page to a separate file
    os.makedirs
    for i, page in enumerate(pages):
        with open(f'../pages/page_{i+1}.txt', 'w', encoding='utf-8') as page_file:
            page_file.write(page)

if __name__ == "__main__":
    main()