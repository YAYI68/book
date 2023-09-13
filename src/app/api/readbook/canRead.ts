import dbConnect from "@/backend/database";
import User from "@/backend/models/user.model";
import { UserType } from "../../../../types/next-auth";

export async function canRead(user: UserType) {
  await dbConnect();
  try {
    const currentDuration = +new Date();
    const lastDuration = +new Date(`${user.duration}`);
    if (currentDuration < lastDuration && user.readCount < user.readLimit) {
      console.log("condition One ");
      await User.updateOne(
        { _id: user._id },
        {
          readCount: user.readCount++,
        }
      );
      return true;
    }
    if (currentDuration > lastDuration && user.readCount < user.readLimit) {
      console.log("condition Two ");
      await User.updateOne(
        { _id: user._id },
        {
          readCount: user.readCount++,
          duration: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
        }
      );
      return true;
    }
    if (currentDuration > lastDuration && user.readCount === user.readLimit) {
      console.log("condition Three ");
      await User.updateOne(
        { _id: user._id },
        {
          readCount: user.readCount++,
          duration: new Date(+new Date() + 7 * 24 * 60 * 60 * 1000),
          readLimit:
            user.plan === "free"
              ? user.readLimit + 5
              : user.plan === "starter"
              ? user.readLimit + 10
              : Number.POSITIVE_INFINITY,
        }
      );
      return true;
    }
    //   reach limit for the week
    if (currentDuration < lastDuration && user.readCount === user.readLimit) {
      return false;
    }
  } catch (error) {
    return false;
  }
}
