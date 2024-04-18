function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const loadButtonElement = document.getElementById('btnLoadPosts');
    const postsElement = document.getElementById('posts');
    const viewButtonElement = document.getElementById('btnViewPost');
    const postTitleELement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const commentsBodyElement = document.getElementById('post-comments');

    loadPosts();

    viewButtonElement.addEventListener('click', () => {
        const postId = postsElement.value;
        const postTitle = postsElement.querySelector(`option[value=${postId}]`).textContent;
        console.log(postId);
        
        postTitleELement.textContent = postTitle;

        fetch(postsUrl)
            .then(response => response.json())
            .then(postsData => {
                const postBody = Object.values(postsData).find(postBody => postBody.id === postId).body;

                postBodyElement.textContent = postBody;
            })
            .catch(() => console.log("Catched error while trying to view."));

        fetch(commentsUrl)
            .then(response => response.json())
            .then(commentsData => {
                commentsBodyElement.innerHTML = "";
                const comments = Object.values(commentsData)

                    .filter(comment => comment.postId == postId)
                    .forEach(comment => {
                        const liElement = document.createElement('li');
                        liElement.textContent = comment.text;

                        commentsBodyElement.appendChild(liElement);
                    });

            })
    })

    function loadPosts() {
        loadButtonElement.addEventListener('click', () => {
            fetch(postsUrl)
                .then(response => response.json())
                .then(postsData => {
                    postsElement.innerHTML = "";
                    const titles = Object.values(postsData).forEach(title => {
                        const option = document.createElement('option');
                        option.value = title.id;
                        option.textContent = title.title;

                        postsElement.appendChild(option);
                    });
                })
                .catch(() => console.log("Catched error while trying to load."));
        })
    }
}

attachEvents();