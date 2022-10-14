class Validation {
  isEmail(str) {
    return str.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }
  isPasswordsMatches(pass1, pass2) {
    return pass1 === pass2;
  }
  isPasswordLength(pass, length) {
    return pass.length === length;
  }
}
