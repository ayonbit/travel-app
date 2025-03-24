"use client";

import Pagination from "@/components/pagination/Pagination";
import Input from "@/ui/Input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import Review from "./Review";
import { getReviewsByListing, postReview } from "./service";

const Reviews = ({ id }) => {
  const [selectedStar, setSelectedStar] = useState(5);
  const [text, setText] = useState("");

  const queryClient = useQueryClient();
  const { data: reviews, isPending: isPendingQuery } = useQuery({
    queryFn: () => getReviewsByListing(id),
    queryKey: ["reviews"],
  });

  const { mutate, isPending } = useMutation({
    mutationFn: handleSubmit,
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
      queryClient.invalidateQueries(["listings"]);
    },
  });

  const itemsPerPage = 4;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentReviews = reviews?.slice(itemOffset, endOffset);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (text === "") return toast.error("Review can't be empty");

      const body = {
        text,
        stars: selectedStar,
      };

      await postReview(id, body);
      toast.success("Successfully posted a review");
      setText("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mt-8 w-full flex flex-col items-center lg:items-start">
      {/* Star Rating */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
        {Array.from(Array(5).keys()).map((number) => (
          <span
            key={number}
            onClick={() => setSelectedStar(number + 1)}
            className={`${
              selectedStar === number + 1 ? "scale-125 text-blue-600" : ""
            } cursor-pointer flex items-center gap-1 transition-all`}
          >
            {number + 1}
            <AiFillStar size={22} color="rgb(59, 130, 246)" />
          </span>
        ))}
      </div>

      {/* Review Input Section */}
      <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto border rounded-lg py-3 px-4">
        <Input
          className="outline-none flex-1 min-w-[200px] sm:min-w-[300px]"
          type="text"
          placeholder="Leave your opinion..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button
          disabled={isPending}
          onClick={mutate}
          className="cursor-pointer rounded-lg py-2 px-4 text-sm sm:text-lg text-white bg-blue-500 hover:bg-blue-400 transition-all"
        >
          Post
        </button>
        {/* <Button
          label="Post"
          disabled={isPending}
          onClick={mutate}
          className="cursor-pointer rounded-lg py-2 px-4 text-sm sm:text-lg text-white bg-blue-500 hover:bg-blue-400 transition-all"
        /> */}
      </div>

      {/* Reviews List */}
      <div className="mt-10 w-full max-w-2xl flex flex-col gap-6 px-4 lg:px-0 lg:max-w-3xl">
        {currentReviews?.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 lg:w-auto">
        <Pagination
          setItemOffset={setItemOffset}
          itemsPerPage={itemsPerPage}
          reviews={reviews}
        />
      </div>
    </div>
  );
};

export default Reviews;
