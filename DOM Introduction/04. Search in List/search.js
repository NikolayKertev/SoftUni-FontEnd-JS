function search() {
   const townsElements = document.querySelectorAll("#towns li");
   const searchValueElement = document.getElementById("searchText");
   const resultElement = document.getElementById("result");

   const townsArray = Array.from(townsElements).map(element => element);
   const searchValue =  searchValueElement.value;

   const resultTownsArray = townsArray.filter(town => {
      if (town.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         return town;
      }
   });

   resultElement.textContent = `${resultTownsArray.length} matches found`;
   console.log(townsElements);
}
