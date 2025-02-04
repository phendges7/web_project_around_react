import EditAvatar from "./Popup/components/EditAvatar/EditAvatar";
import EditProfile from "./Popup/components/EditProfile/EditProfile";
import NewCard from "./Popup/components/NewCard/NewCard";

export const Popups = {
  editAvatarPopup: {
    title: "Alterar foto de perfil",
    children: <EditAvatar />,
  },
  editProfilePopup: { title: "Editar perfil", children: <EditProfile /> },
  newCardPopup: { title: "Novo local", children: <NewCard /> },
};

export const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];
