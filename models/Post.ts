import mongoose, { model, models, Schema } from "mongoose";

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  desc: {
    type: String,
    required: [true, "Desc is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
