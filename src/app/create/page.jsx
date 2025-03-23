"use client";

import { optionLocations, optionTypes } from "@/data/data";
import { createValidation } from "@/lib/schemaValidation";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Select from "@/ui/Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createNewListing, postImages } from "./api";

const CreatePage = () => {
  const [images, setImages] = useState([]);
  const router = useRouter();

  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async ({ data, imageUrls }) =>
      createNewListing(data, imageUrls),
    mutationKey: ["listings"],
    onError: (error) => toast.error(error.message),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createValidation),
    defaultValues: {
      name: "",
      desc: "",
      beds: 5,
      hasFreeWifi: false,
      type: "luxury",
      location: "dubai",
      pricePerNight: 123,
    },
  });

  useEffect(() => {
    Object.keys(errors).forEach((key) => toast.error(errors[key].message));
  }, [errors]);

  const handleImage = useCallback((e) => {
    setImages((prev) => [...prev, ...Array.from(e.target.files)]);
  }, []);

  const uploadImage = async (image, idx) => {
    if (!image) return;

    const toastId = toast.loading(`Uploading image ${idx + 1}...`);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const imageUrl = await postImages(CLOUD_NAME, formData);
      toast.success(`Uploaded image ${idx + 1}`);
      toast.dismiss(toastId);
      return imageUrl;
    } catch (error) {
      toast.error(`Failed to upload image ${idx + 1}`);
      return null;
    }
  };

  const onSubmit = async (data) => {
    if (images.length === 0) {
      return toast.error("You must upload at least one image!");
    }

    const imageUrls = await Promise.all(images.map(uploadImage));
    if (imageUrls.includes(null)) return toast.error("Image upload failed!");

    const newListing = await mutateAsync({ data, imageUrls });
    toast.success("Listing created! Redirecting...");
    router.push(`/details/${newListing.id}`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-lg bg-white rounded-xl border border-slate-300 shadow-lg">
        {/* Header */}
        <div className="p-4 border-b border-gray-300">
          <h3 className="text-center font-semibold text-2xl text-gray-800">
            Create a Listing
          </h3>
        </div>

        {/* Form */}
        <form
          className="p-6 flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            className="w-full border border-slate-400 p-2 rounded-md"
            type="text"
            placeholder="Enter Name"
            {...register("name")}
          />
          <Input
            className="w-full border border-slate-400 p-2 rounded-md"
            type="text"
            placeholder="Enter Description"
            {...register("desc")}
          />
          <Input
            className="w-full border border-slate-400 p-2 rounded-md"
            type="number"
            placeholder="Beds"
            {...register("beds", { valueAsNumber: true })}
            min={1}
            step={1}
          />
          <Select
            className="w-full border border-slate-400 p-2 rounded-md"
            data={optionLocations}
            {...register("location")}
          />
          <Select
            className="w-full border border-slate-400 p-2 rounded-md"
            data={optionTypes}
            {...register("type")}
          />
          <Input
            className="w-full border border-slate-400 p-2 rounded-md"
            type="number"
            placeholder="Price per Night"
            {...register("pricePerNight", { valueAsNumber: true })}
            min={15}
            step={0.01}
          />

          <div className="flex items-center gap-4">
            <Input
              type="checkbox"
              className="w-4 h-4 cursor-pointer"
              id="freeWifi"
              {...register("hasFreeWifi")}
            />
            <label htmlFor="freeWifi" className="text-gray-700">
              Free Wifi
            </label>
          </div>

          <div>
            <input
              type="file"
              id="images"
              className="hidden"
              onChange={handleImage}
              multiple
            />
            <label
              htmlFor="images"
              className="text-gray-700 border border-gray-300 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
            >
              Upload Images
            </label>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            label="Submit"
            className="w-full bg-blue-500 text-white text-lg font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
          />
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
