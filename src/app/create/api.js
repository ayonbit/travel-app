import AXIOS_API from "@/utils/axiosAPI";

export async function postImages(CLOUD_NAME, formData) {
  if (!CLOUD_NAME) {
    throw new Error("Cloudinary cloud name is missing!");
  }

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(`Cloudinary upload failed: ${errorData.error.message}`);
    }

    const data = await res.json();
    return data.secure_url; // Return the uploaded image URL
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Image upload failed. Please try again.");
  }
}

export async function createNewListing(data, imageUrls) {
  try {
    const response = await AXIOS_API.post("/listing", {
      ...data,
      imageUrls,
    });

    if (!response || !response.data) {
      throw new Error("Invalid response from the server");
    }

    // console.log("New listing created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating listing:", error);
    throw new Error("Failed to create a new listing.");
  }
}
