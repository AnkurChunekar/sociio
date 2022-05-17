export const saveAvatarToCloudinaryService = async (avatar, setterFn) => {
  try {
    const data = new FormData();
    data.append("file", avatar);
    data.append("upload_preset", "ckmjgh26");
    const requestOptions = {
      method: "POST",
      body: data,
    };
    await fetch(
      "https://api.cloudinary.com/v1_1/sociio/image/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        setterFn((data) => ({ ...data, avatarURL: json.url }));
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
