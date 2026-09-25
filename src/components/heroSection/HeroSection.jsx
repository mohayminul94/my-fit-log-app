import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#101315]">
        <div className="grid items-center gap-10 px-6 py-12 sm:px-10 md:px-14 lg:grid-cols-2 lg:px-16 lg:py-16">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#16A34A]/30 bg-[#16A34A]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#B8F23A]"></span>

              <span className="text-sm font-medium text-[#B8F23A]">
                Your Fitness. Your Progress.
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build a Stronger
              <span className="block text-[#B8F23A]">
                Version of You.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              FitLog helps you track workouts, monitor your progress, and stay
              consistent with your fitness goals — all in one simple platform.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-xl bg-[#16A34A] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#15803D]">
                Start Your Journey
              </button>

              <button className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/10">
                Explore Workouts
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-2xl font-bold text-white">50+</h3>
                <p className="mt-1 text-sm text-gray-500">Workouts</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">10K+</h3>
                <p className="mt-1 text-sm text-gray-500">Exercises</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">24/7</h3>
                <p className="mt-1 text-sm text-gray-500">Tracking</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex min-h-[400px] items-center justify-center lg:min-h-[500px]">
            
            {/* Background Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-[#16A34A]/20 blur-3xl"></div>

            {/* Main Card */}
            <div className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-[#181C1D] p-6 shadow-2xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Todays Activity</p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    Workout Progress
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16A34A]/15">
                  <span className="text-xl">🔥</span>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    Daily Goal
                  </span>

                  <span className="text-sm font-semibold text-[#B8F23A]">
                    75%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-[#16A34A]"></div>
                </div>
              </div>

              {/* Workout Items */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16A34A]/15">
                      🏋️
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Strength Training
                      </p>
                      <p className="text-xs text-gray-500">
                        35 minutes
                      </p>
                    </div>
                  </div>

                  <span className="text-[#B8F23A]">✓</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16A34A]/15">
                      🏃
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Cardio
                      </p>
                      <p className="text-xs text-gray-500">
                        20 minutes
                      </p>
                    </div>
                  </div>

                  <span className="text-[#B8F23A]">✓</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#16A34A]/15">
                      🧘
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Stretching
                      </p>
                      <p className="text-xs text-gray-500">
                        10 minutes
                      </p>
                    </div>
                  </div>

                  <span className="text-gray-600">○</span>
                </div>
              </div>

              {/* Bottom Highlight */}
              <div className="mt-6 rounded-xl bg-[#B8F23A] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#101315]/60">
                      Current Streak
                    </p>

                    <p className="mt-1 text-xl font-bold text-[#101315]">
                      12 Days 🔥
                    </p>
                  </div>

                  <span className="text-3xl">💪</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;