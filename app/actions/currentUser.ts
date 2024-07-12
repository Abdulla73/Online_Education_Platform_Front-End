"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const currentUser = async () => {
  try {
    const accessToken = cookies().get("access_token")?.value;

    // Make a GET request to the profile endpoint with the access token
    const response = await axios.get("http://localhost:3000/auth/my-profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200) {
      return response.data; // Return the user info object
    } else {
      console.error("Failed to fetch user profile:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user profile:", (error as Error).message);
    return null;
  }
};
