"use client";

import InfiniteSlider from "./ui/infinite-slider";
import ProgressiveBlur from "./ui/progressive-blur";

export const LogoCloud = () => {
  return (
    <section className="bg-background pb-16 md:pb-32">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Powering the best teams</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-auto dark:invert"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-4 w-auto dark:invert"
                  src="https://html.tailus.io/blocks/customers/column.svg"
                  alt="Column Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-auto dark:invert"
                  src="https://html.tailus.io/blocks/customers/github.svg"
                  alt="GitHub Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-auto dark:invert"
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  alt="Nike Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-auto dark:invert"
                  src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                  alt="Lemon Squeezy Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-auto dark:invert"
                  src="https://html.tailus.io/blocks/customers/laravel.svg"
                  alt="Laravel Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-7 w-auto dark:invert"
                  src="https://html.tailus.io/blocks/customers/lilly.svg"
                  alt="Lilly Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-6 w-auto dark:invert"
                  src="https://html.tailus.io/blocks/customers/openai.svg"
                  alt="OpenAI Logo"
                />
              </div>
            </InfiniteSlider>

            <div className="bg-gradient-to-r from-background to-transparent absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-gradient-to-l from-background to-transparent absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};