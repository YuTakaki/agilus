import express from "express";
import { AuthController } from "./controller";

export class AuthRoutes extends AuthController {
  readonly path = "/auth";
  constructor() {
    super();
  }
  getRoutes() {
    const route = express.Router();

    route.post("/", this.register);

    return route;
  }
}