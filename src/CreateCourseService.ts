interface Course {
  name: String;
  duration?: Number;
  educator: String;
}

class CreateCourseService {
  execute({ duration = 8, educator, name }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();
