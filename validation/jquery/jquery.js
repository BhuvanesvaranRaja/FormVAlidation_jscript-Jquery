$("document").ready(() => {
  // to hide all error fields

  $("#MainError").hide();
  $("#FNameError").hide();
  $("#MNameError").hide();
  $("#LNameError").hide();
  $("#MailError").hide();
  $("#PassError").hide();
  $("#RePassError").hide();
  $("#CodeError").hide();
  $("#PhError").hide();
  $("#GenderError").hide();
  $("#BplaceError").hide();
  $("#CityError").hide();
  $("#AddressError").hide();
  $("#StateError").hide();
  $("#ResumeError").hide();
  $("#AdharError").hide();
  $("#RegisterError").hide();

  // validation statement
  $("form").submit((e) => {
    e.preventDefault();
    ValidateFirstName();
    ValidateMiddleName();
    ValidateLastName();
    ValidateMail();
    ValidatePassword();
    ReValidatePassword();
    ValidateCountry();
    ValidatePhone();
    ValidateGender();
    ValidateCity();
    ValidateAddress();
    ValidateState();
    ValidateResume();
    ValidateAdhar();
    ValidateBirthplace();
    ValidateId();
  });
});

// first name
function ValidateFirstName() {
  let fname = $("#firstname").val();
  if (fname == "" || fname.length < 0 || $.isNumeric(fname)) {
    $("#FNameError").show();
    $("#MainError").show();
    $("#firstname").addClass("border border-danger border-5");
  } else {
    $("#firstname").removeClass("border border-danger border-5");
    $("#firstname").addClass("border border-success border-5");
    $("#MainError").hide();
    $("#FNameError").hide();
  }
}
// middlename
function ValidateMiddleName() {
  let mname = $("#middlename").val();
  if (mname == "" || mname.length < 0 || $.isNumeric(mname)) {
    $("#MNameError").show();
    $("#MainError").show();
    $("#middlename").addClass("border border-danger border-5");
  } else {
    $("#middlename").removeClass("border border-danger border-5");
    $("#middlename").addClass("border border-success border-5");
    $("#MainError").hide();
    $("#MNameError").hide();
  }
}
// last name
function ValidateLastName() {
  let lname = $("#middlename").val();
  if (lname == "" || lname.length < 0 || $.isNumeric(lname)) {
    $("#LNameError").show();
    $("#MainError").show();
    $("#lastname").addClass("border border-danger border-5");
  } else {
    $("#lastname").removeClass("border border-danger border-5");
    $("#lastname").addClass("border border-success border-5");
    $("#MainError").hide();
    $("#LNameError").hide();
  }
}
// MAil
function ValidateMail() {
  let mailFormat = /\S+@\S+\.\S+/;
  var mail = $("#email").val();
  if (!mailFormat.test(mail)) {
    $("#MainError").show();
    $("#MailError").show();
    $("#email").addClass("border border-danger border-5");
  } else {
    $("#MainError").hide();
    $("#MailError").hide();
    $("#email").removeClass("border border-danger border-5");
    $("#email").addClass("border border-success border-5");
  }
}
// password
function ValidatePassword() {
  let password = $("#password").val();
  if (password == "" || password.length < 0) {
    $("#PassError").show();
    $("#MainError").show();
    $("#password").addClass("border border-danger border-5");
  } else {
    $("#password").removeClass("border border-danger border-5");
    $("#password").addClass("border border-success border-5");
    $("#MainError").hide();
    $("#PassError").hide();
  }
}
// conf pass
function ReValidatePassword() {
  let password = $("#password").val();
  let RePassword = $("#Repass").val();
  if (password != RePassword || RePassword.length < 1) {
    $("#RePassError").show();
    $("#MainError").show();
    $("#Repass").addClass("border border-danger border-5");
  } else {
    $("#RePassError").hide();
    $("#MainError").hide();
    $("#Repass").removeClass("border border-danger border-5");
    $("#Repass").addClass("border border-success border-5");
  }
}
// country code

function ValidateCountry() {
  if ($("#countrycode").val() == "") {
    $("#CodeError").show();
    $("MainError").show();
    $("#countrycode").addClass("border border-danger border-5");
  } else {
    $("#countrycode").removeClass("border border-danger border-5");
    $("#countrycode").addClass("border border-success border-5");
    $("#MainError").hide();
    $("#CodeError").hide();
  }
}
//phione and gender
function ValidatePhone() {
  if ($("#Phnumber").val().length != 10) {
    $("#PhError").show();
    $("MainError").show();
    $("#Phnumber").addClass("border border-danger border-5");
  } else {
    $("#MainError").hide();
    $("#PhError").hide();
    $("#Phnumber").removeClass("border border-danger border-5");
    $("#Phnumber").addClass("border border-success border-5");
  }
}
function ValidateGender() {
  if (
    !$("#inlineRadio1").prop("checked") &&
    !$("#inlineRadio2").prop("checked")
  ) {
    $("#GenderError").show();
    $("MainError").show();
  } else {
    $("#MainError").hide();
    $("#GenderError").hide();
  }
}
//DOB

// birthplace
function ValidateBirthplace() {
  let bplace = $("#birthplace").val();
  if (bplace == "" || bplace.length < 0 || $.isNumeric(bplace)) {
    $("#BplaceError").show();
    $("#MainError").show();
    $("#birthplace").addClass("border border-danger border-5");
  } else {
    $("#birthplace").removeClass("border border-danger border-5");
    $("#birthplace").addClass("border border-success border-5");
    $("#MainError").hide();
    $("#BplaceError").hide();
  }
}
// city
function ValidateCity() {
  let cname = $("#city").val();
  if (cname == "" || cname.length < 0 || $.isNumeric(cname)) {
    $("#CityError").show();
    $("#MainError").show();
    $("#city").addClass("border border-danger border-5");
  } else {
    $("#city").removeClass("border border-danger border-5");
    $("#city").addClass("border border-success border-5");
    $("#MainError").hide();
    $("#CityError").hide();
  }
}
// address
function ValidateAddress() {
  let Address = $("#address").val();
  if (Address == "" || Address.length < 0) {
    $("#AddressError").show();
    $("#MainError").show();
    $("#address").addClass("border border-danger border-5");
  } else {
    $("#address").removeClass("border border-danger border-5");
    $("#address").addClass("border border-success border-5");
    $("#MainError").hide();
    $("#AddressError").hide();
  }
}
function ValidateState() {
  if ($("#state").val() == "") {
    $("#StateError").show();
    $("MainError").show();
    $("#state").addClass("border border-danger border-5");
  } else {
    $("#state").removeClass("border border-danger border-5");
    $("#state").addClass("border border-success border-5");
    $("#MainError").hide();
    $("#StateError").hide();
  }
}
// resume
function ValidateResume() {
  if ($("#resume").val() == "") {
    $("#ResumeError").show();
    $("MainError").show();
    $("#resume").addClass("border border-danger border-5");
  } else {
    $("#resume").removeClass("border border-danger border-5");
    $("#resume").addClass("border border-success border-5");
    $("#MainError").hide();
    $("#ResumeError").hide();
  }
}
// aadhar
function ValidateAdhar() {
  if ($("#adhar").val() == "") {
    $("#AdharError").show();
    $("MainError").show();
    $("#adhar").addClass("border border-danger border-5");
  } else {
    $("#adhar").removeClass("border border-danger border-5");
    $("#adhar").addClass("border border-success border-5");
    $("#MainError").hide();
    $("#AdharError").hide();
  }
}
// university id
function ValidateId() {
  let Id = $("#registerId").val();
  if (Id == "" || Id.length < 0) {
    $("#RegisterError").show();
    $("#MainError").show();
    $("#registerId").addClass("border border-danger border-5");
  } else {
    $("#registerId").removeClass("border border-danger border-5");
    $("#registerId").addClass("border border-success border-5");
    $("#MainError").hide();
    $("#RegisterError").hide();
  }
}
