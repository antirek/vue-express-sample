import UserHome from "./home.vue";
import UserProfile from "./profile.vue";
import UserEdit from "./edit.vue";

const ItemsRoutes = [
  {
    path: ":id",
    component: UserHome,
    name: "userHome"
  },
  {
    path: ":id/profile",
    component: UserProfile,
    name: "userProfile"
  },
  {
    path: ":id/edit",
    component: UserEdit,
    name: "userEdit"
  }
];

export default ItemsRoutes;
