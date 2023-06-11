import axios from "axios";

const instance = axios.create({
  baseURL: 'https://worldsgeekbackend-production.up.railway.app', // URL do serviço web do Railway
});

// User

export const getUsers = () =>
  instance
    .get("/user")
    .then((res) => {
      console.log("MeusDados:", res.data);
      return res.data;
});

export const createUser = ({ username, email, password }) =>
  instance.post("/user", {
    username,
    email,
    password,
});

// Character 

export const getCharacter = () =>
  instance
    .get("/character")
    .then((res) => {
      console.log("MeusDados:", res.data);
      return res.data;
});

// List 

export const getList = () =>
  instance
    .get("/list")
    .then((res) => {
      console.log("MeusDados:", res.data);
      return res.data;
});

export const createList = ({ listname, userId }) =>
  instance.post("/list", {
    listname,
    userId
});

export const updateList = (listId, listname) =>
  instance.put(`/list/${listId}`, { listname } );

export const deleteList = (listId) =>
  instance.delete(`/list/${listId}`);

export const addCharacterToList = (characterId, listId, userId) =>
  instance.post(`/character/charlist`, {
    characterId,
    listId,
    userId,
});