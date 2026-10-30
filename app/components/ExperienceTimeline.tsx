"use client";
import React from "react";
import { Timeline } from "./ui/timeline";
import { timelinePage } from "@/data/content";

export function ExperienceTimeline() {
  const data = timelinePage.timeline.map((item) => ({
    title: item.period,
    content: (
      <div className="pb-20">
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-2">
            {item.role}
          </h3>
          {item.companyUrl ? (
            <a
              href={item.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-neutral-700 hover:text-orange-600 transition-colors mb-1 inline-block"
            >
              {item.company}
            </a>
          ) : (
            <p className="text-lg text-neutral-700 mb-1">{item.company}</p>
          )}
          <p className="text-sm text-neutral-500">{item.location}</p>
        </div>

        {item.description && item.description.length > 0 && (
          <div className="space-y-4 text-neutral-700 leading-relaxed mb-8">
            {item.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}

        {item.highlights && item.highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-[0.2em] text-orange-600 mb-4 font-semibold">
              Highlights
            </h4>
            <ul className="space-y-2">
              {item.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start text-neutral-700">
                  <span className="text-orange-600 mr-3 mt-1">—</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.focus && item.focus.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-[0.2em] text-orange-600 mb-4 font-semibold">
              Core Focus Areas
            </h4>
            <ul className="space-y-2">
              {item.focus.map((focusItem, index) => (
                <li key={index} className="flex items-start text-neutral-700">
                  <span className="text-orange-600 mr-3 mt-1">—</span>
                  <span>{focusItem}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.clients && item.clients.length > 0 && (
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-orange-600 mb-3 font-semibold">
              Select Clients
            </h4>
            <p className="text-neutral-700">{item.clients.join(" · ")}</p>
          </div>
        )}
      </div>
    ),
  }));

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto pt-8">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          {timelinePage.hero.title}
        </h2>
        <p className="text-lg text-neutral-700 leading-relaxed max-w-prose">
          {timelinePage.hero.subtitle}
        </p>
      </div>
      <Timeline data={data} />

      {/* Education Section */}
      <div className="px-8 pb-24">
        <div className="max-w-7xl mx-auto border-t border-neutral-200 pt-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-orange-600 mb-6 font-semibold">
            Education
          </h2>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-1">
              {timelinePage.education.school}
            </h3>
            <p className="text-neutral-600">{timelinePage.education.period}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
