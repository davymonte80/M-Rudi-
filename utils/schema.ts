import {
  integer,
  varchar,
  PgTable,
  serial,
  text,
  timestamp,
  jsonb,
  boolean,
} from "drizzle-orm/pg-core";

export const Users = new PgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 256 }).notNull(),
  name: varchar("name", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const reports = new PgTable("reports", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id", { mode: "number" })
    .references(() => Users.id)
    .notNull(),
  report_date: timestamp("report_date").notNull().defaultNow(),
});
