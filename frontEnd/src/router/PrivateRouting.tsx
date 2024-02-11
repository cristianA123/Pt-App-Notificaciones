
// import { UserRoutes } from "../features/user/routes";
// import { SchoolRoutes } from "../features/school/routes";
// import { SubsidiarieRoutes } from "../features/subsidiaries/routes";
// import { TeacherRoutes } from "../features/teacher/routes";
// import { StudentRoutes } from "../features/student/routes";
// import { AcademicManagementRoutes } from "../features/academic-management/routes";
// import { ClassroomRoutes } from "../features/classroom/routes";
// import { CourseRoutes } from "../features/courses/routes";
// import { LeasonRoutes } from "../features/leasons/routes";

import { IncidentRoutes } from "../features/incidents/routes";

export const PrivateRouting = [
  // {
  //   index: true,
  //   // element: <DashboardPage />,
  //   element: <p className="text-c_primary">DashboardPage</p>,
  // },
  ...IncidentRoutes,
  // ...AcademicManagementRoutes,
  // ...StudentRoutes,
  // ...TeacherRoutes,
  // ...UserRoutes,
  // ...SchoolRoutes,
  // ...SubsidiarieRoutes,
  // ...ClassroomRoutes,
  // ...CourseRoutes,
  // ...LeasonRoutes,
]