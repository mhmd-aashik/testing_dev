import { Schema, models, model, Document } from "mongoose";

export interface ITag extends Document {
  name: { type: String; required: true };
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

export const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdOn: { type: Date, default: Date.now },
});

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;