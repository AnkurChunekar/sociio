export const saveAvatarToCloudinaryService = (avatar, editUser, inputData, onClose) => {
  const data = new FormData();
  data.append("file", avatar);
  data.append("upload_preset", "ckmjgh26");
  const requestOptions = {
    method: "POST",
    body: data,
  };
  fetch("https://api.cloudinary.com/v1_1/sociio/image/upload", requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const data = { ...inputData, avatarURL: json.url };
      editUser(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      onClose();
    })
};
