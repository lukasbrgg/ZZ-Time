export function validateValidationTimeSlot(created: Date) {
  const createdDate = new Date(created);
  const today = new Date().getTime();

  let timeDiff = Math.abs(today - createdDate.getTime());
  const date = new Date(timeDiff);
  const difference = date.getMinutes();

  return difference <= 10;
}

export function validatePassword(password: string) {
  return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
}

export function validateEmail(email: string) {
  return email.match(
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
  );
}
