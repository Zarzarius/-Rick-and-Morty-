fetch("https://rickandmortyapi.com/api/character")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    data.results.forEach((character) => {
      const characterBox = document.createElement("div");
      characterBox.setAttribute("class", "character-box");

      const name = document.createElement("h2");
      name.textContent = `${character.name}`;

      const species = document.createElement("h3");
      species.textContent = `Specie: ${character.species}`;

      const status = document.createElement("h4");
      status.textContent = `Status: ${character.status}`;

      const image = document.createElement("img");

      image.src = character.image;

      chars.appendChild(characterBox);
      characterBox.appendChild(name);
      characterBox.appendChild(species);

      characterBox.appendChild(image);
      characterBox.appendChild(status);
    });
  })
  .catch((err) => {
    console.error(err);
  });

const chars = document.getElementById("chars");
