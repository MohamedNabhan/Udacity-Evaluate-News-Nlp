async function handleSubmit(e) {
    e.preventDefault();
  
    const loading = document.getElementById("loading");
    const confidence = document.getElementById("confidence");
    const subjectivity = document.getElementById("subjectivity");
    const irony = document.getElementById("irony");
    loading.innerHTML = "loading ...";
    confidence.innerHTML = "";
    subjectivity.innerHTML = "";
  
    // check what text was put into the form field
    let formText = await document.getElementById("name").value;
    let checkURL = await Client.checkForURL(formText);
console.log("formText",formText);
  
    if (checkURL === true) {
      const requestOptions = {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formText }),
      };
  
      await fetch(
        "https://evaluate-news-nlp-wepback.herokuapp.com/analyze",
        requestOptions
      )
        .then((res) => res.json())
        .then(async (response) => {
          if (response.status.code !== "0") {
            loading.innerHTML = response.status.msg;
            confidence.innerHTML = "";
            subjectivity.innerHTML = "";
          } else {
           
            if (response.confidence) {
              confidence.innerHTML = response.confidence + "%";
            }
            if (response.subjectivity) {
              subjectivity.innerHTML = response.subjectivity;
            }
            if (response.irony) {
              irony.innerHTML = response.irony;
            }
  
            loading.innerHTML = "Sucess";
          }
        })
        .catch((e) => {
         
          loading.innerHTML = "There is something wrong";
          confidence.innerHTML = "";
          subjectivity.innerHTML = "";
          console.log(e);
        });
    } else {
      loading.innerHTML = "Enter Valid URL Link!";
    }
  }
  
  export { handleSubmit };
  