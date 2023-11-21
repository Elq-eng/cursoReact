export const fileUpload = async (file) => {
  // if (!file) throw new Error("Do not have files to upload ");
  if ( !file ) return null

  const cloudUr = "https://api.cloudinary.com/v1_1/dz3eydtm6/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);
  console.log(file)

  try {
    const resp = await fetch(cloudUr, {
      method: "POST",
      body: formData,
    });
    if (!resp.ok) throw new Error("file could not be uploaded");

    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
