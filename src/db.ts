import { createConnection } from "typeorm";
/*import { Club } from "./models/Club";
import { Court } from "./models/Court";
import { CourtType } from "./models/CourtType";
import { Rental } from "./models/Rental";*/
import { User } from "./models/User";
import { UserType } from "./models/UserType";
import {Person} from "./models/Person";
import { Sport } from "./models/Sport";
import { Day } from "./models/Day";
import { Valuation } from "./models/Valuation";
import { Level } from "./models/Level";
import { Turn } from "./models/Turn";
import { Position } from "./models/Position";
import { Availability } from "./models/Availability";
import { Player } from "./models/Player";

export const connectDatabase = async () => {
  try {
    await createConnection({
      type: "mysql",
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      synchronize: true,
      entities: [/*Court, CourtType, Club,Rental*/ User, UserType, Person, Sport,Day,Level,Valuation, Turn,Position,Availability,Player],
      ssl: false,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};
