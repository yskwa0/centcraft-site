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
         <nav className="hidden gap-8 text-sm font-semibold text-slate-700 xl:flex">
  <a href="#problem" className="hover:text-blue-600">
    課題
  </a>
  <a href="#service" className="hover:text-blue-600">
    できること
  </a>
  <a href="#flow" className="hover:text-blue-600">
    流れ
  </a>
  <a href="#about" className="hover:text-blue-600">
    事業概要
  </a>
  <a href="#hearing" className="hover:text-blue-600">
    無料ヒアリング
  </a>
  <a href="#faq" className="hover:text-blue-600">
    FAQ
  </a>
</nav>
          <a
            href="https://forms.gle/7d54LaqazPF1d6Jm6"
            target="_blank"
  rel="noopener noreferrer"
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
  className="max-w-3xl text-[24px] font-black leading-[1.18] tracking-[-0.05em] sm:text-[30px] md:text-[34px] lg:text-5xl xl:text-6xl"
>
  現場の面倒な業務を、
  <span className="block">軽くする。</span>
</motion.h1>

            <p className="mt-7 max-w-2xl text-lg leading-9 text-white/75">
              不動産会社・中小企業向けに、問い合わせ対応・情報整理・資料作成・
              社内テンプレート整備など、日々の業務で時間がかかっている部分を整理し、
              無理なく改善するお手伝いをします。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://forms.gle/7d54LaqazPF1d6Jm6"
                target="_blank"
  rel="noopener noreferrer"
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
<section id="about" className="bg-white px-8 py-24">
  
  <div className="mx-auto max-w-7xl">
    <p className="mb-4 text-sm font-black tracking-[0.25em] text-blue-600">
      ABOUT
    </p>

    <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
      CentCraftについて
    </h2>

    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
      CentCraftは、不動産会社様・中小企業様向けに、問い合わせ対応、
      追客文作成、社内テンプレート整備、業務フロー整理など、
      日々の現場業務を少し軽くするための支援を行っています。
    </p>

    <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
      いきなり大きなシステムを導入するのではなく、まずは現場で時間がかかっている業務や、
      スタッフごとに対応が分かれやすい作業を整理し、小さく改善することを大切にしています。
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="rounded-3xl border border-blue-100 bg-[#f8fbff] p-8 shadow-sm"
      >
        <h3 className="text-2xl font-black">事業概要</h3>

        <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
          <div className="grid gap-1 border-b border-slate-200 pb-4 sm:grid-cols-[120px_1fr]">
            <p className="font-black text-slate-900">事業名</p>
            <p>CentCraft</p>
          </div>

          <div className="grid gap-1 border-b border-slate-200 pb-4 sm:grid-cols-[120px_1fr]">
            <p className="font-black text-slate-900">運営者</p>
            <p>吉川</p>
          </div>

          <div className="grid gap-1 border-b border-slate-200 pb-4 sm:grid-cols-[120px_1fr]">
            <p className="font-black text-slate-900">所在地</p>
            <p>東京都新宿区</p>
          </div>

          <div className="grid gap-1 border-b border-slate-200 pb-4 sm:grid-cols-[120px_1fr]">
            <p className="font-black text-slate-900">事業形態</p>
            <p>個人事業</p>
          </div>

          <div className="grid gap-1 border-b border-slate-200 pb-4 sm:grid-cols-[120px_1fr]">
            <p className="font-black text-slate-900">事業内容</p>
            <p>
              不動産会社向け業務改善支援、問い合わせ対応・追客文作成支援、
              社内テンプレート整備、AI活用支援
            </p>
          </div>

          <div className="grid gap-1 border-b border-slate-200 pb-4 sm:grid-cols-[120px_1fr]">
  <p className="font-black text-slate-900">お問い合わせ</p>
  <div className="grid gap-2">
    <p
      className="font-bold text-slate-900"
    >
      info@centcraftcom.net
    </p>
    <p
      className="font-bold text-slate-900"
    >
      050-1726-8847
    </p>
  </div>
</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        className="rounded-3xl bg-[#061b33] p-8 text-white shadow-xl"
      >
        <h3 className="text-2xl font-black">大切にしていること</h3>

        <div className="mt-6 grid gap-4">
          {[
            "いきなり導入を迫らず、まずは業務状況を丁寧に伺うこと",
            "現場で実際に使いやすい形に、小さく整理すること",
            "返信文・チェックリスト・社内ルールなど、すぐ使える形に整えること",
            "必要以上に大きなシステムではなく、今ある業務に合わせて改善すること",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm leading-7 text-white/85"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="mt-6 rounded-2xl bg-white p-5 text-sm font-bold leading-7 text-[#061b33]">
          現在は個人事業として、小規模に検証・支援を進めています。
          まずは無料ヒアリングを通じて、現場の業務負担を軽くできる部分を一緒に整理します。
        </p>
      </motion.div>
    </div>
  </div>
</section>
<section id="hearing" className="bg-[#f6f9fc] px-8 py-24">
  <div className="mx-auto max-w-7xl">
    <p className="mb-4 text-sm font-black tracking-[0.25em] text-blue-600">
      FREE HEARING
    </p>

    <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
      無料ヒアリングについて
    </h2>

    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
      無料ヒアリングでは、現在の業務状況や、日々の中で時間がかかっている作業を簡単に伺います。
      いきなり導入をお願いするものではなく、まずは現場のお困りごとを整理するためのものです。
    </p>

    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {[
        {
          title: "フォームは3分程度",
          text: "まずは簡単なフォームで、業務内容やお困りごとを差し支えない範囲で伺います。",
        },
        {
          title: "電話なら5〜10分程度",
          text: "必要に応じて、短いお電話で状況を確認します。オンライン面談が苦手な場合でも問題ありません。",
        },
        {
          title: "導入前提ではありません",
          text: "すぐに契約や導入をお願いするものではなく、改善できそうな部分を一緒に確認します。",
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.42,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm"
        >
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
            {index + 1}
          </div>
          <h3 className="text-xl font-black text-[#071b33]">
            {item.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
<section id="trial" className="mx-auto max-w-7xl px-8 py-24">
  <p className="mb-4 text-sm font-black tracking-[0.25em] text-blue-600">
    FREE TRIAL
  </p>

  <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
    まずは1週間、無料でお試しいただけます
  </h2>

  <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
    ご希望の方には、ヒアリング内容をもとに、簡単なお試し機能や改善案をご案内します。
    実際に使ってみて、継続して活用したいと感じていただいた場合のみ、その後の対応をご相談します。
  </p>

  <div className="mt-12 grid gap-5 md:grid-cols-4">
    {[
      {
        title: "回答内容を確認",
        text: "フォームやお電話で伺った内容をもとに、改善できそうな業務を整理します。",
      },
      {
        title: "お試し内容を作成",
        text: "返信テンプレートやチェックリストなど、すぐ確認できる形でご用意します。",
      },
      {
        title: "1週間無料で確認",
        text: "実際の業務に合いそうか、無理なく使えるかを確認していただきます。",
      },
      {
        title: "継続希望時のみ相談",
        text: "継続をご希望いただいた場合のみ、内容や費用についてご相談します。",
      },
    ].map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 34, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.42,
          delay: index * 0.1,
          ease: "easeOut",
        }}
        whileHover={{
          y: -6,
          scale: 1.03,
        }}
        className="rounded-3xl bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
      >
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
          {index + 1}
        </div>
        <h3 className="text-lg font-black text-[#071b33]">
          {item.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          {item.text}
        </p>
      </motion.div>
    ))}
  </div>
</section>
<section id="notice" className="bg-white px-8 py-24">
  <div className="mx-auto max-w-7xl">
    <p className="mb-4 text-sm font-black tracking-[0.25em] text-blue-600">
      NOTICE
    </p>

    <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
      安心してご相談いただくために
    </h2>

    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
      CentCraftでは、現場の業務を軽くするための整理やテンプレート作成を支援します。
      一方で、正確な確認が必要な内容については、必ず貴社スタッフ様のご確認を前提としています。
    </p>

    <div className="mt-12 grid gap-5 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
        className="rounded-3xl border border-blue-100 bg-[#f8fbff] p-8 shadow-sm"
      >
        <h3 className="text-2xl font-black text-[#071b33]">
          自動判断しない内容
        </h3>

        <div className="mt-6 grid gap-3">
          {[
            "空室状況の確定",
            "初期費用の確定",
            "入居審査の可否判断",
            "契約条件や重要事項に関する判断",
            "法的な判断や専門資格が必要な回答",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-4 text-sm font-bold text-slate-700 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.42, delay: 0.1, ease: "easeOut" }}
        className="rounded-3xl bg-[#061b33] p-8 text-white shadow-xl"
      >
        <h3 className="text-2xl font-black">
          現場確認を前提に整えます
        </h3>

        <p className="mt-6 text-sm leading-8 text-white/80">
          返信文やテンプレートは、あくまで業務を進めやすくするための補助として作成します。
          空室確認・費用確認・審査判断・契約条件など、正確な確認が必要な内容は、
          貴社スタッフ様の確認を前提とした運用をご提案します。
        </p>

        <p className="mt-6 rounded-2xl bg-white p-5 text-sm font-bold leading-7 text-[#061b33]">
          「AIに任せきり」ではなく、現場で安心して使える形に整えることを大切にしています。
        </p>
      </motion.div>
    </div>
  </div>
</section>
<section id="faq" className="mx-auto max-w-7xl px-8 py-24">
  <p className="mb-4 text-sm font-black tracking-[0.25em] text-blue-600">
    FAQ
  </p>

  <h2 className="text-[28px] font-black leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
    よくある質問
  </h2>

  <div className="mt-12 grid gap-5 md:grid-cols-2">
    {[
      {
        q: "いきなり費用はかかりますか？",
        a: "いいえ。まずは無料ヒアリングから行い、継続をご希望いただいた場合のみ費用についてご相談します。",
      },
      {
        q: "AIやシステムに詳しくなくても大丈夫ですか？",
        a: "はい。専門的な設定をお願いするものではなく、現在の業務に合わせて使いやすい形を一緒に整理します。",
      },
      {
        q: "無理に導入をすすめられることはありますか？",
        a: "ありません。まずは現場のお困りごとを伺い、改善できそうな部分がある場合のみご案内します。",
      },
      {
        q: "どのような業務を相談できますか？",
        a: "問い合わせ返信、追客文、社内テンプレート、チェックリスト、業務フロー整理、問い合わせ導線の改善などをご相談いただけます。",
      },
      {
        q: "電話やZoomでの打ち合わせは必須ですか？",
        a: "必須ではありません。まずはフォーム回答のみでも可能です。必要に応じて、短いお電話で確認させていただきます。",
      },
      {
        q: "無料お試し後に必ず契約する必要はありますか？",
        a: "ありません。1週間ほどお試しいただき、継続して活用したいと感じていただいた場合のみご相談します。",
      },
    ].map((item, index) => (
      <motion.div
        key={item.q}
        initial={{ opacity: 0, y: 34, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.42,
          delay: index * 0.06,
          ease: "easeOut",
        }}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <h3 className="text-lg font-black text-[#071b33]">
          Q. {item.q}
        </h3>
        <p className="mt-4 text-sm leading-8 text-slate-600">
          A. {item.a}
        </p>
      </motion.div>
    ))}
  </div>
</section>

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
  {
    title: "業務ヒアリング",
    text: "現在の業務の流れや、日々の中で時間がかかっている作業を伺い、改善できそうな部分を整理します。",
  },
  {
    title: "返信文・テンプレート整備",
    text: "問い合わせ返信や追客文など、毎回作成している文章を使いやすいテンプレートに整えます。",
  },
  {
    title: "資料・マニュアル作成支援",
    text: "スタッフ向けの手順書、チェックリスト、社内共有用の資料などを分かりやすく整理します。",
  },
  {
    title: "便利機能のご提案",
    text: "現場で簡単に使える最新の便利機能のご提案",
  },
  {
    title: "情報整理・見える化",
    text: "物件情報、顧客メモ、社内ルールなど、散らばりやすい情報を確認しやすい形に整えます。",
  },
  {
    title: "小さな業務効率化",
    text: "大きなシステム導入ではなく、今ある業務に合わせて、すぐ試せる小さな改善から始めます。",
  },
].map((item, index) => (
  <motion.div
    key={item.title}
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

    <h3 className="mt-6 text-2xl font-black">{item.title}</h3>

    <p className="mt-4 leading-8 text-slate-600">
      {item.text}
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
    いきなり大きなシステムを入れるのではなく、まずは現場の状況を伺い、
    小さく試しながら無理なく進めます。
  </p>

  <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
    {[
      {
        title: "ヒアリング",
        text: "現在の業務内容や、日々の中で時間がかかっている作業を簡単に伺います。",
      },
      {
        title: "業務整理",
        text: "問い合わせ対応・追客・情報共有など、改善できそうな部分を整理します。",
      },
      {
        title: "改善提案",
        text: "現場に合った返信テンプレートやチェックリストなど、使いやすい形をご提案します。",
      },
      {
        title: "小さく導入",
        text: "まずは一部の業務から試し、実際に使えるかどうかを確認します。",
      },
      {
        title: "修正・定着",
        text: "使いづらい点を修正し、日々の業務の中で無理なく使える形に整えます。",
      },
    ].map((step, index) => (
      <motion.div
        key={step.title}
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
        className="relative rounded-3xl bg-white p-6 shadow-sm transition-shadow hover:shadow-xl"
      >
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
          {index + 1}
        </div>

        <h3 className="text-lg font-black text-[#071b33]">
          {step.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {step.text}
        </p>
      </motion.div>
    ))}
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
      まずは3分ほどのフォームから、日々の業務で時間がかかっている部分を伺います。
    </p>

    <div className="mt-10 inline-flex flex-col items-center gap-4 rounded-3xl bg-white px-10 py-8 text-[#061b33]">
      <a
        href="https://forms.gle/7d54LaqazPF1d6Jm6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-black sm:text-3xl"
      >
        Googleフォームで回答する
      </a>

      <p className="text-sm font-bold text-slate-500">
        3分程度で回答できます。導入前提のご案内ではありません。
      </p>
    </div>
   <div className="mt-6 grid gap-2 text-center text-sm text-white/70">
  <p>
    メール：
    <span className="font-bold text-white">
      info@centcraftcom.net
    </span>
  </p>

  <p>
    電話：
    <span className="font-bold text-white">
      050-1726-8847
    </span>
  </p>
</div>
</div>
</section>
<section id="privacy" className="bg-white px-8 py-20">
  <div className="mx-auto max-w-5xl">
    <p className="mb-4 text-sm font-black tracking-[0.25em] text-blue-600">
      PRIVACY POLICY
    </p>

    <h2 className="text-[26px] font-black leading-tight tracking-[-0.04em] sm:text-4xl">
      プライバシーポリシー
    </h2>

    <div className="mt-8 rounded-3xl border border-slate-200 bg-[#f8fbff] p-8 text-sm leading-8 text-slate-700">
      <p>
        CentCraftでは、お問い合わせやヒアリングフォームを通じて取得した会社名、
        ご担当者名、メールアドレス、電話番号、回答内容などの情報を、
        お問い合わせ対応、ヒアリング内容の確認、改善案のご案内の目的で利用します。
      </p>

      <p className="mt-4">
        取得した情報は、法令に基づく場合を除き、ご本人の同意なく第三者に提供することはありません。
        また、取得した情報は適切に管理し、目的外で利用しないよう努めます。
      </p>

      <p className="mt-4">
        個人情報の確認・修正・削除をご希望の場合は、お問い合わせ先までご連絡ください。
        内容を確認のうえ、適切に対応いたします。
      </p>
    </div>
  </div>
</section>
<footer className="bg-[#061b33] px-8 py-10 text-white">
  <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
    <div>
  <p className="text-xl font-black">CentCraft</p>
  <p className="mt-2 text-sm text-white/60">
    不動産会社・中小企業向け業務改善支援
  </p>

 <div className="mt-3 grid gap-1 text-sm">
  <p className="font-bold text-white/80">
    info@centcraftcom.net
  </p>

  <p className="font-bold text-white/80">
    050-1726-8847
  </p>
</div>
</div>

    <nav className="flex flex-wrap gap-5 text-sm font-bold text-white/70">
      <a href="#problem" className="hover:text-white">
        課題
      </a>
      <a href="#service" className="hover:text-white">
        できること
      </a>
      <a href="#flow" className="hover:text-white">
        流れ
      </a>
      <a href="#trial" className="hover:text-white">
        無料お試し
      </a>
      <a href="#faq" className="hover:text-white">
        FAQ
      </a>
      <a href="#privacy" className="hover:text-white">
        プライバシーポリシー
      </a>
    </nav>

    <p className="text-xs text-white/50">
      © CentCraft
    </p>
  </div>
</footer>
    </main>
  );
}