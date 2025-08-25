// app/components/About.jsx
import Image from "next/image";
import { Newspaper, Award, GraduationCap, BarChart2, Medal, HeartHandshake } from "lucide-react";


export default function About() {
  return (
        <section id="about" className="mx-auto max-w-6xl px-4 md:px-8 py-20">
        {/* Divider */}
        <div className="h-px w-full bg-slate-200" />

        {/* Space */}
        <div className="mt-16" />

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-20">
            About Me
        </h2>


      {/* --- Intro row --- */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-lg text-slate-700 leading-relaxed">
            I hope from my projects you got a glimpse into how I approach design
            problems. I’m <span className="font-semibold">Shreya Valgot</span>,
            a UX/UI Designer with a background in Computer Science, passionate
            about creating accessible and research-driven digital experiences.
          </p>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            I craft designs that not only look clean but solve{" "}
            <span className="font-semibold text-[#437029]">
              real user problems
            </span>{" "}
            and support business growth. My process is rooted in empathy,
            accessibility, and testing, testing, and more testing.
          </p>

          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            I also gained agency-side experience at Interpret Media, a {" "}
            <span className="font-semibold text-[#437029]">
              B2B2C
            </span>{" "}
            digital marketing agency, where I managed multiple client accounts and collaborated across teams.”
          </p>



          

          {/* Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Empathy-Driven",
              "Accessibility",
              "Testing, Testing, Testing",
              "Business Lens",
              "AI-curious",
            ].map((pill) => (
              <span
                key={pill}
                className="px-4 py-1 text-sm font-medium rounded-full bg-[#f1f7f0] text-[#2e5b1c] border border-[#dbe8d8]"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Portrait */}
            <div className="flex flex-col items-center">
            <Image
                src="/potrait-animecon.jpg" // your image path
                alt="Shreya Valgot before Animecon user research"
                width={240}  // smaller width
                height={300}
                className="rounded-2xl shadow-md object-cover"
            />
            <p className="mt-3 text-sm italic text-slate-600 text-center max-w-xs">
                Snapped before heading to Animecon — where I conducted in-person user
                research for my AR earthquake safety project, <span className="font-semibold">Arigato</span>.
            </p>
            </div>
      </div>

      {/* --- Why UX --- */}

{/* --- Why UX? (your journey) --- */}
<div className="mt-24">
  <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
    Why UX?
  </h3>
  <div className="mx-auto max-w-3xl text-slate-700 leading-7 text-[15px] space-y-5">
    <p>
      My background is in <span className="font-semibold">Computer Science</span>, 
      where I was fascinated by algorithms, system structures, and how things work 
      behind the scenes. Even now, I explore AI tools and experiment with emerging 
      trends like <span className="font-semibold">AI agents as a service</span> — 
      because I love understanding the logic that powers technology.
    </p>
    <p>
      UX design is different. It’s the one field where I can happily work{" "}
      <span className="font-semibold">seven days a week</span> and still feel energized.
      UX combines everything I value: empathy for people, solving real problems, and
      creating designs that make life smoother.
    </p>
    <p>
      For me, UX isn’t just a job — it’s closer to how{" "}
      <span className="italic">a CEO feels about their company</span>. When you love
      what you build, work and growth become the same thing. That’s what UX is to me:{" "}
      <span className="font-semibold">a lifelong journey of learning, testing, and improving.</span>
    </p>
  </div>
</div>

{/* --- How I Approach UX (your philosophy) --- */}
<div className="mt-24">
  <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
    How I Approach UX
  </h3>
  <div className="grid md:grid-cols-2 gap-8">
    {/* Empathetic Lens */}
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="font-semibold text-[#437029] text-lg">Empathetic Lens</h4>
      <p className="mt-2 text-slate-700 leading-7 text-[15px]">
        I always start by researching user issues and{" "}
        <span className="font-semibold">finding the right problems</span>.
        For me, identifying the correct problem is the most important step
        a designer can take. Seeing from an empathetic perspective allows me
        to uncover pain points that truly matter.
      </p>
    </div>

{/* Business Lens */}
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="font-semibold text-[#437029] text-lg">Business Lens</h4>
      <p className="mt-2 text-slate-700 leading-7 text-[15px]">
        Today, users have no patience for confusing products. Frustrated users
        quickly leave, which means lost revenue. I see UX as the bridge:{" "}
        <span className="font-semibold">
          solving user problems increases engagement, and that directly
          drives growth
        </span>
        . This balance excites me and keeps me learning every day.
      </p>
    </div>
  </div>
</div>






        {/* --- Skills & Tools --- */}
<div className="mt-24">
  <h3 className="text-2xl font-semibold text-slate-900 mb-12 text-center">
    Skills & Tools
  </h3>

  {/* same outer container as the rest of the page */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-16">

    {/* Col 1 — left aligned */}
    <div className="max-w-[38ch]">
      <h4 className="font-semibold text-[#437029] mb-4">UX Research & Testing</h4>
      <ul className="space-y-2 text-slate-700 text-sm leading-6">
        <li>• User Research (Generative, Secondary, Ethnographic, Surveys)</li>
        <li>• Usability Testing (Moderated / Unmoderated, Task Analysis)</li>
        <li>• Quantitative Analysis (SUS, HARUS, SPSS)</li>
        <li>• Qualitative Analysis (Semi-structured Interviews, Thematic Analysis)</li>
        <li>• Heuristic Evaluation & A/B Testing</li>
        <li>• Accessibility Testing (WCAG 2.2)</li>
      </ul>
    </div>

    {/* Col 2 — centered in its cell so it's directly under the heading */}
    <div className="max-w-[38ch] mx-auto">
      <h4 className="font-semibold text-[#437029] mb-4">UX/UI Design & Process</h4>
      <ul className="space-y-2 text-slate-700 text-sm leading-6">
        <li>• Wireframing & Prototyping</li>
        <li>• Information Architecture</li>
        <li>• Interaction Design</li>
        <li>• Design Systems (Material 3, iOS HIG)</li>
        <li>• Web Content Accessibility Guidelines (WCAG 2.2)</li>
        <li>• AI in UX Processes</li>
      </ul>
    </div>

{/* Col 3 — shifted left */}
<div className="max-w-[38ch] md:ml-[40px]">
  <h4 className="font-semibold text-[#437029] mb-4">Technical Skills & Tools</h4>
  <ul className="space-y-2 text-slate-700 text-sm leading-6">
    <li>• Figma,</li>
    <li>• Adobe Suite</li>
    <li>• SPSS</li>
    <li>• Notion, Trello, Pitch</li>
    <li>• Microsoft Office, Teams, Outlook</li>
    <li>• HTML, CSS, Python</li>
    <li>• Windows & macOS</li>
    <li>• Remote Team Collaboration</li>
  </ul>
</div>


  </div>
</div>

<br></br>
<br></br>




{/* --- Achievements --- */}
<div className="mt-24">
  <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
    Achievements
  </h3>

  {/* Featured MUN card */}
{/* Featured MUN card */}
<div className="grid md:grid-cols-2 gap-8 items-center rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-10 mb-12">
  <div className="flex justify-center">
    <Image
      src="/mun.jpg"
      alt="GNITS MUN"
      width={320}
      height={240}
      className="rounded-xl shadow-md object-cover brightness-110 contrast-110"
    />
  </div>
  <div>
    <div className="flex items-center gap-2 mb-2">
      <Newspaper size={22} className="text-[#437029]" />
      <h4 className="font-semibold text-[#437029]">
        Best Reporter – GNITS Model United Nations
      </h4>
    </div>
    <p className="text-slate-700 text-sm leading-6">
      At GNITS MUN, an international debate simulation where delegates represent
      countries and the press documents proceedings, I had to adapt quickly
      as part of the Press Corps. Over three days, I produced{" "}
      <span className="font-semibold">15+ reports in multiple styles</span> —
      satirical, statistical, narrative — while{" "}
      <span className="font-semibold">researching and fact-checking every claim</span>{" "}
      made by delegates.  
      <br /><br />
      On the final day, I presented targeted questions that revealed contradictions
      and held delegates accountable.{" "}
      <span className="font-semibold">
        This earned me Best Reporter and highlighted my adaptability, keen
        observation, and critical thinking.
      </span>
    </p>
  </div>
</div>

  {/* Other achievements */}
  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        title: "Best Project – Arigato App",
        desc: "Selected for presentation for its innovative design and UX process.",
        icon: Award,
      },
      {
        title: "100% Tuition Scholarship – B.Tech",
        desc: "Awarded full scholarship for academic excellence.",
        icon: GraduationCap,
      },
      {
        title: "State Rank – EAMCET",
        desc: "Ranked 4,003 out of 150,000+ candidates.",
        icon: BarChart2,
      },
      {
        title: "Top 3 – Junior College",
        desc: "Recognized in the top 3 performers of my college.",
        icon: Medal,
      },
      {
        title: "Volunteer Work",
        desc: "Assisted visually impaired students by writing their exam papers.",
        icon: HeartHandshake,
      },
    ].map((ach) => (
      <div
        key={ach.title}
        className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex gap-4 items-start"
      >
        {/* Icon */}
        <ach.icon size={28} className="text-[#437029] flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-[#437029]">{ach.title}</h4>
          <p className="mt-2 text-sm text-slate-700 leading-6">{ach.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>

   
   
   <br></br>
   <br></br>



<div className="mt-24">
  <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
    Books I’ve Learned From
  </h3>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Don’t Make Me Think */}
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex gap-4 items-start">
        <Image
          src="/dont-make-me-think.jpeg"
          alt="Don't Make Me Think"
          width={80}
          height={120}
          className="rounded shadow-sm object-cover"
        />
        <div>
          <h4 className="font-semibold text-[#437029]">
            Don’t Make Me Think — Steve Krug
          </h4>
          <p className="mt-2 text-sm text-slate-700 leading-6">
            This book permanently reshaped my view of usability. Krug showed me
            that <span className="font-semibold">testing is non-negotiable</span>
            and that users don’t read — they scan. That means not every button can
            scream importance.  
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-700 leading-6">
        I apply Krug’s <span className="font-semibold">“Third Law of Usability” — remove half the words, then remove half again</span> 
        — to keep content lean. It taught me that navigation isn’t just a feature,
        it is the website: users must always know where they are and how to get home.  
        <br /><br />
        Overall, this book gave me a practical, almost ruthless clarity: design isn’t about 
        adding more; it’s about removing until only what matters remains.
      </p>
    </div>

    {/* Five Dysfunctions of a Team */}
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex gap-4 items-start">
        <Image
          src="/five-dysfunctions-of-a-team.jpeg"
          alt="The Five Dysfunctions of a Team"
          width={80}
          height={120}
          className="rounded shadow-sm object-cover"
        />
        <div>
          <h4 className="font-semibold text-[#437029]">
            The Five Dysfunctions of a Team — Patrick Lencioni
          </h4>
          <p className="mt-2 text-sm text-slate-700 leading-6">
            This book showed me that strong teams amplify individual potential and
            directly shape outcomes. Trust, communication, and clarity make 
            collaboration resilient.  
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-700 leading-6">
        I experienced this with my <span className="font-semibold">Arigato team</span>.
        At the start, I was new to Figma. By openly sharing my strengths in UX and 
        weaknesses in UI, I gained support where I needed it most, while contributing 
        heavily in research and feasibility. That honesty boosted my confidence and 
        helped us deliver better together.  
        <br /><br />
        It reinforced that discussing weaknesses isn’t a setback — it builds resilience. 
        Arigato’s “Best Project” win was proof that when teams trust and support each 
        other, individuals thrive too.
      </p>
    </div>
  </div>

  {/* Second row: The Mom Test */}
  <div className="grid md:grid-cols-2 gap-8 mt-8">
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex gap-4 items-start">
        <Image
          src="/the-mom-test.png"
          alt="The Mom Test"
          width={80}
          height={120}
          className="rounded shadow-sm object-cover"
        />
        <div>
          <h4 className="font-semibold text-[#437029]">
            The Mom Test — Rob Fitzpatrick{" "}
            <span className="italic text-slate-500 text-sm">(Currently Reading)</span>
          </h4>
          <p className="mt-2 text-sm text-slate-700 leading-6">
            A practical guide on how to ask better questions in user and product research. 
            It prevents false validation by focusing on real user behavior instead of polite opinions.  
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-700 leading-6">
        I realized mistakes I’d made before — like in{" "}
        <span className="font-semibold">AccessMuse</span> when I asked,
        “Would you use this app?” — which only invites false answers. The book is
        teaching me to frame questions around what users actually do and their real
        struggles. Although written for startups, its lessons are directly shaping
        how I conduct UX research: focusing less on what people say, and more on what
        they need.
      </p>
    </div>
  </div>
</div>





     {/* --- Closing statement --- */}
      <div className="mt-24 text-center">
        <p className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed max-w-2xl mx-auto">
          UX is not just work for me — it’s something I want to keep learning,
          applying, and growing in for decades. Solving user problems and making
          experiences easier is what drives me every day.
        </p>
      </div>
    </section>
  );
}
