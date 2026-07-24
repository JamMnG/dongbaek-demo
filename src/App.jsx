import { useState } from 'react';

const flowSteps = [
  { id: '01', title: '캐시백', description: '동백전으로 참여 가맹점 이용' },
  { id: '02', title: '결제 이력', description: '가게별 단골 신호를 쌓음' },
  { id: '03', title: '단골 관계', description: '다음 방문을 자연스럽게 만듦' },
];

const solutionCards = [
  { id: '01', title: '결제', description: '동백전으로 참여 가맹점 이용' },
  { id: '02', title: '축적', description: '가게별 단골 진행도 갱신' },
  { id: '03', title: '발견', description: '기회가 큰 다음 골목 추천' },
  { id: '04', title: '재방문', description: '캐시백 이후에도 관계 유지' },
];

const whyItems = [
  {
    id: '01',
    title: '문제정의',
    description: '한도 소진 뒤 결제수단 이탈을 정확히 겨냥',
  },
  {
    id: '02',
    title: '데이터 30점',
    description: '거래·소비·생활인구를 기능과 1:1 연결',
  },
  {
    id: '03',
    title: '차별성',
    description: '가게별 스탬프가 아닌 도시 단위 단골 통장',
  },
  {
    id: '04',
    title: '구현',
    description: '데이터 확인 여부에 따라 기능이 자동 전환',
  },
];

const previewSignals = [
  { name: '모모 베이커리', visits: '1년 더 방문', progress: 80, category: '음식·카페' },
  { name: '온누리 약국', visits: '2년 더 방문', progress: 58, category: '의료·약국' },
  { name: '소담 세탁소', visits: '3년 더 방문', progress: 40, category: '생활서비스' },
];

export default function App() {
  const [demoTab, setDemoTab] = useState('current');

  return (
    <div className="min-h-screen bg-[#F6F2E8] text-[#173A30] antialiased selection:bg-[#D8F35A] selection:text-[#173A30]">
      <main>
        <section className="relative overflow-hidden bg-[#123E33] text-white">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -left-20 top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute left-4 top-64 h-[28rem] w-[28rem] rounded-full border border-white/10" />
            <div className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
            <div className="lg:col-span-7 lg:pr-4">
              <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-[#D4F05C] uppercase">
                <span>DIVE 2026</span>
                <span className="text-white/45">BNK금융지주 트랙</span>
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-[5.5rem]">
                캐시백은 끝나도,
                <br />
                단골은 남게.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                동백전 결제 이력을 부산 단골 통장으로 바꾸고, 데이터로 다음 골목을
                발견하는 지역화폐 활성화 서비스
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#solution"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#D8F35A] px-6 py-3.5 text-sm font-extrabold text-[#173A30] shadow-[0_16px_30px_rgba(0,0,0,0.16)] transition-transform hover:-translate-y-0.5"
                >
                  3분 안에 이해하기
                  <span>↓</span>
                </a>
                <a
                  href="#preview"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/16 px-6 py-3.5 text-sm font-semibold text-white/78 transition-colors hover:bg-white/6"
                >
                  인터랙티브 데모 보기
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <div className="relative w-full max-w-[28rem] rounded-[1.75rem] bg-[#F2EEE2] p-7 text-[#173A30] shadow-[0_28px_0_rgba(0,0,0,0.18)] rotate-1">
                <div className="flex items-center justify-between text-xs font-semibold text-[#2E6A56]">
                  <span>지금, 캐시백이 끝나는 순간</span>
                  <span className="inline-flex gap-2 text-[#98A190]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#A8B3A0]">W</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#A8B3A0]">N</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#A8B3A0]">N</span>
                  </span>
                </div>

                <div className="mt-14 text-center">
                  <div className="text-[5.6rem] font-black leading-none tracking-[-0.08em]">
                    48.5
                    <span className="text-5xl font-extrabold text-[#FF7C63]">%</span>
                  </div>
                  <p className="mt-3 text-xl font-bold">다른 결제수단으로 이동</p>
                </div>

                <div className="mt-12 border-t border-black/10 pt-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-black/70">대체수단 1위</span>
                    <span className="font-bold text-[#FF7C63]">신용카드 54.0%</span>
                  </div>
                  <p className="mt-4 text-xs text-black/42">출처: BDI 2025 설문 2,000명, p.62</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10 bg-[#D8F35A] px-4 py-4 text-[#173A30] sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 text-center text-sm font-semibold sm:grid-cols-3 sm:gap-6">
              {flowSteps.map((step, index) => (
                <div key={step.id} className="flex items-center justify-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#7A8D30] text-xs font-bold">
                    {step.id}
                  </span>
                  <div>
                    <div>{step.title}</div>
                    <div className="text-xs font-normal text-[#173A30]/70">{step.description}</div>
                  </div>
                  {index < flowSteps.length - 1 ? <span className="hidden text-2xl font-light sm:block">→</span> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="bg-[#F6F2E8] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <p className="text-sm font-extrabold tracking-[0.28em] text-[#2E6A56] uppercase">The Solution</p>
                <h2 className="mt-5 max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-[5.5rem]">
                  한 번의 결제를
                  <br />
                  다음 방문으로
                  <br />
                  이어주는 구조
                </h2>
                <p className="mt-8 max-w-lg text-base leading-8 text-[#5F675E] sm:text-lg">
                  새 예산을 더 쓰는 대신, 이미 만들어진 결제 이력과 QR 수수료 절감 여력을
                  연결합니다.
                </p>
              </div>

              <div className="lg:col-span-7 lg:pt-8">
                <div className="relative min-h-[46rem] rounded-[2rem] border border-[#E6DDC8] bg-transparent p-4 sm:p-8">
                  <div className="hidden lg:block">
                    <div className="absolute left-20 top-16 w-[20rem] rounded-2xl bg-white p-6 shadow-[0_12px_28px_rgba(23,58,48,0.08)]">
                      <p className="text-sm font-bold text-[#2E6A56]">결제</p>
                      <h3 className="mt-3 text-2xl font-bold">동백전으로 참여 가맹점 이용</h3>
                      <p className="mt-4 text-sm text-[#6C756D]">가까운 가맹점 결제만으로 단골 신호가 쌓입니다.</p>
                    </div>

                    <div className="absolute right-8 top-16 w-[20rem] rounded-2xl bg-white p-6 shadow-[0_12px_28px_rgba(23,58,48,0.08)]">
                      <p className="text-sm font-bold text-[#2E6A56]">축적</p>
                      <h3 className="mt-3 text-2xl font-bold">가게별 단골 진행도 갱신</h3>
                      <p className="mt-4 text-sm text-[#6C756D]">개별 가게가 아닌 도시 단위 관계를 보여줍니다.</p>
                    </div>

                    <div className="absolute bottom-24 left-8 w-[20rem] rounded-2xl bg-white p-6 shadow-[0_12px_28px_rgba(23,58,48,0.08)]">
                      <p className="text-sm font-bold text-[#2E6A56]">재방문</p>
                      <h3 className="mt-3 text-2xl font-bold">캐시백 이후에도 관계 유지</h3>
                      <p className="mt-4 text-sm text-[#6C756D]">방문 · 재방문 · 다양한 업종 측정으로 연결됩니다.</p>
                    </div>

                    <div className="absolute bottom-24 right-12 w-[20rem] rounded-2xl bg-white p-6 shadow-[0_12px_28px_rgba(23,58,48,0.08)]">
                      <p className="text-sm font-bold text-[#2E6A56]">발견</p>
                      <h3 className="mt-3 text-2xl font-bold">기회가 큰 다음 골목 추천</h3>
                      <p className="mt-4 text-sm text-[#6C756D]">확인되지 않은 QR·혜택·한도 정보는 실제처럼 보이지 않습니다.</p>
                    </div>

                    <div className="absolute left-1/2 top-1/2 flex h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-dashed border-[#A8CFBF]">
                      <div className="flex h-[15rem] w-[15rem] items-center justify-center rounded-full bg-[#184E3F] text-center text-white shadow-[0_0_0_16px_rgba(216,243,90,0.28)]">
                        <div>
                          <p className="text-sm text-[#D8F35A]">부산 전체</p>
                          <p className="mt-3 text-3xl font-black">단골 통장</p>
                          <p className="mt-4 text-sm leading-6 text-white/68">
                            가게가 바뀌어도
                            <br />
                            관계는 한곳에
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 lg:hidden">
                    {solutionCards.map((card) => (
                      <div key={card.id} className="rounded-2xl bg-white p-5 shadow-[0_12px_28px_rgba(23,58,48,0.08)]">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D8F35A] text-sm font-bold">
                            {card.id}
                          </span>
                          <div>
                            <p className="font-bold">{card.title}</p>
                            <p className="text-sm text-[#6C756D]">{card.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="rounded-[2rem] bg-[#184E3F] p-8 text-center text-white">
                      <p className="text-sm text-[#D8F35A]">부산 전체</p>
                      <p className="mt-3 text-3xl font-black">단골 통장</p>
                      <p className="mt-4 text-sm text-white/70">가게가 바뀌어도 관계는 한곳에</p>
                    </div>
                  </div>

                  <div className="mt-[38rem] hidden grid-cols-4 border border-[#E7DDC8] bg-white/40 lg:grid">
                    {whyItems.map((item) => (
                      <div key={item.id} className="min-h-28 border-r border-[#E7DDC8] p-8 last:border-r-0">
                        <div className="text-sm font-bold text-[#2E6A56]">{item.title}</div>
                        <p className="mt-6 max-w-[14rem] text-lg font-semibold text-[#173A30]">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="preview" className="bg-[#123E33] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-sm font-extrabold tracking-[0.28em] text-[#D8F35A] uppercase">Product Preview</p>
              <h2 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-[5.5rem]">
                사용자가 보는 건
                <br />
                분석이 아니라, 다음 행동
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/68">
                아래 토글과 카드를 눌러 핵심 경험을 확인해보세요.
              </p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-6">
                <div className="mx-auto w-full max-w-[28rem] overflow-hidden rounded-[2.2rem] border-[10px] border-[#0D261F] bg-[#F4F0E8] text-[#173A30] shadow-[0_36px_0_rgba(0,0,0,0.18)]">
                  <div className="flex items-center justify-between px-6 pb-2 pt-4 text-xs font-semibold text-[#6C756D]">
                    <span>9:41</span>
                    <span className="flex gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#202926]" />
                      <span className="h-2 w-2 rounded-full bg-[#202926]" />
                    </span>
                  </div>

                  <div className="px-5 pb-6 pt-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#6C756D]">안녕하세요, 수현님</p>
                        <h3 className="mt-2 text-xl font-black">캐시백 이후에도 단골은 계속돼요</h3>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#BFEFD2] text-xl font-black text-[#173A30]">
                        수
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 rounded-2xl bg-[#E7E5DD] p-1 text-sm font-bold">
                      <button
                        type="button"
                        onClick={() => setDemoTab('current')}
                        className={`rounded-xl px-4 py-3 transition ${
                          demoTab === 'current' ? 'bg-[#173A30] text-white shadow-sm' : 'text-[#7B837A]'
                        }`}
                      >
                        적용 중
                      </button>
                      <button
                        type="button"
                        onClick={() => setDemoTab('after')}
                        className={`rounded-xl px-4 py-3 transition ${
                          demoTab === 'after' ? 'bg-[#173A30] text-white shadow-sm' : 'text-[#7B837A]'
                        }`}
                      >
                        소진 후
                      </button>
                    </div>

                    <div className="mt-5 rounded-[1.5rem] bg-[#D8F35A] p-5">
                      <p className="text-sm font-bold text-[#2E6A56]">
                        {demoTab === 'current' ? '캐시백 여유에도' : '캐시백이 끝나도'}
                      </p>
                      <p className="mt-2 text-2xl font-black leading-tight">
                        {demoTab === 'current'
                          ? '지금 3곳에서 단골 관계가 자라고 있어요'
                          : '지금 3곳에서 단골 관계가 유지되고 있어요'}
                      </p>
                    </div>

                    <div className="mt-5">
                      <div className="mb-4 flex items-center justify-between">
                        <h4 className="text-lg font-black">내 단골 통장</h4>
                        <span className="text-sm text-[#6C756D]">전체보기 →</span>
                      </div>

                      <div className="space-y-3">
                        {previewSignals.map((signal) => (
                          <div key={signal.name} className="rounded-2xl border border-[#E5DDD0] bg-white p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7DAD1] text-lg font-black text-[#C56C5E]">
                                  {signal.name.slice(0, 1)}
                                </div>
                                <div>
                                  <p className="font-bold">{signal.name}</p>
                                  <p className="text-xs text-[#8B9188]">{signal.category}</p>
                                </div>
                              </div>
                              <span className="text-xs font-bold text-[#2E6A56]">{signal.visits}</span>
                            </div>
                            <div className="mt-4 h-1.5 rounded-full bg-[#EBE6D8]">
                              <div className="h-full rounded-full bg-[#2E6A56]" style={{ width: `${signal.progress}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 rounded-[1.4rem] bg-[#FF7C63] p-4 text-white shadow-md">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs text-white/75">데이터가 찾은 다음 골목</p>
                            <p className="mt-1 text-lg font-bold">연산동 생활서비스 3곳 보기</p>
                          </div>
                          <span className="text-2xl">↗</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 lg:pt-12">
                <div className="space-y-10">
                  {[
                    {
                      n: '1',
                      title: '상태에 맞는 이유',
                      text: '캐시백 적용 전에는 첫 방문을, 소진 후에는 쌓인 단골 관계를 강조합니다.',
                    },
                    {
                      n: '2',
                      title: '다음 행동은 한 문장',
                      text: '“한 번 더 방문”처럼 사용자가 바로 이해하고 움직일 수 있게 만듭니다.',
                    },
                    {
                      n: '3',
                      title: '정직한 데모',
                      text: '확인되지 않은 QR·혜택·한도 정보는 실제인 것처럼 보여주지 않습니다.',
                    },
                  ].map((item) => (
                    <div key={item.n} className="border-b border-white/12 pb-8">
                      <div className="flex items-start gap-5">
                        <span className="mt-1 flex h-12 w-12 items-center justify-center rounded-full border border-white/18 text-lg font-light text-white/72">
                          {item.n}
                        </span>
                        <div className="max-w-xl">
                          <h3 className="text-3xl font-black tracking-[-0.04em]">{item.title}</h3>
                          <p className="mt-4 text-lg leading-8 text-white/68">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="bg-[#F6F2E8] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-sm font-extrabold tracking-[0.28em] text-[#2E6A56] uppercase">Why It Wins</p>
              <h2 className="mt-5 max-w-lg text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-[5.5rem]">
                평가기준과
                <br />
                기능이 바로
                <br />
                연결됩니다
              </h2>
              <p className="mt-8 max-w-md text-lg leading-8 text-[#5F675E]">
                가설 → 지표 → 기능 → 검증의 한 줄 논리로 데이터 기반 문제해결 30점을 정면으로
                겨냥합니다.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-0 border-t border-[#E4DAC7]">
                {whyItems.map((item) => (
                  <div key={item.id} className="grid gap-4 border-b border-[#E4DAC7] py-8 lg:grid-cols-[72px_1fr_56px] lg:items-center">
                    <div className="text-sm font-bold text-[#2E6A56]">{item.id}</div>
                    <div>
                      <h3 className="text-2xl font-black tracking-[-0.03em]">{item.title}</h3>
                      <p className="mt-3 text-base leading-7 text-[#6D756A]">{item.description}</p>
                    </div>
                    <div className="justify-self-start text-3xl text-[#FF7C63] lg:justify-self-end">↗</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#123E33] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <p className="text-sm font-extrabold tracking-[0.28em] text-[#D8F35A] uppercase">Shared Value</p>
                <h2 className="mt-5 max-w-3xl text-5xl font-black leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-[5.25rem]">
                  한 서비스,
                  <br />
                  세 주체의 분명한 가치
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="max-w-xl text-lg leading-8 text-white/66 lg:ml-auto lg:pt-8">
                  누구에게도 새로운 지출을 요구하지 않고, 각자가 이미 가진 자산을 더 잘 연결합니다.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
              {[
                {
                  role: '소비자',
                  title: '혜택이 끝나도 남는 이유',
                  text: '부산 어디서 결제해도 한곳에 쌓이는 단골 관계와 다음 행동',
                  chips: ['단골 진행도', '미방문 골목 발견'],
                },
                {
                  role: '소상공인',
                  title: '막연한 홍보 대신 보이는 단골',
                  text: '수수료 절감과 단골 데이터를 활용한 선택형 혜택 · 노출 기회',
                  chips: ['재방문 신호', '시간대 혜택 제안'],
                },
                {
                  role: '부산시 · BNK',
                  title: '예산이 아니라 관계로 만드는 지속성',
                  text: '놓친 소비기회를 찾아 정책 대상을 정하고 QR 생태계를 확장',
                  chips: ['정책 타기팅', '성과 추적'],
                },
              ].map((card, index) => (
                <article key={card.role} className="min-h-[28rem] bg-[#123E33] p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-bold text-[#D8F35A]">{card.role}</p>
                      <h3 className="mt-6 max-w-sm text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white">
                        {card.title}
                      </h3>
                      <p className="mt-6 max-w-sm text-base leading-8 text-white/60">{card.text}</p>
                    </div>
                    <span className="text-white/30">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  <div className="mt-16 border-t border-white/12 pt-6">
                    <div className="flex flex-wrap gap-3">
                      {card.chips.map((chip) => (
                        <span key={chip} className="rounded-full border border-white/16 px-4 py-2 text-xs font-medium text-white/80">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
