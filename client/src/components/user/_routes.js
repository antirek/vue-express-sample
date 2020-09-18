import UserHome from "./home.vue";
import UserProfile from "./profile.vue";
import UserEdit from "./edit.vue";

const UserRoutes = [
  {
    path: "",
    component: UserHome,
    name: "userHome"
  },
  {
    path: "profile",
    component: UserProfile,
    name: "userProfile"
  },
  {
    path: "edit",
    component: UserEdit,
    name: "userEdit"
  }
];

export default UserRoutes;
