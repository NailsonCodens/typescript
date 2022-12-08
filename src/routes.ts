import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "Node",
    educator: "Dani",
    duration: 10,
  });

  CreateCourseService.execute({
    name: "React",
    educator: "Diego",
  });

  return response.send();
}
