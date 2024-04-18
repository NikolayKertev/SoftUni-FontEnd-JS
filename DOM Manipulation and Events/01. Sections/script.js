function create(words) {
   const contentElement = document.getElementById("content");

   words.forEach(text => {
      const newDiv = document.createElement("div");
      const newParagraph = document.createElement("p");

      newParagraph.textContent = text;
      newParagraph.style.display = 'none';
      newDiv.appendChild(newParagraph);
      newDiv.addEventListener('click', (e) => {
         newParagraph.style.display = 'block';
      })

      contentElement.appendChild(newDiv);
   });
}