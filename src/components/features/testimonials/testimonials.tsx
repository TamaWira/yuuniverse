import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Bayu is a rare breed of developer who cares deeply about the product. His attention to detail and design sense turned our rough ideas into a polished, user-friendly application.",
    author: "Sarah Jenkins",
    role: "Product Manager at TechFlow",
    avatar: "/avatars/sarah.jpg", // Placeholder
  },
  {
    quote:
      "Working with Bayu was a breeze. He communicates clearly, delivers on time, and the code quality is top-notch. Highly recommended for any full-stack project.",
    author: "Michael Chen",
    role: "Founder of StartUp Inc.",
    avatar: "/avatars/michael.jpg", // Placeholder
  },
  {
    quote:
      "The data scraping solution Bayu built for us saved us hundreds of hours of manual work. Efficient, reliable, and exactly what we needed.",
    author: "Emily Rodriguez",
    role: "Data Lead at InsightCorp",
    avatar: "/avatars/emily.jpg", // Placeholder
  },
];

export function Testimonials() {
  return (
    <section className="mt-10 md:mt-20 text-black space-y-10">
      <div>
        <h2 className="font-abhaya font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-tight md:leading-14">
          Kind Words.
          <br />
          Trusted Partners.
        </h2>
        <p className="text-black/70 mt-4">
          I don&apos;t just write code; I build relationships. Here&apos;s what
          clients and collaborators have to say about working with me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-neutral-50 dark:bg-neutral-900/50"
          >
            <CardHeader className="pb-2">
              <Quote className="size-8 text-primary-500/50 mb-2" />
              <p className="text-lg font-medium leading-relaxed italic text-neutral-700 dark:text-neutral-300">
                &quot;{testimonial.quote}&quot;
              </p>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-bold text-sm">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-bold text-sm">{testimonial.author}</p>
                  <p className="text-xs text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
