"use client";
import React from "react";
import { motion } from "framer-motion";
import { approach } from "@/data";

export default function Approach() {
  return (
    <section id="approach" className="py-20 w-full z-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-100/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="heading text-foreground">
          My{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
            Approach
          </span>
        </h1>
        <p className="text-center text-muted-foreground mt-3 text-base md:text-lg max-w-2xl mx-auto">
          A structured, six-phase framework for delivering reliable, enterprise-grade AI solutions —
          from first conversation to live production.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative mt-20 max-w-5xl mx-auto px-4">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-300 via-sky-300 to-indigo-300 hidden lg:block" />

        <div className="flex flex-col gap-12">
          {approach.map((phase, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col`}
              >
                {/* Card */}
                <div className="w-full lg:w-[calc(50%-2.5rem)]">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`relative rounded-2xl bg-white border ${phase.borderColor || "border-gray-200"} shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group`}
                  >
                    {/* Top gradient accent */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${phase.color}`} />

                    <div className="p-6 md:p-8">
                      {/* Phase tag + icon */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${phase.color} text-white`}>
                          {phase.order}
                        </span>
                        <span className="text-2xl">{phase.icon}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
                        {phase.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                        {phase.des}
                      </p>

                      {/* Highlight bullets */}
                      {phase.highlights && (
                        <ul className="space-y-2">
                          {phase.highlights.map((h: string, j: number) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-br ${phase.color} flex-shrink-0`} />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Center Badge (desktop only) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full shadow-lg items-center justify-center z-10 bg-white border-2 border-primary/30">
                  <span className="text-lg font-bold bg-gradient-to-br from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                    {i + 1}
                  </span>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-[calc(50%-2.5rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
