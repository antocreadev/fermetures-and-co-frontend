import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function getUser() {
  const cookieStore = cookies();
  const token = cookieStore.get("user_token");

  if (!token) {
    return null;
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "secret");
    const { payload } = await jwtVerify(token.value, secret);
    return payload;
  } catch (error) {
    return null;
  }
}
