const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      favorites: [],
    },
    actions: {
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
      },
      addFavorite : (element) => {
        const store = getStore();
        const favorites = store.favorites;
        favorites.push(element);

        setStore({ favorites });
      },
      removeFavorite : (element) => {
        const store = getStore();
        const favorites = store.favorites;
        const i = favorites.findIndex((el) => el.id === element.id && el.entity === element.entity);
        favorites.splice(i, 1);

        setStore({ favorites });
      },
      changeColor: (index, color) => {
        const store = getStore();

        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
