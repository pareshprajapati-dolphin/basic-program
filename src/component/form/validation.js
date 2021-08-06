function validation(data) {
  console.log("validation");
  let errors = null;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!data.firstname) {
    errors = "firstname is required";
    return errors;
  } else if (!data.lastname) {
    errors = "lastname is required";
    return errors;
  } else if (mailformat.test(data.email)) {
    errors = "email is required";
    return errors;
  } else if (!data.password) {
    errors = "password is required";
    return errors;
  }

  return errors;
}

export default validation;
