import Thread from "../models/thread.model";
import { connectToDB } from "../mongoose";

interface TypeThread {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}
export async function createThread({
  text,
  author,
  communityId,
  path,
}: TypeThread) {
  // connect to mongoose DB
  connectToDB();

  const createThread = await Thread.create();
}
