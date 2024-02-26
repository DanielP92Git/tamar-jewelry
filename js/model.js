export const state = {
  items: {},
};


export const createItemObject = function (data) {
    const { item } = data.data;
    return {
      id: item.id,
      title: item.title,
      image: item.image_url,
    };
  };