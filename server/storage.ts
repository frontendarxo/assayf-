import { db } from "./db";
import {
  contactMessages,
  type InsertContactMessage,
  type ContactMessageResponse
} from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessageResponse>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessageResponse> {
    const [created] = await db.insert(contactMessages).values(message).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
