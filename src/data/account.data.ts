export const accountData = {
  firstName: 'k18',
  lastName: 'lam.pdh',
  password: 'lam@k18',
  email: 'lamphan290997@gmail.com',

  get username() {
    return `${this.firstName}-${this.lastName}`;
  }
};


