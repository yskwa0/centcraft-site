"use client";

import { motion } from "motion/react";
export default function Home() {
  const tasks = [
    "問い合わせ返信",
    "物件情報",
    "顧客メモ",
    "社内ルール",
    "追客文",
    "チェックリスト",
    "資料作成",
  ];

  const problems = [
    {
      title: "返信作成に時間がかかる",
      text: "問い合わせ返信や追客文を、毎回ゼロから考えている。",
    },
    {
      title: "情報が散らばっている",
      text: "物件情報・顧客情報・社内ルールが人や場所によってバラバラ。",
    },
    {
      title: "対応品質がばらつく",
      text: "スタッフごとに文章のトーンや案内内容が変わってしまう。",
    },
    {
      title: "マニュアル化できていない",
      text: "忙しくてチェックリストや手順書を作る時間が取れない。",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f6f9fc] text-[#071b33]">
      <section className="relative overflow-hidden bg-[#061b33] text-white">
      <motion.div
  initial={{ x: 0, y: 0, scale: 1 }}
  animate={{
    x: [0, 28, -18, 36, 8, 0],
    y: [0, 18, 42, -12, 28, 0],
    scale: [1, 1.08, 0.96, 1.12, 1.03, 1],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  }}
  className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.75)_0%,rgba(59,130,246,0.35)_38%,rgba(59,130,246,0)_72%)]"
/>

<motion.div
  initial={{ x: 0, y: 0, scale: 1 }}
  animate={{
    x: [0, -22, 18, -34, 10, 0],
    y: [0, 30, -16, 22, -8, 0],
    scale: [1, 0.92, 1.1, 0.98, 1.06, 1],
  }}
  transition={{
    duration: 22,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  }}
  className="pointer-events-none absolute right-8 top-64 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.75)_0%,rgba(52,211,153,0.35)_38%,rgba(52,211,153,0)_72%)]"
/>
<header className="relative z-10 flex w-full items-center justify-between border-b border-white/70 bg-white/90 px-8 py-4 shadow-xl shadow-black/10 backdrop-blur-xl">
        <img
  src="/centcraft-2.png"
  alt="CentCraft"
  className="h-26 w-auto"
/>
          <nav className="hidden gap-8 text-sm font-semibold text-slate-700 md:flex">
            <a href="#problem" className="hover:text-white">
              課題
            </a>
            <a href="#service" className="hover:text-white">
              できること
            </a>
            <a href="#flow" className="hover:text-white">
              流れ
            </a>
          </nav>
          <a
            href="tel:07043144248"
            className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#061b33]"
          >
            相談する
          </a>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-8 pb-28 pt-20 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="mb-5 text-sm font-bold tracking-[0.25em] text-cyan-300">
              BUSINESS IMPROVEMENT PARTNER
            </p>

            <motion.h1
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    delay: 0.15,
    ease: "easeOut",
  }}
  className="text-[30px] font-black leading-tight tracking-[-0.05em] sm:text-5xl md:text-5xl xl:text-6xl"
>
  現場の面倒な業務を
  <br />
  軽くする。
</motion.h1>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-white/75">
              不動産会社・中小企業向けに、問い合わせ対応・情報整理・資料作成・
              社内テンプレート整備など、日々の業務で時間がかかっている部分を整理し、
              無理なく改善するお手伝いをします。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:07043144248"
                className="rounded-full bg-white px-7 py-4 text-center font-bold text-[#061b33] shadow-xl shadow-black/20"
              >
                無料ヒアリングを相談する
              </a>
              <a
                href="#service"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center font-bold text-white"
              >
                サービスを見る
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-sm font-bold text-white/70">
                  Scatter to Flow
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
              {tasks.map((task, index) => (
  <motion.div
    key={task}
    initial={{
      opacity: 0,
      y: index % 2 === 0 ? -24 : 24,
      x: index % 3 === 0 ? -18 : 18,
      scale: 0.92,
    }}
    animate={{
      opacity: 1,
      y: index % 2 === 0 ? -6 : 6,
      x: 0,
      scale: 1,
    }}
    transition={{
      duration: 0.45,
      delay: index * 0.08,
      ease: "easeOut",
    }}
    whileHover={{
      y: -10,
      scale: 1.04,
    }}
    className="rounded-2xl border border-white/10 bg-white px-4 py-4 text-sm font-bold text-[#061b33] shadow-lg"
  >
    {task}
  </motion.div>
))}
              </div>
              <div className="relative my-6 flex items-center justify-center">
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={{ width: "72%", opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
    className="h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
  />

  <motion.div
    initial={{ opacity: 0, x: -90 }}
    animate={{ opacity: [0, 1, 1, 0], x: [-90, -20, 45, 90] }}
    transition={{
      duration: 1.8,
      delay: 0.95,
      repeat: Infinity,
      repeatDelay: 0.8,
      ease: "easeInOut",
    }}
    className="absolute h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]"
  />

  <motion.p
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.9 }}
    className="absolute -bottom-5 text-xs font-bold tracking-[0.2em] text-cyan-200/80"
  >
    ORGANIZE
  </motion.p>
</div>
              <div className="mt-6 rounded-3xl bg-[#061b33] p-5">
                <p className="text-sm font-bold text-cyan-300">
                  ヒアリングで整理
                </p>
                <div className="mt-4 grid gap-3">
  {["返信テンプレート化", "チェックリスト化", "改善メモとして可視化"].map(
    (item, index) => (
      <motion.div
        key={item}
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.35,
          delay: 0.75 + index * 0.12,
          ease: "easeOut",
        }}
        className="rounded-2xl bg-white/10 p-4"
      >
        {item}
      </motion.div>
    )
  )}
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="mx-auto max-w-7xl px-8 py-24">
        <p className="mb-4 text-sm font-black tracking-[0.25em] text-blue-600">
          PROBLEM
        </p>
        <h2 className="text-[24px] font-black leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
  こんなお悩みはありませんか？
</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
        {problems.map((item, index) => (
  <motion.div
    key={item.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{
      duration: 0.45,
      delay: index * 0.1,
      ease: "easeOut",
    }}
    className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm"
  >
    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl font-black text-blue-600">
      ✓
    </div>
    <h3 className="text-lg font-black">{item.title}</h3>
    <p className="mt-3 text-sm leading-7 text-slate-600">
      {item.text}
    </p>
  </motion.div>
))}
        </div>
      </section>

      <section id="service" className="bg-white px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-black tracking-[0.25em] text-blue-600">
            SERVICE
          </p>
          <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
            CentCraftができること
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
  "業務ヒアリング",
  "返信文・テンプレート整備",
  "資料・マニュアル作成支援",
  "小さな業務効率化",
].map((title, index) => (
  <motion.div
    key={title}
    initial={{
      opacity: 0,
      y: 36,
      x: index % 2 === 0 ? -18 : 18,
      scale: 0.96,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.45,
      delay: index * 0.1,
      ease: "easeOut",
    }}
    whileHover={{
      y: -6,
      scale: 1.02,
    }}
    className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-8 shadow-sm transition-shadow hover:shadow-xl"
  >
    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-black text-blue-700">
      0{index + 1}
    </span>
    <h3 className="mt-6 text-2xl font-black">{title}</h3>
    <p className="mt-4 leading-8 text-slate-600">
      現場の流れを確認し、時間がかかっている作業を整理して、
      使いやすい形に整えます。
    </p>
  </motion.div>
))}
          </div>
        </div>
      </section>

      <section id="flow" className="mx-auto max-w-7xl px-8 py-24">
        <p className="mb-4 text-sm font-black tracking-[0.25em] text-blue-600">
          FLOW
        </p>
        <h2 className="text-4xl font-black tracking-[-0.04em] md:text-5xl">
          導入までの流れ
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 leading-8">
  現場に合わせて、無理なく進めます。
</p>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
        {["ヒアリング", "業務整理", "改善提案", "小さく導入", "修正・定着"].map(
  (step, index) => (
    <motion.div
      key={step}
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.42,
        delay: index * 0.11,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      className="rounded-3xl bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-black text-white">
        {index + 1}
      </div>
      <h3 className="font-black">{step}</h3>
    </motion.div>
  )
)}
        </div>
      </section>

      <section className="bg-[#061b33] px-8 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-black tracking-[0.25em] text-cyan-300">
            CONTACT
          </p>
          <h2 className="text-[24px] font-black leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
            まずは無料ヒアリングで、
            <br />
            現場の業務を整理しませんか？
          </h2>
          <p className="mt-6 text-lg leading-9 text-white/70">
            いきなり導入を決める必要はありません。
            まずは現状を伺い、改善できそうな部分を一緒に整理します。
          </p>

          <div className="mt-10 inline-flex flex-col items-center gap-3 rounded-3xl bg-white px-10 py-7 text-[#061b33] sm:flex-row">
            <a href="tel:07043144248" className="text-3xl font-black">
              070-4314-4248
            </a>
            <span className="font-bold text-slate-500">担当：吉川</span>
          </div>
        </div>
      </section>
    </main>
  );
}