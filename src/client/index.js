import { checkForURL } from "./js/nameChecker";
import { handleSubmit } from "./js/handleSubmit";

import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", e => handleSubmit(e))

export {checkForURL,handleSubmit}
