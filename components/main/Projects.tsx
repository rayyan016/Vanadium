import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center gap-10 px-10">
        <ProjectCard
          src="/Proj1.png"
          title="Ecommerce App"
          description={`Built a four-screen app using the T3 stack with Next.js API routes (instead of traditional APIs), Tailwind CSS for styling, and PostgreSQL (Neon) + Prisma for database management.
  
  - Auth Flow: Signup with email/password, OTP verification via NodeMailer, and secure authentication.
  - Protected Routes: Users access a choices screen only after login, with category data generated using Faker.js.
  - Persistent Data: Selected categories are stored in PostgreSQL, ensuring a personalized experience on return.`}
          url="https://github.com/rayyan016/Roc8-March-Ecommerce"
        />

        <ProjectCard
          src="/Proj2.png"
          title="Email Client with Pagination and Filtering"
          description={`Built with Next.js 14, Tailwind CSS, and Ant Design, this email client supports pagination, filtering, and read-state management with localStorage.

- Pagination: Displays up to 10 emails per page.
- Filtering: View favorites, read, unread, or all emails.
- Favorite Management: Mark/unmark emails as favorites.
- Read State Persistence: Emails are marked as read when opened.
- Loading States: Skeleton loaders for better UX.`}
          url="https://github.com/rayyan016/Faux_Outlook"
        />
        {/* <ProjectCard
          src="/Proj3.png"
          title="Space Themed Website"
          description="This project was created with the goal of learning about the working of Three.js and animations in the frontend. It also utilizes Tailwind CSS and TypeScript for enhanced styling and type safety."
          url="https://github.com/rayyan016/Vanadium"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
