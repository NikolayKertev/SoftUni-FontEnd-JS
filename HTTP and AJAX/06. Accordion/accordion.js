function solution() {
    const allSectionsUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const hiddenContentUrl = 'http://localhost:3030/jsonstore/advanced/articles/details';
    const mainElement = document.getElementById('main');

    fetch(allSectionsUrl)
        .then(response => response.json())
        .then(section => {
            section.forEach(item => {
                const title = item.title;
                const id = item._id;

                const spanElement = document.createElement('span');
                spanElement.textContent = title;

                const buttonElement = document.createElement('button');
                buttonElement.classList.add('button');
                buttonElement.id = id;
                buttonElement.textContent = "more";

                buttonElement.addEventListener('click', (e) => {
                    const id = e.currentTarget.id;

                    if (buttonElement.textContent === "more") {
                        extraContentDiv.innerHTML = '';

                        appendExtraContentDiv(id);
                        
                        buttonElement.textContent = "less";
                        extraContentDiv.style.display = 'block';
                    } else {
                        buttonElement.textContent = "more";
                        extraContentDiv.style.display = 'none';
                    }

                    

                })

                const divElement = document.createElement('div');
                divElement.classList.add('head');
                divElement.appendChild(spanElement);
                divElement.appendChild(buttonElement);

                const extraContentDiv = document.createElement('div');
                extraContentDiv.classList.add('extra');
                
                const mainDivElement = document.createElement('div');
                mainDivElement.classList.add('accordion');
                mainDivElement.appendChild(divElement);
                mainDivElement.appendChild(extraContentDiv);

                mainElement.appendChild(mainDivElement);
            


                function appendExtraContentDiv(id) {
                    return fetch(`${hiddenContentUrl}/${id}`)
                        .then(response => response.json())
                        .then(content => {
                            const paragraph = document.createElement('p');
                            paragraph.textContent = content.content;

                            extraContentDiv.appendChild(paragraph);
                        })
                        .catch(() => console.log("Error"));
                }
            })
        })
        .catch(() => console.log("Error while getting data!"));
}

solution();