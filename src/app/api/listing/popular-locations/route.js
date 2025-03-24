import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const abudhabi_listings = await db.listing.count({
      where: {
        location: "abu-dhabi",
      },
    });

    const dubai_listings = await db.listing.count({
      where: {
        location: "dubai",
      },
    });

    const mumbai_listings = await db.listing.count({
      where: {
        location: "mumbai",
      },
    });

    const delhi_listings = await db.listing.count({
      where: {
        location: "delhi",
      },
    });

    const berlin_listings = await db.listing.count({
      where: {
        location: "berlin",
      },
    });

    const hamburg_listings = await db.listing.count({
      where: {
        location: "hamburg",
      },
    });

    const st_tropez_listings = await db.listing.count({
      where: {
        location: "st-tropez",
      },
    });

    const paris_listings = await db.listing.count({
      where: {
        location: "paris",
      },
    });

    const results = [
      {
        numOfPlaces: abudhabi_listings,
        image: "/assets/AbuDhabi.jpg",
        value: "abu-dhabi",
      },
      {
        numOfPlaces: dubai_listings,
        image: "/assets/berlin.jpg",
        value: "dubai",
      },
      {
        numOfPlaces: mumbai_listings,
        image: "/assets/Mumbai.jpg",
        value: "mumbai",
      },
      {
        numOfPlaces: delhi_listings,
        image: "/assets/Delhi.jpg",
        value: "delhi",
      },
      {
        numOfPlaces: berlin_listings,
        image: "/assets/berlin.jpg",
        value: "berlin",
      },
      {
        numOfPlaces: hamburg_listings,
        image: "/assets/Hamburg.jpg",
        value: "hamburg",
      },
      {
        numOfPlaces: st_tropez_listings,
        image: "/assets/StTropez.jpg",
        value: "st-tropez",
      },
      {
        numOfPlaces: paris_listings,
        image: "/assets/paris.jpg",
        value: "paris",
      },
    ];

    const sortedResults = results
      .sort((a, b) => b.numOfPlaces - a.numOfPlaces)
      .slice(0, 4);

    return NextResponse.json(sortedResults);
  } catch (error) {
    return NextResponse.error(error);
  }
}
