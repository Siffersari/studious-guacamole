export default {
  logout(context) {
    context.commit("setAuth", { isAuth: false });
  },
  login(context) {
    context.commit("setAuth", { isAuth: true });
  },
};
