import { cn } from "@/libs/utils";

const data = [
  {
    name: "John Doe",
    position: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export default function AvatarList({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes: Record<"sm" | "md" | "lg", string> = {
    lg: "m-3 size-10",
    md: "m-2 size-10",
    sm: "m-1 size-10",
  };

  return (
    <div className={cn("flex py-12", className)}>
      {data.map((item) => (
        <div
          key={item.name}
          className="group relative z-0 -ml-4 flex scale-100 items-center"
        >
          <div className="relative overflow-hidden rounded-full">
            <div className="bg-size pointer-events-none absolute h-full w-full animate-bg-position  opacity-15" />
            <div className="z-1 blur-lg" />
            <img
              src={item.image}
              alt={item.name}
              className={cn("rounded-full object-cover", sizes[size] ?? sizes.md)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
