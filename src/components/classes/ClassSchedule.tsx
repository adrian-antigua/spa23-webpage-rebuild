"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/Eyebrow";

type ScheduleClass = {
  id: string;
  name: string;
  category: string;
  color: string;
  time: string;
  duration: string;
  site: string;
  room: string;
  location: string;
  instructor: string;
  description: string;
  equipment?: string;
  status: string;
};

type ScheduleDay = {
  day: string;
  date: number;
  isoDate: string;
  classes: ScheduleClass[];
};

type ScheduleData = {
  schedule: ScheduleDay[];
};

const CATEGORY_COLORS: Record<string, string> = {
  YOGA: "bg-emerald-100 text-emerald-800",
  "HOT YOGA": "bg-amber-100 text-amber-800",
  STRENGTH: "bg-red-100 text-red-800",
  CYCLE: "bg-sky-100 text-sky-800",
  AQUA: "bg-blue-100 text-blue-800",
  "BODY PUMP": "bg-rose-100 text-rose-800",
  "BODY COMBAT": "bg-orange-100 text-orange-800",
  "BODY BALANCE": "bg-teal-100 text-teal-800",
  FLEXIBILITY: "bg-green-100 text-green-800",
  "CIRCUIT/ HIIT": "bg-red-100 text-red-800",
  "CIRCUIT/HIIT": "bg-red-100 text-red-800",
  "LOW IMPACT": "bg-lime-100 text-lime-800",
  DANCE: "bg-pink-100 text-pink-800",
  "DANCE ATTACK": "bg-pink-100 text-pink-800",
  ZUMBA: "bg-fuchsia-100 text-fuchsia-800",
  PILATES: "bg-violet-100 text-violet-800",
  "PILATES MAT": "bg-violet-100 text-violet-800",
  "TAI CHI": "bg-amber-100 text-amber-800",
  CARDIO: "bg-orange-100 text-orange-800",
  FUNCTIONAL: "bg-stone-100 text-stone-800",
};

function getCategoryStyle(category: string) {
  return CATEGORY_COLORS[category] || "bg-cream-dark text-navy";
}

const API_URL =
  "https://perch-platform-api.onrender.com/public/gx/schedule?orgSlug=ghf";

export function ClassSchedule() {
  const [data, setData] = useState<ScheduleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeDay, setActiveDay] = useState(0);
  const [filter, setFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json: ScheduleData) => {
        setData(json);
        // Default to first day with classes
        const idx = json.schedule.findIndex((d) => d.classes.length > 0);
        if (idx >= 0) setActiveDay(idx);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="bg-cream-dark py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">Schedule</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Class Schedule
            </h2>
            <div className="mt-12 flex justify-center">
              <div className="h-8 w-8 animate-spin border-4 border-teal border-t-transparent rounded-full" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="bg-cream-dark py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-4 block">Schedule</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
              Class Schedule
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-dark">
              Schedule is temporarily unavailable. Please check back later or call us at 973-839-8823.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const days = data.schedule;
  const currentDay = days[activeDay];

  // Get unique categories for the active day
  const dayCategories = [
    "All",
    ...Array.from(new Set(currentDay.classes.map((c) => c.category))).sort(),
  ];

  const filteredClasses =
    filter === "All"
      ? currentDay.classes
      : currentDay.classes.filter((c) => c.category === filter);

  return (
    <section className="bg-cream-dark py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4 block">Schedule</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl">
            Class Schedule
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-dark">
            Browse this week&rsquo;s group fitness classes. Placeholder schedule shown for demonstration purposes.
          </p>
        </div>

        {/* Day tabs */}
        <div className="mt-12 flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {days.map((day, i) => (
            <button
              key={day.isoDate}
              onClick={() => {
                setActiveDay(i);
                setFilter("All");
                setExpandedId(null);
              }}
              className={cn(
                "flex flex-shrink-0 flex-col items-center px-5 py-3 text-sm font-medium transition-colors",
                i === activeDay
                  ? "bg-navy text-warm-white"
                  : "bg-warm-white text-navy hover:bg-navy/10"
              )}
            >
              <span className="text-xs uppercase tracking-wider opacity-70">
                {day.day.slice(0, 3)}
              </span>
              <span className="mt-0.5 text-xl font-semibold">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Category filter */}
        <div className="mt-6 flex flex-wrap gap-2">
          {dayCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setExpandedId(null);
              }}
              className={cn(
                "px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
                filter === cat
                  ? "bg-teal text-warm-white"
                  : "bg-warm-white text-slate-dark hover:bg-navy/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Class count */}
        <p className="mt-6 text-sm text-slate">
          {filteredClasses.length} class{filteredClasses.length !== 1 ? "es" : ""}{" "}
          {filter !== "All" && (
            <>
              in <span className="font-medium text-navy">{filter}</span>
            </>
          )}
        </p>

        {/* Schedule grid */}
        <div className="mt-4 space-y-3">
          {filteredClasses.length === 0 ? (
            <div className="bg-warm-white px-6 py-12 text-center">
              <p className="text-slate-dark">No classes scheduled for this day.</p>
            </div>
          ) : (
            filteredClasses.map((cls) => {
              const isExpanded = expandedId === cls.id;
              return (
                <button
                  type="button"
                  key={cls.id}
                  onClick={() => setExpandedId(isExpanded ? null : cls.id)}
                  className="w-full bg-warm-white text-left transition-shadow hover:shadow-md"
                >
                  <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                    {/* Left: time + name */}
                    <div className="flex items-start gap-4 sm:items-center">
                      <div className="w-32 flex-shrink-0">
                        <p className="text-sm font-semibold text-navy">
                          {cls.time.split("–")[0]?.trim()}
                        </p>
                        <p className="text-xs text-slate">{cls.duration}</p>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-navy">
                          {cls.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-slate">
                          {cls.instructor || "TBD"}
                        </p>
                      </div>
                    </div>

                    {/* Right: category + room */}
                    <div className="flex items-center gap-3 sm:flex-shrink-0">
                      <span
                        className={cn(
                          "px-3 py-1 text-xs font-medium",
                          getCategoryStyle(cls.category)
                        )}
                      >
                        {cls.category}
                      </span>
                      <span className="hidden text-xs text-slate sm:block">
                        {cls.room}
                      </span>
                      <svg
                        className={cn(
                          "h-4 w-4 flex-shrink-0 text-slate transition-transform",
                          isExpanded && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded details */}
                  {isExpanded && (
                    <div className="border-t border-charcoal/10 px-5 pb-5 pt-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-sm leading-relaxed text-slate-dark">
                            {cls.description.length > 300
                              ? cls.description.slice(0, 300) + "..."
                              : cls.description}
                          </p>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex gap-2">
                            <span className="font-medium text-navy">Time:</span>
                            <span className="text-slate-dark">{cls.time}</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="font-medium text-navy">Duration:</span>
                            <span className="text-slate-dark">{cls.duration}</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="font-medium text-navy">Location:</span>
                            <span className="text-slate-dark">{cls.location}</span>
                          </div>
                          {cls.instructor && (
                            <div className="flex gap-2">
                              <span className="font-medium text-navy">Instructor:</span>
                              <span className="text-slate-dark">{cls.instructor}</span>
                            </div>
                          )}
                          {cls.equipment && (
                            <div className="flex gap-2">
                              <span className="font-medium text-navy">Equipment:</span>
                              <span className="text-slate-dark">{cls.equipment}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-slate">
          Placeholder schedule from Gainesville Health &amp; Fitness for demonstration purposes.
          Actual Spa 23 schedule will replace this data.
        </p>
      </div>
    </section>
  );
}
