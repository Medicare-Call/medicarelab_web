import { Award, Rocket, Trophy, Star, Sparkles } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const awards = [
  {
    year: "2025",
    title: "학생창업유망팀 300+ 성장트랙A 교육부장관 인증서 획득",
    featured: true,
  },
  { title: "2025 과학기술정보통신부 주관 ICT 디바이스 공모전 우수상 수상", icon: Trophy },
  { title: "2025 대학연합 AI 아이디어톤 대상 수상", icon: Trophy },
  { title: "2025 KUIT 5기 데모데이 대상 수상", icon: Trophy },
  { title: "2025 한국창업학회 학생창업경진대회 최우수상 수상", icon: Star },
  { title: "2025 시니어 이슈 학회 AI 아이디어톤 장려상 수상", icon: Award },
];

const supports = [
  {
    year: "2026",
    title: "건국대학교 캠퍼스타운 입주기업 최종선정",
    featured: true,
  },
  { title: "2025 건국대학교 예비창업패키지 사전인큐베이팅 수료", icon: Rocket },
  { title: "실감미디어 혁신융합대학 사업단 창업동아리 지원사업", icon: Sparkles },
  { title: "KU창업클럽 3기 / 4기 학생창업팀", icon: Star },
];

export function TractionSection() {
  return (
    <section id="traction" className="py-[80px] md:py-[120px] bg-[#f4fcf8]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 bg-white text-[#00b859] font-[700] rounded-full text-[13px] mb-5 tracking-wide shadow-sm">
              Traction
            </div>
            <h2 className="text-[26px] md:text-[34px] font-[700] leading-[1.35] text-[#313131]">
              증명된 실행력과 성과
            </h2>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {/* Awards Column */}
          <SectionReveal>
            <div>
              <h3 className="text-[18px] font-[700] mb-6 flex items-center gap-2.5 text-[#313131]">
                <div className="w-9 h-9 rounded-[10px] bg-[#00b859] flex items-center justify-center">
                  <Trophy className="text-white" size={18} />
                </div>
                성과
              </h3>
              <div className="space-y-3">
                {awards.map((a, i) =>
                  a.featured ? (
                    <div
                      key={i}
                      className="p-6 bg-white rounded-[18px] card-shadow-lg border-l-[5px] border-[#00b859]"
                    >
                      <div className="text-[13px] text-[#00b859] font-[700] mb-1">
                        {a.year}
                      </div>
                      <div className="font-[700] text-[16px] text-[#313131] leading-[1.5]">
                        {a.title}
                      </div>
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="p-5 bg-white rounded-[16px] card-shadow flex items-start gap-3 hover:shadow-md transition-shadow"
                    >
                      {a.icon && (
                        <a.icon size={16} className="text-[#00b859] shrink-0 mt-0.5" />
                      )}
                      <span className="text-[#313131] font-[600] text-[14px] leading-[1.5]">
                        {a.title}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </SectionReveal>

          {/* Support Column */}
          <SectionReveal delay={0.12}>
            <div>
              <h3 className="text-[18px] font-[700] mb-6 flex items-center gap-2.5 text-[#313131]">
                <div className="w-9 h-9 rounded-[10px] bg-[#00b859] flex items-center justify-center">
                  <Rocket className="text-white" size={18} />
                </div>
                지원사업
              </h3>
              <div className="space-y-3">
                {supports.map((s, i) =>
                  s.featured ? (
                    <div
                      key={i}
                      className="p-6 bg-white rounded-[18px] card-shadow-lg border-l-[5px] border-[#00b859]"
                    >
                      <div className="text-[13px] text-[#00b859] font-[700] mb-1">
                        {s.year}
                      </div>
                      <div className="font-[700] text-[16px] text-[#313131] leading-[1.5]">
                        {s.title}
                      </div>
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="p-5 bg-white rounded-[16px] card-shadow flex items-start gap-3 hover:shadow-md transition-shadow"
                    >
                      {s.icon && (
                        <s.icon size={16} className="text-[#00b859] shrink-0 mt-0.5" />
                      )}
                      <span className="text-[#313131] font-[600] text-[14px] leading-[1.5]">
                        {s.title}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
