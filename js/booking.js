const tjek_console_BACKUP = "start_test";
console.log(tjek_console_BACKUP);

/*Konstanter og indsættelse af data fra form til summary*/
const form = document.querySelector("#webform");

/* Mangler at lave konstanter på navne i form til venstre. const firstname (input navnet) queryselec () */

/* Outputs*/

const firstOutput = document.querySelector("#first_name_output");
const secondOutput = document.querySelector("#surname_id_output");
const thirdOutput = document.querySelector("#email_id_output");
const fourthOutput = document.querySelector("#number_id_output");
const fifthOutput = document.querySelector("#companion_id_output");
const sixtOutput = document.querySelector("#companion_num_id_output");
const seventhOutput = document.querySelector("#date_id_output");
const eightOutput = document.querySelector("#activity_id_output");

/* Submit */
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Hent værdier fra form
  const formData = new FormData(form);

  const firstName = formData.get("first_name");
  const surName = formData.get("surname_id");
  const eMail = formData.get("email_id");
  const number = formData.get("number_id");
  const companion = formData.get("companion_id");
  const companionid = formData.get("companion_number_id");
  const dateid = formData.get("date_id");
  const activity = formData.get("activity_id");

  // Sæt værdier ind i output-elementer

  firstOutput.textContent = firstName;
  secondOutput.textContent = surName;
  thirdOutput.textContent = eMail;
  fourthOutput.textContent = number;
  fifthOutput.textContent = companion;
  sixtOutput.textContent = companionid;
  seventhOutput.textContent = dateid;
  eightOutput.textContent = activity;

  // ...

  form.reset();
}

/*....Herefter indsæt fra javascript-form-side-original: Cancel pop-up og errormessages ....*/

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("submit", handleSubmit);
form.addEventListener("invalid", cancelPopup, true);
