import Image from "next/image";
import { Nav } from "@/components/sections/nav";
import { Faq } from "@/components/sections/faq";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAcdkDPpocdb7NhE0DeOMsn-oepuyiff9uNRtki391mYd2JNIScHoYwxOXa_vYlhLfe-5yk8jy2psWg7D7HnHqHU7qb60RucmdpzSBUCni6keumN1nPM_So4geeZWx6NgQPU_vGR_iWknBmFO1i-7bXMldzUeY1iJEKgJUx10mfAQ0H2s7JhQ1fKS7WsDGDeXfOgjQf8u2xFfmcnen7DwP23oQZuvCjWnJp6qCO86V20qnV5i6_AWvF9GOqpq788Qjjd-jPkIOFSEQy";

const FEATURE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAcHLzpMX2kaZQKnLBIDRABiNc1rkxHHsL1PCktQth1fY0wBn7oGgmiAI7sObbpafZZylfgD6XvCwTBwzCW6PoiGRQdKg-_KBVrWlNpC58w3SEd1CShotbknDBV1Lp8pt-_68aCn8qNsAPfQgX63bIA18G5U_i3WaLiJoiG3hgbfYhi0Iql67OeB9hcGIZjUv9-X_XjCd-xMPvlPm_mqnQT7Pe4xD2XMLMl3Q7NpaW8R7AKF7-LTeP_n-JfaVsNcQqSwIagv83cviJ-";

const TESTIMONIAL_AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAyxlF6zG5sHlrF1iI6TMpLgE6h_GjOElQfLrjJqv83v9Jvqi0YdnnF2__MlabdPYaz60Z_Am7o34L7crtmXYPBI9nRllPBl5ivkTwBthLwURDKd_W4o-GbKHvV1KFpoKqd7h9I25eeqBI1sYKH5x6YUvlB_y0vB7UnBqI-AbtJBaaPnUN558ZfOSYxT4rdrT60dWcDupvMyz8HMX1PUfbRKuRT_CIo3YpNFG5h_mdFHBb1WMXE5IAxFehAHZEJ5ePJOefuckIaV4Yp";

const STUDIO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBSpUuzhOMvFmXvCYsmHvV3J23v5JFQK47x8Y9XPN2bPG4mJA265GrfDqq_CvbhiEuZ2CiJilIAfnqV8oCAd45SHrmj5b6inS5PUJ04hwJvljVmt5aFqk_JqwAuMs3yPpgKxmLqgAFE4BntuVgCnp1ulkHlFde3NIez3UIqXx2rFNdnMlVKF8JibvD4l7Siie2WqXPv_YM05ebUGZCuGhcCCMMdR7325bKzgRHh1vcglVDLBjq-NSCvo-vv5Zk6OSPtGpd6hY9hWrFV";

const PRODUCT_DETAIL_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCKQebWAOETe5kHr_9O0HCmVgovtksFJ3TdzLYdfbnUOo_xsp3xPG0DmQXvYFJFK2TWJRZxZeCsuxRT4lRq2pYJBkx50DeYgM50Cjv8r-y47SCXkrLCArXBN8RJpcXf9BsYp9s-RFVsFjaTRD9P3TR6mbsrTUxcbH4POQgzNauyGKSGSuMWzjFmeer56lQ7u3q7C8ETFVB0jjvS3GsoKB3F8VC2wXD4lX8UO0if8LwgUiEqdDT7N4NrfZhLx3XStP04Iko8OqSswuqK";

const TEXTURE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAoyFGbvibb-v6abUlgA_XwpjWEvb3LnCT5pHtkYHXM00NkYcJWQtHyHHRqd2yD4dHAUBy_wa1ETQuy-HvzXFH4uOVvpdPAF9a1HkVhUQR8mn95In6MX8c0NLrhE8SyV5ODahaU7c315kxxQDVmRYFByOEFrS5hJDePWPUj8Kft74E-7ek9CJiizTxN2K2YwbahCsvBgxdkB8wwOko93oF8_bLbQ7s2pzvf8vKJaVoVxX374nmmpv80hL-cMtEdDbLpXyZ1gJmcOlj8";

const stats = [
  { value: "40%", label: "Efficiency Boost" },
  { value: "3x", label: "Faster Delivery" },
  { value: "100%", label: "Security Rating" },
  { value: "10k+", label: "Active Teams" },
];

const steps = [
  {
    n: "01",
    title: "Simple Setup",
    body: "Import existing tasks from any platform in seconds. Zero friction migration.",
  },
  {
    n: "02",
    title: "Work Effortlessly",
    body: "Invite your team and assign roles. Dashboards update in real-time, instantly.",
  },
  {
    n: "03",
    title: "Monitor Progress",
    body: "High-level summaries of team velocity and project health at your fingertips.",
  },
];

const starterFeatures = [
  "10 Team Members",
  "Basic Automations",
  "5GB Cloud Storage",
];

const proFeatures = [
  "Unlimited Members",
  "Advanced Custom Flows",
  "Priority 24/7 Support",
  "SSO & Security Pack",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          id="features"
          className="executive-slide pt-32 md:pt-64! scroll-mt-24"
        >
          <div className="content-container text-center">
            <div className="mb-6 md:mb-8 inline-block px-6 py-2 bg-black text-white rounded-full reveal-up">
              <span className="text-xs font-bold uppercase tracking-[0.3em]">
                Executive Summary v1.0
              </span>
            </div>
            <h1
              className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-primary mb-6 md:mb-10 leading-[1.1] reveal-up"
              style={{ animationDelay: "80ms" }}
            >
              Unlock Premium Benefits With Our Advanced Features
            </h1>
            <p
              className="text-base sm:text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed font-medium reveal-up"
              style={{ animationDelay: "160ms" }}
            >
              Architectural task management for high-performance teams.
              Monochrome efficiency meets enterprise-grade power.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-14 md:mb-24 reveal-up"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#cta"
                className="px-10 md:px-12 py-4 md:py-5 bg-black text-white font-bold rounded-2xl text-base md:text-lg signature-cta shadow-2xl hover:scale-[1.02] transition-transform"
              >
                Start Free Trial
              </a>
              <a
                href="#workflows"
                className="px-10 md:px-12 py-4 md:py-5 bg-white border-2 border-black/5 text-primary font-bold rounded-2xl text-base md:text-lg hover:bg-surface-container transition-colors"
              >
                View Demo
              </a>
            </div>
            <div
              className="relative group reveal-up"
              style={{ animationDelay: "320ms" }}
            >
              <div className="absolute -inset-4 bg-black/5 rounded-4xl blur-2xl group-hover:bg-black/10 transition-colors" />
              <div className="relative bg-white p-3 rounded-4xl shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-black/5">
                <Image
                  src={HERO_IMG}
                  alt="TaskGo dashboard preview"
                  width={1600}
                  height={1000}
                  priority
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section
          id="workflows"
          className="executive-slide bg-surface-container-low scroll-mt-24"
        >
          <div className="content-container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
              <div className="max-w-xl">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary mb-6 leading-tight">
                  Core Capabilities
                </h2>
                <p className="text-lg md:text-xl text-on-surface-variant font-medium">
                  Powerful tools built for complex operations without the
                  visual clutter.
                </p>
              </div>
              <div className="hidden md:block h-px bg-outline-variant/30 grow mx-12 mb-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-black/5 flex flex-col h-full">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-white text-3xl">
                    grid_view
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Smart Task Organization
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10 grow">
                  Prioritize tasks using our proprietary spatial algorithm.
                  Group by urgency, project, or custom tags with a single
                  click.
                </p>
                <div className="aspect-video bg-surface-container rounded-2xl overflow-hidden border border-black/5 relative">
                  <Image
                    src={FEATURE_IMG}
                    alt="Spatial task organization"
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 md:space-y-10 flex flex-col">
                <div className="bg-black text-white p-10 md:p-12 rounded-3xl shadow-2xl flex flex-col justify-between flex-1 min-h-80">
                  <div>
                    <span className="material-symbols-outlined text-4xl mb-6 opacity-70">
                      bolt
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Automated Workflows
                    </h3>
                    <p className="text-gray-400 text-lg">
                      Set logic triggers that handle repetitive administrative
                      tasks automatically.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="mt-8 text-lg font-bold flex items-center gap-3 hover:gap-5 transition-all w-fit group"
                  >
                    Explore Automation
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
                <div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-black/5 flex flex-col flex-1 min-h-60">
                  <span className="material-symbols-outlined text-4xl mb-6 text-primary">
                    forum
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    File &amp; Comment Management
                  </h3>
                  <p className="text-on-surface-variant text-lg">
                    Centralized hub for all project assets. Attach files
                    directly to task cards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="executive-slide">
          <div className="content-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`text-center p-6 md:p-8 ${
                    i > 0 ? "md:border-l border-black/5" : ""
                  } ${i > 0 && i % 2 === 0 ? "md:border-l" : ""}`}
                >
                  <div className="text-5xl md:text-7xl font-extrabold text-primary mb-4 tracking-tighter">
                    {s.value}
                  </div>
                  <div className="text-[10px] md:text-sm font-black uppercase tracking-[0.2em] text-on-surface-variant">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built for scale */}
        <section className="executive-slide bg-black text-white">
          <div className="content-container">
            <div className="text-center mb-20 md:mb-32">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
                Built For Scale
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
                Implementing a high-level productivity framework is now as
                simple as three steps.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
              {steps.map((s) => (
                <div key={s.n} className="relative group">
                  <div className="text-[120px] font-black opacity-10 absolute -top-16 -left-8 pointer-events-none group-hover:opacity-20 transition-opacity select-none">
                    {s.n}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                      {s.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="executive-slide">
          <div className="content-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="space-y-8 md:space-y-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                  What Professionals Say
                </h2>
                <div className="relative pl-8 md:pl-12 border-l-8 border-black">
                  <div
                    className="flex gap-1 mb-6 md:mb-8"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-primary text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed mb-8 md:mb-10 italic">
                    &ldquo;The reduction in visual noise allows our design
                    team to focus on the work that actually matters. TaskGo is
                    the architectural answer.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-6">
                    <Image
                      src={TESTIMONIAL_AVATAR}
                      alt="Julian Vane"
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full grayscale object-cover"
                    />
                    <div>
                      <div className="text-xl font-bold">Julian Vane</div>
                      <div className="text-on-surface-variant font-medium">
                        Creative Director, ArchStudio
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-square rounded-3xl overflow-hidden grayscale relative">
                    <Image
                      src={STUDIO_IMG}
                      alt="Studio environment"
                      fill
                      sizes="(min-width: 768px) 25vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-surface-container-high p-8 md:p-10 rounded-3xl text-center">
                    <div className="text-3xl md:text-4xl font-black mb-2">
                      98%
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                      Satisfaction
                    </div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-black text-white p-8 md:p-10 rounded-3xl text-center">
                    <div className="text-3xl md:text-4xl font-black mb-2 text-white">
                      24/7
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60">
                      Support
                    </div>
                  </div>
                  <div className="aspect-4/5 rounded-3xl overflow-hidden grayscale relative">
                    <Image
                      src={PRODUCT_DETAIL_IMG}
                      alt="Product detail"
                      fill
                      sizes="(min-width: 768px) 25vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="executive-slide bg-surface-container scroll-mt-24">
          <div className="content-container">
            <div className="text-center mb-20 md:mb-24">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Transparent Pricing
              </h2>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto font-medium">
                Simple tiers for teams of all sizes. Built to scale with your
                growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-white p-10 md:p-14 rounded-3xl shadow-sm flex flex-col justify-between border border-black/5">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.3em] text-on-surface-variant mb-6 md:mb-10">
                    Starter Plan
                  </div>
                  <div className="flex items-baseline gap-3 mb-8 md:mb-12">
                    <span className="text-6xl font-extrabold tracking-tighter">
                      $49
                    </span>
                    <span className="text-on-surface-variant font-bold">
                      / month
                    </span>
                  </div>
                  <ul className="space-y-4 md:space-y-6 mb-10 md:mb-16">
                    {starterFeatures.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-4 text-lg font-medium"
                      >
                        <span className="material-symbols-outlined text-primary">
                          check_circle
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className="w-full py-5 bg-surface-container-high text-primary font-bold rounded-2xl text-lg hover:bg-black hover:text-white transition-all"
                >
                  Select Starter
                </button>
              </div>
              <div className="bg-black text-white p-10 md:p-14 rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.2)] flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest translate-x-[20%] translate-y-[20%] rotate-45">
                  Best Value
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.3em] opacity-50 mb-6 md:mb-10">
                    Professional Plan
                  </div>
                  <div className="flex items-baseline gap-3 mb-12 text-white">
                    <span className="text-6xl font-extrabold tracking-tighter">
                      $99
                    </span>
                    <span className="opacity-50 font-bold">/ month</span>
                  </div>
                  <ul className="space-y-4 md:space-y-6 mb-10 md:mb-16">
                    {proFeatures.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-4 text-lg font-medium"
                      >
                        <span className="material-symbols-outlined text-white">
                          check_circle
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className="w-full py-5 bg-white text-black font-bold rounded-2xl text-lg hover:scale-[1.02] transition-transform"
                >
                  Go Professional
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="executive-slide overflow-hidden">
          <div className="content-container">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
                  Effortless Tool Integrations
                </h2>
                <p className="text-lg md:text-xl text-on-surface-variant font-medium mb-12 leading-relaxed">
                  Connect TaskGo with your existing tech stack. Eliminate
                  context switching and maintain a single source of truth
                  across all platforms.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl border border-black/5">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white shrink-0">
                      <span className="material-symbols-outlined">cloud</span>
                    </div>
                    <span className="text-lg font-bold">
                      Cloud Storage Integration
                    </span>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-surface-container-low rounded-2xl border border-black/5">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <span className="text-lg font-bold">
                      Seamless Email Sync
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative h-105 md:h-125 w-full flex items-center justify-center">
                <div className="absolute w-80 h-80 md:w-112.5 md:h-112.5 border border-black/5 rounded-full" />
                <div
                  className="absolute w-55 h-55 md:w-75 md:h-75 border border-black/10 rounded-full"
                  style={{
                    animation: "slow-spin 20s linear infinite",
                  }}
                />
                <div className="z-20 w-32 h-32 md:w-40 md:h-40 bg-black text-white rounded-4xl flex items-center justify-center shadow-2xl">
                  <span className="text-2xl md:text-3xl font-black">TG</span>
                </div>
                <div className="absolute top-1/4 right-0 md:-right-4 w-16 h-16 md:w-20 md:h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center border border-black/5">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">
                    token
                  </span>
                </div>
                <div className="absolute bottom-1/4 left-0 md:-left-4 w-16 h-16 md:w-20 md:h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center border border-black/5">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">
                    database
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="executive-slide bg-surface">
          <div className="content-container">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-16 md:mb-20 text-center">
              Frequently Asked Questions
            </h2>
            <Faq />
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="executive-slide scroll-mt-24">
          <div className="content-container bg-black rounded-[3rem] md:rounded-[4rem] p-12 sm:p-20 md:p-40 text-center relative overflow-hidden shadow-[0_80px_150px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <Image
                src={TEXTURE_IMG}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                aria-hidden
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-white mb-12 md:mb-16 leading-tight tracking-tight">
                Let&apos;s create digital experiences that deliver results.
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center">
                <a
                  href="#"
                  className="px-10 md:px-16 py-5 md:py-6 bg-white text-black font-black text-lg md:text-xl rounded-2xl signature-cta hover:scale-105 transition-transform"
                  style={{ background: "#fff", color: "#000" }}
                >
                  Get Started Now
                </a>
                <a
                  href="#"
                  className="px-10 md:px-16 py-5 md:py-6 border-2 border-white/20 text-white font-black text-lg md:text-xl rounded-2xl hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 md:py-20 px-6 md:px-8 bg-white border-t border-black/5">
        <div className="content-container flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 font-bold uppercase tracking-widest text-[10px] text-on-surface-variant">
          <div className="text-2xl font-black tracking-tighter text-black lowercase">
            taskgo.
          </div>
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a className="hover:text-black transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-black transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-black transition-colors" href="#">
              Security
            </a>
            <a className="hover:text-black transition-colors" href="#">
              Contact
            </a>
          </nav>
          <div className="normal-case tracking-normal opacity-50 font-medium">
            © 2026 TaskGo Technologies. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
