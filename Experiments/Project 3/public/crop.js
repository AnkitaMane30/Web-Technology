async function getCropInfo(){

    const crop = document.getElementById("cropInput").value;

    const resultDiv = document.getElementById("cropResult");

    if(crop === ""){
        resultDiv.innerHTML = "Please enter a crop name.";
        return;
    }

    try{

        const response = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + crop);

        const data = await response.json();

        if(data.extract){

            resultDiv.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.extract}</p>
            `;

        }else{
            resultDiv.innerHTML = "No information found for this crop.";
        }

    }
    catch(error){

        resultDiv.innerHTML = "Error fetching crop information.";

    }

}