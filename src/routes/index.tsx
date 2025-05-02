import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <p className="">
        I’ve always been drawn to the process of building—whether it’s a line of
        code, a user experience, or a community. In April 2024, I joined
        <strong>The Gym</strong>, a software traineeship program, as a curious
        software developer trainee. What started as a deep dive into learning
        soon turned into something more. After completing the program, I had the
        privilege of staying on as a software development coach, contributing to
        open source projects, and even co-hosting their very first AI Club.
      </p>
      <p className="">
        My interests span far and wide—JavaScript, design, artificial
        intelligence, writing, serving others, and long reflective walks that
        help me tie it all together.
      </p>
      <p className="">
        I graduated from AUCA in 2023 with a degree in Networks and
        Communication Systems. My journey into tech began in QA, where I learned
        to think critically and pay attention to the little things—skills I
        carry with me into every line of code I write today.
      </p>
      <p className="">
        These days, I call Kigali, Rwanda home—a place that continues to shape
        how I see the world and the kind of work I want to do.
      </p>
    </>
  );
}
