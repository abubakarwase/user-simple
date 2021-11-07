export class AppConstants {
  public static EMAIL_PATTERN =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static PASSWORD_PATTERN =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
  public static SIX_COUNT_PATTERN = /@".{6,}"/;
  public static A_SPECIAL_CHARACTER = /(?=.*[!@#$%^&*])/;
  public static A_UPPERCASE = /[A-Z]/;
  public static A_LOWERCASE = /[a-z]/;
  public static A_NUMBER = /[0-9]/;
  public static DEFAULT_REQUIRED_FIELD_ERROR = 'This field is required';
  public static INCORRECT_EMAIL_ADDRESS = 'Enter a valid email address';
  public static ERROR_REQUIRED_FIELDS = 'Required field(s) missing';
}
