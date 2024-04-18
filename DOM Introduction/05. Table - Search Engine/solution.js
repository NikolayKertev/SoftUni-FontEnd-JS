function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchValueElement = document.getElementById("searchField");
      const rowsElements = document.querySelectorAll("tbody tr");

      const searchValue = searchValueElement.value;
      const rowsArray = Array.from(rowsElements);

      rowsArray.forEach(tr => tr.className = "");

      rowsArray.forEach(tr => {
         if(tr.textContent.includes(searchValue))
         {
            tr.className = "select";
         };
      });
   }
}