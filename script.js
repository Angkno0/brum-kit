const container = document.createElement("div");
container.classList.add

// vi lagar en drumkit objekt
const drumkit = {
    clap: "q",
    hihat: "w",
    kick: "e",
    openhat: "r",
    ride: "t",
    snare: "y",
    tink: "u",
    tom: "i"
}

for (const key in drumkit){
    const htmlElement = document.createElement("div");
    htmlElement.classList.add("drumkit");
    htmlElement.style.color = "blue";
    const image = document.createElement("img");
    image.src = "./pics/" + key + ".png";
    image .width="100";
    htmlElement.appendChild(image);
    container.appendChild(htmlElement);
}

document.body.appendChild(container);



window.addEventListener("keydown", (e) => {
    for( key in drumkit){
        if (drumkit[key] === e.key){
            const audio = new Audio("./sounds/" + key + ".wav");
            audio.play();
            break;
        }

    }
   
})