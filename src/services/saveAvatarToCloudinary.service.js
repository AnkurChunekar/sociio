export const saveAvatarToCloudinaryService = (
  editUserHandler,
  inputData,
  oldAvatarURL
) => {
  const data = new FormData();
  data.append("file", inputData.avatarFile);
  data.append("upload_preset", "ckmjgh26");
  const requestOptions = {
    method: "POST",
    body: data,
  };

  if (inputData.avatarURL !== "") {
    fetch("https://api.cloudinary.com/v1_1/sociio/image/upload", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const data = { ...inputData, avatarURL: json.url };
        editUserHandler(data);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    editUserHandler({...inputData, avatarURL: oldAvatarURL});
  }
};
