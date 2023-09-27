const mixin = {
  methods : {
        isSideBarVisible(sideBarType) {
            return localStorage.getItem(sideBarType) !== "hidden";
        }
  }

};

export default mixin;